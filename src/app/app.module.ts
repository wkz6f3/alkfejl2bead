import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatToolbarModule, 
  MatButtonModule, 
  MatIconModule,
  MatListModule,
  MatButtonToggleModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RoutingModule } from './routing/routing.module';
import { TypeFilterComponent } from './type-filter/type-filter.component';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TransactionAddComponent } from './transaction-add/transaction-add.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionListComponent,
    MainPageComponent,
    TypeFilterComponent,
    TransactionFormComponent,
    TransactionAddComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    RoutingModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
