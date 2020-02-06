import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab4',
  templateUrl: './lab4.component.html',
  styleUrls: ['./lab4.component.scss']
})
export class Lab4Component implements OnInit {
  msbapTitle = 'Audio Title';
  msbapAudioUrl = 'Link to audio URL';   
   
  msbapDisplayTitle = false; 
  msbapDisplayVolumeControls = true; 

  constructor() { }

  ngOnInit() {
  }

}
