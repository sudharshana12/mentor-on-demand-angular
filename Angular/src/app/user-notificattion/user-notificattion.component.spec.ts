import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNotificattionComponent } from './user-notificattion.component';

describe('UserNotificattionComponent', () => {
  let component: UserNotificattionComponent;
  let fixture: ComponentFixture<UserNotificattionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNotificattionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNotificattionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
