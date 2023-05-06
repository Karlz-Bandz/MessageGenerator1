import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HR-Helper';

  boxNumber: number = 0;

  //boxArray = Array(this.boxNumber).fill(0);

  messages: string[] = [];

  ngOnInit(): void {
    const storedMessagesString = localStorage.getItem("messages");

    if(storedMessagesString != null)
    {
      this.messages = JSON.parse(storedMessagesString);
    }


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
