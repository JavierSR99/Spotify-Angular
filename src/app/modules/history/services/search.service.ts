import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private readonly URL = environment.api;

  constructor(
    private _http: HttpClient
  ) { }

  searchTracks$ (term: string):Observable<any> {
    return this._http.get(`${this.URL}/tracks?src=${term}`)
      .pipe(
        map((dataRaw:any) => dataRaw.data)
      )
  }
}
