import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';
import { Child1componentComponent } from './child1component/child1component.component';
import { Child2componentComponent } from './child2component/child2component.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentcomponentComponent,
    Child1componentComponent,
    Child2componentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
