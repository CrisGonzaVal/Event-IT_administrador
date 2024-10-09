import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimalitosPageRoutingModule } from './animalitos-routing.module';

import { AnimalitosPage } from './animalitos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimalitosPageRoutingModule
  ],
  declarations: [AnimalitosPage]
})
export class AnimalitosPageModule {}
