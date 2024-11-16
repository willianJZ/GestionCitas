import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetalleDocComponent } from './view-detalle-doc.component';

describe('ViewDetalleDocComponent', () => {
  let component: ViewDetalleDocComponent;
  let fixture: ComponentFixture<ViewDetalleDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewDetalleDocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDetalleDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
