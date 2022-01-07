import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundimgComponent } from './backgroundimg.component';

describe('BackgroundimgComponent', () => {
  let component: BackgroundimgComponent;
  let fixture: ComponentFixture<BackgroundimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundimgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
