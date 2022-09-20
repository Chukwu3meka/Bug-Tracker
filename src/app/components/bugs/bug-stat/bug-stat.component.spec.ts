import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugStatComponent } from './bug-stat.component';

describe('BugStatComponent', () => {
  let component: BugStatComponent;
  let fixture: ComponentFixture<BugStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BugStatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BugStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
