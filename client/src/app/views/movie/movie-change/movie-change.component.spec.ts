import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieChangeComponent } from './movie-change.component';

describe('MovieChangeComponent', () => {
  let component: MovieChangeComponent;
  let fixture: ComponentFixture<MovieChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
