import { Component, Output, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @Input() nowChapter: number;
  @Input() imgNum: number;
  @Input() chapter: number[][];
  @Output()
  nowPage: number;
  nowChapterPage = 0;
  arrayChapter: number;


  ngOnInit() {
    this.chapter = [ [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12] , [13 , 14 , 15 , 16 , 17 , 18 , 19 , 20 , 21 , 22 , 23 , 24] ];
    this.nowPage = 1;
    this.nowChapter = 1;
    this.arrayChapter = this.nowChapter - 1;
    this.imgNum = this.chapter[this.arrayChapter][this.nowChapterPage];
  }

  showChapter(num) {
    this.nowChapter = num;
    this.arrayChapter = this.nowChapter - 1;
    this.imgNum = this.chapter[this.arrayChapter][this.nowChapterPage];

    this.nowPage = 2;
  }

  turnBack() {
    this.nowPage = 1;
  }
}
