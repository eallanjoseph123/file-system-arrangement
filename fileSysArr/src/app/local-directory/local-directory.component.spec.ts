import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalDirectoryComponent } from './local-directory.component';

describe('LocalDirectoryComponent', () => {
  let component: LocalDirectoryComponent;
  let fixture: ComponentFixture<LocalDirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalDirectoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
