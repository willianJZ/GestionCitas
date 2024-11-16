import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisCitasComponent } from './lis-citas.component';

describe('LisCitasComponent', () => {
  let component: LisCitasComponent;
  let fixture: ComponentFixture<LisCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LisCitasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LisCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
