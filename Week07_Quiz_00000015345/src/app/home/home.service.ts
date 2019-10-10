import { Injectable } from '@angular/core';
import {UKM} from './home.model';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  selected_ukm: UKM[] = [];
  private _ukm: UKM[] =[

    new UKM(
      'u1',
      'Basket',
      'Basket adalah UKM blabla bla...',
      'https://ecs7.tokopedia.net/img/cache/700/product-1/2017/12/9/71871450/71871450_c2cc9e93-f922-4359-8848-a645f4c033bb_340_340.jpg'
    ),

    new UKM(
      'u2',
      'Drama',
      'Drama adalah UKM blabla bla...',
      'https://www.idpengertian.com/wp-content/uploads/2019/01/Pengertian-Drama-Sejarah-Unsur-Unsur-Serta-Ciri-Ciri-Drama.png'
    ),

    new UKM(
      'u3',
      'Volly',
      'Volly adalah UKM blabla bla...',
      'http://tokogrosirbola.com/729-large_default/grosir-bola-volly.jpg'
    ),

    new UKM(
      'u4',
      'Futsal',
      'Futsal adalah UKM blabla bla...',
      'https://ecs7.tokopedia.net/img/cache/700/product-1/2017/5/17/9028492/9028492_6d9bd1fb-ced5-4f28-8486-3a6fd18f6614_1280_1256.png'
    ),

    new UKM(
      'u5',
      'Gaming',
      'Gaming adalah UKM blabla bla...',
      'https://ecs7.tokopedia.net/img/cache/700/product-1/2017/1/3/10268161/10268161_50e77960-fdb5-4087-9b3e-d60869dddf2f_900_600.jpg'
    )

  ];

  constructor() { }

  get getAllUKM() {
    return [...this._ukm];
  }

  gabung() {
    console.log("Ayo gabung!");
  }

  tambahUKM(uid){
    this.selected_ukm.push(uid);
    console.log(this.selected_ukm);
  }

  get_ukms(){
    return [...this.selected_ukm];
  }

  removeUKM(id) {
    this.selected_ukm = this.selected_ukm.filter(uid =>{
      return uid.id !== id;
    })
  }
}