import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
    id;
  constructor(private _) { }

  ngOnInit() {
      this.id = params['id']
  }

}
