import { Component, OnInit } from '@angular/core';
import { Songs } from '../home/home.model';
import { AlbumServiceService } from '../home/album-service.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  myFetchedSong: Songs[] = [];

  constructor(
    private albumService: AlbumServiceService
  ) { }

  ngOnInit() {
    this.myFetchedSong = this.albumService.get_songs();
  }

  ionViewWillEnter(){
    this.myFetchedSong = this.albumService.get_songs();
    console.log(this.myFetchedSong);
  }



}
