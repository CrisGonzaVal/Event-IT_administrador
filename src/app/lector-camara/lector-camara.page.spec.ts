import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LectorCamaraPage } from './lector-camara.page';

describe('LectorCamaraPage', () => {
  let component: LectorCamaraPage;
  let fixture: ComponentFixture<LectorCamaraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LectorCamaraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
