import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";

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
  list2 = ["tarka", "barka", "szarka", "farka", "marka"];
  myControl = new FormControl();
  filteredOptions: Observable<{ name: string }[]>;
  filteredOptions2: Observable<string[]>;
  constructor() {}

  ngOnInit() {
    this.filteredOptions2 = this.myControl.valueChanges.pipe(
      startWith(""),
      map(val => this._filter(val))
    );
  }

  // _filter(value: string) {
  //   return this.list2.filter(v => v.toLocaleLowerCase().includes(v));
  // }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.list2.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }

  displFn(subj) {
    return subj ? subj.toUpperCase() : undefined;
  }
}
