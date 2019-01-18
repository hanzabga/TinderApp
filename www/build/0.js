webpackJsonp([0],{

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeePageModule", function() { return EmployeePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employee__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EmployeePageModule = /** @class */ (function () {
    function EmployeePageModule() {
    }
    EmployeePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__employee__["a" /* EmployeePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__employee__["a" /* EmployeePage */]),
            ],
        })
    ], EmployeePageModule);
    return EmployeePageModule;
}());

//# sourceMappingURL=employee.module.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_employee_employee__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_image_image__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployeePage = /** @class */ (function () {
    function EmployeePage(navCtrl, navParams, employeeProvider, viewCtrl, imgProv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.employeeProvider = employeeProvider;
        this.viewCtrl = viewCtrl;
        this.imgProv = imgProv;
        this.employee = {};
        this.canDelete = false;
        this.canUpdate = false;
        this.matches = [];
    }
    EmployeePage.prototype.ionViewDidEnter = function () {
        var employee = this.navParams.get("employee");
        if (employee) {
            this.employee = employee.doc;
            this.canDelete = true;
            this.canUpdate = true;
        }
    };
    EmployeePage.prototype.addOrUpdate = function () {
        if (this.canUpdate) {
            if (this.employee.matches) {
                this.employeeProvider.update(this.employee).catch(function () { });
            }
            else {
                // this.employeeProvider.create(
                //  JSON.parse(this.employee + JSON.stringify(this.matches))
                // );
                this.employeeProvider
                    .update(this.employee + JSON.stringify(this.matches))
                    .catch(function () { });
            }
        }
        else {
            this.employeeProvider.create(this.employee);
        }
        this.viewCtrl.dismiss(this.employee);
    };
    EmployeePage.prototype.delete = function () {
        this.employeeProvider.delete(this.employee).catch(function () { });
        this.viewCtrl.dismiss(this.employee);
    };
    EmployeePage.prototype.takePhotograph = function () {
        var _this = this;
        this.imgProv
            .takePhotograph()
            .then(function (image) {
            _this.employee._attachments = {
                "pic.jpg": {
                    content_type: "image/jpeg",
                    data: image.toString()
                }
            };
            console.log(_this.employee);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    EmployeePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-employee",template:/*ion-inline-start:"/Users/latifi/Desktop/TinderApp/src/pages/employee/employee.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Profile Details</ion-title>\n    <ion-buttons end *ngIf="canDelete">\n      <button ion-button (click)="delete()">\n        <ion-icon name="trash"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label>First Name</ion-label>\n      <ion-input\n        text-right\n        type="text"\n        [(ngModel)]="employee.firstName"\n      ></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Last Name</ion-label>\n      <ion-input\n        text-right\n        type="text"\n        [(ngModel)]="employee.lastName"\n      ></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Age</ion-label>\n      <ion-input text-right type="text" [(ngModel)]="employee.age"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Gender</ion-label>\n      <ion-select text-right type="text" [(ngModel)]="employee.sex">\n        <ion-option value="m">Male</ion-option>\n        <ion-option value="f">Female</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>bio</ion-label>\n      <ion-textarea\n        rows="4"\n        text-right\n        type="text"\n        [(ngModel)]="employee.bio"\n      ></ion-textarea>\n    </ion-item>\n  </ion-list>\n  <button ion-button block (click)="addOrUpdate()">Add/Update Employee</button>\n  <button ion-button block (click)="takePhotograph()">Take Photograph</button>\n</ion-content>\n'/*ion-inline-end:"/Users/latifi/Desktop/TinderApp/src/pages/employee/employee.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_employee_employee__["a" /* EmployeeProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_image_image__["a" /* ImageProvider */]])
    ], EmployeePage);
    return EmployeePage;
}());

//# sourceMappingURL=employee.js.map

/***/ })

});
//# sourceMappingURL=0.js.map