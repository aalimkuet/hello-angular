import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../components/app/app.component';
import { HelloComponent } from '../components/hello/hello.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from 'src/Services/data.service';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
const routes: Routes = [
  { path: 'index', component: HelloComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
