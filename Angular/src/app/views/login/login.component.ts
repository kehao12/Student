import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  message = '';
  userName = '';
  password = '';
  constructor(private service: UserService,
    private router: Router,
    private cookieService: CookieService) {}
  login() {
    this.service.refreshList();
    if (this.service.list==null) return; 
    for (const user of this.service.list) {
      if (user.USERNAME.toLowerCase() === this.userName.toLowerCase() && this.password===user.PASSWORD)
      {
        if (user.STATUS==0) 
        {
          this.message = "User was banned!"
          return;
        }
        this.cookieService.set('username', user.USERNAME);
        this.cookieService.set('lastname', user.LAST_NAME);
        this.router.navigate(['/dashboard']);
        return;
      }

      }
      
      this.message = "Wrong username or password!";
  } 
}
