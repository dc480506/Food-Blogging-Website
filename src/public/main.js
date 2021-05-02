(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "++gc":
/*!***************************************************!*\
  !*** ./src/app/services/common/common.service.ts ***!
  \***************************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_errors_app_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/errors/app-error */ "bgi2");
/* harmony import */ var src_app_errors_bad_input_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/errors/bad-input-error */ "ARbW");
/* harmony import */ var src_app_errors_not_found_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/errors/not-found-error */ "vTm3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class CommonService {
    constructor() {
        this.baseURL = "api/";
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    handleError(error) {
        if (error.status == 400)
            // return Observable.throw(new BadInputError());
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(new src_app_errors_bad_input_error__WEBPACK_IMPORTED_MODULE_3__["BadInputError"]());
        if (error.status == 404)
            // return Observable.throw(new NotFoundError());
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(new src_app_errors_not_found_error__WEBPACK_IMPORTED_MODULE_4__["NotFoundError"]());
        // return Observable.throw(new AppError());
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(new src_app_errors_app_error__WEBPACK_IMPORTED_MODULE_2__["AppError"]());
    }
}
CommonService.ɵfac = function CommonService_Factory(t) { return new (t || CommonService)(); };
CommonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: CommonService, factory: CommonService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\College related stuff\Sem VIII\AIT\FBW-Deploy\Food-Blogging-Website\fbw-frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "0Ei/":
/*!*****************************************************************************!*\
  !*** ./src/app/components/following-authors/following-authors.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FollowingAuthorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowingAuthorsComponent", function() { return FollowingAuthorsComponent; });
/* harmony import */ var _common_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../common/scroll */ "KflO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_following_authors_following_authors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/following-authors/following-authors.service */ "OZHD");
/* harmony import */ var _services_follow_follow_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/follow/follow.service */ "C3eT");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-infinite-scroll */ "dlKe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _follow_follow_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../follow/follow.component */ "l2O0");








function FollowingAuthorsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-follow", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const author_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](author_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("followersCount", author_r2.followersCount)("isFollowing", true)("authorId", author_r2._id);
} }
function FollowingAuthorsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No Authors subscribed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class FollowingAuthorsComponent extends _common_scroll__WEBPACK_IMPORTED_MODULE_0__["CustomScroll"] {
    constructor(service, followService, spinner) {
        super(service, spinner);
        this.followService = followService;
    }
    ngOnInit() {
        this.loadInitData();
    }
}
FollowingAuthorsComponent.ɵfac = function FollowingAuthorsComponent_Factory(t) { return new (t || FollowingAuthorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_following_authors_following_authors_service__WEBPACK_IMPORTED_MODULE_2__["FollowingAuthorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_follow_follow_service__WEBPACK_IMPORTED_MODULE_3__["FollowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"])); };
FollowingAuthorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FollowingAuthorsComponent, selectors: [["app-following-authors"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 5, consts: [[1, "card"], [1, "card-body", "justify-content-center"], ["infiniteScroll", "", 1, "box", 3, "infiniteScrollDistance", "infiniteScrollThrottle", "scrollWindow", "scrolled"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [2, "font-size", "14px"], [3, "followersCount", "isFollowing", "authorId"]], template: function FollowingAuthorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Showing blogs from Authors:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scrolled", function FollowingAuthorsComponent_Template_div_scrolled_5_listener() { return ctx.onScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, FollowingAuthorsComponent_div_6_Template, 5, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, FollowingAuthorsComponent_div_7_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("infiniteScrollDistance", 2)("infiniteScrollThrottle", 50)("scrollWindow", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.length == 0);
    } }, directives: [ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_5__["InfiniteScrollDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _follow_follow_component__WEBPACK_IMPORTED_MODULE_7__["FollowComponent"]], styles: [".box[_ngcontent-%COMP%]{\r\n    height:23vh;\r\n    overflow:hidden;\r\n}\r\n.box[_ngcontent-%COMP%]:hover{\r\n    overflow: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvbGxvd2luZy1hdXRob3JzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJmb2xsb3dpbmctYXV0aG9ycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveHtcclxuICAgIGhlaWdodDoyM3ZoO1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG59XHJcbi5ib3g6aG92ZXJ7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufSJdfQ== */"] });


/***/ }),

/***/ "1I/p":
/*!*****************************************************************!*\
  !*** ./src/app/services/guard/auth-guard/auth-guard.service.ts ***!
  \*****************************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/auth.service */ "9ans");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (this.authService.isLoggedin())
            return true;
        this.router.navigate(['/']);
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "2EWz":
/*!*************************************************************************!*\
  !*** ./src/app/app-navigation/subscriptions/subscriptions.component.ts ***!
  \*************************************************************************/
/*! exports provided: SubscriptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionsComponent", function() { return SubscriptionsComponent; });
/* harmony import */ var _common_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../common/scroll */ "KflO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_subscribed_author_blogs_subscribed_author_blogs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/subscribed-author-blogs/subscribed-author-blogs.service */ "lR5m");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _components_following_authors_following_authors_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/following-authors/following-authors.component */ "0Ei/");
/* harmony import */ var _components_not_following_authors_not_following_authors_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/not-following-authors/not-following-authors.component */ "xUWY");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-infinite-scroll */ "dlKe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _custom_pipe_title_case_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../custom-pipe/title-case.pipe */ "2mS6");
/* harmony import */ var _custom_pipe_read_less_more_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../custom-pipe/read-less-more.pipe */ "g7wr");
/* harmony import */ var _custom_pipe_count_metric_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../custom-pipe/count-metric.pipe */ "hOaZ");












function SubscriptionsComponent_div_17_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 30);
} }
const _c0 = function (a1) { return ["/view-blogs/blog", a1]; };
function SubscriptionsComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SubscriptionsComponent_div_17_img_4_Template, 1, 0, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "titleCase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "readLessMore");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "countMetric");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](30, "countMetric");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blog_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r0.blogImageBaseURL + blog_r2.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", blog_r2.isNew);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](blog_r2.author.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](12, 9, blog_r2.publishInfo == null ? null : blog_r2.publishInfo.publishTime, "medium"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](21, _c0, blog_r2._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 12, blog_r2.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](19, 14, blog_r2.summary, 120), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 17, blog_r2.likedBy.length), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](30, 19, blog_r2.dislikedBy.length), "");
} }
function SubscriptionsComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Your have not subscribed to any Author! Please subscribe to get results");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class SubscriptionsComponent extends _common_scroll__WEBPACK_IMPORTED_MODULE_0__["CustomScroll"] {
    constructor(service, spinner) {
        super(service, spinner);
        this.blogImageBaseURL = "";
        this.blogImageBaseURL = service.baseImageURL;
    }
    ngOnInit() {
        this.loadInitData();
    }
}
SubscriptionsComponent.ɵfac = function SubscriptionsComponent_Factory(t) { return new (t || SubscriptionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_subscribed_author_blogs_subscribed_author_blogs_service__WEBPACK_IMPORTED_MODULE_2__["SubscribedAuthorBlogsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"])); };
SubscriptionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SubscriptionsComponent, selectors: [["app-subscriptions"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 22, vars: 6, consts: [[1, "container", "mx-1"], [1, "row"], [1, "col-md-3"], [1, "col-md-9"], [1, "container", "mt-1"], [1, "jumbotron", "py-3", 2, "background-color", "#353b48"], [1, "input-group", "col-12", "mr-4"], [1, "input-group-append", "bg-primary"], ["type", "button", 1, "btn", "btn-outline-secondary"], [1, "bi", "bi-search", 2, "color", "white"], ["type", "text", "aria-label", "Text input with dropdown button", 1, "form-control"], ["infiniteScroll", "", 1, "container", "mt-12", "blog-results", 3, "infiniteScrollDistance", "infiniteScrollThrottle", "scrollWindow", "scrolled"], ["class", "col-md-6 d-flex align-items-stretch", 4, "ngFor", "ngForOf"], ["style", "height:50vh;", "class", "jumbotron text-center text-danger", 4, "ngIf"], [1, "row", "pb-5"], [1, "col-md-12", "p-5"], ["bdOpacity", "0.9", "bdColor", "", "size", "default", "color", "#581f87", "type", "ball-pulse-sync", 3, "fullScreen"], [1, "col-md-6", "d-flex", "align-items-stretch"], [1, "card", "mb-3"], [1, "img-container"], ["height", "200px", "alt", "Card image cap", 1, "card-img-top", 3, "src"], ["class", "new", "height", "50px", "src", "/assets/img/new.gif", 4, "ngIf"], [1, "card-body"], [1, "blog-date"], [1, "blog-title", 3, "routerLink"], [1, "blog-summary"], [1, "likesPreview", "ml-4"], [1, "bi", "bi-hand-thumbs-up-fill"], [1, "dislikesPreview", "ml-4"], [1, "bi", "bi-hand-thumbs-down-fill"], ["height", "50px", "src", "/assets/img/new.gif", 1, "new"], [1, "jumbotron", "text-center", "text-danger", 2, "height", "50vh"]], template: function SubscriptionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-following-authors");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-not-following-authors");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scrolled", function SubscriptionsComponent_Template_div_scrolled_15_listener() { return ctx.onScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, SubscriptionsComponent_div_17_Template, 31, 23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, SubscriptionsComponent_div_18_Template, 3, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "ngx-spinner", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("infiniteScrollDistance", 2)("infiniteScrollThrottle", 50)("scrollWindow", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.length == 0 && ctx.fetch);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fullScreen", false);
    } }, directives: [_components_following_authors_following_authors_component__WEBPACK_IMPORTED_MODULE_4__["FollowingAuthorsComponent"], _components_not_following_authors_not_following_authors_component__WEBPACK_IMPORTED_MODULE_5__["NotFollowingAuthorsComponent"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__["InfiniteScrollDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"], _custom_pipe_title_case_pipe__WEBPACK_IMPORTED_MODULE_9__["TitleCasePipe"], _custom_pipe_read_less_more_pipe__WEBPACK_IMPORTED_MODULE_10__["ReadLessMorePipe"], _custom_pipe_count_metric_pipe__WEBPACK_IMPORTED_MODULE_11__["CountMetricPipe"]], styles: [".img-container[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n  position: relative;\r\n}\r\n\r\n.new[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnNjcmlwdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7QUFDViIsImZpbGUiOiJzdWJzY3JpcHRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5uZXd7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "2mS6":
/*!************************************************!*\
  !*** ./src/app/custom-pipe/title-case.pipe.ts ***!
  \************************************************/
/*! exports provided: TitleCasePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleCasePipe", function() { return TitleCasePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TitleCasePipe {
    transform(value) {
        if (!value)
            return null;
        let words = value.split(" ");
        for (var i = 0; i < words.length; i++) {
            let word = words[i];
            if (i > 0 && this.isPreposition(word))
                words[i] = word.toLowerCase();
            else
                words[i] = this.toTitleCase(word);
        }
        return words.join(' ');
    }
    toTitleCase(word) {
        return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
    }
    isPreposition(word) {
        let prepositions = [
            'aboard',
            'about',
            'above',
            'across',
            'after',
            'against',
            'along',
            'amid',
            'among',
            'anti',
            'around',
            'as',
            'at',
            'before',
            'behind',
            'below',
            'beneath',
            'beside',
            'besides',
            'between',
            'beyond',
            'but',
            'by',
            'concerning',
            'considering',
            'despite',
            'down',
            'during',
            'except',
            'excepting',
            'excluding',
            'following',
            'for',
            'from',
            'in',
            'inside',
            'into',
            'like',
            'minus',
            'near',
            'of',
            'off',
            'on',
            'onto',
            'opposite',
            'outside',
            'over',
            'past',
            'per',
            'plus',
            'regarding',
            'round',
            'save',
            'since',
            'than',
            'through',
            'to',
            'toward',
            'towards',
            'under',
            'underneath',
            'unlike',
            'until',
            'up',
            'upon',
            'versus',
            'via',
            'with',
            'within',
            'without'
        ];
        return prepositions.includes(word.toLowerCase());
    }
}
TitleCasePipe.ɵfac = function TitleCasePipe_Factory(t) { return new (t || TitleCasePipe)(); };
TitleCasePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "titleCase", type: TitleCasePipe, pure: true });


/***/ }),

/***/ "3nXK":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class UserComponent {
    constructor() { }
    ngOnInit() {
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(); };
UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], decls: 10, vars: 0, consts: [[1, "card", "col-md-4", 2, "width", "30rem", "top", "50%", "left", "50%", "transform", "translate(-50%, 30%)"], [1, "card-header"], [1, "nav", "nav-tabs", "card-header-tabs"], [1, "nav-item"], ["routerLink", "/login", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/register", "routerLinkActive", "active", 1, "nav-link"]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".center-card[_ngcontent-%COMP%]{\r\n    width: 30rem;\r\n    top:50%;\r\n    left: 50%;\r\n    transform: translate(-50%,50%);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixPQUFPO0lBQ1AsU0FBUztJQUNULDhCQUE4QjtBQUNsQyIsImZpbGUiOiJ1c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyLWNhcmR7XHJcbiAgICB3aWR0aDogMzByZW07XHJcbiAgICB0b3A6NTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSw1MCUpO1xyXG59Il19 */"] });


/***/ }),

/***/ "5Hpx":
/*!*************************************************!*\
  !*** ./src/app/services/blogs/blogs.service.ts ***!
  \*************************************************/
/*! exports provided: BlogsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsService", function() { return BlogsService; });
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../data.service */ "EnSQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class BlogsService extends _data_service__WEBPACK_IMPORTED_MODULE_0__["DataService"] {
    constructor(http) {
        super("blogs", http);
    }
}
BlogsService.ɵfac = function BlogsService_Factory(t) { return new (t || BlogsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
BlogsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BlogsService, factory: BlogsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "5oLd":
/*!*******************************************************!*\
  !*** ./src/app/app-navigation/home/home.component.ts ***!
  \*******************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var src_app_common_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/common/scroll */ "KflO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_blogs_blogs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/blogs/blogs.service */ "5Hpx");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-infinite-scroll */ "dlKe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _custom_pipe_read_less_more_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../custom-pipe/read-less-more.pipe */ "g7wr");
/* harmony import */ var _custom_pipe_title_case_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../custom-pipe/title-case.pipe */ "2mS6");
/* harmony import */ var _custom_pipe_count_metric_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../custom-pipe/count-metric.pipe */ "hOaZ");










