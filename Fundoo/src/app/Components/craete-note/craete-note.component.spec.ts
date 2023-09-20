import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraeteNoteComponent } from './craete-note.component';

describe('CraeteNoteComponent', () => {
  let component: CraeteNoteComponent;
  let fixture: ComponentFixture<CraeteNoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CraeteNoteComponent]
    });
    fixture = TestBed.createComponent(CraeteNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
