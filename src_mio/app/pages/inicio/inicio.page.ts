import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular'; 
import { AlertController } from '@ionic/angular'; //cuadros de mensajes
import { Router } from '@angular/router'; /* redirecciona a otras pages */
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup , FormControl, Validators} from '@angular/forms';

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

  userdata:any;

  usuario={
    id:0,
    username:"",
    email:"",
    password:"",
    isactive:false
  }

  loginForm: FormGroup;

  constructor(private menucontroller: MenuController, 
              private alertcontroller: AlertController,
              private router:Router,
              private authservice: AuthService,
              private toast: ToastController,
              private fbuilder: FormBuilder) { 

                this.loginForm = this.fbuilder.group({
                  'username' : new FormControl("",[Validators.required, Validators.minLength(6)]), 
                  'password' : new FormControl("",[Validators.required, Validators.minLength(8)]),
                })
              } /*Llamar las bibliotecas*/

  ngOnInit() {
  }

  login(){
    if (!this.loginForm.valid){
      return;
    }

    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    this.authservice.getByUsername(username).subscribe(resp => {
      this.userdata = resp;
      console.log(this.userdata);
      if (this.userdata.length === 0) {
        this.loginForm.reset();
        this.UsuarioNoExiste();
        return;
      }

      this.usuario={
        id: this.userdata[0].id,
        username: this.userdata[0].username,
        password: this.userdata[0].password,
        email:this.userdata[0].email,
        isactive: this.userdata[0].isactive
      }
      if (this.usuario.password !== password) {
        this.loginForm.reset();
        this.ErrorUsuario(); 
        return;
      }
      if (!this.usuario.isactive) {
        this.loginForm.reset();
        this.UsuarioInactivo();
        return;
      }
      this.IniciarSesion(this.usuario);


    })

  }

  private IniciarSesion(usuario:any){
    sessionStorage.setItem('username', usuario.username);
    sessionStorage.setItem('password', usuario.password);
    sessionStorage.setItem('ingresado', 'true');
    this.showToast('Sesión Iniciada '+ this.usuario.username);
    this.router.navigate(['/tabs/tab1']);

  }

  
  async showToast(msg: any){
    const toast= await this.toast.create({
      message:msg,
      duration: 3000
    })
    toast.present();
  }

  
  async UsuarioInactivo(){
    const alerta = await this.alertcontroller.create({ 
      header : 'Usuario inactivo',
      message : 'Contactar a admin@admin.cl',
      buttons : ['OK']
    })
    alerta.present();
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
    header : 'No existe...',
    message : 'Debe registrarse..',
    buttons : ['OK']
  })
  alerta.present();
}




  mostrarMenu(){
    this.menucontroller.open('first'); /*permite abrir el menu diseñado en el componente app*/
  }

  /* necesita intervesion de un tercero x eso es asincronico */
  async mensaje(){
    const alert = await this.alertcontroller.create({
      header: 'Eliminar Cuenta!',
      message: 'Estás seguro de eliminar tu cuenta?',
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
          text: 'Si Seguro',
          role: 'confirm',
          handler: () => {
            console.log('El usuario a confirmado el ingreso');
            this.router.navigate(['/login']); //Permite navegar a otro page
          },
        },
      ],
    });

    await alert.present();

    
  }
}
