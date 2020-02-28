import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { MatSnackBar } from "@angular/material";

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
  minDate = new Date();
  constructor(private snackBar: MatSnackBar) {}

  openSnack(msg, act) {
    let snackBarRef = this.snackBar.open(msg, act, { duration: 2000 });

    snackBarRef.afterDismissed().subscribe(d => {
      console.log("dismissed");
    });

    snackBarRef.onAction().subscribe(d => {
      console.log("hit action");
    });
  }

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
