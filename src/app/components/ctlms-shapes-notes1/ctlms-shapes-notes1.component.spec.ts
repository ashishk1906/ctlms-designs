import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtlmsShapesNotes1Component } from './ctlms-shapes-notes1.component';

describe('CtlmsShapesNotes1Component', () => {
  let component: CtlmsShapesNotes1Component;
  let fixture: ComponentFixture<CtlmsShapesNotes1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtlmsShapesNotes1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtlmsShapesNotes1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
