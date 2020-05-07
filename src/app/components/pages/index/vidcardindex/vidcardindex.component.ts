import { Component, OnInit, Input } from '@angular/core';
import { VideoListIndex} from '../../../../interfaces/video-list-index';


@Component({
  selector: 'app-vidcardindex',
  templateUrl: './vidcardindex.component.html',
  styleUrls: ['./vidcardindex.component.css']
})
export class VidcardindexComponent implements OnInit {
@Input() videoList : VideoListIndex[];
  constructor() { 
    console.log(this.videoList);
  }

  ngOnInit(): void {
  }

}
