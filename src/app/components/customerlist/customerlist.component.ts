import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
  sortByName:Customer[];
  customers:Customer[];
  customerArray:Customer[];
  name:string="Mam ShanmugPriya";
  dob=new Date(1982,10,28);
  salary=98654.0077;
  constructor(private customerService:CustomerService) { }

  ngOnInit() {
    this.customerService.getAllCustomers().subscribe((data:Customer[])=>{this.customers=data;
   console.log("all" + this.customers)});
   this.customerService.getAllCustomers().subscribe((data:Customer[])=>{this.customerArray=data;
    console.log("all" + this.customers)});
  
   
  }
  deleteCustomer(customer:Customer){
    this.customerService.deleteCustomer(customer).subscribe((data)=>{this.customers=this.customers.filter(c=>c!==customer)});
  }
  filterByName(customerArray:Customer[]) {
    
    console.log(this.sortByName);
    return customerArray.sort((a, b) => a['name'] > b['name'] ? 1 : a['name'] === b['name'] ? 0 : -1);
    
  }
  filterById(customerArray:Customer[]) {
    return customerArray.sort((a, b) => a['id'] > b['id'] ? 1 : a['id'] === b['id'] ? 0 : -1);
    
  }
  filterByEmail() {
    return this.customerArray.sort((a, b) => a['email'] > b['email'] ? 1 : a['email'] === b['email'] ? 0 : -1);
  } 
}
