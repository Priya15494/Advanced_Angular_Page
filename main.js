(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\r\n    background-color: #FF0000;\r\n    display:block;\r\n    padding: 0.5%;\r\n    text-align: center;\r\n    color: white;\r\n    margin-top:1%;\r\n    \r\n}\r\n.myimage img{\r\n    margin-top: 12%;\r\n    margin-left: 5%;\r\n    width: 23vw;\r\n    height: 26vh;\r\n}\r\np{\r\n    margin-left:40%;\r\n    color: #FF0000;\r\n}\r\n.container{\r\n    width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<div class=\"container\">\n    <div class=\"row header\">\n        <div class=\"col-12 col-md-12 col-sm-12 col-xs-12\">\n          <h2>OUR WORLD - VIEW</h2>\n        </div>\n    </div>\n    <div class=\"col-12 col-md-12 col-sm-12 col-xs-12\">\n            <a [routerLink]=\"['/home']\">Click here to view all Regions</a>    \n    </div>\n  </div>\n  <br/>\n  <router-outlet></router-outlet>\n\n \n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _viewdata_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./viewdata.service */ "./src/app/viewdata.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _countryview_countryview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./countryview/countryview.component */ "./src/app/countryview/countryview.component.ts");
/* harmony import */ var _currencyview_currencyview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./currencyview/currencyview.component */ "./src/app/currencyview/currencyview.component.ts");
/* harmony import */ var _languageview_languageview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./languageview/languageview.component */ "./src/app/languageview/languageview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _view_view_component__WEBPACK_IMPORTED_MODULE_3__["ViewComponent"],
                _countryview_countryview_component__WEBPACK_IMPORTED_MODULE_8__["CountryviewComponent"],
                _currencyview_currencyview_component__WEBPACK_IMPORTED_MODULE_9__["CurrencyviewComponent"],
                _languageview_languageview_component__WEBPACK_IMPORTED_MODULE_10__["LanguageviewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
                    { path: 'view', component: _view_view_component__WEBPACK_IMPORTED_MODULE_3__["ViewComponent"] },
                    { path: 'countryview/:countryname', component: _countryview_countryview_component__WEBPACK_IMPORTED_MODULE_8__["CountryviewComponent"] },
                    { path: 'currencyview/:currencycode', component: _currencyview_currencyview_component__WEBPACK_IMPORTED_MODULE_9__["CurrencyviewComponent"] },
                    { path: 'languageview/:languagecode', component: _languageview_languageview_component__WEBPACK_IMPORTED_MODULE_10__["LanguageviewComponent"] }
                ])
            ],
            providers: [_viewdata_service__WEBPACK_IMPORTED_MODULE_5__["ViewdataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/countryview/countryview.component.css":
/*!*******************************************************!*\
  !*** ./src/app/countryview/countryview.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    width:100%;\r\n}\r\n.coverHeight {\r\n    max-height: 300px;\r\n    width: 640px;\r\n    overflow: hidden;\r\n    background-position: center;\r\n    background-repeat: no-repeat; \r\n}\r\n.profileHeight {\r\n    border: 0.5vw solid blue;\r\n    border-radius: 5px;\r\n    box-shadow: 1px 1px 1px 1px silver;\r\n}\r\n.myimage img{\r\n    margin-top: 3%;\r\n    margin-left: 5%;\r\n    width: 25vw;\r\n    height: 15vh;\r\n}"

/***/ }),

