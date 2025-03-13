import { Component } from '@angular/core';
import { Libro } from '../../models/libro.model';
import { LibroService } from '../../services/libro.service';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-libro',
  imports: [FormsModule],
  templateUrl: './libro.component.html',
  styleUrl: './libro.component.css'
})
export class LibroComponent {

  //propiedades
  libros:any;
  libro = new Libro();

  constructor(private libroService:LibroService){
    this.getLibros();
  }

  //método para obtener el listado de los libros
  async getLibros():Promise<void>{
    this.libros = await firstValueFrom(this.libroService.getLibros());
  }

  //método para insertar un libro desde el form
  insertarLibro(){
    this.libroService.agregarLibro(this.libro);
    this.libro = new Libro();
    this.getLibros();
  }

  //método para seleccionar un libro de la tabla
  selectLibro(libroSeleccionado:Libro){
    this.libro = libroSeleccionado;
  }

  //método para modificar un libro desde el form
  updateLibro(){
    this.libroService.modificarLibro(this.libro);
    this.libro = new Libro();
    this.getLibros();
  }

  //método para eliminar un libro
  deleteLibro(){
    this.libroService.eliminarLibro(this.libro);
    this.libro = new Libro();
    this.getLibros();
  }

}
