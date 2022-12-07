import { Component } from '@angular/core';
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  date: Date = new Date();
  reference: string = '';
  showResult = false;

  calculateDate() {
    const year = '20' + this.reference.substr(2,2);
    const days = this.reference.substr(4,3);
    this.date = new Date(year);
    this.date.setDate(parseInt(days));
    this.showResult = true;
    // console.log(formatDate(this.date, 'fullDate', 'fr'));
  }
}
