import { Component, OnInit } from '@angular/core';
import { ControllerComponent } from 'src/app/controller/controller/controller.component';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent extends ControllerComponent implements OnInit {
  // listas
  listaFabricantes:any;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.getListaFabricantes();
  }

  async getListaFabricantes(){
    let resposta = await this.postInfoSemToken(this.paths.listaFabricante);
    this.listaFabricantes = resposta.data.data;
    console.log(this.listaFabricantes);
    
  }
}
