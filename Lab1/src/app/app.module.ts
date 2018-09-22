import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputsOutputsComponent } from './inputAreas/inputs-outputs/inputs-outputs.component';

@NgModule({
  declarations: [
    AppComponent,
    InputsOutputsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
