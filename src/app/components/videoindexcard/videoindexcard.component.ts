import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../../interfaces/video';
@Component({
  selector: 'app-videoindexcard',
  templateUrl: './videoindexcard.component.html',
  styleUrls: ['./videoindexcard.component.css']
})
export class VideoindexcardComponent implements OnInit {
@Input() v: Video;

  constructor() { }

  ngOnInit(): void {
  }

}
