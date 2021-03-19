import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs: [];
  error = '';
  success = '';
  constructor(private service: AppService) { }

  ngOnInit() {
    this.getOne();
  }
  getOne(): void {
    this.service.getBlogData().subscribe((res: []) => {
      this.blogs = res;
    },
      (err) => {
        this.error = err;
      }
    );
  }
}
