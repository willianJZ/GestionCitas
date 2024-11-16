import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRegistroComponent } from './view-registro.component';

describe('ViewRegistroComponent', () => {
  let component: ViewRegistroComponent;
  let fixture: ComponentFixture<ViewRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewRegistroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
