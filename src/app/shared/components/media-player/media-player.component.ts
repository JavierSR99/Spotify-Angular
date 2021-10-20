import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {

  listObservers$: Array<Subscription> = [];

  mockCover: TrackModel = {
    cover: 'https://i.scdn.co/image/ab67616d0000b2739e588b0c2afe8178b2b76231',
    album: 'Indigo',
    name: 'Chris Brown',
    url: 'http://localhost/track.mp3',
    _id: 1
  };

  constructor(
    private _multimediaService: MultimediaService
  ) { }

  ngOnInit(): void {
    const observer1$: Subscription = this._multimediaService.callback.subscribe((response) => {
      console.log('Recibiendo canción ', response);
    });

    this.listObservers$ = [observer1$];
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe());
  }

}
