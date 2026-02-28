export interface Curso{
  nombre: string;
  duracion: number;
  nivel: string;
  estado: string;
}
import { Component } from '@angular/core';
import { CursoService } from '../../Servicios/servicio';

@Component({
  selector: 'app-registro',
  standalone: false,
  templateUrl: './registro.html',
  styleUrl: './registro.scss',
})
export class Registro {
nuevo={ nombre:'', duracion:0,nivel:'Basico', estado:'Activo' };
constructor(private servicio: CursoService){}
registrar(){
  if(this.nuevo.nombre){
    this.servicio.insertarCurso(this.nuevo);
    this.nuevo={nombre:'', duracion:0,nivel:'Basico', estado:'Activo'}

  }else{
    alert("Por favor ingrese un nombre")
  }

}
}
