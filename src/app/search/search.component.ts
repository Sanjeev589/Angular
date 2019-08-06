import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchItem: string = '';
  searchedData: Customer[];
  customers: Customer[];
  constructor(private service: CustomerService) { }

  ngOnInit() {
    this.service.getAllCustomers().subscribe((data: Customer[]) => {
    this.customers = data;
      console.log("all" + this.customers)
    });
  }
  search(value: string) {
    this.searchedData = this.customers.filter(
      Customer => Customer.name.toLowerCase().indexOf(value.toLowerCase()) !== -1);
    this.service.setSearchedData(this.searchedData);
  }
}
