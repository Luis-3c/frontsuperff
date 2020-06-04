import { Component, OnInit } from '@angular/core';
import { Video} from '../../../interfaces/video';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  videoList: Video[];

  constructor() {
    /* this.videoList = [{
      id: 1,
      image: '',
      title: 'Video title',
      description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
      url: ''
    },{
      id: 2,
      image: '',
      title: 'Video title 2',
      description: 'Some quick example text to build on the card title and make up the bulk of the cards content 2.',
      url: '' 
    },
    {
      id: 3,
      image: '',
      title: 'Video title 3',
      description: 'Some quick example text to build on the card title and make up the bulk of the cards content 3.',
      url: '' 
    }]; */
   }

  ngOnInit(): void {
  }

}
