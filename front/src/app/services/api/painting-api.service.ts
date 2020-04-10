import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GenericApiService } from './generic-api.service';
import { Painting } from 'src/app/model/model';

@Injectable({
  providedIn: 'root'
})
export class PaintingApiService extends GenericApiService<Painting> {
  constructor(http: HttpClient) {
    super(http);
    this.controllerName = 'paintings';
  }
}