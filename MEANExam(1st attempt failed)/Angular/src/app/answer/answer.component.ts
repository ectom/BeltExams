import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

    questions;
    constructor(private _question: ApiService) {
        this.questions = this._question.getAllQuestions();
    }

  ngOnInit() {
  }

}
