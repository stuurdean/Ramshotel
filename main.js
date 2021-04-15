(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/kSx":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/siderbar/siderbar.component.ts ***!
  \******************************************************************/
/*! exports provided: SiderbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiderbarComponent", function() { return SiderbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");






const _c0 = function () { return ["/"]; };
const _c1 = function () { return ["/clients"]; };
const _c2 = function () { return ["/addAccomodation"]; };
const _c3 = function () { return ["/View Accomodation"]; };
const _c4 = function () { return ["/Bookings"]; };
const _c5 = function () { return ["/gategory"]; };
const _c6 = function () { return ["/addmeal"]; };
const _c7 = function () { return ["/Viewfood"]; };
const _c8 = function () { return ["/Orders"]; };
const _c9 = function () { return ["/Activities"]; };
class SiderbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
SiderbarComponent.ɵfac = function SiderbarComponent_Factory(t) { return new (t || SiderbarComponent)(); };
SiderbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SiderbarComponent, selectors: [["app-siderbar"]], decls: 38, vars: 20, consts: [[1, "bgd"], ["mat-list-item", "", "routerLinkActive", "router-link-active", 3, "routerLink"], ["matSubheader", ""], ["routerLinkActive", "active", "mat-list-item", "", 3, "routerLink"], ["routerLinkActive", "router-link-active", "mat-list-item", "", 3, "routerLink"], ["color", "primary"], ["mat-list-item", ""]], template: function SiderbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Accomodation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Add Accomodation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "View Accomodation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Bookings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Resturant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Gategory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Add Meal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "View Meal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "mat-divider", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Activities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Add Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Chats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c9));
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDivider"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListSubheaderCssMatStyler"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlcmJhci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SiderbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-siderbar',
                templateUrl: './siderbar.component.html',
                styleUrls: ['./siderbar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "/tGU":
/*!******************************************************!*\
  !*** ./src/app/Admin/bookings/bookings.component.ts ***!
  \******************************************************/
/*! exports provided: BookingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsComponent", function() { return BookingsComponent; });
/* harmony import */ var _b_dialog_b_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../b-dialog/b-dialog.component */ "XpNN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/firebase.service */ "Z2Br");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");


















function BookingsComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BookingsComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.clearSearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BookingsComponent_mat_header_cell_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Names");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BookingsComponent_mat_cell_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r25.names);
} }
function BookingsComponent_mat_header_cell_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Room Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BookingsComponent_mat_cell_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r26.roomName);
} }
function BookingsComponent_mat_header_cell_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Room Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BookingsComponent_mat_cell_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r27.roomNumber);
} }
function BookingsComponent_mat_header_cell_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Check In");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BookingsComponent_mat_cell_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r28.checkIN);
} }
function BookingsComponent_mat_header_cell_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Check Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BookingsComponent_mat_cell_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r29.checkOut);
} }
function BookingsComponent_mat_header_cell_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BookingsComponent_mat_cell_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r30.total);
} }
function BookingsComponent_mat_header_cell_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BookingsComponent_mat_cell_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r31.status);
} }
function BookingsComponent_mat_header_cell_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-header-cell");
} }
function BookingsComponent_mat_cell_29_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BookingsComponent_mat_cell_29_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const element_r32 = ctx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r33.update(element_r32.$key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "launch");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BookingsComponent_mat_cell_29_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const element_r32 = ctx.$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r35.remove(element_r32.$key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "delete_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BookingsComponent_mat_footer_cell_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-footer-cell", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Fetchinng Bookings... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BookingsComponent_mat_footer_cell_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-footer-cell", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No bookings... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BookingsComponent_mat_header_row_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-header-row");
} }
function BookingsComponent_mat_row_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-row");
} }
const _c0 = function (a0) { return { "hide": a0 }; };
function BookingsComponent_mat_footer_row_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-footer-row", 29);
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, ctx_r21.ListData != null));
} }
function BookingsComponent_mat_footer_row_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-footer-row", 29);
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, !(ctx_r22.ListData != null && ctx_r22.ListData.data.length == 0)));
} }
const _c1 = function () { return ["Loading"]; };
const _c2 = function () { return ["No Bookings"]; };
const _c3 = function () { return [5, 10, 25, 100]; };
class BookingsComponent {
    constructor(service, dailog, toastr) {
        this.service = service;
        this.dailog = dailog;
        this.toastr = toastr;
        this.displayedColumns = ['Names', 'Room Name', 'Room Number', 'Check In', 'Check Out', 'Amount', 'Status', 'Action'];
    }
    ngOnInit() {
        this.service.getBookings().subscribe(list => {
            let array = list.map(item => {
                return Object.assign({ $key: item.key }, item.payload.val());
            });
            this.ListData = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](array);
            this.ListData.paginator = this.paginator;
        });
    }
    clearSearch() {
        this.searchKey = "";
    }
    Search() {
        this.ListData.filter = this.searchKey.trim().toLocaleLowerCase();
    }
    update(k) {
        this.dailog.open(_b_dialog_b_dialog_component__WEBPACK_IMPORTED_MODULE_0__["BDialogComponent"]);
        this.service.populate(k);
        console.log("key" + k);
    }
    remove(key) {
        if (confirm('Are you sure u wanna delete')) {
            this.service.deleteBookings(key);
        }
    }
}
BookingsComponent.ɵfac = function BookingsComponent_Factory(t) { return new (t || BookingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"])); };
BookingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BookingsComponent, selectors: [["app-bookings"]], viewQuery: function BookingsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 39, vars: 13, consts: [[1, "example-form"], [1, "example-full-width"], ["matInput", "", "placeholder", "Search", "autocomplete", "off", 3, "ngModel", "ngModelChange", "keyup"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], [1, "mat-elevation-z8"], ["matSort", "", 3, "dataSource"], ["matColumnDef", "Names"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "Room Name"], ["matColumnDef", "Room Number"], ["matColumnDef", "Check In"], ["matColumnDef", "Check Out"], ["matColumnDef", "Amount"], ["matColumnDef", "Status"], ["matColumnDef", "Action"], [4, "matHeaderCellDef"], ["matColumnDef", "Loading"], ["aria-colspan", "6", 4, "matFooterCellDef"], ["matColumnDef", "No Bookings"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "ngClass", 4, "matFooterRowDef"], [3, "length", "pageSize", "pageSizeOptions"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], ["mat-sort-header", ""], ["mat-icon-button", "", 3, "click"], ["mat-icon-button", "", "color", "warn", 3, "click"], ["aria-colspan", "6"], [3, "ngClass"]], template: function BookingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BookingsComponent_Template_input_ngModelChange_2_listener($event) { return ctx.searchKey = $event; })("keyup", function BookingsComponent_Template_input_keyup_2_listener() { return ctx.Search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, BookingsComponent_button_3_Template, 3, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](6, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, BookingsComponent_mat_header_cell_7_Template, 2, 0, "mat-header-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, BookingsComponent_mat_cell_8_Template, 2, 1, "mat-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](9, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, BookingsComponent_mat_header_cell_10_Template, 2, 0, "mat-header-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, BookingsComponent_mat_cell_11_Template, 2, 1, "mat-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](12, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, BookingsComponent_mat_header_cell_13_Template, 2, 0, "mat-header-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, BookingsComponent_mat_cell_14_Template, 2, 1, "mat-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](15, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, BookingsComponent_mat_header_cell_16_Template, 2, 0, "mat-header-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, BookingsComponent_mat_cell_17_Template, 2, 1, "mat-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](18, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, BookingsComponent_mat_header_cell_19_Template, 2, 0, "mat-header-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, BookingsComponent_mat_cell_20_Template, 2, 1, "mat-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](21, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, BookingsComponent_mat_header_cell_22_Template, 2, 0, "mat-header-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, BookingsComponent_mat_cell_23_Template, 2, 1, "mat-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](24, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, BookingsComponent_mat_header_cell_25_Template, 2, 0, "mat-header-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, BookingsComponent_mat_cell_26_Template, 2, 1, "mat-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](27, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, BookingsComponent_mat_header_cell_28_Template, 1, 0, "mat-header-cell", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, BookingsComponent_mat_cell_29_Template, 7, 0, "mat-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](30, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, BookingsComponent_mat_footer_cell_31_Template, 2, 0, "mat-footer-cell", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](32, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, BookingsComponent_mat_footer_cell_33_Template, 2, 0, "mat-footer-cell", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, BookingsComponent_mat_header_row_34_Template, 1, 0, "mat-header-row", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, BookingsComponent_mat_row_35_Template, 1, 0, "mat-row", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, BookingsComponent_mat_footer_row_36_Template, 1, 3, "mat-footer-row", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, BookingsComponent_mat_footer_row_37_Template, 1, 3, "mat-footer-row", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "mat-paginator", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.searchKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.ListData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matFooterRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matFooterRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("length", 100)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c3));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatFooterCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatFooterRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatFooterCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatFooterRow"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"]], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n  margin: 10dp;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  margin-left: 10dp !important;\n  width: 100%;\n  padding-left: 25dp;\n}\n\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n\nmat-footer-row-footer-cell[_ngcontent-%COMP%] {\n  justify-content: center;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxib29raW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBRUUsNEJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFFQTtFQUVFLGFBQUE7QUFBRjs7QUFFQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJib29raW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZvcm0ge1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDEwZHA7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG5cclxuICBtYXJnaW4tbGVmdDogMTBkcCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctbGVmdDogMjVkcDtcclxufVxyXG4uaGlkZVxyXG57XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5tYXQtZm9vdGVyLXJvdy1mb290ZXItY2VsbHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BookingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-bookings',
                templateUrl: './bookings.component.html',
                styleUrls: ['./bookings.component.scss']
            }]
    }], function () { return [{ type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"]]
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]]
        }] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\WORKSPACE\WEB APP\Rams-Hotel\src\main.ts */"zUnb");


/***/ }),

/***/ "2cBE":
/*!************************************************************!*\
  !*** ./src/app/Admin/view-accomo/view-accomo.component.ts ***!
  \************************************************************/
/*! exports provided: ViewAccomoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAccomoComponent", function() { return ViewAccomoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/firebase.service */ "Z2Br");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");







function ViewAccomoComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewAccomoComponent_mat_card_0_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.remove(item_r1.$key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1.AccomName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("BedType ", item_r1.BedType, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.ImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.AccomDescription, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Price R", item_r1.AccomPrice, "");
} }
class ViewAccomoComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.service.getAcccomodation().subscribe(list => {
            this.Accomodation = list.map(item => {
                return Object.assign({ $key: item.key }, item.payload.val());
            });
        });
    }
    remove(key) {
        if (confirm('Are you sure u wanna delete')) {
            this.service.deleteAccodation(key);
        }
    }
}
ViewAccomoComponent.ɵfac = function ViewAccomoComponent_Factory(t) { return new (t || ViewAccomoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"])); };
ViewAccomoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewAccomoComponent, selectors: [["app-view-accomo"]], decls: 1, vars: 1, consts: [["class", "example-card", 4, "ngFor", "ngForOf"], [1, "example-card"], ["mat-card-image", "", "alt", "Photo of a Shiba Inu", 3, "src"], ["mat-button", "", "mat-icon-button", "", "color", "warn", 3, "click"]], template: function ViewAccomoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ViewAccomoComponent_mat_card_0_Template, 16, 5, "mat-card", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Accomodation);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]], styles: [".example-card[_ngcontent-%COMP%] {\n  width: 27%;\n  float: left;\n  margin: 1%;\n  height: 450px;\n}\n\nimg[_ngcontent-%COMP%] {\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2aWV3LWFjY29tby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFDRjs7QUFDQTtFQUVFLGFBQUE7QUFDRiIsImZpbGUiOiJ2aWV3LWFjY29tby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xyXG4gIHdpZHRoOiAyNyU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luOiAxJTtcclxuICBoZWlnaHQ6IDQ1MHB4O1xyXG59XHJcbmltZ1xyXG57XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewAccomoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-accomo',
                templateUrl: './view-accomo.component.html',
                styleUrls: ['./view-accomo.component.scss']
            }]
    }], function () { return [{ type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"] }]; }, null); })();


/***/ }),

/***/ "3cDd":
/*!************************************************************!*\
  !*** ./src/app/Admin/addactivity/addactivity.component.ts ***!
  \************************************************************/
/*! exports provided: AddactivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddactivityComponent", function() { return AddactivityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/firebase.service */ "Z2Br");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");











