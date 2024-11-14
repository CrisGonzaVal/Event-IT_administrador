import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleMascotaPageRoutingModule } from './detalle-mascota-routing.module';

import { DetalleMascotaPage } from './detalle-mascota.page';
import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QRCodeModule,
    IonicModule,
    DetalleMascotaPageRoutingModule
  ],
  declarations: [DetalleMascotaPage]
})
export class DetalleMascotaPageModule {}
