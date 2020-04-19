import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit, OnDestroy {

  transferForm: FormGroup;
  maxCoins: number;
  subscription: Subscription;
  @Input() contact: Contact;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.subscription = this.userService.coins$.subscribe(coins => {
        this.maxCoins = coins;
    });
    this.transferForm = this.formBuilder.group({
			'amount': [null, [Validators.required, this.userService.transferAmountValidator]]
		});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onTransferCoins(): void {
    this.userService.addMove(this.contact, this.transferForm.value.amount);
    this.transferForm.reset();
  }

}
