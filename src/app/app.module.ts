import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// MAIN APP COMPONENT
import { AppComponent } from './app.component';

// MODULES
import { AppRoutingModule } from './app-routing.module';
import { CollectionsModule } from './collections/collections.module';
//import { ElementsModule } from './elements/elements.module'; -- removed, lazy loading
import { FooterModule } from './footer/footer.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export { AppModule };

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    CollectionsModule,
    //ElementsModule, -- removed here because I use lazy loading in app-routing.module
    FooterModule,
    AppRoutingModule // AppRoutingModule must come last because of '**' route path
  ],
  // providers: [], This is an old and deprecated way of connecting modules+services!
  bootstrap: [AppComponent]
})
class AppModule { }
