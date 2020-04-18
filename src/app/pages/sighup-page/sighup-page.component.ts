import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'sighup-page',
  templateUrl: './sighup-page.component.html',
  styleUrls: ['./sighup-page.component.scss']
})
export class SighupPageComponent {

  username: string = '';

  constructor(private router: Router, private userService: UserService) { }

  onSignup(): void {
    this.userService.signup(this.username);
    this.router.navigate(['/']);
  }

}
