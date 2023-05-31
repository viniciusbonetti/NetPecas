import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { IColumn, IItem } from "@coreui/angular-pro/lib/smart-table/smart-table.type";
import { ControllerComponent } from "src/app/controller/controller/controller.component";

@Component({
    selector: "app-produto",
    templateUrl: "./produto.component.html",
    styleUrls: ["./produto.component.scss"],
})
export class ProdutoComponent extends ControllerComponent implements OnInit {
    // forms
    formFiltrarPecas!: FormGroup;
    formCadastrarProduto!: FormGroup;

    // booleans
    novoCadastro:boolean = false;
    pesquisou:boolean = false;
    editarProduto:boolean = false;
    manualValidation: any;

    // listas
    listaFabricantes: any;
    listaPecas: IItem[];
    listaErros = [];

    // ids
    idPeca:string = '';

    constructor(private formBuilder: FormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.getListaFabricantes();
        this.createForm();
    }

    // Geral /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    async getListaFabricantes() {
        let resposta = await this.postInfoSemToken(this.paths.listaFabricante);
        this.listaFabricantes = resposta.data.data;
    }

    createForm(){
        this.formFiltrarPecas = this.formBuilder.group(
            {
                codigo_fabricante: [""],
                codigo_peca: [""],
                descricao_peca: [""],
            }
            // { validators: [PasswordValidators.confirmPassword] }
        );

        this.formCadastrarProduto = this.formBuilder.group(
            {
                codigo_fabricante: [''],
                codigo_peca: [''],
                descricao_peca: [''],
                codigo_negocio: [''],
                codigo_mpc: [''],
                valor_lpp: [''],
                preco_compra: [''],
                data_preco: [''],
                classif_fiscal: [''],
                ex: [''],
                codigo_origem: [''],
                perc_ipi: [''],
                peso: [''],
                qtde_embalagem: [''],
                codigo_desconto: [''],
                desconto_compra: [''],
                desconto_venda: [''],
                familia: [''],
                unidade_medida: [''],
                data_ultima_carga: [''],
                chave_peca: [''],
                imagem_peca: [''],
                status_peca: [''],
            }
            // { validators: [PasswordValidators.confirmPassword] }
        );
    }
    // Geral /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    async getListaPecas() {
        let resposta = await this.postInfo(this.paths.listaPecaFabricante, this.formFiltrarPecas.value);
        this.listaPecas = resposta.data.data;
        this.pesquisou = true;
    }

    cadastrar(){
        this.novoCadastro = true;
    }

    voltar(){
        this.novoCadastro = false;
        this.formCadastrarProduto.reset();
    }

    // Cadastrar Novo Produto //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    async sendNovoProduto(){
        let resposta = await this.postInfo(this.paths.pecaFabricante, this.formCadastrarProduto.value);
        if(resposta.status === 200){
            this.manualValidation = true;
            this.corToast = "success";
            this.posicaoToast = "bottom-center";
            this.tituloToast = "Sucesso!";
            this.corTextoToast = "text-black";
            this.mensagemToast = "Novo produto cadastrado!";   
        } else {
            this.listaErros = resposta.response.data.data;
            this.manualValidation = false;

            this.setErros();

            this.corToast = "danger";
            this.posicaoToast = "bottom-center";
            this.tituloToast = "Falhou!";
            this.corTextoToast = "text-black";
            this.mensagemToast = resposta.response.data.message;            
        }
        this.toggleToast();
    }

    // Editar Produto ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    editar(item:any){
        this.novoCadastro = true;
        this.editarProduto = true;
        this.formCadastrarProduto.patchValue({
                codigo_fabricante: item.codigo_fabricante,
                codigo_peca: item.codigo_peca,
                descricao_peca: item.descricao_peca,
                codigo_negocio: item.codigo_negocio,
                codigo_mpc: item.codigo_mpc,
                valor_lpp: item.valor_lpp,
                preco_compra: item.preco_compra,
                data_preco: item.data_preco,
                classif_fiscal: item.classif_fiscal,
                ex: item.ex,
                codigo_origem: item.codigo_origem,
                perc_ipi: item.perc_ipi,
                peso: item.peso,
                qtde_embalagem: item.qtde_embalagem,
                codigo_desconto: item.codigo_desconto,
                desconto_compra: item.desconto_compra,
                desconto_venda: item.desconto_venda,
                familia: item.familia,
                unidade_medida: item.unidade_medida,
                data_ultima_carga: item.data_ultima_carga,
                chave_peca: item.chave_peca,
                imagem_peca: item.imagem_peca,
                status_peca: item.status_peca,
        });
        this.idPeca = item.id;
    }

    async sendEditarProduto(){
        const path = this.paths.pecaFabricante + `/${this.idPeca}`;
        let resposta = await this.putInfo(path, this.formCadastrarProduto.value);
        if(resposta.status === 200){
            this.manualValidation = true;
            this.corToast = "success";
            this.posicaoToast = "bottom-center";
            this.tituloToast = "Sucesso!";
            this.corTextoToast = "text-black";
            this.mensagemToast = "Produto atualizado!";   
        } else {
            this.listaErros = resposta.response.data.data;
            this.manualValidation = false;

            this.setErros();

            this.corToast = "danger";
            this.posicaoToast = "bottom-center";
            this.tituloToast = "Falhou!";
            this.corTextoToast = "text-black";
            this.mensagemToast = resposta.response.data.message;            
        }
        this.toggleToast();
    
    }

    // Excluir Produto ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    async deletarProduto(item:any){
        const type = "warning-message-and-cancel";
        this.mensagemTitulo = "Deseja deletar o produto?";
        this.mensagemAlerta = "Esta ação não será reversível e irá deletar todos os registros relacionados ao produto!";
        await this.showSwal(type);
        if (this.resultado) {
            const path = this.paths.pecaFabricante + `/${item.id}`;
            let resposta = await this.deleteInfo(path);
            if (resposta.status !== 200) {                
                const type = 'failed';
                this.mensagemTitulo = 'Falhou!'
                this.mensagemAlerta = 'Verifique as dependencias deste produto para poder excluir este registro.'
                await this.showSwal(type);
            } else if (resposta.status === 200){
                const type = 'success-message';
                this.mensagemTitulo = 'Sucesso!'
                this.mensagemAlerta = 'O registro foi deletado com sucesso.'
                await this.showSwal(type);
            }
            this.getListaPecas();
        }
    }
    // Lista de Erros /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    setErros(){
        this.listaErros.forEach((item) => {
            switch (item["campo"]) {
                case "codigo_fabricante": {
                    this.formCadastrarProduto.controls["codigo_fabricante"].setErrors({ erro: item["mensagem"], valid: false });
                    break;
                }
                case "codigo_peca": {
                    this.formCadastrarProduto.controls["codigo_peca"].setErrors({ erro: item["mensagem"], valid: false });
                    break;
                }

                case "descricao_peca": {
                    this.formCadastrarProduto.controls["descricao_peca"].setErrors({ erro: item["mensagem"], valid: false });
                    break;
                }
                case "codigo_negocio": {
                    this.formCadastrarProduto.controls["codigo_negocio"].setErrors({ erro: item["mensagem"], valid: false });
                    break;
                }
                case "codigo_mpc": {
                    this.formCadastrarProduto.controls["codigo_mpc"].setErrors({ erro: item["mensagem"], valid: false });
                    break;
                }
                case "valor_lpp": {
                    this.formCadastrarProduto.controls["valor_lpp"].setErrors({ erro: item["mensagem"], valid: false });
                    break;
                }
                case "classif_fiscal": {
                    this.formCadastrarProduto.controls["classif_fiscal"].setErrors({ erro: item["mensagem"], valid: false });
                    break;
                }
                case "codigo_origem": {
                    this.formCadastrarProduto.controls["codigo_origem"].setErrors({ erro: item["mensagem"], valid: false });
                    break;
                }
                case "perc_ipi": {
                    this.formCadastrarProduto.controls["perc_ipi"].setErrors({ erro: item["mensagem"], valid: false });
                    break;
                }
                case "peso": {
                    this.formCadastrarProduto.controls["peso"].setErrors({ erro: item["mensagem"], valid: false });
                    break;
                }
                case "qtde_embalagem": {
                    this.formCadastrarProduto.controls["qtde_embalagem"].setErrors({ erro: item["mensagem"], valid: false });
                    break;
                }
                case "codigo_desconto": {
                    this.formCadastrarProduto.controls["codigo_desconto"].setErrors({ erro: item["mensagem"], valid: false });
                    break;
                }
                case "desconto_compra": {
                    this.formCadastrarProduto.controls["desconto_compra"].setErrors({ erro: item["mensagem"], valid: false });
                    break;
                }
                case "desconto_venda": {
                    this.formCadastrarProduto.controls["desconto_venda"].setErrors({ erro: item["mensagem"], valid: false });
                    break;
                }
                case "unidade_medida": {
                    this.formCadastrarProduto.controls["unidade_medida"].setErrors({ erro: item["mensagem"], valid: false });
                    break;
                }
            }
        });
    }
    // Listas /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    colunasPecas: (IColumn | string)[] = [
        {
            key: "codigo_fabricante",
            label: "Fabricante",
            _style: { width: "10%" },
            filter: false,
        },
        {
            key: "codigo_negocio",
            label: "Negócio",
            _style: { width: "10%" },
            filter: false,
        },
        {
            key: "codigo_peca",
            label: "Peça",
            _style: { width: "10%" },
            filter: false,
        },
        {
            key: "data_preco",
            label: "Data preço",
            _style: { width: "10%" },
            filter: false,
        },
        {
            key: "data_ultima_carga",
            label: "Última carga",
            _style: { width: "10%" },
            filter: false,
        },
        {
            key: "descricao_peca",
            label: "Descrição",
            _style: { width: "20%" },
            filter: false,
        },
        {
            key: "perc_ipi",
            label: "% IPI",
            _style: { width: "10%" },
            filter: false,
        },
        {
            key: "valor_lpp",
            label: "Valor",
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
}
