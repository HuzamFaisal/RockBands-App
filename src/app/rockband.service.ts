import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Rockband } from './rockband';

@Injectable()
export class RockbandService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private rockbandsUrl = 'api/rockbands';  // URL to web api

  constructor(private http: Http) { }

  getRockbands(): Promise<Rockband[]> {
    return this.http.get(this.rockbandsUrl)
      .toPromise()
      .then(response => response.json().data as Rockband[])
      .catch(this.handleError);
  }


  getRockband(id: number): Promise<Rockband> {
    const url = `${this.rockbandsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Rockband)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.rockbandsUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Rockband> {
    return this.http
      .post(this.rockbandsUrl, JSON.stringify({ name: name }), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data as Rockband)
      .catch(this.handleError);
  }

  update(rockband: Rockband): Promise<Rockband> {
    const url = `${this.rockbandsUrl}/${rockband.id}`;
    return this.http
      .put(url, JSON.stringify(rockband), { headers: this.headers })
      .toPromise()
      .then(() => rockband)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

