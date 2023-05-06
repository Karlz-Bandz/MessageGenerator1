import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
  
})
export class DialogComponent {

  constructor(
     private dialogRef: MatDialogRef<DialogComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any
     ) {}

  @Output() dataEvent = new EventEmitter<string>();
  

  text: string = "";
  //textToEdit: string = "";
  messages: string[] = [];

  ngOnInit(): void{
    
       console.log(this.data.index);
       const storedMessagesString = localStorage.getItem("messages");
       if(storedMessagesString != null)
       {
         this.messages = JSON.parse(storedMessagesString);
       }
       this.text = this.messages[this.data.index];
       console.log(this.text);
       
  }

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
