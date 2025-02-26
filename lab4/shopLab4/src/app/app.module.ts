import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component'; // Import
// ... другие импорты ...

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent, // Declare ProductsComponent
    // ... другие компоненты ...
  ],
  imports: [
    BrowserModule,
    // ... другие импорты ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }