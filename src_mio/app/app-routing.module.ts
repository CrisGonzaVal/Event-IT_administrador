//para enrutar paginas
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutorizadoGuard } from './guards/autorizado.guard';

//arreglo de rutas page
const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio', //page que muestra cuando levante el servidor
    pathMatch: 'full'
  },

  //page inicio
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },

  //page alert
  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertPageModule)
  },

  //page card
  {
    path: 'card',
    loadChildren: () => import('./pages/card/card.module').then( m => m.CardPageModule), canActivate:[AutorizadoGuard]
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule), canActivate:[AutorizadoGuard]
  },
  {
    path: 'detalle',
    loadChildren: () => import('./detalle/detalle.module').then( m => m.DetallePageModule), canActivate:[AutorizadoGuard] //pasa por el metodo de guard
  },
  {
    path: 'animalitos',
    loadChildren: () => import('./pages/animalitos/animalitos.module').then( m => m.AnimalitosPageModule), canActivate:[AutorizadoGuard]
  },
  {
    path: 'agregar',
    loadChildren: () => import('./agregar/agregar.module').then( m => m.AgregarPageModule), canActivate:[AutorizadoGuard]
  },
  {
    path: 'detalle-mascota',
    loadChildren: () => import('./detalle-mascota/detalle-mascota.module').then( m => m.DetalleMascotaPageModule), canActivate:[AutorizadoGuard]
  },
  {
    //recibe el id del animal (actualizar, elimianr o modificar)
    path: 'actualizar/:id', 
    loadChildren: () => import('./actualizar/actualizar.module').then( m => m.ActualizarPageModule), canActivate:[AutorizadoGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
