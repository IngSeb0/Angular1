import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';  // Import del environment

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  private apiUrl = environment.apiUrl;  // URL del environment

  constructor(private http: HttpClient) {}

  getSeries(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
