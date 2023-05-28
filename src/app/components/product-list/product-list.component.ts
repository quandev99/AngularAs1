import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products: IProduct[] = [];
  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.productService.getProducts().subscribe(
      (products) => {
        this.products = products;
        console.log(products);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  removeProduct(id: number) {
    const confirm = window.confirm('Bạn có muốn xoá không sản phẩm này không?');
    // xoa API
    if (confirm) {
      this.productService.deleteProductId(id).subscribe(() => {
        this.products = this.products.filter((item) => item.id !== id);
      });
    }
  }
}
