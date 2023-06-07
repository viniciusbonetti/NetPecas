import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { IColumn, IItem } from "@coreui/angular-pro/lib/smart-table/smart-table.type";
import { ControllerComponent } from "src/app/controller/controller/controller.component";

@Component({
    selector: "app-pecas",
    templateUrl: "./pecas.component.html",
    styleUrls: ["./pecas.component.scss"],
})
export class PecasComponent extends ControllerComponent implements OnInit {
    // forms
    // formArquivoImportacao!: FormGroup;
    formArquivoImportacao:any;

    // Booleans
    manualValidation: any;
    erro: any;

    // listas
    listaLogImportacoes: IItem[];
    listaResultadosImportacoes: IItem[];
    listaProblemasImportacoes: IItem[];

    // IDs
    nomeArquivo:any;
    teste: string = "";
    extension: string = "";
    file:File;
    idImportacao:string=''
    parseProblemas:any;

    constructor(private formBuilder: FormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.createForm();
        this.getListaImportacoes();
    }

    // Geral /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    createForm() {
        // this.formArquivoImportacao = this.formBuilder.group(
        //     {
        //         arquivo_importacao: [""],
        //     }
        //     // { validators: [PasswordValidators.confirmPassword] }
        // );
    }

    onFileChange(event: any) {
        this.file = event.target.files[0];
        this.nomeArquivo = this.file.name.split('.').pop();
        this.erro = false;
    }

    fechou() {
    }

    async getListaImportacoes(){
        let resposta = await this.postInfo(this.paths.listaImportProduto);
        this.listaLogImportacoes = resposta.data.data;
    }

    getListaResultadosImportacoes(item:any){
        this.idImportacao = item.id;
        this.listaResultadosImportacoes = Object.keys(item.resultado_importacao).map((key) => ({ key: key, value: item.resultado_importacao[key] }));
    }

    getListaProblemas(item:any){
        this.idImportacao = item.id;
        this.listaProblemasImportacoes = JSON.parse(item.linhas_problemas)        
    }

    // Enviar Importacao ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    async sendArquivoImportacao() {
        if(this.nomeArquivo === "txt" || this.nomeArquivo === 'xls'){
            let formArquivos = new FormData();
            formArquivos.append("arquivo_importacao",this.file)
            
            let resposta = await this.postInfoArquivo(this.paths.importaProduto, formArquivos);
            if (resposta.status === 200) {
                this.manualValidation = true;
                this.corToast = "success";
                this.posicaoToast = "bottom-center";
                this.tituloToast = "Sucesso!";
                this.corTextoToast = "text-black";
                this.mensagemToast = "Novo produto cadastrado!";
            } else {
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

    // listas //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    colunasImportacoes: (IColumn | string)[] = [
        {
            key: "nome_usuario",
            label: "Usuário",
            _style: { width: "20%" },
            filter: false,
        },
        {
            key: "nome_arquivo",
            label: "Nome Arquivo",
            _style: { width: "20%" },
            filter: false,
        },
        {
            key: "tipo_importacao",
            label: "Tipo Importação",
            _style: { width: "10%" },
            filter: false,
        },
        {
            key: "resultado_importacao",
            label: "Resultado",
            _style: { width: "20%" },
            filter: false,
        },
        {
            key: "linhas_problemas",
            label: "Problemas",
            _style: { width: "20%" },
            filter: false,
        },
        {
            key: "status_importacao",
            label: "Status",
            _style: { width: "10%" },
            filter: false,
        },
    ];

    colunasResultadosImportacoes: (IColumn | string)[] = [
        {
            key: "key",
            label: "",
            _style: { width: "20%" },
            filter: false,
        },
        {
            key: "value",
            label: "",
            _style: { width: "20%" },
            filter: false,
        },
    ];
    colunasProblemasImportacoes: (IColumn | string)[] = [
        {
            key: "linha_dado",
            label: "Dados",
            _style: { width: "60%" },
            filter: false,
        },
        {
            key: "linha_seq",
            label: "Sequência",
            _style: { width: "20%" },
            filter: false,
        },
        {
            key: "linha_size",
            label: "Tamanho da linha",
            _style: { width: "20%" },
            filter: false,
        },
    ];
}
