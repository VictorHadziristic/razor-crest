import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.scss']
})
export class Assignment1Component implements OnInit {

  isPlayingAudio1 = false;
  audio1 = null;

  constructor() {
    this.audio1 = new Audio();
    this.audio1.src = "/assets/BTH Audio.mp3"
    this.audio1.load();
  }

  get Audio1Playing(){
    return this.isPlayingAudio1;
  }

  playAudio1(){
    if(this.Audio1Playing){
      this.audio1.pause()
      this.isPlayingAudio1 = false;
    }else{
      this.isPlayingAudio1 = true;
      this.audio1.play();
    }
  }

  ngOnInit() {
  }

}