const _c0 = function (a1) { return ["/view-blogs/blog", a1]; };
function HomeComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "readLessMore");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "titleCase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "countMetric");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "countMetric");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blog_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r0.blogImageBaseURL + blog_r2.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](blog_r2.author.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" | ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](9, 8, blog_r2.publishInfo == null ? null : blog_r2.publishInfo.publishTime, "medium"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](20, _c0, blog_r2._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](12, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 14, blog_r2.title), 15), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](blog_r2.summary);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 16, blog_r2.likedBy.length), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 18, blog_r2.dislikedBy.length), "");
} }
function HomeComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Oops! No blogs founds.. Please Check back later.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class HomeComponent extends src_app_common_scroll__WEBPACK_IMPORTED_MODULE_0__["CustomScroll"] {
    constructor(service, spinner) {
        super(service, spinner);
        this.blogImageBaseURL = service.baseImageURL;
    }
    ngOnInit() {
        this.loadInitData();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_blogs_blogs_service__WEBPACK_IMPORTED_MODULE_2__["BlogsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 20, vars: 6, consts: [[1, "container", "mx-1"], [1, "row"], [1, "col-md-4", 2, "width", "29.1666666%", "flex", "0 0 29.166%", "max-width", "29.1666666%", "display", "inline-block"], ["src", "https://www.zomato.com/widgets/res_search_widget.php?city_id=3&theme=red&hideCitySearch=on&hideResSearch=on&sort=popularity", "border", "0", "frameborder", "0", 2, "overflow-y", "auto", "height", "85vh", "margin", "auto", "bottom", "0", "right", "0"], [1, "col-md-8", "p-0", "m-0", 2, "width", "70.8333333%", "flex", "0 0 70.833%", "max-width", "70.8333333%"], [1, "container", "mt-1"], [1, "jumbotron", "py-2", 2, "background-color", "#353b48"], [1, "input-group", "col-12"], [1, "input-group-append", "bg-primary"], ["type", "button", 1, "btn", "btn-primary"], [1, "bi", "bi-search", 2, "color", "white"], ["type", "text", 1, "form-control"], ["infiniteScroll", "", 1, "container", "blog-results", 3, "infiniteScrollDistance", "infiniteScrollThrottle", "scrollWindow", "scrolled"], ["class", "col-md-6 d-flex align-items-stretch", 4, "ngFor", "ngForOf"], ["style", "height:50vh;", "class", "jumbotron text-center text-primary", 4, "ngIf"], [1, "row", "pb-5"], [1, "col-md-12", "p-5"], ["bdOpacity", "0.9", "bdColor", "", "size", "default", "color", "#581f87", "type", "ball-pulse-sync", 3, "fullScreen"], [1, "col-md-6", "d-flex", "align-items-stretch"], [1, "card", "mb-3"], ["height", "200px", "alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "blog-date"], [1, "blog-title", 3, "routerLink"], [1, "blog-summary"], [1, "likesPreview", "ml-4"], [1, "bi", "bi-hand-thumbs-up-fill"], [1, "dislikesPreview", "ml-4"], [1, "bi", "bi-hand-thumbs-down-fill"], [1, "jumbotron", "text-center", "text-primary", 2, "height", "50vh"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "iframe", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scrolled", function HomeComponent_Template_div_scrolled_13_listener() { return ctx.onScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, HomeComponent_div_15_Template, 28, 22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, HomeComponent_div_16_Template, 3, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "ngx-spinner", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("infiniteScrollDistance", 2)("infiniteScrollThrottle", 50)("scrollWindow", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.length == 0 && ctx.fetch);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fullScreen", false);
    } }, directives: [ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__["InfiniteScrollDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _custom_pipe_read_less_more_pipe__WEBPACK_IMPORTED_MODULE_7__["ReadLessMorePipe"], _custom_pipe_title_case_pipe__WEBPACK_IMPORTED_MODULE_8__["TitleCasePipe"], _custom_pipe_count_metric_pipe__WEBPACK_IMPORTED_MODULE_9__["CountMetricPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "9ans":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _common_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../common/common.service */ "++gc");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





const jwthelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
class AuthService extends _common_common_service__WEBPACK_IMPORTED_MODULE_0__["CommonService"] {
    constructor(http) {
        super();
        this.http = http;
        this.url = this.baseURL + 'user/';
    }
    login(credentials, type) {
        return this.http.post(this.url + type, credentials, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => {
            let data = JSON.parse(JSON.stringify(response)).body;
            console.log("Data: ", data);
            if (data.token) {
                localStorage.setItem("token", data.token);
                return true;
            }
            else {
                return false;
            }
        }));
    }
    logout() {
        localStorage.removeItem('token');
    }
    isLoggedin() {
        let token = localStorage.getItem('token');
        if (!token)
            return false;
        // console.log("Expiry:",jwthelper.isTokenExpired(token));
        if (jwthelper.isTokenExpired(token)) {
            localStorage.removeItem('token');
            return false;
        }
        // console.log("Aa aaa")
        return true;
    }
    get currentUser() {
        let token = localStorage.getItem('token');
        if (!token)
            return null;
        const decodedToken = jwthelper.decodeToken(token);
        // console.log(decodedToken);
        return decodedToken.name;
    }
    get userToken() {
        let token = localStorage.getItem('token');
        if (!token)
            return "";
        return token;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ARbW":
/*!*******************************************!*\
  !*** ./src/app/errors/bad-input-error.ts ***!
  \*******************************************/
/*! exports provided: BadInputError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadInputError", function() { return BadInputError; });
/* harmony import */ var _app_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-error */ "bgi2");

class BadInputError extends _app_error__WEBPACK_IMPORTED_MODULE_0__["AppError"] {
}


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
    production: false
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

/***/ "BOkJ":
/*!***************************************************!*\
  !*** ./src/app/user/sign-in/sign-in.component.ts ***!
  \***************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/auth/auth.service */ "9ans");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function SignInComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Invalid Email or password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignInComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email address is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignInComponent_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email address is invalid. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignInComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignInComponent_div_9_div_1_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignInComponent_div_9_div_2_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.errors == null ? null : _r2.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.errors == null ? null : _r2.errors.pattern);
} }
function SignInComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignInComponent_div_15_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Password should be of minimum length ", _r4.errors == null ? null : _r4.errors.minlength.requiredLength, ". ");
} }
function SignInComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignInComponent_div_15_div_1_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignInComponent_div_15_div_2_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors.minlength);
} }
class SignInComponent {
    constructor(router, service) {
        this.router = router;
        this.service = service;
        this.invalidLogin = false;
    }
    log(x) { console.log(x); }
    login(credentials) {
        this.service.login(credentials, 'login')
            .subscribe(resp => {
            if (resp) {
                console.log("Yo");
                this.router.navigate(['/home']);
            }
            else {
                this.invalidLogin = true;
            }
        }, error => {
            this.invalidLogin = true;
        });
        console.log(credentials);
    }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["app-sign-in"]], decls: 18, vars: 4, consts: [[1, "card-body"], ["class", "alert alert-danger", 4, "ngIf"], [3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "email"], ["required", "", "pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$", "ngModel", "", "type", "email", "name", "email", "id", "email", "placeholder", "Enter your email", 1, "form-control", 3, "change"], ["email", "ngModel"], ["for", "Password"], ["required", "", "minlength", "7", "maxlength", "16", "ngModel", "", "type", "password", "name", "password", "id", "password", "placeholder", "Enter your password", 1, "form-control"], ["password", "ngModel"], [1, "btn", "btn-primary", 3, "disabled"], [1, "alert", "alert-danger"], [4, "ngIf"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignInComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignInComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.login(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SignInComponent_Template_input_change_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx.log(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SignInComponent_div_9_Template, 3, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SignInComponent_div_15_Template, 3, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.touched && _r2.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.touched && _r4.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r1.invalid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduLWluLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "BUNJ":
/*!**********************************!*\
  !*** ./src/app/common/toastr.ts ***!
  \**********************************/
/*! exports provided: Toastr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toastr", function() { return Toastr; });
class Toastr {
    constructor(toastr) {
        this.toastr = toastr;
    }
    showSuccess(title, msg) {
        this.toastr.success(title, msg);
    }
}


/***/ }),

/***/ "C3eT":
/*!***************************************************!*\
  !*** ./src/app/services/follow/follow.service.ts ***!
  \***************************************************/
/*! exports provided: FollowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowService", function() { return FollowService; });
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../data.service */ "EnSQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class FollowService extends _data_service__WEBPACK_IMPORTED_MODULE_0__["DataService"] {
    constructor(http) {
        super('follow', http);
    }
}
FollowService.ɵfac = function FollowService_Factory(t) { return new (t || FollowService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
FollowService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FollowService, factory: FollowService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "E4ka":
/*!**********************************************!*\
  !*** ./src/app/custom-interceptor.module.ts ***!
  \**********************************************/
/*! exports provided: CustomInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomInterceptor", function() { return CustomInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth/auth.service */ "9ans");


class CustomInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        console.log(req.headers);
        let headers = req.headers;
        if (!req.headers.has('Content-Type')) {
            console.log("Checking header");
            const detectedType = req.detectContentTypeHeader();
            console.log("Detected:", detectedType);
            // Sometimes Content-Type detection fails.
            if (detectedType !== null) {
                headers = headers.set("Content-Type", detectedType);
            }
        }
        if (this.authService.isLoggedin()) {
            // console.log("Inside");
            console.log(this.authService.userToken);
            headers = headers.set('x-auth-token', this.authService.userToken);
        }
        // console.log(headers);
        req = req.clone({ withCredentials: true, headers: headers });
        // console.log(req);
        // console.log(document.cookie);
        return next.handle(req);
        // .pipe(
        //     map((event:HttpEvent<any>)=>{
        //         if(event instanceof HttpResponse){
        //             // if(event.headers.has('Set-Cookie')){
        //             //     console.log("Mil gaya");
        //             // }
        //             console.log(event.headers.keys())
        //         }
        //         return event
        //     }
        //     )
        // )
    }
}
CustomInterceptor.ɵfac = function CustomInterceptor_Factory(t) { return new (t || CustomInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
CustomInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomInterceptor, factory: CustomInterceptor.ɵfac });
function e(_e) {
    throw new Error('Function not implemented.');
}


/***/ }),

/***/ "EnSQ":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _errors_app_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../errors/app-error */ "bgi2");
/* harmony import */ var _errors_not_found_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../errors/not-found-error */ "vTm3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _errors_bad_input_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../errors/bad-input-error */ "ARbW");





class DataService {
    constructor(path, http) {
        this.http = http;
        this.url = "api/";
        this.baseImageURL = "api/images/";
        this.url += path;
    }
    get(page, limit, id) {
        var tempURL = this.url;
        if (page && limit) {
            tempURL = this.url + `?page=${page}&limit=${limit}`;
        }
        else if (id) {
            tempURL = this.url + '/' + id;
        }
        console.log(tempURL);
        return this.http.get(tempURL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => JSON.parse(JSON.stringify(response))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    create(resource) {
        return this.http.post(this.url + "/", resource)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => JSON.parse(JSON.stringify(response))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    update(id, resource) {
        return this.http.put(this.url + "/" + id, resource)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => JSON.parse(JSON.stringify(response))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    delete(id) {
        return this.http.delete(this.url + "/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => JSON.parse(JSON.stringify(response))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    handleError(error) {
        if (error.status == 400)
            // return Observable.throw(new BadInputError());
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new _errors_bad_input_error__WEBPACK_IMPORTED_MODULE_4__["BadInputError"]());
        if (error.status == 404)
            // return Observable.throw(new NotFoundError());
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new _errors_not_found_error__WEBPACK_IMPORTED_MODULE_1__["NotFoundError"]());
        // return Observable.throw(new AppError());
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new _errors_app_error__WEBPACK_IMPORTED_MODULE_0__["AppError"]());
    }
}


/***/ }),

/***/ "Eo8l":
/*!***************************************************************!*\
  !*** ./src/app/services/like-dislike/like-dislike.service.ts ***!
  \***************************************************************/
