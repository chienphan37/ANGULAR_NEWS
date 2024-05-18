import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V15Component } from './v15.component';

describe('V15Component', () => {
  let component: V15Component;
  let fixture: ComponentFixture<V15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [V15Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(V15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
