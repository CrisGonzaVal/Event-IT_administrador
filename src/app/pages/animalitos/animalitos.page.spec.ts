import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimalitosPage } from './animalitos.page';

describe('AnimalitosPage', () => {
  let component: AnimalitosPage;
  let fixture: ComponentFixture<AnimalitosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalitosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
