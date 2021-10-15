import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {

  mockCover: TrackModel = {
    cover: 'https://i.scdn.co/image/ab67616d0000b2739e588b0c2afe8178b2b76231',
    album: 'Indigo',
    name: 'Chris Brown',
    url: 'http://localhost/track.mp3',
    _id: 1
  };

  constructor() { }

  ngOnInit(): void {
  }

}
