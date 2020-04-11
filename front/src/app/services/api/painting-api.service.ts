import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GenericApiService } from './generic-api.service';
import { Painting } from 'src/app/model/model';
import { ToastService } from '../toast.service';

@Injectable({
  providedIn: 'root'
})
export class PaintingApiService extends GenericApiService<Painting> {
  constructor(http: HttpClient, toastService: ToastService) {
    super(http, toastService);
    this.controllerName = 'paintings';
  }
}
