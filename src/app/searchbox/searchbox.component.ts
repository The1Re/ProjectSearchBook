import { Component } from '@angular/core';
import { databook } from './data-book'

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent {
  booklist = databook;
}
