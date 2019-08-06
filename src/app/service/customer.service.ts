import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//Always take this one not selenium one 
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url:string="http://localhost:3000/customers";//used to access json data
  filtereddata:Customer[];

  constructor(private http:HttpClient) { }

  addCustomer(customer:Customer){
    return this.http.post(this.url,customer);
  }

  getAllCustomers(){
    return this.http.get<Customer[]>(this.url);
  }

  getCustomer(id:number){
    return this.http.get<Customer>(this.url + "/" + id);
  }

  deleteCustomer(customer:Customer){
    return this.http.delete<Customer[]>(this.url + "/" + customer.id);
  }

  updateCustomer(customer:Customer){
    return this.http.put(this.url + "/" + customer.id,customer);
  }

  isLoggedIn(){
    var data=sessionStorage.getItem("loginstatus")
    if(data==="success"){
      return true;
    }else{
      return false;
    }
  }

  setSearchedData(searchedData:Customer[]){
    console.log(searchedData);
    this.filtereddata=searchedData;
  }

  getSearchedData(){
    return this.filtereddata;
  }
}
