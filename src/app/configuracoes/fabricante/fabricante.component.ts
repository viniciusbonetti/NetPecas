import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ControllerComponent } from 'src/app/controller/controller/controller.component';

@Component({
  selector: 'app-fabricante',
  templateUrl: './fabricante.component.html',
  styleUrls: ['./fabricante.component.scss']
})
export class FabricanteComponent extends ControllerComponent implements OnInit {
  // forms
  formCadastrarFabricante!: FormGroup;
  
  // listas
  listaFabricantes: any;
  listaLinhas: any;

  // booleans
  novoCadastro:boolean = false;
  cadastrarLinhas:boolean = false;

  constructor(private formBuilder: FormBuilder) {
      super();
  }

  ngOnInit() {
      this.createForm();
      this.getFabricante();
  }

  // Geral //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  createForm() {
      // form cadastrar fabricante
      this.formCadastrarFabricante = this.formBuilder.group(
          {
              codigo_fabricante: [""],
              nome_fabricante: [""],
              tipo_fabricante: [""],
              status_fabricante: [""],
          }
          // { validators: [PasswordValidators.confirmPassword] }
      );
      // this.formControlsCadastrarFabricante = Object.keys(this.formCadastrarFabricante.controls);
  }

  async getFabricante() {
      let resposta = await this.getInfo(this.paths.fabricante);
      console.log(resposta.data.data);
      this.listaFabricantes = resposta.data.data;
  }

  voltar(){
      this.novoCadastro = false;
      this.cadastrarLinhas = false;
      this.formCadastrarFabricante.reset();
      this.listaLinhas = [];
  }

  // Cadastrar Fabricante ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  cadastrar(){
      this.novoCadastro = true;
  }

  async sendNovoFabricante(){
      let resposta = await this.postInfo(this.paths.fabricante, this.formCadastrarFabricante.value)
      if(resposta.status === 200){
          console.log('deu certo');
          
          this.cadastrarLinhas = true;
          console.log(resposta.data.data);
      }
      
  }

  // Editar Fabricante ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  async editar(item: any){
      this.novoCadastro = true;
      this.cadastrarLinhas = true;
      this.formCadastrarFabricante.setValue({
          codigo_fabricante: item.codigo_fabricante,
          nome_fabricante: item.nome_fabricante,
          tipo_fabricante: item.tipo_fabricante,
          status_fabricante: item.status_fabricante,
      })
      console.log('infos',this.formCadastrarFabricante.value);
      

      let resposta = await this.postInfo(this.paths.fabricanteNegocio, {codigo_fabricante: item.codigo_fabricante});
      console.log('linhas',resposta.data.data);
      this.listaLinhas = resposta.data.data;
  }
}