/*! exports provided: LikeDislikeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikeDislikeService", function() { return LikeDislikeService; });
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data.service */ "EnSQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class LikeDislikeService extends _data_service__WEBPACK_IMPORTED_MODULE_0__["DataService"] {
    constructor(http) {
        super('blogs/like-dislike', http);
    }
}
LikeDislikeService.ɵfac = function LikeDislikeService_Factory(t) { return new (t || LikeDislikeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
LikeDislikeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LikeDislikeService, factory: LikeDislikeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "F33o":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 36, vars: 0, consts: [["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "integrity", "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm", "crossorigin", "anonymous"], [1, "main"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "470", "height", "290", "viewBox", "0 0 470 290"], ["id", "prefix__a", "d", "M5.063 128.67c-2.513 15.192 5.633 31.093 17.898 38.941 5.99 3.832 13.34 6.528 16.471 13.254 4.868 10.452-3.879 22.437-13.113 28.515-9.236 6.078-20.5 10.9-24.704 21.683-2.771 7.108-1.685 15.387 1.058 22.507 10.06 26.112 39.393 37.547 65.479 36.15 26.086-1.396 50.827-12.407 76.416-18.075 87.873-19.465 180.005 24.717 267.728 4.47 13.65-3.151 27.4-8.081 37.943-17.99 11.883-11.167 18.632-28.016 19.65-45.023.97-16.225-4.34-34.495-17.744-41.806-7.834-4.273-17.196-4.1-25.7-1.774-5.43 1.483-10.767 3.808-16.369 3.848-5.601.038-11.763-3-13.386-8.808-1.707-6.107 2.182-12.41 6.642-16.577 9.072-8.474 21.203-12.707 29.441-22.126 7.927-9.063 11.264-22.574 8.574-34.716-2.692-12.141-11.326-22.538-22.188-26.715-27.683-10.645-57.844 18.377-86.152 9.873-2.101-.63-4.312-1.605-5.418-3.641-1.08-1.988-.834-4.51-.214-6.716 3.468-12.348 16.939-20.21 17.528-33.102.32-7.008-3.504-13.564-8.325-18.251-33.126-32.2-81.125 6.102-114.9 18.194-55.542 19.884-112.157 36.49-167.849 55.963-20.81 7.275-44.91 18.606-48.766 41.922z", 1, "fundo"], ["fill", "none", "fill-rule", "evenodd"], ["fill", "#FFF", "d", "M0 0H1366V800H0z", "transform", "translate(-448 -157)"], ["transform", "translate(-448 -157) translate(448 157)"], ["id", "prefix__b", "fill", "#fff"], [0, "xlink", "href", "#prefix__a"], ["fill", "#F6F6F7", 0, "xlink", "href", "#prefix__a"], ["fill", "#EDEDF0", "fill-rule", "nonzero", "d", "M-14.199 211.2H481.36V301.2H-14.199z", "mask", "url(#prefix__b)"], [1, "paes"], [1, "pao-baixo"], ["fill", "#FBB965", "d", "M2.79 131.737s-2.073 3.155-2.479 6.868c-.406 3.713-.747 9.666 1.24 13.372 1.985 3.707 12.69 20.8 65.175 21.02 53.15.225 69.188-15.685 70.59-18.977 2.605-6.118 1.838-21.327.06-22.283-1.777-.956-44.044-3.204-72.446-4.057-28.402-.854-49.872-1.968-62.14 4.057", "transform", "translate(161 68)"], ["fill", "#E6A95F", "d", "M34.648 167.758c-8.863-1.526-23.515-6.939-30.292-14.218-6.775-7.28-2.096-8.803 3.508-5.387 5.605 3.415 24.569 11.557 54.124 12.263 29.555.706 61.424-6.946 72.2-17.053 0 0 2.705-1.47 2.768 1.509.062 2.98.428 7.948-2.769 10.507-3.196 2.558-34.805 23.526-99.54 12.379", "transform", "translate(161 68)"], ["fill", "#FFDA7F", "d", "M5.679 131.837c-6.522 1.646-.275 6.91 9.492 12.14 9.767 5.229 28.24 10.257 44.267 10.015 16.028-.243 37.48-.481 52.543-5.333 15.06-4.852 16.223-9.55 17.998-13.298 1.774-3.748-107.32-7.809-124.3-3.524", "transform", "translate(161 68)"], [1, "pao-cima"], ["fill", "#FBB868", "d", "M71.37 0C49.008.035-2.43.631 1.18 51.16c0 0-.018 10.84 62.825 10.84 62.844 0 72.591-9.633 73.721-11.173C142.284 44.623 147.583-.117 71.37 0", "transform", "translate(161 68)"], ["fill", "#E6A95F", "d", "M34.552 61c-7.628-1.006-23.98-2.904-27.586-5.506-3.606-2.604-7.448-2.895-5.39-10.826.842-3.242 7.976-.619 11.264.839 3.289 1.458 21.239 6.047 42.989 6.673 21.75.625 57.126-1.679 67.42-5.458 9.806-3.598 13.662-7.027 15.493-5.228 2.396 2.351 1.687 8.008-4.913 12.215-6.252 3.985-27.53 7.2-49.434 7.76-21.904.56-38.604 1.012-49.843-.469", "transform", "translate(161 68)"], ["fill", "#FFEAD4", "d", "M45.508 13.114c-.368.549-.54 1.598-.503 2.445.017.392.297.604.45.287.143-.297.222-.617.303-.978.087-.387.197-.735.238-1.15.042-.44-.257-.95-.488-.604M42.092 9.016c-.694.13-1.446.61-1.774 1.098-.168.248-.3.512-.317.792-.017.313.154.503.29.776.249.494 1.245.392 1.22-.162-.014-.274.33-.612.54-.817.367-.361.75-.62.923-1.075.154-.404-.413-.7-.882-.612M51.621 9.247c-.182-.409-.68-.325-.615.364.063.687.007 1.485.25 2.067.19.458.694.473.737-.25.043-.759-.109-1.592-.372-2.181M32.55 15.101c-1.206.547-1.849 1.662-1.414 2.552.188.384 1.21.504 1.46.077.188-.32.407-.629.616-.942.243-.363.63-.675.767-1.064.173-.486-.753-.93-1.43-.623M29.793 9.012c-.26-.108-.498.532-.62.942-.166.565-.205 1.033-.149 1.674.053.59.424.405.493-.048-.002.014.102-.302.138-.4.093-.247.18-.497.262-.76.113-.359.144-1.297-.124-1.408M38.384 6.056c-.737-.211-1.406.211-1.881.674-.53.514-.607 1.19-.39 1.829.167.5 1.09.632 1.326.096.127-.285.31-.53.533-.764.304-.32.72-.44.944-.848.237-.429-.053-.85-.532-.987M21.722 10.101c-.484-.28-1.16.08-1.542.378-.57.444-.957.924-1.152 1.628-.21.764.802 1.182 1.296.663.4-.42.901-.746 1.308-1.172.319-.334.594-1.205.09-1.497M23.513 15.078c-.385.414-.505 1.566-.513 2.381-.005.47.333.749.47.35.206-.592.422-1.34.517-2.047.082-.598-.253-.921-.474-.684M38.964 14.6c-.26-.324-1.293-.581-2.192-.6-.626-.012-.971.28-.65.452.459.244 1.155.57 2.063.547.56-.014.936-.205.78-.4M51.58 3.028c-.54-.1-.912.074-1.399.401-.45.304-.83.813-1.092 1.395-.344.76.386 1.437.866 1.076.662-.5 1.41-.857 1.914-1.641.255-.397.126-1.152-.29-1.23M66.234 9c-.923 0-2.062.305-2.227.708-.074.182.437.384.836.247.537-.185 1.29-.187 1.832-.364.59-.193.337-.591-.441-.591M60.589 9.375c-.101-.522-.482-.493-.556.048-.12.852.102 1.815.423 2.412.213.396.543.02.544-.494.002-.736-.283-1.302-.411-1.966M69.955 3.569c-.44-.473-1.713-.712-2.727-.479-.37.085-.24.315.044.396.601.173 1.168.408 1.848.503.49.069 1.042-.199.835-.42M73.956 10.626c-.231-.836-.735-1.255-1.316-1.507-.24-.104-.5-.147-.75-.1-.148.028-.273.063-.407.161-.032.022-.373.238-.223.161-.282.148-.382.791-.057.979.117.067.22.24.333.325.168.128.336.247.508.364.327.219.564.609.873.868.537.45 1.27-.42 1.04-1.251M66.549 15.017c-.83-.233-.486 2.056-.435 2.528.055.51.678.664.741.08.068-.628.42-2.405-.306-2.608M54.803 16.301c-.065-.347-.1-.709-.19-1.038-.107-.393-.44-.32-.532.052-.186.746-.052 2.313.405 2.636.225.16.545-.077.512-.623-.024-.375-.13-.676-.195-1.027M39.534 21.024c-.423.212-.58 1.352-.523 2.174.066.946.664 1.13.785.144.065-.538.22-1.041.203-1.612-.016-.528-.238-.82-.465-.706M15.946 21.201c-.04-.142-.134-.197-.214-.2-.311-.02-.464.621-.576 1.05-.124.468-.188.945-.14 1.461.053.562.486.699.57.088.053-.375.146-.754.233-1.107.108-.439.265-.815.127-1.292M14.918 16.274c-.067-.169-.25-.279-.46-.274-.571.015-1.05.232-1.55.61-.562.422-.976 1.023-.899 1.675.081.697.993.942 1.574.476.407-.326.746-.755 1.058-1.149.364-.462.441-.923.277-1.338M62.906 5.209c-.447-.277-1.34-.251-1.957-.083-.279.077-.57.172-.738.298-.069.051-.108.105-.15.16-.025.038-.037.076-.038.115.043.077.042.09-.003.037-.154.243.622.357.925.173.227-.051.444-.104.705-.13.521-.054 1.021-.089 1.286-.315.092-.078.088-.182-.03-.255M52.906 8.291c-.191-.24-.402-.204-.634-.28-.218-.073-.326.255-.245.491.117.34.438.509.697.497.26-.01.37-.472.182-.708M80.437 1.283c-.385-.22-.844-.327-1.272-.266-.497.071-.7.363-1.033.724-.356.388.07 1.143.54.93l-.065-.083c.095.05.192.08.295.09.177.032.31.074.477.16.373.189.702.503 1.023.78.348.301 1.738.788 1.586-.245-.141-.963-.789-1.652-1.551-2.09M78.955 8.082c-.134-.55-.259-1.126-.366-1.703-.102-.548-.457-.476-.541.05-.073.453-.057.877.01 1.331.083.548.286.874.512 1.17.11.144.276.048.357-.132.097-.215.088-.476.028-.716M87.395 8c-.77.016-1.317.338-2.032.43-.505.065-.477.525.046.56.713.047 1.359-.082 2.053-.14.468-.04 1.35.253 1.516-.164.191-.483-.906-.7-1.583-.685M81.958 14.767c-.103-.44-.306-.8-.377-1.279-.095-.644-.518-.678-.57.063-.07.998.19 1.845.53 2.34.293.426.566-.494.417-1.124M99.918 9.365c-.177-.18-.36-.23-.56-.337-.295-.16-.508.405-.225.646.181.155.805.626.863.04.012-.119-.003-.273-.078-.349M93.308 4.792c-.387-.436-.932-.682-1.466-.78-.809-.145-1.17 1.02-.47 1.477.65.427 1.772 2.34 2.503 1.097.376-.641-.178-1.356-.567-1.794M91.498 10.138c-.32.55-.428 1.334-.494 2.18-.043.546.266.928.442.494.21-.512.38-1.126.522-1.741.139-.605-.204-1.393-.47-.933M103.977 8.863c-.265-1.177-1.477-2.153-2.51-1.784-.548.195-.653 1.156-.104 1.442.294.153.53.397.762.655.326.36.549.611.988.784.564.223.992-.535.864-1.097M100.988 4.781c.03-.437-.169-.702-.568-.724-.906-.33-1.89.849-2.3 1.608-.47.873.538 1.63 1.223 1.22.683-.406 1.786-1.108 1.645-2.104M110.532 7.06c-.238-.218-.568.203-.463.619l.012.045c-.01.096-.001.204 0 .297 0 .14-.016.294-.025.434-.012.181-.043.357-.053.539-.013.245.016.45.06.612.091.33.32.515.53.304.108-.11.286-.37.335-.709.04-.276.058-.554.07-.836.024-.568-.189-1.052-.466-1.306M108.458 14.127c-.434-.548-.995-.921-1.662-1.103-.746-.203-1.116.933-.445 1.28.216.11.4.251.557.443.204.248.42.648.672.84.348.262.868.645 1.249.23.437-.478-.064-1.305-.37-1.69M117.71 13.184c-.282.276-.558.555-.852.815-.143.126-.333.256-.446.42-.108.156-.174.34-.284.489-.392.535.193 1.412.694.973.104-.091.318-.086.446-.134.16-.062.324-.11.486-.169.51-.186.872-.578 1.145-1.11.418-.816-.553-1.907-1.188-1.284M97.93 18.019c-.834-.165-1.209.791-.697 1.348.495.538 1.83 2.49 2.627 1.2.636-1.034-1.044-2.373-1.93-2.548M124.69 17.006c-.372.072-.428.396-.629.626-.202.23.139.496.376.3.22-.181.506-.403.559-.676.032-.168-.129-.285-.307-.25M115.979 19.839c-.079-.499-.153-.976-.264-1.445-.205-.86-.853-.174-.689.73.089.49.148.982.25 1.46.196.907.849.182.703-.745M78.957 24.496c.068-.31.05-.616-.02-.91-.077-.321-.14-.65-.183-1.002-.099-.82-.671-.76-.736.076-.056.71.019 1.361.23 1.918.132.348.265.461.467.377-.18.076.075.038.116.016.071-.038.117-.183.135-.33.01-.08.063-.472-.009-.145M61.924 22.403c-.057-.057-.16-.13-.189-.2-.132-.33-.73-.229-.735.1-.004.27.047.533.379.665.186.073.458.02.543-.14l.027-.053c.06-.114.083-.266-.025-.372M106.798 22.22c-.107-.292-.757-.304-.794.028-.032.293.107.618.488.731.229.068.532-.032.507-.257-.021-.186-.137-.329-.201-.502M70.884 28.197c-.13-.291-.716-.24-.83.025-.131.304-.034.606.41.754.101.033.24.034.334-.012.326-.16.181-.553.086-.767", "transform", "translate(161 68)"], [1, "olhos"], ["fill", "#633", "d", "M51.976 32.505c.27 2.748-1.735 5.197-4.476 5.47-2.748.274-5.199-1.732-5.476-4.48-.27-2.748 1.735-5.197 4.483-5.47 2.748-.274 5.192 1.733 5.469 4.48M93.976 28.505c.27 2.748-1.735 5.197-4.483 5.47-2.748.273-5.192-1.733-5.469-4.48-.27-2.748 1.735-5.197 4.483-5.47 2.748-.274 5.192 1.733 5.469  4.48M65.03 45.127c2.1-5.726 9.106-6.606 13.113-2.171.408.462-.277 1.204-.725.77-3.981-3.892-9.17-2.951-11.83 1.745-.187.333-.68-.002-.558-.344 ", "transform", "translate(161 68)"], ["fill-rule", "nonzero", "stroke", "#979797", "stroke-linecap", "round", "stroke-width", "1.8", 1, "left-sparks"], ["d", "M23.684 5.789L30 1.158", "transform", "rotate(-90 157 13)"], ["d", "M0 5.789L6.316 1.158", "transform", "rotate(-90 157 13) matrix(-1 0 0 1 6.316 0)"], ["d", "M15.789 4.632L15.789 0", "transform", "rotate(-90 157 13)"], ["fill-rule", "nonzero", "stroke", "#979797", "stroke-linecap", "round", "stroke-width", "1.8", 1, "right-sparks"], ["d", "M23.684 5.789L30 1.158", "transform", "matrix(0 -1 -1 0 318 170)"], ["d", "M0 5.789L6.316 1.158", "transform", "matrix(0 -1 -1 0 318 170) matrix(-1 0 0 1 6.316 0)"], ["d", "M15.789 4.632L15.789 0", "transform", "matrix(0 -1 -1 0 318 170)"], ["fill", "#4B4B62", "fill-rule", "nonzero", "stroke", "#4B4B62", "stroke-width", "2", "d", "M198.754 186c1.56 0 2.246-.703 2.246-2.3v-41.4c0-1.597-.686-2.3-2.246-2.3h-9.608c-1.56 0-2.247.703-2.247 2.3v19.678h-5.802c-1.185 0-1.934-.83-1.934-2.172V142.3c0-1.597-.686-2.3-2.246-2.3h-9.67c-1.56 0-2.247.703-2.247 2.3v22.425c0 7.283 3.244 10.606 11.355 10.606H186.9v8.369c0 1.597.687 2.3 2.247 2.3h9.608zm32.277 1c15.3 0 18.969-5.248 18.969-13.056V152.12c0-7.808-3.67-13.12-18.969-13.12-15.3 0-19.031 5.312-19.031 13.12v21.824c0 7.808 3.732 13.056 19.031 13.056zm.969-12c-4.25 0-5-1.27-5-2.986v-17.091c0-1.652.75-2.923 5-2.923 4.313 0 5 1.27 5 2.923v17.09c0 1.716-.688 2.987-5 2.987zm62.754 11c1.56 0 2.246-.703 2.246-2.3v-41.4c0-1.597-.686-2.3-2.246-2.3h-9.608c-1.56 0-2.247.703-2.247 2.3v19.678h-5.802c-1.185 0-1.934-.83-1.934-2.172V142.3c0-1.597-.686-2.3-2.246-2.3h-9.67c-1.56 0-2.247.703-2.247 2.3v22.425c0 7.283 3.244 10.606 11.355 10.606H282.9v8.369c0 1.597.687 2.3 2.247 2.3h9.608z", 1, "path"], [1, "text-center"], ["href", "/", 1, "btn", "btn-primary"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "g", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mask", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "use", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "use", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "g", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "g", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "g", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "g", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "g", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "g", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Go back to home page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */", ".fundo[_ngcontent-%COMP%]{\n      animation: scales 3s alternate  infinite;\n      transform-origin: center;\n    }\n    .pao-baixo[_ngcontent-%COMP%]{\n       animation: rotatepao 14s cubic-bezier(.1,.49,.41,.97)  infinite;\n      transform-origin: center;\n    }\n    .pao-cima[_ngcontent-%COMP%]{\n       animation: rotatepao 7s 1s cubic-bezier(.1,.49,.41,.97)  infinite;\n      transform-origin: center;\n    }\n    .olhos[_ngcontent-%COMP%]{animation: olhos   2s  alternate  infinite;\n       transform-origin: center;\n    }\n    \n    .left-sparks[_ngcontent-%COMP%]{animation: left-sparks   4s  alternate  infinite;\n          transform-origin: 150px 156px;\n    }\n    \n    .right-sparks[_ngcontent-%COMP%]{animation: left-sparks   4s  alternate  infinite;\n          transform-origin: 310px 150px;\n    }\n    \n    .olhos[_ngcontent-%COMP%]{animation: olhos   2s  alternate  infinite;\n       transform-origin: center;\n    }\n    @keyframes scales{\n      from { transform: scale(0.98)}\n      to{ transform: scale(1)}\n    }\n    \n    @keyframes rotatepao{\n      0% { transform:  rotate(0deg)}\n      50% , 60%{ transform:  rotate(-20deg)}\n      100%{  transform:  rotate(0deg) }\n     \n    }\n    \n    @keyframes olhos{\n      0%{\n        transform: rotateX(0deg);\n      }\n       100%{\n        transform: rotateX(30deg);\n      }\n    }\n    \n    @keyframes left-sparks{\n      0%{\n        opacity: 0; \n      }\n      \n    }\n    \n    \n    .main[_ngcontent-%COMP%]{\n      margin: 0px auto;\n      margin-top: 8rem;\n      width: auto;\n      max-width: 460px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n    \n    .path[_ngcontent-%COMP%] {\n      stroke-dasharray: 300;\n      stroke-dashoffset: 300;\n      animation: dash 4s   alternate infinite;\n    }\n    \n    @keyframes dash{\n       0%, 30%{\n         fill: 4B4B62;\n        stroke-dashoffset:   0;\n      }\n       80%,100%{\n         fill: transparent;\n        stroke-dashoffset:  -200;\n      }\n       \n      \n    }"] });


/***/ }),

/***/ "ILLc":
/*!***********************************************************************!*\
  !*** ./src/app/services/guard/redirect-home/redirect-home.service.ts ***!
  \***********************************************************************/
/*! exports provided: RedirectHome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirectHome", function() { return RedirectHome; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/auth.service */ "9ans");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class RedirectHome {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (!this.authService.isLoggedin())
            return true;
        this.router.navigate(['/home']);
        return false;
    }
}
RedirectHome.ɵfac = function RedirectHome_Factory(t) { return new (t || RedirectHome)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
RedirectHome.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RedirectHome, factory: RedirectHome.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "IP6U":
/*!******************************************************************************!*\
  !*** ./src/app/app-navigation/my-blogs/create-blog/create-blog.component.ts ***!
  \******************************************************************************/
/*! exports provided: CreateBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBlogComponent", function() { return CreateBlogComponent; });
/* harmony import */ var _common_toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../common/toastr */ "BUNJ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_my_blog_my_blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/my-blog/my-blog.service */ "JNJC");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _custom_directives_title_case_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../custom-directives/title-case.directive */ "ptLb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function CreateBlogComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.imageData, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", ctx_r0.form.value.name);
} }
// export class CreateBlogComponent implements OnInit {
//   constructor() { }
//   ngOnInit(): void {
//   }
// }
class CreateBlogComponent extends _common_toastr__WEBPACK_IMPORTED_MODULE_0__["Toastr"] {
    constructor(service, toastr) {
        super(toastr);
        this.service = service;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            subtitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            summary: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            publishNow: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        });
        this.imageData = "";
    }
    onFileSelect(event) {
        const htmlInputElem = event.target;
        if (htmlInputElem.files != null) {
            const file = htmlInputElem.files[0];
            this.form.patchValue({ image: file });
            const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
            if (file && allowedMimeTypes.includes(file.type)) {
                const reader = new FileReader();
                reader.onload = () => {
                    console.log("Read file");
                    this.imageData = reader.result;
                };
                reader.readAsDataURL(file);
            }
        }
    }
    onSubmit() {
        this.form.disable();
        const formData = new FormData();
        // console.log("Type is: ",this.form.value)
        var obj = this.form.value;
        for (var key in this.form.value) {
            formData.append(key, obj[key]);
        }
        // console.log("Form data is: ",formData,typeof(formData))
        this.service.create(formData)
            .subscribe((response) => { console.log(response); this.showSuccess("Your blog has been created successfully", "Blog Created"); });
    }
    clear() {
        this.form.reset();
        this.form.enable();
    }
}
CreateBlogComponent.ɵfac = function CreateBlogComponent_Factory(t) { return new (t || CreateBlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_my_blog_my_blog_service__WEBPACK_IMPORTED_MODULE_3__["MyBlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
CreateBlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreateBlogComponent, selectors: [["app-create-blog"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 39, vars: 2, consts: [[1, "card", "mx-auto", 2, "width", "600px"], [3, "formGroup", "ngSubmit"], [1, "card-body"], [1, "form-group"], ["for", "title"], ["type", "text", "id", "title", "appTitleCase", "", "formControlName", "title", 1, "form-control"], ["for", "subtitle"], ["type", "text", "id", "subtitle", "formControlName", "subtitle", 1, "form-control"], ["for", "summary"], ["id", "summary", "formControlName", "summary", "rows", "3", 1, "form-control", "md-textarea-auto"], ["for", "description"], ["id", "description", "formControlName", "description", "name", "description", "rows", "10", 1, "form-control", "md-textarea-auto"], [1, "input-group", "mb-3"], ["for", "publishNow"], [1, "input-group-prepend"], [1, "input-group-text"], ["type", "checkbox", "id", "publishNow", "formControlName", "publishNow"], ["for", "imageUrl"], [4, "ngIf"], ["type", "file", 1, "btn", "btn-outline-primary", 3, "change"], [1, "card-footer"], [1, "btn", "btn-block", "btn-raised", "btn-success"], [1, "btn", "btn-block", "btn-raised", "btn-secondary", 3, "click"], ["height", "200px", 2, "display", "block", "margin-left", "auto", "margin-right", "auto", 3, "src", "alt"]], template: function CreateBlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CreateBlogComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Try something new?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Publish Now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Image File");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, CreateBlogComponent_div_32_Template, 3, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CreateBlogComponent_Template_input_change_33_listener($event) { return ctx.onFileSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateBlogComponent_Template_a_click_37_listener() { return ctx.clear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.imageData);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _custom_directives_title_case_directive__WEBPACK_IMPORTED_MODULE_5__["TitleCaseDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtYmxvZy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "JNJC":
/*!*****************************************************!*\
  !*** ./src/app/services/my-blog/my-blog.service.ts ***!
  \*****************************************************/
/*! exports provided: MyBlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyBlogService", function() { return MyBlogService; });
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../data.service */ "EnSQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class MyBlogService extends _data_service__WEBPACK_IMPORTED_MODULE_0__["DataService"] {
    constructor(http) {
        super("myblogs", http);
    }
}
MyBlogService.ɵfac = function MyBlogService_Factory(t) { return new (t || MyBlogService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
MyBlogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MyBlogService, factory: MyBlogService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "KflO":
/*!**********************************!*\
  !*** ./src/app/common/scroll.ts ***!
  \**********************************/
/*! exports provided: CustomScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomScroll", function() { return CustomScroll; });
class CustomScroll {
    constructor(service, spinner, page, limit) {
        this.service = service;
        this.spinner = spinner;
        this.data = [];
        this.notscrolly = true;
        this.notEmptyResult = true;
        this.page = 1;
        this.limit = 4;
        this.fetch = false;
        if (page && limit) {
            this.page = page;
            this.limit = limit;
        }
    }
    loadInitData() {
        this.service.get(this.page, this.limit).subscribe((res) => {
            this.data = res;
            console.log(res);
            this.fetch = true;
        });
        this.page += 1;
    }
    onScroll() {
        if (this.notscrolly && this.notEmptyResult) {
            this.spinner.show();
            this.notscrolly = false;
            this.loadNextData();
        }
    }
    loadNextData() {
        this.service.get(this.page, this.limit).subscribe((res) => {
            this.page += 1;
            this.spinner.hide();
            if (res.length == 0) {
                this.notEmptyResult = false;
            }
            this.notscrolly = true;
            this.data = this.data.concat(res);
            console.log(res);
        });
    }
}


/***/ }),

/***/ "Nlh7":
/*!*****************************************************************!*\
  !*** ./src/app/services/publish-blogs/publish-blogs.service.ts ***!
  \*****************************************************************/
/*! exports provided: PublishBlogsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublishBlogsService", function() { return PublishBlogsService; });
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../data.service */ "EnSQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class PublishBlogsService extends _data_service__WEBPACK_IMPORTED_MODULE_0__["DataService"] {
    constructor(http) {
        super("myblogs/publish", http);
    }
}
PublishBlogsService.ɵfac = function PublishBlogsService_Factory(t) { return new (t || PublishBlogsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PublishBlogsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PublishBlogsService, factory: PublishBlogsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "OZHD":
/*!*************************************************************************!*\
  !*** ./src/app/services/following-authors/following-authors.service.ts ***!
  \*************************************************************************/
/*! exports provided: FollowingAuthorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowingAuthorsService", function() { return FollowingAuthorsService; });
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../data.service */ "EnSQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class FollowingAuthorsService extends _data_service__WEBPACK_IMPORTED_MODULE_0__["DataService"] {
    constructor(http) {
        super('follow/authorFollowing', http);
    }
}
FollowingAuthorsService.ɵfac = function FollowingAuthorsService_Factory(t) { return new (t || FollowingAuthorsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
FollowingAuthorsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FollowingAuthorsService, factory: FollowingAuthorsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "OxZr":
/*!*******************************************************************!*\
  !*** ./src/app/app-navigation/restaurant/restaurant.component.ts ***!
  \*******************************************************************/
/*! exports provided: RestaurantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantComponent", function() { return RestaurantComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_restaurant_restaurant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/restaurant/restaurant.service */ "Rk/l");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _services_location_location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/location/location.service */ "P12i");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-infinite-scroll */ "dlKe");
/* harmony import */ var _custom_directives_lazy_load_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../custom-directives/lazy-load.directive */ "a4jb");










function RestaurantComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Showing Restaurants near ", ctx_r0.subZone, "");
} }
function RestaurantComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("You searched for: \"", ctx_r1.search, "\"");
} }
function RestaurantComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Cuisines:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Address: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Rating: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "See more details");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const restaurant_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("alt", "Featured image from ", restaurant_r3.restaurant.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", restaurant_r3.restaurant.featured_image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](restaurant_r3.restaurant.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", restaurant_r3.restaurant.cuisines, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", restaurant_r3.restaurant.location.address, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", restaurant_r3.restaurant.user_rating.aggregate_rating, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", restaurant_r3.restaurant.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
class RestaurantComponent {
    constructor(service, spinner, locationService) {
        this.service = service;
        this.spinner = spinner;
        this.locationService = locationService;
        this.data = [];
        this.search = "";
        this.searchChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.lon = null;
        this.lat = null;
        this.count = 6;
        this.start = 0;
        this.subZone = "";
        this.notEmptyResult = true;
        this.notscrolly = true;
        this.searchModelChangeSubscription = this.searchChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(800), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])())
            .subscribe(newSearch => {
            this.search = newSearch;
            this.notEmptyResult = true;
            this.data = [];
            this.start = 0;
            this.loadRestaurants();
        });
    }
    ngOnInit() {
        this.locationService.getLocationDetails()
            .subscribe(location => {
            this.lon = location.longitude;
            this.lat = location.latitude;
            this.subZone = location.title + ", " + location.city_name;
            this.loadRestaurants();
            console.log(location);
        });
    }
    loadRestaurants() {
        this.spinner.show();
        let data = {};
        if (this.search == '') {
            data = {
                lon: this.lon,
                lat: this.lat
            };
        }
        else {
            data = {
                q: this.search,
                lon: this.lon,
                lat: this.lat,
                count: this.count,
                start: this.start
            };
        }
        this.service.loadRestaurantData(data)
            .subscribe((res) => {
            if (res.length == 0) {
                this.notEmptyResult = false;
            }
            this.start += this.count;
            this.data = this.data.concat(res);
            this.spinner.hide();
        });
    }
    onScroll() {
        // console.log("Yo");
        if (this.search != '' && this.notEmptyResult && this.notscrolly) {
            console.log("Scroll working");
            this.loadRestaurants();
        }
    }
}
RestaurantComponent.ɵfac = function RestaurantComponent_Factory(t) { return new (t || RestaurantComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_restaurant_restaurant_service__WEBPACK_IMPORTED_MODULE_3__["RestaurantService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_location_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"])); };
RestaurantComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RestaurantComponent, selectors: [["app-restaurant"]], decls: 17, vars: 8, consts: [[1, "container", "mt-1"], [1, "jumbotron", "py-3", 2, "background-color", "#353b48"], [1, "row"], [1, "input-group", "col-12"], [1, "input-group-append", "bg-primary"], ["type", "button", 1, "btn", "btn-outline-secondary"], [1, "bi", "bi-search", 2, "color", "white"], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "container"], ["class", "mt-4 mx-4", 4, "ngIf"], ["infiniteScroll", "", 1, "container", "list-results", 2, "height", "65vh", 3, "infiniteScrollDistance", "infiniteScrollThrottle", "scrollWindow", "scrolled"], ["class", "col-md-4 d-flex align-items-stretch", 4, "ngFor", "ngForOf"], [1, "row", "pb-5"], [1, "col-md-12", "p-3"], ["bdOpacity", "0.9", "bdColor", "", "size", "default", "color", "#581f87", "type", "ball-pulse-sync", 3, "fullScreen"], [1, "mt-4", "mx-4"], [1, "col-md-4", "d-flex", "align-items-stretch"], [1, "card", "mb-3"], ["appLazyLoad", "", "onerror", "this.src='/assets/img/image-not-found.jpg'", "height", "200px", 1, "card-img-top", 3, "src", "alt"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["target", "_blank", "rel", "noopener noreferrer", 1, "btn", "btn-primary", 3, "href"]], template: function RestaurantComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RestaurantComponent_Template_input_ngModelChange_7_listener($event) { return ctx.search = $event; })("ngModelChange", function RestaurantComponent_Template_input_ngModelChange_7_listener($event) { return ctx.searchChanged.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, RestaurantComponent_p_9_Template, 3, 1, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, RestaurantComponent_p_10_Template, 3, 1, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scrolled", function RestaurantComponent_Template_div_scrolled_11_listener() { return ctx.onScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, RestaurantComponent_div_13_Template, 23, 7, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "ngx-spinner", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.search == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.search != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("infiniteScrollDistance", 2)("infiniteScrollThrottle", 50)("scrollWindow", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fullScreen", false);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_8__["InfiniteScrollDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerComponent"], _custom_directives_lazy_load_directive__WEBPACK_IMPORTED_MODULE_9__["LazyLoadDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXN0YXVyYW50LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "P12i":
/*!*******************************************************!*\
  !*** ./src/app/services/location/location.service.ts ***!
  \*******************************************************/
/*! exports provided: LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var _common_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../common/common.service */ "++gc");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class LocationService extends _common_common_service__WEBPACK_IMPORTED_MODULE_0__["CommonService"] {
    constructor(http) {
        super();
        this.http = http;
    }
    getPosition() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resp => {
                resolve({ lon: resp.coords.longitude, lat: resp.coords.latitude });
            }, err => {
                reject(err);
            });
        });
    }
    getLocationDetails() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.getPosition()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(pos => {
            return this.http.get(this.baseURL + `restaurants/location?lon=${pos.lon}&lat=${pos.lat}`)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => JSON.parse(JSON.stringify(response))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
        }));
    }
}
LocationService.ɵfac = function LocationService_Factory(t) { return new (t || LocationService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
LocationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: LocationService, factory: LocationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "PMpo":
/*!******************************************************************************************!*\
  !*** ./src/app/app-navigation/my-blogs/update-blog/update-blog/update-blog.component.ts ***!
  \******************************************************************************************/
/*! exports provided: UpdateBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBlogComponent", function() { return UpdateBlogComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_errors_not_found_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/errors/not-found-error */ "vTm3");
/* harmony import */ var src_app_common_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/toastr */ "BUNJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_my_blog_my_blog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../services/my-blog/my-blog.service */ "JNJC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _custom_directives_title_case_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../custom-directives/title-case.directive */ "ptLb");









