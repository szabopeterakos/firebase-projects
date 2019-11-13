import { Component, Input } from "@angular/core";
import { Observable } from "rxjs";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { map } from "rxjs/operators";

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
    this.itemsRef = db.list("/", ref => ref.limitToLast(4));
    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes => {
        return changes.map(c => ({
          user: c.payload.val().user,
          message: c.payload.val().message
        }));
      })
    );
    this.afAuth.user.subscribe(x => {
      this.name = x;
      this.items.subscribe(array => {
        array.forEach(element => {
          this.messages.push(element);
        });
        console.log(array);
      });
    });
  }
  login() {
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }

  chatSend(message: string) {
    const massageObject = { message: message, user: this.name.displayName };
    this.msgVal = "";
    this.messages = [];
    this.itemsRef.push(massageObject);
  }
}

interface Message {
  user: string;
  message: string;
}

interface MyResponse {
  message: Message[];
}
