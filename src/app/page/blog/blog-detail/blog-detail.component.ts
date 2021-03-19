import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  id: number;
  blog: [];
  error = '';
  constructor(private router: ActivatedRoute, private service: AppService) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.getBlog();
  }
  getBlog(): void {
    const id = this.id;
    this.service.getBlogId(id).subscribe((res: []) => {
      this.blog = res;
    },
      (err) => {
        this.error = err;
      }
    );
  }
}
