import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {

  maxCoins$: Observable<number>;
  transferForm: FormGroup;
  @Input() contact: Contact;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.maxCoins$ = this.userService.coins$;
    this.transferForm = this.formBuilder.group({
			'amount': [null, [Validators.required, this.userService.transferAmountValidator]]
		});
  }

  onTransferCoins(): void {
    this.userService.addMove(this.contact, this.transferForm.value.amount);
    this.transferForm.reset();
  }

}
