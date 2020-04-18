import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilterBy } from 'src/app/models/filterBy.model';

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit {

  filterByCopy: FilterBy = null;
  @Input() filterBy: FilterBy;
  @Output() setFilter = new EventEmitter<FilterBy>();

  ngOnInit(): void {
    this.filterByCopy = JSON.parse(JSON.stringify(this.filterBy))
  }

}
