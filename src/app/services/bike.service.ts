import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ModelService {
  constructor(private http: HttpClient) { }
  getModels() {
    return this.http.get('/server/api/v1/models');
  }
  getModel(id: number) {
    return this.http.get('/server/api/v1/models/' + id);
  }
  createModelRegistration(model) {
    const body = JSON.stringify(model);
    return this.http.post('/server/api/v1/models', body, httpOptions);
  }
}
