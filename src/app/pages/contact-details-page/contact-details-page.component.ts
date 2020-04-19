import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact.model';
import { UserService } from 'src/app/services/user.service';
import { Move } from 'src/app/models/move.model';

@Component({
  selector: 'contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit, OnDestroy {

  currContact: Contact = null;
  subscription: Subscription;
  moves$: Observable<Move[]>;

  constructor(private route: ActivatedRoute, private router: Router,
    private contactService: ContactService, private userService: UserService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (this.subscription) this.subscription.unsubscribe();
      this.subscription = this.contactService.getContactById(params.id).subscribe(
        contact => {
          this.currContact = contact;
        },
        err => {
          this.router.navigate(['/contact']);
        });
    });
    this.moves$ = this.userService.moves$.pipe(map(moves => moves.filter(move => move.toId === this.currContact._id)));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
