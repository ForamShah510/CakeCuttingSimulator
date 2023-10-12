import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo1';

  isCut = false;

  cutCake(){
    this.isCut = true;
    console.log(this.isCut);
  }

  blown = false;
  BlowCandles(){
    this.blown = true;
    console.log(this.blown);
  }

  isCutCake = false;
  CutCake(){
    this.isCutCake = true;
  }
}
