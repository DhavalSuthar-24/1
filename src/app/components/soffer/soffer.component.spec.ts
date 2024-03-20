import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SofferComponent } from './soffer.component';

describe('SofferComponent', () => {
  let component: SofferComponent;
  let fixture: ComponentFixture<SofferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SofferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
