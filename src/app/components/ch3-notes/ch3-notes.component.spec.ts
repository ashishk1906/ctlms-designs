import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ch3NotesComponent } from './ch3-notes.component';

describe('Ch3NotesComponent', () => {
  let component: Ch3NotesComponent;
  let fixture: ComponentFixture<Ch3NotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ch3NotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ch3NotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
