import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  chapter = [ [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12] , [13 , 14 , 15 ] ];
  nowChapter = 1;
  nowChapterPage = 1;
  imgNum = this.chapter[this.nowChapter][this.nowChapterPage];
  nowPage = 1;

  showChapter(num) {
    this.nowChapter = num;
    this.nowPage = 2;
  }

  turnBack() {
    this.nowPage = 1;
  }
}
