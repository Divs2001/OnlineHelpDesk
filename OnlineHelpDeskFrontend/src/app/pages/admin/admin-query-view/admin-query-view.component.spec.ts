import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminQueryViewComponent } from './admin-query-view.component';

describe('AdminQueryViewComponent', () => {
  let component: AdminQueryViewComponent;
  let fixture: ComponentFixture<AdminQueryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminQueryViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminQueryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
