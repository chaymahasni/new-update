import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeTutorialComponent } from './type-tutorial.component';

describe('TypeTutorialComponent', () => {
  let component: TypeTutorialComponent;
  let fixture: ComponentFixture<TypeTutorialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypeTutorialComponent]
    });
    fixture = TestBed.createComponent(TypeTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
