import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: false,
  
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText = ""
  confirmedSearchText = ""
  @Output()
  searchChange = new EventEmitter<string>();

  informParent()
  {
    this.confirmedSearchText = this.searchText
    this.searchChange.emit(this.searchText)
  }

  checkForReset()
  {
    if (this.searchText == '')
    {
      this.confirmedSearchText = this.searchText
      this.searchChange.emit(this.searchText)
    }
  }
}
