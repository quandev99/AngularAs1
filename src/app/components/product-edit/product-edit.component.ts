import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent {
  public nowTimeout: number = new Date().getTime();

  product: IProduct = {
    id: 0,
    name: '',
    image: '',
    price: 0,
    createdAt: 0,
  };
  productForm = this.formBuilder.group({
    id: [0],
    name: [''],
    image: [''],
    price: [0],
    createdAt: [0],
  });
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    // Observable
    this.route.paramMap.subscribe((param) => {
      const id = Number(param.get('id'));
      this.productService.getProductID(id).subscribe((product: any) => {
        this.product = product;
        this.productForm.patchValue({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          createdAt: product.createdAt,
        });
      });
    });
  }
  onHandleSubmit() {
    if (this.productForm.invalid) return;
    const product: IProduct = {
      id: this.product.id,
      name: this.productForm.value.name || '',
      image: this.productForm.value.image || '',
      price: this.productForm.value.price || 0,
      createdAt: this.productForm.value.createdAt || this.nowTimeout,
    };
    console.log('X', this.productForm);
    this.productService.updateProduct(product).subscribe((data) => {
      console.log(data);
      this.router.navigateByUrl('/productList');
    });
  }
}
