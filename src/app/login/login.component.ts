import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = { username: '', password: '', remember: false };
  errMess: string;

  constructor(public dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log("User: ", this.user);
    setTimeout(() => {
      this.dialogRef.close(this.user);      
      this.errMess = "Usuario on existe";
    }, 5000);
  }

}
