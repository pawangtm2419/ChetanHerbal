import { Component, OnInit } from '@angular/core';
import { DataModel } from 'src/app/login/data.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  timestamp = new Date();
  enquiry: DataModel = new DataModel();
  enquiryForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private service: AppService) { }


  ngOnInit() {
    this.enquiryForm = this.formBuilder.group({
      name: [this.enquiry.name, [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      mobilenumber: [this.enquiry.mobilenumber, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]],
      email: [this.enquiry.email, [Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      question: [this.enquiry.question, [Validators.required, Validators.minLength(10)]],
    });
  }
  onEnquirySubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
    const uName = this.enquiry.name;
    const uMobileNo = this.enquiry.mobilenumber;
    const uMail = this.enquiry.email;
    const question = this.enquiry.question;
    const timeStamp: string = this.timestamp.toLocaleString();

    if (this.enquiry.mobilenumber != null) {
      this.service.setEnquiryData(uName, uMobileNo, uMail, question, timeStamp).subscribe(data => {
        if (data.success) {
          window.alert(data.serect);
          this.enquiry = new DataModel();
        } else {
          window.alert(data.serect);
        }
      });
    } else {
      window.alert('Mobile number is empty!');
    }
  }
}
