import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateContentCatComponent } from './create-content-cat.component';

describe('CreateContentCatComponent', () => {
  let component: CreateContentCatComponent;
  let fixture: ComponentFixture<CreateContentCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateContentCatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateContentCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
