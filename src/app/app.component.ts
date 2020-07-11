import { Component, OnInit } from '@angular/core';
import { AuthService } from './authentication/auth.service';
import { UserService } from './authentication/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'goldin-ceramics';

  constructor(
    public authService: AuthService,
    public userService: UserService
  ) { }

  ngOnInit() {
  }

  get isAdmin() {
    return this.authService.user.isAdmin;
  }

}
