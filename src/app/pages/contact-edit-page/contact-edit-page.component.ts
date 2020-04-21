import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common'
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'contact-edit-page',
  templateUrl: './contact-edit-page.component.html',
  styleUrls: ['./contact-edit-page.component.scss']
})
export class ContactEditPageComponent implements OnInit, OnDestroy {

  currContact: Contact = new Contact;
  contactImg: string = 'assets/img/robot.svg';
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private location: Location,
    private contactService: ContactService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (!params.id) return;
      if (this.subscription) this.subscription.unsubscribe();
      this.subscription = this.contactService.getContactById(params.id).subscribe(
        contact => {
          this.currContact = JSON.parse(JSON.stringify(contact));
          this.contactImg = `https://robohash.org/${this.currContact.name}`;
        },
        err => {
          this.router.navigate(['/contact']);
        });
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  onGoBack(): void {
    this.location.back();
  }

  onDeleteContact(): void {
    this.contactService.deleteContact(this.currContact._id);
    this.router.navigate(['/contact']);
  }

  onSaveContact(): void {
    if (this.subscription) this.subscription.unsubscribe();
    this.subscription = this.contactService.saveContact(this.currContact).subscribe(
      contact => {
        this.router.navigate([`/contact/${contact._id}`]);
      },
      err => {
        this.router.navigate(['/contact']);
      });
  }

}
