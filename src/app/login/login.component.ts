import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DataModel } from './data.model';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  /*log in */
  loginuser: DataModel = new DataModel();
  loginForm: FormGroup;
  hide = true;

  /* registration */
  reguser: DataModel = new DataModel();
  registerForm: FormGroup;
  datas: [];
  error: '';

  constructor(private formBuilder: FormBuilder, private service: AppService, private router: Router) { }

  ngOnInit() {
    this.getLoggedIn();
    this.loginForm = this.formBuilder.group({
      mobile: [this.loginuser.mobile, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]],
      password: [this.loginuser.password, [Validators.required, Validators.minLength(8), Validators.maxLength(50)]]
    });

    this.registerForm = this.formBuilder.group({
      name: [this.reguser.name, [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      mobilenumber: [this.reguser.mobilenumber, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]],
      email: [this.reguser.email, [Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      streatname: [this.reguser.streatname, [Validators.required]],
      address1: [this.reguser.address1, [Validators.required]],
      address2: [this.reguser.address2, [Validators.required]],
      nearby: [this.reguser.nearby, [Validators.required]],
      pincode: [this.reguser.pincode, [Validators.required,  Validators.minLength(6), Validators.pattern('^[0-9]*$')]],
      password: new FormControl(null, { validators: [Validators.required, Validators.minLength(8), Validators.maxLength(30)]}),
      cpassword: new FormControl(null, { validators: [Validators.required]})
    });
  }

  onLoginSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
    const userName = this.loginuser.mobile;
    const passWord = this.loginuser.password;
    if (localStorage.getItem('logCount') === '6') {
      this.service.userDeactivate(userName).subscribe(data => {
        if (data.success) {
          window.alert(data.serect);
          localStorage.clear();
          this.router.navigate(['/']);
        } else {
          window.alert(data.serect);
        }
      });
    } else {
      this.service.getUserDetail(userName, passWord).subscribe(data => {
        if (data.success) {
          this.router.navigate(['/']);
          this.service.setLoggedIn(true);
          localStorage.setItem('loggedIn', 'true');
          localStorage.setItem('username', JSON.stringify(userName).replace(/\"/g, ''));
        } else {
          window.alert(data.serect);
          this.setLoginCounter();
        }
      });
    }
  }
  setLoginCounter() {
    if (localStorage.getItem('logCount') === '0') {
      localStorage.setItem('logCount', '1');
    } else if (localStorage.getItem('logCount') === '1') {
      localStorage.setItem('logCount', '2');
    } else if (localStorage.getItem('logCount') === '2') {
      localStorage.setItem('logCount', '3');
    } else if (localStorage.getItem('logCount') === '3') {
      localStorage.setItem('logCount', '4');
    } else if (localStorage.getItem('logCount') === '4') {
      localStorage.setItem('logCount', '5');
    } else if (localStorage.getItem('logCount') === '5') {
      localStorage.setItem('logCount', '6');
    } else if (localStorage.getItem('logCount') === '6') {
      localStorage.setItem('logCount', '6');
    } else {
      localStorage.setItem('logCount', '0');
    }
  }

  onRegisterSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
    const uName = this.reguser.name;
    const uMobileNo = this.reguser.mobilenumber;
    const uMail = this.reguser.email;
    const passWORD = this.reguser.password;
    const cpassWord = this.reguser.cpassword;
    const sTreatName = this.reguser.streatname;
    const addRess1 = this.reguser.address1;
    const addRess2 = this.reguser.address2;
    const nearBy = this.reguser.nearby;
    const pincOde = this.reguser.pincode;

    if (passWORD === cpassWord) {
      this.service.getRegisterDetail(uName, uMobileNo, uMail, passWORD, sTreatName, addRess1, addRess2, nearBy, pincOde).subscribe(data => {
        if (data.success) {
          window.alert(data.serect);
          this.reguser = new DataModel();
        } else {
          window.alert(data.serect);
        }
      });
    } else {
      window.alert('Password does not match!');
    }
  }
  getLoggedIn() {
    const number = localStorage.getItem('username');
    if (this.service.isLoggedIn && number.length === 10) {
      this.service.getServaer().subscribe(data => {
        if (data.success) {
          this.router.navigate(['/']);
        } else {
          window.alert('You are logged out. Login Again!!!');
          this.router.navigate(['login']);
          localStorage.clear();
        }
      });
    } else {
      this.router.navigate(['login']);
      localStorage.clear();
    }
  }
}
