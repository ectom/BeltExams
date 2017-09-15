import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs';

@Injectable()
export class ApiService {
    user = {
        name: 'cquanda'
    }
    constructor(private _http: Http) { }
    login(user){
        this.user = user
    }
    getUser(){
        return this.user;
    }
    getAllQuestions(){
        return this._http.get('/questions')
        .map(data => data.json())
        .toPromise()
    }
    createQuestion(question){
        this._http.post('/questions', question)
        .map(data => data.json())
        .toPromise()
    }
    getQuestion(id){
        return this._http.get('/questions/' + id)
        .map(data => data.json())
        .toPromise()
    }
    createAnswer(answer, q_id){
        this._http.post('/answers/' + q_id, answer)
        .map(data => data.json())
        .toPromise()
    }
    getAnswers(question_id){
        return this._http.get('/answers/ + question_id')
        .map(data => data.json())
        .toPromise()
    }
}
