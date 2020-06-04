import { Component, OnInit, HostListener } from '@angular/core';
import {Video} from '../../../interfaces/video';
import { SuperffService } from '../../../services/superff.service';

@Component({
  selector: 'app-videoindex',
  templateUrl: './videoindex.component.html',
  styleUrls: ['./videoindex.component.css']
})
export class VideoindexComponent implements OnInit {
  videoList: Video[];
  loading: boolean = false;
  loadingmore: boolean = false;
  error: boolean = false;
  emptyvideos: boolean = false;
  searched: boolean = false;
  errorMessage: string = null;
  lastid: number = 3;
  
  searcher: any = {
    input: ""
  };

  fullAccess : boolean;
  loadingPage: boolean = true;

  constructor(private superffservice: SuperffService) {

    this.loading = true;

    this.loadPage();
   }

  ngOnInit(): void {
  }

  getVideoList(){//obtiene la lista inicial de videos, los mas recientes
  this.superffservice.getvideosIndex().subscribe((data: Video[])=>{
    this.videoList = data;
    this.loading = false;
  });    
    /* setTimeout(()=>{
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
      {
        id: 5,
        image: '',
        title: 'Video title 5',
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content 3.',
        url: '' 
      } ];
      this.loading = false;
    },5000); */
    
  }

loadmore(){// llama al servicio para cargar mas videos
  this.loadingmore = true;
  console.log('last id; ', this.lastid);
   try{
    this.superffservice.loadmorevideosindex(this.videoList['videos'][this.lastid].id).subscribe((data: Video[])=>{
      if(data['videos']== ""){
        this.emptyvideos = true;
      }
     this.videoList['videos'] = this.videoList['videos'].concat(data['videos']);
     this.lastid = this.lastid + 4;
     this.loadingmore = false;
    }, (error) =>{
     this.error = true;
     this.loadingmore = false;
     this.errorMessage = error.error.response;
   });
   }catch(e){
    this.error = true;
     this.loadingmore = false;
     this.errorMessage = "No more to load";
   }
}

@HostListener("window:scroll", []) // cuando el usuario llega al final de la página carga mas videos
onScroll(): void {
  /* console.log('scroll: ', window.innerHeight + window.scrollY);
  console.log('height: ', document.body.offsetHeight - 50); */
if (((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) && (!this.searched)) {
      this.loadmore();
    }
}

search(){ // manda llamar el servicio del buscador
  this.loading = true;
  this.superffservice.searchvideos(this.searcher).subscribe((data: Video[])=>{
    this.videoList = data;
    if (data['videos'] == ""){
      this.errorMessage = '0 results';
      this.emptyvideos = true;
    }
    this.searched = true;
    this.loading = false;
  })
}

//manda llamar el servicio para saber si el usuario esta o no suscrito
//y asi saber que pantalla mostrar
loadPage(){
  this.superffservice.subscription().subscribe((data: any)=>{
    if(data.response === 'continue'){// cuando el servicio regresa un continue significa que el usuario no está suscrito
      this.fullAccess = false;
      this.loadingPage = false;
    }else{
      this.fullAccess = true;
      this.getVideoList();
      this.loadingPage = false;
    }
  }, (error)=>{
    if(error.status === 401){
      if(localStorage.getItem('token')){
        localStorage.removeItem('token');
        this.fullAccess = false;
        this.loadingPage = false;
      }
    }
  })
}

}
