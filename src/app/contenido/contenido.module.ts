import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ContenidoPageRoutingModule } from './contenido-routing.module';
import { ContenidoPage } from './contenido.page';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContenidoPageRoutingModule
  ],
  declarations: [ContenidoPage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class ContenidoPageModule {}
