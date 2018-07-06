import { Component, OnInit, EventEmitter, Output, Input,  } from '@angular/core';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],
})
export class ReadComponent implements OnInit {
  @Input() nowChapter: string;
  @Input() imgNum: number;
  @Output()
  turnBackEvent = new EventEmitter();
  pageString: string;
  chapterString: string;
  constructor() { }
  chapterNum = 1;
  pageNum = 1;
  imgSrc = '';
  ngOnInit() {
    this.chapterString = String(this.nowChapter);
    this.pageString = String(this.pageNum);
    (<HTMLInputElement>document.getElementById('chapter')).value = this.chapterString;
    (<HTMLInputElement>document.getElementById('page')).value = this.pageString;
    this.imgSrc = './image/storyboard-' + this.imgNum + '.png';
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges() {
    (<HTMLInputElement>document.getElementById('chapter')).value = this.chapterString;
    (<HTMLInputElement>document.getElementById('page')).value = this.pageString;
  }

  turnBack() {
    this.turnBackEvent.emit();
  }
}
