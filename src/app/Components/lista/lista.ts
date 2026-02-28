import { Component } from '@angular/core';
import { CursoService } from '../../Servicios/servicio';

@Component({
  selector: 'app-lista',
  standalone: false,
  templateUrl: './lista.html',
  styleUrl: './lista.scss',
})
export class Lista {
constructor(private servicio: CursoService){}
  get Cursos(){
    return this.servicio.obtenerCursos();
  }
  eliminar(i: number){
    this.servicio.eliminarCurso(i)
  }
  alternar(i: number){
this.servicio.modificarEstado(i)
  }

}
