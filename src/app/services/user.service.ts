import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Contact } from '../models/contact.model';
import { Move } from '../models/move.model';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedInUser: User = JSON.parse(localStorage.getItem('loggedInUser'));

  constructor() { }
  
  public getUser(): User {
    return this.loggedInUser;
  }

  public getCoins(): number {
    return (this.loggedInUser) ? this.loggedInUser.coins : 0;
  }

  public getMoves(): Move[] {
    return (this.loggedInUser) ? this.loggedInUser.moves : [];
  }

  public signup(name: string): void {
    this.loggedInUser = {
      name,
      coins: 100,
      moves: []
    }
    localStorage.setItem('loggedInUser', JSON.stringify(this.loggedInUser));
  }

  public addMove(contact: Contact, amount: number): void {
    var move: Move = {
      toId: contact._id,
      to: contact.name,
      at: Date.now(),
      amount: amount
    }
    this.loggedInUser.coins -= amount;
    this.loggedInUser.moves.unshift(move);
    localStorage.setItem('loggedInUser', JSON.stringify(this.loggedInUser));
  }

  transferAmountValidator = (control: AbstractControl): { [key: string]: boolean } | null => {
    const value = control.value;
    if (value && !isNaN(value) && Number.isInteger(value) && value > 0 && value <= this.loggedInUser.coins) {
      return null;
    }
    return { invalidTransferAmount: true };
  }

}
