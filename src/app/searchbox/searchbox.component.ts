import { Component } from '@angular/core';
import { EnabledBlockingInitialNavigationFeature } from '@angular/router';
import { concatAll } from 'rxjs';
import { databook } from './data-book'
import { typedata } from './interfacedata'

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent {
  booklist = databook;

  temp: typedata[] = [];
  filterData = this.booklist;

  resetdata():void{
    this.filterData = this.booklist;
  }

  searchbook(name:string,category:string,credit:string,price:string,borrower:string,date:string){
    var dataname:typedata[] = [];
    var datacatagory:typedata[] = [];
    var datacredit:typedata[] = [];
    var dataprice:typedata[] = [];
    var databorrower:typedata[] = [];
    var datadate:typedata[] = [];

    if (name.length!=0)
    {
      dataname = this.booklist.filter(data=>{
        const database = data.name.toLowerCase();
        const search = name.toLowerCase();
        return database.indexOf(search)!==-1
      })
    }
    if (category.length!=0){
      datacatagory = this.booklist.filter(data=>{
        const database = data.category.toLowerCase();
        const search = category.toLowerCase();
        return database.indexOf(search)!==-1
      })
    }
    if (credit.length!=0){
      datacredit = this.booklist.filter(data=>{
        const database = data.credit.toLowerCase();
        const search = credit.toLowerCase();
        return database.indexOf(search)!==-1
      })
    }
    if (price.length!=0){
      dataprice = this.booklist.filter(data=>{
        const database = data.price.toLowerCase();
        const search = price.toLowerCase();
        return database.indexOf(search)!==-1
      })
    }
    if (borrower.length!=0){
      databorrower = this.booklist.filter(data=>{
        const database = data.borrower.toLowerCase();
        const search = borrower.toLowerCase();
        return database.indexOf(search)!==-1
      })
    }
    if (date.length!=0){
      datadate = this.booklist.filter(data=>{
        const database = data.date.toLowerCase();
        const search = date.toLowerCase();
        return database.indexOf(search)!==-1
      })
    }
    if (name.length==0&&category.length==0&&credit.length==0&&price.length==0&&borrower.length==0&&date.length==0){
      this.resetdata();
    }else{
      this.filterData = this.temp.concat(dataname,datacatagory,datacredit,dataprice,databorrower,datadate);
    }
  }
}
