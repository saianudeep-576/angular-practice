import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StorePracticeComponentComponent } from './store-practice-component/store-practice-component/store-practice-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { reducerFunction } from './store/reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent, StorePracticeComponentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ selector: reducerFunction }, {}), //here we are passing the same reducer for all actions
    FormsModule,
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25 }), //for integrating the redux tools with the application
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
