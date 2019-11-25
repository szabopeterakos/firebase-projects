import { Component, Input } from "@angular/core";
import { Observable } from "rxjs";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { map, tap } from "rxjs/operators";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent {
  title = "footballer";
  messages: Observable<Message[]>;
  users: Observable<User[]>;
  appSettings: Observable<AppSetting[]>;
  items: Observable<Message[]>;
  name: any;
  msgVal: string = "";

  constructor(public db: AngularFirestore, public afAuth: AngularFireAuth) {
    this.messages = db.collection<Message>("messages").valueChanges();
    this.users = db.collection<User>("users").valueChanges();
    this.appSettings = db.collection<AppSetting>("app-settings").valueChanges();
  }
}

interface Message {
  id: string;
  message: string;
}

interface User {
  displayLanguage: string;
  displayName: string;
  guests: number;
  id: number;
  isAdmin: boolean;
  status: string;
}

interface AppSetting {
  date: Date;
  eventStatus: string;
  eventTitle: string;
  minTreshold: number;
}
