import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TypeTutorialComponent } from './components/type-tutorial/type-tutorial.component';
import { UpdateTutorialComponent } from './components/update-tutorial/update-tutorial.component';
import { TypeListComponent } from './components/type-list/type-list.component';
import { TypeDetailsComponent } from './components/type-details/type-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'tutorials', component: TutorialsListComponent },
  {path:'updateTutorial/:id', component:UpdateTutorialComponent},
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'add', component: AddTutorialComponent },
  { path: 'addtype', component: TypeTutorialComponent },
  { path: 'types' , component: TypeListComponent },
  { path : 'type/:id' , component :TypeDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
