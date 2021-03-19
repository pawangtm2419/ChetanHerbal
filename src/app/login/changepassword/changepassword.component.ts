import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataModel } from '../data.model';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  loginuser: DataModel = new DataModel();
  changePassword: FormGroup;
  hide = true;
  constructor(private formBuilder: FormBuilder, private service: AppService, private router: Router) { }

  ngOnInit(): void {
    this.changePassword = this.formBuilder.group({
      email: [this.loginuser.email, [
        Validators.required, Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ]],
      password: [this.loginuser.password, [ Validators.required, Validators.minLength(6), Validators.maxLength(30) ]],
      cpassword: [this.loginuser.password, [ Validators.required, Validators.minLength(6), Validators.maxLength(30) ]]
    });
    console.log(this.getMailId());
  }
  getMailId() {
    const mailid = localStorage.getItem('MailVerify');
    return mailid;
  }
  onNewPasswordSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
    const userName = this.loginuser.email;
    const passWord = this.loginuser.password;
    const cpassWord = this.loginuser.cpassword;
    if (passWord === cpassWord) {
      this.service.onNewPassword(userName, passWord).subscribe(data => {
        if (data.success) {
          window.alert(data.serect);
          this.router.navigate(['login']);
        } else {
          window.alert(data.serect);
        }
      });
    } else {
      window.alert('Password Doesnot match!!!');
    }
  }
}
