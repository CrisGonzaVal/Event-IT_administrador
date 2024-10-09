import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular'; 
import { AlertController } from '@ionic/angular'; //cuadros de mensajes
import { Router } from '@angular/router'; /* redirecciona a otras pages */

interface Opciones{
  icon: string;
  name: string;
  redirecTo: string;
}


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  opciones: Opciones[] = [
    {
      icon: 'bug-outline',
      name: 'Alert',
      redirecTo: '/alert'

    },
    {
      icon: 'body-outline',
      name: 'Card',
      redirecTo: '/card'

    },

  ]


  constructor(private menucontroller: MenuController, 
              private alertcontroller: AlertController,
              private router:Router) { } /*Llamar las bibliotecas*/

  ngOnInit() {
  }


  mostrarMenu(){
    this.menucontroller.open('first'); /*permite abrir el menu diseñado en el componente app*/
  }

  /* necesita intervesion de un tercero x eso es asincronico */
  async mensaje(){
    const alert = await this.alertcontroller.create({
      header: 'Bienvenid@ a mi App!',
      mode:'ios',  //mismo diseño en ios y android
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('El usuario ha cancelado la acción');
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('El usuario a confirmado el ingreso');
            this.router.navigate(['/alert']); //Permite navegar a otro page
          },
        },
      ],
    });

    await alert.present();

    
  }
}
