import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from './../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username: string = undefined;
  @Output() abrirEmit = new EventEmitter();
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openLoginForm() {
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
  openMenu(){
    this.abrirEmit.emit('');
  }
}
