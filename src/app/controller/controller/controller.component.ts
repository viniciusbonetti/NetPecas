import { Component, OnInit } from "@angular/core";
import axios from "axios";
import { SweetAlertsControllerComponent } from "src/app/sweet-alerts-controller/sweet-alerts-controller.component";
import { Title } from '@angular/platform-browser';

@Component({
    selector: "app-controller",
    templateUrl: "./controller.component.html",
    styleUrls: ["./controller.component.scss"],
})
export class ControllerComponent extends SweetAlertsControllerComponent {
    public baseUrl = "https://dornez.vps-kinghost.net:81/api";
    headers: object = {};
    setToken: object = {};

    public paths = {
        register: "/register",
        login: "/login",
        consulta: "/consulta",
        recuperarSenha: "/recuperarSenha",
        solicitacaoAcesso: "/solicitacaoAcesso",
        listaFabricante: "/listaFabricante",
        consultaCnpj: "/consultaCnpj",
        fabricante: "/fabricante",
        fabricanteNegocio: "/fabricanteNegocio",
        negocio: "/negocio",
        listaPecaFabricante: "/listaPecaFabricante",
        pecaFabricante: "/pecaFabricante",
        listaFabricanteCompleta: "/listaFabricanteCompleta",
        checkExclusao: "/checkExclusao",
    };

    public getToken() {
        let token = localStorage.getItem("token");
        this.headers = { Authorization: "Bearer " + token, "Content-Type": "application/json", Accept: "application/json" };
        this.setToken = { headers: this.headers };

        return this.setToken;
    }

    public async getInfo(path: string) {
        // try {
        //     let getInfo = await axios.get(urlGet, header);

        //     return getInfo;
        // } catch (error) {
        //     return error.response;
        // }

        let token = await this.getToken();
        let urlGet = this.baseUrl + path;

        let resposta = await axios.get(urlGet, token).catch(function (response) {
            
            return response;
        });
        return resposta;
    }

    public async postInfo(path: string, form?: object) {
        let token = await this.getToken();
        let urlPost = this.baseUrl + path;
        let resposta = await axios.post(urlPost, form, token).catch(function (response) {
            return response;
        });
        return resposta;
        // try {
        //     let sendInfo = await axios.post(urlPost, form, token);
        //     return sendInfo.data.data;
        // } catch (error) {

        // }
    }

    public async postInfoSemToken(path: string, form?: object) {
        let urlPostSemToken = this.baseUrl + path;
        let resposta = await axios.post(urlPostSemToken, form).catch(function (response) {
            return response;
        });
        return resposta;
    }

    public async putInfo(path: string, form: object) {
        let token = await this.getToken();
        let urlPut = this.baseUrl + path;

        let resposta = await axios.put(urlPut, form, token).catch(function (response) {
            return response;
        });
        return resposta;
        //   this.formError();
        //   let urlPut = this.baseUrl + path;
        //   try {
        //       let putInfo = await axios.put(urlPut, form, header);
        //       return putInfo;
        //   } catch (error) {
        //       this.mostrarErros(error);
        //   }
    }

    public async deleteInfo(path: string) {
        let token = await this.getToken();
        let urlDelete = this.baseUrl + path;
        let resposta = await axios.delete(urlDelete, token).catch(function (response) {
            return response;
        });
        return resposta;
        //   this.formError();
        //   let urlDelete = this.baseUrl + path;
        //   try {
        //       let deleteInfo = await axios.delete(urlDelete, header);
        //       return deleteInfo;
        //   } catch (error){
        //       this.mostrarErros(error);
        //   }
    }

    // public formError() {
    //     var formError = document.getElementsByClassName("form-error");

    //     for (let i = 0; i < formError.length; i++) {
    //         formError[i].classList.remove("text-danger");
    //         formError[i].innerHTML = "";
    //     }
    // }

    // public mostrarErros(error) {
    //     var erros = error.response.data.data;
    //     for (let i = 0; i < erros.length; i++) {
    //         var span = document.getElementsByClassName(erros[i].campo)[0];

    //         span.textContent = erros[i].mensagem;

    //         span.classList.add("text-danger");
    //     }
    //     this.showToast("bottom", error.response.data.message, "error");
    // }
}
