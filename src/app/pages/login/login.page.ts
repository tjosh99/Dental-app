import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/providers/user.service';
import { DataService } from 'src/app/providers/data.service';
import { LoginInfo } from '../../data-schema';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  private logindata = new LoginInfo();

  constructor(private user: UserService, private ds: DataService, private router: Router) { }

  ngOnInit() {
    if(this.user.getUserLoggedIn()) {
      this.router.navigate(['folder/:id']);
    }
  }

  private login_user(e) {
    e.preventDefault();
    this.logindata.username = e.target[0].value;
    this.logindata.password = e.target[0].value;

    this.ds.push_data('login', this.logindata).subscribe((data: any)=>{
      console.log(data);
      let a=data.payload;
      this.user.setUserLogIn(a.token, a.empno, a.empname);
      this.router.navigate(['folder/Inbox']);
    }, er => {
      console.log(er.error.status.remarks, er.error.status.message);
      alert(er.error.status.message);
    });
  }



}
