import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcasecardsComponent } from './showcasecards.component';

describe('ShowcasecardsComponent', () => {
  let component: ShowcasecardsComponent;
  let fixture: ComponentFixture<ShowcasecardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowcasecardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowcasecardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
