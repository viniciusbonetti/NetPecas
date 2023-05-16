import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { IColumn, IItem } from "@coreui/angular-pro/lib/smart-table/smart-table.type";
import { ControllerComponent } from "src/app/controller/controller/controller.component";

@Component({
    selector: "app-fabricante",
    templateUrl: "./fabricante.component.html",
    styleUrls: ["./fabricante.component.scss"],
})
export class FabricanteComponent extends ControllerComponent implements OnInit {
    // forms
    formCadastrarFabricante!: FormGroup;
    formCadastrarNegocio!: FormGroup;
    formEditarNegocio!: FormGroup;

    // listas
    listaFabricantes: IItem[];
    listaNegocio: IItem[];
    listaModalResumoFabricante: IItem[];
    listaErros = [];

    // booleans
    novoCadastro: boolean = false;
    cadastrarNegocio: boolean = false;
    editarItemNegocio: boolean = false;
    manualValidation: any;
    teste: boolean= false;

    // Ids
    idFabricante: string = "";
    codigoFabricante: string = "";
    idNegocio: string = "";
    nomeFabricanteModal: string ='';
    codigoFabricanteModal: string ='';
    dadosFabricante: any;

    constructor(private formBuilder: FormBuilder) {
        super();
    }

    ngOnInit() {
        this.createForm();
        this.getFabricante();
    }

    // Geral //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    createForm() {
        // form cadastrar/editar fabricante
        this.formCadastrarFabricante = this.formBuilder.group(
            {
                codigo_fabricante: [""],
                nome_fabricante: [""],
                tipo_fabricante: [""],
                data_ultima_carga: [""],
                status_fabricante: ["",],
            }
            // { validators: [PasswordValidators.confirmPassword] }
        );
        this.formCadastrarFabricante.controls["data_ultima_carga"].disable();
        // this.formControlsCadastrarFabricante = Object.keys(this.formCadastrarFabricante.controls);

        // form cadastrar negocio
        this.formCadastrarNegocio = this.formBuilder.group({
            codigo_fabricante: [""],
            codigo_negocio: [""],
            tipo_negocio: [""],
            descricao_negocio: [""],
        });
        this.formCadastrarNegocio.disable();

