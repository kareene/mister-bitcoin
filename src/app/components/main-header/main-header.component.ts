import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  loggedinUser: User = null;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // this.loggedinUser = this.userService.getUser();
  }

}
