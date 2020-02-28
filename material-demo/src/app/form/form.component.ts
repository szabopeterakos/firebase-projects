import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.sass"]
})
export class FormComponent implements OnInit {
  selectedValue;
  list: { name: string }[] = [
    { name: "one" },
    { name: "two" },
    { name: "who" }
  ];
  constructor() {}

  ngOnInit() {}
  displFn(subj) {
    return subj.name.toUpperCase();
  }
}
