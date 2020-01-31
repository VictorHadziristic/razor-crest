import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab3',
  templateUrl: './lab3.component.html',
  styleUrls: ['./lab3.component.scss']
})
export class Lab3Component implements OnInit {

  isActive: Boolean = false;
  imgStyle: string ;

  constructor() {
    this.imgStyle = 'img';
  }

  ngOnInit() {
  }

  get isModificationActive(){
    return this.isActive;
  }

  onClick(){
    this.isActive = !this.isActive;
  }

  onChangeStyle(){
    if(this.imgStyle == 'transparent-pic'){
      this.imgStyle = 'pic';
    }else{
      this.imgStyle = 'transparent-pic'
    }
  }

}
