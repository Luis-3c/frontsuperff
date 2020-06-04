import { Component, OnInit } from '@angular/core';
import { Video } from '../../../interfaces/video';
import { ActivatedRoute } from '@angular/router';
import { SuperffService } from '../../../services/superff.service';

@Component({
	selector: 'app-video',
	templateUrl: './video.component.html',
	styleUrls: [ './video.component.css' ]
})
export class VideoComponent implements OnInit {
	videoList: Video[];
	video: Video;
	url: String = null;
	loadingVid: boolean = false;
	loadingVideos: boolean = false;
	idvideo: String = null;
	pageActual: number = 1;
	pagesCount: number = 1;

	constructor(private route: ActivatedRoute, private sffservice: SuperffService) {}

	/*  @HostListener("window:scroll", []) // cambia de color el navbar cuando hay un deslizamiento hacia abajo
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    console.log('numero: ', number);
    if (number > 10) {
      this.getVideoList();
    } 
  } */

	getVideoList() {
		this.loadingVideos = true;
		this.sffservice.getvideosrecommend().subscribe((data: Video[]) => {
			this.videoList = data;
			console.log(data);
			this.loadingVideos = false;
		});
		/* this.loading = true
     setTimeout(()=>{
      this.videoList = [{
        id: 1,
        image: '',
        title: 'Video title 1',
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
      }/* ,
      {
        id: 5,
        image: '',
        title: 'Video title 5',
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content 3.',
        url: '' 
      },
      {
        id: 6,
        image: '',
        title: 'Video title 6',
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content 3.',
        url: '' 
      } ];
      this.loading = false;   
     }, 5000); */
	}

	ngOnInit(): void {
		this.loadingVid = true;
		this.route.params.subscribe((params) => {
			this.idvideo = params['id'];
			this.sffservice.getvideo(this.idvideo).subscribe((data: Video) => {
				this.video = data;
				this.url = 'https://player.vimeo.com/video/' + data['videos'][0].idvideo + '?autoplay=1';
				this.loadingVid = false;
			});
		});
		this.getVideoList();
	}

	loadRight() {
		if (this.pagesCount > this.pageActual) {
			this.pageActual = this.pageActual + 1;
		} else {
      this.loadingVideos = true;
			this.pagesCount = this.pagesCount + 1;
			this.pageActual = this.pageActual + 1;
			this.sffservice.getvideosrecommend().subscribe((data: Video[]) => {
				this.videoList['videos'] = this.videoList['videos'].concat(data['videos']);
				console.log(this.videoList);
				this.loadingVideos = false;
			});
		}
	}

	loadLeft() {
    if (this.pageActual > 1){
    this.pageActual = this.pageActual - 1;
    }
	}
}
