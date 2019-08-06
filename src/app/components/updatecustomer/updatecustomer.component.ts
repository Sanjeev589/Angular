import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.css']
})
export class UpdatecustomerComponent implements OnInit {
  customerData:Customer={"id":0, "name":'',"email":'',"phone":0}
  constructor(private customerService:CustomerService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params)=>{this.customerService.getCustomer(params['id']).subscribe((result)=>{this.customerData=result;})})
  }

  update(){
    console.log(this.customerData.name);
    this.customerService.updateCustomer(this.customerData).subscribe((data)=>{this.router.navigate(['listcustomer']);})
  }

}
