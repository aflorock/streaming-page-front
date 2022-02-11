import { MoviesService } from './services/movies.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment as env } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthModule } from '@auth0/auth0-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const firebaseConfig = {
  apiKey: "AIzaSyDnAAN6_N0Rb6jmlLq45_XXqtFO0xTDufo",
  authDomain: "stream-api-6fe52.firebaseapp.com",
  projectId: "stream-api-6fe52",
  storageBucket: "stream-api-6fe52.appspot.com",
  messagingSenderId: "979208228461",
  appId: "1:979208228461:web:8c65140f8f4fa0cd273964"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthModule.forRoot({
      ...env.auth,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
