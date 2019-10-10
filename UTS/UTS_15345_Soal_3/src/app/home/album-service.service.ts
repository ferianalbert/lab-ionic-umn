import { Injectable } from '@angular/core';
import { Musics, Songs } from './home.model';


@Injectable({
  providedIn: 'root'
})
export class AlbumServiceService {
  private _album: Musics[] = [
    new Musics(
      'a1',
      'Welcome to the Black Parade',
      'My Chemical Romance',
      'https://i.ibb.co/2vMvvNP/Screen-Shot-2019-09-23-at-13-06-40-PM.png',
      [
        {
          id: 'a1s1',
          title: 'I don\'t love you',
          minute: 3,
          second: 59,
        },
        {
          id: 'a1s2',
          title: 'Teenagers',
          minute: 2,
          second: 42,
        },
        {
          id: 'a1s3',
          title: 'Welcome to the Black Parade',
          minute: 5,
          second: 11,
        },
        {
          id: 'a1s4',
          title: 'This is How I Dissapear',
          minute: 3,
          second: 59,
        },
        {
          id: 'a1s5',
          title: 'House of Wolves',
          minute: 3,
          second: 59,
        }
      ]
    ),
    new Musics(
      'a2',
      'Love Me / Love Me Not',
      'HONNE',
      'https://i.ibb.co/stR16bb/Screen-Shot-2019-09-23-at-13-06-57-PM.png',
      [
        {
          id: 'a2s1',
          title: 'I might',
          minute: 4,
          second: 16,
        },
        {
          id: 'a2s2',
          title: 'Me & You',
          minute: 4,
          second: 4,
        },
        {
          id: 'a2s3',
          title: 'Day 1',
          minute: 3,
          second: 54,
        },
        {
          id: 'a2s4',
          title: 'I Got YOu',
          minute: 3,
          second: 32,
        }
      ]
    ),
    new Musics(
      'a3',
      'Pejantan Tangguh',
      'Sheila On 7',
      'https://i.ibb.co/QQ6MP8J/Screen-Shot-2019-09-23-at-13-06-25-PM.png',
      [
        {
          id: 'a3s1',
          title: 'Pejantan Tangguh',
          minute: 3,
          second: 27,
        },
        {
          id: 'a3s2',
          title: 'Itu Aku',
          minute: 4,
          second: 39,
        },
        {
          id: 'a3s3',
          title: 'Pemuja Rahasia',
          minute: 3,
          second: 53,
        },
        {
          id: 'a3s4',
          title: 'Pilihlah Aku',
          minute: 4,
          second: 22,
        },
        {
          id: 'a3s5',
          title: 'Generasi Patah Hati',
          minute: 5,
          second: 6,
        },
        {
          id: 'a3s6',
          title: 'Ketidakwarasan Padaku',
          minute: 3,
          second: 53,
        }
      ]
    )
  ];

  private _songs: Songs[] = [
    new Songs(
      'a1s1',
      'I don\'t love you',
      3,
      59
    ),
    new Songs(
      'a1s2',
      'Teenagers',
      2,
      42
    ),
    new Songs(
      'a1s3',
      'Welcome to the Black Parade',
      5,
      11
    ),
    new Songs(
      'a1s4',
      'This is How I Dissapear',
      3,
      59
    ),
    new Songs(
      'a1s5',
      'House of Wolves',
      3,
      59
    ),
    new Songs(
      'a2s1',
      'I might',
      4,
      16
    ),
    new Songs(
      'a2s2',
      'Me & You',
      4,
      4
    ),
    new Songs(
      'a2s3',
      'Day 1',
      3,
      54
    ),
    new Songs(
      'a2s4',
      'I Got YOu',
      3,
      32
    ),
    new Songs(
      'a3s1',
      'Pejantan Tangguh',
      3,
      27
    ),
    new Songs(
      'a3s2',
      'Itu Aku',
      4,
      39
    ),
    new Songs(
      'a3s3',
      'Pemuja Rahasia',
      3,
      53
    ),
    new Songs(
      'a3s4',
      'Pilihlah Aku',
      4,
      22
    ),
    new Songs(
      'a3s5',
      'Generasi Patah Hati',
      5,
      6
    ),
    new Songs(
      'a3s6',
      'Ketidakwarasan Padaku',
      3,
      53
    ),
  ];

  constructor() { }

  get getAllAlbums() {
    return [...this._album];
  }

  selectedAlbum(albumId: string) {
    return {
      ...this._album.find(selectedAlbum => {
        return selectedAlbum.id === albumId;
      })
    };
  }

  selectedSong(songId: string) {
    return {
      ...this._songs.find(selectedSong => {
        return selectedSong.id === songId;
      })
    };
  }

  private mySongs: Songs[] = [];

  addSong(songObject) {
    this.mySongs.push(songObject);
  }

  get_songs() {
    return [...this.mySongs];
  }
}
