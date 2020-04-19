import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact.model';
import { FilterBy } from 'src/app/models/filterBy.model';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  contacts$: Observable<Contact[]>;
  filterBy: FilterBy = { term: '' };

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.loadContacts(this.filterBy);
    this.contacts$ = this.contactService.contacts$;
  }

  setFilter(filterBy: FilterBy): void {
    this.filterBy = filterBy;
    this.contactService.loadContacts(this.filterBy);
  }
  
}
