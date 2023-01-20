import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Component/home/home.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';
import { MainProductComponent } from './Component/main-product/main-product.component';
import { ProposalProductComponent } from './Component/proposal-product/proposal-product.component';
import { AdminProposalProductComponent } from './Component/admin-proposal-product/admin-proposal-product.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './Component/header/header.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    MainProductComponent,
    ProposalProductComponent,
    AdminProposalProductComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
