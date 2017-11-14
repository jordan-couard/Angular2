import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Activity } from '../../models/activity'
import { Error } from '../../models/error'

/**
 * 
 */
@Injectable()
export class HttpService {


  constructor(private http: Http) { }

  // GET method
  get(url, options) {    
    let data = this.http
      .get(url, { headers: this.getHeaders() })
      .map(this.extractData)
      .catch(handleError);
      console.log(data);

    return data;
  }

  // GET BY ID method
  getOne(url, options) {
    return this.http.get(url, {headers: this.getHeaders()} ) 
  }
  

  /**
   * @param crudUrl 
   * @param modelUrl 
   * @param model 
   * @param body 
   */
  post(url, model, body){
    
    let data = this.http
                      .post(url, body, {headers: this.getHeaders() })
                      .catch(handleError);
      console.log(data);

      return data;
  }

  // UPDATE
    update(url, model) {
      console.log(model);
      return this.http.put(url, model, {headers: this.getHeaders()})
      .subscribe()
    }

  // DELETE method
  delete(url){

  return this.http.delete(url, {headers: this.getHeaders()})
                  .catch(handleError)
                  .subscribe();
  }

  // Params For Headers
  private getHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json'),
    headers.append('Authorization', '7e5216c138b3c482a8bba01c20a8304e');
    
    return headers;
  }

  // For Return Data
  private extractData(res: Response) {
    let body = res.json();
    
    return body || {};
  }
}

// Error function here !
function handleError(error) {
  // Response status in log.
  console.log(error);
  console.log('Status:', error.status);
  // throw an application level error.
  return error.status;
  // return Observable.throw(Error);
}
