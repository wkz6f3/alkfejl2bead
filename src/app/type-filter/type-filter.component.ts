import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'type-filter',
  templateUrl: './type-filter.component.html',
  styleUrls: ['./type-filter.component.css']
})
export class TypeFilterComponent implements OnInit {

  @Input('type') selectedType = ''
  @Output() change = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onFilterChange(data) {
    this.selectedType = data.value;
    this.change.emit(this.selectedType);
  }

}
