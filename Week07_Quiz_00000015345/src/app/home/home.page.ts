import { Component, OnInit } from '@angular/core';
import { UKM } from './home.model';
import { HomeService } from './home.service';
import { ModalController, AlertController } from '@ionic/angular';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  loaded_ukm: UKM[];

  constructor(
    private modalCtrl: ModalController,   
    private alertController: AlertController,
    private homeService: HomeService) { }

  ngOnInit() {
    this.loaded_ukm = this.homeService.getAllUKM;
  }

  async gabung(id) {
    const alert = await this.alertController.create({
      header: '',
      message: 'Beneran Mau Join?',

      buttons: [
        {
          text: 'Batal',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Serius',
          handler: () => {
            this.addUKM(id);
            console.log('Confirm Okay');
          }
        }

      ]

    });

    await alert.present();

  }

  addUKM(id){
    this.homeService.tambahUKM(id);
  }

}
