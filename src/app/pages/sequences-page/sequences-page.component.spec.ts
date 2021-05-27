import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SequencesPageComponent } from './sequnces-page.component';

describe('GenesPageComponent', () => {
  let component: SequencesPageComponent;
  let fixture: ComponentFixture<SequencesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SequencesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SequencesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
