import { Component, OnInit, Input } from '@angular/core';
import { Move } from 'src/app/models/move.model';

@Component({
  selector: 'moves-list',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.scss']
})
export class MovesListComponent implements OnInit {

  title: string;
  @Input() moves: Move[];
  @Input() toContact: string;

  constructor() { }

  ngOnInit(): void {
    this.title = (this.toContact) ? `Your Moves to ${this.toContact}:` : 'Your Moves:';
  }

}
