import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfGenesComponent } from './list-of-genes.component';

describe('ListOfGenesComponent', () => {
  let component: ListOfGenesComponent;
  let fixture: ComponentFixture<ListOfGenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListOfGenesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfGenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