class UpdateBlogComponent extends src_app_common_toastr__WEBPACK_IMPORTED_MODULE_2__["Toastr"] {
    constructor(service, route, toastr) {
        super(toastr);
        this.service = service;
        this.route = route;
        this.fileChanged = false;
        this.imageData = "";
        this.blogImageBaseURL = this.service.baseImageURL;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null),
            subtitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null),
            summary: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null),
        });
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            this.id = params.get('id');
            console.log(this.id);
        });
        this.service.get(undefined, undefined, this.id).subscribe((res) => {
            this.blog = res;
            this.imageData = this.blogImageBaseURL + this.blog.image_url;
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
                title: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.blog.title),
                subtitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.blog.subtitle),
                description: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.blog.description),
                summary: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.blog.summary),
                image: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null),
            });
        }, (err) => {
            if (err instanceof src_app_errors_not_found_error__WEBPACK_IMPORTED_MODULE_1__["NotFoundError"]) {
                console.log("Not found");
            }
        });
    }
    onSubmit() {
        // this.form.disable();
        const formData = new FormData();
        // console.log("Type is: ",this.form.value)
        console.log(this.form.value);
        const keyValue = Object.entries(this.form.controls).filter(value => value[1].dirty);
        console.log(keyValue);
        keyValue.forEach(entry => {
            formData.append(entry[0], entry[1].value);
        });
        if (this.fileChanged) {
            formData.append("image", this.form.value.image);
        }
        formData.forEach((value, key) => {
            console.log(key + ": " + value);
        });
        this.service.update(this.id, formData)
            .subscribe(res => {
            console.log(res);
            this.showSuccess("Your blog has been updated successfully", "Blog Updated");
        });
    }
    onFileSelect(event) {
        const htmlInputElem = event.target;
        if (htmlInputElem.files != null) {
            const file = htmlInputElem.files[0];
            this.form.patchValue({ image: file });
            this.fileChanged = true;
            const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
            if (file && allowedMimeTypes.includes(file.type)) {
                const reader = new FileReader();
                reader.onload = () => {
                    console.log("Read file");
                    this.imageData = reader.result;
                };
                reader.readAsDataURL(file);
            }
        }
    }
}
UpdateBlogComponent.ɵfac = function UpdateBlogComponent_Factory(t) { return new (t || UpdateBlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_my_blog_my_blog_service__WEBPACK_IMPORTED_MODULE_4__["MyBlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"])); };
UpdateBlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UpdateBlogComponent, selectors: [["app-update-blog"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 31, vars: 4, consts: [[1, "card", "mx-auto", 2, "width", "600px"], [3, "formGroup", "ngSubmit"], [1, "card-body"], [1, "form-group"], ["for", "title"], ["type", "text", "id", "title", "appTitleCase", "", "formControlName", "title", 1, "form-control"], ["for", "subtitle"], ["type", "text", "id", "subtitle", "formControlName", "subtitle", 1, "form-control"], ["for", "summary"], ["id", "summary", "formControlName", "summary", "rows", "3", 1, "form-control", "md-textarea-auto"], ["for", "description"], ["id", "description", "formControlName", "description", "name", "description", "rows", "10", 1, "form-control", "md-textarea-auto"], ["for", "imageUrl"], ["height", "200px", 2, "display", "block", "margin-left", "auto", "margin-right", "auto", 3, "src", "alt"], ["type", "file", 1, "btn", "btn-outline-primary", 3, "change"], [1, "card-footer"], [1, "btn", "btn-block", "btn-raised", "btn-success", 3, "disabled"]], template: function UpdateBlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function UpdateBlogComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Try something new?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Image File");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function UpdateBlogComponent_Template_input_change_27_listener($event) { return ctx.onFileSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.imageData, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", ctx.form.value.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.form.pristine);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _custom_directives_title_case_directive__WEBPACK_IMPORTED_MODULE_7__["TitleCaseDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtYmxvZy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "Rk/l":
/*!***********************************************************!*\
  !*** ./src/app/services/restaurant/restaurant.service.ts ***!
  \***********************************************************/
/*! exports provided: RestaurantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantService", function() { return RestaurantService; });
/* harmony import */ var _common_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../common/common.service */ "++gc");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class RestaurantService extends _common_common_service__WEBPACK_IMPORTED_MODULE_0__["CommonService"] {
    constructor(http) {
        super();
        this.http = http;
    }
    loadRestaurantData(data) {
        return this.http.post(this.baseURL + "restaurants/fetch-restaurants", data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => JSON.parse(JSON.stringify(response))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
}
RestaurantService.ɵfac = function RestaurantService_Factory(t) { return new (t || RestaurantService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
RestaurantService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: RestaurantService, factory: RestaurantService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "S9eb":
/*!**************************************************************!*\
  !*** ./src/app/custom-directives/is-authorized.directive.ts ***!
  \**************************************************************/
/*! exports provided: IsAuthorizedDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsAuthorizedDirective", function() { return IsAuthorizedDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth/auth.service */ "9ans");


class IsAuthorizedDirective {
    constructor(templateRef, vcr, userService) {
        this.templateRef = templateRef;
        this.vcr = vcr;
        this.userService = userService;
        this.hasView = false;
    }
    ngOnInit() {
        const isLoggedin = this.userService.isLoggedin();
        if (isLoggedin && !this.hasView) {
            this.vcr.createEmbeddedView(this.templateRef);
            this.hasView = true;
        }
        else if (!isLoggedin && this.hasView) {
            this.vcr.clear();
            this.hasView = false;
        }
    }
}
IsAuthorizedDirective.ɵfac = function IsAuthorizedDirective_Factory(t) { return new (t || IsAuthorizedDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
IsAuthorizedDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: IsAuthorizedDirective, selectors: [["", "appIsAuthorized", ""]] });


/***/ }),

/***/ "SZmd":
/*!***************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.ts ***!
  \***************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _email_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email.validators */ "r4NW");
/* harmony import */ var src_app_common_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/toastr */ "BUNJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function SignUpComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignUpComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SignUpComponent_div_6_div_1_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.name == null ? null : ctx_r0.name.errors == null ? null : ctx_r0.name.errors.required);
} }
function SignUpComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignUpComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Email is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignUpComponent_div_12_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Email is invalid. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignUpComponent_div_12_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Email is already taken. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignUpComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SignUpComponent_div_12_div_1_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SignUpComponent_div_12_div_2_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SignUpComponent_div_12_div_3_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.email == null ? null : ctx_r2.email.errors == null ? null : ctx_r2.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.email == null ? null : ctx_r2.email.errors == null ? null : ctx_r2.email.errors.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.email == null ? null : ctx_r2.email.errors == null ? null : ctx_r2.email.errors.shouldBeUnique);
} }
function SignUpComponent_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " password is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignUpComponent_div_17_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" password should be of minimum ", ctx_r9.password == null ? null : ctx_r9.password.errors == null ? null : ctx_r9.password.errors.minlength.requiredLength, " characters. ");
} }
function SignUpComponent_div_17_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" password should be of maximum ", ctx_r10.password == null ? null : ctx_r10.password.errors == null ? null : ctx_r10.password.errors.maxlength.requiredLength, " characters. ");
} }
function SignUpComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SignUpComponent_div_17_div_1_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SignUpComponent_div_17_div_2_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SignUpComponent_div_17_div_3_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.password == null ? null : ctx_r3.password.errors == null ? null : ctx_r3.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.password == null ? null : ctx_r3.password.errors == null ? null : ctx_r3.password.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.password == null ? null : ctx_r3.password.errors == null ? null : ctx_r3.password.errors.maxlength);
} }
class SignUpComponent extends src_app_common_toastr__WEBPACK_IMPORTED_MODULE_2__["Toastr"] {
    constructor(router, service, toastr) {
        super(toastr);
        this.router = router;
        this.service = service;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email], _email_validators__WEBPACK_IMPORTED_MODULE_1__["EmailValidators"].shouldBeUnique),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(7),
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(16),
            ]),
        });
    }
    get name() {
        return this.form.get('name');
    }
    get email() {
        return this.form.get('email');
    }
    get password() {
        return this.form.get('password');
    }
    signUp() {
        //  console.log('hi',this.form);
        //   this.service.login(this.form,'register')
        //   .subscribe(resp=>{
        //     if(resp){
        //       console.log("Yo");
        //       this.router.navigate(['/home']);
        //     }else{
        //       console.log('else');
        //     }
        //   }, error=>{
        //     console.log('error');
        //   });
        //   console.log(this.form);
        //   const formData = new FormData();
        //   // console.log("Type is: ",this.form.value)
        //   var obj=this.form.value
        //   for ( var key in this.form.value ) {
        //     formData.append(key, obj[key]);
        // }
        // console.log("Form data is: ",formData,typeof(formData))
        this.service.login(this.form.value, 'register').subscribe((response) => {
            console.log(response);
            this.showSuccess('Your account has been created successfully', 'Account Created');
        });
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"])); };
SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["app-sign-up"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 20, vars: 5, consts: [[1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "name"], ["formControlName", "name", "type", "text", "name", "name", "id", "name", "placeholder", "Enter your name", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "email"], ["formControlName", "email", "type", "email", "name", "email", "id", "email", "placeholder", "Enter your email", 1, "form-control"], [4, "ngIf"], ["for", "password"], ["formControlName", "password", "type", "password", "name", "password", "id", "password", "placeholder", "Password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], [1, "alert", "alert-danger"], ["role", "status", 1, "spinner-grow", "text-primary"], [1, "sr-only"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function SignUpComponent_Template_form_ngSubmit_1_listener() { return ctx.signUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, SignUpComponent_div_6_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, SignUpComponent_div_11_Template, 4, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, SignUpComponent_div_12_Template, 4, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, SignUpComponent_div_17_Template, 4, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_1_0 = null;
        let tmp_3_0 = null;
        let tmp_4_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.name == null ? null : ctx.name.touched) && ((tmp_1_0 = ctx.form.get("name")) == null ? null : tmp_1_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.email == null ? null : ctx.email.pending);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.email == null ? null : ctx.email.touched) && ((tmp_3_0 = ctx.form.get("email")) == null ? null : tmp_3_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.password == null ? null : ctx.password.touched) && ((tmp_4_0 = ctx.form.get("password")) == null ? null : tmp_4_0.invalid));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduLXVwLmNvbXBvbmVudC5jc3MifQ== */"] });


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
        this.title = 'fbw-frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "UqRI":
/*!***************************************************************!*\
  !*** ./src/app/app-navigation/my-blogs/my-blogs.component.ts ***!
  \***************************************************************/
/*! exports provided: MyBlogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyBlogsComponent", function() { return MyBlogsComponent; });
/* harmony import */ var src_app_common_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/common/scroll */ "KflO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_my_blog_my_blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/my-blog/my-blog.service */ "JNJC");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-infinite-scroll */ "dlKe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _custom_pipe_title_case_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../custom-pipe/title-case.pipe */ "2mS6");
/* harmony import */ var _custom_pipe_count_metric_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../custom-pipe/count-metric.pipe */ "hOaZ");









