import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  loggedinUser: User = null;
  btcRate: Observable<number>;

  constructor(private userService: UserService, private bitcoinService: BitcoinService) { }

  ngOnInit(): void {
    this.loggedinUser = this.userService.getUser();
    this.btcRate = this.bitcoinService.getRate(1);
  }

}
