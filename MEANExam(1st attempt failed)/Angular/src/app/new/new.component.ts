import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
    question = {
        thequestion: '',
        description: '',
    }
    constructor(private _question: ApiService) { }

    newQuestion(){
        this._question.addQuestion(this.question)
        this.question = {
            thequestion: '',
            description: '',
        }
    }
    ngOnInit() {
    }

}
