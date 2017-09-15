import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
@Injectable()
export class ApiService {
    user = {};  // store user here
    questions = [{thequestion: 'How did Ethan do on this?', description: 'Ethan failed', num: 0}]
    constructor(private _http: Http) { }

    login(user){
        this.user = user;
    }
    addQuestion(question){
        return this._http.post('/new', question)
        .map(data => data.json)
        .toPromise()
    }
  	getAllQuestions(){
  		return this._http.get('/questions')
        .map(data => data.json)
        .toPromise()
  	}
}
