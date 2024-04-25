import { Component, Input } from '@angular/core';
import { GetProductDto } from '../../../../dtos/get-product.dto';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-card-information',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './card-information.component.html',
  styleUrl: './card-information.component.css'
})
export class CardInformationComponent {
  @Input({ required: true }) product: GetProductDto = {} as GetProductDto
  
}
