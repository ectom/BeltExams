import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
    user = {}
    poll = [];
    constructor(private _api: ApiService, private _route: ActivatedRoute, private route: Router) { }

    ngOnInit() {
        this.user = this._api.getUser();
  	    this.getOne();
    }
    getOne(){
        this._route.paramMap
      	.switchMap(params => {
      		return this._api.getOne(params.get('id'));
      	})
      	.subscribe(data => this.poll = data);
    }
    vote(id, str){
        this._api.vote(id, str)
            .then((data)=>{console.log('then')})
            .catch((err)=>{(err)});
        this.getOne();
    }

}
