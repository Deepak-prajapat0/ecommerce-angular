import { Injectable } from '@angular/core';
// import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { collection } from 'firebase/firestore';
import { Firestore, addDoc, collectionData } from '@angular/fire/firestore';
import { Auth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { from } from 'rxjs';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private db: Firestore,
    private auth: Auth,
    private router: Router
  ) {}

  register(email: any, password: any) {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }
  login(email: any, password: any) {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }
  googleSignIn(){
      return from(signInWithPopup(this.auth,new GoogleAuthProvider))
    }
  }
