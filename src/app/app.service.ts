import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

interface LoginData {
  success: boolean;
  serect: string;
}

@Injectable()
export class AppService {

  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');
  blogs: [];
  blog: [];
  product: [];
  products: [];
  disease: [];
  user: [];
  wish: [];
  items: [];
  events: any;
  constructor(private http: HttpClient, private router: Router) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
  }
  get isLoggedIn() {
    if (localStorage.getItem('loggedIn')) {
      return true;
    } else {
      return false;
    }
  }
  getServaer() {
    const username = localStorage.getItem('username');
    return this.http.post<LoginData>('http://chetanherbals.com/api/loginverify.php', {
      username
    });
  }
  getLogOut(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  getUserDetail(userName, passWord) {
    return this.http.post<LoginData>('http://chetanherbals.com/api/login.php', {
      userName, passWord
    });
  }

  getRegisterDetail(uName, uMobileNo, uMail, passWORD, sTreatName, addRess1, addRess2, nearBy, pincOde) {
    return this.http.post<LoginData>('http://chetanherbals.com/api/registration.php', {
      uName, uMobileNo, uMail, passWORD, sTreatName, addRess1, addRess2, nearBy, pincOde
    });
  }

  getMarqueeData(): Observable<[]> {
    return this.http.get('http://chetanherbals.com/api/marqueewish.php').pipe(map(res => {
      this.wish = res['wish'];
      return this.wish;
    }));
  }

  setEnquiryData(uName, uMobileNo, uMail, question, timeStamp) {
    return this.http.post<LoginData>('http://chetanherbals.com/api/enquiry.php', {
      uName, uMobileNo, uMail, question, timeStamp
    });
  }

  getUserData(number) {
    return this.http.get(`${'http://chetanherbals.com'}/api/userprofile.php/?number=${number}`).pipe(map(res => {
      this.user = res['user'];
      return this.user;
    }));
  }
  getRegisterUpdate(uName, uMail, sTreatName, addRess1, addRess2, nearBy, pincOde, timestamp, number) {
    return this.http.post<LoginData>('http://chetanherbals.com/api/updateregistration.php', {
      uName, uMail, sTreatName, addRess1, addRess2, nearBy, pincOde, timestamp, number
    });
  }
  getUserResetPassword(userName, passWord) {
    return this.http.post<LoginData>('http://chetanherbals.com/api/login.php', {
      userName, passWord
    });
  }
  sendMailToResetPassword(userName) {
    return this.http.post<LoginData>('http://chetanherbals.com/api/sendmailtoresetpassword.php', {
      userName
    });
  }
  onNewPassword(userName, passWord) {
    return this.http.post<LoginData>('http://chetanherbals.com/api/newpassword.php', {
      userName, passWord
    });
  }
  userDeactivate(userName) {
    return this.http.post<LoginData>('http://chetanherbals.com/api/userdeactivate.php', {
      userName
    });
  }

  getBlogData(): Observable<[]> {
    return this.http.get('http://chetanherbals.com/api/blog-list.php').pipe(map(res => {
      this.blogs = res['blogs'];
      return this.blogs;
    }),
    );
  }
  getSecBlogData(): Observable<[]> {
    return this.http.get('http://chetanherbals.com/api/sec-blog-list.php').pipe(map(res => {
      this.blogs = res['blogs'];
      return this.blogs;
    }),
    );
  }

  getBlogId(id) {
    return this.http.get(`${'http://chetanherbals.com'}/api/blog-detail.php/?id=${id}`).pipe(map(res => {
      this.blog = res['blog'];
      return this.blog;
    }));
  }


  getProductData(): Observable<[]> {
    return this.http.get('./assets/products.json').pipe(map(res => {
      this.products = res['products'];
      return this.products;
    }),
    );
  }

  getDiseaseData(): Observable<[]> {
    return this.http.get('./assets/disease.json').pipe(map(res => {
      this.disease = res['diseases'];
      return this.disease;
    }),
    );
  }
}
