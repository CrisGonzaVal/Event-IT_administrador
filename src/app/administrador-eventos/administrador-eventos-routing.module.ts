import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministradorEventosPage } from './administrador-eventos.page';

const routes: Routes = [
  {
    path: '',
    component: AdministradorEventosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministradorEventosPageRoutingModule {}
