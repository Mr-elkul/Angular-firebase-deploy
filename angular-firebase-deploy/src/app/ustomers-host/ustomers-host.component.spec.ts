import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UstomersHostComponent } from './ustomers-host.component';

describe('UstomersHostComponent', () => {
  let component: UstomersHostComponent;
  let fixture: ComponentFixture<UstomersHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UstomersHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UstomersHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
