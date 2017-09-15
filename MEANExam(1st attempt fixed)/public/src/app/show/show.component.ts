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
    question = {
        _id: 0,
        text: '',
        desc: ''
    }
    answers = []
    constructor(private _api: ApiService, private _route: ActivatedRoute) { }

    ngOnInit() {
        this.getQuestion()
        this.getAnswers()
    }
    getQuestion(){      // gets question
        this._route.paramMap
        .switchMap(params => {
            return this._api.getQuestion(params.get('id'))
        })
        .subscribe(data => this.question = data)
    }
    getAnswers(){
        this._api.getAnswers(this.question._id)
        .then(data => this.answers = data._answers)
        .catch(errors => console.log(errors))
    }

}