function MyBlogsComponent_div_14_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blog_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, blog_r2.publishInfo == null ? null : blog_r2.publishInfo.publishTime, "medium"), "");
} }
function MyBlogsComponent_div_14_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Unpublished ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/myblogs/blog", a1]; };
function MyBlogsComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, MyBlogsComponent_div_14_span_8_Template, 3, 4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MyBlogsComponent_div_14_ng_template_9_Template, 2, 0, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "titleCase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "countMetric");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "countMetric");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blog_r2 = ctx.$implicit;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r0.blogImageBaseURL + blog_r2.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](blog_r2.author.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", blog_r2.publishInfo.isPublish)("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c0, blog_r2._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 9, blog_r2.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", blog_r2.summary, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 11, blog_r2.likedBy.length), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 13, blog_r2.dislikedBy.length), "");
} }
function MyBlogsComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Your have not created any blog. Create now?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyBlogsComponent_div_15_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.createBlog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Create blog");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class MyBlogsComponent extends src_app_common_scroll__WEBPACK_IMPORTED_MODULE_0__["CustomScroll"] {
    constructor(router, service, spinner) {
        super(service, spinner);
        this.router = router;
        this.blogImageBaseURL = service.baseImageURL;
    }
    ngOnInit() {
        this.loadInitData();
    }
    createBlog() {
        this.router.navigate(['/myblogs/createBlog']);
    }
}
MyBlogsComponent.ɵfac = function MyBlogsComponent_Factory(t) { return new (t || MyBlogsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_my_blog_my_blog_service__WEBPACK_IMPORTED_MODULE_3__["MyBlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"])); };
MyBlogsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MyBlogsComponent, selectors: [["app-my-blogs"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 19, vars: 6, consts: [[1, "container", "mt-1"], [1, "jumbotron", "py-3", 2, "background-color", "#353b48"], [1, "row"], [1, "input-group", "col-9", "mr-4"], [1, "input-group-append", "bg-primary"], ["type", "button", 1, "btn", "btn-outline-secondary"], [1, "bi", "bi-search", 2, "color", "white"], ["type", "text", "ng-model", "query", "ng-model-options", "{ debounce: 800 }", "ng-change", "fetchRestaurants()", "aria-label", "Text input with dropdown button", 1, "form-control"], [1, "divider"], ["type", "button", 1, "btn", "btn-outline-success", "ml-5", 2, "color", "white", 3, "click"], [1, "bi", "bi-journal-richtext"], ["infiniteScroll", "", 1, "container", "blog-results", 3, "infiniteScrollDistance", "infiniteScrollThrottle", "scrollWindow", "scrolled"], ["class", "col-md-6 d-flex align-items-stretch", 4, "ngFor", "ngForOf"], ["style", "height:50vh;", "class", "jumbotron text-center text-primary", 4, "ngIf"], [1, "row", "pb-5"], [1, "col-md-12", "p-5"], ["bdOpacity", "0.9", "bdColor", "", "size", "default", "color", "#581f87", "type", "ball-pulse-sync", 3, "fullScreen"], [1, "col-md-6", "d-flex", "align-items-stretch"], [1, "card", "mb-3"], ["height", "200px", "alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "blog-date"], [4, "ngIf", "ngIfElse"], ["unPublishText", ""], [1, "blog-title", 3, "routerLink"], [1, "blog-summary"], [1, "likesPreview", "ml-4"], [1, "bi", "bi-hand-thumbs-up-fill"], [1, "dislikesPreview", "ml-4"], [1, "bi", "bi-hand-thumbs-down-fill"], [2, "color", "red"], [1, "jumbotron", "text-center", "text-primary", 2, "height", "50vh"], ["type", "button", 1, "btn", "btn-success", 3, "click"]], template: function MyBlogsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyBlogsComponent_Template_button_click_9_listener() { return ctx.createBlog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Create blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scrolled", function MyBlogsComponent_Template_div_scrolled_12_listener() { return ctx.onScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, MyBlogsComponent_div_14_Template, 28, 17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, MyBlogsComponent_div_15_Template, 6, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "ngx-spinner", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("infiniteScrollDistance", 2)("infiniteScrollThrottle", 50)("scrollWindow", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.length == 0 && ctx.fetch);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fullScreen", false);
    } }, directives: [ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_5__["InfiniteScrollDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], pipes: [_custom_pipe_title_case_pipe__WEBPACK_IMPORTED_MODULE_7__["TitleCasePipe"], _custom_pipe_count_metric_pipe__WEBPACK_IMPORTED_MODULE_8__["CountMetricPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: [".bg-grey[_ngcontent-%COMP%]{\r\n    background-color: #f5f4ef;\r\n}\r\n\r\n.divider[_ngcontent-%COMP%]{\r\n    border-left: 2px solid white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWJsb2dzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEMiLCJmaWxlIjoibXktYmxvZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1ncmV5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjRlZjtcclxufVxyXG5cclxuLmRpdmlkZXJ7XHJcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHdoaXRlO1xyXG59Il19 */"] });


/***/ }),

/***/ "X5uL":
/*!*********************************************************************************!*\
  !*** ./src/app/services/not-following-authors/not-following-authors.service.ts ***!
  \*********************************************************************************/
/*! exports provided: NotFollowingAuthorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFollowingAuthorsService", function() { return NotFollowingAuthorsService; });
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class NotFollowingAuthorsService extends src_app_services_data_service__WEBPACK_IMPORTED_MODULE_0__["DataService"] {
    constructor(http) {
        super('follow/authorNotFollowing', http);
    }
}
NotFollowingAuthorsService.ɵfac = function NotFollowingAuthorsService_Factory(t) { return new (t || NotFollowingAuthorsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
NotFollowingAuthorsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NotFollowingAuthorsService, factory: NotFollowingAuthorsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "XWQ3":
/*!************************************************************!*\
  !*** ./src/app/app-navigation/app-navigation.component.ts ***!
  \************************************************************/
/*! exports provided: AppNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppNavigationComponent", function() { return AppNavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/auth/auth.service */ "9ans");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _custom_directives_is_authorized_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../custom-directives/is-authorized.directive */ "S9eb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function AppNavigationComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Subscriptions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppNavigationComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "My Blogs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppNavigationComponent_h6_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome, ", ctx_r2.currentUser, " ");
} }
function AppNavigationComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppNavigationComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppNavigationComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppNavigationComponent_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.signIn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppNavigationComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.websiteName = "AIT-FBW";
    }
    ngOnInit() {
    }
    get currentUser() {
        return this.authService.currentUser;
    }
    get loggedIn() {
        return this.authService.isLoggedin();
    }
    signIn() {
        this.router.navigate(['/login']);
    }
    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}
