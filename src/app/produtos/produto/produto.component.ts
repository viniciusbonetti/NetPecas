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
    // listas
    listaFabricantes: any;
    listaPecas: IItem[];

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
        console.log(resposta.data);
    }

    cadastrar(){
        this.novoCadastro = true;
    }

    voltar(){
        this.novoCadastro = false;
    }

    // Listas /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    colunasPecas: (IColumn | string)[] = [
        {
            key: "codigo_fabricante",
            label: "Fabricante",
            _style: { width: "15%" },
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
            label: "Data ultima carga",
            _style: { width: "15%" },
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
            label: "valor",
            _style: { width: "10%" },
            
        },
    ];
}