/***/ "./src/app/countryview/countryview.component.html":
/*!********************************************************!*\
  !*** ./src/app/countryview/countryview.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n     <div class=\"row\" *ngIf='countrydetails'>\n                 <div id=\"cover\" class=\"col-12 col-sm-12 col-md-12 coverHeight\">\n                    <img src=\"{{countrydetails[0].flag}}\" class=\"img-fluid profileHeight\"/>\n                 </div>\n\n                 <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12\">\n                    <p><strong style=\"font-size:150%;color: orangered\"><i>{{countrydetails[0].name | uppercase}}-</i></strong>\n                     A Country of {{countrydetails[0].subregion}} in {{countrydetails[0].region}} region.\n                     People from this country are called as <strong>{{countrydetails[0].demonym}}'s.</strong>\n                    </p>\n                  </div>\n\n                 <div class=\"col-12 col-md-6 col-lg-6 col-sm-6\">\n                    <p><strong style=\"color: darkgreen;text-align:center ;font-size:1.5em;\">Basic Information-</strong></p>\n                    <p><strong style=\"color:darkslategray\"><i>Capital-</i></strong>{{countrydetails[0].capital}}</p>\n                    <p><strong style=\"color:darkslategray\"><i>Population-</i></strong>{{countrydetails[0].population}}</p>\n                    <p><strong style=\"color:darkslategray\"><i>Nativename-</i></strong>{{countrydetails[0].nativeName}}</p>\n                    <p *ngIf=\"countrydetails[0].languages.length!=undefined && countrydetails[0].languages.length>0\">\n                        <strong style=\"color:darkslategray\"><i>Languages:</i></strong> \n                        <span *ngFor=\"let language of countrydetails[0].languages;let first=first;let last=last\">\n                        <a [routerLink]=\"['/languageview',language.iso639_1]\">{{language.name}}</a>--{{language.nativeName}}(Script){{last ? '' : ','}}</span>\n                    </p>\n                    <p *ngIf=\"countrydetails[0].altSpellings.length!=undefined && countrydetails[0].altSpellings.length>0\">\n                            <strong style=\"color:darkslategray\"><i>Alias names:</i></strong> \n                            <span *ngFor=\"let alias of countrydetails[0].altSpellings;let first=first;let last=last\">\n                                {{alias}}{{last ? '' : ','}}</span>\n                    </p>\n\n                 </div>\n\n                 <div class=\"col-12 col-md-6 col-lg-6 col-sm-6 \">\n                    <p><strong style=\"color: darkgreen;text-align: center;font-size:1.5em;\">Geographical Information-</strong></p>\n                    <p *ngIf=\"countrydetails[0].latlng.length!=undefined && countrydetails[0].latlng.length>0\">\n                        <strong style=\"color:darkslategray\"><i>Latitude&Longitude:</i></strong>\n                        {{countrydetails[0].latlng[0]}} Lat,{{countrydetails[0].latlng[1]}} Long\n                    </p>\n                    <p><strong style=\"color:darkslategray\"><i>Area :</i></strong>{{countrydetails[0].area}} KMS</p>\n                    <p><strong style=\"color:darkslategray\"><i>gini :</i></strong>{{countrydetails[0].gini}}</p>\n                    <p *ngIf=\"countrydetails[0].borders.length!=undefined && countrydetails[0].borders.length>0\">\n                        <strong style=\"color:darkslategray\"><i>Borders of this country -</i> </strong> <span *ngFor=\"let border of countrydetails[0].borders;let first=first;let last=last\">{{border}}{{last ? '' : ','}}</span>\n                    </p>\n                 </div>\n                   \n                  <div class=\"myimage col-12 col-md-6 col-sm-6 \">\n                        <p style=\"color: orangered; font-size: 1.25em\"><strong>Time Zones-</strong></p>\n                        <img src=\"assets/clock.jpg\">          \n                  </div>\n\n                 <div class=\"col-md-6 col-sm-6 col-12\">\n                   <br>\n                    <p *ngIf=\"countrydetails[0].timezones.length!=undefined && countrydetails[0].timezones.length>0\">\n                        <strong style=\"color:darkslategray\">time ZONE's- </strong> <span *ngFor=\"let time of countrydetails[0].timezones;let first=first;let last=last\">{{time}}{{last ? '' : ','}}</span>\n                    </p>\n                    <p><strong style=\"color:darkslategray\">Callingcode :</strong>{{countrydetails[0].callingCodes[0]}} </p>\n                    <p><strong style=\"color:darkslategray\">NumericCode :</strong>{{countrydetails[0].numericCode}} </p>\n                </div>\n                <br>\n                <div class=\"col-12\">\n                    <p><strong style=\"color: darkgreen;text-align:center ;font-size:1.25em;\">Regional Blocs-</strong></p>\n                    <p *ngIf=\"countrydetails[0].regionalBlocs.length!=undefined && countrydetails[0].regionalBlocs.length>0\">\n                     <span *ngFor=\"let bloc of countrydetails[0].regionalBlocs;let first=first;let last=last\">\n                         Acronym- {{bloc.acronym}},&nbsp;Name- {{bloc.name}},&nbsp;\n                         OtherNames-\n                         <span *ngFor=\"let names of bloc.otherNames;let first=first;let last=last\">\n                             {{names}}{{last ? '' : ','}}</span>\n                      {{last ? '' : ','}}</span>\n                    </p>\n                </div>\n\n                <div class=\"col-12\">\n                   <p>\n                    <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseExample\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n                        See Translations\n                    </button>\n                  </p>\n                  <div class=\"collapse\" id=\"collapseExample\">\n                        <div class=\"card card-body\">\n                           <p><strong style=\"color:brown\">de:</strong>{{countrydetails[0].translations.de}}</p>\n                           <p><strong style=\"color:brown\">es:</strong>{{countrydetails[0].translations.es}}</p>\n                           <p><strong style=\"color:brown\">fr:</strong>{{countrydetails[0].translations.fr}}</p>\n                           <p><strong style=\"color:brown\">ja:</strong>{{countrydetails[0].translations.ja}}</p>\n                           <p><strong style=\"color:brown\">it:</strong>{{countrydetails[0].translations.it}}</p>\n                           <p><strong style=\"color:brown\">pt:</strong>{{countrydetails[0].translations.pt}}</p>\n                           <p><strong style=\"color:brown\">hr:</strong>{{countrydetails[0].translations.hr}}</p>\n                           <p><strong style=\"color:brown\">fa:</strong>{{countrydetails[0].translations.fa}}</p>\n                        </div>\n                 </div>\n\n\n                </div>\n\n           \n\n                 \n\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/countryview/countryview.component.ts":
/*!******************************************************!*\
  !*** ./src/app/countryview/countryview.component.ts ***!
  \******************************************************/
