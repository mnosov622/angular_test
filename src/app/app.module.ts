import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MusicListComponent } from './music-list/music-list.component';
import { Mp3PlayerComponent } from './mp3-player/mp3-player.component';

@NgModule({
  declarations: [AppComponent, MusicListComponent, Mp3PlayerComponent],
  imports: [BrowserModule, MatTableModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
