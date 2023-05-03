import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
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
    listaFabricantes: any;
    listaNegocio: any;

    // booleans
    novoCadastro: boolean = false;
    cadastrarNegocio: boolean = false;
    editarItemNegocio: boolean = false;

    // Ids
    idFabricante: string = "";
    codigoFabricante: string = "";
    idNegocio: string = "";

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
                status_fabricante: [""],
            }
            // { validators: [PasswordValidators.confirmPassword] }
        );
        this.formCadastrarFabricante.controls['data_ultima_carga'].disable()
        // this.formControlsCadastrarFabricante = Object.keys(this.formCadastrarFabricante.controls);


        // form cadastrar negocio
        this.formCadastrarNegocio = this.formBuilder.group({
            codigo_fabricante: [""],
            codigo_negocio: [""],
            tipo_negocio: [""],
            descricao_negocio: [""],
        });
        this.formCadastrarNegocio.disable()

        // form editar negocio
        this.formEditarNegocio = this.formBuilder.group({
            codigo_fabricante: [""],
            codigo_negocio: [""],
            tipo_negocio: [""],
            descricao_negocio: [""],
            status_negocio: [""],
        });
    }

    limparForm(){
        this.formCadastrarNegocio.reset();
    }

    async getFabricante() {
        let resposta = await this.getInfo(this.paths.fabricante);
        this.listaFabricantes = resposta.data.data;
    }

    voltar() {
        this.novoCadastro = false;
        this.cadastrarNegocio = false;
        this.listaNegocio = [];
        this.idFabricante = '';
        this.codigoFabricante = '';
        this.idNegocio = '';
        this.formCadastrarFabricante.reset();
        this.formCadastrarNegocio.reset();
        this.formCadastrarNegocio.disable()
    }

    // Cadastrar Fabricante ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    cadastrar() {
        this.novoCadastro = true;
    }

    async sendNovoFabricante() {
        let resposta = await this.postInfo(this.paths.fabricante, this.formCadastrarFabricante.value);
        if (resposta.status === 200) {
            this.cadastrarNegocio = true;
            this.formCadastrarFabricante.controls['data_ultima_carga'].enable()
            this.formCadastrarNegocio.enable()
        }
    }

    // Editar Fabricante ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    async getListaNegocio() {
        let resposta = await this.postInfo(this.paths.fabricanteNegocio, {codigo_fabricante: this.codigoFabricante});
        console.log("Negocio", resposta.data.data);
        this.listaNegocio = resposta.data.data;
    }

    async editar(item: any) {
        this.novoCadastro = true;
        this.cadastrarNegocio = true;
        this.formCadastrarFabricante.controls['data_ultima_carga'].enable()
        this.formCadastrarNegocio.enable()
        this.formCadastrarFabricante.setValue({
            codigo_fabricante: item.codigo_fabricante,
            nome_fabricante: item.nome_fabricante,
            tipo_fabricante: item.tipo_fabricante,
            data_ultima_carga: item.data_ultima_carga,
            status_fabricante: item.status_fabricante,
        });
        
        this.idFabricante = item.id;
        this.codigoFabricante = item.codigo_fabricante;
        await this.getListaNegocio();
    }

    async sendEditarFabricante() {
        const path = this.paths.fabricante + `/${this.idFabricante}`;

        let resposta = await this.putInfo(path, this.formCadastrarFabricante.value);
        if (resposta.status === 200) {
            this.cadastrarNegocio = true;
        }
    }

    // Excluir Fabricante /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    async deletarFabricante(item: any) {
        const path = this.paths.fabricante + `/${item.id}`;
        let resposta = await this.deleteInfo(path);
        this.getFabricante();
    }

    // Cadastrar Negócio ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    async sendNovoNegocio() {
        this.formCadastrarNegocio.value.codigo_fabricante = this.codigoFabricante;
        let resposta = await this.postInfo(this.paths.negocio, this.formCadastrarNegocio.value);
        if (resposta.status === 200) {
            this.cadastrarNegocio = true;
        }
        this.getListaNegocio();
    }

    // Editar Negocio //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    editarNegocio(item: any) {
        item.editarItemNegocio =  true;
        this.formEditarNegocio.setValue({
            codigo_fabricante: this.codigoFabricante,
            codigo_negocio: item.codigo_negocio,
            tipo_negocio: item.tipo_negocio,
            descricao_negocio: item.descricao_negocio,
            status_negocio: item.status_negocio,
        });
        this.idNegocio = item.id;
    }
    async sendEditarNegocio(){
        let resposta = await this.putInfo(this.paths.negocio + `/${this.idNegocio}`, this.formEditarNegocio.value);
        if (resposta.status === 200) {
            this.editarItemNegocio = false;
            this.getListaNegocio();
        }
    }

    cancelar(item: any){
        this.formEditarNegocio.reset();
        item.editarItemNegocio = false;
        this.idNegocio = '';
    }

    // Excluir Negocio ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    async deletarNegocio(item: any){
        let resposta = await this.deleteInfo(this.paths.negocio + `/${item.id}`);
        if(resposta.status === 200){
            this.getListaNegocio();
        }
    }
}
