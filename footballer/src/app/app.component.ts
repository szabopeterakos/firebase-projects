import { Component, Input } from "@angular/core";
import { Observable } from "rxjs";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { map, tap } from "rxjs/operators";
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent {
  title = "footballer";
  messages: Observable<any>;
  users: Observable<any>;
  appSettings: Observable<any>;
  items: Observable<Message[]>;
  name: any;
  msgVal: string = "";

  constructor(public db: AngularFirestore, public afAuth: AngularFireAuth) {
    this.messages = db.collection("messages").valueChanges();
    this.users = db.collection("users").valueChanges();
    this.appSettings = db.collection("app-settings").valueChanges();
  }
}

interface Message {
  user: string;
  message: string;
}

interface MyResponse {
  message: Message[];
}
