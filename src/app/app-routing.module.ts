import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarVehiculoComponent } from './Components/registrar-vehiculo/registrar-vehiculo.component';

const routes: Routes = [
  {path: 'registro', component: RegistrarVehiculoComponent},
  {path: '**', redirectTo: 'registro'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
