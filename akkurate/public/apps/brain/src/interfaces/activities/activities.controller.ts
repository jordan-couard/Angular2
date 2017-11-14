import { Component, Input, OnInit } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { CrudService } from '../../services/crud/crud.service'

import { Activity } from '../../models/activity'
import { CrudResponse } from '../../models/crudResponse'


@Component({
  selector: 'activities',
  templateUrl: './activities.html'
})
export class ActivitiesCtrl implements OnInit {

  public model : Activity;

  public activities: Array<Activity>;
  public result:CrudResponse;

  constructor(
    private crudService: CrudService
  ) { 
    this.result = new CrudResponse();
    this.model = new Activity();
    this.model.id_user = 2;
    this.crudService.init(Activity, this.result);
  }

  ngOnInit() {

    this.get();
  }

  // GET ALL
  get(): void {
      this.crudService.get( this.model).subscribe(response => {
        this.activities = response.data;
      });
  }

  // GET BY ID


  // ADD 
  post() {
    
    this.crudService.post(this.model);
    this.get();    
  }

  // DELETE
  delete(id): void{
    console.log(id);
    if (confirm("Sure ?") == true) {
      this.crudService.delete(this.model, id);
      this.get()
    } else {
      console.log('Error');
    }
    // this.crudService.delete(this.model, id)
    //   if(id != id){
    //     console.log('Error');
    //   } else {
    //     console.log('is delete');
    //   }
  }
}
