import { Component, OnInit } from '@angular/core';
import {Video} from '../../../interfaces/video';

@Component({
  selector: 'app-videoindex',
  templateUrl: './videoindex.component.html',
  styleUrls: ['./videoindex.component.css']
})
export class VideoindexComponent implements OnInit {
  videoList: Video[];
  loading: boolean;

  constructor() {

    this.loading = true;

    this.getVideoList();
   }

  ngOnInit(): void {
  }

  getVideoList(){
    setTimeout(()=>{
      this.videoList = [{
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
      },
      {
        id: 4,
        image: '',
        title: 'Video title 4',
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content 3.',
        url: '' 
      },
      /* {
        id: 5,
        image: '',
        title: 'Video title 5',
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content 3.',
        url: '' 
      } */];
      this.loading = false;
    },5000);
    
  }



}
