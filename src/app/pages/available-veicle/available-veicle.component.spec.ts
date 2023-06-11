import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableVeicleComponent } from './available-veicle.component';

describe('AvailableVeicleComponent', () => {
  let component: AvailableVeicleComponent;
  let fixture: ComponentFixture<AvailableVeicleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvailableVeicleComponent]
    });
    fixture = TestBed.createComponent(AvailableVeicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
