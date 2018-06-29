import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindpartsComponent } from './findparts.component';

describe('FindpartsComponent', () => {
  let component: FindpartsComponent;
  let fixture: ComponentFixture<FindpartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindpartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindpartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
