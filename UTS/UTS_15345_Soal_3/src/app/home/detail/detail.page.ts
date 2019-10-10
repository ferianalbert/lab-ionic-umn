import { Component, OnInit } from '@angular/core';
import { Musics } from '../home.model';
import { AlbumServiceService } from '../album-service.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  albumMusic: Musics;

  constructor(
    private albumService: AlbumServiceService,
    private activatedRoute: ActivatedRoute,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        if(!paramMap.has('albumId')) { return; }
        this.albumMusic = this.albumService.selectedAlbum(paramMap.get('albumId'));
      }
    );
  }

  async favorit(id) {
    this.presentLoading(id);
    this.addSong(id);
  }

  addSong(id) {
    this.albumService.addSong(id);
  }

  async presentLoading(id) {
    const loading = await this.loadingCtrl.create({
      message: 'Updating your favorite songs...',
      duration: 1500
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }

}
