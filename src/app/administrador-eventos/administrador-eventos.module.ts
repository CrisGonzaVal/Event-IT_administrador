import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministradorEventosPageRoutingModule } from './administrador-eventos-routing.module';

import { AdministradorEventosPage } from './administrador-eventos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministradorEventosPageRoutingModule
  ],
  declarations: [AdministradorEventosPage]
})
export class AdministradorEventosPageModule {}
