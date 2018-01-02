import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class UbicacionService {

  constructor(
    private db:AngularFirestore
  ) { }

  getUsuarios(){
    return this.db.collection("usuarios").valueChanges();
  }

}
