import { Component, OnInit } from '@angular/core';
import { ApicrudService } from '../services/apicrud.service';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.page.html',
  styleUrls: ['./actualizar.page.scss'],
})
export class ActualizarPage implements OnInit {

  mascota: any;
  animalito={
    id:"",
    nombre:"",
    tipo:"",
    color:""
  }

  constructor(private apicrud: ApicrudService, private alertcontroller: AlertController, 
              private router: Router,
              private activated: ActivatedRoute) { 
                this.activated.queryParams.subscribe(param=>{
                  this.mascota = JSON.parse(param['mascota']);
                })
              }

  ngOnInit() {
    this.animalito=this.mascota;
  }

  updateAnimalito(){
    this.apicrud.putMascotas(this.animalito).subscribe();
    this.mensaje();
  }

  async mensaje(){
    const alert = await this.alertcontroller.create({
      header: 'Modificando Mascota',
      message: 'Su mascota ha sido modificada',
      buttons: [
         {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.router.navigate(['/tabs/tab1']);
          },
        },
      ],
    });

    await alert.present();
  }

}
