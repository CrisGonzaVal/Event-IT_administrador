import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LectorCamaraPage } from './lector-camara.page';

const routes: Routes = [
  {
    path: '',
    component: LectorCamaraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LectorCamaraPageRoutingModule {}
