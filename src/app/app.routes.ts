import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CtlmsContentComponent } from './components/ctlms-content/ctlms-content.component';
import { CtlmsLessonplanComponent } from './components/ctlms-lessonplan/ctlms-lessonplan.component';
import { CtlmsShapesAssessmentComponent } from './components/ctlms-shapes-assessment/ctlms-shapes-assessment.component';
import { CtlmsShapesNotesComponent } from './components/ctlms-shapes-notes/ctlms-shapes-notes.component';
import { Ch2NotesComponent } from './components/ch2-notes/ch2-notes.component';
import { Ch2WorksheetComponent } from './components/ch2-worksheet/ch2-worksheet.component';
import { Ch3NotesComponent } from './components/ch3-notes/ch3-notes.component';
import { CtlmsShapesNotes1Component } from './components/ctlms-shapes-notes1/ctlms-shapes-notes1.component';
import { CtlmsShapesNotes2Component } from './components/ctlms-shapes-notes2/ctlms-shapes-notes2.component';
import { CtlmsShapesWorksheetComponent } from './components/ctlms-shapes-worksheet/ctlms-shapes-worksheet.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ctlms-content', component: CtlmsContentComponent },
  { path: 'ctlms-lessonplan', component: CtlmsLessonplanComponent },
  { path: 'ctlms-shapes-assessment', component: CtlmsShapesAssessmentComponent },
  { path: 'ctlms-shapes-notes', component: CtlmsShapesNotesComponent },
  { path: 'ctlms-ch2-notes', component: Ch2NotesComponent },
  { path: 'ctlms-ch2-worksheet', component: Ch2WorksheetComponent },
  { path: 'ctlms-ch3-notes', component: Ch3NotesComponent },
  { path: 'ctlms-shapes-notes1', component: CtlmsShapesNotes1Component },
  { path: 'ctlms-shapes-notes2', component: CtlmsShapesNotes2Component },
  { path: 'ctlms-shapes-worksheet', component: CtlmsShapesWorksheetComponent },
  { path: '**', redirectTo: '' },
];


