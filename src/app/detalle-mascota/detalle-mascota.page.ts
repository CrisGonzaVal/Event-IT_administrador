import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApicrudService } from '../services/apicrud.service';
import { misQr } from 'src/interfaces/users';
import { AuthService } from '../services/auth.service';
//npm install angularx-qrcode --save

@Component({
  selector: 'app-detalle-mascota',
  templateUrl: './detalle-mascota.page.html',
  styleUrls: ['./detalle-mascota.page.scss'],
})
export class DetalleMascotaPage implements OnInit {

  mascota: any;
  
  id:any;

  qrdata:string;

  nombre: any;

  animalito={
    id:0,
    nombre:"",
    tipo:"",
    color:""
  }

  newQr: misQr={
    nomMascota:'',
    tipoMascota:'',
    username:'',
  }

  constructor(private activated: ActivatedRoute, 
              private authservice: AuthService,
              private router: Router, 
              private alertcontroller: AlertController, 
              private apicrud: ApicrudService) {
                this.activated.queryParams.subscribe(param =>{
                  this.mascota =JSON.parse(param['mascota']);
                })
                this.qrdata='';
                this.nombre= sessionStorage.getItem('username');
               }

  ngOnInit() {
    this.id = this.mascota.id;
    this.animalito = this.mascota;
  }

  volver(){
    this.router.navigate(['/tabs/tab3']);
  }

  actualizarMascota(Observable:any){
    this.router.navigate(['/actualizar', this.animalito.id],
      {queryParams: {mascota :JSON.stringify(Observable)}}
    )
  }

  generarQr(){
    this.qrdata='';
    this.qrdata = this.mascota.nombre + this.mascota.tipo + this.nombre;
    console.log(this.qrdata);
    //creamos objeto para almacenar en el nuevo json - qr
    this.newQr.nomMascota=this.mascota.nombre;
    this.newQr.tipoMascota=this.mascota.tipo;
    this.newQr.username=this.nombre;
    this.authservice.PostQr(this.newQr).subscribe();

  }

  async consultaElimina(){
    const alert = await this.alertcontroller.create({
      header: 'Confirmar Eliminación',
      message: 'Elimina la información?',
      buttons: [
         {
          text: 'Si',
          role: 'confirm',
          handler: () => {
            this.elimina();
          },
        },
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            this.router.navigate(['/tabs/tab1']);
          },
        },
      ],
    });

    await alert.present();
  }

elimina(){
  this.apicrud.deleteMascota(this.mascota).subscribe();
  this.mensaje();
}

async mensaje(){
  const alert = await this.alertcontroller.create({
    header: 'Eliminando Mascota',
    message: 'Su mascota ha sido eliminada',
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


async mostrarMensaje(){
  const alerta = await this.alertcontroller.create({
    header:'Creando Palabra',
    message: 'Su QR ha sido Almacenado',
    buttons: ['Ok']
  })
  alerta.present();
}


}





  

  


