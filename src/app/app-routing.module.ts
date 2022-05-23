import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componente/inicio/inicio.component';
import { VacunosComponent } from './componente/productos/vacunos/vacunos.component';


const routes: Routes = [
  {path: '', component:InicioComponent},
  {path: 'inicio', component:InicioComponent},
  {path: 'vacunos', component:VacunosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
