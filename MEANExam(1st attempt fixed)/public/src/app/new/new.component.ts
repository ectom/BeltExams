import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
    question = {}
    constructor(private _api: ApiService) { }

    ngOnInit() {
    }
    onSubmit(){
        this._api.createQuestion(this.question);
    }
}
