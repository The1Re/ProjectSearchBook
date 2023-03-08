import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { databook } from '../searchbox/data-book'

@Component({
  selector: 'app-addbox',
  templateUrl: './addbox.component.html',
  styleUrls: ['../searchbox/searchbox.component.css']
})
export class AddboxComponent {
  booklist = databook;

  addData(name:string,category:string,credit:string,price:string,borrower:string,date:string){
    this.booklist.push({
      number:this.booklist.length+1,
      name:name,
      category:category,
      credit:credit,
      price:price,
      borrower:borrower,
      date:date
    })
    Swal.fire("Thank You!","You have added","success")
  }
}
