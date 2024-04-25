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
  private products: GetProductDto[] = [];
  category = signal<string>('');
  destacados: GetProductDto[] = this.products.filter((product: GetProductDto) => product.category === 'destacada');
  nuevos: GetProductDto[] = this.products.filter((product: GetProductDto) => product.category === 'nueva');
  ofertas: GetProductDto[] = this.products.filter((product: GetProductDto) => product.category === 'oferta');
  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => 
      {this.products = products
        this.destacados = this.products.filter((product: GetProductDto) => product.category === 'destacada');
        this.nuevos = this.products.filter((product: GetProductDto) => product.category === 'nueva');
        this.ofertas = this.products.filter((product: GetProductDto) => product.category === 'oferta');
      });

  }
  changeCategory(category: string) {
    this.category.set(category);
  }
}
