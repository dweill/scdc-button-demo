import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StupidButtonComponent } from './stupid-button.component';

describe('StupidButtonComponent', () => {
  let fixture: ComponentFixture<StupidButtonComponent>;

  const createComponent = (buttonText: string) => {
    fixture = TestBed.createComponent(StupidButtonComponent);
    const component = fixture.componentInstance;
    component.buttonText = buttonText;
    fixture.detectChanges;
    return component;
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StupidButtonComponent],
    }).compileComponents();
  });

  it('should emit on click', () => {
    const component = createComponent('Save');
    spyOn(component.clickEmitter, 'emit');
    component.onClick();
    expect(component.clickEmitter.emit).toHaveBeenCalled();
    expect(component.clickEmitter.emit).toHaveBeenCalledWith();
  });
});
