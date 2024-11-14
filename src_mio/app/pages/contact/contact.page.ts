import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'; //para mostrar una ventana alert
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  //definimos los parametros vinculados a ngModel
  nom:string="";
  email:string="";
  comentario:string="";

  constructor(private alertcontroller: AlertController,
              private router: Router ) { }

  ngOnInit() {
  }

  async mensaje(){
  
    const alert = await this.alertcontroller.create({
      header: 'Contacto',
      mode:'ios',  //mismo diseño en ios y android
      message: 'Gracias por contactarte con nosotros! '+this.email,
      buttons: [
        
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('Envio de datos');
            console.log(this.comentario);
            this.limpiar();
            this.router.navigate(['/inicio']); //Permite navegar a otro page
          },
        },
      ],
    });  

    await alert.present(); //levanta la ventana
  }//finMetodo

  limpiar(){
    this.nom = "";
    this.email = "";
    this.comentario = "";
  }
 }

