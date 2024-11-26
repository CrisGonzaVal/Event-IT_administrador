import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ApicrudService } from '../services/apicrud.service';
import { Users } from 'src/interfaces/users';
import { ToastController } from '@ionic/angular';
import { Administrador } from 'src/interfaces/administrador';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.page.html',
  styleUrls: ['./editar-usuario.page.scss'],
})
export class EditarUsuarioPage implements OnInit {

  admin: any;

  

  constructor(private auth: AuthService,
              private router:Router,
              private api: ApicrudService,
              private toast: ToastController) { }

            

  ngOnInit() {
    //Recuperar datos del usuario del servicio de autenticación
    this.admin = this.auth.getSesionAdmin();
  }






  actualizarAdmin(){

    this.api.putAdminById(this.admin.id, this.admin).subscribe({

      
      next: (response: Administrador) => {

        this.auth.setSesionAdmin(this.admin);
        this.showToast('Administrador actualizado con éxito:');
        // Redirigir al usuario a la página principal si la actualización fue exitosa
        this.router.navigate(['/tabs/home']);
      },
      error: (error: any) => {
        this.showToast('Error actualizando administrador: '+ error.message);
        console.log(error.message);
        // Manejar el error
      }
    });


  }





  async showToast(msg: any){
    const toast= await this.toast.create({
      message:msg,
      duration: 2000
    })
    toast.present();
  }
}
