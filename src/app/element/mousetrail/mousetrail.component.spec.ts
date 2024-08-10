import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MousetrailComponent } from './mousetrail.component';

describe('MousetrailComponent', () => {
  let component: MousetrailComponent;
  let fixture: ComponentFixture<MousetrailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MousetrailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MousetrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
