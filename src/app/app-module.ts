import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { App } from './app';
import { Registro } from './Components/registro/registro';
import { Lista } from './Components/lista/lista';
import { CursoService } from './Servicios/servicio';

@NgModule({
  declarations: [
    App,
    Registro,
    Lista
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CursoService], 
  bootstrap: [App]
})
export class AppModule { }