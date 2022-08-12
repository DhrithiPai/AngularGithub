import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserService } from './services/user.service';

import { ProfileComponent } from './components/profile/profile.component';
import { ReposComponent } from './components/repos/repos.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ReposComponent,
    SearchBarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
