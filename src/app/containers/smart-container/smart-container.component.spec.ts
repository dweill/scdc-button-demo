import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartContainerComponent } from './smart-container.component';

describe('SmartContainerComponent', () => {
  let fixture: ComponentFixture<SmartContainerComponent>;

  const createComponent = (counter = 0) => {
    fixture = TestBed.createComponent(SmartContainerComponent);
    const component = fixture.componentInstance;
    component.counter = counter;
    fixture.detectChanges;
    return component;
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SmartContainerComponent);
    fixture.detectChanges();
  });

  it('should alert on imagine click with prefix', () => {
    const component = createComponent();
    spyOn(window, 'alert');
    component.imagine('if you will');
    expect(window.alert).toHaveBeenCalledWith('Imagine if you will');
    component.imagine(`there's no heaven, I wonder if you can`);
    expect(window.alert).toHaveBeenCalledWith(
      `Imagine there's no heaven, I wonder if you can`
    );
  });
});
