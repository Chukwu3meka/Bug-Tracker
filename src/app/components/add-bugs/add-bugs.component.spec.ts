import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBugsComponent } from './add-bugs.component';

describe('AddBugsComponent', () => {
  let component: AddBugsComponent;
  let fixture: ComponentFixture<AddBugsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBugsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
