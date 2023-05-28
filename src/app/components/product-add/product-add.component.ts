import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormBuilder, Validators } from '@angular/forms';
import { IProduct } from '../../interfaces/Product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent {
  public nowTimeout: number = new Date().getTime();
  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  productForm = this.formBuilder.group({
    id: [0],
    name: [''],
    image: [''],
    price: [0],
    createdAt: [this.nowTimeout],
  });

  onHandleSubmit() {
    if (this.productForm.invalid) {
      return;
    }
    const product: IProduct = {
      name: this.productForm.value.name || '',
      price: this.productForm.value.price || 0,
      id: this.productForm.value.id || 0,
      image: this.productForm.value.image || '',
      createdAt: this.nowTimeout,
    };
    this.productService.addProduct(product).subscribe((data) => {
      console.log(data);
      this.router.navigateByUrl('productList');
    });
  }
}