function AddactivityComponent_mat_card_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "zoom_out_map");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.categoryName, " ");
} }
class AddactivityComponent {
    constructor(storage, service) {
        this.storage = storage;
        this.service = service;
        this.formTemplate = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            categoryName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            imageUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.image = null;
    }
    ngOnInit() {
        this.resetForm();
        this.service.getActivity().subscribe(list => {
            this.categorylist = list.map(item => {
                return Object.assign({}, item.payload.val());
            });
        });
    }
    selectedImg(event) {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => this.url = e.target.result;
            reader.readAsDataURL(event.target.files[0]);
            this.image = event.target.files[0];
            //this.image=  reader.readAsDataURL(e.target.files[0]);
        }
        else {
            this.url = "./assets/image-holder.png";
            this.image = null;
        }
    }
    onSubmit(formValue) {
        var path = `Activity/ ${this.image.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
        const fileRef = this.storage.ref(path);
        this.storage.upload(path, this.image).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
            fileRef.getDownloadURL().subscribe((url) => {
                formValue['imageUrl'] = url;
                console.log(formValue);
                this.service.addActivity(formValue);
                this.resetForm();
            });
        })).subscribe();
    }
    resetForm() {
        this.formTemplate.reset();
        this.formTemplate.setValue({
            categoryName: '',
            imageUrl: ''
        });
        this.image = null;
        this.url = "./assets/image-holder.png";
    }
}
AddactivityComponent.ɵfac = function AddactivityComponent_Factory(t) { return new (t || AddactivityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"])); };
AddactivityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddactivityComponent, selectors: [["app-addactivity"]], decls: 19, vars: 3, consts: [[1, "left"], [3, "formGroup", "submit"], [1, "image"], ["alt", "", 3, "src"], ["type", "text", "formControlName", "categoryName", "name", "", "placeholder", "Activity Name"], ["type", "file", "formControlName", "imageUrl", "placeholder", "Choose impage ", 1, "fle", 3, "change"], ["type", "submit", "mat-raised-button", "", "color", "primary", 1, "signin"], [1, "right"], [1, "card"], ["class", "cat-cat", 4, "ngFor", "ngForOf"], [1, "cat-cat"], [1, "image-div"], ["alt", "", 1, "cat-list-image", 3, "src"], [1, "card-button"], ["mat-icon-button", "", "color", "primary"], ["mat-icon-button", "", "color", "warn"]], template: function AddactivityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AddactivityComponent_Template_form_submit_6_listener() { return ctx.onSubmit(ctx.formTemplate.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddactivityComponent_Template_input_change_11_listener($event) { return ctx.selectedImg($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "List Of Activities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AddactivityComponent_mat_card_18_Template, 12, 2, "mat-card", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categorylist);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]], styles: ["h1[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.left[_ngcontent-%COMP%] {\n  float: left;\n  width: 45%;\n  margin: 1% auto;\n}\n\n.right[_ngcontent-%COMP%] {\n  float: left;\n  margin: 1% auto;\n  width: 50%;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  float: left;\n}\n\ninput[_ngcontent-%COMP%] {\n  margin: 5px;\n  height: 25px;\n}\n\n.image[_ngcontent-%COMP%] {\n  float: left;\n  width: 220px;\n}\n\n.fle[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #ddd;\n}\n\n.fle[_ngcontent-%COMP%]::placeholder {\n  float: left;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.cat-cat[_ngcontent-%COMP%] {\n  height: 70px;\n}\n\n.signin[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.cat-list-image[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  float: left;\n  border-radius: 5px;\n}\n\n.image-div[_ngcontent-%COMP%] {\n  float: left;\n  width: 70px;\n  margin-right: 10px;\n}\n\n.card-button[_ngcontent-%COMP%] {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhZGRhY3Rpdml0eS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGtCQUFBO0FBQUY7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQUVGOztBQUFBO0VBRUUsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBRUY7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUdGOztBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFHRjs7QUFBQTtFQUVFLFdBQUE7RUFDQSxzQkFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtBQUVGOztBQUNBO0VBRUUsWUFBQTtBQUNGOztBQUdBO0VBRUUsWUFBQTtBQURGOztBQU9BO0VBRUUsV0FBQTtBQUxGOztBQU9BO0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFMRjs7QUFPQTtFQUVFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFMRjs7QUFRQTtFQUVFLFlBQUE7QUFORiIsImZpbGUiOiJhZGRhY3Rpdml0eS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxXHJcbntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmxlZnR7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDQ1JTtcclxuICBtYXJnaW46IDElIGF1dG87XHJcbn1cclxuLnJpZ2h0e1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbjogMSUgYXV0bztcclxuICB3aWR0aDogNTAlO1xyXG59XHJcbmltZ1xyXG57XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuaW5wdXR7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4uaW1hZ2V7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDIyMHB4O1xyXG5cclxufVxyXG4uZmxlXHJcbntcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG5cclxufVxyXG4uZmxlOjpwbGFjZWhvbGRlcntcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxubWF0LWNhcmRcclxue1xyXG4gIG1hcmdpbjogMTBweDtcclxuXHJcblxyXG59XHJcbi5jYXQtY2F0XHJcbntcclxuICBoZWlnaHQ6IDcwcHg7XHJcbn1cclxuaDJ7XHJcblxyXG59XHJcblxyXG4uc2lnbmlue1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uY2F0LWxpc3QtaW1hZ2Vcclxue1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIGhlaWdodDogNzBweDtcclxuICBmbG9hdDogbGVmdDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLmltYWdlLWRpdlxyXG57XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uY2FyZC1idXR0b25cclxue1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddactivityComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-addactivity',
                templateUrl: './addactivity.component.html',
                styleUrls: ['./addactivity.component.scss']
            }]
    }], function () { return [{ type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] }, { type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyB5Z4-Yo0tjrT8ZyCr7n_nTQ2yjMLiN-oI",
        authDomain: "rams-hotel.firebaseapp.com",
        databaseURL: "https://rams-hotel.firebaseio.com",
        projectId: "rams-hotel",
        storageBucket: "rams-hotel.appspot.com",
        messagingSenderId: "734025426623",
        appId: "1:734025426623:web:fa9281e7b2878c2253080a"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EEwM":
/*!**************************************************!*\
  !*** ./src/app/Admin/orders/orders.component.ts ***!
  \**************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _odialog_odialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../odialog/odialog.component */ "upx7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/firebase.service */ "Z2Br");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");


















function OrdersComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrdersComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.clearSearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OrdersComponent_mat_header_cell_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Names");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OrdersComponent_mat_cell_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r19.acoomodation);
} }
function OrdersComponent_mat_header_cell_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Room Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OrdersComponent_mat_cell_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r20.email);
} }
function OrdersComponent_mat_header_cell_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OrdersComponent_mat_cell_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r21.status);
} }
function OrdersComponent_mat_header_cell_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OrdersComponent_mat_cell_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r22.total);
} }
function OrdersComponent_mat_header_cell_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-header-cell");
} }
const _c0 = function (a2) { return ["/", "Order", a2]; };
function OrdersComponent_mat_cell_20_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrdersComponent_mat_cell_20_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const element_r23 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.update(element_r23.$key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "create");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrdersComponent_mat_cell_20_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const element_r23 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.passdata(element_r23.total, element_r23.foods, element_r23.email, element_r23.status, element_r23.acoomodation); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "launch");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrdersComponent_mat_cell_20_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const element_r23 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.remove(element_r23.$key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "delete_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, element_r23.$key));
} }
function OrdersComponent_mat_footer_cell_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-footer-cell", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Fetchinng Bookings... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OrdersComponent_mat_footer_cell_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-footer-cell", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No Orders... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OrdersComponent_mat_header_row_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-header-row");
} }
function OrdersComponent_mat_row_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-row");
} }
const _c1 = function (a0) { return { "hide": a0 }; };
function OrdersComponent_mat_footer_row_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-footer-row", 27);
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c1, ctx_r15.ListData != null));
} }
function OrdersComponent_mat_footer_row_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-footer-row", 27);
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c1, !(ctx_r16.ListData != null && ctx_r16.ListData.data.length == 0)));
} }
const _c2 = function () { return ["Loading"]; };
const _c3 = function () { return ["No Bookings"]; };
const _c4 = function () { return [5, 10, 25, 100]; };
class OrdersComponent {
    constructor(service, dailog) {
        this.service = service;
        this.dailog = dailog;
        this.displayedColumns = ['Room Number', 'Names', 'Status', 'Total', 'Action'];
    }
    ngOnInit() {
        this.service.getOrders().subscribe(list => {
            let array = list.map(item => {
                return Object.assign({ $key: item.key }, item.payload.val());
            });
            this.ListData = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](array);
            this.ListData.paginator = this.paginator;
        });
    }
    clearSearch() {
        this.searchKey = "";
    }
    Search() {
        this.ListData.filter = this.searchKey.trim().toLocaleLowerCase();
    }
    update(k) {
        this.service.populateOrder(k);
        this.dailog.open(_odialog_odialog_component__WEBPACK_IMPORTED_MODULE_0__["OdialogComponent"]);
    }
    remove(key) {
        if (confirm('Are you sure u wanna delete')) {
            this.service.deleteOrder(key);
        }
    }
    passdata(total, foood, names, s, accomo) {
        this.service.getorders(total, foood, names, s, accomo);
    }
}
OrdersComponent.ɵfac = function OrdersComponent_Factory(t) { return new (t || OrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
OrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OrdersComponent, selectors: [["app-orders"]], viewQuery: function OrdersComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 30, vars: 13, consts: [[1, "example-form"], [1, "example-full-width"], ["matInput", "", "placeholder", "Search", "autocomplete", "off", 3, "ngModel", "ngModelChange", "keyup"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], [1, "mat-elevation-z8"], ["matSort", "", 3, "dataSource"], ["matColumnDef", "Room Number"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "Names"], ["matColumnDef", "Status"], ["matColumnDef", "Total"], ["matColumnDef", "Action"], [4, "matHeaderCellDef"], ["matColumnDef", "Loading"], ["aria-colspan", "6", 4, "matFooterCellDef"], ["matColumnDef", "No Bookings"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "ngClass", 4, "matFooterRowDef"], [3, "length", "pageSize", "pageSizeOptions"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], ["mat-sort-header", ""], ["mat-icon-button", "", 3, "click"], ["mat-icon-button", "", "routerLinkActive", "active", 3, "routerLink", "click"], ["mat-icon-button", "", "color", "warn", 3, "click"], ["aria-colspan", "6"], [3, "ngClass"]], template: function OrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrdersComponent_Template_input_ngModelChange_2_listener($event) { return ctx.searchKey = $event; })("keyup", function OrdersComponent_Template_input_keyup_2_listener() { return ctx.Search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, OrdersComponent_button_3_Template, 3, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](6, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, OrdersComponent_mat_header_cell_7_Template, 2, 0, "mat-header-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, OrdersComponent_mat_cell_8_Template, 2, 1, "mat-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](9, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, OrdersComponent_mat_header_cell_10_Template, 2, 0, "mat-header-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, OrdersComponent_mat_cell_11_Template, 2, 1, "mat-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](12, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, OrdersComponent_mat_header_cell_13_Template, 2, 0, "mat-header-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, OrdersComponent_mat_cell_14_Template, 2, 1, "mat-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](15, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, OrdersComponent_mat_header_cell_16_Template, 2, 0, "mat-header-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, OrdersComponent_mat_cell_17_Template, 2, 1, "mat-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](18, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, OrdersComponent_mat_header_cell_19_Template, 1, 0, "mat-header-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, OrdersComponent_mat_cell_20_Template, 10, 3, "mat-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](21, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, OrdersComponent_mat_footer_cell_22_Template, 2, 0, "mat-footer-cell", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](23, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, OrdersComponent_mat_footer_cell_24_Template, 2, 0, "mat-footer-cell", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, OrdersComponent_mat_header_row_25_Template, 1, 0, "mat-header-row", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, OrdersComponent_mat_row_26_Template, 1, 0, "mat-row", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, OrdersComponent_mat_footer_row_27_Template, 1, 3, "mat-footer-row", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, OrdersComponent_mat_footer_row_28_Template, 1, 3, "mat-footer-row", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "mat-paginator", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.searchKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.ListData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matFooterRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matFooterRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("length", 100)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c4));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatFooterCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatFooterRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLink"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatFooterCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatFooterRow"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"]], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n  margin: 10dp;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  margin-left: 10dp !important;\n  width: 100%;\n  padding-left: 25dp;\n}\n\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n\nmat-footer-row-footer-cell[_ngcontent-%COMP%] {\n  justify-content: center;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxvcmRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUVFLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQUY7O0FBRUE7RUFFRSxhQUFBO0FBQUY7O0FBRUE7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0FBQ0YiLCJmaWxlIjoib3JkZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMTBkcDtcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcblxyXG4gIG1hcmdpbi1sZWZ0OiAxMGRwICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNWRwO1xyXG59XHJcbi5oaWRlXHJcbntcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbm1hdC1mb290ZXItcm93LWZvb3Rlci1jZWxse1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OrdersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-orders',
                templateUrl: './orders.component.html',
                styleUrls: ['./orders.component.scss']
            }]
    }], function () { return [{ type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"]]
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]]
        }] }); })();


/***/ }),

/***/ "FFhZ":
/*!****************************************************!*\
  !*** ./src/app/Admin/addmeal/addmeal.component.ts ***!
  \****************************************************/
/*! exports provided: AddmealComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddmealComponent", function() { return AddmealComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/firebase.service */ "Z2Br");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");








class AddmealComponent {
    constructor(service, storage) {
        this.service = service;
        this.storage = storage;
        this.formTemplate = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            foodName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            foodDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            categoryName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            foodPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            imageUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.image = null;
    }
    ngOnInit() {
        this.resetForm();
        this.service.getCategory().subscribe(list => {
            this.categorylist = list.map(item => {
                return Object.assign({}, item.payload.val());
            });
        });
    }
    //Displaying Image
    selectedImg(event) {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => this.url = e.target.result;
            reader.readAsDataURL(event.target.files[0]);
            this.image = event.target.files[0];
            //this.image=  reader.readAsDataURL(e.target.files[0]);
        }
        else {
            this.url = "./assets/image-holder.png";
            this.image = null;
        }
    }
    onSubmit(formValue) {
        var path = `Foodlist/ ${this.image.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
        const fileRef = this.storage.ref(path);
        this.storage.upload(path, this.image).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
            fileRef.getDownloadURL().subscribe((url) => {
                formValue['imageUrl'] = url;
                console.log(formValue);
                this.service.addFood(formValue);
                this.resetForm();
            });
        })).subscribe();
    }
    resetForm() {
        this.formTemplate.reset();
        this.formTemplate.setValue({
            categoryName: '',
            foodName: '',
            foodDescription: '',
            foodPrice: '',
            imageUrl: ''
        });
        this.image = null;
        this.url = "./assets/image-holder.png";
    }
}
AddmealComponent.ɵfac = function AddmealComponent_Factory(t) { return new (t || AddmealComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"])); };
AddmealComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddmealComponent, selectors: [["app-addmeal"]], decls: 18, vars: 2, consts: [[1, "container"], ["id", "contact", 3, "formGroup", "submit"], ["alt", "", 3, "src"], ["type", "file", "tabindex", "1", "required", "", "autofocus", "", 3, "change"], ["placeholder", "Enter Food name", "type", "text", "formControlName", "foodName", "required", "", "autofocus", ""], ["formControlName", "foodDescription", "placeholder", "Enter Food Description", "type", "text", "required", ""], ["formControlName", "categoryName", "type", "text", "placeholder", "Category Name", "required", ""], ["formControlName", "foodPrice", "placeholder", "Enter Food Price", "type", "number", "tabindex", "4", "required", ""], ["name", "submit", "mat-raised-button", "", "type", "submit", "data-submit", "...Sending"]], template: function AddmealComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AddmealComponent_Template_form_submit_1_listener() { return ctx.onSubmit(ctx.formTemplate.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add Meal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddmealComponent_Template_input_change_6_listener($event) { return ctx.selectedImg($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: ["@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,600,400italic);\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-font-smoothing: antialiased;\n  -o-font-smoothing: antialiased;\n  font-smoothing: antialiased;\n  text-rendering: optimizeLegibility;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 600px;\n  width: 100%;\n  margin: 0 auto;\n  position: relative;\n}\n#contact[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   input[type=tel][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   input[type=url][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%] {\n  font: 400 12px/16px \"Roboto\", Helvetica, Arial, sans-serif;\n}\nimg[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  float: left;\n}\n#contact[_ngcontent-%COMP%] {\n  background: #F9F9F9;\n  padding: 25px;\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\n}\n#contact[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 30px;\n  font-weight: 300;\n  margin-bottom: 10px;\n}\n#contact[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 5px 0 15px;\n  display: block;\n  font-size: 13px;\n  font-weight: 400;\n}\nfieldset[_ngcontent-%COMP%] {\n  border: medium none !important;\n  margin: 0 0 5px;\n  min-width: 100%;\n  padding: 0;\n  width: 100%;\n}\n#contact[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   input[type=tel][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #ccc;\n  background: #FFF;\n  margin: 0 0 5px;\n  padding: 10px;\n}\n#contact[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:hover, #contact[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]:hover, #contact[_ngcontent-%COMP%]   input[type=tel][_ngcontent-%COMP%]:hover, #contact[_ngcontent-%COMP%]   input[type=url][_ngcontent-%COMP%]:hover, #contact[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:hover {\n  transition: border-color 0.3s ease-in-out;\n  border: 1px solid #aaa;\n}\n#contact[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  height: 100px;\n  max-width: 100%;\n  resize: none;\n}\n#contact[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 100%;\n  border: none;\n  background-color: #44DCDE;\n  color: #FFF;\n  margin: 0 0 5px;\n  padding: 10px;\n  font-size: 15px;\n}\n#contact[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%]:hover {\n  background: #43A047;\n  transition: background-color 0.3s ease-in-out;\n}\n.copyright[_ngcontent-%COMP%] {\n  text-align: center;\n}\n#contact[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, #contact[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: 0;\n  border: 1px solid #aaa;\n}\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #888;\n}\n[_ngcontent-%COMP%]:-moz-placeholder {\n  color: #888;\n}\n[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #888;\n}\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #888;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhZGRtZWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLGlGQUFBO0FBQ1I7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7QUFDRjtBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQUY7QUFHQTs7Ozs7O0VBTUUsMERBQUE7QUFBRjtBQUVBO0VBRUUsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBQUY7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDBFQUFBO0FBQUY7QUFHQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUFGO0FBR0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFBRjtBQUdBO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQUY7QUFHQTs7Ozs7RUFLRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBQUY7QUFHQTs7Ozs7RUFPRSx5Q0FBQTtFQUNBLHNCQUFBO0FBQUY7QUFHQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUFGO0FBR0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFBRjtBQUdBO0VBQ0UsbUJBQUE7RUFHQSw2Q0FBQTtBQUFGO0FBS0E7RUFDRSxrQkFBQTtBQUZGO0FBS0E7O0VBRUUsVUFBQTtFQUNBLHNCQUFBO0FBRkY7QUFLQTtFQUNFLFdBQUE7QUFGRjtBQUtBO0VBQ0UsV0FBQTtBQUZGO0FBS0E7RUFDRSxXQUFBO0FBRkY7QUFLQTtFQUNFLFdBQUE7QUFGRiIsImZpbGUiOiJhZGRtZWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo0MDAsMzAwLDYwMCw0MDBpdGFsaWMpO1xyXG4qIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgLW1vei1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgLW8tZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIGZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xyXG59XHJcblxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNjb250YWN0IGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4jY29udGFjdCBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXHJcbiNjb250YWN0IGlucHV0W3R5cGU9XCJ0ZWxcIl0sXHJcbiNjb250YWN0IGlucHV0W3R5cGU9XCJ1cmxcIl0sXHJcbiNjb250YWN0IHRleHRhcmVhLFxyXG4jY29udGFjdCBidXR0b25bdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgZm9udDogNDAwIDEycHgvMTZweCBcIlJvYm90b1wiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcbmltZ1xyXG57XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbiNjb250YWN0IHtcclxuICBiYWNrZ3JvdW5kOiAjRjlGOUY5O1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcbn1cclxuXHJcbiNjb250YWN0IGgzIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4jY29udGFjdCBoNCB7XHJcbiAgbWFyZ2luOiA1cHggMCAxNXB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5maWVsZHNldCB7XHJcbiAgYm9yZGVyOiBtZWRpdW0gbm9uZSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMCAwIDVweDtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI2NvbnRhY3QgaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbiNjb250YWN0IGlucHV0W3R5cGU9XCJmaWxlXCJdLFxyXG4jY29udGFjdCBpbnB1dFt0eXBlPVwidGVsXCJdLFxyXG4jY29udGFjdCBpbnB1dFt0eXBlPVwibnVtYmVyXCJdLFxyXG4jY29udGFjdCB0ZXh0YXJlYSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBiYWNrZ3JvdW5kOiAjRkZGO1xyXG4gIG1hcmdpbjogMCAwIDVweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4jY29udGFjdCBpbnB1dFt0eXBlPVwidGV4dFwiXTpob3ZlcixcclxuI2NvbnRhY3QgaW5wdXRbdHlwZT1cImVtYWlsXCJdOmhvdmVyLFxyXG4jY29udGFjdCBpbnB1dFt0eXBlPVwidGVsXCJdOmhvdmVyLFxyXG4jY29udGFjdCBpbnB1dFt0eXBlPVwidXJsXCJdOmhvdmVyLFxyXG4jY29udGFjdCB0ZXh0YXJlYTpob3ZlciB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcyBlYXNlLWluLW91dDtcclxuICAtbW96LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XHJcbn1cclxuXHJcbiNjb250YWN0IHRleHRhcmVhIHtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICByZXNpemU6IG5vbmU7XHJcbn1cclxuXHJcbiNjb250YWN0IGJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NERDREU7XHJcbiAgY29sb3I6ICNGRkY7XHJcbiAgbWFyZ2luOiAwIDAgNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4jY29udGFjdCBidXR0b25bdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzQzQTA0NztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLWluLW91dDtcclxuICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcblxyXG5cclxuLmNvcHlyaWdodCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jY29udGFjdCBpbnB1dDpmb2N1cyxcclxuI2NvbnRhY3QgdGV4dGFyZWE6Zm9jdXMge1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcclxufVxyXG5cclxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogIzg4ODtcclxufVxyXG5cclxuOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjODg4O1xyXG59XHJcblxyXG46Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjODg4O1xyXG59XHJcblxyXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogIzg4ODtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddmealComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-addmeal',
                templateUrl: './addmeal.component.html',
                styleUrls: ['./addmeal.component.scss']
            }]
    }], function () { return [{ type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"] }, { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] }]; }, null); })();


/***/ }),

/***/ "FIw4":
/*!****************************************************!*\
  !*** ./src/app/pages/default/default.component.ts ***!
  \****************************************************/
/*! exports provided: DefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return DefaultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/header/header.component */ "aZ8m");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _shared_components_siderbar_siderbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/siderbar/siderbar.component */ "/kSx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/footer/footer.component */ "aF9I");







class DefaultComponent {
    constructor() { }
    ngOnInit() {
    }
}
DefaultComponent.ɵfac = function DefaultComponent_Factory(t) { return new (t || DefaultComponent)(); };
DefaultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DefaultComponent, selectors: [["app-default"]], decls: 7, vars: 0, consts: [["mode", "side", "opened", ""]], template: function DefaultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-drawer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-siderbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-drawer-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawer"], _shared_components_siderbar_siderbar_component__WEBPACK_IMPORTED_MODULE_3__["SiderbarComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\nmat-drawer-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nmat-drawer[_ngcontent-%COMP%] {\n  width: 250px;\n}\n\nmat-drawer-content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkZWZhdWx0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBRUUsWUFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtBQUFGIiwiZmlsZSI6ImRlZmF1bHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5tYXQtZHJhd2VyLWNvbnRhaW5lcntcclxuXHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5tYXQtZHJhd2Vye1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBcclxufVxyXG5tYXQtZHJhd2VyLWNvbnRlbnR7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-default',
                templateUrl: './default.component.html',
                styleUrls: ['./default.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "OJu0":
/*!******************************************************!*\
  !*** ./src/app/Admin/category/category.component.ts ***!
  \******************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/firebase.service */ "Z2Br");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");











function CategoryComponent_mat_card_18_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "zoom_out_map");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryComponent_mat_card_18_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.remove(item_r1.$key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.categoryName, " ");
} }
class CategoryComponent {
    constructor(storage, service) {
        this.storage = storage;
        this.service = service;
        this.formTemplate = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            categoryName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            imageUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.image = null;
    }
    ngOnInit() {
        this.resetForm();
        this.service.getCategory().subscribe(list => {
            this.categorylist = list.map(item => {
                return Object.assign({ $key: item.key }, item.payload.val());
            });
        });
    }
    remove(key) {
        this.service.deleteCategory(key);
    }
    selectedImg(event) {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => this.url = e.target.result;
            reader.readAsDataURL(event.target.files[0]);
            this.image = event.target.files[0];
            //this.image=  reader.readAsDataURL(e.target.files[0]);
        }
        else {
            this.url = "./assets/image-holder.png";
            this.image = null;
        }
    }
    onSubmit(formValue) {
        var path = `CategoryList/ ${this.image.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
        const fileRef = this.storage.ref(path);
        this.storage.upload(path, this.image).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
            fileRef.getDownloadURL().subscribe((url) => {
                formValue['imageUrl'] = url;
                console.log(formValue);
                this.service.addCategory(formValue);
                this.resetForm();
            });
        })).subscribe();
    }
    resetForm() {
        this.formTemplate.reset();
        this.formTemplate.setValue({
            categoryName: '',
            imageUrl: ''
        });
        this.image = null;
        this.url = "./assets/image-holder.png";
    }
}
CategoryComponent.ɵfac = function CategoryComponent_Factory(t) { return new (t || CategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"])); };
CategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoryComponent, selectors: [["app-category"]], decls: 19, vars: 3, consts: [[1, "left"], [3, "formGroup", "submit"], [1, "image"], ["alt", "", 3, "src"], ["type", "text", "formControlName", "categoryName", "name", "", "placeholder", "Gategory Name"], ["type", "file", "formControlName", "imageUrl", "placeholder", "Choose impage ", 1, "fle", 3, "change"], ["type", "submit", "mat-raised-button", "", "color", "primary", 1, "signin"], [1, "right"], [1, "card"], ["class", "cat-cat", 4, "ngFor", "ngForOf"], [1, "cat-cat"], [1, "image-div"], ["alt", "", 1, "cat-list-image", 3, "src"], [1, "card-button"], ["mat-icon-button", "", "color", "primary"], ["mat-icon-button", "", "color", "warn", 3, "click"]], template: function CategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function CategoryComponent_Template_form_submit_6_listener() { return ctx.onSubmit(ctx.formTemplate.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CategoryComponent_Template_input_change_11_listener($event) { return ctx.selectedImg($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "List Of Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CategoryComponent_mat_card_18_Template, 12, 2, "mat-card", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categorylist);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]], styles: ["h1[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.left[_ngcontent-%COMP%] {\n  float: left;\n  width: 45%;\n  margin: 1% auto;\n}\n\n.right[_ngcontent-%COMP%] {\n  float: left;\n  margin: 1% auto;\n  width: 50%;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  float: left;\n}\n\ninput[_ngcontent-%COMP%] {\n  margin: 5px;\n  height: 25px;\n}\n\n.image[_ngcontent-%COMP%] {\n  float: left;\n  width: 220px;\n}\n\n.fle[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #ddd;\n}\n\n.fle[_ngcontent-%COMP%]::placeholder {\n  float: left;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.cat-cat[_ngcontent-%COMP%] {\n  height: 70px;\n}\n\n.signin[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.cat-list-image[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  float: left;\n  border-radius: 5px;\n}\n\n.image-div[_ngcontent-%COMP%] {\n  float: left;\n  width: 70px;\n  margin-right: 10px;\n}\n\n.card-button[_ngcontent-%COMP%] {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYXRlZ29yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGtCQUFBO0FBQUY7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQUVGOztBQUFBO0VBRUUsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBRUY7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUdGOztBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFHRjs7QUFBQTtFQUVFLFdBQUE7RUFDQSxzQkFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtBQUVGOztBQUNBO0VBRUUsWUFBQTtBQUNGOztBQUdBO0VBRUUsWUFBQTtBQURGOztBQU9BO0VBRUUsV0FBQTtBQUxGOztBQU9BO0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFMRjs7QUFPQTtFQUVFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFMRjs7QUFRQTtFQUVFLFlBQUE7QUFORiIsImZpbGUiOiJjYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxXHJcbntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmxlZnR7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDQ1JTtcclxuICBtYXJnaW46IDElIGF1dG87XHJcbn1cclxuLnJpZ2h0e1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbjogMSUgYXV0bztcclxuICB3aWR0aDogNTAlO1xyXG59XHJcbmltZ1xyXG57XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuaW5wdXR7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4uaW1hZ2V7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDIyMHB4O1xyXG5cclxufVxyXG4uZmxlXHJcbntcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG5cclxufVxyXG4uZmxlOjpwbGFjZWhvbGRlcntcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxubWF0LWNhcmRcclxue1xyXG4gIG1hcmdpbjogMTBweDtcclxuXHJcblxyXG59XHJcbi5jYXQtY2F0XHJcbntcclxuICBoZWlnaHQ6IDcwcHg7XHJcbn1cclxuaDJ7XHJcblxyXG59XHJcblxyXG4uc2lnbmlue1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uY2F0LWxpc3QtaW1hZ2Vcclxue1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIGhlaWdodDogNzBweDtcclxuICBmbG9hdDogbGVmdDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLmltYWdlLWRpdlxyXG57XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uY2FyZC1idXR0b25cclxue1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-category',
                templateUrl: './category.component.html',
                styleUrls: ['./category.component.scss']
            }]
    }], function () { return [{ type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] }, { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] }]; }, null); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_siderbar_siderbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/siderbar/siderbar.component */ "/kSx");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "aF9I");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "aZ8m");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ "qFsG");




















class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _components_siderbar_siderbar_component__WEBPACK_IMPORTED_MODULE_4__["SiderbarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableModule"]], exports: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _components_siderbar_siderbar_component__WEBPACK_IMPORTED_MODULE_4__["SiderbarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
        args: [{
                declarations: [
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                    _components_siderbar_siderbar_component__WEBPACK_IMPORTED_MODULE_4__["SiderbarComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableModule"]
                ],
                exports: [
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                    _components_siderbar_siderbar_component__WEBPACK_IMPORTED_MODULE_4__["SiderbarComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'Rams-Hotel';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "X3Yu":
/*!**********************************************************!*\
  !*** ./src/app/Admin/add-accomo/add-accomo.component.ts ***!
  \**********************************************************/
/*! exports provided: AddAccomoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAccomoComponent", function() { return AddAccomoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/firebase.service */ "Z2Br");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");








class AddAccomoComponent {
    constructor(service, storage) {
        this.service = service;
        this.storage = storage;
        this.formTemplate = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            AccomName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            BedType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            Rooms: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            AccomDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            AccomPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            imageUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.image = null;
    }
    ngOnInit() {
        this.resetForm();
        this.service.getCategory().subscribe(list => {
            this.categorylist = list.map(item => {
                return Object.assign({}, item.payload.val());
            });
        });
    }
    //Displaying Image
    selectedImg(event) {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => this.url = e.target.result;
            reader.readAsDataURL(event.target.files[0]);
            this.image = event.target.files[0];
            //this.image=  reader.readAsDataURL(e.target.files[0]);
        }
        else {
            this.url = "./assets/image-holder.png";
            this.image = null;
        }
    }
    onSubmit(formValue) {
        var path = `Acccomodation/ ${this.image.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
        const fileRef = this.storage.ref(path);
        this.storage.upload(path, this.image).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
            fileRef.getDownloadURL().subscribe((url) => {
                formValue['imageUrl'] = url;
                console.log(formValue);
                this.service.addAccomodation(formValue);
                this.resetForm();
            });
        })).subscribe();
    }
    resetForm() {
        this.formTemplate.reset();
        this.formTemplate.setValue({
            BedType: '',
            AccomName: '',
            AccomDescription: '',
            Rooms: '',
            AccomPrice: '',
            imageUrl: ''
        });
        this.image = null;
        this.url = "./assets/image-holder.png";
    }
}
AddAccomoComponent.ɵfac = function AddAccomoComponent_Factory(t) { return new (t || AddAccomoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"])); };
AddAccomoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddAccomoComponent, selectors: [["app-add-accomo"]], decls: 20, vars: 2, consts: [[1, "container"], ["id", "contact", 3, "formGroup", "submit"], ["alt", "", 3, "src"], ["type", "file", "tabindex", "1", "required", "", "autofocus", "", 3, "change"], ["placeholder", "Enter Accomodation name", "type", "text", "formControlName", "AccomName", "required", "", "autofocus", ""], ["formControlName", "AccomDescription", "placeholder", "Enter Accomodation Description", "type", "text", "required", ""], ["formControlName", "BedType", "placeholder", "Enter Bed Type", "type", "text", "required", ""], ["formControlName", "Rooms", "placeholder", "Enter No of Rooms", "type", "text", "required", ""], ["formControlName", "AccomPrice", "placeholder", "Enter Accomodation Price", "type", "text", "tabindex", "4", "required", ""], ["name", "submit", "mat-raised-button", "", "type", "submit", "data-submit", "...Sending"]], template: function AddAccomoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AddAccomoComponent_Template_form_submit_1_listener() { return ctx.onSubmit(ctx.formTemplate.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add Accomodation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddAccomoComponent_Template_input_change_6_listener($event) { return ctx.selectedImg($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: ["@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,600,400italic);\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-font-smoothing: antialiased;\n  -o-font-smoothing: antialiased;\n  font-smoothing: antialiased;\n  text-rendering: optimizeLegibility;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 600px;\n  width: 100%;\n  margin: 0 auto;\n  position: relative;\n}\n#contact[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   input[type=tel][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   input[type=url][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%] {\n  font: 400 12px/16px \"Roboto\", Helvetica, Arial, sans-serif;\n}\nimg[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  float: left;\n}\n#contact[_ngcontent-%COMP%] {\n  background: #F9F9F9;\n  padding: 25px;\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\n}\n#contact[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 30px;\n  font-weight: 300;\n  margin-bottom: 10px;\n}\n#contact[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 5px 0 15px;\n  display: block;\n  font-size: 13px;\n  font-weight: 400;\n}\nfieldset[_ngcontent-%COMP%] {\n  border: medium none !important;\n  margin: 0 0 5px;\n  min-width: 100%;\n  padding: 0;\n  width: 100%;\n}\n#contact[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   input[type=tel][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #ccc;\n  background: #FFF;\n  margin: 0 0 5px;\n  padding: 10px;\n}\n#contact[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:hover, #contact[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]:hover, #contact[_ngcontent-%COMP%]   input[type=tel][_ngcontent-%COMP%]:hover, #contact[_ngcontent-%COMP%]   input[type=url][_ngcontent-%COMP%]:hover, #contact[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:hover {\n  transition: border-color 0.3s ease-in-out;\n  border: 1px solid #aaa;\n}\n#contact[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  height: 100px;\n  max-width: 100%;\n  resize: none;\n}\n#contact[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 100%;\n  border: none;\n  background-color: #44DCDE;\n  color: #FFF;\n  margin: 0 0 5px;\n  padding: 10px;\n  font-size: 15px;\n}\n#contact[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%]:hover {\n  background: #43A047;\n  transition: background-color 0.3s ease-in-out;\n}\n.copyright[_ngcontent-%COMP%] {\n  text-align: center;\n}\n#contact[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, #contact[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: 0;\n  border: 1px solid #aaa;\n}\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #888;\n}\n[_ngcontent-%COMP%]:-moz-placeholder {\n  color: #888;\n}\n[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #888;\n}\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #888;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhZGQtYWNjb21vLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLGlGQUFBO0FBQ1I7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7QUFDRjtBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQUY7QUFHQTs7Ozs7O0VBTUUsMERBQUE7QUFBRjtBQUVBO0VBRUUsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBQUY7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDBFQUFBO0FBQUY7QUFHQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUFGO0FBR0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFBRjtBQUdBO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQUY7QUFHQTs7Ozs7RUFLRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBQUY7QUFHQTs7Ozs7RUFPRSx5Q0FBQTtFQUNBLHNCQUFBO0FBQUY7QUFHQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUFGO0FBR0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFBRjtBQUdBO0VBQ0UsbUJBQUE7RUFHQSw2Q0FBQTtBQUFGO0FBS0E7RUFDRSxrQkFBQTtBQUZGO0FBS0E7O0VBRUUsVUFBQTtFQUNBLHNCQUFBO0FBRkY7QUFLQTtFQUNFLFdBQUE7QUFGRjtBQUtBO0VBQ0UsV0FBQTtBQUZGO0FBS0E7RUFDRSxXQUFBO0FBRkY7QUFLQTtFQUNFLFdBQUE7QUFGRiIsImZpbGUiOiJhZGQtYWNjb21vLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo0MDAsMzAwLDYwMCw0MDBpdGFsaWMpO1xyXG4qIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgLW1vei1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgLW8tZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIGZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xyXG59XHJcblxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNjb250YWN0IGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4jY29udGFjdCBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXHJcbiNjb250YWN0IGlucHV0W3R5cGU9XCJ0ZWxcIl0sXHJcbiNjb250YWN0IGlucHV0W3R5cGU9XCJ1cmxcIl0sXHJcbiNjb250YWN0IHRleHRhcmVhLFxyXG4jY29udGFjdCBidXR0b25bdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgZm9udDogNDAwIDEycHgvMTZweCBcIlJvYm90b1wiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcbmltZ1xyXG57XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbiNjb250YWN0IHtcclxuICBiYWNrZ3JvdW5kOiAjRjlGOUY5O1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcbn1cclxuXHJcbiNjb250YWN0IGgzIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4jY29udGFjdCBoNCB7XHJcbiAgbWFyZ2luOiA1cHggMCAxNXB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5maWVsZHNldCB7XHJcbiAgYm9yZGVyOiBtZWRpdW0gbm9uZSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMCAwIDVweDtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI2NvbnRhY3QgaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbiNjb250YWN0IGlucHV0W3R5cGU9XCJmaWxlXCJdLFxyXG4jY29udGFjdCBpbnB1dFt0eXBlPVwidGVsXCJdLFxyXG4jY29udGFjdCBpbnB1dFt0eXBlPVwibnVtYmVyXCJdLFxyXG4jY29udGFjdCB0ZXh0YXJlYSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBiYWNrZ3JvdW5kOiAjRkZGO1xyXG4gIG1hcmdpbjogMCAwIDVweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4jY29udGFjdCBpbnB1dFt0eXBlPVwidGV4dFwiXTpob3ZlcixcclxuI2NvbnRhY3QgaW5wdXRbdHlwZT1cImVtYWlsXCJdOmhvdmVyLFxyXG4jY29udGFjdCBpbnB1dFt0eXBlPVwidGVsXCJdOmhvdmVyLFxyXG4jY29udGFjdCBpbnB1dFt0eXBlPVwidXJsXCJdOmhvdmVyLFxyXG4jY29udGFjdCB0ZXh0YXJlYTpob3ZlciB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcyBlYXNlLWluLW91dDtcclxuICAtbW96LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XHJcbn1cclxuXHJcbiNjb250YWN0IHRleHRhcmVhIHtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICByZXNpemU6IG5vbmU7XHJcbn1cclxuXHJcbiNjb250YWN0IGJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NERDREU7XHJcbiAgY29sb3I6ICNGRkY7XHJcbiAgbWFyZ2luOiAwIDAgNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4jY29udGFjdCBidXR0b25bdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzQzQTA0NztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLWluLW91dDtcclxuICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcblxyXG5cclxuLmNvcHlyaWdodCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jY29udGFjdCBpbnB1dDpmb2N1cyxcclxuI2NvbnRhY3QgdGV4dGFyZWE6Zm9jdXMge1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcclxufVxyXG5cclxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogIzg4ODtcclxufVxyXG5cclxuOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjODg4O1xyXG59XHJcblxyXG46Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjODg4O1xyXG59XHJcblxyXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogIzg4ODtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddAccomoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-accomo',
                templateUrl: './add-accomo.component.html',
                styleUrls: ['./add-accomo.component.scss']
            }]
    }], function () { return [{ type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"] }, { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] }]; }, null); })();


/***/ }),

/***/ "XWge":
/*!****************************************************!*\
  !*** ./src/app/pages/sign-in/sign-in.component.ts ***!
  \****************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/firebase.service */ "Z2Br");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class SignInComponent {
    constructor(services, router) {
        this.services = services;
        this.router = router;
    }
    ngOnInit() {
        console.log("User" + localStorage.getItem('user'));
    }
    loging(email, password) {
        this.services.sign(email, password);
    }
    logout() {
        console.log(localStorage.getItem('admins'));
    }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["app-sign-in"]], decls: 23, vars: 0, consts: [[1, "wrapper"], [1, "container"], [1, "col-left"], [1, "login-text"], [1, "col-right"], [1, "login-form"], ["type", "email", "placeholder", "Username or Email", "required", ""], ["email", ""], ["type", "password", "placeholder", "Password", "required", ""], ["password", ""], ["type", "submit", "value", "Sing In", 3, "click"], [3, "click"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Welcome Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Rams Hotel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_Template_input_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return ctx.loging(_r0.value, _r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_21_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Hello");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]], styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  color: #666666;\n  background: #eaeff4;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 100%;\n  max-width: 1140px;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 600px;\n  height: auto;\n  display: flex;\n  background: #ffffff;\n  box-shadow: 0 0 5px #999999;\n}\n\n.credit[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 25px auto 0 auto;\n  width: 100%;\n  text-align: center;\n  color: #666666;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.credit[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #222222;\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.col-left[_ngcontent-%COMP%], .col-right[_ngcontent-%COMP%] {\n  padding: 30px;\n  display: flex;\n}\n\n.col-left[_ngcontent-%COMP%] {\n  width: 60%;\n  -webkit-clip-path: polygon(0 0, 0% 100%, 100% 0);\n  clip-path: polygon(0 0, 0% 100%, 100% 0);\n  background: #44c7f5;\n}\n\n.col-right[_ngcontent-%COMP%] {\n  padding: 60px 30px;\n  width: 50%;\n  margin-left: -10%;\n}\n\n@media (max-width: 575.98px) {\n  .container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    box-shadow: none;\n  }\n\n  .col-left[_ngcontent-%COMP%], .col-right[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0;\n    -webkit-clip-path: none;\n    clip-path: none;\n  }\n\n  .col-right[_ngcontent-%COMP%] {\n    padding: 30px;\n  }\n}\n\n.login-text[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  color: #ffffff;\n}\n\n.login-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 15px 0;\n  font-size: 30px;\n  font-weight: 700;\n}\n\n.login-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 22px;\n}\n\n.login-text[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 7px 20px;\n  font-size: 16px;\n  letter-spacing: 1px;\n  text-decoration: none;\n  border-radius: 30px;\n  color: #ffffff;\n  outline: none;\n  border: 1px solid #ffffff;\n  box-shadow: inset 0 0 0 0 #ffffff;\n  transition: 0.3s;\n  -webkit-transition: 0.3s;\n}\n\n.login-text[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  color: #44c7f5;\n  box-shadow: inset 150px 0 0 0 #ffffff;\n}\n\n.login-form[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n\n.login-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 15px 0;\n  font-size: 22px;\n  font-weight: 700;\n}\n\n.login-form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 10px 0;\n  text-align: left;\n  color: #666666;\n  font-size: 15px;\n}\n\n.login-form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin: 0;\n  padding-top: 3px;\n}\n\n.login-form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #44c7f5;\n  font-size: 14px;\n  text-decoration: none;\n}\n\n.login-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin-bottom: 2px;\n  letter-spacing: 0.5px;\n}\n\n.login-form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child   label[_ngcontent-%COMP%] {\n  width: 60%;\n  float: left;\n}\n\n.login-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ff574e;\n  padding-left: 2px;\n}\n\n.login-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 35px;\n  padding: 0 10px;\n  outline: none;\n  border: 1px solid #cccccc;\n  border-radius: 30px;\n}\n\n.login-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #ff574e;\n}\n\n.login-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .login-form[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  margin-top: 5px;\n  color: #44c7f5;\n  font-size: 16px;\n  letter-spacing: 1px;\n  cursor: pointer;\n  background: transparent;\n  border: 1px solid #44c7f5;\n  border-radius: 30px;\n  box-shadow: inset 0 0 0 0 #44c7f5;\n  transition: 0.3s;\n  -webkit-transition: 0.3s;\n}\n\n.login-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .login-form[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n  box-shadow: inset 250px 0 0 0 #44c7f5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWduLWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTs7RUFFRSxhQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLGdEQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSxnQkFBQTtFQUNGOztFQUVBOztJQUVFLFdBQUE7SUFDQSxTQUFBO0lBQ0EsdUJBQUE7SUFDQSxlQUFBO0VBQ0Y7O0VBRUE7SUFDRSxhQUFBO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxxQ0FBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxxQkFBQTtBQUFGOztBQUdBOztFQUVFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQUFGOztBQUdBOztFQUVFLGNBQUE7RUFDQSxxQ0FBQTtBQUFGIiwiZmlsZSI6InNpZ24taW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqLFxyXG4qOjpiZWZvcmUsXHJcbio6OmFmdGVyIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICM2NjY2NjY7XHJcbiAgYmFja2dyb3VuZDogI2VhZWZmNDtcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTE0MHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggIzk5OTk5OTtcclxufVxyXG5cclxuLmNyZWRpdCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMjVweCBhdXRvIDAgYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICM2NjY2NjY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5jcmVkaXQgYSB7XHJcbiAgY29sb3I6ICMyMjIyMjI7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5jb2wtbGVmdCxcclxuLmNvbC1yaWdodCB7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uY29sLWxlZnQge1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAwJSAxMDAlLCAxMDAlIDApO1xyXG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDAlIDEwMCUsIDEwMCUgMCk7XHJcbiAgYmFja2dyb3VuZDogIzQ0YzdmNTtcclxufVxyXG5cclxuLmNvbC1yaWdodCB7XHJcbiAgcGFkZGluZzogNjBweCAzMHB4O1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xMCU7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDU3NS45OHB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcblxyXG4gIC5jb2wtbGVmdCxcclxuICAuY29sLXJpZ2h0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgLXdlYmtpdC1jbGlwLXBhdGg6IG5vbmU7XHJcbiAgICBjbGlwLXBhdGg6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuY29sLXJpZ2h0IHtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9naW4tdGV4dCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4ubG9naW4tdGV4dCBoMiB7XHJcbiAgbWFyZ2luOiAwIDAgMTVweCAwO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4ubG9naW4tdGV4dCBwIHtcclxuICBtYXJnaW46IDAgMCAyMHB4IDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbn1cclxuXHJcbi5sb2dpbi10ZXh0IC5idG4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiA3cHggMjBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMCAjZmZmZmZmO1xyXG4gIHRyYW5zaXRpb246IC4zcztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC4zcztcclxufVxyXG5cclxuLmxvZ2luLXRleHQgLmJ0bjpob3ZlciB7XHJcbiAgY29sb3I6ICM0NGM3ZjU7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMTUwcHggMCAwIDAgI2ZmZmZmZjtcclxufVxyXG5cclxuLmxvZ2luLWZvcm0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmxvZ2luLWZvcm0gaDIge1xyXG4gIG1hcmdpbjogMCAwIDE1cHggMDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmxvZ2luLWZvcm0gcCB7XHJcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6ICM2NjY2NjY7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4ubG9naW4tZm9ybSBwOmxhc3QtY2hpbGQge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nLXRvcDogM3B4O1xyXG59XHJcblxyXG4ubG9naW4tZm9ybSBwIGEge1xyXG4gIGNvbG9yOiAjNDRjN2Y1O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtIGxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtIHA6bGFzdC1jaGlsZCBsYWJlbCB7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmxvZ2luLWZvcm0gbGFiZWwgc3BhbiB7XHJcbiAgY29sb3I6ICNmZjU3NGU7XHJcbiAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtIGlucHV0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG59XHJcblxyXG4ubG9naW4tZm9ybSBpbnB1dDpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmY1NzRlO1xyXG59XHJcblxyXG4ubG9naW4tZm9ybSBidXR0b24sXHJcbi5sb2dpbi1mb3JtIGlucHV0W3R5cGU9c3VibWl0XSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBjb2xvcjogIzQ0YzdmNTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ0YzdmNTtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDAgIzQ0YzdmNTtcclxuICB0cmFuc2l0aW9uOiAuM3M7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuM3M7XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtIGJ1dHRvbjpob3ZlcixcclxuLmxvZ2luLWZvcm0gaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBib3gtc2hhZG93OiBpbnNldCAyNTBweCAwIDAgMCAjNDRjN2Y1O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sign-in',
                templateUrl: './sign-in.component.html',
                styleUrls: ['./sign-in.component.scss']
            }]
    }], function () { return [{ type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "XpNN":
/*!******************************************************!*\
  !*** ./src/app/Admin/b-dialog/b-dialog.component.ts ***!
  \******************************************************/
/*! exports provided: BDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BDialogComponent", function() { return BDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/firebase.service */ "Z2Br");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










class BDialogComponent {
    constructor(service) {
        this.service = service;
        this.formTemplate = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            roomNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    ngOnInit() {
    }
    onSubmit(formValue) {
        this.service.updateBooking(formValue);
    }
}
BDialogComponent.ɵfac = function BDialogComponent_Factory(t) { return new (t || BDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"])); };
BDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BDialogComponent, selectors: [["app-b-dialog"]], decls: 18, vars: 1, consts: [[1, "example-container"], [3, "formGroup", "submit"], ["formControlName", "roomNumber", "matInput", "", "placeholder", "Room number"], ["appearance", "fill"], ["formControlName", "status"], ["value", "Confirm"], ["value", "Checked In"], ["name", "submit", "mat-raised-button", "", "color", "primary"]], template: function BDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function BDialogComponent_Template_form_submit_1_listener() { return ctx.onSubmit(ctx.formTemplate.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Enter Room number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cornfirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Check IN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formTemplate);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-b-dialog',
                templateUrl: './b-dialog.component.html',
                styleUrls: ['./b-dialog.component.scss']
            }]
    }], function () { return [{ type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] }]; }, null); })();


