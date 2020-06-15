import { Component, OnInit } from '@angular/core';
import { Video } from '../../../interfaces/video';
import { ActivatedRoute } from '@angular/router';
import { SuperffService } from '../../../services/superff.service';
import { AppComponent } from '../../../app.component';
import { Router } from '@angular/router';

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
	loadingCount: number = 0;

	constructor(
		private route: ActivatedRoute,
		private sffservice: SuperffService,
		public app: AppComponent,
		private router: Router
	) {}

	getVideoList() {
		this.loadingVideos = true;
		this.sffservice.getvideosrecommend().subscribe((data: Video[]) => {
			this.videoList = data;
			console.log(data);
			this.loadingVideos = false;
			if (window.innerWidth > 600) {
				window.scrollTo(0, 80);
			}
		});
		/* this.loading = true
     setTimeout(()=>{
     }, 5000); */
	}

	ngOnInit(): void {
		this.loadPage();
	}

	loadVideos() {
		this.loadingVid = true;
		this.route.params.subscribe((params) => {
			this.idvideo = params['id'];
			this.sffservice.getvideo(this.idvideo).subscribe((data: Video) => {
				this.video = data;
				this.url = 'https://player.vimeo.com/video/' + data['videos'][0].idvideo + '?autoplay=1';
				this.loadingVid = false;
				if (window.innerWidth > 600) {
					window.scrollTo(0, 80);
				} else window.scrollTo(0, 0);
			});
		});
		this.getVideoList();
	}

	loadRight() {
		if (this.pagesCount > this.pageActual) {
			this.pageActual = this.pageActual + 1;
		} else {
			if (this.loadingCount < 5) {
				this.loadingVideos = true;
				this.pagesCount = this.pagesCount + 1;
				this.pageActual = this.pageActual + 1;
				this.sffservice.getvideosrecommend().subscribe((data: Video[]) => {
					this.videoList['videos'] = this.videoList['videos'].concat(data['videos']);
					console.log(this.videoList);
					this.loadingVideos = false;
        });
        this.loadingCount++;
			}
		}
	}

	loadLeft() {
		if (this.pageActual > 1) {
			this.pageActual = this.pageActual - 1;
		}
	}

	loadPage() {
		if (!this.app.fullAccess) {
			if (localStorage.getItem('token')) {
				this.sffservice.subscription().subscribe(
					(data: any) => {
						if (data.response === 'continue' && data.rol != 1) {
							this.router.navigate([ 'subscription' ]);
						} else {
							this.loadVideos();
						}
					},
					(error) => {
						if (error.status === 401) {
							localStorage.removeItem('token');
							this.router.navigate([ 'signin' ]);
						}
					}
				);
			} else this.router.navigate([ 'signin' ]);
		} else {
			this.loadVideos();
		}
	}
}
