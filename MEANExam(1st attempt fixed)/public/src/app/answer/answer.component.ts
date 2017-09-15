import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
    question = {
        _id: 0,
        text: '',
        desc: ''
    }
    answer = {
        user: '',
        text: '',
        details: '',
        likes: 0
    }
    constructor(private _api: ApiService, private _route: ActivatedRoute) { }

    ngOnInit() {
        this.getQuestion()
        this.getUser()
    }
    getUser(){
        this.answer.user = this._api.getUser().name
    }
    getQuestion(){
        this._route.paramMap
        .switchMap(params => {
            return this._api.getQuestion(params.get('id'))
        })
        .subscribe(data => this.question = data)
    }
    onSubmit(){
        this._api.createAnswer(this.answer, this.question._id)
    }
}
