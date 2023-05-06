import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { Clipboard } from '@angular/cdk/clipboard';


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

  messages: string[] = [];

  ngOnInit(): void {
    const storedMessagesString = localStorage.getItem("messages");
    if(storedMessagesString != null)
    {
      this.messages = JSON.parse(storedMessagesString);
    }
  }

  copyText(text: string): void {
    this.clipboard.copy(text);
  }

  openDialog(index: number): void {
    // this.dialog.open(DialogComponent);
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '550px',
      height: '550px',
      data: {index: index}
      
     
    });

    dialogRef.componentInstance.dataEvent.subscribe(text => {
        this.messages[index] = text;
        localStorage.setItem("messages", JSON.stringify(this.messages));
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`)
      
    });
  }

  addNewTextBox(): void{
    this.messages.push("kk");
    localStorage.setItem("messages", JSON.stringify(this.messages));
  }

  removeTextBox(index: number): void{
    this.messages.splice(index, 1);
    localStorage.setItem("messages", JSON.stringify(this.messages));
  }

  
}
