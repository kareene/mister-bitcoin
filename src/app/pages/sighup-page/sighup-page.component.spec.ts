import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SighupPageComponent } from './sighup-page.component';

describe('SighupPageComponent', () => {
  let component: SighupPageComponent;
  let fixture: ComponentFixture<SighupPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SighupPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SighupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
