import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent implements OnInit {

  transactionForm = this.fb.group({
    title: [''],
    place: [''],
    description: [''],
    type: [''],
  });

  get place() { return this.transactionForm.get('place'); }

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

}
