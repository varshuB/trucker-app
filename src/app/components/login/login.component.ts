import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


constructor(private dialog:MatDialog,private ref: MatDialogRef<LoginComponent>){}

close() {
  this.ref.close('closed using function')
}

}

