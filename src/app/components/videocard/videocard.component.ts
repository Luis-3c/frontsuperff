import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../../interfaces/video';
@Component({
  selector: 'app-videocard',
  templateUrl: './videocard.component.html',
  styleUrls: ['./videocard.component.css']
})
export class VideocardComponent implements OnInit {
@Input() v: Video;
  constructor() { }

  ngOnInit(): void {
  }

}