/*! exports provided: CountryviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryviewComponent", function() { return CountryviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _viewdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../viewdata.service */ "./src/app/viewdata.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//importing route related code


var CountryviewComponent = /** @class */ (function () {
    function CountryviewComponent(_route, router, viewdataService) {
        this._route = _route;
        this.router = router;
        this.viewdataService = viewdataService;
        console.log("Countryview Constructor is called");
    }
    CountryviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Countryview ngOnInit called");
        this.countryName = this._route.snapshot.paramMap.get('countryname');
        this.viewdataService.getSingleCountryInformation(this.countryName).subscribe(function (data) {
            _this.countrydetails = data;
            console.log(_this.countrydetails);
        }, function (error) {
            console.log(error.errorMessage);
        });
    };
    CountryviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-countryview',
            template: __webpack_require__(/*! ./countryview.component.html */ "./src/app/countryview/countryview.component.html"),
            styles: [__webpack_require__(/*! ./countryview.component.css */ "./src/app/countryview/countryview.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _viewdata_service__WEBPACK_IMPORTED_MODULE_2__["ViewdataService"]])
    ], CountryviewComponent);
    return CountryviewComponent;
}());



/***/ }),

/***/ "./src/app/currencyview/currencyview.component.css":
/*!*********************************************************!*\
  !*** ./src/app/currencyview/currencyview.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3{\r\n    font-size: 1.2em;\r\n    color: red;\r\n    margin-left: 20%;\r\n}\r\n.card{\r\n\r\n    margin-left: 4%;  \r\n   \r\n    height: 100%;\r\n}\r\n.card-img-top {\r\n    \r\n    height: 10vw;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}"

/***/ }),

