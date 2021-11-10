import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {

  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('');
  listObservers$: Array<Subscription> = [];

  state:string = 'paused';
  

  constructor(
    public _multimediaService: MultimediaService
  ) { }

  ngOnInit(): void {
    const observer1$ = this._multimediaService.playerStatus$
      .subscribe(status => this.state = status);

    this.listObservers$ = [observer1$];
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe());
  }

  handlePosition(event: MouseEvent): void {
    const elNative: HTMLElement = this.progressBar.nativeElement; // elemento nativo HTML progressbar
    const { clientX } = event; // px de eje x dónde se hace click en progressbar
    const { x, width } = elNative.getBoundingClientRect(); // ancho y e inicio de progressbar
    const clickX = clientX - x; // click en referencia a la barra de progreso
    const percentageFromX = (clickX * 100) / width; // porcentaje del click 

    this._multimediaService.seekAudio(percentageFromX);
  }

}
