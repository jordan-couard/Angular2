import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { environment } from '../../../environments/environment';

import { ActivitiesCtrl } from '../../interfaces/activities/activities.controller';
import { ActivityCtrl } from '../../interfaces/activities/activity/activity.controller';
import { HttpService } from '../http/http.service';


@Injectable()

export class CrudService {

  public url = null;
  public response: any;
  private modelType: any;

  constructor( private httpService: HttpService ) {
  }

  init(modelType, response){
    this.modelType = modelType;
    this.url = environment.BASE_URL + '/' + environment.BASE_CRUD_ROUT + '/' + modelType.name;
    this.response = response;
  }

  // GET Function
  get(model, queryParams?) {
    let url = this.url;
    if ( undefined != queryParams && null != queryParams ) {
      url = url + '/' + queryParams;
    }
    return this.httpService.get(
      url,
      this.modelType
    )
    .map(body => {
      this.response.data = body.data;
      this.response.result = body.success || body.error || null;
      this.response.pagin = body.pagin;
      return this.response;
    });
  }

  // GET ONE Function
  getOne(model, id){
    return this.get(model, id);
  }

  /**
   * @param body {any}
   */
  post(body) {

    return this.httpService.post(this.url, this.modelType, body)
    .subscribe(data => {
      console.log('Post', body, data);
      
      return data;
    });
  }

  // UPDATE
  update(model, id) {
    console.log(this.modelType);
    let url = this.url + '/' + id;
     return this.httpService.update(url, model),
     console.log(model);
     
  }

  // DELETE function
  delete(modelType, id){
    let url = this.url + '/' + id;

    this.httpService.delete(url)
  }
}     