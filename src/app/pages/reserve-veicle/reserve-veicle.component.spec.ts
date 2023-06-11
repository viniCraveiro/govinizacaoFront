import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveVeicleComponent } from './reserve-veicle.component';

describe('ReserveVeicleComponent', () => {
  let component: ReserveVeicleComponent;
  let fixture: ComponentFixture<ReserveVeicleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReserveVeicleComponent]
    });
    fixture = TestBed.createComponent(ReserveVeicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
