import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { ROUTES } from './app.router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { DetailComponent } from './components/detail/detail.component';
import { MainComponent } from './components/main/main.component';
import { AsideComponent } from './components/aside/aside.component';
import { MainDetailComponent } from './components/main-detail/main-detail.component';
import { MainSearchComponent } from './components/main-search/main-search.component';

import { TradersClubService } from './components/services/tradersClub.service';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    LoadingComponent,
    DetailComponent,
    MainComponent,
    AsideComponent,
    MainDetailComponent,
    MainSearchComponent,
    // ReactiveFormsModule,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [TradersClubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
