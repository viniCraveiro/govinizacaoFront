import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeicleGroupComponent } from './veicle-group.component';

describe('VeicleGroupComponent', () => {
  let component: VeicleGroupComponent;
  let fixture: ComponentFixture<VeicleGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeicleGroupComponent]
    });
    fixture = TestBed.createComponent(VeicleGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
