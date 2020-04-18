import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {

  transferForm: FormGroup;
  maxCoins: number = 0;
  @Input() contact: Contact;
  @Output() coinsTransfered = new EventEmitter<void>();

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.maxCoins = this.userService.getCoins();
    this.transferForm = this.formBuilder.group({
			'amount': [null, [Validators.required, this.userService.transferAmountValidator]]
		});
  }

  onTransferCoins(): void {
    this.userService.addMove(this.contact, this.transferForm.value.amount);
    this.maxCoins = this.userService.getCoins();
    this.transferForm.reset();
    this.coinsTransfered.emit();
  }

}
