import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-details',
  standalone: false,
  
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  
  @Input()
  selectedProductDetails: Product

  @Output()
  closePanel = new EventEmitter<string>();

  informParent()
  {
    this.closePanel.emit();
  }
}
