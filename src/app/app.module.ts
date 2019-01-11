import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

/* Import Components */
import { AppComponent } from './app.component';
import { CarSearchComponent } from './components/car-search/car-search.component';

/* Import Services */
import { Logger } from './services/logger.service';

@NgModule({
  declarations: [
    AppComponent,
    CarSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
	  ReactiveFormsModule,
	  FormsModule,
    AppRoutingModule
  ],
  providers: [ Logger ],
  bootstrap: [AppComponent]
})
export class AppModule { }
