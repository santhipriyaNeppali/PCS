import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultViewComponent } from './views/result-view/result-view.component';
import { ResultMainComponent } from './views/result-main/result-main.component';
import { ErrorpageComponent } from './views/errorpage/errorpage.component';


const routes: Routes = [
    { path: 'error', component: ErrorpageComponent },
    { path: 'suburbs', component: ResultMainComponent, 
     children :[
      { path: 'radius', component: ResultViewComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
