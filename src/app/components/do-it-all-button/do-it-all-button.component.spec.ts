import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowItAllButtonComponent } from './do-it-all-button.component';

describe('DoItAllButtonComponent', () => {
  let component: KnowItAllButtonComponent;
  let fixture: ComponentFixture<KnowItAllButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KnowItAllButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(KnowItAllButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
