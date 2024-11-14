import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; //para recibir url con datos de page detalle
import { ApicrudService } from '../services/apicrud.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.page.html',
  styleUrls: ['./actualizar.page.scss'],
})
export class ActualizarPage implements OnInit {

  unaMascota:any;

  animalito={
    id:"",
    nombre:"",
    tipo:"",
    color:"",
  }

  constructor(private activated: ActivatedRoute,
              private alertcontroller: AlertController,
              private router: Router,
              private apicrud: ApicrudService) {
                this.activated.queryParams.subscribe(param => {
                  this.unaMascota =JSON.parse(param ['mascota']);
                })
               }

  ngOnInit() {
    this.animalito = this.unaMascota;
  }

   async actualizar(){

    const alert = await this.alertcontroller.create({
      header: 'Actualización',
      message:'Necesita Modificar la información',
      mode:'ios',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            this.router.navigate(['/inicio']);
          },
        },
        {
          text: 'Si',
          role: 'confirm',
          handler: () => {
            this.modificaMascota();
          },
        },
      ],
    });

    await alert.present();

  }//fin metodo

  modificaMascota(){
    this.apicrud.putMascotas(this.animalito).subscribe();
  }

  async mensaje(){
    const alert = await this.alertcontroller.create({
      header: 'Actualización',
      message:'Necesita Modificar la información',
      mode:'ios',
      buttons: [
        {
          text: 'Ok',
          role: 'confirm',
          handler: () => {
            this.router.navigate(['/inicio']);
          },
        },
      ],
    });

    await alert.present();
  }

}
