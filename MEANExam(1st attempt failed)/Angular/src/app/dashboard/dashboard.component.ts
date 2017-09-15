import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    questions;
    user;
    question_id = {}
    constructor(private _question: ApiService) {
        this.questions = this._question.getAllQuestions();
    }

    ngOnInit() {
        this.user = this._question.getUser();
    }

}


// .then(this is success).catch(this is failure)
// know services and routes
// all function are made in service
