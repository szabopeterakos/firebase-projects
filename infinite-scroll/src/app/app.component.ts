import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'infinite-scroll';
  name = "Angular 5";
  posts;
  selector: string = '.main-panel';

  onScroll() {
    const length = this.posts.length;
    setTimeout(() => {
      this.dataservice.loadMore();
    }, 1000);
  }

  constructor(public dataservice: DataService){
    this.posts = this.dataservice.state$
  }

  onScrollDown() {
    console.log('scrolled down!!');
  }

  onScrollUp() {
    console.log('scrolled up!!');
  }
}
