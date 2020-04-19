import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  isUserLoggedin$: Observable<Boolean>;
  constructor(private router: Router,private userService: UserService) { }

  ngOnInit(): void {
    this.isUserLoggedin$ = this.userService.isUserLoggedin$;
  }

  onLogout(): void {
    this.userService.logout();
    this.router.navigate(['/signup']);
  }

}
