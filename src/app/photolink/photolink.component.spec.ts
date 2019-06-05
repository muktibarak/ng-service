import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotolinkComponent } from './photolink.component';

describe('PhotolinkComponent', () => {
  let component: PhotolinkComponent;
  let fixture: ComponentFixture<PhotolinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotolinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotolinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
