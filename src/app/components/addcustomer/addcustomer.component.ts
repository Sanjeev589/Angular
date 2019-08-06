import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {
customerData:Customer={"id":0,"name":'',"email":'',"phone":0};
  constructor(private customerService:CustomerService, private router:Router) { }

  ngOnInit() {
  }

  add(){
    console.log(this.customerData.name)
    this.customerService.addCustomer(this.customerData).subscribe((date)=>{this.router.navigate(['listcustomer'])});
  }
}
