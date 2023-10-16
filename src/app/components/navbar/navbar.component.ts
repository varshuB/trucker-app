import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog'
import { LoginComponent } from '../login/login.component';
import { PostRequirementFormComponent } from '../post-requirement-form/post-requirement-form.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(LoginComponent,{
      width:"50%",
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openPostForm() {
    const dialogRef = this.dialog.open(PostRequirementFormComponent,{
      width:"50%",
      height:"70vh"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
