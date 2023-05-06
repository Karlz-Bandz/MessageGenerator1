import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  constructor(
     private dialogRef: MatDialogRef<DialogComponent>,
     @Inject(MAT_DIALOG_DATA) public dialogData: any
     ) {}

  @Output() dataEvent = new EventEmitter<any>();
  

  text: string = "";

  onSubmit(): void {
    // TODO: Submit form data
    console.log(this.text);
    this.dataEvent.emit(this.text);
    this.dialogRef.close({ success: true });
  }

  onCancel(): void {
    this.dialogRef.close({ success: false });
  }

}