        // form editar negocio
        this.formEditarNegocio = this.formBuilder.group({
            codigo_fabricante: [""],
            codigo_negocio: [""],
            tipo_negocio: [""],
            descricao_negocio: [""],
            status_negocio: [""],
        });
    }

    limparForm() {
        this.formCadastrarNegocio.reset();
    }

    async getFabricante() {
        let resposta = await this.getInfo(this.paths.fabricante);
        this.listaFabricantes = resposta.data.data;
    }

    voltar() {
        this.manualValidation = "";
        this.novoCadastro = false;
        this.cadastrarNegocio = false;
        this.listaNegocio = [];
        this.idFabricante = "";
        this.codigoFabricante = "";
        this.idNegocio = "";
        this.formCadastrarFabricante.reset();
        this.formCadastrarNegocio.reset();
        this.formEditarNegocio.reset();
        this.formCadastrarNegocio.disable();
        this.formCadastrarFabricante.controls["data_ultima_carga"].disable();
        this.getFabricante();
    }

    cancelar(item: any) {
        this.formEditarNegocio.reset();
        item.editarItemNegocio = false;
        this.idNegocio = "";

        this.corToast = "dark";
        this.posicaoToast = "bottom-center";
        this.tituloToast = "";
        this.mensagemToast = "Ação cancelada";
        this.corTextoToast = "text-white";
        this.toggleToast();
    }

    // Cadastrar Fabricante ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    cadastrar() {
        this.novoCadastro = true;
        this.formCadastrarFabricante.controls["codigo_fabricante"].enable();
        this.formCadastrarFabricante.controls["tipo_fabricante"].enable();
    }

    async sendNovoFabricante() {
        let resposta = await this.postInfo(this.paths.fabricante, this.formCadastrarFabricante.value);
        if (resposta.status === 200) {
            this.manualValidation = true;
            this.cadastrarNegocio = true;
            this.formCadastrarFabricante.controls["codigo_fabricante"].disable();
            this.formCadastrarFabricante.controls["tipo_fabricante"].disable();
            this.formCadastrarFabricante.controls["data_ultima_carga"].enable();
            this.formCadastrarNegocio.enable();
            this.codigoFabricante = this.formCadastrarFabricante.value.codigo_fabricante;
            this.idFabricante = resposta.data.data.id;
            this.teste = true
            this.corToast = "success";
            this.posicaoToast = "bottom-center";
            this.tituloToast = "Sucesso!";
            this.corTextoToast = "text-black";
            this.mensagemToast = "Novo fabricante cadastrado!";            
        } else {
            this.formCadastrarFabricante.controls["codigo_fabricante"].setErrors(null);
            // console.log(this.formCadastrarFabricante.controls);

            this.listaErros = resposta.response.data.data;
            this.manualValidation = false;

            this.listaErros.forEach((item) => {
                switch (item["campo"]) {
                    case "codigo_fabricante": {
                        this.formCadastrarFabricante.controls["codigo_fabricante"].setErrors({ erro: item["mensagem"], valid: false });
                        break;
                    }
                    case "nome_fabricante": {
                        this.formCadastrarFabricante.controls["nome_fabricante"].setErrors({ erro: item["mensagem"], valid: false });
                        break;
                    }

                    case "tipo_fabricante": {
                        this.formCadastrarFabricante.controls["tipo_fabricante"].setErrors({ erro: item["mensagem"], valid: false });
                        break;
                    }
                    case "data_ultima_carga": {
                        this.formCadastrarFabricante.controls["data_ultima_carga"].setErrors({ erro: item["mensagem"], valid: false });
                        break;
                    }
                }
            });

            // console.log(this.formCadastrarFabricante.controls['tipo_fabricante']);
            // console.log(this.formCadastrarFabricante.controls['nome_fabricante']);
            // console.log(this.formCadastrarFabricante.controls['codigo_fabricante'].errors);

            this.corToast = "danger";
            this.posicaoToast = "bottom-center";
            this.tituloToast = "Falhou!";
            this.corTextoToast = "text-black";
            this.mensagemToast = resposta.response.data.message;
        }
        this.toggleToast();
    }

    // Editar Fabricante ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    async editar(item: any) {
        this.novoCadastro = true;
        this.cadastrarNegocio = true;
        this.formCadastrarFabricante.controls["codigo_fabricante"].disable();
        this.formCadastrarFabricante.controls["tipo_fabricante"].disable();
        this.formCadastrarFabricante.controls["data_ultima_carga"].enable();
        this.formCadastrarNegocio.enable();
        this.formCadastrarFabricante.setValue({
            codigo_fabricante: item.codigo_fabricante,
            nome_fabricante: item.nome_fabricante,
            tipo_fabricante: item.tipo_fabricante,
            data_ultima_carga: item.data_ultima_carga,
            status_fabricante: item.status_fabricante,
        });

        this.idFabricante = item.id;
        this.codigoFabricante = item.codigo_fabricante;
        this.getListaNegocio()
    }

    async sendEditarFabricante() {        
        this.formCadastrarFabricante.controls["codigo_fabricante"].enable();
        this.formCadastrarFabricante.controls["tipo_fabricante"].enable();
        const path = this.paths.fabricante + `/${this.idFabricante}`;
        let resposta = await this.putInfo(path, this.formCadastrarFabricante.value);
        if (resposta.status === 200) {
            this.cadastrarNegocio = true;
            this.corToast = "success";
            this.posicaoToast = "bottom-center";
            this.tituloToast = "Sucesso!";
            this.corTextoToast = "text-black";
            this.mensagemToast = "Fabricante atualizado!";
        } else {
            this.corToast = "danger";
            this.posicaoToast = "bottom-center";
            this.tituloToast = "Falhou!";
            this.corTextoToast = "text-black";
            this.mensagemToast = "Verifique os dados cadastrados.";
        }
        this.formCadastrarFabricante.controls["codigo_fabricante"].disable();
        this.formCadastrarFabricante.controls["tipo_fabricante"].disable();
        this.toggleToast();
    }

    // Excluir Fabricante /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    async deletarFabricante(item: any) {
        const type = "warning-message-and-cancel";
        this.mensagemTitulo = "Deseja deletar o fabricante?";
        this.mensagemAlerta = "Esta ação não será reversível e irá deletar todos os registros relacionados ao fabricante!";
        await this.showSwal(type);
        if (this.resultado) {
            const path = this.paths.fabricante + `/${item.id}`;
            let resposta = await this.deleteInfo(path);
            this.getFabricante();
        }
    }

    // Cadastrar Negócio ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    async getListaNegocio() {
        this.formCadastrarFabricante.controls["codigo_fabricante"].enable();
        let resposta = await this.postInfo(this.paths.fabricanteNegocio, { codigo_fabricante: this.formCadastrarFabricante.controls["codigo_fabricante"].value});
        this.formCadastrarFabricante.controls["codigo_fabricante"].disable();
        this.listaNegocio = resposta.data.data;
    }

    async sendNovoNegocio() {
        this.formCadastrarFabricante.controls["codigo_fabricante"].enable();
        this.formCadastrarNegocio.value.codigo_fabricante = this.formCadastrarFabricante.controls["codigo_fabricante"].value;
        let resposta = await this.postInfo(this.paths.negocio, this.formCadastrarNegocio.value);
        await this.getListaNegocio();
        if (resposta.status === 200) {
            this.corToast = "success";
            this.posicaoToast = "bottom-center";
            this.tituloToast = "Sucesso!";
            this.corTextoToast = "text-black";
            this.mensagemToast = "Novo negócio cadastrado!";
        } else {
            this.corToast = "danger";
            this.posicaoToast = "bottom-center";
            this.tituloToast = "Falhou!";
            this.corTextoToast = "text-black";
            this.mensagemToast = "Verifique os dados cadastrados.";
        }
        this.formCadastrarFabricante.controls["codigo_fabricante"].disable();
        this.toggleToast();
    }

    // Editar Negocio //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    editarNegocio(item: any) {
        item.editarItemNegocio = true;
        this.formEditarNegocio.setValue({
            codigo_fabricante: this.codigoFabricante,
            codigo_negocio: item.codigo_negocio,
            tipo_negocio: item.tipo_negocio,
            descricao_negocio: item.descricao_negocio,
            status_negocio: item.status_negocio,
        });
        this.idNegocio = item.id;
    }
    async sendEditarNegocio() {
        let resposta = await this.putInfo(this.paths.negocio + `/${this.idNegocio}`, this.formEditarNegocio.value);
        if (resposta.status === 200) {
            this.editarItemNegocio = false;
            this.corToast = "success";
            this.posicaoToast = "bottom-center";
            this.tituloToast = "Sucesso!";
            this.corTextoToast = "text-black";
            this.mensagemToast = "Negócio atualizado!";
        } else {
            this.corToast = "danger";
            this.posicaoToast = "bottom-center";
            this.tituloToast = "Falhou!";
            this.corTextoToast = "text-black";
            this.mensagemToast = "Verifique os dados cadastrados.";
        }
        this.toggleToast();
        this.getListaNegocio();
    }

    // Excluir Negocio ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    async deletarNegocio(item: any) {
        const type = "warning-message-and-cancel";
        this.mensagemTitulo = "Deseja deletar o negócio?";
        this.mensagemAlerta = "Esta ação não será reversível e irá deletar todos os registros relacionados ao negócio!";
        await this.showSwal(type);
        if (this.resultado) {
            let resposta = await this.deleteInfo(this.paths.negocio + `/${item.id}`);
            if (resposta.status === 200) {
                this.getListaNegocio();
            }
        }
    }

    // Modal Resumo Frabricante ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    async resumoFabricante(item:any){
        this.dadosFabricante = item;
        console.log(this.dadosFabricante);

        let resposta = await this.postInfo(this.paths.fabricanteNegocio, { codigo_fabricante: item.codigo_fabricante });
        
        this.listaModalResumoFabricante = resposta.data.data
        // console.log(this.listaModalResumoFabricante);
        
    }

    // Tabelas /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    colunasFabricante: (IColumn | string)[] = [
        {
            key: "codigo_fabricante",
            label: "Código",
            _style: { width: "10%" },
        },
        {
            key: "nome_fabricante",
            label: "Nome",
            _style: { width: "40%" },
        },
        {
            key: "tipo_fabricante",
            label: "Tipo",
            _style: { width: "10%" },
        },
        {
            key: "status_fabricante",
            label: "Status",
            _style: { width: "10%" },
            filter: false,
        },
        {
            key: "acoes",
            label: "",
            _style: { width: "10%" },
            filter: false,
            sorter: false,
        },
    ];

    colunasNegocio: (IColumn | string)[] = [
        {
            key: "codigo_negocio",
            label: "Código do negócio",
            _style: { width: "10%" },
        },
        {
            key: "descricao_negocio",
            label: "Descrição",
            _style: { width: "40%" },
        },
        {
            key: "status_negocio",
            label: "Status",
            _style: { width: "10%" },
            filter: false,
        },
        {
            key: "acoes",
            label: "",
            _style: { width: "10%" },
            filter: false,
            sorter: false,
        },
    ];

    colunasModalResumoFabricante:(IColumn | string)[] = [
        {
            key: "codigo_negocio",
            label: "Código do Negocio",
            _style: { width: "15%" },
        },
        {
            key: "descricao_negocio",
            label: "Descrição",
            _style: { width: "40%" },
        },
        {
            key: "tipo_negocio",
            label: "Tipo",
            _style: { width: "10%" },
        },
        {
            key: "status_negocio",
            label: "Status",
            _style: { width: "10%" },
            filter: false,
        },
    ];
}
