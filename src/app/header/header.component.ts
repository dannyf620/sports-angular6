import { LoginComponent } from './../login/login.component';
import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username: string = undefined;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openLoginForm() {
    console.log("asdfa");
    let loginRef = this.dialog.open(LoginComponent, {width: '500px', height: '450px'});

    loginRef.afterClosed()
      .subscribe(result => {
        console.log(result);
      });
  }
  logOut() {
    this.username = undefined;
    // apiService.post('');
  }

}
