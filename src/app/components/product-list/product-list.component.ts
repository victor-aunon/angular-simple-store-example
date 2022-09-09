import { Component, OnInit } from '@angular/core';
import { products } from '../../../assets/products';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent {
  products: Product[] = products;
}