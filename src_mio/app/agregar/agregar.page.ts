import { Component, OnInit } from '@angular/core';
import { ApicrudService } from '../services/apicrud.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { IAnimalito } from 'src/interfaces/IAnimalitos';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  mascota: IAnimalito= {
    nombre: "",
    tipo:"",
    color: ""
  }

  constructor(private apiCrud: ApicrudService, private router: Router,
    private alertController: AlertController) { }

  ngOnInit() {
  }

  crearMascota(){
    this.apiCrud.postMascotas(this.mascota).subscribe();
    this.mensaje();
  }

  async mensaje(){
    const alert = await this.alertController.create({
      header: 'Creando Mascota',
      message: 'Su mascota ha sido creada',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.router.navigate(['/agregar']);
          },
        },
      ],
    });

    await alert.present();
  }

}

