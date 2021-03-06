import { Component, OnInit } from '@angular/core';
import { Playlist, Song } from './playlist.model';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css'],
})
export class PlaylistsComponent implements OnInit {
  playlists: Playlist[] = [
    {
      name: 'Kopikustik',
      totalDuration: 5,
      totalSongs: 2,
      description:
        'More than a coffee, this is all of your favorite accoustic songs.',
      songs: [
        {
          title: 'Cigarettes of ours',
          artist: 'Ardhito Pramono',
          duration: 3,
        },
        {
          title: 'Walking Back Home',
          artist: 'Vira Talisa',
          duration: 2,
        },
      ],
    },
    {
      name: 'Anime Hits',
      totalDuration: 13,
      totalSongs: 3,
      description: 'Listen to your favorite Anime songs, all in one playlist.',
      songs: [
        {
          title: 'Renai Circulation',
          artist: 'Kana Hanazawa',
          duration: 4,
        },
        {
          title: 'Platinum Disco',
          artist: 'Tsukihi Phoenix',
          duration: 4,
        },
        {
          title: 'Silhouette',
          artist: 'KANA-BOON',
          duration: 5,
        },
      ],
    },
  ];

  constructor() {}

  log() {
    console.log(this.playlists[0].songs);
  }

  ngOnInit(): void {}
}
