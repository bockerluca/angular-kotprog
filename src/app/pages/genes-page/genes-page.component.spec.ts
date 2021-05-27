import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenesPageComponent } from './genes-page.component';

describe('GenesPageComponent', () => {
  let component: GenesPageComponent;
  let fixture: ComponentFixture<GenesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
