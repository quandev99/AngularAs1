import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductAddComponent } from './components/product-add/product-add.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'productList', component: ProductListComponent },
  { path: 'productAdd', component: ProductAddComponent },
  { path: 'product/:id/edit', component: ProductEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
