import {
  Component,
  ViewChild,
  AfterViewInit,
  OnInit,
  ElementRef,
} from "@angular/core";
import { LessonsDataSource } from "./lessons.datasource";
import { CoursesService } from "./lesson.service";
import { tap, debounceTime, distinctUntilChanged } from "rxjs/operators";
import { MatPaginator, MatSort } from "@angular/material";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./lesson.model";
import { merge } from "rxjs/internal/observable/merge";
import { fromEvent } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit, OnInit {
  title = "material-table";
  displayedColumns = ["seqNo", "description", "duration"];
  dataSource: LessonsDataSource; // defines an instance of LessonsDataSource, that is being passed to mat-table via the template
  course: Course;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("input", { static: true }) input: ElementRef;

  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.course = this.route.snapshot.data["course"];
    this.dataSource = new LessonsDataSource(this.coursesService);

    /*
    The Data Source calls the LessonsService,
    which triggers an HTTP request to fetch the data
    The Data Source then emits the data via the lessonsSubject, which causes the Observable returned by connect()
    to emit the lessons page
    The mat-table Data Table component has subscribed to the connect() observable and retrieves the new lessons page
    The Data Table then displays the new lessons page, without knowing where the data came from or what triggered its arrival
    */

    this.dataSource.loadLessons(1);
  }

  ngAfterViewInit() {
    // reset the paginator after sorting
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    // server-side search
    fromEvent(this.input.nativeElement, "keyup")
      .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        tap(() => {
          this.paginator.pageIndex = 0;
          this.loadLessonsPage();
        })
      )
      .subscribe();

    // on sort or paginate events, load a new page
    // this.paginator.page.pipe(tap(() => this.loadLessonsPage())).subscribe(); // that was before merge-ing :)
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(tap(() => this.loadLessonsPage()))
      .subscribe();
  }

  loadLessonsPage() {
    this.dataSource.loadLessons(
      this.course.id,
      this.input.nativeElement.value,
      this.sort.direction,
      this.paginator.pageIndex,
      this.paginator.pageSize
    );
  }
}
