import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { HomeTableComponent } from './home-table/home-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponentComponent } from './details-component/details-component.component';
import { ChartsComponent } from './charts/charts.component';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  MatCardModule, MatDialogModule,
   MatMenuModule, MatProgressSpinnerModule
} from '@angular/material';
import { FusionChartsModule } from 'angular-fusioncharts';
 
// Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { LoginComponent } from './login/login.component';
 
// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeTableComponent,
    DashboardComponent,
    DetailsComponentComponent,
    LoginComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressBarModule,
    FusionChartsModule,
    MatCardModule,
    MatInputModule,
    MatCardModule, MatDialogModule, MatInputModule,
    MatMenuModule, MatProgressSpinnerModule,
    FormsModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
