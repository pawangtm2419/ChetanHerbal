import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-secblog',
  templateUrl: './secblog.component.html',
  styleUrls: ['./secblog.component.css']
})
export class SecblogComponent implements OnInit {

  blogs: [];
  error = '';
  constructor(private service: AppService) { }

  ngOnInit() {
    this.getBlog();
  }
  getBlog(): void {
    this.service.getSecBlogData().subscribe((res: []) => {
      this.blogs = res;
    },
      (err) => {
        this.error = err;
      }
    );
  }
}
