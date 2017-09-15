import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    user = {}
    constructor(private _api: ApiService) { }

    ngOnInit() {
    }
    onClick(){
        this._api.login(this.user)
    }
}
