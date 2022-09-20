import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugListsComponent } from './bug-list.component';

describe('BugListsComponent', () => {
  let component: BugListsComponent;
  let fixture: ComponentFixture<BugListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BugListsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BugListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
