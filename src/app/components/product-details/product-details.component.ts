import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../types/product';
import { products } from '../../../assets/products';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    // Get the product id from the route
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that corresponds with the id
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }

  // Methods to interact with the cart service
  addToCart(product: Product){
    this.cartService.addToCart(product)
    window.alert("Your product has been added to the cart!")
  }
}