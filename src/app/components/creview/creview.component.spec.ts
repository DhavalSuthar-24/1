import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreviewComponent } from './creview.component';

describe('CreviewComponent', () => {
  let component: CreviewComponent;
  let fixture: ComponentFixture<CreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
