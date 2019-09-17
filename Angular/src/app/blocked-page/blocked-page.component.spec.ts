import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedPageComponent } from './blocked-page.component';

describe('BlockedPageComponent', () => {
  let component: BlockedPageComponent;
  let fixture: ComponentFixture<BlockedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
