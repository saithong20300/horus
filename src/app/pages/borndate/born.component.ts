import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ThaiDatePipe } from "../../directives/thaidate.directives";
import { CountBorn } from '../../directives/countborn.directives';


@Component({
  selector: "app-index",
  templateUrl: "./born.component.html",
  encapsulation: ViewEncapsulation.None
})

export class bornComponent implements OnInit {

  showDate: ThaiDatePipe = new ThaiDatePipe();
  resultBorn: CountBorn = new CountBorn();
  dateborn: String = ""
  birthStr: String


  constructor() {
  }

  getBorn(bornValue) {
    let dateNow = new Date();//วันปัจจุบัน
    let born = this.resultBorn.transformBorn(bornValue);
    if (born != "1") {
      this.birthStr = born.toString();
    } else {
      alert("คุณเลือกเกินวันที่ " + this.showDate.transform(dateNow.toString(), ''));
    }
  }

 




  ngOnInit() {
  }

}
