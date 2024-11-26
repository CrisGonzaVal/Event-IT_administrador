import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class loginPage implements OnInit {

  loginForm: FormGroup;

  userdata:any;

  admin={
    id:"",
    rut:"",
    username:"",
    email:"",
    password:"",
  }

  

  constructor(private alertcontroller: AlertController,
              private router:Router,
              private authservice: AuthService,
              private toast: ToastController,
              private fbuilder: FormBuilder,
              private loadingController: LoadingController, // Importación del controlador de carga
              ) { 

                this.loginForm = this.fbuilder.group({
                  'email' : new FormControl("",[Validators.required, Validators.email]), 
                  'password' : new FormControl("",[Validators.required, Validators.minLength(8)]),
                })
              } /*Llamar las bibliotecas*/

  ngOnInit() {
    this.authservice.cerrarSesionAdmin();
  }

  async login(){
    if (!this.loginForm.valid){
      return;
    }



    // Mostrar el indicador de carga
    const loading = await this.loadingController.create({
      message: 'Validando Administrador...',
      spinner: 'circles', // Cambiar el estilo del spinner si lo deseas
    });
    await loading.present();






    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.authservice.getByEmailAdmin(email).subscribe({next: async (resp) => {
      this.userdata = resp;
      console.log(this.userdata);


      if (this.userdata.length === 0) {
        this.loginForm.reset();
        await loading.dismiss(); // Ocultar el loading
        this.UsuarioNoExiste();
        return;
      }

      this.admin={
        id:this.userdata[0].id,
        rut: this.userdata[0].rut,
        username: this.userdata[0].username,
        password: this.userdata[0].password,
        email:this.userdata[0].email,
      };

      if (this.admin.password !== password) {
        this.loginForm.reset();
        await loading.dismiss(); // Ocultar el loading
        this.ErrorUsuario(); 
        return;
      }


      // Sesión iniciada correctamente
      this.IniciarSesion(this.admin);
      await loading.dismiss(); // Ocultar el loading al finalizar
    },

    
      error: async (err) => {
        console.error(err);
        await loading.dismiss(); // Ocultar el loading en caso de error
        this.ErrorUsuario();
      }
    });

  }

  private IniciarSesion(admin:any){
    this.router.navigateByUrl('/tabs/home', { replaceUrl: true }); // para forzar la recarga completa de la página home si es necesario.
    this.showToast( this.authservice.setSesionAdmin(admin) );

  }

  
  async showToast(msg: any){
    const toast= await this.toast.create({
      message:msg,
      duration: 2000
    })
    toast.present();
  }

  

  
async ErrorUsuario(){
  const alerta = await this.alertcontroller.create({ 
    header : 'Error..',
    message : 'Revise sus credenciales',
    buttons : ['OK']
  })
  alerta.present();
}

async UsuarioNoExiste(){
  const alerta = await this.alertcontroller.create({ 
    header : 'Administrador no  existe...',
    message : 'Debe registrarse..',
    buttons : ['OK']
  })
  alerta.present();
}




}
