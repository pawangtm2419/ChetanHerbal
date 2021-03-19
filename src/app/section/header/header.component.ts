import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  number: number;
  constructor(public Login: AppService, private router: ActivatedRoute) { }

  ngOnInit() {
  }

  getLoggedIn() {
    const number = localStorage.getItem('username');
    if (this.Login.isLoggedIn && number.length === 10) {
      return true;
    } else {
      return false;
    }
  }
}
