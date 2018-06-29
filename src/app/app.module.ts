import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DefaultPipe } from './default.pipe';
import { LoginComponent } from './login/login.component';
import { HoverfocusDirective } from './hoverfocus.directive';
import { TestHoverFocusComponent } from './test-hover-focus/test-hover-focus.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultPipe,
    LoginComponent,
    HoverfocusDirective,
    TestHoverFocusComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
