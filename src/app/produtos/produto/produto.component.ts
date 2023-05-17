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
    }
    // Get lista de peças /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    async getListaPecas() {
        let resposta = await this.postInfo(this.paths.listaPecaFabricante, this.formFiltrarPecas.value);
        this.listaPecas = resposta.data.data;
        console.log(resposta.data);
        
    }

    // Listas /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    colunasPecas: (IColumn | string)[] = [
        {
            key: "codigo_fabricante",
            label: "Fabricante",
            _style: { width: "15%" },
        },
        {
            key: "codigo_negocio",
            label: "Negócio",
            _style: { width: "10%" },
        },
        {
            key: "codigo_peca",
            label: "Peça",
            _style: { width: "10%" },
        },
        {
            key: "data_preco",
            label: "Data preço",
            _style: { width: "10%" },
        },
        {
            key: "data_ultima_carga",
            label: "Data ultima carga",
            _style: { width: "15%" },
        },
        {
            key: "descricao_peca",
            label: "Descrição",
            _style: { width: "20%" },
        },
        {
            key: "perc_ipi",
            label: "% IPI",
            _style: { width: "10%" },
        },
        {
            key: "valor_lpp",
            label: "valor",
            _style: { width: "10%" },
        },
    ];
}
