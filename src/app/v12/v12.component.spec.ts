import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V12Component } from './v12.component';

describe('V12Component', () => {
  let component: V12Component;
  let fixture: ComponentFixture<V12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [V12Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(V12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
