import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from '../service/customer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addreactive',
  templateUrl: './addreactive.component.html',
  styleUrls: ['./addreactive.component.css']
})
export class AddreactiveComponent implements OnInit {
customer:Customer={"id":0,"name":'',"email":'',"phone":0}
custForm:FormGroup;
status:string="Invalid";
  
  constructor(private formBuilder:FormBuilder,private service:CustomerService,private router:Router) { }

  ngOnInit() {
    this.custForm=this.formBuilder.group({
      id:['',Validators.required,'',Validators.pattern('[0-9]{2,}')],
      name:['',Validators.required,'',Validators.pattern('[A-Za-z]{5,}')],
      email:['',Validators.required,'',Validators.email],
      phone:['',Validators.required,'',Validators.pattern('[0-9]{10}')],

    })
  }
    addreactive(){
      this.customer=this.custForm.value;
      if(this.custForm.invalid){
        this.status="Invalid";
        return;
      }else{
        this.status="Valid";
      this.service.addCustomer(this.customer).subscribe((data)=>{this.router.navigate(['listcustomer']);});
      }
    }
  }


