webpackJsonp([5],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_employee_employee__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(216);
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





var HomePage = /** @class */ (function () {
    function HomePage(navParams, navCtrl, modalCtrl, empProv, storage) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.empProv = empProv;
        this.storage = storage;
        this.count = 0;
    }
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.empProv.createPouchDB();
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
    HomePage.prototype.ionViewWillEnter = function () { };
    HomePage.prototype.showDetails = function (employee) {
        var _this = this;
        var modal = this.modalCtrl.create("EmployeePage", { employee: employee });
        modal.onDidDismiss(function (data) {
            _this.reReadEmployees();
        });
        modal.present();
    };
    HomePage.prototype.addEmployee = function () {
        var _this = this;
        var modal = this.modalCtrl.create("EmployeePage", { employee: null });
        modal.onDidDismiss(function (data) {
            _this.reReadEmployees();
        });
        modal.present();
    };
    HomePage.prototype.readChat = function () {
        this.navCtrl.push("ChatLijstPage", {
            id: this.ingelogdId,
            count: this.count
        });
    };
    HomePage.prototype.reReadEmployees = function () {
        var _this = this;
        this.empProv
            .read()
            .then(function (employees) {
            _this.employees = employees;
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.like = function () {
        this.slides.slideNext();
        if (this.slides._slides.length > this.count) {
            this.storage.set("_id" + this.count, this.slides._slides[this.count].id);
            this.count++;
        }
    };
    HomePage.prototype.dislike = function () {
        if (this.slides._slides.length >= this.count) {
            this.slides.slideNext();
            this.count++;
        }
    };
    HomePage.prototype.logout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        this.storage.clear();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("mainSlides"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-home",template:/*ion-inline-start:"/Users/latifi/Desktop/TinderApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title> Profiles </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="addEmployee()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-slides #mainSlides>\n        <div *ngFor="let emp of employees">\n          <div *ngIf="ingelogdId != emp.doc._id">\n            <ion-slide (click)="showDetails(emp)" id="{{emp.doc._id}}">\n              <div>\n                <div *ngIf="emp.doc._attachments">\n                  <img\n                    style="width:200px;height:200px;"\n                    src="http://localhost:5984/employees/{{\n                      emp.doc._id\n                    }}/pic.jpg"\n                  />\n                </div>\n                <h1>\n                  {{ emp.doc.firstName }} {{ emp.doc.lastName }},\n                  {{ emp.doc.age }} \n                </h1>\n                <br />\n                <p>{{ emp.doc.bio }}</p>\n              </div>\n            </ion-slide>\n          </div>\n        </div>\n      </ion-slides>\n    </ion-item>\n  </ion-list>\n\n  <ion-buttons>\n    <button\n      (click)="like()"\n      float-right\n      ion-button\n      color="secondary"\n      icon-start\n    >\n      <ion-icon name="thumbs-up"> </ion-icon>\n      Like\n    </button>\n    <button\n      (click)="dislike()"\n      float-left\n      side="left"\n      ion-button\n      color="danger"\n      icon-end\n    >\n      Next\n      <ion-icon name="thumbs-down"> </ion-icon>\n    </button>\n  </ion-buttons>\n</ion-content>\n\n<ion-footer>\n  <button ion-button ion-button (click)="logout()" color="secondary">\n    Logout\n  </button>\n\n  <button ion-button (click)="readChat()">\n    <ion-icon name="chatbubbles"></ion-icon>\n  </button>\n</ion-footer>\n'/*ion-inline-end:"/Users/latifi/Desktop/TinderApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_employee_employee__["a" /* EmployeeProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chat-lijst/chat-lijst.module": [
		305,
		1
	],
	"../pages/chat/chat.module": [
		306,
		4
	],
	"../pages/employee/employee.module": [
		307,
		0
	],
	"../pages/home/home.module": [
		308,
		3
	],
	"../pages/login/login.module": [
		309,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
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
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatPage = /** @class */ (function () {
    function ChatPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatPage');
    };
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"/Users/latifi/Desktop/TinderApp/src/pages/chat/chat.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>chat</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n\n    <ion-item>\n        <span item-right><ion-icon  color="primary" name="md-send"></ion-icon></span>\n        <ion-textarea class="message-input" placeholder="Type a message here" rows="1" autocapitalize="off"></ion-textarea>\n    </ion-item>\n\n\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/latifi/Desktop/TinderApp/src/pages/chat/chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImageProvider = /** @class */ (function () {
    function ImageProvider(camera) {
        this.camera = camera;
    }
    ImageProvider.prototype.takePhotograph = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.camera.getPicture({
                destinationType: _this.camera.DestinationType.DATA_URL,
                targetWidth: 320,
                targetHeight: 240
            })
                .then(function (data) {
                resolve(data);
            });
        });
    };
    ImageProvider.prototype.selectPhotograph = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var cameraOptions = {
                sourceType: _this.camera.PictureSourceType.PHOTOLIBRARY,
                destinationType: _this.camera.DestinationType.DATA_URL,
                quality: 100,
                targetWidth: 320,
                targetHeight: 240,
                encodingType: _this.camera.EncodingType.JPEG,
                correctOrientation: true
            };
            _this.camera.getPicture(cameraOptions)
                .then(function (data) {
                resolve(data);
            });
        });
    };
    ImageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */]])
    ], ImageProvider);
    return ImageProvider;
}());

