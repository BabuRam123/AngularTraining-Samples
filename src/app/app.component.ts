import { Component } from '@angular/core';
import {AccountInformation} from './AccountInformation';
import {ShowDateTime} from './IDateTime';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements ShowDateTime {

  dateTimedetails:string;
  displaydt:Date;

constructor ()
{
  this.displaydt=new Date();
  this.dateTimedetails=this.displaydt.toString();
}

  name = 'Display Account details using oneway binding, ngIF, ngFor';
  twowaytext='Twoway binding';
  setTwowaybind:string="Hello";
  accountlist=[
    new AccountInformation(1,'Siva'),
    new AccountInformation(2,'Babu'),
    new AccountInformation(3,'Arun'),
    new AccountInformation(4,'Nandha')
  ];

  showday:string;
 getday<T>(d:T):string{
  let day=Number(d);
  if (day>7 || day<=0){
    alert("wrong input - plz provide 1 to 7");
  }
    return this.showday=weekday[day];

}

}

enum weekday{
  Monday=1,
   Tuesday,
   Wednesday,
   Thursday,
   Friday,
   Saturaday,
   Sunday
}
