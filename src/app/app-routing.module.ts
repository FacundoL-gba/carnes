import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componente/inicio/inicio.component';
import { Inicio2Component } from './componente/inicio2/inicio2.component';
import { VacunosComponent } from './componente/productos/vacunos/vacunos.component';


const routes: Routes = [
  {path: '', component:Inicio2Component},
  {path: 'inicio', component:InicioComponent},
  {path: 'vacunos', component:VacunosComponent},
  {path: 'search/:searchTem', component:InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
