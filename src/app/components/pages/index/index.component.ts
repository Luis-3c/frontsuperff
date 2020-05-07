import { Component, OnInit } from '@angular/core';
import { VideoListIndex} from '../../../interfaces/video-list-index';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  videoList: VideoListIndex[];

  constructor() {
    this.videoList = [{
      image: '',
      title: 'Video title',
      desc: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
      url: ''
    },{
      image: '',
      title: 'Video title 2',
      desc: 'Some quick example text to build on the card title and make up the bulk of the cards content.2',
      url: '' 
    },
    {
      image: '',
      title: 'Video title 3',
      desc: 'Some quick example text to build on the card title and make up the bulk of the cards content.3',
      url: '' 
    }];
   }

  ngOnInit(): void {
  }

}
