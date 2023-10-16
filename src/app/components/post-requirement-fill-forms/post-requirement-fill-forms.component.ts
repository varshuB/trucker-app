import { Component, VERSION, ViewChild,Inject } from '@angular/core';
import { OnInit, AfterViewInit } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';


@Component({
  selector: 'app-post-requirement-fill-forms',
  templateUrl: './post-requirement-fill-forms.component.html',
  styleUrls: ['./post-requirement-fill-forms.component.css']
})
export class PostRequirementFillFormsComponent  implements OnInit, AfterViewInit {
  @ViewChild('stepper')
  stepper!: MatStepper;
  isEditable = false;

  stepperTwoMaterial = false;
  stepperTwoShipping = false;
  pointOfContact = false;
  
  isCompleted= true;
  openDetails =this.data;



  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private _formBuilder: FormBuilder,
  private dialog:MatDialog, private _router: Router,
  private ref: MatDialogRef<PostRequirementFillFormsComponent>) {
    // alert(this.openDetails);
  }
  ngOnInit(){
  }
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  
  ngAfterViewInit() {
    
    setTimeout(()=>{
      this.stepper.selectedIndex = 1; 
    },0);
  }

  cancel(){
    this._router.navigate(['/post-requirement-form']);
  }
}
