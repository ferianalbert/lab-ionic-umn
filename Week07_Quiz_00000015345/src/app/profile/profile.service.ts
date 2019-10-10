import { Injectable } from '@angular/core';
import { UKM } from '../home/home.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  selected_ukm: UKM[] = [];
  private myUKM: UKM[] = [];

  constructor() { }

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
