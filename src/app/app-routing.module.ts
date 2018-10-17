import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ReadingListComponent } from './reading-list/reading-list.component';
import { UndergradComponent } from './undergrad/undergrad.component';
import { MassmutualComponent } from './massmutual/massmutual.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'reading-list', component: ReadingListComponent },
    { path: 'undergrad', component: UndergradComponent },
    { path: 'massmutual', component: MassmutualComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
  
}