import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationDirectoryComponent } from './destination-directory.component';

describe('DestinationDirectoryComponent', () => {
  let component: DestinationDirectoryComponent;
  let fixture: ComponentFixture<DestinationDirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationDirectoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
