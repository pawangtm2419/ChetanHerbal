import { Component, OnInit } from '@angular/core';
import { DataModel } from '../data.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  loginuser: DataModel = new DataModel();
  maiVerifyForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private service: AppService, private router: Router) { }

  ngOnInit(): void {
    this.maiVerifyForm = this.formBuilder.group({
      email: [this.loginuser.email, [
        Validators.required, Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ]]
    });
  }

  onMailForm(event: { preventDefault: () => void; }) {
    event.preventDefault();
    const userName = this.loginuser.email;
    this.service.sendMailToResetPassword(userName).subscribe(data => {
      if (data.success) {
        window.alert('Please Check Your mail and RESET YOUR PASSWORD!');
        localStorage.setItem('MailVerify', JSON.stringify(userName).replace(/\"/g, ''));
        this.router.navigate(['/']);
      } else {
        window.alert(data.serect);
        this.router.navigate(['login']);
      }
    });
  }
}