/***/ }),

/***/ "Yc5A":
/*!****************************************************************!*\
  !*** ./src/app/Admin/order-details/order-details.component.ts ***!
  \****************************************************************/
/*! exports provided: OrderDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsComponent", function() { return OrderDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/firebase.service */ "Z2Br");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");








function OrderDetailsComponent_mat_header_cell_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Food Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrderDetailsComponent_mat_cell_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r8.productName);
} }
function OrderDetailsComponent_mat_header_cell_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrderDetailsComponent_mat_cell_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r9.quantity);
} }
function OrderDetailsComponent_mat_header_cell_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrderDetailsComponent_mat_cell_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r10.productPrice);
} }
function OrderDetailsComponent_mat_header_row_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
} }
function OrderDetailsComponent_mat_row_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
} }
const _c0 = function () { return [5, 10, 25, 100]; };
class OrderDetailsComponent {
    constructor(_route, service) {
        this._route = _route;
        this.service = service;
        this.displayedColumns = ['Food Name', 'Quantity', 'Price'];
    }
    ngOnInit() {
        this.Ref = this._route.snapshot.paramMap.get('ref');
        console.log(this.Ref);
        this.price = this.service.total;
        this.foods = this.service.orderfoods;
        this.room = this.service.room;
        this.status = this.service.status;
        this.names = this.service.names;
        console.log("total" + this.price);
        console.log(this.foods);
        this.ListData = this.foods;
    }
}
OrderDetailsComponent.ɵfac = function OrderDetailsComponent_Factory(t) { return new (t || OrderDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"])); };
OrderDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderDetailsComponent, selectors: [["app-order-details"]], decls: 27, vars: 11, consts: [[1, "header"], [2, "background", "rgb(44, 62, 80)", "color", "white"], [2, "background", "rgb(149, 165, 166)", "color", "white"], [2, "background", "rgb(236, 240, 241)", "color", "white"], [1, "mat-elevation-z8"], ["matSort", "", 3, "dataSource"], ["matColumnDef", "Food Name"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "Quantity"], ["matColumnDef", "Price"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "length", "pageSize", "pageSizeOptions"], ["mat-sort-header", ""]], template: function OrderDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, OrderDetailsComponent_mat_header_cell_16_Template, 2, 0, "mat-header-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, OrderDetailsComponent_mat_cell_17_Template, 2, 1, "mat-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, OrderDetailsComponent_mat_header_cell_19_Template, 2, 0, "mat-header-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, OrderDetailsComponent_mat_cell_20_Template, 2, 1, "mat-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, OrderDetailsComponent_mat_header_cell_22_Template, 2, 0, "mat-header-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, OrderDetailsComponent_mat_cell_23_Template, 2, 1, "mat-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, OrderDetailsComponent_mat_header_row_24_Template, 1, 0, "mat-header-row", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, OrderDetailsComponent_mat_row_25_Template, 1, 0, "mat-row", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-paginator", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total ", ctx.price, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Room Number ", ctx.room, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Names ", ctx.names, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Status ", ctx.status, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.ListData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", 100)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]], styles: [".hide[_ngcontent-%COMP%] {\n  display: none;\n}\n\nmat-footer-row-footer-cell[_ngcontent-%COMP%] {\n  justify-content: center;\n  font-style: italic;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  margin-bottom: 1%;\n  width: 25%;\n  float: left;\n  margin-right: 1%;\n}\n\n.header[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxvcmRlci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsYUFBQTtBQUFGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUNBO0VBRUUsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFFRSxXQUFBO0VBQ0EsYUFBQTtBQUNGIiwiZmlsZSI6Im9yZGVyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZVxyXG57XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5tYXQtZm9vdGVyLXJvdy1mb290ZXItY2VsbHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxubWF0LWNhcmRcclxue1xyXG4gIG1hcmdpbi1ib3R0b206IDElO1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxJTtcclxufVxyXG4uaGVhZGVyXHJcbntcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-order-details',
                templateUrl: './order-details.component.html',
                styleUrls: ['./order-details.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] }]; }, null); })();


/***/ }),

