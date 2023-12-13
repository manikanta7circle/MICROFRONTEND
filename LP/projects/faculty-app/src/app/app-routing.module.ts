import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
const facultyCRApp = 'http://localhost:4300/remoteEntry.js'

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent,
  children: [
    {path: 'cr-mfe', loadChildren: () => loadRemoteModule({
      remoteEntry: facultyCRApp,
      remoteName: "facultyAppCr",
      exposedModule: './MedicalModule'
    }).then(m => m.MedicalModule).catch(err=> console.log(err))
  }
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
