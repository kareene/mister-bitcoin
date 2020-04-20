import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';
import { Contact } from '../models/contact.model';
import { Move } from '../models/move.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loggedInUser: User = JSON.parse(localStorage.getItem('loggedInUser'));

  private _isUserLoggedin$ = new BehaviorSubject<Boolean>(!!this.loggedInUser);
  public isUserLoggedin$ = this._isUserLoggedin$.asObservable();
  private _coins$ = new BehaviorSubject<number>((this.loggedInUser) ? this.loggedInUser.coins : 0);
  public coins$ = this._coins$.asObservable();
  private _moves$ = new BehaviorSubject<Move[]>((this.loggedInUser) ? this.loggedInUser.moves : []);
  public moves$ = this._moves$.asObservable();

  constructor() {  }
  
  public getUser(): User {
    return this.loggedInUser;
  }

  public signup(name: string): void {
    this.loggedInUser = {
      name,
      coins: 100,
      moves: []
    }
    localStorage.setItem('loggedInUser', JSON.stringify(this.loggedInUser));
    this._isUserLoggedin$.next(true);
  }
  
  public logout(): void {
    if (!this.loggedInUser) return;
    this.loggedInUser = null;
    localStorage.removeItem('loggedInUser');
    this._isUserLoggedin$.next(false);
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
    this._coins$.next(this.loggedInUser.coins);
    this._moves$.next(this.loggedInUser.moves);
  }

  transferAmountValidator = (control: AbstractControl): { [key: string]: boolean } | null => {
    const value = control.value;
    if (value && !isNaN(value) && value > 0 && value <= this.loggedInUser.coins) {
      return null;
    }
    return { invalidTransferAmount: true };
  }

}
