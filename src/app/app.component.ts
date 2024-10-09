import { Component } from '@angular/core';

interface Opciones{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
//arreglo de los elementos 
  opciones: Opciones[] = [
    {
      icon: 'person-circle-outline',
      name: 'Usuarios',
      redirecTo: '/alert'

    },
    {
      icon: 'body-outline',
      name: 'Post',
      redirecTo: '/card'

    },
    {
      icon: 'call-outline',
      name: 'Contacto',
      redirecTo: '/contact'

    },
    {
      icon: 'bug-outline',
      name: 'Mascotas',
      redirecTo: '/animalitos'
    },

  ]

  
  constructor() {}
}
