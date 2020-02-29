import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-my-dialog",
  templateUrl: "./my-dialog.component.html",
  styleUrls: ["./my-dialog.component.sass"]
})
export class MyDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {}
}
