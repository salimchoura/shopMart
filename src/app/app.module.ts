import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { SearchComponent } from './body/search/search.component';
import { FilterComponent } from './body/filter/filter.component';
import { ProductsListComponent } from './body/products-list/products-list.component';
import { ProductDetailsComponent } from './body/product-details/product-details.component';
import { ProductComponent } from './body/products-list/product/product.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import {FormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    TopBannerComponent,
    HeaderComponent,
    BodyComponent,
    SearchComponent,
    FilterComponent,
    ProductsListComponent,
    ProductDetailsComponent,
    ProductComponent,
    TopMenuComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
