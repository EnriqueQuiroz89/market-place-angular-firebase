import { Injectable } from '@angular/core';
import { AngularFireAuth }  from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //inyectamos la dependencia
  constructor(private angularFireAuth: AngularFireAuth ) { }


createUser(email: string, password: string){
  //retrona una promesa
 return this.angularFireAuth.createUserWithEmailAndPassword(email,password);
}

login(email: string, password: string ){

 return this.angularFireAuth.signInWithEmailAndPassword(email, password);
}

logout(){
return this.angularFireAuth.signOut();

}

}


