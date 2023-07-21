import { Injectable } from '@angular/core';
// import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { collection } from 'firebase/firestore';
import { Firestore, addDoc, collectionData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private db: Firestore,private router:Router) {}

  async register(form:any){
      return await addDoc(collection(this.db, 'users'), form)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
  }
}
