import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CtlmsContentComponent } from './components/ctlms-content/ctlms-content.component';
import { CtlmsLessonplanComponent } from './components/ctlms-lessonplan/ctlms-lessonplan.component';
import { CtlmsShapesAssessmentComponent } from './components/ctlms-shapes-assessment/ctlms-shapes-assessment.component';
import { CtlmsShapesNotesComponent } from './components/ctlms-shapes-notes/ctlms-shapes-notes.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ctlms-content', component: CtlmsContentComponent },
  { path: 'ctlms-lessonplan', component: CtlmsLessonplanComponent },
  { path: 'ctlms-shapes-assessment', component: CtlmsShapesAssessmentComponent },
  { path: 'ctlms-shapes-notes', component: CtlmsShapesNotesComponent },
  { path: '**', redirectTo: '' },
];


