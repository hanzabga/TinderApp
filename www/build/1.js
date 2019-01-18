webpackJsonp([1],{

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatLijstPageModule", function() { return ChatLijstPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_lijst__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatLijstPageModule = /** @class */ (function () {
    function ChatLijstPageModule() {
    }
    ChatLijstPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chat_lijst__["a" /* ChatLijstPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat_lijst__["a" /* ChatLijstPage */]),
            ],
        })
    ], ChatLijstPageModule);
    return ChatLijstPageModule;
}());

//# sourceMappingURL=chat-lijst.module.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatLijstPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_employee_employee__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ChatLijstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatLijstPage = /** @class */ (function () {
    function ChatLijstPage(navCtrl, navParams, empProv, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.empProv = empProv;
        this.storage = storage;
        this.employees = [];
        this.count = this.navParams.get("count");
        this.matches = [];
        this.final = [];
    }
    ChatLijstPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.empProv.createPouchDB();
        for (var i = 0; i < this.count; i++) {
            this.storage.get("_id" + i).then(function (val) {
                _this.matches.push(val);
            });
        }
        this.empProv
            .read()
            .then(function (employees) {
            _this.employees = employees;
        })
            .catch(function (err) {
            console.log(err);
        });
        this.ingelogdId = this.navParams.get("id");
    };
    ChatLijstPage.prototype.ionViewDidEnter = function () {
        console.log("ionViewDidEnter ChatLijstPage");
        this.load();
    };
    ChatLijstPage.prototype.ionViewDidLeave = function () {
        this.empty();
    };
    ChatLijstPage.prototype.load = function () {
        var _this = this;
        this.employees.forEach(function (element) {
            if (_this.matches.filter(function (val) {
                if (val == element.id) {
                    _this.final.push(element);
                }
            })) {
            }
        });
    };
    ChatLijstPage.prototype.empty = function () {
        this.final = [];
    };
    ChatLijstPage.prototype.chatten = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__chat_chat__["a" /* ChatPage */]);
    };
    ChatLijstPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-chat-lijst",template:/*ion-inline-start:"/Users/latifi/Desktop/TinderApp/src/pages/chat-lijst/chat-lijst.html"*/'<ion-header>\n  <ion-navbar> <ion-title>Matches</ion-title> </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <div *ngFor="let emp of final">\n      <ion-item *ngIf="ingelogdId != emp.doc._id" (click)="chatten()">\n        <ion-avatar item-left>\n          <img\n            style="width:80px;height:80px;"\n            src="http://localhost:5984/employees/{{ emp.doc._id }}/pic.jpg"\n          />\n        </ion-avatar>\n        {{ emp.doc.firstName }}\n      </ion-item>\n    </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/latifi/Desktop/TinderApp/src/pages/chat-lijst/chat-lijst.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_employee_employee__["a" /* EmployeeProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], ChatLijstPage);
    return ChatLijstPage;
}());

//# sourceMappingURL=chat-lijst.js.map

/***/ })

});
//# sourceMappingURL=1.js.map