import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageClass } from '../MessageClass';



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

  @Output() dataEvent = new EventEmitter<MessageClass>();
  
  messageObject: MessageClass = {title: "", message: ""};
  messageObjects: MessageClass[] = [];

  ngOnInit(): void{
    
      const storedMessagesString = localStorage.getItem("objects");
       if(storedMessagesString != null)
       {
         this.messageObjects = JSON.parse(storedMessagesString);
       }
       this.messageObject = this.messageObjects[this.data.index];
       console.log(this.messageObject);
       
  }

  onSubmit(): void {
    // TODO: Submit form data
    console.log(this.messageObject);
    this.dataEvent.emit(this.messageObject);
    this.dialogRef.close({ success: true });
  }

  onCancel(): void {
    this.dialogRef.close({ success: false });
  }

}
