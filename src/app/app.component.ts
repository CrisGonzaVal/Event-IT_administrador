import { Component } from '@angular/core';
interface Menu{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  menu:Menu[]=[
    {
      icon:'sparkles-outline',
      name:'Inicio',
      redirecTo:'/tabs/tab1'
    },
    {
      icon:'person-circle-outline',
      name:'Usuarios',
      redirecTo:'/tabs/tab2'
    },
    {
      icon:'paw-outline',
      name:'Mascotas',
      redirecTo:'/tabs/tab3'
    },
  ]

  constructor() {}
}