/***/ "./src/app/currencyview/currencyview.component.html":
/*!**********************************************************!*\
  !*** ./src/app/currencyview/currencyview.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"row\" *ngIf='curr_country_details'>\n    <div class=\"col-12 col-md-12 col-sm-12\">\n      <h3>Countries with <strong><i>{{currencycode}}</i></strong> as Currency</h3>\n    </div>\n    <div *ngFor=\"let country of curr_country_details\"  class=\"col-md-4 col-sm-4 col-12\">\n      <div class=\"card border-danger\">\n        <img class=\"card-img-top\" src=\"{{country.flag}}\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{country.name}}</h5>\n          <p *ngIf=\"country.currencies.length>0\" class=\"card-text\">\n            <strong>Currency-</strong> \n              <span *ngFor=\"let currency of country.currencies;let first=first;let last=last\">\n                <a *ngIf=\"currency.code!=null\" [routerLink]=\"['/currencyview',currency.code]\">{{currency.name}}</a>\n                   {{last ? '' : ','}}\n               </span>\n          </p>\n          <a [routerLink]=\"['/countryview',country.name]\"  class=\"btn btn-primary\">View Details</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/currencyview/currencyview.component.ts":
/*!********************************************************!*\
  !*** ./src/app/currencyview/currencyview.component.ts ***!
  \********************************************************/
/*! exports provided: CurrencyviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyviewComponent", function() { return CurrencyviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _viewdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../viewdata.service */ "./src/app/viewdata.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//importing route related code


