import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HR-Helper';

  boxNumber: number = 37;

  boxArray = Array(this.boxNumber).fill(0);


}
