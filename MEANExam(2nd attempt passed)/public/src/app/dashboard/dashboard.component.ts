import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    user = {};
    polls = [];
    constructor(private _api: ApiService) { }

    ngOnInit() {
        this.user = this._api.getUser();
  	    this.getAll();
    }
    getAll(){
        this._api.getAllPolls()
  	    .then(data => this.polls = data)
  	    .catch(errors => { console.log(errors)})
    }
    destroy(id){
        this._api.destroy(id)
        this.getAll();
    }
}