/***/ "Z2Br":
/*!**********************************************!*\
  !*** ./src/app/services/firebase.service.ts ***!
  \**********************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");







class FirebaseService {
    constructor(firbaseAuth, router, base, toastr) {
        this.firbaseAuth = firbaseAuth;
        this.router = router;
        this.base = base;
        this.toastr = toastr;
        this.isLoggedIn = false;
        //form Bookings
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            uid: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            roomNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('')
        });
    }
    sign(email, password) {
        return this.firbaseAuth.signInWithEmailAndPassword(email, password)
            .then(res => {
            this.isLoggedIn = true;
            localStorage.setItem('user', JSON.stringify(res.user));
            this.router.navigate(["test"]);
            console.log("hello");
        }).catch(err => {
            console.log(err);
        });
    }
    state() {
        if (this.isLoggedIn == true) {
            return true;
        }
        else {
            false;
        }
    }
    //View clients
    clients() {
        this.comstomerList = this.base.list('Users');
        return this.comstomerList.snapshotChanges();
    }
    logout() {
        this.firbaseAuth.signOut();
        localStorage.removeItem('user');
    }
    //get Category list from firibase
    getCategory() {
        this.categortList = this.base.list('Category');
        return this.categortList.snapshotChanges();
    }
    getOrdersDeatails(ref) {
        this.OrderList = this.base.list('Order');
        this.base.database.ref('Orders').child(ref);
        return this.OrderList.snapshotChanges();
    }
    getFood() {
        this.food = this.base.list('Food');
        return this.food.snapshotChanges();
    }
    ///funtion to et orders
    getOrders() {
        this.OrderList = this.base.list('Orders');
        return this.OrderList.snapshotChanges();
    }
    getAcccomodation() {
        this.AccomodationList = this.base.list('Accomodations');
        return this.AccomodationList.snapshotChanges();
    }
    addActivity(data) {
        this.base.database.ref('Activity').push(data);
        this.toastr.success('Added Successfully', 'Activity!');
    }
    getActivity() {
        this.activityList = this.base.list('Activity');
        return this.activityList.snapshotChanges();
    }
    deleteAccodation($ke) {
        this.AccomodationList.remove($ke);
        this.toastr.error("Deleted Successfully", 'Accomodation');
    }
    deleteBookings($ke) {
        this.bookingsList.remove($ke);
        this.toastr.error("Deleted Successfully", 'Bookings');
    }
    deleteMeal($ke) {
        this.food.remove($ke);
        this.toastr.error("Deleted Successfully", 'Meal');
    }
    deleteOrder($ke) {
        this.OrderList.remove($ke);
        this.toastr.error("Deleted Successfully", 'Order');
    }
    deleteCategory($ke) {
        this.categortList.remove($ke);
        this.toastr.error("Deleted Successfully", 'Gategory');
    }
    deleteActivity($ke) {
        this.activityList.remove($ke);
        this.toastr.error("Deleted Successfully", 'Activity');
    }
    getorders(t, f, e, s, a) {
        this.orderfoods = f;
        this.total = t;
        this.names = e;
        this.status = s;
        this.room = a;
    }
    populate(date) {
        this.bookKey = date;
    }
    populateOrder(date) {
        this.OrderNum = date;
    }
    updateOrder(data) {
        this.OrderList = this.base.list('Orders');
        this.OrderList.update(this.OrderNum, {
            'status': data['status'],
        });
    }
    updateBooking(data) {
        //this.base.update(this.bookKey,{data});
        this.bookingsList = this.base.list('Bookings');
        this.bookingsList.update(this.bookKey, {
            'status': data['status'],
            'roomNumber': data['roomNumber']
        });
    }
    getBookings() {
        this.bookingsList = this.base.list('Bookings');
        return this.bookingsList.snapshotChanges();
    }
    // ading new category
    addCategory(imageData) {
        this.base.database.ref('Category').push(imageData);
    }
    addAccomodation(Data) {
        this.base.database.ref('Accomodations').push(Data);
        this.toastr.success('Added Sucsessfully ', "Accomodation");
    }
    addFood(Data) {
        this.base.database.ref('Food').push(Data);
        this.toastr.success('Added Sucsessfully ', "Meal");
    }
}
FirebaseService.ɵfac = function FirebaseService_Factory(t) { return new (t || FirebaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"])); };
FirebaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FirebaseService, factory: FirebaseService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FirebaseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../environments/environment */ "AytR");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/firebase.service */ "Z2Br");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _pages_default_default_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/default/default.module */ "g2r3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/sign-in/sign-in.component */ "XWge");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _pages_test_test_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/test/test.component */ "lEda");
/* harmony import */ var _Admin_category_category_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Admin/category/category.component */ "OJu0");
/* harmony import */ var _Admin_addmeal_addmeal_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Admin/addmeal/addmeal.component */ "FFhZ");
/* harmony import */ var _Admin_add_accomo_add_accomo_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Admin/add-accomo/add-accomo.component */ "X3Yu");
/* harmony import */ var _Admin_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Admin/bookings/bookings.component */ "/tGU");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _Admin_b_dialog_b_dialog_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Admin/b-dialog/b-dialog.component */ "XpNN");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _Admin_orders_orders_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Admin/orders/orders.component */ "EEwM");
/* harmony import */ var _Admin_view_food_view_food_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Admin/view-food/view-food.component */ "ec2y");
/* harmony import */ var _Admin_view_accomo_view_accomo_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Admin/view-accomo/view-accomo.component */ "2cBE");
/* harmony import */ var _Admin_addactivity_addactivity_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Admin/addactivity/addactivity.component */ "3cDd");
/* harmony import */ var _Admin_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Admin/order-details/order-details.component */ "Yc5A");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _Admin_odialog_odialog_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./Admin/odialog/odialog.component */ "upx7");







































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
            _pages_default_default_module__WEBPACK_IMPORTED_MODULE_6__["DefaultModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_19__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].firebase),
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabaseModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__["AngularFireStorageModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__["MatPaginatorModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__["MatSortModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_28__["MatSelectModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_34__["ToastrModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"],
        _pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_18__["SignInComponent"],
        _pages_test_test_component__WEBPACK_IMPORTED_MODULE_20__["TestComponent"],
        _Admin_category_category_component__WEBPACK_IMPORTED_MODULE_21__["CategoryComponent"],
        _Admin_addmeal_addmeal_component__WEBPACK_IMPORTED_MODULE_22__["AddmealComponent"],
        _Admin_add_accomo_add_accomo_component__WEBPACK_IMPORTED_MODULE_23__["AddAccomoComponent"],
        _Admin_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_24__["BookingsComponent"],
        _Admin_b_dialog_b_dialog_component__WEBPACK_IMPORTED_MODULE_27__["BDialogComponent"],
        _Admin_orders_orders_component__WEBPACK_IMPORTED_MODULE_29__["OrdersComponent"],
        _Admin_view_food_view_food_component__WEBPACK_IMPORTED_MODULE_30__["ViewFoodComponent"],
        _Admin_view_accomo_view_accomo_component__WEBPACK_IMPORTED_MODULE_31__["ViewAccomoComponent"],
        _Admin_addactivity_addactivity_component__WEBPACK_IMPORTED_MODULE_32__["AddactivityComponent"],
        _Admin_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_33__["OrderDetailsComponent"],
        _Admin_odialog_odialog_component__WEBPACK_IMPORTED_MODULE_35__["OdialogComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
        _pages_default_default_module__WEBPACK_IMPORTED_MODULE_6__["DefaultModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_19__["AngularFireModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabaseModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__["AngularFireStorageModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__["MatSortModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_28__["MatSelectModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_34__["ToastrModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"],
                    _pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_18__["SignInComponent"],
                    _pages_test_test_component__WEBPACK_IMPORTED_MODULE_20__["TestComponent"],
                    _Admin_category_category_component__WEBPACK_IMPORTED_MODULE_21__["CategoryComponent"],
                    _Admin_addmeal_addmeal_component__WEBPACK_IMPORTED_MODULE_22__["AddmealComponent"],
                    _Admin_add_accomo_add_accomo_component__WEBPACK_IMPORTED_MODULE_23__["AddAccomoComponent"],
                    _Admin_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_24__["BookingsComponent"],
                    _Admin_b_dialog_b_dialog_component__WEBPACK_IMPORTED_MODULE_27__["BDialogComponent"],
                    _Admin_orders_orders_component__WEBPACK_IMPORTED_MODULE_29__["OrdersComponent"],
                    _Admin_view_food_view_food_component__WEBPACK_IMPORTED_MODULE_30__["ViewFoodComponent"],
                    _Admin_view_accomo_view_accomo_component__WEBPACK_IMPORTED_MODULE_31__["ViewAccomoComponent"],
                    _Admin_addactivity_addactivity_component__WEBPACK_IMPORTED_MODULE_32__["AddactivityComponent"],
                    _Admin_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_33__["OrderDetailsComponent"],
                    _Admin_odialog_odialog_component__WEBPACK_IMPORTED_MODULE_35__["OdialogComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
                    _pages_default_default_module__WEBPACK_IMPORTED_MODULE_6__["DefaultModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_19__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].firebase),
                    _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabaseModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"],
                    _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__["AngularFireStorageModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__["MatPaginatorModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__["MatSortModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_28__["MatSelectModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_34__["ToastrModule"].forRoot(),
                ],
                providers: [_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]],
                entryComponents: [_Admin_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_24__["BookingsComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "aF9I":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "aZ8m":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "STbY");







class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 35, vars: 1, consts: [["mat-icon-button", ""], ["fxFlex", "", "fxLayout", "row", "fxLayoutAlign", "flex-end"], ["fxLayout", "row", "fxLayoutGap", "20px"], ["mat-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Rams Hotel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "help_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "person_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-menu", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " LogOut ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuItem"]], styles: ["ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsZ0JBQUE7QUFBRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCBsaVxyXG57XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ec2y":
/*!********************************************************!*\
  !*** ./src/app/Admin/view-food/view-food.component.ts ***!
  \********************************************************/
/*! exports provided: ViewFoodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewFoodComponent", function() { return ViewFoodComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/firebase.service */ "Z2Br");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");







function ViewFoodComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewFoodComponent_mat_card_0_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.remove(item_r1.$key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1.foodName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Category ", item_r1.categoryName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.foodDescription, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Price R", item_r1.foodPrice, "");
} }
class ViewFoodComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.service.getFood().subscribe(list => {
            this.foodlist = list.map(item => {
                return Object.assign({ $key: item.key }, item.payload.val());
            });
        });
    }
    remove(key) {
        if (confirm('Are you sure u wanna delete')) {
            this.service.deleteMeal(key);
        }
    }
}
ViewFoodComponent.ɵfac = function ViewFoodComponent_Factory(t) { return new (t || ViewFoodComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"])); };
ViewFoodComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewFoodComponent, selectors: [["app-view-food"]], decls: 1, vars: 1, consts: [["class", "example-card", 4, "ngFor", "ngForOf"], [1, "example-card"], ["mat-card-image", "", "alt", "Photo of a Shiba Inu", 3, "src"], ["mat-button", "", "mat-icon-button", "", "color", "warn", 3, "click"]], template: function ViewFoodComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ViewFoodComponent_mat_card_0_Template, 16, 5, "mat-card", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.foodlist);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]], styles: [".example-card[_ngcontent-%COMP%] {\n  width: 27%;\n  float: left;\n  margin: 1%;\n  height: 400px;\n}\n\nimg[_ngcontent-%COMP%] {\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2aWV3LWZvb2QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBQ0E7RUFFRSxhQUFBO0FBQ0YiLCJmaWxlIjoidmlldy1mb29kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZCB7XHJcbiAgd2lkdGg6IDI3JTtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW46IDElO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbn1cclxuaW1nXHJcbntcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewFoodComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-food',
                templateUrl: './view-food.component.html',
                styleUrls: ['./view-food.component.scss']
            }]
    }], function () { return [{ type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"] }]; }, null); })();


/***/ }),

/***/ "g2r3":
/*!*************************************************!*\
  !*** ./src/app/pages/default/default.module.ts ***!
  \*************************************************/
/*! exports provided: DefaultModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultModule", function() { return DefaultModule; });
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _Admin_clients_clients_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../Admin/clients/clients.component */ "pkzz");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../Admin/dashboard/dashboard.component */ "oEUC");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./default.component */ "FIw4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");















class DefaultModule {
}
DefaultModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: DefaultModule });
DefaultModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ factory: function DefaultModule_Factory(t) { return new (t || DefaultModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_0__["MatInputModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](DefaultModule, { declarations: [_default_component__WEBPACK_IMPORTED_MODULE_8__["DefaultComponent"],
        _Admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
        _Admin_clients_clients_component__WEBPACK_IMPORTED_MODULE_4__["ClientsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_0__["MatInputModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](DefaultModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"],
        args: [{
                declarations: [
                    _default_component__WEBPACK_IMPORTED_MODULE_8__["DefaultComponent"],
                    _Admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                    _Admin_clients_clients_component__WEBPACK_IMPORTED_MODULE_4__["ClientsComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_0__["MatInputModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "lEda":
/*!**********************************************!*\
  !*** ./src/app/pages/test/test.component.ts ***!
  \**********************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TestComponent {
    constructor() { }
    ngOnInit() {
    }
}
TestComponent.ɵfac = function TestComponent_Factory(t) { return new (t || TestComponent)(); };
TestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestComponent, selectors: [["app-test"]], decls: 2, vars: 0, template: function TestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "test works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-test',
                templateUrl: './test.component.html',
                styleUrls: ['./test.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "oEUC":
/*!********************************************************!*\
  !*** ./src/app/Admin/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/firebase.service */ "Z2Br");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");





class DashboardComponent {
    constructor(router, services) {
        this.router = router;
        this.services = services;
    }
    ngOnInit() {
        this.isSigned = false;
        if (localStorage.getItem('admin') !== null) {
            this.isSigned = true;
        }
        this.services.getCategory().subscribe(list => {
            this.categorylist = list.map(item => {
                return Object.assign({}, item.payload.val());
            });
        });
        this.cat = this.categorylist;
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 85, vars: 0, consts: [[1, "container"], [1, "row"], [1, "stati", "turquoise"], [1, "icon-exclamation", "icons"], [1, "stati", "bg-clouds", "left"], [1, "icon-briefcase", "icons"], [1, "stati", "bg-silver"], [1, "icon-question", "icons"], [1, "stati", "bg-concrete", "left"], [1, "icon-bag", "icons"], [1, "stati", "bg-wet_asphalt"], [1, "icon-screen-tablet", "icons"], [1, "stati", "bg-sun_flower"], [1, "icon-globe", "icons"], [1, "stati", "bg-peter_river"], [1, "icon-energy", "icons"], [1, "stati", "bg-amethyst"], [1, "icon-crop", "icons"], [1, "stati", "bg-turquoise"], [1, "icon-trophy", "icons"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "clients ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Ramaila");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "hotel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "55");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Resevertions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "room_service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "74");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Orders ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "59");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "bg-concrete left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "18");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "bg-wet_asphalt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "42");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "bg-sun_flower");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "restaurant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Foods");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "fastfood");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "bg-turquoise");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: [".example-card[_ngcontent-%COMP%] {\n  width: 27%;\n  float: left;\n  margin: 1%;\n}\n\n.row[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nbody[_ngcontent-%COMP%] {\n  background: url(\"http://rybd.com/wp-content/uploads/2014/12/blue-polygon.png\");\n}\n\nh1[_ngcontent-%COMP%] {\n  color: white;\n  margin-top: 2em;\n}\n\np[_ngcontent-%COMP%] {\n  color: white;\n}\n\n\n\n.stati[_ngcontent-%COMP%] {\n  background: #fff;\n  height: 6em;\n  padding: 1em;\n  margin: 1em 0;\n  width: 20%;\n  margin: 2%;\n  float: left !important;\n  \n  transition: margin 0.5s ease, box-shadow 0.5s ease;\n  box-shadow: 0px 0.2em 0.4em rgba(0, 0, 0, 0.8);\n}\n\n.stati[_ngcontent-%COMP%]:hover {\n  margin-top: 0.5em;\n  box-shadow: 0px 0.4em 0.5em rgba(0, 0, 0, 0.8);\n}\n\n.stati[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 100px;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n  font-size: 50px;\n}\n\n.stati[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: calc(100% - 3.5em);\n  display: block;\n  float: right;\n  text-align: right;\n}\n\n.stati[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 2.2em;\n  width: 100%;\n  padding-top: 0px;\n  margin-top: -0.2em;\n  margin-bottom: -0.2em;\n  display: block;\n}\n\n.stati.left[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  float: left;\n  text-align: left;\n}\n\n.stati.bg-turquoise[_ngcontent-%COMP%] {\n  background: #1abc9c;\n  color: white;\n}\n\n.stati.bg-emerald[_ngcontent-%COMP%] {\n  background: #2ecc71;\n  color: white;\n}\n\n.stati.bg-peter_river[_ngcontent-%COMP%] {\n  background: #3498db;\n  color: white;\n}\n\n.stati.bg-amethyst[_ngcontent-%COMP%] {\n  background: #9b59b6;\n  color: white;\n}\n\n.stati.bg-wet_asphalt[_ngcontent-%COMP%] {\n  background: #34495e;\n  color: white;\n}\n\n.stati.bg-green_sea[_ngcontent-%COMP%] {\n  background: #16a085;\n  color: white;\n}\n\n.stati.bg-nephritis[_ngcontent-%COMP%] {\n  background: #27ae60;\n  color: white;\n}\n\n.stati.bg-belize_hole[_ngcontent-%COMP%] {\n  background: #2980b9;\n  color: white;\n}\n\n.stati.bg-wisteria[_ngcontent-%COMP%] {\n  background: #8e44ad;\n  color: white;\n}\n\n.stati.bg-midnight_blue[_ngcontent-%COMP%] {\n  background: #2c3e50;\n  color: white;\n}\n\n.stati.bg-sun_flower[_ngcontent-%COMP%] {\n  background: #f1c40f;\n  color: white;\n}\n\n.stati.bg-carrot[_ngcontent-%COMP%] {\n  background: #e67e22;\n  color: white;\n}\n\n.stati.bg-alizarin[_ngcontent-%COMP%] {\n  background: #e74c3c;\n  color: white;\n}\n\n.stati.bg-clouds[_ngcontent-%COMP%] {\n  background: #ecf0f1;\n  color: white;\n}\n\n.stati.bg-concrete[_ngcontent-%COMP%] {\n  background: #95a5a6;\n  color: white;\n}\n\n.stati.bg-orange[_ngcontent-%COMP%] {\n  background: #f39c12;\n  color: white;\n}\n\n.stati.bg-pumpkin[_ngcontent-%COMP%] {\n  background: #d35400;\n  color: white;\n}\n\n.stati.bg-pomegranate[_ngcontent-%COMP%] {\n  background: #c0392b;\n  color: white;\n}\n\n.stati.bg-silver[_ngcontent-%COMP%] {\n  background: #bdc3c7;\n  color: white;\n}\n\n.stati.bg-asbestos[_ngcontent-%COMP%] {\n  background: #7f8c8d;\n  color: white;\n}\n\n.stati.turquoise[_ngcontent-%COMP%] {\n  color: #1abc9c;\n}\n\n.stati.emerald[_ngcontent-%COMP%] {\n  color: #2ecc71;\n}\n\n.stati.peter_river[_ngcontent-%COMP%] {\n  color: #3498db;\n}\n\n.stati.amethyst[_ngcontent-%COMP%] {\n  color: #9b59b6;\n}\n\n.stati.wet_asphalt[_ngcontent-%COMP%] {\n  color: #34495e;\n}\n\n.stati.green_sea[_ngcontent-%COMP%] {\n  color: #16a085;\n}\n\n.stati.nephritis[_ngcontent-%COMP%] {\n  color: #27ae60;\n}\n\n.stati.belize_hole[_ngcontent-%COMP%] {\n  color: #2980b9;\n}\n\n.stati.wisteria[_ngcontent-%COMP%] {\n  color: #8e44ad;\n}\n\n.stati.midnight_blue[_ngcontent-%COMP%] {\n  color: #2c3e50;\n}\n\n.stati.sun_flower[_ngcontent-%COMP%] {\n  color: #f1c40f;\n}\n\n.stati.carrot[_ngcontent-%COMP%] {\n  color: #e67e22;\n}\n\n.stati.alizarin[_ngcontent-%COMP%] {\n  color: #e74c3c;\n}\n\n.stati.clouds[_ngcontent-%COMP%] {\n  color: #ecf0f1;\n}\n\n.stati.concrete[_ngcontent-%COMP%] {\n  color: #95a5a6;\n}\n\n.stati.orange[_ngcontent-%COMP%] {\n  color: #f39c12;\n}\n\n.stati.pumpkin[_ngcontent-%COMP%] {\n  color: #d35400;\n}\n\n.stati.pomegranate[_ngcontent-%COMP%] {\n  color: #c0392b;\n}\n\n.stati.silver[_ngcontent-%COMP%] {\n  color: #bdc3c7;\n}\n\n.stati.asbestos[_ngcontent-%COMP%] {\n  color: #7f8c8d;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: grid;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBRUEsV0FBQTtFQUNGLFVBQUE7QUFBQTs7QUFHQTtFQUVFLFdBQUE7QUFERjs7QUFLQTtFQUNFLDhFQUFBO0FBRkY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQURGOztBQUdBO0VBQ0UsWUFBQTtBQUFGOztBQUdBOzs7OytCQUFBOztBQUtBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQzZELFdBQUE7RUFDM0Qsa0RBQUE7RUFHSiw4Q0FBQTtBQUNBOztBQUNBO0VBQ0UsaUJBQUE7RUFHRiw4Q0FBQTtBQUVBOztBQUFBO0VBQ0UsZ0JBQUE7QUFHRjs7QUFBQTtFQUNFLGVBQUE7QUFHRjs7QUFEQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUlGOztBQUZBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQUtGOztBQURBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBSUY7O0FBREE7RUFBc0IsbUJBQUE7RUFBK0IsWUFBQTtBQU1yRDs7QUFMQTtFQUFvQixtQkFBQTtFQUErQixZQUFBO0FBVW5EOztBQVRBO0VBQXdCLG1CQUFBO0VBQStCLFlBQUE7QUFjdkQ7O0FBYkE7RUFBcUIsbUJBQUE7RUFBK0IsWUFBQTtBQWtCcEQ7O0FBakJBO0VBQXdCLG1CQUFBO0VBQTZCLFlBQUE7QUFzQnJEOztBQXJCQTtFQUFzQixtQkFBQTtFQUErQixZQUFBO0FBMEJyRDs7QUF6QkE7RUFBc0IsbUJBQUE7RUFBOEIsWUFBQTtBQThCcEQ7O0FBN0JBO0VBQXdCLG1CQUFBO0VBQStCLFlBQUE7QUFrQ3ZEOztBQWpDQTtFQUFxQixtQkFBQTtFQUErQixZQUFBO0FBc0NwRDs7QUFyQ0E7RUFBMEIsbUJBQUE7RUFBNkIsWUFBQTtBQTBDdkQ7O0FBekNBO0VBQXVCLG1CQUFBO0VBQStCLFlBQUE7QUE4Q3REOztBQTdDQTtFQUFtQixtQkFBQTtFQUErQixZQUFBO0FBa0RsRDs7QUFqREE7RUFBcUIsbUJBQUE7RUFBOEIsWUFBQTtBQXNEbkQ7O0FBckRBO0VBQW1CLG1CQUFBO0VBQWdDLFlBQUE7QUEwRG5EOztBQXpEQTtFQUFxQixtQkFBQTtFQUFnQyxZQUFBO0FBOERyRDs7QUE3REE7RUFBbUIsbUJBQUE7RUFBK0IsWUFBQTtBQWtFbEQ7O0FBakVBO0VBQW9CLG1CQUFBO0VBQTZCLFlBQUE7QUFzRWpEOztBQXJFQTtFQUF3QixtQkFBQTtFQUE4QixZQUFBO0FBMEV0RDs7QUF6RUE7RUFBbUIsbUJBQUE7RUFBZ0MsWUFBQTtBQThFbkQ7O0FBN0VBO0VBQXFCLG1CQUFBO0VBQWdDLFlBQUE7QUFrRnJEOztBQS9FQTtFQUFtQixjQUFBO0FBbUZuQjs7QUFsRkE7RUFBaUIsY0FBQTtBQXNGakI7O0FBckZBO0VBQXFCLGNBQUE7QUF5RnJCOztBQXhGQTtFQUFrQixjQUFBO0FBNEZsQjs7QUEzRkE7RUFBcUIsY0FBQTtBQStGckI7O0FBOUZBO0VBQW1CLGNBQUE7QUFrR25COztBQWpHQTtFQUFtQixjQUFBO0FBcUduQjs7QUFwR0E7RUFBcUIsY0FBQTtBQXdHckI7O0FBdkdBO0VBQWtCLGNBQUE7QUEyR2xCOztBQTFHQTtFQUF1QixjQUFBO0FBOEd2Qjs7QUE3R0E7RUFBb0IsY0FBQTtBQWlIcEI7O0FBaEhBO0VBQWdCLGNBQUE7QUFvSGhCOztBQW5IQTtFQUFrQixjQUFBO0FBdUhsQjs7QUF0SEE7RUFBZ0IsY0FBQTtBQTBIaEI7O0FBekhBO0VBQWtCLGNBQUE7QUE2SGxCOztBQTVIQTtFQUFnQixjQUFBO0FBZ0loQjs7QUEvSEE7RUFBaUIsY0FBQTtBQW1JakI7O0FBbElBO0VBQXFCLGNBQUE7QUFzSXJCOztBQXJJQTtFQUFnQixjQUFBO0FBeUloQjs7QUF4SUE7RUFBa0IsY0FBQTtBQTRJbEI7O0FBeElBO0VBRUMsYUFBQTtFQUNBLFdBQUE7QUEwSUQiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZCB7XHJcbiAgd2lkdGg6IDI3JTtcclxuXHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbm1hcmdpbjogMSU7XHJcbn1cclxuXHJcbi5yb3d7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG5cclxuYm9keXtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwOi8vcnliZC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTQvMTIvYmx1ZS1wb2x5Z29uLnBuZ1wiKTtcclxufVxyXG5oMXtcclxuICBjb2xvcjp3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiAyZW07XHJcbn1cclxucHtcclxuICBjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuU3RhdGkgLSBtaW5pbWFsIHN0YXRpc3RpY2FsIGNhcmRzXHJcblxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4uc3RhdGl7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBoZWlnaHQ6IDZlbTtcclxuICBwYWRkaW5nOjFlbTtcclxuICBtYXJnaW46MWVtIDA7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBtYXJnaW46IDIlO1xyXG4gIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG1hcmdpbiAwLjVzIGVhc2UsYm94LXNoYWRvdyAwLjVzIGVhc2U7IC8qIFNhZmFyaSAqL1xyXG4gICAgdHJhbnNpdGlvbjogbWFyZ2luIDAuNXMgZWFzZSxib3gtc2hhZG93IDAuNXMgZWFzZTtcclxuICAtbW96LWJveC1zaGFkb3c6MHB4IDAuMmVtIDAuNGVtIHJnYigwLCAwLCAwLDAuOCk7XHJcbi13ZWJraXQtYm94LXNoYWRvdzowcHggMC4yZW0gMC40ZW0gcmdiKDAsIDAsIDAsMC44KTtcclxuYm94LXNoYWRvdzowcHggMC4yZW0gMC40ZW0gcmdiKDAsIDAsIDAsMC44KTtcclxufVxyXG4uc3RhdGk6aG92ZXJ7XHJcbiAgbWFyZ2luLXRvcDowLjVlbTtcclxuICAtbW96LWJveC1zaGFkb3c6MHB4IDAuNGVtIDAuNWVtIHJnYigwLCAwLCAwLDAuOCk7XHJcbi13ZWJraXQtYm94LXNoYWRvdzowcHggMC40ZW0gMC41ZW0gcmdiKDAsIDAsIDAsMC44KTtcclxuYm94LXNoYWRvdzowcHggMC40ZW0gMC41ZW0gcmdiKDAsIDAsIDAsMC44KTtcclxufVxyXG4uc3RhdGkgaXtcclxuICBmb250LXNpemU6MTAwcHg7XHJcbn1cclxuXHJcbm1hdC1pY29ue1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxufVxyXG4uc3RhdGkgZGl2e1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzLjVlbSk7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZmxvYXQ6cmlnaHQ7XHJcbiAgdGV4dC1hbGlnbjpyaWdodDtcclxufVxyXG4uc3RhdGkgZGl2IGIge1xyXG4gIGZvbnQtc2l6ZToyLjJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDowcHg7XHJcbiAgbWFyZ2luLXRvcDotMC4yZW07XHJcbiAgbWFyZ2luLWJvdHRvbTotMC4yZW07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcblxyXG4uc3RhdGkubGVmdCBkaXZ7XHJcbiAgZmxvYXQ6bGVmdDtcclxuICB0ZXh0LWFsaWduOmxlZnQ7XHJcbn1cclxuXHJcbi5zdGF0aS5iZy10dXJxdW9pc2UgeyBiYWNrZ3JvdW5kOiByZ2IoMjYsIDE4OCwgMTU2KTsgY29sb3I6d2hpdGU7fVxyXG4uc3RhdGkuYmctZW1lcmFsZCB7IGJhY2tncm91bmQ6IHJnYig0NiwgMjA0LCAxMTMpOyBjb2xvcjp3aGl0ZTt9XHJcbi5zdGF0aS5iZy1wZXRlcl9yaXZlciB7IGJhY2tncm91bmQ6IHJnYig1MiwgMTUyLCAyMTkpOyBjb2xvcjp3aGl0ZTt9XHJcbi5zdGF0aS5iZy1hbWV0aHlzdCB7IGJhY2tncm91bmQ6IHJnYigxNTUsIDg5LCAxODIpOyBjb2xvcjp3aGl0ZTt9XHJcbi5zdGF0aS5iZy13ZXRfYXNwaGFsdCB7IGJhY2tncm91bmQ6IHJnYig1MiwgNzMsIDk0KTsgY29sb3I6d2hpdGU7fVxyXG4uc3RhdGkuYmctZ3JlZW5fc2VhIHsgYmFja2dyb3VuZDogcmdiKDIyLCAxNjAsIDEzMyk7IGNvbG9yOndoaXRlO31cclxuLnN0YXRpLmJnLW5lcGhyaXRpcyB7IGJhY2tncm91bmQ6IHJnYigzOSwgMTc0LCA5Nik7IGNvbG9yOndoaXRlO31cclxuLnN0YXRpLmJnLWJlbGl6ZV9ob2xlIHsgYmFja2dyb3VuZDogcmdiKDQxLCAxMjgsIDE4NSk7IGNvbG9yOndoaXRlO31cclxuLnN0YXRpLmJnLXdpc3RlcmlhIHsgYmFja2dyb3VuZDogcmdiKDE0MiwgNjgsIDE3Myk7IGNvbG9yOndoaXRlO31cclxuLnN0YXRpLmJnLW1pZG5pZ2h0X2JsdWUgeyBiYWNrZ3JvdW5kOiByZ2IoNDQsIDYyLCA4MCk7IGNvbG9yOndoaXRlO31cclxuLnN0YXRpLmJnLXN1bl9mbG93ZXIgeyBiYWNrZ3JvdW5kOiByZ2IoMjQxLCAxOTYsIDE1KTsgY29sb3I6d2hpdGU7fVxyXG4uc3RhdGkuYmctY2Fycm90IHsgYmFja2dyb3VuZDogcmdiKDIzMCwgMTI2LCAzNCk7IGNvbG9yOndoaXRlO31cclxuLnN0YXRpLmJnLWFsaXphcmluIHsgYmFja2dyb3VuZDogcmdiKDIzMSwgNzYsIDYwKTsgY29sb3I6d2hpdGU7fVxyXG4uc3RhdGkuYmctY2xvdWRzIHsgYmFja2dyb3VuZDogcmdiKDIzNiwgMjQwLCAyNDEpOyBjb2xvcjp3aGl0ZTt9XHJcbi5zdGF0aS5iZy1jb25jcmV0ZSB7IGJhY2tncm91bmQ6IHJnYigxNDksIDE2NSwgMTY2KTsgY29sb3I6d2hpdGU7fVxyXG4uc3RhdGkuYmctb3JhbmdlIHsgYmFja2dyb3VuZDogcmdiKDI0MywgMTU2LCAxOCk7IGNvbG9yOndoaXRlO31cclxuLnN0YXRpLmJnLXB1bXBraW4geyBiYWNrZ3JvdW5kOiByZ2IoMjExLCA4NCwgMCk7IGNvbG9yOndoaXRlO31cclxuLnN0YXRpLmJnLXBvbWVncmFuYXRlIHsgYmFja2dyb3VuZDogcmdiKDE5MiwgNTcsIDQzKTsgY29sb3I6d2hpdGU7fVxyXG4uc3RhdGkuYmctc2lsdmVyIHsgYmFja2dyb3VuZDogcmdiKDE4OSwgMTk1LCAxOTkpOyBjb2xvcjp3aGl0ZTt9XHJcbi5zdGF0aS5iZy1hc2Jlc3RvcyB7IGJhY2tncm91bmQ6IHJnYigxMjcsIDE0MCwgMTQxKTsgY29sb3I6d2hpdGU7fVxyXG5cclxuXHJcbi5zdGF0aS50dXJxdW9pc2UgeyBjb2xvcjogcmdiKDI2LCAxODgsIDE1Nik7IH1cclxuLnN0YXRpLmVtZXJhbGQgeyBjb2xvcjogcmdiKDQ2LCAyMDQsIDExMyk7IH1cclxuLnN0YXRpLnBldGVyX3JpdmVyIHsgY29sb3I6IHJnYig1MiwgMTUyLCAyMTkpOyB9XHJcbi5zdGF0aS5hbWV0aHlzdCB7IGNvbG9yOiByZ2IoMTU1LCA4OSwgMTgyKTsgfVxyXG4uc3RhdGkud2V0X2FzcGhhbHQgeyBjb2xvcjogcmdiKDUyLCA3MywgOTQpOyB9XHJcbi5zdGF0aS5ncmVlbl9zZWEgeyBjb2xvcjogcmdiKDIyLCAxNjAsIDEzMyk7IH1cclxuLnN0YXRpLm5lcGhyaXRpcyB7IGNvbG9yOiByZ2IoMzksIDE3NCwgOTYpOyB9XHJcbi5zdGF0aS5iZWxpemVfaG9sZSB7IGNvbG9yOiByZ2IoNDEsIDEyOCwgMTg1KTsgfVxyXG4uc3RhdGkud2lzdGVyaWEgeyBjb2xvcjogcmdiKDE0MiwgNjgsIDE3Myk7IH1cclxuLnN0YXRpLm1pZG5pZ2h0X2JsdWUgeyBjb2xvcjogcmdiKDQ0LCA2MiwgODApOyB9XHJcbi5zdGF0aS5zdW5fZmxvd2VyIHsgY29sb3I6IHJnYigyNDEsIDE5NiwgMTUpOyB9XHJcbi5zdGF0aS5jYXJyb3QgeyBjb2xvcjogcmdiKDIzMCwgMTI2LCAzNCk7IH1cclxuLnN0YXRpLmFsaXphcmluIHsgY29sb3I6IHJnYigyMzEsIDc2LCA2MCk7IH1cclxuLnN0YXRpLmNsb3VkcyB7IGNvbG9yOiByZ2IoMjM2LCAyNDAsIDI0MSk7IH1cclxuLnN0YXRpLmNvbmNyZXRlIHsgY29sb3I6IHJnYigxNDksIDE2NSwgMTY2KTsgfVxyXG4uc3RhdGkub3JhbmdlIHsgY29sb3I6IHJnYigyNDMsIDE1NiwgMTgpOyB9XHJcbi5zdGF0aS5wdW1wa2luIHsgY29sb3I6IHJnYigyMTEsIDg0LCAwKTsgfVxyXG4uc3RhdGkucG9tZWdyYW5hdGUgeyBjb2xvcjogcmdiKDE5MiwgNTcsIDQzKTsgfVxyXG4uc3RhdGkuc2lsdmVyIHsgY29sb3I6IHJnYigxODksIDE5NSwgMTk5KTsgfVxyXG4uc3RhdGkuYXNiZXN0b3MgeyBjb2xvcjogcmdiKDEyNywgMTQwLCAxNDEpOyB9XHJcblxyXG5cclxuXHJcbi5jb250YWluZXJ7XHJcblxyXG4gZGlzcGxheTogZ3JpZDtcclxuIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] }]; }, null); })();


/***/ }),

/***/ "pkzz":
/*!****************************************************!*\
  !*** ./src/app/Admin/clients/clients.component.ts ***!
  \****************************************************/
/*! exports provided: ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/firebase.service */ "Z2Br");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");













function ClientsComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientsComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.clearSearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClientsComponent_mat_header_cell_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Names");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClientsComponent_mat_cell_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r15.names);
} }
function ClientsComponent_mat_header_cell_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClientsComponent_mat_cell_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r16.email);
} }
function ClientsComponent_mat_header_cell_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClientsComponent_mat_cell_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r17.phonenumber);
} }
function ClientsComponent_mat_footer_cell_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-footer-cell", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Fetchinng Bookings... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClientsComponent_mat_footer_cell_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-footer-cell", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No bookings... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClientsComponent_mat_header_row_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
} }
function ClientsComponent_mat_row_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
} }
const _c0 = function (a0) { return { "hide": a0 }; };
function ClientsComponent_mat_footer_row_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-footer-row", 21);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r11.ListData != null));
} }
function ClientsComponent_mat_footer_row_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-footer-row", 21);
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, !(ctx_r12.ListData != null && ctx_r12.ListData.data.length == 0)));
} }
const _c1 = function () { return ["Loading"]; };
const _c2 = function () { return ["No Bookings"]; };
const _c3 = function () { return [5, 10, 25, 100]; };
class ClientsComponent {
    constructor(services) {
        this.services = services;
        this.displayedColumns = ['Names', 'Email', 'Phone Number'];
    }
    ngOnInit() {
        this.services.clients().subscribe(list => {
            let array = list.map(item => {
                return Object.assign({}, item.payload.val());
            });
            this.ListData = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](array);
            this.ListData.paginator = this.paginator;
        });
    }
    clearSearch() {
        this.searchKey = "";
    }
    Search() {
        this.ListData.filter = this.searchKey.trim().toLocaleLowerCase();
    }
}
ClientsComponent.ɵfac = function ClientsComponent_Factory(t) { return new (t || ClientsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"])); };
ClientsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientsComponent, selectors: [["app-clients"]], viewQuery: function ClientsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 24, vars: 13, consts: [[1, "example-form"], [1, "example-full-width"], ["matInput", "", "placeholder", "Search", "autocomplete", "off", 3, "ngModel", "ngModelChange", "keyup"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], [1, "mat-elevation-z8"], ["matSort", "", 3, "dataSource"], ["matColumnDef", "Names"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "Email"], ["matColumnDef", "Phone Number"], ["matColumnDef", "Loading"], ["aria-colspan", "6", 4, "matFooterCellDef"], ["matColumnDef", "No Bookings"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "ngClass", 4, "matFooterRowDef"], [3, "length", "pageSize", "pageSizeOptions"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], ["mat-sort-header", ""], ["aria-colspan", "6"], [3, "ngClass"]], template: function ClientsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClientsComponent_Template_input_ngModelChange_2_listener($event) { return ctx.searchKey = $event; })("keyup", function ClientsComponent_Template_input_keyup_2_listener() { return ctx.Search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ClientsComponent_button_3_Template, 3, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ClientsComponent_mat_header_cell_7_Template, 2, 0, "mat-header-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ClientsComponent_mat_cell_8_Template, 2, 1, "mat-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ClientsComponent_mat_header_cell_10_Template, 2, 0, "mat-header-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ClientsComponent_mat_cell_11_Template, 2, 1, "mat-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ClientsComponent_mat_header_cell_13_Template, 2, 0, "mat-header-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ClientsComponent_mat_cell_14_Template, 2, 1, "mat-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ClientsComponent_mat_footer_cell_16_Template, 2, 0, "mat-footer-cell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ClientsComponent_mat_footer_cell_18_Template, 2, 0, "mat-footer-cell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ClientsComponent_mat_header_row_19_Template, 1, 0, "mat-header-row", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ClientsComponent_mat_row_20_Template, 1, 0, "mat-row", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ClientsComponent_mat_footer_row_21_Template, 1, 3, "mat-footer-row", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ClientsComponent_mat_footer_row_22_Template, 1, 3, "mat-footer-row", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "mat-paginator", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.ListData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matFooterRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matFooterRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", 100)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatFooterCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatFooterRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatFooterCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatFooterRow"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n  margin: 10dp;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  margin-left: 10dp !important;\n  width: 100%;\n  padding-left: 25dp;\n}\n\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n\nmat-footer-row-footer-cell[_ngcontent-%COMP%] {\n  justify-content: center;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjbGllbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFFRSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUVBO0VBRUUsYUFBQTtBQUFGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6ImNsaWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mb3JtIHtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAxMGRwO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuXHJcbiAgbWFyZ2luLWxlZnQ6IDEwZHAgIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLWxlZnQ6IDI1ZHA7XHJcbn1cclxuLmhpZGVcclxue1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxubWF0LWZvb3Rlci1yb3ctZm9vdGVyLWNlbGx7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clients',
                templateUrl: './clients.component.html',
                styleUrls: ['./clients.component.scss']
            }]
    }], function () { return [{ type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"]]
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]]
        }] }); })();


