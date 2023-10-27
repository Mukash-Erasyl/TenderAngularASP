import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindTenderComponentComponent } from './find-tender-component.component';

describe('FindTenderComponentComponent', () => {
  let component: FindTenderComponentComponent;
  let fixture: ComponentFixture<FindTenderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindTenderComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindTenderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