AppNavigationComponent.ɵfac = function AppNavigationComponent_Factory(t) { return new (t || AppNavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppNavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppNavigationComponent, selectors: [["app-app-navigation"]], decls: 32, vars: 3, consts: [[1, "navbar", "sticky-top", "navbar-expand", "navbar-light", "bg-white", "topbar", "mb-4", "static-top", "shadow"], ["routerLink", "/home", 1, "navbar-brand"], ["src", "assets/img/Logo.jpg", "width", "35", "height", "35", "alt", ""], [1, "collapse", "navbar-collapse", "navbar-nav"], ["routerLinkActive", "active", "routerLink", "/home", 1, "nav-item", "nav-link"], ["class", "nav-item nav-link", "routerLinkActive", "active", "routerLink", "/my-subscriptions", 4, "appIsAuthorized"], ["class", "nav-item nav-link", "routerLinkActive", "active", "routerLink", "/myblogs", 4, "appIsAuthorized"], ["routerLinkActive", "active", "routerLink", "/restaurants", 1, "nav-item", "nav-link"], ["class", "black-text", 4, "appIsAuthorized"], ["class", "btn btn-dark ml-3", "id", "lgbtn", 3, "click", 4, "appIsAuthorized"], ["class", "btn btn-outline-success ml-3", "id", "signinbtn", 3, "click", 4, "ngIf"], [1, "social-footer"], [1, "social-footer-left"], ["href", "#", 2, "text-decoration", "none"], ["width", "30px", "height", "30px", "src", "/assets/img/Logo.jpg", 1, "logo"], [2, "font-size", "14px"], [1, "social-footer-icons"], [1, "menu", "simple"], ["target", "_blank", "rel", "noopener noreferrer", "id", "rssIcon", "href", "feeds/rss"], [1, "bi", "bi-rss-fill"], ["routerLinkActive", "active", "routerLink", "/my-subscriptions", 1, "nav-item", "nav-link"], ["routerLinkActive", "active", "routerLink", "/myblogs", 1, "nav-item", "nav-link"], [1, "black-text"], ["id", "lgbtn", 1, "btn", "btn-dark", "ml-3", 3, "click"], ["id", "signinbtn", 1, "btn", "btn-outline-success", "ml-3", 3, "click"]], template: function AppNavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppNavigationComponent_a_7_Template, 2, 0, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppNavigationComponent_a_8_Template, 2, 0, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Restaurants");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppNavigationComponent_h6_11_Template, 2, 1, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppNavigationComponent_button_12_Template, 2, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppNavigationComponent_button_13_Template, 2, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "footer", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Developed By ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Meet Bhanushali, Dev Chaurasia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Arvind Sridhar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.websiteName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.websiteName, " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _custom_directives_is_authorized_directive__WEBPACK_IMPORTED_MODULE_3__["IsAuthorizedDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".nav-link.active[_ngcontent-%COMP%], .navbar-nav[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{\r\n    color: #555;\r\n    cursor: default;\r\n    background-color: #fff;\r\n    font-weight: bold;\r\n    border-bottom: 3px solid #e9a39c;\r\n  }\r\n\r\n\r\n  .social-footer[_ngcontent-%COMP%] {\r\n    padding: 1rem;\r\n    background: #fefefe;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n  }\r\n\r\n\r\n  \r\n\r\n\r\n  .social-footer[_ngcontent-%COMP%]   .social-footer-icons[_ngcontent-%COMP%]{\r\n    font-size: 1.3rem;\r\n    color: #fefefe;\r\n    margin-left: 0;\r\n  }\r\n\r\n\r\n  #rssIcon[_ngcontent-%COMP%]{\r\n    color:#ee802f\r\n  }\r\n\r\n\r\n  #rssIcon[_ngcontent-%COMP%]:hover{\r\n    color:#df6711\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsZ0NBQWdDO0VBQ2xDOzs7RUFHQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFHbkIsYUFBYTtJQUdMLG1CQUFtQjtJQUduQiw4QkFBOEI7RUFDeEM7OztFQUVBOztLQUVHOzs7RUFFSDtJQUNFLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsY0FBYztFQUNoQjs7O0VBRUE7SUFDRTtFQUNGOzs7RUFFQTtJQUNFO0VBQ0YiLCJmaWxlIjoiYXBwLW5hdmlnYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtbGluay5hY3RpdmUsIC5uYXZiYXItbmF2PmE6aG92ZXJ7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZTlhMzljO1xyXG4gIH1cclxuXHJcblxyXG4gIC5zb2NpYWwtZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmVmZWZlO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG4gIFxyXG4gIC8qIC5zb2NpYWwtZm9vdGVyIC5zb2NpYWwtZm9vdGVyLWljb25zIGxpOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9ICovXHJcbiAgXHJcbiAgLnNvY2lhbC1mb290ZXIgLnNvY2lhbC1mb290ZXItaWNvbnN7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIGNvbG9yOiAjZmVmZWZlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gICNyc3NJY29ue1xyXG4gICAgY29sb3I6I2VlODAyZlxyXG4gIH1cclxuXHJcbiAgI3Jzc0ljb246aG92ZXJ7XHJcbiAgICBjb2xvcjojZGY2NzExXHJcbiAgfVxyXG4gIFxyXG4gICJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-infinite-scroll */ "dlKe");
/* harmony import */ var ngx_bootstrap_confirm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap-confirm */ "C6FI");
/* harmony import */ var _custom_interceptor_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-interceptor.module */ "E4ka");
/* harmony import */ var _services_guard_redirect_home_redirect_home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/guard/redirect-home/redirect-home.service */ "ILLc");
/* harmony import */ var _services_guard_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/guard/auth-guard/auth-guard.service */ "1I/p");
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/common/common.service */ "++gc");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth/auth.service */ "9ans");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/sign-in/sign-in.component */ "BOkJ");
/* harmony import */ var _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/sign-up/sign-up.component */ "SZmd");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user/user.component */ "3nXK");
/* harmony import */ var _app_navigation_app_navigation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-navigation/app-navigation.component */ "XWQ3");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_navigation_home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-navigation/home/home.component */ "5oLd");
/* harmony import */ var _app_navigation_my_blogs_my_blogs_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app-navigation/my-blogs/my-blogs.component */ "UqRI");
/* harmony import */ var _app_navigation_my_blogs_create_blog_create_blog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app-navigation/my-blogs/create-blog/create-blog.component */ "IP6U");
/* harmony import */ var _custom_pipe_title_case_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./custom-pipe/title-case.pipe */ "2mS6");
/* harmony import */ var _custom_directives_title_case_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./custom-directives/title-case.directive */ "ptLb");
/* harmony import */ var _app_navigation_my_blogs_blog_blog_blog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app-navigation/my-blogs/blog/blog/blog.component */ "phry");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_navigation_my_blogs_update_blog_update_blog_update_blog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./app-navigation/my-blogs/update-blog/update-blog/update-blog.component */ "PMpo");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _custom_directives_is_authorized_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./custom-directives/is-authorized.directive */ "S9eb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _custom_pipe_read_less_more_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./custom-pipe/read-less-more.pipe */ "g7wr");
/* harmony import */ var _app_navigation_restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./app-navigation/restaurant/restaurant.component */ "OxZr");
/* harmony import */ var _app_navigation_home_view_blog_view_blog_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./app-navigation/home/view-blog/view-blog.component */ "q8aM");
/* harmony import */ var _custom_directives_lazy_load_directive__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./custom-directives/lazy-load.directive */ "a4jb");
/* harmony import */ var _components_follow_follow_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/follow/follow.component */ "l2O0");
/* harmony import */ var _components_publish_publish_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/publish/publish.component */ "ZSQr");
/* harmony import */ var _components_like_dislike_like_dislike_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/like-dislike/like-dislike.component */ "lJjY");
/* harmony import */ var _app_navigation_subscriptions_subscriptions_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./app-navigation/subscriptions/subscriptions.component */ "2EWz");
/* harmony import */ var _components_following_authors_following_authors_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/following-authors/following-authors.component */ "0Ei/");
/* harmony import */ var _components_not_following_authors_not_following_authors_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/not-following-authors/not-following-authors.component */ "xUWY");
/* harmony import */ var _custom_pipe_count_metric_pipe__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./custom-pipe/count-metric.pipe */ "hOaZ");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "F33o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/core */ "fXoL");























// import { ConfirmBoxComponent } from './components/confirm-box/confirm-box/confirm-box.component';



















function tokenGetter() {
    return localStorage.getItem("token");
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵdefineInjector"]({ providers: [
        _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
        _services_common_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
        _services_guard_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"],
        _services_guard_redirect_home_redirect_home_service__WEBPACK_IMPORTED_MODULE_3__["RedirectHome"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"],
            useClass: _custom_interceptor_module__WEBPACK_IMPORTED_MODULE_2__["CustomInterceptor"],
            multi: true
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_0__["InfiniteScrollModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_26__["NgxSpinnerModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"],
            ngx_bootstrap_confirm__WEBPACK_IMPORTED_MODULE_1__["NgxBootstrapConfirmModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_24__["ToastrModule"].forRoot({
                timeOut: 5000,
                positionClass: 'toast-bottom-right',
                preventDuplicates: true,
                closeButton: true
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
        _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_11__["SignInComponent"],
        _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_12__["SignUpComponent"],
        _user_user_component__WEBPACK_IMPORTED_MODULE_13__["UserComponent"],
        _app_navigation_app_navigation_component__WEBPACK_IMPORTED_MODULE_14__["AppNavigationComponent"],
        _app_navigation_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
        _app_navigation_my_blogs_my_blogs_component__WEBPACK_IMPORTED_MODULE_17__["MyBlogsComponent"],
        _app_navigation_my_blogs_create_blog_create_blog_component__WEBPACK_IMPORTED_MODULE_18__["CreateBlogComponent"],
        _custom_pipe_title_case_pipe__WEBPACK_IMPORTED_MODULE_19__["TitleCasePipe"],
        _custom_directives_title_case_directive__WEBPACK_IMPORTED_MODULE_20__["TitleCaseDirective"],
        _app_navigation_my_blogs_blog_blog_blog_component__WEBPACK_IMPORTED_MODULE_21__["BlogComponent"],
        _app_navigation_my_blogs_update_blog_update_blog_update_blog_component__WEBPACK_IMPORTED_MODULE_23__["UpdateBlogComponent"],
        _custom_directives_is_authorized_directive__WEBPACK_IMPORTED_MODULE_25__["IsAuthorizedDirective"],
        _custom_pipe_read_less_more_pipe__WEBPACK_IMPORTED_MODULE_27__["ReadLessMorePipe"],
        _app_navigation_restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_28__["RestaurantComponent"],
        _app_navigation_home_view_blog_view_blog_component__WEBPACK_IMPORTED_MODULE_29__["ViewBlogComponent"],
        _custom_directives_lazy_load_directive__WEBPACK_IMPORTED_MODULE_30__["LazyLoadDirective"],
        _components_follow_follow_component__WEBPACK_IMPORTED_MODULE_31__["FollowComponent"],
        _components_publish_publish_component__WEBPACK_IMPORTED_MODULE_32__["PublishComponent"],
        _components_like_dislike_like_dislike_component__WEBPACK_IMPORTED_MODULE_33__["LikeDislikeComponent"],
        _app_navigation_subscriptions_subscriptions_component__WEBPACK_IMPORTED_MODULE_34__["SubscriptionsComponent"],
        _components_following_authors_following_authors_component__WEBPACK_IMPORTED_MODULE_35__["FollowingAuthorsComponent"],
        _components_not_following_authors_not_following_authors_component__WEBPACK_IMPORTED_MODULE_36__["NotFollowingAuthorsComponent"],
        _custom_pipe_count_metric_pipe__WEBPACK_IMPORTED_MODULE_37__["CountMetricPipe"],
        _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_38__["NotFoundComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_0__["InfiniteScrollModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_26__["NgxSpinnerModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"],
        ngx_bootstrap_confirm__WEBPACK_IMPORTED_MODULE_1__["NgxBootstrapConfirmModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_24__["ToastrModule"]] }); })();


/***/ }),

/***/ "ZSQr":
/*!*********************************************************!*\
  !*** ./src/app/components/publish/publish.component.ts ***!
  \*********************************************************/
/*! exports provided: PublishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublishComponent", function() { return PublishComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function PublishComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Published on ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, ctx_r0.publishTime, "medium"), "");
} }
function PublishComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Publish Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PublishComponent {
    constructor() {
        this.isPublished = true;
        this.publishTime = 0;
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onClick() {
        this.isPublished = !this.isPublished;
        this.publishTime = Date.now();
        this.click.emit(this.isPublished);
    }
}
PublishComponent.ɵfac = function PublishComponent_Factory(t) { return new (t || PublishComponent)(); };
PublishComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PublishComponent, selectors: [["blog-publish"]], inputs: { isPublished: "isPublished", publishTime: "publishTime" }, outputs: { click: "change" }, decls: 6, vars: 3, consts: [[1, "switch"], ["type", "checkbox", 3, "checked", "click"], [1, "slider", "round"], [4, "ngIf", "ngIfElse"], ["unPublishText", ""]], template: function PublishComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PublishComponent_Template_input_click_1_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PublishComponent_span_3_Template, 4, 4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PublishComponent_ng_template_4_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.isPublished);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPublished)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: [".switch[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 45px;\r\n    height: 25px;\r\n  }\r\n  \r\n  \r\n  \r\n  .switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    opacity: 0;\r\n    width: 0;\r\n    height: 0;\r\n  }\r\n  \r\n  \r\n  \r\n  .slider[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: #ccc;\r\n    transition: .4s;\r\n  }\r\n  \r\n  .slider[_ngcontent-%COMP%]:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 20px;\r\n    width: 20px;\r\n    left: 4px;\r\n    bottom: 2px;\r\n    background-color: white;\r\n    transition: .4s;\r\n  }\r\n  \r\n  input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\r\n    background-color: #2196F3;\r\n  }\r\n  \r\n  input[_ngcontent-%COMP%]:focus    + .slider[_ngcontent-%COMP%] {\r\n    box-shadow: 0 0 1px #2196F3;\r\n  }\r\n  \r\n  input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\r\n    transform: translateX(20px);\r\n  }\r\n  \r\n  \r\n  \r\n  .slider.round[_ngcontent-%COMP%] {\r\n    border-radius: 22px;\r\n  }\r\n  \r\n  .slider.round[_ngcontent-%COMP%]:before {\r\n    border-radius: 50%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1Ymxpc2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQSwrQkFBK0I7O0VBQy9CO0lBQ0UsVUFBVTtJQUNWLFFBQVE7SUFDUixTQUFTO0VBQ1g7O0VBRUEsZUFBZTs7RUFDZjtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULHNCQUFzQjtJQUV0QixlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLFNBQVM7SUFDVCxXQUFXO0lBQ1gsdUJBQXVCO0lBRXZCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSwyQkFBMkI7RUFDN0I7O0VBRUE7SUFHRSwyQkFBMkI7RUFDN0I7O0VBRUEsb0JBQW9COztFQUNwQjtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJwdWJsaXNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3dpdGNoIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gIH1cclxuICBcclxuICAvKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xyXG4gIC5zd2l0Y2ggaW5wdXQge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gIH1cclxuICBcclxuICAvKiBUaGUgc2xpZGVyICovXHJcbiAgLnNsaWRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgfVxyXG4gIFxyXG4gIC5zbGlkZXI6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGxlZnQ6IDRweDtcclxuICAgIGJvdHRvbTogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICAgIHRyYW5zaXRpb246IC40cztcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcclxuICB9XHJcbiAgXHJcbiAgLyogUm91bmRlZCBzbGlkZXJzICovXHJcbiAgLnNsaWRlci5yb3VuZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gIH1cclxuICBcclxuICAuc2xpZGVyLnJvdW5kOmJlZm9yZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "a4jb":
/*!**********************************************************!*\
  !*** ./src/app/custom-directives/lazy-load.directive.ts ***!
  \**********************************************************/
/*! exports provided: LazyLoadDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyLoadDirective", function() { return LazyLoadDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LazyLoadDirective {
    constructor(el) {
        this.el = el;
        this.srcAttr = null;
        this.src = "#";
    }
    ngAfterViewInit() {
        this.canLazyLoad() ? this.lazyLoadImage() : this.loadImage();
    }
    canLazyLoad() {
        return window && 'IntersectionObserver' in window;
    }
    lazyLoadImage() {
        const obs = new IntersectionObserver(entries => {
            entries.forEach(({ isIntersecting }) => {
                if (isIntersecting) {
                    this.loadImage();
                    obs.unobserve(this.el.nativeElement);
                }
            });
        });
        obs.observe(this.el.nativeElement);
    }
    loadImage() {
        this.srcAttr = this.src;
    }
}
LazyLoadDirective.ɵfac = function LazyLoadDirective_Factory(t) { return new (t || LazyLoadDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
LazyLoadDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: LazyLoadDirective, selectors: [["img", "appLazyLoad", ""]], hostVars: 1, hostBindings: function LazyLoadDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("src", ctx.srcAttr, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, inputs: { src: "src" } });


/***/ }),

/***/ "bgi2":
/*!*************************************!*\
  !*** ./src/app/errors/app-error.ts ***!
  \*************************************/
/*! exports provided: AppError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppError", function() { return AppError; });
class AppError {
    constructor(originalError) {
        this.originalError = originalError;
    }
}


/***/ }),

/***/ "g7wr":
/*!****************************************************!*\
  !*** ./src/app/custom-pipe/read-less-more.pipe.ts ***!
  \****************************************************/
/*! exports provided: ReadLessMorePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadLessMorePipe", function() { return ReadLessMorePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ReadLessMorePipe {
    transform(value, limit) {
        if (!value)
            return null;
        let actualLimit = (limit) ? limit : 30;
        if (value.length < actualLimit)
            return value;
        return value.substr(0, actualLimit) + ' ...';
    }
}
ReadLessMorePipe.ɵfac = function ReadLessMorePipe_Factory(t) { return new (t || ReadLessMorePipe)(); };
ReadLessMorePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "readLessMore", type: ReadLessMorePipe, pure: true });


/***/ }),

/***/ "hOaZ":
/*!**************************************************!*\
  !*** ./src/app/custom-pipe/count-metric.pipe.ts ***!
  \**************************************************/
/*! exports provided: CountMetricPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountMetricPipe", function() { return CountMetricPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CountMetricPipe {
    transform(value) {
        if (value < 1000)
            return value;
        let newVal = value / 1000;
        return (newVal / 0.0125) % 1 == 0 ? newVal + "k" : parseFloat(newVal.toString()).toFixed(1) + "k";
    }
}
CountMetricPipe.ɵfac = function CountMetricPipe_Factory(t) { return new (t || CountMetricPipe)(); };
CountMetricPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "countMetric", type: CountMetricPipe, pure: true });


/***/ }),

/***/ "l2O0":
/*!*******************************************************!*\
  !*** ./src/app/components/follow/follow.component.ts ***!
  \*******************************************************/
/*! exports provided: FollowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowComponent", function() { return FollowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_follow_follow_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/follow/follow.service */ "C3eT");
/* harmony import */ var _custom_directives_is_authorized_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../custom-directives/is-authorized.directive */ "S9eb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _custom_pipe_count_metric_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../custom-pipe/count-metric.pipe */ "hOaZ");





