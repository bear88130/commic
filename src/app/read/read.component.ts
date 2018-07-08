import { Component, OnInit, EventEmitter, Output, Input,  } from '@angular/core';
import { element } from 'protractor';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],
})
export class ReadComponent implements OnInit {
  @Input() nowChapter: string;
  @Input() imgNum: number;
  @Input() chapterArray: number[][];
  @Output() turnBackEvent = new EventEmitter();

  pageString: string;
  chapterString: string;
  chapterNum: number;
  arrayChapterPage: number[];
  arrayChapterPageName: string[];
  pageNum: number;
  imgSrc: string;
  dropdownC: string;
  dropdownP: string;
  numC: number;
  numP: number;

  constructor() { }

  ngOnInit() {
    this.arrayChapterPage = this.chapterArray[Number(this.nowChapter) - 1];
    this.chapterNum = 1;
    this.pageNum = 0;
    this.chapterString = String(this.nowChapter);
    this.pageString = String(this.pageNum);
    (<HTMLSelectElement>document.getElementById('chapter')).value = this.chapterString;
    (<HTMLInputElement>document.getElementById('page')).value = '1';
    this.changeImg();
  }

  turnBack() {
    this.turnBackEvent.emit();
  }

  changeChapter($event) {
    if ($event.target.value === '0') {
      alert('請選擇章數');
    } else {
      this.changeImg();
    }
  }

  changeChapterPage($event) {
    if ($event.target.value === '0') {
      alert('請選擇頁數');
    } else {
      this.changeImg();
    }
  }

  prePage() {
    const page = <HTMLSelectElement>document.getElementById('page');
    if (page.value === '1') {
      alert('第一頁');
    } else {
      page.value = String(Number(page.value) - 1);
      this.changeImg();
    }
  }

  nextPage() {
    const page = <HTMLSelectElement>document.getElementById('page');
    if (page.value === String(page.length - 1)) {
      alert('最後一頁');
    } else {
      page.value = String(Number(page.value) + 1);
    }
    this.changeImg();
  }

    turnPick(num) {
      const page = <HTMLSelectElement>document.getElementById('page');
      page.value = String(num);
      this.changeImg();
    }

    changeImg() {
    // 顯示下拉選單的值
    this.dropdownC = (<HTMLSelectElement>document.getElementById('chapter')).value;
    this.dropdownP = (<HTMLInputElement>document.getElementById('page')).value;
    // 陣列的編號
    this.numC = Number((<HTMLSelectElement>document.getElementById('chapter')).value) - 1;
    this.numP = Number((<HTMLInputElement>document.getElementById('page')).value) - 1;
    // 圖片陣列取得的值
    this.imgNum = this.chapterArray[this.numC][this.numP];
    this.imgSrc = './image/storyboard-' + this.imgNum + '.png';
  }

  TestSelected(num) {
    if (num === this.numP + 1) {
      return true;
    } else {
      return false;
    }
  }
}
