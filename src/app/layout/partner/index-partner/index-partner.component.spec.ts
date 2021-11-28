import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPartnerComponent } from './index-partner.component';

describe('IndexPartnerComponent', () => {
  let component: IndexPartnerComponent;
  let fixture: ComponentFixture<IndexPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexPartnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
