import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { ControllerComponent } from "src/app/controller/controller/controller.component";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"],
})
export class LoginComponent extends ControllerComponent implements OnInit {
    // titulo pagina
    // forms
    formLogin!: FormGroup;
    formControlsLogin!: string[];
    formPesquisaRapida!: FormGroup;
    formControlsPesquisaRapida!: string[];
    formRecuperarSenha!: FormGroup;
    formControlsRecuperarSenha!: string[];
    formSolicitarAcesso: object = {};
    
    // listas
    listaFabricantes: any;
    listaPecas: any;
    listaErros:any = [];
    
    //booleans
    consultou: any;
    manualValidation: any;
    recuperouSenha: any;
    solicitouAcesso: any;
    logado: any;
    
    // input custom
    inputCnpj: string = "";
    inputRazaoSocial: string = "";
    inputCidade: string = "";
    inputEstado: string = "";
    inputNumeroLojas: string = "";
    inputNome: string = "";
    inputTelefone: string = "";
    inputEmail: string = "";
    
    constructor(private formBuilder: FormBuilder, private router: Router) {
        super();
        this.createForm();
        // this.tituloPagina = "Login";
    }

    async ngOnInit() {
        this.getListaFabricantes();
    }

    // Geral ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    fechou() {
        // modal recuperar senha
        this.recuperouSenha = "";
        this.formRecuperarSenha.reset();

        // modal solicitar acesso
        this.consultou = "";
        this.solicitouAcesso = "";
        this.formSolicitarAcesso = {};
        this.limparInputsSolicitarAcesso();
    }

    createForm() {
        // form login
        this.formLogin = this.formBuilder.group(
            {
                nome_usuario: [""],
                senha_usuario: [""],
            }
            // { validators: [PasswordValidators.confirmPassword] }
        );
        this.formControlsLogin = Object.keys(this.formLogin.controls);

        // form pesquisa rapida
        this.formPesquisaRapida = this.formBuilder.group({
            fabricante: [""],
            codigo_peca: [""],
        });
        this.formControlsPesquisaRapida = Object.keys(this.formPesquisaRapida.controls);

        // form recuperar senha
        this.formRecuperarSenha = this.formBuilder.group({
            nome_usuario: [""],
            email_usuario: [""],
        });
        this.formControlsRecuperarSenha = Object.keys(this.formRecuperarSenha.controls);
    }

    // Logar ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    async sendLogin() {
        let resposta = await this.postInfoSemToken(this.paths.login, this.formLogin.value);
        if (resposta.status === 200) {
            this.manualValidation = true;
            this.router.navigate(["/dashboard"]);
            this.logado = true;
            localStorage.setItem("logado", this.logado);
            localStorage.setItem("token", resposta.data.data.token);
        } else {
            this.formLogin.controls["nome_usuario"].setErrors(null);

            this.manualValidation = false;
            this.listaErros = resposta.response;
            
            
            if (this.listaErros.status === 401){
                this.formLogin.controls["nome_usuario"].setErrors({valid: false });
                this.formLogin.controls["senha_usuario"].setErrors({ erro: this.listaErros.data.data, valid: false });
                this.mensagemToast = resposta.response.data.message;

            }else if(this.listaErros.status === 400){
                this.listaErros.data.data.forEach((item:any) => {
                    switch (item["campo"]) {
                        case "nome_usuario": {
                            this.formLogin.controls["nome_usuario"].setErrors({ erro: item["mensagem"], valid: false });
                            break;
                        }
                        case "senha_usuario": {
                            this.formLogin.controls["senha_usuario"].setErrors({ erro: item["mensagem"], valid: false });
                            break;
                        }
                    }
                });
                this.mensagemToast = resposta.response.data.message;
            }
            this.logado = false;
            localStorage.setItem("logado", this.logado);

            this.corToast = "danger";
            this.posicaoToast = "bottom-center";
            this.tituloToast = "Falhou!";
            this.corTextoToast = "text-black";
        }
        this.toggleToast();
    }

    // Recuperar senha ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    async recuperarSenha() {
        let resposta = await this.postInfoSemToken(this.paths.recuperarSenha, this.formRecuperarSenha.value);

        if (resposta.status === 200) {
            this.recuperouSenha = true;
        } else {
            this.recuperouSenha = false;
        }
    }

    // Solicitar Acesso ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    async consultarCnpj() {
        let objCnpj = { cnpj: this.inputCnpj };
        let resposta = await this.postInfoSemToken(this.paths.consultaCnpj, objCnpj);
        this.inputRazaoSocial = resposta.data.data.razao_social;

        this.inputCidade = resposta.data.data.estabelecimento.cidade.nome;

        this.inputEstado = resposta.data.data.estabelecimento.estado.nome;

        this.consultou = true;
    }

    customFormSolicitacao() {
        this.formSolicitarAcesso = {
            // loja
            cnpj: this.inputCnpj,
            razao_social: this.inputRazaoSocial,
            cidade: this.inputCidade,
            uf: this.inputEstado,
            qtde_lojas: this.inputNumeroLojas,
            // contato
            nome_responsavel: this.inputNome,
            telefone_contato: this.inputTelefone,
            email_responsavel: this.inputEmail,
        };
    }

    async enviarSolicitacao() {
        this.customFormSolicitacao();

        let resposta = await this.postInfoSemToken(this.paths.solicitacaoAcesso, this.formSolicitarAcesso);
        if (resposta.status === 200) {
            this.solicitouAcesso = true;
        } else {
            this.solicitouAcesso = false;
        }
    }

    limparInputsSolicitarAcesso() {
        this.inputCnpj = "";
        this.inputRazaoSocial = "";
        this.inputCidade = "";
        this.inputEstado = "";
        this.inputNumeroLojas = "";
        this.inputNome = "";
        this.inputTelefone = "";
        this.inputEmail = "";
    }

    // Pesquisa rapida ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    async getListaFabricantes() {
        let resposta = await this.postInfoSemToken(this.paths.listaFabricante);
        this.listaFabricantes = resposta.data.data;
    }

    async consultarPecas() {
        let resposta = await this.postInfoSemToken(this.paths.consulta, this.formPesquisaRapida.value);
        this.listaPecas = resposta.data.data;
    }
}
