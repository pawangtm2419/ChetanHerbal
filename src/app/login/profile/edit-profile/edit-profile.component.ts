import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DataModel } from './data.model';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  number: number;
  user: [];
  error = '';

  reguser: DataModel = new DataModel();
  updateRegisterForm: FormGroup;
  datas: [];

  constructor(private router: ActivatedRoute, private service: AppService, private formBuilder: FormBuilder, private route: Router) { }

  ngOnInit() {
    this.userData();

    this.updateRegisterForm = this.formBuilder.group({
      name: [this.reguser.name, [ Validators.required, Validators.minLength(4), Validators.maxLength(50) ]],
      email: [this.reguser.email, [Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      streatname: [this.reguser.streatname, [Validators.required]],
      address1: [this.reguser.address1, [Validators.required]],
      address2: [this.reguser.address2, [Validators.required]],
      nearby: [this.reguser.nearby, [Validators.required]],
      pincode: [this.reguser.pincode, [Validators.required, Validators.minLength(6)]]
    });
  }
  userData(): void {
    const number = localStorage.getItem('username');
    this.service.getUserData(number).subscribe((res: []) => {
      this.user = res;
    },
      (err) => {
        this.error = err;
      }
    );
  }

  onRegisterUpdate(event: { preventDefault: () => void; }) {
    event.preventDefault();
    const uName = this.reguser.name;
    const uMail = this.reguser.email;
    const sTreatName = this.reguser.streatname;
    const addRess1 = this.reguser.address1;
    const addRess2 = this.reguser.address2;
    const nearBy = this.reguser.nearby;
    const pincOde = this.reguser.pincode;
    const timestamp = new Date().toDateString();
    const number = localStorage.getItem('username')

    this.service.getRegisterUpdate(uName, uMail, sTreatName, addRess1, addRess2, nearBy, pincOde, timestamp, number).subscribe(data => {
        if (data.success) {
          this.reguser = new DataModel();
          window.alert(data.serect);
          this.route.navigate(['/profile/' + this.getLoggedIn()]);
        } else {
          window.alert(data.serect);
        }
      });
  }
  getLoggedIn() {
    const number = localStorage.getItem('username');
    if (this.service.isLoggedIn && number.length === 10) {
      return true;
    } else {
      return false;
    }
  }
}
