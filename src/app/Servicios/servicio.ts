import { Injectable } from '@angular/core';
import { Curso } from '../Components/registro/registro';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  private cursos:Curso[]=[];
  constructor(){}
  obtenerCursos(){
    return this.cursos
  }
  insertarCurso(curso: Curso){
   this.cursos.push(curso)
  }
  eliminarCurso(index:number){
    this.cursos.splice(index,1)
  }
  modificarEstado(index:number){
    if( this.cursos[index].estado === 'Activo'){
      this.cursos[index].estado = 'Inactivo'
    }else{
      this.cursos[index].estado= 'Activo'
    }
  }
}