//# sourceMappingURL=image.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_employee_employee__ = __webpack_require__(52);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, empProv, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.empProv = empProv;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.employees = {};
        this.accesLogin = false;
    }
    LoginPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        //  this.navParams.push(this.userId);
        this.empProv.createPouchDB();
        this.empProv.read()
            .then(function (employees) {
            _this.employees = employees;
        }).catch(function (err) { console.log(err); });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: "User doesn't exist",
            subTitle: 'Deze account bestaat nog niet',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.employees.filter(function (emp) {
            if (emp.doc.firstName == _this.firstName) {
                _this.accesLogin = true;
                _this.userId = emp.doc._id;
            }
        });
        if (this.accesLogin) {
            //this.navCtrl.setRoot(HomePage, this.userId);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], {
                id: this.userId
            });
        }
        else {
            this.presentAlert();
        }
    };
    LoginPage.prototype.addEmployee = function () {
        var _this = this;
        var modal = this.modalCtrl.create('EmployeePage', { employee: null });
        modal.onDidDismiss(function (data) {
            _this.reReadEmployees();
        });
        modal.present();
    };
    LoginPage.prototype.reReadEmployees = function () {
        var _this = this;
        this.empProv.read()
            .then(function (employees) {
            _this.employees = employees;
        }).catch(function (err) { console.log(err); });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/latifi/Desktop/TinderApp/src/pages/login/login.html"*/'<ion-content padding center text-center>\n  <ion-title>Tinder</ion-title>\n  <ion-list>\n    <ion-item>\n      <ion-input placeholder="Voornaam" [(ngModel)]=\'firstName\'></ion-input>\n    </ion-item>\n  </ion-list>\n\n\n\n  <button color="secondary" ion-button full (click)="login()">Login</button>\n  <button ion-button full (click)="addEmployee()">Register</button>\n</ion-content>\n'/*ion-inline-end:"/Users/latifi/Desktop/TinderApp/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_employee_employee__["a" /* EmployeeProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(240);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CameraMock */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_employee_employee__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_image_image__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_chat_chat__ = __webpack_require__(214);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













//import { LoginPage } from '../pages/login/login';
//import { LoginPageModule } from '../pages/login/login.module';
var CameraMock = /** @class */ (function (_super) {
    __extends(CameraMock, _super);
    function CameraMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CameraMock.prototype.getPicture = function (options) {
        return new Promise(function (resolve, reject) {
            resolve('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');
        });
    };
    return CameraMock;
}(__WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */]));

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_chat_chat__["a" /* ChatPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/chat-lijst/chat-lijst.module#ChatLijstPageModule', name: 'ChatLijstPage', segment: 'chat-lijst', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/employee/employee.module#EmployeePageModule', name: 'EmployeePage', segment: 'employee', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_12__pages_chat_chat__["a" /* ChatPage */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__["a" /* SQLite */],
                { provide: __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */], useClass: CameraMock },
                __WEBPACK_IMPORTED_MODULE_8__providers_employee_employee__["a" /* EmployeeProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_image_image__["a" /* ImageProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = 'LoginPage';
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.pages = [
            { title: 'HomePage', component: 'HomePage' },
            { title: 'Employees', component: 'EmployeePage' },
            { title: 'ChatLijstPage', component: 'ChatLijstPage' },
            { title: 'LoginPage', component: 'LoginPage' },
            { title: 'ChatPage', component: 'ChatPage' }
        ];
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/latifi/Desktop/TinderApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/latifi/Desktop/TinderApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pouchdb_adapter_cordova_sqlite__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pouchdb_adapter_cordova_sqlite___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_pouchdb_adapter_cordova_sqlite__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pouchdb__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EmployeeProvider = /** @class */ (function () {
    function EmployeeProvider() {
    }
    EmployeeProvider.prototype.createPouchDB = function () {
        __WEBPACK_IMPORTED_MODULE_3_pouchdb__["a" /* default */].plugin(__WEBPACK_IMPORTED_MODULE_0_pouchdb_adapter_cordova_sqlite___default.a);
        this.pdb = new __WEBPACK_IMPORTED_MODULE_3_pouchdb__["a" /* default */]("employees");
        this.remote = "http://localhost:5984/employees";
        var options = {
            live: true,
            retry: true,
            continuous: true
        };
        this.pdb.sync(this.remote, options);
    };
    EmployeeProvider.prototype.create = function (employee) {
        this.pdb.post(employee);
    };
    EmployeeProvider.prototype.update = function (employee) {
        return this.pdb.put(employee);
    };
    EmployeeProvider.prototype.delete = function (employee) {
        return this.pdb.remove(employee);
    };
    EmployeeProvider.prototype.read = function () {
        var pdb = this.pdb;
        function allDocs() {
            var _employees = pdb.allDocs({ include_docs: true }).then(function (docs) {
                return docs.rows;
            });
            return Promise.resolve(_employees);
        }
        return allDocs();
    };
    EmployeeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])()
    ], EmployeeProvider);
    return EmployeeProvider;
}());

//# sourceMappingURL=employee.js.map

/***/ })

},[217]);
//# sourceMappingURL=main.js.map