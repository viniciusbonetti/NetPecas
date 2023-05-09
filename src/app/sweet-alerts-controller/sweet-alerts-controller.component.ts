import { Component } from '@angular/core';
import swal from 'sweetalert2';
import { ToastersComponent } from '../views/notifications/toasters/toasters.component';
declare var $: any;

@Component({
  selector: 'app-sweet-alerts-controller',
  templateUrl: './sweet-alerts-controller.component.html',
  styleUrls: ['./sweet-alerts-controller.component.scss']
})
export class SweetAlertsControllerComponent {
  public resultado = false;
  public mensagemTitulo = '';
  public mensagemAlerta = '';
    async showSwal(type:any) {
      if (type == 'basic') {
          swal.fire({
              title: "Here's a message!",
              buttonsStyling: false,
              customClass:{
                confirmButton: "btn btn-success"
              }
          });

      } else if (type == 'title-and-text') {
          swal.fire({
              title: "Here's a message!",
              text: "It's pretty, isn't it?",
              buttonsStyling: false,
              customClass:{
                confirmButton: "btn btn-info"
              }
          });

      } else if (type == 'success-message') {
          swal.fire({
              title: "Good job!",
              text: "You clicked the button!",
              buttonsStyling: false,
              customClass:{
                confirmButton: "btn btn-success",
              },
              icon: "success"
          });

      } else if (type == 'warning-message-and-confirmation') {
          swal.fire({
            title: 'Deletar registro?',
            text: "As ações não poderão ser revertidas!",
            icon: 'warning',
            showCancelButton: true,
            customClass:{
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger',
            },
            confirmButtonText: 'Yes, delete it!',
             buttonsStyling: false
          }).then((result) => {
            if (result.value) {
              swal.fire(
                {
                  title: 'Deleted!',
                  text: 'Your file has been deleted.',
                  icon: 'success',
                  customClass:{
                    confirmButton: "btn btn-success",
                  },
                  buttonsStyling: false
                }
              )
            }
          })
      } else if (type == 'warning-message-and-cancel') {
          await swal.fire({
              title: this.mensagemTitulo,
              text: this.mensagemAlerta,
              icon: 'warning',
              showCancelButton: true,
              confirmButtonText: 'Sim, deletar',
              cancelButtonText: 'Não, manter',
              customClass:{
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger",
              },
              buttonsStyling: false
          }).then((result) => {
            if (result.value) {              
              swal.fire({
                  title: 'Confirmado',
                  text: 'Seu registro foi deletado.',
                  icon: 'success',
                  customClass:{
                    confirmButton: "btn btn-success",
                  },
                  buttonsStyling: false
              });
              this.resultado = result.isConfirmed;
            } else {
              // swal.fire({
              //     title: 'Cancelado',
              //     text: 'O registro foi mantido!',
              //     icon: 'error',
              //     customClass:{
              //       confirmButton: "btn btn-info",
              //     },
              //     buttonsStyling: false
              // });
              this.resultado = result.isConfirmed;
            }
          })

      } else if (type == 'custom-html') {
          swal.fire({
              title: this.mensagemTitulo,
              buttonsStyling: false,
              customClass:{
                confirmButton: "btn btn-success",
              },
              // html: 'You can use <b>bold text</b>, ' +
              //     '<a href="http://github.com">links</a> ' +
              //     'and other HTML tags'
              html: this.mensagemAlerta
          });

      } else if (type == 'auto-close') {
          swal.fire({
              title: "Auto close alert!",
              text: "I will close in 2 seconds.",
              timer: 2000,
              showConfirmButton: false
          });
      } else if (type == 'input-field') {
          swal.fire({
              title: 'Input something',
              html: '<div class="form-group">' +
                  '<input id="input-field" type="text" class="form-control" />' +
                  '</div>',
              showCancelButton: true,
              customClass:{
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger',
              },
              buttonsStyling: false
          }).then(function(result) {
              swal.fire({
                  icon: 'success',
                  html: 'You entered: <strong>' +
                      $('#input-field').val() +
                      '</strong>',
                  customClass:{
                    confirmButton: 'btn btn-success',
                  },
                  buttonsStyling: false

              })
          });
      }
    }

    async showToast(position:any, message:any, iconToast:any){
      const Toast = swal.mixin({
        toast: true,
        position: position,
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', swal.stopTimer)
          toast.addEventListener('mouseleave', swal.resumeTimer)
        }
      });

      let bgColor = '';
      let ftColor = '';
      switch (iconToast) {
        case 'success':
          bgColor = '#55b555';
          ftColor = '#fff';
          break;
        case 'error':
          bgColor = '#f55145';
          ftColor = '#000';
          break;
      }

      Toast.fire({
        icon: iconToast,
        title: message,
        background: bgColor,
        color: ftColor,
        iconColor: ftColor,
      })
    }

    // toaster ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    visivelToast = false;
    barraPorcentagemToast = 0;
    corToast = '';
    posicaoToast = '';
    tituloToast = '';
    mensagemToast = '';
    corTextoToast = 'text-white';

  
    toggleToast() {
      this.visivelToast = !this.visivelToast;
    }
  
    onVisibleChange($event: boolean) {
      this.visivelToast = $event;
      this.barraPorcentagemToast = !this.visivelToast ? 0 : this.barraPorcentagemToast;
    }
  
    onTimerChange($event: number) {
      this.barraPorcentagemToast = $event * 20;
    }
}
