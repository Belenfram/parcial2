import { Component } from '@angular/core';
import { Equipo } from '../../models/equipo'; 
import { EquipoService } from '../../services/equipo.service';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-equipo',
  imports: [FormsModule],
  templateUrl: './equipo.component.html',
  styleUrl: './equipo.component.css'
})
export class EquipoComponent {

  //propiedades
    equipos:any;
    equipo = new Equipo();
  
    constructor(private equipoService:EquipoService){
      this.getEquipos();
    }
  
    async getEquipos():Promise<void>{
      this.equipos = await firstValueFrom(this.equipoService.getEquipos());
    }

    insertarEquipo(){
      this.equipoService.agregarEquipo(this.equipo);
      this.equipo = new Equipo();
      this.getEquipos();
    }
  
    //método para seleccionar un libro de la tabla
    selectEquipo(equipoSeleccionado:Equipo){
      this.equipo = equipoSeleccionado;
    }
  
    //método para modificar un libro desde el form
    updateEquipo(){
      this.equipoService.modificarEquipo(this.equipo);
      this.equipo = new Equipo();
      this.getEquipos();
    }
  
    //método para eliminar un libro
    deleteEquipo(){
      this.equipoService.eliminarEquipo(this.equipo);
      this.equipo = new Equipo();
      this.getEquipos();
    }

}
