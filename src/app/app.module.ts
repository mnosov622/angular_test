import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Mp3PlayerComponent } from './components/mp3-player/mp3-player.component';
import { MusicListComponent } from './components/music-list/music-list.component';

@NgModule({
  declarations: [AppComponent, MusicListComponent, Mp3PlayerComponent],
  imports: [BrowserModule, MatTableModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
