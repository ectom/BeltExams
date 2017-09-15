import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
    poll = {
        user: '',
        question: '',
        option1: '',
        votes1: 0,
        option2: '',
        votes2: 0,
        option3: '',
        votes3: 0,
        option4: '',
        votes4: 0,
    }
    constructor(private _api: ApiService) { }

    ngOnInit() {
        this.poll.user = this._api.getUser().name
    }
    onSubmit(){
        this._api.create(this.poll)
    }

}
