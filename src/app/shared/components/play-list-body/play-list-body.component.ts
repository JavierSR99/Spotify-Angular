import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import * as dataRaw from '../../../data/tracks.json';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit {

  tracks: Array<TrackModel> = [];
  timing: string[] = [];

  optionSort: { property: string | null, order: string } = { property: null, order : 'asc' };

  constructor() { }

  ngOnInit(): void {
    const {data}:any = (dataRaw as any).default;
    this.tracks = data;
    this.convertTimeFromTracks();
  }

  private convertTimeFromTracks():void {
    for (let track of this.tracks) {
      track.duration.timing = this.secToFormat(track.duration.end);
    }
  }

  private secToFormat(seconds: number): string {
    var minute: number | string = Math.floor((seconds / 60) % 60);
      minute = (minute < 10)? '0' + minute : minute;
      var second: number | string = seconds % 60;
      second = (second < 10)? '0' + second : second;
      return minute + ':' + second;
  }

  changeSort(property:string): void {
    const { order } = this.optionSort;
    this.optionSort = {
      property : property,
      order : order === 'asc' ? 'desc' : 'asc'
    };
  }

}
