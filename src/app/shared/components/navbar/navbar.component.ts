import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent implements OnInit {
  title = 'Moleqular Sequences';
  scrWidth: any;
  isTitleDisplay: boolean = true;
  clickCounter: number = 0;

  constructor() {

  }


  ngOnInit(): void {
    this.scrWidth = window.screen.width;

  }

  setDisplayTite(): boolean {
    if (this.scrWidth > 480) {
      this.isTitleDisplay = true;
    } else {
      this.isTitleDisplay = false;
      if (this.clickCounter == 0) {
        this.clickCounter = 1;
      } else {
        this.clickCounter = 0;
      }
    }
    return this.isTitleDisplay;
  }

  checkTitle(): void {
    if (!this.setDisplayTite() && this.clickCounter == 1) {
      this.title = '';
    } else {
      this.title = 'Moleqular Sequences';
    }
  }
}
