import { Component,HostListener } from '@angular/core';
let Down_Pad = 0;
let Right_pad = 0;
export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,
  UP__ARROW = 38,
  DOWN_ARROW = 40,
  DELETE_KEY = 46
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'box';
  
  public idbox = 'box';
  Zindex = 0;
  ngOnInit() { }
  constructor() { }

  AddBoxes() {

    let elem = document.getElementById(this.idbox);
    elem.innerHTML = '<input type="text">';

    elem.style.zIndex = "this.Zindex";
    this.Zindex = this.Zindex + 1;
    console.log(this.Zindex);
    this.idbox = this.idbox + 1;
    console.log(this.idbox);

  }

  @HostListener('keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event);

    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      this.rightArrowPressed();
    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      this.leftArrowPressed();
    }
    if (event.keyCode === KEY_CODE.DOWN_ARROW) {
      this.downArrowPressed();


    }
    if (event.keyCode === KEY_CODE.UP__ARROW) {
      this.upArrowPressed();
    }
    if (event.keyCode === KEY_CODE.DELETE_KEY) {
      this.remove();
    }

  }

  rightArrowPressed() {
    if (Right_pad <= 640) {
      document.getElementById(this.idbox).style.paddingLeft = Right_pad + 'px';
      Right_pad = Right_pad + 5;
    }
    else {
      alert("Cannot Move out of this box");
    }

  }

  leftArrowPressed() {
    if (Right_pad >= 0) {
      Right_pad = Right_pad - 5;
      document.getElementById(this.idbox).style.paddingLeft = Right_pad + 'px';
    }
    else {
      alert("Cannot Move out of this box");
    }

  }

  upArrowPressed() {
    if (Down_Pad >= 0) {
      Down_Pad = Down_Pad - 5;
      document.getElementById(this.idbox).style.paddingTop = Down_Pad + 'px';
    }
    else {
      alert("Cannot Move out of this box");
    }
  }

  downArrowPressed() {
    if (Down_Pad <= 590) {
      document.getElementById(this.idbox).style.paddingTop = Down_Pad + 'px';
      Down_Pad = Down_Pad + 5;
    }
    else {
      alert("Cannot Move out of this box");
    }
  }


  remove() {
    document.getElementById(this.idbox).innerHTML = " "


  }

  
}
