import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { GoogleChartsModule } from 'angular-google-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { SighupPageComponent } from './pages/sighup-page/sighup-page.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactPreviewComponent } from './components/contact-preview/contact-preview.component';
import { ContactFilterComponent } from './components/contact-filter/contact-filter.component';
import { ChartComponent } from './components/chart/chart.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MovesListComponent } from './components/moves-list/moves-list.component';
import { TransferFundComponent } from './components/transfer-fund/transfer-fund.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent,
    ContactDetailsPageComponent,
    ContactEditPageComponent,
    StatisticPageComponent,
    SighupPageComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactFilterComponent,
    ChartComponent,
    MainHeaderComponent,
    MovesListComponent,
    TransferFundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleChartsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