var CurrencyviewComponent = /** @class */ (function () {
    function CurrencyviewComponent(_route, router, viewdataService) {
        this._route = _route;
        this.router = router;
        this.viewdataService = viewdataService;
        console.log("Countryview Constructor is called");
    }
    CurrencyviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("CurrencyView ngOnInit called");
        this.currencycode = this._route.snapshot.paramMap.get('currencycode');
        this.viewdataService.getCountriesOnCurrency(this.currencycode).subscribe(function (data) {
            _this.curr_country_details = data;
            console.log(_this.curr_country_details + "Currency countryDetails");
        }, function (error) {
            console.log(error.errorMessage);
        });
    };
    CurrencyviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-currencyview',
            template: __webpack_require__(/*! ./currencyview.component.html */ "./src/app/currencyview/currencyview.component.html"),
            styles: [__webpack_require__(/*! ./currencyview.component.css */ "./src/app/currencyview/currencyview.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _viewdata_service__WEBPACK_IMPORTED_MODULE_2__["ViewdataService"]])
    ], CurrencyviewComponent);
    return CurrencyviewComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.myimage img{\r\n    margin-top: 12%;\r\n    margin-left: 5%;\r\n    width: 23vw;\r\n    height: 26vh;\r\n}\r\np{\r\n    margin-left: 10%;\r\n    color: #FF0000;\r\n}\r\n.container{\r\n    width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row\"> \n      <div class=\"myimage col-md-4 col-sm-6 col-6\">\n          <img src=\"assets/ASIA.jpg\">     \n          <p><a [routerLink]=\"['/view']\" [queryParams]=\"{ region: 'Asia'}\"><strong>ASIA</strong></a></p>\n      </div>\n      <div class=\"myimage col-md-4 col-sm-6 col-6\"> \n        <img src=\"assets/regions.jpg\">\n      </div>\n      <div class=\"myimage col-md-4 col-sm-6 col-6\">\n          <img src=\"assets/Africa.jpg\">\n          <p><a [routerLink]=\"['/view']\" [queryParams]=\"{ region: 'Africa'}\"><strong>AFRICA</strong></a></p>\n      </div>\n      <div class=\"myimage col-md-4 col-sm-6 col-6\">\n          <img src=\"assets/AUSTRALIA.jpg\">\n        <p><a [routerLink]=\"['/view']\" [queryParams]=\"{ region: 'Oceania'}\"><strong>OCEANIA</strong></a></p>\n      </div>\n      <div class=\"myimage  col-md-4 col-sm-6 col-6\">\n        <img src=\"assets/America.jpg\">\n        <p><a [routerLink]=\"['/view']\" [queryParams]=\"{ region: 'Americas'}\"><strong>AMERICA'S</strong></a></p>       \n     </div>\n     <div class=\"myimage col-md-4 col-sm-6 col-6\">\n        <img src=\"assets/Europe.png\">\n        <p><a [routerLink]=\"['/view']\" [queryParams]=\"{ region: 'Europe'}\"><strong>Europe</strong></a></p>\n     </div>\n\n    </div>\n  </div>\n  <br/>\n  <router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//importing route related code

var HomeComponent = /** @class */ (function () {
    function HomeComponent(_route, router) {
        this._route = _route;
        this.router = router;
        console.log("Home Constructor is called");
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/languageview/languageview.component.css":
/*!*********************************************************!*\
  !*** ./src/app/languageview/languageview.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3{\r\n   font-size: 1.2em;\r\n    color: red;\r\n    margin-left: 20%;\r\n}\r\n.card{\r\n\r\n    margin-left: 4%;  \r\n   \r\n    height: 100%;\r\n}\r\n.card-img-top {\r\n  \r\n    height: 10vw;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n.container{\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/languageview/languageview.component.html":
/*!**********************************************************!*\
  !*** ./src/app/languageview/languageview.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"row\" *ngIf='lang_country_details'>\n    <div class=\"col-12 col-md-12 col-sm-12\">\n      <h3>List of Countries with languagecode-<strong>{{languagecode}}</strong></h3>\n    </div>\n  \n    <div *ngFor=\"let country of lang_country_details\"  class=\"col-md-4 col-sm-4 col-12\">\n      <div class=\"card border-danger\">\n        <img class=\"card-img-top\" src=\"{{country.flag}}\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{country.name}}</h5>\n          <p *ngIf=\"country.currencies.length>0\" class=\"card-text\">\n            <strong>Currency-</strong> \n              <span *ngFor=\"let currency of country.currencies;let first=first;let last=last\">\n                <a *ngIf=\"currency.code!=null\" [routerLink]=\"['/currencyview',currency.code]\">{{currency.name}}</a>\n                   {{last ? '' : ','}}\n               </span>\n          </p>\n          <a [routerLink]=\"['/countryview',country.name]\"  class=\"btn btn-primary\">View Details</a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/languageview/languageview.component.ts":
/*!********************************************************!*\
  !*** ./src/app/languageview/languageview.component.ts ***!
  \********************************************************/
/*! exports provided: LanguageviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageviewComponent", function() { return LanguageviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _viewdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../viewdata.service */ "./src/app/viewdata.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//importing route related code


var LanguageviewComponent = /** @class */ (function () {
    function LanguageviewComponent(_route, router, viewdataService) {
        this._route = _route;
        this.router = router;
        this.viewdataService = viewdataService;
        console.log("Language Constructor is called");
    }
    LanguageviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Languageview ngOnInit called");
        this.languagecode = this._route.snapshot.paramMap.get('languagecode');
        console.log("Languagecode" + this.languagecode);
        this.viewdataService.getCountriesOnLanguage(this.languagecode).subscribe(function (data) {
            _this.lang_country_details = data;
            console.log(_this.lang_country_details + "Language countryDetails");
        }, function (error) {
            console.log(error.errorMessage);
        });
    };
    LanguageviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-languageview',
            template: __webpack_require__(/*! ./languageview.component.html */ "./src/app/languageview/languageview.component.html"),
            styles: [__webpack_require__(/*! ./languageview.component.css */ "./src/app/languageview/languageview.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _viewdata_service__WEBPACK_IMPORTED_MODULE_2__["ViewdataService"]])
    ], LanguageviewComponent);
    return LanguageviewComponent;
}());



/***/ }),

/***/ "./src/app/view/view.component.css":
/*!*****************************************!*\
  !*** ./src/app/view/view.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3{\r\n    margin-left: 2%;\r\n    color: red;\r\n    margin-left: 30%;\r\n}\r\n.card{\r\n   \r\n    height: 93%;\r\n    margin-left: 4%;  \r\n    margin-top: 2%;\r\n}\r\n.card-img-top {\r\n    \r\n    height: 10vw;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n.container{\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/view/view.component.html":
/*!******************************************!*\
  !*** ./src/app/view/view.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"row\" *ngIf='countriesofRegion'>\n  <div class=\"col-12 col-md-12 col-sm-12\">\n    <h3>{{region}}-List of Countries</h3>\n  </div>\n\n  <div *ngFor=\"let country of countriesofRegion\"  class=\"col-md-4 col-sm-4 col-12\">\n    <div  class=\"card border-danger\">\n      <img class=\"card-img-top\" src=\"{{country.flag}}\" alt=\"Card image cap\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{country.name}}</h5>\n        <p *ngIf=\"country.currencies.length>0\" class=\"card-text\">\n          <strong>Currency-</strong> \n            <span *ngFor=\"let currency of country.currencies;let first=first;let last=last\">\n              <a *ngIf=\"currency.code!=null\" [routerLink]=\"['/currencyview',currency.code]\">{{currency.name}}</a>\n                 {{last ? '' : ','}}\n             </span>\n        </p>\n         <a  [routerLink]=\"['/countryview',country.name]\"  class=\"btn btn-primary\">View Details</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n</div>"

/***/ }),

