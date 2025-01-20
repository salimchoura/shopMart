import { Component, Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: false,
  
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input()
  inStock = 0;

  @Input()
  outOfStock = 0;

  @Input()
  total = 0;

  selectedFilter = "All"
  
  @Output()
  filterChange = new EventEmitter<string>();


  informParent()
  {
    this.filterChange.emit(this.selectedFilter)
  }
}
