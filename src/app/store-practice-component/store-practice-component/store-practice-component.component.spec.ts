import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorePracticeComponentComponent } from './store-practice-component.component';

describe('StorePracticeComponentComponent', () => {
  let component: StorePracticeComponentComponent;
  let fixture: ComponentFixture<StorePracticeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorePracticeComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorePracticeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
