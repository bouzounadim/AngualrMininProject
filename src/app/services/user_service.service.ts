import { Student } from './../Model/Student';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

import { User } from '../Model/User';
import { auth } from 'firebase';
@Injectable({
  providedIn: 'root'
})
// tslint:disable-next-line: class-name
export class User_serviceService {
  user: User;
constructor(private firestore: AngularFirestore , public auth: AngularFireAuth) {
  this.auth.authState.subscribe(userResponse => {
    if (userResponse) {
      localStorage.setItem('user', JSON.stringify(userResponse));
    } else {
      localStorage.setItem('user', null);
    }
  });
 }


loginWithFacebook(){

}


async LoginWithGamil(){
  return await this.auth.signInWithPopup(new auth.GoogleAuthProvider());

}

async LoginWithFacebook(){
  return await this.auth.signInWithPopup(new auth.FacebookAuthProvider());

}

isUserLoggedIn() {
  return JSON.parse(localStorage.getItem('user'));
}

logout() {
  this.auth.signOut();
  localStorage.setItem('user', null);
}

getStudent() {
  return this.firestore.collection('users').snapshotChanges();
}

createStudent(student: Student){
  return this.firestore.collection('users').add(student);
}


getStudentde(id){
  return this.firestore.collection('users').doc(id).snapshotChanges();

}


deleteUser(userKey){
  return this.firestore.collection('users').doc(userKey).delete();
}

searchUsers(searchValue){
  return this.firestore.collection('users',ref => ref.where('nom', '>=', searchValue)
    .where('nom', '<=', searchValue + '\uf8ff'))
    .snapshotChanges()
}

searchClasse(searchValue){
  return this.firestore.collection('users',ref => ref.where('classee', '==', searchValue))
  .snapshotChanges();
    
}

updateUser(userKey, value){
  return this.firestore.collection('users').doc(userKey).set(value);
}

}
