import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalDirectoryComponent } from './local-directory/local-directory.component';
import { DestinationDirectoryComponent } from './destination-directory/destination-directory.component';

@NgModule({
  declarations: [
    AppComponent,
    LocalDirectoryComponent,
    DestinationDirectoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
