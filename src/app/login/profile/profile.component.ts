import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  showFiller = false;
  cart = true;
  editprofile = false;
  show = true;
  user: [];
  number: number;
  error = '';
  success = '';
  constructor(private service: AppService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.getUserid();
    this.getLoggedIn();
  }
  getUserid(): void {
    const number = localStorage.getItem('username');
    this.service.getUserData(number).subscribe((res: []) => {
      this.user = res;
    },
      (err) => {
        this.error = err;
      }
    );
  }

  getLoggedIn() {
    const number = localStorage.getItem('username');
    if (this.service.isLoggedIn && number.length === 10) {
      this.service.getServaer().subscribe(data => {
        if (data.success) {

        } else {
          window.alert('You are logged out. Login Again!!!');
          this.route.navigate(['login']);
          localStorage.clear();
        }
      });
    } else {
      this.route.navigate(['login']);
      localStorage.clear();
    }
  }
}
