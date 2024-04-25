import { Component, signal, Input, Output } from '@angular/core';
import { HeaderComponent } from '../../component/header/header.component';
import { CardInformationComponent } from '../../component/card-information/card-information.component';
import { ProductServicesService } from '../../../../services/product-services.service';
import { GetProductDto } from '../../../../dtos/get-product.dto';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [HeaderComponent, CardInformationComponent],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {
  constructor(private productService: ProductServicesService) { }
  protected products: GetProductDto[] = [];
  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => this.products = products);
  }
}
