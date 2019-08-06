import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-showsearcheddata',
  templateUrl: './showsearcheddata.component.html',
  styleUrls: ['./showsearcheddata.component.css']
})
export class ShowsearcheddataComponent implements OnInit {
  searchedData: Customer[];
  constructor(private service: CustomerService) { }

  ngOnInit() {
    this.searchedData = this.service.getSearchedData();
  }

}
