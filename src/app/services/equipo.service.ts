import { Injectable, inject } from '@angular/core';
import { Equipo } from '../models/equipo';
import { first } from 'rxjs';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  private db : Firestore = inject(Firestore);

  constructor() { }

    getEquipos(){
      const equiposCollection = collection(this.db, 'equipos');
      return collectionData((equiposCollection), {idField: 'id'})
        .pipe(first(),);
    }
  
    agregarEquipo(equipo:Equipo){
      const equiposCollection = collection(this.db, 'equipos');
      const equipoData = {
        nombre: equipo.nombre,
        region: equipo.region,
        nojugadores: equipo.nojugadores,
        manager: equipo.manager
      };
      addDoc(equiposCollection, equipoData);
    }
  
    //método para modificar un documento
    modificarEquipo(equipo:Equipo){
      const documentRef = doc(this.db, 'equipos', equipo.id);
      updateDoc(documentRef,{
        nombre: equipo.nombre,
        region: equipo.region,
        nojugadores: equipo.nojugadores,
        manager: equipo.manager
      });
    }
  
    //método para eliminar un libro
    eliminarEquipo(equipo:Equipo){
      const documentRef = doc(this.db, 'equipos', equipo.id);
      deleteDoc(documentRef);
    }
}


