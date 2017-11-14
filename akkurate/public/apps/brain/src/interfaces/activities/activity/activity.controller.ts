import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CrudService } from '../../../services/crud/crud.service'
import { Activity } from '../../../models/activity'
import { CrudResponse } from '../../../models/crudResponse'

@Component({
    selector: 'activity',
    templateUrl: 'activity.html'
})
export class ActivityCtrl implements OnInit {

    public model: Activity;
    public result:CrudResponse;
    
    constructor(
        private crudService: CrudService,
        private route: ActivatedRoute,
        private location: Location
        
    ) {
        this.result = new CrudResponse();
        this.crudService.init(Activity, this.result);
    }
    
    ngOnInit(): void{
        this.model = new Activity();
        this.getOne();
        
    }

    getOne() {
        const id = +this.route.snapshot.paramMap.get('id');
        let response = this.crudService.getOne(this.model, id);
        
        response.subscribe(response => {
            this.model = response.data;
        });
    }

    // ToDo 
    update() {
        const id = +this.route.snapshot.paramMap.get('id');  
        this.model.id_user = 2;
        this.model.user = undefined;      
        this.crudService.update(this.model, id)
    }

    goBack(): void {
        this.location.back();
      }

    // getParamsId(){
    //     const id = +this.route.snapshot.paramMap.get('id');
    //     console.log(id);
                
    // }
}