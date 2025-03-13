import { Injectable, inject } from '@angular/core';
import { Libro } from '../models/libro.model';
import { first } from 'rxjs';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private db : Firestore = inject(Firestore);

  constructor() { }

  //método para obtener todos los documentos de la colección
  getLibros(){
    const librosCollection = collection(this.db, 'libros');
    return collectionData((librosCollection), {idField: 'id'})
      .pipe(first(),);
  }

  //método para agregar un nuevo documento a la colección
  agregarLibro(libro:Libro){
    const librosCollection = collection(this.db, 'libros');
    const libroData = {
      titulo: libro.titulo,
      autor: libro.autor,
      editorial: libro.editorial,
      anioPublicacion: libro.anioPublicacion
    };
    addDoc(librosCollection, libroData);
  }

  //método para modificar un documento
  modificarLibro(libro:Libro){
    const documentRef = doc(this.db, 'libros', libro.id);
    updateDoc(documentRef,{
      titulo: libro.titulo,
      autor: libro.autor,
      editorial: libro.editorial,
      anioPublicacion: libro.anioPublicacion
    });
  }

  //método para eliminar un libro
  eliminarLibro(libro:Libro){
    const documentRef = doc(this.db, 'libros', libro.id);
    deleteDoc(documentRef);
  }
}
