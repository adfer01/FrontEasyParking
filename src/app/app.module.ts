import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarVehiculoComponent } from './Components/registrar-vehiculo/registrar-vehiculo.component';
import { ActualizarVehiculoComponent } from './Components/actualizar-vehiculo/actualizar-vehiculo.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarVehiculoComponent,
    ActualizarVehiculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
