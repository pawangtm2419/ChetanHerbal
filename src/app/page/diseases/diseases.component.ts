import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-diseases',
  templateUrl: './diseases.component.html',
  styleUrls: ['./diseases.component.css']
})
export class DiseasesComponent implements OnInit {
  disease: [];
  error = '';
  constructor(private service: AppService) { }

  ngOnInit() {
    this.getDisease();
  }

  getDisease(): void {
    this.service.getDiseaseData().subscribe((res: []) => {
      this.disease = res;
    },
    (err) => {
      this.error = err;
    }
    );
  }
}
