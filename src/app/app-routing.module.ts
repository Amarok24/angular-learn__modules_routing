import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//import { ElementsModule } from './elements/elements.module';

export { AppRoutingModule };

// Lazy import documentation: https://angular.io/guide/lazy-loading-ngmodules

async function lazyImport(): Promise<any>
{
  const dynamicModule = await import('./elements/elements.module');
  console.log('lazyImport of ElementsModule done');
  return dynamicModule.ElementsModule;
}

const routes: Routes = [
  {
    path: 'elements',
    loadChildren: lazyImport
    //loadChildren: () => import('./elements/elements.module').then(m => m.ElementsModule)
  },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { // Log Angular router operations to the console (for debugging).
      enableTracing: false
    }
  )],
  exports: [RouterModule]
})
class AppRoutingModule { }
