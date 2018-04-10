import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {
  dataVisible : boolean = false;

  constructor() { }

  showData() : void {
    this.dataVisible = true;
  }

  ngOnInit() {
  }

}