/***/ }),

/***/ "upx7":
/*!****************************************************!*\
  !*** ./src/app/Admin/odialog/odialog.component.ts ***!
  \****************************************************/
/*! exports provided: OdialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OdialogComponent", function() { return OdialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/firebase.service */ "Z2Br");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









class OdialogComponent {
    constructor(service) {
        this.service = service;
        this.formTemplate = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    ngOnInit() {
    }
    onSubmit(formValue) {
        this.service.updateOrder(formValue);
    }
}
OdialogComponent.ɵfac = function OdialogComponent_Factory(t) { return new (t || OdialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"])); };
OdialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OdialogComponent, selectors: [["app-odialog"]], decls: 18, vars: 1, consts: [[1, "example-container"], [3, "formGroup", "submit"], ["appearance", "fill"], ["formControlName", "status"], ["value", "Confirm"], ["value", "Processing"], ["value", "On its way"], ["value", "Delivered"], ["name", "submit", "mat-raised-button", "", "color", "primary"]], template: function OdialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function OdialogComponent_Template_form_submit_1_listener() { return ctx.onSubmit(ctx.formTemplate.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Placed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Processing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "On its way");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Delivered");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formTemplate);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OdialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-odialog',
                templateUrl: './odialog.component.html',
                styleUrls: ['./odialog.component.scss']
            }]
    }], function () { return [{ type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _Admin_addactivity_addactivity_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Admin/addactivity/addactivity.component */ "3cDd");
/* harmony import */ var _Admin_orders_orders_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Admin/orders/orders.component */ "EEwM");
/* harmony import */ var _Admin_view_food_view_food_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Admin/view-food/view-food.component */ "ec2y");
/* harmony import */ var _Admin_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Admin/bookings/bookings.component */ "/tGU");
/* harmony import */ var _Admin_addmeal_addmeal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Admin/addmeal/addmeal.component */ "FFhZ");
/* harmony import */ var _Admin_category_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Admin/category/category.component */ "OJu0");
/* harmony import */ var _pages_test_test_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/test/test.component */ "lEda");
/* harmony import */ var _pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/sign-in/sign-in.component */ "XWge");
/* harmony import */ var _Admin_clients_clients_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Admin/clients/clients.component */ "pkzz");
/* harmony import */ var _Admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Admin/dashboard/dashboard.component */ "oEUC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_default_default_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/default/default.component */ "FIw4");
/* harmony import */ var _Admin_add_accomo_add_accomo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Admin/add-accomo/add-accomo.component */ "X3Yu");
/* harmony import */ var _Admin_view_accomo_view_accomo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Admin/view-accomo/view-accomo.component */ "2cBE");
/* harmony import */ var _Admin_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Admin/order-details/order-details.component */ "Yc5A");


















