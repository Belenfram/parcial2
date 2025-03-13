import { Component } from '@angular/core';
import { Productos } from '../../models/productos';
import { ProductosService } from '../../services/productos.service';
import { firstValueFrom } from 'rxjs';
//import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  //propiedades
  productos:any;
  producto = new Productos();

  constructor(private productosService:ProductosService){
    this.getProductos();
  }

  //método para obtener el listado de los libros
  async getProductos():Promise<void>{
    this.productos = await firstValueFrom(this.productosService.getProductos());
  }

  //método para insertar un libro desde el form
  insertarProducto(){
    this.productosService.agregarProducto(this.producto);
    this.producto = new Productos();
    this.getProductos();
  }

  //método para seleccionar un libro de la tabla
  selectProducto(productoSeleccionado:Productos){
    this.producto = productoSeleccionado;
  }

  //método para modificar un libro desde el form
  updateProducto(){
    this.productosService.modificarProducto(this.producto);
    this.producto = new Productos();
    this.getProductos();
  }

  //método para eliminar un libro
  deleteProducto(){
    this.productosService.eliminarProducto(this.producto);
    this.producto = new Productos();
    this.getProductos();
  }

}


