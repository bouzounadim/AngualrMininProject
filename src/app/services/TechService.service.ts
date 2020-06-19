import { Tech } from './../Model/Tech';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechServiceService {

constructor(private firestore: AngularFirestore) { }



addtech(data){
  return this.firestore.collection('technologies').add(data);


}

getall(){
  return this.firestore.collection('technologies').valueChanges();
  
}


}


