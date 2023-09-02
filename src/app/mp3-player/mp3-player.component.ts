import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef,
} from '@angular/core';

interface Music {
  id: number;
  musicName: string;
  fileName: string;
  source: string;
}

@Component({
  selector: 'app-mp3-player',
  templateUrl: './mp3-player.component.html',
  styleUrls: ['./mp3-player.component.css'],
})
export class Mp3PlayerComponent {
  @Input() selectedMusic: Music | null = null;
}