function FollowComponent_button_3_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Follow ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FollowComponent_button_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Following ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FollowComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FollowComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FollowComponent_button_3_span_1_Template, 2, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FollowComponent_button_3_ng_template_2_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-outline-success", !ctx_r0.isFollowing)("btn-success", ctx_r0.isFollowing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isFollowing)("ngIfElse", _r2);
} }
class FollowComponent {
    // @Output('change') change= new EventEmitter();
    constructor(followService) {
        this.followService = followService;
        this.isFollowing = false;
        this.followersCount = 0;
        this.authorId = "";
    }
    onClick() {
        this.followersCount += (this.isFollowing) ? -1 : 1;
        this.isFollowing = !this.isFollowing;
        // this.change.emit(this.isFollowing);
        if (this.isFollowing) {
            this.followService.create({ id: this.authorId })
                .subscribe((res) => { console.log(res); });
        }
        else {
            this.followService.delete(this.authorId)
                .subscribe((res) => { console.log(res); });
        }
    }
}
FollowComponent.ɵfac = function FollowComponent_Factory(t) { return new (t || FollowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_follow_follow_service__WEBPACK_IMPORTED_MODULE_1__["FollowService"])); };
FollowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FollowComponent, selectors: [["app-follow"]], inputs: { isFollowing: "isFollowing", followersCount: "followersCount", authorId: "authorId" }, decls: 4, vars: 3, consts: [[1, "follow-text"], ["class", "btn", "style", "border: width 1px; border-radius: 99em", 3, "btn-outline-success", "btn-success", "click", 4, "appIsAuthorized"], [1, "btn", 2, "border", "width 1px", "border-radius", "99em", 3, "click"], ["class", "status-text", 4, "ngIf", "ngIfElse"], ["followingText", ""], [1, "status-text"]], template: function FollowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "countMetric");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FollowComponent_button_3_Template, 4, 6, "button", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.followersCount), " followers");
    } }, directives: [_custom_directives_is_authorized_directive__WEBPACK_IMPORTED_MODULE_2__["IsAuthorizedDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_custom_pipe_count_metric_pipe__WEBPACK_IMPORTED_MODULE_4__["CountMetricPipe"]], styles: [".follow-text[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n    line-height: normal;\r\n    color: #b5b5b5;\r\n}\r\n.status-text[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n}\r\n.author-font[_ngcontent-%COMP%]{\r\n    font-weight: 580;\r\n    color: rgba(41, 41, 41, 1);\r\n    font-size: 14px;\r\n    line-height: 16px;\r\n    font-family: sohne, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvbGxvdy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0VBQWtFO0FBQ3RFIiwiZmlsZSI6ImZvbGxvdy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvbGxvdy10ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjYjViNWI1O1xyXG59XHJcbi5zdGF0dXMtdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uYXV0aG9yLWZvbnR7XHJcbiAgICBmb250LXdlaWdodDogNTgwO1xyXG4gICAgY29sb3I6IHJnYmEoNDEsIDQxLCA0MSwgMSk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiBzb2huZSwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "lJjY":
/*!*******************************************************************!*\
  !*** ./src/app/components/like-dislike/like-dislike.component.ts ***!
  \*******************************************************************/
/*! exports provided: LikeDislikeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikeDislikeComponent", function() { return LikeDislikeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _custom_pipe_count_metric_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../custom-pipe/count-metric.pipe */ "hOaZ");





function LikeDislikeComponent_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LikeDislikeComponent_i_1_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onLikeClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("bi-hand-thumbs-up-fill", ctx_r0.isLikeActive)("bi-hand-thumbs-up", !ctx_r0.isLikeActive);
} }
function LikeDislikeComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 7);
} }
function LikeDislikeComponent_i_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LikeDislikeComponent_i_8_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onDisLikeClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("bi-hand-thumbs-down-fill", ctx_r3.isDisLikeActive)("bi-hand-thumbs-down", !ctx_r3.isDisLikeActive);
} }
function LikeDislikeComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 8);
} }
class LikeDislikeComponent {
    constructor(authService) {
        this.authService = authService;
        this.isLikeActive = false;
        this.likesCount = 0;
        this.isDisLikeActive = false;
        this.disLikesCount = 0;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isLoggedin = false;
        this.isLoggedin = this.authService.isLoggedin();
    }
    onLikeClick() {
        this.isLikeActive = !this.isLikeActive;
        this.likesCount += (this.isLikeActive) ? 1 : -1;
        if (this.isDisLikeActive) {
            this.isDisLikeActive = false;
            this.disLikesCount -= 1;
        }
        this.change.emit({ like: this.isLikeActive });
    }
    onDisLikeClick() {
        this.isDisLikeActive = !this.isDisLikeActive;
        this.disLikesCount += (this.isDisLikeActive) ? 1 : -1;
        if (this.isLikeActive) {
            this.isLikeActive = false;
            this.likesCount -= 1;
        }
        this.change.emit({ disLike: this.isDisLikeActive });
    }
}
LikeDislikeComponent.ɵfac = function LikeDislikeComponent_Factory(t) { return new (t || LikeDislikeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
LikeDislikeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LikeDislikeComponent, selectors: [["app-like-dislike"]], inputs: { isLikeActive: "isLikeActive", likesCount: "likesCount", isDisLikeActive: "isDisLikeActive", disLikesCount: "disLikesCount" }, outputs: { change: "change" }, decls: 14, vars: 10, consts: [[1, "likesPreview", "ml-3"], ["class", "bi", 3, "bi-hand-thumbs-up-fill", "bi-hand-thumbs-up", "click", 4, "ngIf", "ngIfElse"], ["staticLike", ""], [1, "dislikesPreview", "ml-3"], ["class", "bi", 3, "bi-hand-thumbs-down-fill", "bi-hand-thumbs-down", "click", 4, "ngIf", "ngIfElse"], ["staticDisLike", ""], [1, "bi", 3, "click"], [1, "bi", "bi-hand-thumbs-up"], [1, "bi", "bi-hand-thumbs-down"]], template: function LikeDislikeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LikeDislikeComponent_i_1_Template, 1, 4, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LikeDislikeComponent_ng_template_2_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "countMetric");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LikeDislikeComponent_i_8_Template, 1, 4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LikeDislikeComponent_ng_template_9_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "countMetric");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedin)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, ctx.likesCount), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedin)("ngIfElse", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 8, ctx.disLikesCount), "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_custom_pipe_count_metric_pipe__WEBPACK_IMPORTED_MODULE_3__["CountMetricPipe"]], styles: [".bi-hand-thumbs-up-fill[_ngcontent-%COMP%], .bi-hand-thumbs-up[_ngcontent-%COMP%]{\r\n    color:#2ecc71\r\n}\r\n.bi-hand-thumbs-down-fill[_ngcontent-%COMP%], .bi-hand-thumbs-down[_ngcontent-%COMP%]{\r\n    color:#d63031\r\n}\r\n.likesPreview[_ngcontent-%COMP%], .dislikesPreview[_ngcontent-%COMP%]{\r\n    font-family: Okra,Arial,sans-serif!important;\r\n    font-size: 14px!important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpa2UtZGlzbGlrZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksNENBQTRDO0lBQzVDLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJsaWtlLWRpc2xpa2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iaS1oYW5kLXRodW1icy11cC1maWxsLC5iaS1oYW5kLXRodW1icy11cHtcclxuICAgIGNvbG9yOiMyZWNjNzFcclxufVxyXG4uYmktaGFuZC10aHVtYnMtZG93bi1maWxsLC5iaS1oYW5kLXRodW1icy1kb3due1xyXG4gICAgY29sb3I6I2Q2MzAzMVxyXG59XHJcbi5saWtlc1ByZXZpZXcsLmRpc2xpa2VzUHJldmlld3tcclxuICAgIGZvbnQtZmFtaWx5OiBPa3JhLEFyaWFsLHNhbnMtc2VyaWYhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNHB4IWltcG9ydGFudDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "lR5m":
/*!*************************************************************************************!*\
  !*** ./src/app/services/subscribed-author-blogs/subscribed-author-blogs.service.ts ***!
  \*************************************************************************************/
/*! exports provided: SubscribedAuthorBlogsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribedAuthorBlogsService", function() { return SubscribedAuthorBlogsService; });
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../data.service */ "EnSQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class SubscribedAuthorBlogsService extends _data_service__WEBPACK_IMPORTED_MODULE_0__["DataService"] {
    constructor(http) {
        super('subscribed-author-blogs', http);
    }
}
SubscribedAuthorBlogsService.ɵfac = function SubscribedAuthorBlogsService_Factory(t) { return new (t || SubscribedAuthorBlogsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
SubscribedAuthorBlogsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SubscribedAuthorBlogsService, factory: SubscribedAuthorBlogsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "phry":
/*!*********************************************************************!*\
  !*** ./src/app/app-navigation/my-blogs/blog/blog/blog.component.ts ***!
  \*********************************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _common_toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../common/toastr */ "BUNJ");
/* harmony import */ var _errors_not_found_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../errors/not-found-error */ "vTm3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_my_blog_my_blog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/my-blog/my-blog.service */ "JNJC");
/* harmony import */ var _services_publish_blogs_publish_blogs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../services/publish-blogs/publish-blogs.service */ "Nlh7");
/* harmony import */ var ngx_bootstrap_confirm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap-confirm */ "C6FI");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_publish_publish_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/publish/publish.component */ "ZSQr");
/* harmony import */ var _custom_pipe_read_less_more_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../custom-pipe/read-less-more.pipe */ "g7wr");











function BlogComponent_div_3_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "readLessMore");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, ctx_r3.blog.description, 250));
} }
function BlogComponent_div_3_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.blog.description);
} }
const _c0 = function (a1) { return ["/myblogs/editBlog", a1]; };
function BlogComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BlogComponent_div_3_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h6", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "blog-publish", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function BlogComponent_div_3_Template_blog_publish_change_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.onPublishToggle($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Summary :");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Description :");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, BlogComponent_div_3_span_25_Template, 3, 4, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, BlogComponent_div_3_span_26_Template, 2, 1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BlogComponent_div_3_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.showText(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r0.blogImageBaseURL + ctx_r0.blog.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r0.blog.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](13, _c0, ctx_r0.blog._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.blog.subtitle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("- ", ctx_r0.blog.author.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isPublished", ctx_r0.blog.publishInfo == null ? null : ctx_r0.blog.publishInfo.isPublish)("publishTime", ctx_r0.blog.publishInfo == null ? null : ctx_r0.blog.publishInfo.publishTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.blog.summary);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.isReadMore);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.isReadMore);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.isReadMore ? "Read More" : "Read Less", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" :", ctx_r0.blog.likedBy.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" : ", ctx_r0.blog.dislikedBy.length, " ");
} }
function BlogComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Oops! No such blog found. The blog may have been deleted or you have typed an invalid URL.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BlogComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Your blog has been deleted successfully!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class BlogComponent extends _common_toastr__WEBPACK_IMPORTED_MODULE_0__["Toastr"] {
    constructor(route, service, publishService, ngxBootstrapConfirmService, toastr) {
        super(toastr);
        this.route = route;
        this.service = service;
        this.publishService = publishService;
        this.ngxBootstrapConfirmService = ngxBootstrapConfirmService;
        this.blogDeleted = false;
        this.blogFound = false;
        this.isReadMore = true;
        this.blogImageBaseURL = this.service.baseImageURL;
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            this.id = params.get('id');
            console.log(this.id);
        });
        console.log('id:' + this.id);
        this.service.get(undefined, undefined, this.id).subscribe((res) => {
            this.blog = res;
            console.log(res);
            this.blogFound = true;
        }, (err) => {
            if (err instanceof _errors_not_found_error__WEBPACK_IMPORTED_MODULE_1__["NotFoundError"]) {
                // console.log("Kch nhi mila vro!")
            }
        });
    }
    delete() {
        let options = {
            title: 'Are you sure you want to delete this blog?',
            confirmLabel: 'Yes, delete',
            declineLabel: 'No, exit',
        };
        this.ngxBootstrapConfirmService.confirm(options).then((res) => {
            if (res) {
                console.log("Yo");
                this.service.delete(this.id)
                    .subscribe(response => {
                    console.log(response);
                    this.blogDeleted = !this.blogDeleted;
                });
            }
        });
    }
    showText() {
        this.isReadMore = !this.isReadMore;
    }
    onPublishToggle(isPublish) {
        if (isPublish == true) {
            this.publishService.create({ id: this.id })
                .subscribe((res) => {
                this.showSuccess("Your blog has been published successfully", "Published Successfully");
            });
        }
        else if (isPublish == false) {
            console.log("Inside unpublish");
            this.publishService.delete(this.id)
                .subscribe((res) => {
                this.showSuccess("Your blog has been unpublished successfully", "Unpublished Successfully");
            });
        }
    }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_my_blog_my_blog_service__WEBPACK_IMPORTED_MODULE_4__["MyBlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_publish_blogs_publish_blogs_service__WEBPACK_IMPORTED_MODULE_5__["PublishBlogsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_bootstrap_confirm__WEBPACK_IMPORTED_MODULE_6__["NgxBootstrapConfirmService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"])); };
BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 3, consts: [[1, "container"], [1, "row"], [1, "col-md-11", "mx-auto"], ["class", "card shadow my-4 border-0", 4, "ngIf"], ["style", "height:70vh;", "class", "jumbotron text-center text-primary", 4, "ngIf"], [1, "card", "shadow", "my-4", "border-0"], [1, "col-md-5", "content"], ["alt", "...", 1, "img-fluid", 3, "src"], [1, "col-md-7"], [1, "card-body", "text-font-family"], ["id", "title", 1, "card-title"], [1, "btn", "btn-danger", "float-right", "mr-3", 2, "font-size", "small", 3, "click"], [1, "bi", "bi-trash"], [1, "btn", "btn-info", "mr-3", "float-right", 2, "font-size", "small", 3, "routerLink"], [1, "bi", "bi-pencil"], ["id", "subtitle", 1, "card-subtitle", "mb-2", "text-muted"], [1, "text-right", "text-muted"], [3, "isPublished", "publishTime", "change"], [1, "card-text"], [1, "overflowTest"], [4, "ngIf"], ["type", "button", 1, "btn", "btn-link", 3, "click"], [1, "card-footer"], [1, "col-6"], ["type", "button", 1, "btn", "btn-success", "bmd-btn-fab", "active"], [1, "bi", "bi-hand-thumbs-up-fill"], ["type", "button", 1, "btn", "btn-danger", "bmd-btn-fab", "active"], [1, "bi", "bi-hand-thumbs-down-fill"], [1, "jumbotron", "text-center", "text-primary", 2, "height", "70vh"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, BlogComponent_div_3_Template, 42, 15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, BlogComponent_div_4_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, BlogComponent_div_5_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.blogDeleted && ctx.blogFound);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.blogFound);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.blogDeleted);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _components_publish_publish_component__WEBPACK_IMPORTED_MODULE_9__["PublishComponent"]], pipes: [_custom_pipe_read_less_more_pipe__WEBPACK_IMPORTED_MODULE_10__["ReadLessMorePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9nLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "ptLb":
/*!***********************************************************!*\
  !*** ./src/app/custom-directives/title-case.directive.ts ***!
  \***********************************************************/
/*! exports provided: TitleCaseDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleCaseDirective", function() { return TitleCaseDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TitleCaseDirective {
    constructor(el) {
        this.el = el;
    }
    onBlur() {
        let value = this.el.nativeElement.value;
        this.el.nativeElement.value = this.titleCase(value);
    }
    titleCase(value) {
        if (!value)
            return null;
        let words = value.split(" ");
        for (var i = 0; i < words.length; i++) {
            let word = words[i];
            if (i > 0 && this.isPreposition(word))
                words[i] = word.toLowerCase();
            else
                words[i] = this.toTitleCase(word);
        }
        return words.join(' ');
    }
    toTitleCase(word) {
        return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
    }
    isPreposition(word) {
        let prepositions = [
            'aboard',
            'about',
            'above',
            'across',
            'after',
            'against',
            'along',
            'amid',
            'among',
            'anti',
            'around',
            'as',
            'at',
            'before',
            'behind',
            'below',
            'beneath',
            'beside',
            'besides',
            'between',
            'beyond',
            'but',
            'by',
            'concerning',
            'considering',
            'despite',
            'down',
            'during',
            'except',
            'excepting',
            'excluding',
            'following',
            'for',
            'from',
            'in',
            'inside',
            'into',
            'like',
            'minus',
            'near',
            'of',
            'off',
            'on',
            'onto',
            'opposite',
            'outside',
            'over',
            'past',
            'per',
            'plus',
            'regarding',
            'round',
            'save',
            'since',
            'than',
            'through',
            'to',
            'toward',
            'towards',
            'under',
            'underneath',
            'unlike',
            'until',
            'up',
            'upon',
            'versus',
            'via',
            'with',
            'within',
            'without'
        ];
        return prepositions.includes(word.toLowerCase());
    }
}
TitleCaseDirective.ɵfac = function TitleCaseDirective_Factory(t) { return new (t || TitleCaseDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
TitleCaseDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TitleCaseDirective, selectors: [["", "appTitleCase", ""]], hostBindings: function TitleCaseDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function TitleCaseDirective_blur_HostBindingHandler() { return ctx.onBlur(); });
    } } });


/***/ }),

