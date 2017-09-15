import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class ApiService {
	user = {
		name: ""
	}
    constructor(private _http: Http) { }

    login(user){
    	this.user = user
    }
    getUser(){
        return this.user
    }
    getAllPolls(){
        return this._http.get('/polls')
  	    .map(data => data.json())
  	    .toPromise();
    }
    create(poll){
        this._http.post('/polls', poll)
  	    .map(data => data.json())
  	    .toPromise();
    }
    destroy(id){
        this._http.get('/polls/delete/' + id)
        .map(data => data.json())
  	    .toPromise();
    }
    getOne(id){
        return this._http.get('/polls/'+id)
  	    .map(data => data.json())
  	    .toPromise();
    }
    vote(id, str){
        return this._http.get('/vote/' + id +'/'+ str)
  	    .map(data => data.json())
  	    .toPromise();
    }
}
