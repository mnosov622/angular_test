import { Component } from '@angular/core';
import { Music } from '../interfaces/music.interface';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css'],
})
export class MusicListComponent {
  displayedColumns: string[] = ['id', 'musicName', 'fileName'];
  selectedMusic: Music | null = null;
  dataSource: Music[] = [
    {
      id: 1,
      musicName: 'Good Night',
      fileName: 'Good-night.mp3',
      source: '/assets/audio/Good-night.mp3',
    },
    {
      id: 2,
      musicName: 'Deep Future',
      fileName: 'Deep-future.mp3',
      source: '/assets/audio/Deep-future.mp3',
    },
    {
      id: 3,
      musicName: 'Jazz',
      fileName: 'Jazz.mp3',
      source: '/assets/audio/Jazz.mp3',
    },
  ];

  showMp3Player(music: Music) {
    this.selectedMusic = music;
  }
}
