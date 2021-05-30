import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGenesModalComponent } from './edit-genes-modal.component';

describe('EditGenesModalComponent', () => {
  let component: EditGenesModalComponent;
  let fixture: ComponentFixture<EditGenesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditGenesModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGenesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
