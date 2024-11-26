import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdministradorEventosPage } from './administrador-eventos.page';

describe('AdministradorEventosPage', () => {
  let component: AdministradorEventosPage;
  let fixture: ComponentFixture<AdministradorEventosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradorEventosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
