import { Component, OnInit } from "@angular/core";
import { Message, User, AppSetting } from "../database.model";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.less"]
})
export class MessagesComponent implements OnInit {
  title = "footballer";
  messages: Message[] = [
    { id: "Tom Johns", message: "This event starts 18:00pm?" },
    { id: "Tony Stark", message: "@Stark are you in?" },
    { id: "Andrea Bocelli", message: "I can pink up you @Tim" },
    { id: "Andrea Bocelli", message: "Sorry @Tim :(" }
  ];
  users: User[] = [
    {
      displayLanguage: "string",
      displayName: "string",
      guests: 0,
      id: 123,
      isAdmin: true,
      status: "string"
    }
  ];
  appSettings: AppSetting[] = [
    {
      date: new Date(),
      eventStatus: "string",
      eventTitle: "string",
      minTreshold: 7
    }
  ];

  constructor() {}

  ngOnInit() {}
}
