import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service'; //1
import { AlertController } from '@ionic/angular';
import { ApicrudService } from '../services/apicrud.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class homePage {

  admin: any;

  constructor(
              private menucontroller:MenuController,
              private router:Router,
              private auth : AuthService,
              private alert: AlertController,
              private api:ApicrudService,
              private toast: ToastController,
              
              ) { 
              }

  
  ngOnInit() {
   // recuperar objeto recibido por url
     this.admin = this.auth.getSesionAdmin();
     console.log("se inicia vista home con ngOnInit");
  }

  ionViewWillEnter(){
    console.log("Se inicia denuevo la vista home");
    this.admin = this.auth.getSesionAdmin();
   }


  mostrarMenu(){
    this.menucontroller.open('first');
  }

// Método para navegar a otras páginas
navegar(page: string) {
  this.router.navigate([`/tabs/${page}`]);
}


  async showToast(msg: any){
    const toast= await this.toast.create({
      message:msg,
      duration: 4000
    })
    toast.present();
  }
}





