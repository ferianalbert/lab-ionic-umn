import { Component } from '@angular/core';
import { Musics } from './home.model';
import { AlbumServiceService } from './album-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  albumMusic: Musics[];

  constructor(
    private albumService: AlbumServiceService
  ) {}

  ngOnInit() {
    this.albumMusic = this.albumService.getAllAlbums;
  }
}
