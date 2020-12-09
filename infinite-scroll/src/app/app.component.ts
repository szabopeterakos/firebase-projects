import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'infinite-scroll';
  name = "Angular 5";
  posts = " "
    .repeat(40)
    .split("")
    .map((s, i) => i + 1);
  selector: string = '.main-panel';

  onScroll() {
    const length = this.posts.length;
    console.log("🚀 ~ file: app.component.ts ~ line 18 ~ AppComponent ~ onScroll ~ length", length)
    setTimeout(() => {
      const p = " "
        .repeat(10)
        .split("")
        .map((s, i) => i + 1 + length);

      // This approach should be used to avoid creating another memory address to the array
      while (p.length) this.posts.push(p.shift());
    }, 1000);
  }

  onScrollDown() {
    console.log('scrolled down!!');
  }

  onScrollUp() {
    console.log('scrolled up!!');
  }
}
