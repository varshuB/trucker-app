import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PostRequirementFillFormsComponent } from '../post-requirement-fill-forms/post-requirement-fill-forms.component';

@Component({
  selector: 'app-post-requirement-form',
  templateUrl: './post-requirement-form.component.html',
  styleUrls: ['./post-requirement-form.component.css']
})
export class PostRequirementFormComponent {

  constructor(private dialog:MatDialog,private ref: MatDialogRef<PostRequirementFormComponent>){}
  close() {
    this.ref.close('closed using function')
  }

  openFillForm() {
    const dialogRef = this.dialog.open(PostRequirementFillFormsComponent,{
      width:"100%",
      height:"100vh",
      data:1
      });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openFillForm1() {
    const dialogRef = this.dialog.open(PostRequirementFillFormsComponent,{
      width:"100%",
      height:"100vh",
      data:2
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openFillForm2() {
    const dialogRef = this.dialog.open(PostRequirementFillFormsComponent,{
      width:"100%",
      height:"100vh",
      data:3
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
