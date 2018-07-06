import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output()
showChapterEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  selectChapter(num) {
    this.showChapterEvent.emit(num);
  }

}
