import { Injectable, inject } from '@angular/core';
import { Productos } from '../models/productos';
import { first } from 'rxjs';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private db : Firestore = inject(Firestore);

  constructor() { }

  //método para obtener todos los documentos de la colección
    getProductos(){
      const productosCollection = collection(this.db, 'productos');
      return collectionData((productosCollection), {idField: 'id'})
        .pipe(first(),);
    }
  
    //método para agregar un nuevo documento a la colección
    agregarProducto(producto:Productos){
      const productosCollection = collection(this.db, 'productos');
      const libroData = {
        descripcion: producto.descripcion,
        precio: producto.precio,
      };
      addDoc(productosCollection, libroData);
    }
  
    //método para modificar un documento
    modificarProducto(producto:Productos){
      const documentRef = doc(this.db, 'productos', producto.id);
      updateDoc(documentRef,{
        descripcion: producto.descripcion,
        precio: producto.precio,
      });
    }
  
    //método para eliminar un libro
    eliminarProducto(producto:Productos){
      const documentRef = doc(this.db, 'productos', producto.id);
      deleteDoc(documentRef);
    }

}
