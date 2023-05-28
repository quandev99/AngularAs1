import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  products: IProduct[] = [];
  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.log('Lỗi server:' + JSON.stringify(error));
      }
    );
  }
  removeProduct(id: number) {
    // xoa API
    // this.productService.deleteProductId(id).subscribe(() => {
    //   // reRender
    //   this.products = this.products.filter((item) => item.id !== id);
    // });
  }
}
