import { Component, Input } from '@angular/core';
import { Product } from '../../types/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product!: Product;

  get productImgAlt(): string {
    return `Image for ${this.product.name}`
  }

  share() {
    window.alert("The product has been shared!")
  }

  onNotify() {
    window.alert("You will be notified when the product goes on sale")
  }
}
