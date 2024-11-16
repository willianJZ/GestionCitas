import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHorariosComponent } from './view-horarios.component';

describe('ViewHorariosComponent', () => {
  let component: ViewHorariosComponent;
  let fixture: ComponentFixture<ViewHorariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewHorariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewHorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
