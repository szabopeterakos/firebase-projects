import { Component, Input } from "@angular/core";
import { Observable } from "rxjs";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { takeLast, tap, map, flatMap } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent {
  title = "chatapp";
  itemsRef: AngularFireList<any>;
  items: Observable<Message[]>;
  messages: Message[] = [];
  name: any;
  msgVal: string = "";

  constructor(public db: AngularFireDatabase, public afAuth: AngularFireAuth) {
    this.itemsRef = db.list("/",ref=>ref.limitToLast(4));
    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes => {
        return changes.map(c => ({ user: c.payload.val().name, message: c.payload.val().message }));
      })
    );
    this.afAuth.user.subscribe(x => {
      this.name = x;
      this.items.subscribe((array)=>{
        array.forEach(element => {
          this.messages.push(element);
        });
        console.log(`this is an array ${array}`)
      }
      );
    });
  }
  login() {
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }

  chatSend(message: string) {
    this.items[0].push({ message: message, name: this.name.facebook.displayName });
    this.msgVal = "";
  }
}

interface Message {
  user: string;
  message: string;
}

interface MyResponse {
  message: Message[];
}
