import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRoomNameComponent } from './get-room-name.component';

describe('GetRoomNameComponent', () => {
  let component: GetRoomNameComponent;
  let fixture: ComponentFixture<GetRoomNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetRoomNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetRoomNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
