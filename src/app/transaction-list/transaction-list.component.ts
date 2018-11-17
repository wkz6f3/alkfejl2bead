import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';

@Component({
  selector: 'transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  transactions: Transaction[] = [
    {
      id: 1,
      title: 'Lidl bevásárlás',
      created_at: '2018-11-11',
      user :'én',
      message: 'Valami leírás',
      type: ['bevasarlas', 'elemiszer'],
      updated_at: '2018-11-11',
      amount: '-1000'
    },
    {
      id: 2,
      title: 'Auchan',
      created_at: '2018-11-11',
      user :'apa',
      message: 'Valami leírás',
      type: ['bevasarlas', 'elemiszer'],
      updated_at: '2018-11-11',
      amount: '1000'

    },{
      id: 3,
      title: 'hentes',
      created_at: '2018-11-11',
      user :'pityu',
      message: 'Valami leírás',
      type: ['elelmiszer'],
      updated_at: '2018-11-11',
      amount: '-1000'

    },{
      id: 4,
      title: 'fogorvos',
      created_at: '2018-11-11',
      user :'én',
      message: 'Valami leírás',
      type: ['egeszseg'],
      updated_at: '2018-11-11',
      amount: '-1000'

    },
  ]
  filteredTransactions = [];
  selectedType = '';
  selectedTransaction = null;

  constructor() { }

  ngOnInit() {
    this.filterTransactions();
  }

  filterTransactions() {
    this.filteredTransactions = this.selectedType === ''
      ? this.transactions
      : this.transactions.filter(transaction => transaction.type[0] === this.selectedType);
  }

  onFilterChange(data) {
    this.selectedType = data;
    this.filterTransactions();
  }

}
