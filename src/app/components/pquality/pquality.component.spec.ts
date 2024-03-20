import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PqualityComponent } from './pquality.component';

describe('PqualityComponent', () => {
  let component: PqualityComponent;
  let fixture: ComponentFixture<PqualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PqualityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PqualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
