import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LectorCamaraPageRoutingModule } from './lector-camara-routing.module';

import { LectorCamaraPage } from './lector-camara.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LectorCamaraPageRoutingModule
  ],
  declarations: [LectorCamaraPage]
})
export class LectorCamaraPageModule {}
