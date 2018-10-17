import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MassmutualComponent } from './massmutual.component';

describe('MassmutualComponent', () => {
  let component: MassmutualComponent;
  let fixture: ComponentFixture<MassmutualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassmutualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassmutualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
