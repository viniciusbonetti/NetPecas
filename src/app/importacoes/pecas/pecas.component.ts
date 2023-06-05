import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ControllerComponent } from "src/app/controller/controller/controller.component";

@Component({
    selector: "app-pecas",
    templateUrl: "./pecas.component.html",
    styleUrls: ["./pecas.component.scss"],
})
export class PecasComponent extends ControllerComponent implements OnInit {
    // forms
    formArquivoImportacao!: FormGroup;

    // Booleans
    manualValidation: any;
    erro: any;

    // listas
    listaErros = [];

    // IDs
    nomeArquivo:string = '';
    teste:string = '';

    constructor(private formBuilder: FormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.createForm();
    }

    // Geral /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    createForm() {
        this.formArquivoImportacao = this.formBuilder.group(
            {
                arquivo_importacao: [""],
            }
            // { validators: [PasswordValidators.confirmPassword] }
        );
    }

    // Enviar imports ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    onFileChange(event:any) {

  

        if (event.target.files.length > 0) {
    
          const file = event.target.files[0];
    
          this.formArquivoImportacao.patchValue({
    
            arquivo_importacao: file
    
          });
    
        }
    
      }
    async sendArquivoImportacao() {
        console.log(
            this.formArquivoImportacao
        );
        
        this.nomeArquivo = this.formArquivoImportacao.controls['arquivo_importacao'].value.name.split('.').pop();

        if(this.nomeArquivo === "txt" || this.nomeArquivo === 'xls'){
            let resposta = await this.postInfoArquivo(this.paths.importaProduto, this.formArquivoImportacao.value);
            if (resposta.status === 200) {
                this.manualValidation = true;
                this.corToast = "success";
                this.posicaoToast = "bottom-center";
                this.tituloToast = "Sucesso!";
                this.corTextoToast = "text-black";
                this.mensagemToast = "Novo produto cadastrado!";
            } else {
                this.listaErros = resposta.response.data.data;
                this.manualValidation = false;
                this.erro = true
    
                this.corToast = "danger";
                this.posicaoToast = "bottom-center";
                this.tituloToast = "Falhou!";
                this.corTextoToast = "text-black";
                this.mensagemToast = resposta.response.data.message;
            }            
        } else if(this.nomeArquivo === ''){
            this.manualValidation = false;
            this.erro = true

            this.corToast = "danger";
            this.posicaoToast = "bottom-center";
            this.tituloToast = "Falhou!";
            this.corTextoToast = "text-black";
            this.mensagemToast = 'O campo Arquivo é obrigatório.'    
        } else if (this.nomeArquivo !== 'txt' && this.nomeArquivo !== 'xls'){
            this.manualValidation = false;
            this.erro = true

            this.corToast = "danger";
            this.posicaoToast = "bottom-center";
            this.tituloToast = "Falhou!";
            this.corTextoToast = "text-black";
            this.mensagemToast = 'Extensão de arquivo não suportada.'            
        }
        this.toggleToast();
    }

    // lista Erros ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    setErros() {
        this.listaErros.forEach((item) => {
            switch (item["campo"]) {
                case "arquivo_importacao": {
                    this.formArquivoImportacao.controls["arquivo_importacao"].setErrors({ erro: item["mensagem"], valid: false });
                    break;
                }
            }
        });
    }
}
