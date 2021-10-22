import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy {

  tracksTrending: Array<TrackModel> = [];
  tracksRandom: Array<TrackModel> = [];

  listObservers$: Array<Subscription> = [];

  constructor(
    private _tracksService: TrackService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy(): void {
    
  }

  loadData() {
    this._tracksService.getAllTracks$().subscribe((response: TrackModel[]) => {
      this.tracksTrending = response;
    },
    err => {
      console.log(`Error de conexión: ${err}`);
    });

    this._tracksService.getAllRandom$().subscribe((response: TrackModel[]) => {
      this.tracksRandom = response;
    });
  }

  // async loadDataPromise(): Promise<any> {
  //   const dataRaw = await this._tracksService.getAllTracks$().toPromise()
  //   .then(res => {})
  //   .catch(err => {})
  // }

}
