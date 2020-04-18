import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact.model';
import { FilterBy } from 'src/app/models/filterBy.model';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit, OnDestroy {

  contacts: Contact[] = [];
  filterBy: FilterBy = { term: '' };
  subscription: Subscription;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.loadContacts(this.filterBy);
    this.subscription = this.contactService.contacts$.subscribe((contacts) => {
      this.contacts = contacts;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setFilter(filterBy: FilterBy): void {
    this.filterBy = filterBy;
    this.contactService.loadContacts(this.filterBy);
  }
  
}
