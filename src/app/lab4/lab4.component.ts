import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab4',
  templateUrl: './lab4.component.html',
  styleUrls: ['./lab4.component.scss']
})
export class Lab4Component implements OnInit {
  isPlayingAudio1 = false;
  isPlayingAudio2 = false;
  isPlayingAudio3 = false;

  audio1 = null;
  audio2 = null;
  audio3 = null;

  constructor() {
    this.audio1 = new Audio();
    this.audio2 = new Audio();
    this.audio3 = new Audio();
    this.audio1.src = "/assets/Voice002.flac"
    this.audio1.load();
    this.audio2.src = "/assets/Voice002Edited.mp3"
    this.audio2.load();
    this.audio3.src = "/assets/music.mp3"
    this.audio3.load();
  }

  get Audio1Playing(){
    return this.isPlayingAudio1;
  }
  get Audio2Playing(){
    return this.isPlayingAudio2;
  }
  get Audio3Playing(){
    return this.isPlayingAudio3;
  }

  clearAudioChannels(){
    this.isPlayingAudio1 = false;
    this.isPlayingAudio2 = false;
    this.isPlayingAudio3 = false;
    this.audio1.pause();
    this.audio2.pause();
    this.audio3.pause();
  }

  playAudio1(){
    if(this.Audio1Playing){
      this.audio1.pause()
      this.isPlayingAudio1 = false;
    }else{
      this.clearAudioChannels();
      this.isPlayingAudio1 = true;
      this.audio1.play();
    }
  }
  playAudio2(){
    if(this.Audio2Playing){
      this.audio2.pause()
      this.isPlayingAudio2 = false;
    }else{
      this.clearAudioChannels();
      this.isPlayingAudio2 = true;
      this.audio2.play();
    }
  }
  playAudio3(){
    if(this.Audio3Playing){
      this.audio3.pause()
      this.isPlayingAudio3 = false;
    }else{
      this.clearAudioChannels();
      this.isPlayingAudio3 = true;
      this.audio3.play();
    }
  }

  ngOnInit() {
  }

}
