import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../../../../interfaces/video';


@Component({
  selector: 'app-vidcardindex',
  templateUrl: './vidcardindex.component.html',
  styleUrls: ['./vidcardindex.component.css']
})
export class VidcardindexComponent implements OnInit {
@Input() videoList : Video[];
  constructor() { 
    console.log(this.videoList);
  }

  ngOnInit(): void {
  }

}
