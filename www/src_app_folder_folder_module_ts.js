(self["webpackChunktestapp_r_b"] = self["webpackChunktestapp_r_b"] || []).push([["src_app_folder_folder_module_ts"],{

/***/ 2189:
/*!*************************************************!*\
  !*** ./src/app/folder/folder-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FolderPageRoutingModule": () => (/* binding */ FolderPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _folder_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./folder.page */ 9886);




const routes = [
    {
        path: '',
        component: _folder_page__WEBPACK_IMPORTED_MODULE_0__.FolderPage
    }
];
let FolderPageRoutingModule = class FolderPageRoutingModule {
};
FolderPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FolderPageRoutingModule);



/***/ }),

/***/ 5098:
/*!*****************************************!*\
  !*** ./src/app/folder/folder.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FolderPageModule": () => (/* binding */ FolderPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _folder_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./folder-routing.module */ 2189);
/* harmony import */ var _folder_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./folder.page */ 9886);







let FolderPageModule = class FolderPageModule {
};
FolderPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _folder_routing_module__WEBPACK_IMPORTED_MODULE_0__.FolderPageRoutingModule
        ],
        declarations: [_folder_page__WEBPACK_IMPORTED_MODULE_1__.FolderPage]
    })
], FolderPageModule);



/***/ }),

/***/ 9886:
/*!***************************************!*\
  !*** ./src/app/folder/folder.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FolderPage": () => (/* binding */ FolderPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_folder_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./folder.page.html */ 7154);
/* harmony import */ var _folder_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./folder.page.scss */ 7065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 8544);





let FolderPage = class FolderPage {
    constructor(iab) {
        this.iab = iab;
    }
    ngOnInit() {
    }
    open() {
        this.iab.create('https://site.com/', 'defaults', { location: "no" });
    }
};
FolderPage.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser }
];
FolderPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-folder',
        template: _raw_loader_folder_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_folder_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FolderPage);



/***/ }),

/***/ 7065:
/*!*****************************************!*\
  !*** ./src/app/folder/folder.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-navbar {\n  background-color: white;\n  --ion-toolbar-background: rgb(255, 255, 255);\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\nion-navbar ion-button {\n  --background: darkgreen;\n}\nion-navbar a img {\n  margin: 7px 0 7px 10px;\n  width: 60px;\n}\nion-navbar ion-buttons {\n  color: #00a1e0;\n  font-size: 32px;\n  margin-right: 10px;\n}\nion-content {\n  --background: rgb(255, 255, 255);\n  --ion-toolbar-background: rgb(255, 255, 255);\n  --ion-item-background: rgb(255, 255, 255);\n  --ion-text-color: #080808;\n}\nion-content .select-block {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  font-family: SalesforceSansRegular, Helvetica, Arial, sans-serif;\n  font-size: 15px;\n  line-height: 2;\n  color: #032d60;\n  background-color: #fafafa;\n  border: 1px solid gray;\n}\nion-content .select-block .container {\n  margin-left: 10px;\n  margin-right: 10px;\n}\nion-content .select-block .container p {\n  font-family: SalesforceSansRegular, Helvetica, Arial, sans-serif;\n  font-size: 15px;\n  color: black;\n  margin-top: 0;\n  margin-bottom: 0;\n}\nion-content .select-block .container select {\n  background: #ffff;\n  margin-bottom: 10px;\n  width: 100%;\n  max-width: 100%;\n}\nion-content .content {\n  background: #a4d3f1;\n}\nion-content .content .box-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 20px;\n}\nion-content .content .box-content h4,\nion-content .content .box-content h1 {\n  margin-top: 0;\n}\nion-content .content .box-content ul {\n  padding-inline-start: 10px;\n  margin-top: 0;\n  list-style: none;\n}\nion-content .content .box-content ul li {\n  margin-top: 10px;\n}\nion-content .content .box-content ul ion-icon {\n  padding-right: 10px;\n}\nion-content .content .box-content ion-button {\n  --background: #032d60;\n}\n.helpcall {\n  position: fixed;\n  bottom: 12%;\n  right: 3%;\n  width: 70px;\n  height: 70px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 20px;\n  background: #0b5cab;\n  border-radius: 50px;\n}\n.helpcall ion-icon {\n  font-size: 40px;\n  color: white;\n}\n.helpchat {\n  position: fixed;\n  bottom: 3%;\n  right: 3%;\n  width: 70px;\n  height: 70px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 10px;\n  background: #0b5cab;\n  border-radius: 50px;\n}\n.helpchat ion-icon {\n  font-size: 40px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvbGRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLDRDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSx1QkFBQTtBQUNKO0FBQ0U7RUFDRSxzQkFBQTtFQUNBLFdBQUE7QUFDSjtBQUNFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNKO0FBR0E7RUFDRSxnQ0FBQTtFQUNBLDRDQUFBO0VBQ0EseUNBQUE7RUFDQSx5QkFBQTtBQUFGO0FBQ0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0VBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FBQ0o7QUFBSTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFFTjtBQURNO0VBQ0UsZ0VBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUdSO0FBRE07RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFHUjtBQUVFO0VBQ0UsbUJBQUE7QUFBSjtBQUNJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFDTjtBQUFNOztFQUVFLGFBQUE7QUFFUjtBQUFNO0VBQ0UsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFFUjtBQURRO0VBQ0UsZ0JBQUE7QUFHVjtBQURRO0VBQ0UsbUJBQUE7QUFHVjtBQUFNO0VBQ0UscUJBQUE7QUFFUjtBQUlBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBREY7QUFHRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBREo7QUFLQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUZGO0FBSUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQUZKIiwiZmlsZSI6ImZvbGRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbmF2YmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGlvbi1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogZGFya2dyZWVuO1xuICB9XG4gIGEgaW1nIHtcbiAgICBtYXJnaW46IDdweCAwIDdweCAxMHB4O1xuICAgIHdpZHRoOiA2MHB4O1xuICB9XG4gIGlvbi1idXR0b25zIHtcbiAgICBjb2xvcjogIzAwYTFlMDtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgLS1pb24tdGV4dC1jb2xvcjogIzA4MDgwODtcbiAgLnNlbGVjdC1ibG9jayB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZvbnQtZmFtaWx5OiBTYWxlc2ZvcmNlU2Fuc1JlZ3VsYXIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyO1xuICAgIGNvbG9yOiAjMDMyZDYwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEyOCwgMTI4LCAxMjgpO1xuICAgIC5jb250YWluZXIge1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICBwIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFNhbGVzZm9yY2VTYW5zUmVndWxhciwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB9XG4gICAgICBzZWxlY3Qge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY29udGVudCB7XG4gICAgYmFja2dyb3VuZDogcmdiKDE2NCwgMjExLCAyNDEpO1xuICAgIC5ib3gtY29udGVudCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIGg0LFxuICAgICAgaDEge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgfVxuICAgICAgdWwge1xuICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMTBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgbGkge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAtLWJhY2tncm91bmQ6ICMwMzJkNjA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5oZWxwY2FsbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxMiU7XG4gIHJpZ2h0OiAzJTtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQ6ICMwYjVjYWI7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG5cbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICB9XG59XG5cbi5oZWxwY2hhdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAzJTtcbiAgcmlnaHQ6IDMlO1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYmFja2dyb3VuZDogIzBiNWNhYjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcblxuICBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 7154:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n     <ion-button (click)=\"open()\">po</ion-button>\n</ion-content>\n\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_folder_folder_module_ts.js.map