const routes = [
    { path: 'signin', component: _pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_7__["SignInComponent"] },
    { path: 'test', component: _pages_test_test_component__WEBPACK_IMPORTED_MODULE_6__["TestComponent"] },
    { path: '', component: _pages_default_default_component__WEBPACK_IMPORTED_MODULE_12__["DefaultComponent"],
        children: [{ path: '', component: _Admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"] },
            { path: 'clients', component: _Admin_clients_clients_component__WEBPACK_IMPORTED_MODULE_8__["ClientsComponent"] },
            { path: 'gategory', component: _Admin_category_category_component__WEBPACK_IMPORTED_MODULE_5__["CategoryComponent"] },
            { path: 'addmeal', component: _Admin_addmeal_addmeal_component__WEBPACK_IMPORTED_MODULE_4__["AddmealComponent"] },
            { path: 'addAccomodation', component: _Admin_add_accomo_add_accomo_component__WEBPACK_IMPORTED_MODULE_13__["AddAccomoComponent"] },
            { path: 'Bookings', component: _Admin_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_3__["BookingsComponent"] },
            { path: 'Viewfood', component: _Admin_view_food_view_food_component__WEBPACK_IMPORTED_MODULE_2__["ViewFoodComponent"] },
            { path: 'View Accomodation', component: _Admin_view_accomo_view_accomo_component__WEBPACK_IMPORTED_MODULE_14__["ViewAccomoComponent"] },
            { path: 'Orders', component: _Admin_orders_orders_component__WEBPACK_IMPORTED_MODULE_1__["OrdersComponent"] },
            { path: 'Activities', component: _Admin_addactivity_addactivity_component__WEBPACK_IMPORTED_MODULE_0__["AddactivityComponent"] },
            { path: 'Order/:ref', component: _Admin_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_15__["OrderDetailsComponent"] },
        ],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map