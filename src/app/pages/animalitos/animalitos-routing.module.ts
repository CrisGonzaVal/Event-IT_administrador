import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimalitosPage } from './animalitos.page';

const routes: Routes = [
  {
    path: '',
    component: AnimalitosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalitosPageRoutingModule {}
