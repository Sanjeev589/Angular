"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var CustomerlistComponent = /** @class */ (function () {
    function CustomerlistComponent(customerService) {
        this.customerService = customerService;
        this.name = "Mam ShanmugPriya";
        this.dob = new Date(1982, 10, 28);
        this.salary = 98654.0077;
    }
    CustomerlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customerService.getAllCustomers().subscribe(function (data) {
            _this.customers = data;
            console.log("all" + _this.customers);
        });
        this.sortByName = this.customers.sort(function (a, b) { return a[name] > b[name] ? 1 : a[name] === b[name] ? 0 : -1; });
        console.log("assasa");
    };
    CustomerlistComponent.prototype.deleteCustomer = function (customer) {
        var _this = this;
        this.customerService.deleteCustomer(customer).subscribe(function (data) { _this.customers = _this.customers.filter(function (c) { return c !== customer; }); });
    };
    CustomerlistComponent.prototype.filterBy = function (customerArray) {
        this.sortByName = customerArray.sort(function (a, b) { return a[name] > b[name] ? 1 : a[name] === b[name] ? 0 : -1; });
        return this.sortByName;
    };
    CustomerlistComponent = __decorate([
        core_1.Component({
            selector: 'app-customerlist',
            templateUrl: './customerlist.component.html',
            styleUrls: ['./customerlist.component.css']
        })
    ], CustomerlistComponent);
    return CustomerlistComponent;
}());
exports.CustomerlistComponent = CustomerlistComponent;