/***/ "q8aM":
/*!**********************************************************************!*\
  !*** ./src/app/app-navigation/home/view-blog/view-blog.component.ts ***!
  \**********************************************************************/
/*! exports provided: ViewBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewBlogComponent", function() { return ViewBlogComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_like_dislike_like_dislike_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/like-dislike/like-dislike.service */ "Eo8l");
/* harmony import */ var _services_blogs_blogs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/blogs/blogs.service */ "5Hpx");
/* harmony import */ var src_app_services_follow_follow_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/follow/follow.service */ "C3eT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_follow_follow_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/follow/follow.component */ "l2O0");
/* harmony import */ var _components_like_dislike_like_dislike_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/like-dislike/like-dislike.component */ "lJjY");
/* harmony import */ var _custom_pipe_title_case_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../custom-pipe/title-case.pipe */ "2mS6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");











class ViewBlogComponent {
    constructor(likeDislikeService, service, followService, route) {
        this.likeDislikeService = likeDislikeService;
        this.service = service;
        this.followService = followService;
        this.route = route;
        this.blog = {};
        this.follow = {};
        this.blogImageBaseURL = "";
        this.authorId = "";
        this.route.paramMap.subscribe((params) => {
            this.id = params.get('id');
            console.log(this.id);
        });
        this.blogImageBaseURL = this.service.baseImageURL;
    }
    ngOnInit() {
        // this.service.get(undefined,undefined, this.id)
        // .subscribe((response)=>{
        //   this.blog=response;
        //   this.authorId=this.blog.author._id;
        // })
        this.service.get(undefined, undefined, this.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])((response) => {
            this.blog = response;
            this.authorId = this.blog.author._id;
            const getFollow = this.followService.get(undefined, undefined, this.authorId);
            const getLikeDislike = this.likeDislikeService.get(undefined, undefined, this.blog._id);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(getFollow, getLikeDislike);
        }))
            .subscribe((response) => {
            this.follow = response[0];
            this.likeDislike = response[1];
        });
        // this.followService.get(undefined,undefined,this.authorId)
    }
    onFollowClick(isFollowing) {
        console.log("Follow: ", isFollowing);
        if (isFollowing) {
            this.followService.create({ id: this.authorId })
                .subscribe((res) => { console.log(res); });
        }
        else {
            this.followService.delete(this.authorId)
                .subscribe((res) => { console.log(res); });
        }
    }
    onLikeDislikeClick(status) {
        console.log(status);
        if (status.like != null) {
            if (status.like == true) {
                this.likeDislikeService.create({
                    id: this.blog._id,
                    like: true
                }).subscribe((res) => { console.log(res); });
            }
            else {
                this.likeDislikeService.update(this.blog._id, {
                    removeLike: true
                }).subscribe((res) => { console.log(res); });
            }
        }
        else if (status.disLike != null) {
            console.log('else if');
            if (status.disLike == true) {
                this.likeDislikeService.create({
                    id: this.blog._id,
                    like: false
                }).subscribe((res) => { console.log(res); });
            }
            else {
                this.likeDislikeService.update(this.blog._id, {
                    removeLike: false
                }).subscribe((res) => { console.log(res); });
            }
        }
    }
}
ViewBlogComponent.ɵfac = function ViewBlogComponent_Factory(t) { return new (t || ViewBlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_like_dislike_like_dislike_service__WEBPACK_IMPORTED_MODULE_3__["LikeDislikeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_blogs_blogs_service__WEBPACK_IMPORTED_MODULE_4__["BlogsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_follow_follow_service__WEBPACK_IMPORTED_MODULE_5__["FollowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
ViewBlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ViewBlogComponent, selectors: [["app-view-blog"]], decls: 41, vars: 20, consts: [["rel", "stylesheet", "href", "https://pro.fontawesome.com/releases/v5.10.0/css/all.css", "integrity", "sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p", "crossorigin", "anonymous"], [1, "container", "p-0", "ml-5"], [1, "card"], [1, "card-body"], [1, "row"], [1, "col-md-3"], [1, "middle-align"], [1, "author-font"], [3, "followersCount", "isFollowing", "authorId"], [3, "isLikeActive", "likesCount", "isDisLikeActive", "disLikesCount", "change"], [1, "col-md-9", "m-0", "col-height"], ["id", "title", 1, "text-font"], ["id", "subtitle", 1, "card-subtitle", "mb-2", "text-muted"], [1, "text-left", "text-muted", 2, "font-size", "small"], [1, "card-text"], [1, "fas", "fa-quote-left"], [1, "fas", "fa-quote-right"], ["height", "400px", "alt", "Card image cap", 1, "card-img-top", 3, "src"], [2, "white-space", "pre-line"]], template: function ViewBlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "app-follow", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "app-like-dislike", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ViewBlogComponent_Template_app_like_dislike_change_12_listener($event) { return ctx.onLikeDislikeClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "titleCase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "h6", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.blog.author.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("followersCount", ctx.follow.followersCount)("isFollowing", ctx.follow.following)("authorId", ctx.blog.author._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isLikeActive", ctx.likeDislike.liked)("likesCount", ctx.likeDislike.likesCount)("isDisLikeActive", ctx.likeDislike.disliked)("disLikesCount", ctx.likeDislike.disLikesCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 15, ctx.blog.title), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.blog.subtitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Published On: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](22, 17, ctx.blog.publishInfo == null ? null : ctx.blog.publishInfo.publishTime, "medium"), " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.blog.author.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.blog.summary, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.blogImageBaseURL + ctx.blog.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.blog.description, " ");
    } }, directives: [_components_follow_follow_component__WEBPACK_IMPORTED_MODULE_7__["FollowComponent"], _components_like_dislike_like_dislike_component__WEBPACK_IMPORTED_MODULE_8__["LikeDislikeComponent"]], pipes: [_custom_pipe_title_case_pipe__WEBPACK_IMPORTED_MODULE_9__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]], styles: [".text-font[_ngcontent-%COMP%]{\r\n    font-family: sohne, \"Helvetica Neue\", Helvetica, Arial, sans-serif\r\n}\r\n\r\n.middle-align[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 10%;\r\n    left: 10%;\r\n}\r\n\r\n.col-height[_ngcontent-%COMP%]{\r\n    height: 78vh;\r\n    margin: 0 auto;\r\n    overflow: hidden;\r\n}\r\n\r\n.col-height[_ngcontent-%COMP%]:hover{\r\n    overflow-y: scroll;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctYmxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztBQUNiOztBQUdBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoidmlldy1ibG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1mb250e1xyXG4gICAgZm9udC1mYW1pbHk6IHNvaG5lLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWZcclxufVxyXG5cclxuLm1pZGRsZS1hbGlnbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTAlO1xyXG4gICAgbGVmdDogMTAlO1xyXG59XHJcblxyXG5cclxuLmNvbC1oZWlnaHR7XHJcbiAgICBoZWlnaHQ6IDc4dmg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmNvbC1oZWlnaHQ6aG92ZXJ7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "r4NW":
/*!**************************************************!*\
  !*** ./src/app/user/sign-up/email.validators.ts ***!
  \**************************************************/
/*! exports provided: EmailValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailValidators", function() { return EmailValidators; });
class EmailValidators {
    static shouldBeUnique(control) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === "mosh@gmail.com")
                    resolve({ shouldBeUnique: true });
                else
                    resolve(null);
            }, 2000);
        });
    }
}


/***/ }),

/***/ "vTm3":
/*!*******************************************!*\
  !*** ./src/app/errors/not-found-error.ts ***!
  \*******************************************/
/*! exports provided: NotFoundError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundError", function() { return NotFoundError; });
/* harmony import */ var _app_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-error */ "bgi2");

class NotFoundError extends _app_error__WEBPACK_IMPORTED_MODULE_0__["AppError"] {
}


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
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "F33o");
/* harmony import */ var _app_navigation_subscriptions_subscriptions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-navigation/subscriptions/subscriptions.component */ "2EWz");
/* harmony import */ var _app_navigation_my_blogs_create_blog_create_blog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-navigation/my-blogs/create-blog/create-blog.component */ "IP6U");
/* harmony import */ var _services_guard_redirect_home_redirect_home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/guard/redirect-home/redirect-home.service */ "ILLc");
/* harmony import */ var _services_guard_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/guard/auth-guard/auth-guard.service */ "1I/p");
/* harmony import */ var _app_navigation_app_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-navigation/app-navigation.component */ "XWQ3");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user.component */ "3nXK");
/* harmony import */ var _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/sign-in/sign-in.component */ "BOkJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/sign-up/sign-up.component */ "SZmd");
/* harmony import */ var _app_navigation_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-navigation/home/home.component */ "5oLd");
/* harmony import */ var _app_navigation_my_blogs_my_blogs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-navigation/my-blogs/my-blogs.component */ "UqRI");
/* harmony import */ var _app_navigation_my_blogs_blog_blog_blog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-navigation/my-blogs/blog/blog/blog.component */ "phry");
/* harmony import */ var _app_navigation_my_blogs_update_blog_update_blog_update_blog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-navigation/my-blogs/update-blog/update-blog/update-blog.component */ "PMpo");
/* harmony import */ var _app_navigation_home_view_blog_view_blog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-navigation/home/view-blog/view-blog.component */ "q8aM");
/* harmony import */ var _app_navigation_restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-navigation/restaurant/restaurant.component */ "OxZr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");


















const routes = [
    {
        path: 'login',
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"],
        children: [{ path: '',
                component: _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_7__["SignInComponent"],
                canActivate: [_services_guard_redirect_home_redirect_home_service__WEBPACK_IMPORTED_MODULE_3__["RedirectHome"]] }],
    },
    {
        path: 'register',
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"],
        children: [{ path: '',
                component: _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_9__["SignUpComponent"],
                canActivate: [_services_guard_redirect_home_redirect_home_service__WEBPACK_IMPORTED_MODULE_3__["RedirectHome"]] }],
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        component: _app_navigation_app_navigation_component__WEBPACK_IMPORTED_MODULE_5__["AppNavigationComponent"],
        children: [{ path: '',
                component: _app_navigation_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
            }],
    },
    {
        path: 'myblogs',
        component: _app_navigation_app_navigation_component__WEBPACK_IMPORTED_MODULE_5__["AppNavigationComponent"],
        children: [{ path: '',
                component: _app_navigation_my_blogs_my_blogs_component__WEBPACK_IMPORTED_MODULE_11__["MyBlogsComponent"],
                canActivate: [_services_guard_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
            { path: 'createBlog',
                component: _app_navigation_my_blogs_create_blog_create_blog_component__WEBPACK_IMPORTED_MODULE_2__["CreateBlogComponent"],
                canActivate: [_services_guard_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] }
        ],
    },
    {
        path: 'myblogs',
        component: _app_navigation_app_navigation_component__WEBPACK_IMPORTED_MODULE_5__["AppNavigationComponent"],
        children: [{ path: 'blog/:id',
                component: _app_navigation_my_blogs_blog_blog_blog_component__WEBPACK_IMPORTED_MODULE_12__["BlogComponent"],
                canActivate: [_services_guard_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] }
        ],
    },
    {
        path: 'myblogs',
        component: _app_navigation_app_navigation_component__WEBPACK_IMPORTED_MODULE_5__["AppNavigationComponent"],
        children: [{ path: 'editBlog/:id',
                component: _app_navigation_my_blogs_update_blog_update_blog_update_blog_component__WEBPACK_IMPORTED_MODULE_13__["UpdateBlogComponent"],
                canActivate: [_services_guard_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] }
        ],
    },
    {
        path: 'view-blogs',
        component: _app_navigation_app_navigation_component__WEBPACK_IMPORTED_MODULE_5__["AppNavigationComponent"],
        children: [{ path: 'blog/:id',
                component: _app_navigation_home_view_blog_view_blog_component__WEBPACK_IMPORTED_MODULE_14__["ViewBlogComponent"],
            }
        ],
    },
    {
        path: 'restaurants',
        component: _app_navigation_app_navigation_component__WEBPACK_IMPORTED_MODULE_5__["AppNavigationComponent"],
        children: [{ path: '',
                component: _app_navigation_restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_15__["RestaurantComponent"],
            }
        ],
    },
    {
        path: 'my-subscriptions',
        component: _app_navigation_app_navigation_component__WEBPACK_IMPORTED_MODULE_5__["AppNavigationComponent"],
        children: [{
                path: '',
                component: _app_navigation_subscriptions_subscriptions_component__WEBPACK_IMPORTED_MODULE_1__["SubscriptionsComponent"]
            }]
    },
    {
        path: '**',
        component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__["NotFoundComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]] }); })();


/***/ }),

/***/ "xUWY":
/*!*************************************************************************************!*\
  !*** ./src/app/components/not-following-authors/not-following-authors.component.ts ***!
  \*************************************************************************************/
/*! exports provided: NotFollowingAuthorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFollowingAuthorsComponent", function() { return NotFollowingAuthorsComponent; });
/* harmony import */ var src_app_common_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/common/scroll */ "KflO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_not_following_authors_not_following_authors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/not-following-authors/not-following-authors.service */ "X5uL");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-infinite-scroll */ "dlKe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _follow_follow_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../follow/follow.component */ "l2O0");







function NotFollowingAuthorsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-follow", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const author_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](author_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("followersCount", author_r2.followersCount)("isFollowing", false)("authorId", author_r2._id);
} }
function NotFollowingAuthorsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "All Authors subscribed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class NotFollowingAuthorsComponent extends src_app_common_scroll__WEBPACK_IMPORTED_MODULE_0__["CustomScroll"] {
    constructor(service, spinner) {
        super(service, spinner);
    }
    ngOnInit() {
        this.loadInitData();
    }
}
NotFollowingAuthorsComponent.ɵfac = function NotFollowingAuthorsComponent_Factory(t) { return new (t || NotFollowingAuthorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_not_following_authors_not_following_authors_service__WEBPACK_IMPORTED_MODULE_2__["NotFollowingAuthorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"])); };
NotFollowingAuthorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NotFollowingAuthorsComponent, selectors: [["app-not-following-authors"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 5, consts: [[1, "card"], [1, "card-body", "justify-content-center"], ["infiniteScroll", "", 1, "box", 3, "infiniteScrollDistance", "infiniteScrollThrottle", "scrollWindow", "scrolled"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [2, "font-size", "14px"], [3, "followersCount", "isFollowing", "authorId"]], template: function NotFollowingAuthorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Other Authors:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scrolled", function NotFollowingAuthorsComponent_Template_div_scrolled_5_listener() { return ctx.onScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, NotFollowingAuthorsComponent_div_6_Template, 5, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, NotFollowingAuthorsComponent_div_7_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("infiniteScrollDistance", 2)("infiniteScrollThrottle", 50)("scrollWindow", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.length == 0);
    } }, directives: [ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__["InfiniteScrollDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _follow_follow_component__WEBPACK_IMPORTED_MODULE_6__["FollowComponent"]], styles: [".box[_ngcontent-%COMP%]{\r\n    height:23vh;\r\n    overflow:hidden;\r\n}\r\n.box[_ngcontent-%COMP%]:hover{\r\n    overflow: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb2xsb3dpbmctYXV0aG9ycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoibm90LWZvbGxvd2luZy1hdXRob3JzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94e1xyXG4gICAgaGVpZ2h0OjIzdmg7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbn1cclxuLmJveDpob3ZlcntcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59Il19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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