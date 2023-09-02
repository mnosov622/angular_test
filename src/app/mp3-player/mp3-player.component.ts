import { Component, Input } from '@angular/core';
import { Music } from '../interfaces/music.interface';

@Component({
  selector: 'app-mp3-player',
  templateUrl: './mp3-player.component.html',
  styleUrls: ['./mp3-player.component.css'],
})
export class Mp3PlayerComponent {
  @Input() selectedMusic: Music | null = null;
}
