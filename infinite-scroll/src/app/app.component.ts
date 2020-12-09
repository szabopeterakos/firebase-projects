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
      // const p = " "
      //   .repeat(10)
      //   .split("")
      //   .map((s, i) => i + 1 + length);

      // This approach should be used to avoid creating another memory address to the array
      // while (p.length) this.posts.push(p.shift());
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
