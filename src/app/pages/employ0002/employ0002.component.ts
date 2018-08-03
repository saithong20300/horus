import { Component, OnInit, ViewEncapsulation, Inject } from "@angular/core";
import { NgSelectComponent, NgOption } from "@ng-select/ng-select";
import { MastEmppaytype } from "../../models/mastEmppaytype";
import { PayrollService } from "../../service/payroll-service";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: "app-index",
  templateUrl: "./employ0002.component.html",
  encapsulation: ViewEncapsulation.None
})

export class Employ0002Component implements OnInit {
  
  model: any = {};
  mastEmppaytype: MastEmppaytype = new MastEmppaytype();
  errBank: boolean = false;
  errEmp: boolean = false;
  errtext: String;
  animal: string;
  name: string;

  constructor(
    public dialog: MatDialog,
    private payrollService: PayrollService
  ) {}

  //set  data dropdown
  empSpecialChargeList: Array<NgOption> = [
    { value: "N", label: "ไม่คิดค่าธรรมเนียมพิเศษ" },
    { value: "Y", label: "คิดค่าธรรมเนียมพิเศษ" }
  ];
  payTyppeList: Array<NgOption> = [
    { value: "C", label: "Cash" },
    { value: "B", label: "Bank" },
    { value: "H", label: "Cheque" }
  ];

  getEmployeeName() {
    if (this.model.employeeCode != undefined && this.model.employeeCode != "") {
      this.payrollService.getEmployeeNameApi(this.model.employeeCode).subscribe(
        data => {
          if (data != null) {
            this.payrollService.getMastEmppaytype(data.employeeSeq).subscribe(
              res => {
                if (res != null) {
                  this.mastEmppaytype = res;
                  this.getBank();
                }
              },
              error => {}
            );
            this.model.employeeFullname =
              data.titleName +
              data.employeeNameth +
              " " +
              data.employeeSurnameth;
            this.model.deptDesc = data.deptName;
            this.mastEmppaytype.employeeSeq = data.employeeSeq;
            this.mastEmppaytype.companySeq = data.companySeq;
            this.errEmp = false;
          }
        },
        error => {
          this.model.employeeCode = this.model.employeeFullname = this.model.deptDesc =
            "";
          this.errtext = "ไม่พบข้อมูลที่ระบุ";
          this.errEmp = true;
        }
      );
    } else this.errEmp = false;
  }

  getBank() {
    if (
      this.mastEmppaytype.bankCode != undefined &&
      this.mastEmppaytype.bankCode != ""
    ) {
      this.payrollService.getBankApi(this.mastEmppaytype.bankCode).subscribe(
        data => {
          if (data != null) {
            this.model.bankName = data.bankNameth;
            this.mastEmppaytype.bankBranchCode = data.bankBranchCode;
            this.errBank = false;
          }
        },
        error => {
          this.errtext = "ไม่พบข้อมูลที่ระบุ";
          this.errBank = true;
          this.mastEmppaytype.bankCode = this.model.bankName = "";
        }
      );
    }
  }
  //======================================= button ============================================
  clear() {
    this.model = {};
    this.mastEmppaytype = new MastEmppaytype();
    this.errEmp = false;
  }
  save() {
    this.errBank = false;
    this.mastEmppaytype.payTyppe = this.mastEmppaytype.payTyppeList.value;
    this.mastEmppaytype.empSpecialCharge = this.mastEmppaytype.empSpecialChargeList.value;
    this.payrollService.saveMastEmppaytype(this.mastEmppaytype).subscribe(
      data => {
        if (data != null) {
          alert("save success...");
          this.clear();
        }
      },
      error => {
        alert("save fail...");
      }
    );
  }
  // validate(){
  //   let flag:boolean = true;
  //   if(this.model.employeeCode == undefined || this.model.employeeCode.trim() == "") {
  //     this.errtext = "กรุณาระบุค่า";
  //     this.errEmp = true;
  //     flag = false;
  //   }else{
  //     this.errEmp = false;
  //     flag = true;
  //   }
  //   return flag;
  // }

  ngOnInit() {
    console.log();
  }

  //========================  dialog =================================
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: "1050px",
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }
}

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html"
})

export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
