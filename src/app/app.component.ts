import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { Clipboard } from '@angular/cdk/clipboard';
import { MessageClass } from './MessageClass';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})
export class AppComponent {
  title = 'HR-Helper';

  constructor(
    private dialog: MatDialog,
    private clipboard: Clipboard) {}

  messageObjects: MessageClass[] = [];

  ngOnInit(): void {
   
    const storedMessagesString = localStorage.getItem("objects");
    if(storedMessagesString != null)
    {
      this.messageObjects = JSON.parse(storedMessagesString);
    }
  }

  copyText(text: string): void {
    this.clipboard.copy(text);
  }

  openDialog(index: number): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '550px',
      height: '400px',
      data: {index: index},
      panelClass: 'custom-modalbox'
      
     
    });

    dialogRef.componentInstance.dataEvent.subscribe(messageObject => {
        this.messageObjects[index] = messageObject;
        localStorage.setItem("objects", JSON.stringify(this.messageObjects));
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`)
      
    });
  }

  addNewTextBox(): void{
    let messageClass: MessageClass = {title: "", message: ""};
    this.messageObjects.push(messageClass);
    localStorage.setItem("objects", JSON.stringify(this.messageObjects));
  }

  removeTextBox(index: number): void{
    this.messageObjects.splice(index, 1);
    localStorage.setItem("objects", JSON.stringify(this.messageObjects));
  }

  
}