/***/ "./src/app/view/view.component.ts":
/*!****************************************!*\
  !*** ./src/app/view/view.component.ts ***!
  \****************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _viewdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../viewdata.service */ "./src/app/viewdata.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//importing route related code


var ViewComponent = /** @class */ (function () {
    function ViewComponent(_route, router, viewdataService) {
        this._route = _route;
        this.router = router;
        this.viewdataService = viewdataService;
        console.log("View Constructor is called");
    }
    ViewComponent.prototype.ngOnDestroy = function () {
        console.log("OnDestroy implemented in View");
    };
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("view ngOnInit called");
        this._route.queryParams.subscribe(function (params) {
            console.log(params); // {region: "country"}
            _this.region = params.region;
            console.log(_this.region); // country
        });
        this.viewdataService.getSingleRegionInformation(this.region).subscribe(function (data) {
            _this.countriesofRegion = data;
            console.log(_this.countriesofRegion);
        }, function (error) {
            console.log(error.errorMessage);
        });
    };
    ViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.css */ "./src/app/view/view.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _viewdata_service__WEBPACK_IMPORTED_MODULE_2__["ViewdataService"]])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "./src/app/viewdata.service.ts":
/*!*************************************!*\
  !*** ./src/app/viewdata.service.ts ***!
  \*************************************/
/*! exports provided: ViewdataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewdataService", function() { return ViewdataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewdataService = /** @class */ (function () {
    function ViewdataService(_http) {
        this._http = _http;
        this.regionData = "https://restcountries.eu/rest/v2/region/";
        this.countryData = "https://restcountries.eu/rest/v2/name/";
        this.currencyData = "https://restcountries.eu/rest/v2/currency/";
        this.languageData = "https://restcountries.eu/rest/v2/lang/";
        console.log("service constructor is called");
    }
    //ExceptionHandler
    ViewdataService.prototype.handleError = function (err) {
        console.log("Handle error Http calls");
        console.log(err.message);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err.message);
    };
    //method to get details of region
    ViewdataService.prototype.getSingleRegionInformation = function (region) {
        var fetchRegion = this.regionData + region;
        console.log(fetchRegion + "FETCH");
        var details = this._http.get(fetchRegion);
        console.log(details + "Details");
        return details;
    };
    ViewdataService.prototype.getSingleCountryInformation = function (countryName) {
        var fetchCountryDetail = this.countryData + countryName + "?fullText=true";
        var countryDetails = this._http.get(fetchCountryDetail);
        console.log(countryDetails);
        return countryDetails;
    };
    ViewdataService.prototype.getCountriesOnCurrency = function (currencycode) {
        var fetchCountryOnCur = this.currencyData + currencycode;
        console.log("FetchCountry on Currency" + fetchCountryOnCur);
        var currencyCountryDetails = this._http.get(fetchCountryOnCur);
        console.log(currencyCountryDetails);
        return currencyCountryDetails;
    };
    ViewdataService.prototype.getCountriesOnLanguage = function (languagecode) {
        var fetchCountryOnLang = this.languageData + languagecode;
        console.log("FetchCountry on Language" + fetchCountryOnLang);
        var languageCountryDetails = this._http.get(fetchCountryOnLang);
        console.log(languageCountryDetails + "Language");
        return languageCountryDetails;
    };
    ViewdataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ViewdataService);
    return ViewdataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user1\GIT\Advanced_Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map