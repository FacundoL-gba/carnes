import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { MaterialModule } from '../meterial/material.module';
import { FiambreriaComponent } from './productos/fiambreria/fiambreria.component';
import { VacunosComponent } from './productos/vacunos/vacunos.component';
import { PollosComponent } from './productos/pollos/pollos.component';
import { CerdosComponent } from './productos/cerdos/cerdos.component';
import { CombosComponent } from './productos/combos/combos.component';
import { OfertasComponent } from './productos/ofertas/ofertas.component';



@NgModule({
  declarations: [
    InicioComponent,
    FiambreriaComponent,
    VacunosComponent,
    PollosComponent,
    CerdosComponent,
    CombosComponent,
    OfertasComponent
  ],
  exports: [
    InicioComponent,
    CerdosComponent,
    CombosComponent,
    FiambreriaComponent,
    OfertasComponent,
    PollosComponent,
    VacunosComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ComponenteModule { }