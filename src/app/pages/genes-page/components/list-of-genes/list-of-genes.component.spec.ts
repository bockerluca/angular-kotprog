import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfIngredientsComponent } from './list-of-ingredients.component';

describe('ListOfIngredientsComponent', () => {
  let component: ListOfIngredientsComponent;
  let fixture: ComponentFixture<ListOfIngredientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListOfIngredientsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
