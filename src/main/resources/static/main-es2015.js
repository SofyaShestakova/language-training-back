(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-page/admin-page.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-page/admin-page.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>admin-page works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <app-header *ngIf=\"router.routerState.snapshot.url!=='/auth' && router.routerState.snapshot.url!=='/registration'\"></app-header>\r\n  <app-sidebar *ngIf=\"router.routerState.snapshot.url!=='/auth' && router.routerState.snapshot.url!=='/registration'\"></app-sidebar>\r\n  <div id=\"page-content\">\r\n    <div>\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/assignment/assignment.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/assignment/assignment.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-work-and-mark></app-work-and-mark>\n<app-comments></app-comments>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/assignment/comments/comments.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/assignment/comments/comments.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <textarea  rows=\"4\" cols=\"50\" id=\"comment\" placeholder=\"Комментировать...\"></textarea>\r\n  <button id=\"send\">Отправить</button>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/assignment/work-and-mark/work-and-mark.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/assignment/work-and-mark/work-and-mark.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"topic\">Тема работы</div>\n<div id=\"work\">Работа</div>\n<div id=\"mark\">\n  <form>\n    <h3>Как вы оцениваете эту работу?</h3>\n    <p><input type=\"radio\" name=\"option\" value=\"a1\" checked>1</p>\n    <p><input type=\"radio\" name=\"option\" value=\"a2\" >2</p>\n    <p>  <input type=\"radio\" name=\"option\" value=\"a3\" >3</p>\n    <p> <input type=\"radio\" name=\"option\" value=\"a4\" >4</p>\n    <p> <input type=\"radio\" name=\"option\" value=\"a5\" >5</p>\n  </form>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"form\" (ngSubmit)=\"submit()\" id=\"form\">\r\n  <div class=\"container\">\r\n    <h2>Авторизация</h2>\r\n    <p><a routerLink=\"/registration\">Зарегистрироваться</a></p>\r\n    <p><a routerLink=\"/main\">Вернуться на главную</a></p>\r\n    <p> <label for=\"login\">Логин</label></p>\r\n    <input type=\"text\" placeholder=\"\" id=\"login\" required formControlName=\"login\">\r\n\r\n    <p><label for=\"password\">Пароль</label></p>\r\n    <input type=\"password\" placeholder=\"\" id=\"password\" required formControlName=\"password\">\r\n\r\n    <div> <button class=\"buttons\">Войти</button></div>\r\n    <div class=\"error\" *ngIf=\"auth.errors$ | async as error\">\r\n      {{error}}\r\n    </div>\r\n\r\n  </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/doing-work/description/description.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/doing-work/description/description.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"description\">На этой странице вы можете выбрать текст и написать по нему любой из предложенных видов работ</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/doing-work/send-work/send-work.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/doing-work/send-work/send-work.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"form\" (ngSubmit)=\"submitWork()\">\r\n  <button class=\"button\" type=\"button\" (click)=\"renderText()\">Получить текст</button>\r\n  <div *ngIf=\"isGetText\">\r\n    <div class=\"title\" style=\"text-align: left\">\r\n      Выберите тип работы\r\n    </div>\r\n    <div >\r\n      <input type=\"radio\" id=\"contactChoice1\" [checked]=\"true\"\r\n             value=\"3\" formControlName=\"workType\">\r\n      <label for=\"contactChoice1\">Краткий пересказ</label>\r\n\r\n      <input type=\"radio\" id=\"contactChoice2\"\r\n             value=\"0\" formControlName=\"workType\">\r\n      <label for=\"contactChoice2\">Анализ</label>\r\n\r\n      <input type=\"radio\" id=\"contactChoice3\"\r\n             value=\"1\" formControlName=\"workType\">\r\n      <label for=\"contactChoice3\">Перевод</label>\r\n      <input type=\"radio\" id=\"contactChoice4\"\r\n             value=\"2\" formControlName=\"workType\">\r\n      <label for=\"contactChoice4\">Комментарий</label>\r\n    </div>\r\n\r\n\r\n    <div class=\"title\">{{text.title}}</div>\r\n    <div class=\"title\" style=\"font-weight: normal\" >{{text.text}}</div>\r\n    <textarea rows=\"4\" cols=\"50\" id=\"work\" class=\"work\" formControlName=\"text\"></textarea>\r\n    <button class=\"button\">Отправить</button>\r\n  </div>\r\n  <div class=\"success\" *ngIf=\"isSubmit\" > Работ успешно отправлена </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forum/forum.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forum/forum.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div *ngIf=\"route.children.length === 0\">\r\n  <div>\r\n    <h2 id=\"header\">Темы форума</h2>\r\n  </div>\r\n  <div id=\"themes\" *ngFor=\"let theme of themes\">\r\n    <a [routerLink]=\"['/forum/theme', theme.id]\"> {{theme.title}} </a>\r\n  </div>\r\n  <div>\r\n    <button id='button' (click)=\"showForm=true\">Добавить тему</button>\r\n    <div *ngIf=\"showForm\">\r\n      <form [formGroup]=\"form\" (ngSubmit)=\"addTheme()\">\r\n        <label  text-size=\"40px\" for=\"title\"></label>\r\n        Название темы:  <input  id=\"title\" formControlName=\"themeTitle\">\r\n        <button  id=\"submit\" type=\"submit\">Создать</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forum/other-message/other-message.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forum/other-message/other-message.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tbody id=\"table\">\n<tr *ngFor=\"let j of list\">\n  <td id=\"photo\"><img src=\"assets/resources/photo.png\" height=\"60px\" width=\"40px\"> </td>\n  <td id=\"message\"> Сообщение</td>\n  <td id=\"send\"> <button>Ответить</button></td>\n</tr>\n</tbody>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forum/write-message/write-message.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forum/write-message/write-message.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"form\" (ngSubmit)=\"submitMessage()\">\r\n  <div class=\"messages\">\r\n    <table>\r\n      <tr *ngFor=\"let message of theme.messages\">\r\n        <td>\r\n          <quill-view-html [content]=\"message.text\"></quill-view-html>\r\n        </td>\r\n        <td>{{message.date | date:'medium':null:'ru'}}</td>\r\n        <td>\r\n          <table>\r\n            <!--tr class=\"data\" *ngFor=\"let answer of message.answers\">\r\n              <td>{{answer.text}}</td>\r\n              <td>{{answer.date | date: 'medium': null: 'ru' }}</td>\r\n            </tr-->\r\n          </table>\r\n        </td>\r\n        <!--td>\r\n          <button  class=\"buttons\" type=\"button\" (click)=\"showAnswerField(message.id)\">Ответить</button>\r\n\r\n          <div *ngIf=\"message.id == answer\">\r\n            <label for=\"answer\">Введите ответ</label>\r\n            <input id=\"answer\" type=\"text\" formControlName=\"answerText\">\r\n            <button class=\"buttons\" type=\"button\" (click)=\"submitAnswer(message.id)\">Отправить ответ</button>\r\n          </div>\r\n        </td-->\r\n      </tr>\r\n    </table>\r\n  </div>\r\n\r\n  <div>\r\n    <label>Введите сообщение</label>\r\n    <quill-editor formControlName=\"messageText\"></quill-editor>\r\n    <button id=\"send\" class=\"buttons\" type=\"submit\">Отправить</button>\r\n  </div>\r\n  <div>\r\n    <button id=\"topics\" class=\"buttons\" type=\"button\" [routerLink]=\"['/forum']\">Темы форума</button>\r\n  </div>\r\n</form>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header\">\r\n  <div class=\"site-info\">\r\n    <img src=\"menu.png\" width=\"50px\" height=\"50px\">\r\n    <div class=\"logo\">LTS</div>\r\n    <div class=\"name\">Language_Training</div>\r\n  </div>\r\n  <div *ngIf=\"!auth.isAuthenticated()\" class=\"user-info\">Вы не авторизованы</div>\r\n  <div *ngIf=\"auth.isAuthenticated()\" class=\"user-info\">{{user.username}}</div>\r\n\r\n  <div class=\"btn\" *ngIf=\"!auth.isAuthenticated()\">\r\n    <a routerLink=\"/auth\"> <button  type=\"button\">Войти</button> </a>\r\n  </div>\r\n\r\n  <div class=\"btn\" *ngIf=\"auth.isAuthenticated()\">\r\n     <button  type=\"button\" (click)=\"logout()\">Выйти</button>\r\n  </div>\r\n\r\n  <!--<img src=\"assets/resources/lk.png\" id=\"lk\" width=\"40px\" alt=\"лк\"/>-->\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/events/events.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/events/events.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"events\" class=\"landing_elements\">Мероприятия</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/information/information.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/information/information.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"information\"><img src=\"news.png\" alt=\"news\"/></div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div id=\"hello\" >Дорогой друг! Здесь ты сможешь прокачать свои лингвистические навыки! Вперед!</div>\n  <app-writing-work></app-writing-work>\n  <app-watch-works></app-watch-works>\n  <app-events></app-events>\n  <app-information></app-information>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/watch-works/watch-works.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/watch-works/watch-works.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a routerLink=\"/watching-work\">\r\n  <div id=\"watch-work\" class=\"landing_elements\" >Просмотреть работы</div>\r\n</a>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/writing-work/writing-work.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/writing-work/writing-work.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a routerLink=\"/doing-work\">\r\n  <div id=\"write-work\" class=\"landing_elements\">Написать работу</div>\r\n</a>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <app-header></app-header>\n  <app-sidebar></app-sidebar>\n  <div class=\"page-content\">\n    <div>\n      <nav>\n        <a routerLink=\"main\">Главная</a>\n      </nav>\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/moderator-page/moderator-page.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/moderator-page/moderator-page.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h4>Справочная информация</h4>\n<p>Авторы: </p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/other-page/info/info.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/other-page/info/info.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"fio\">ФИО</div>\n<div id=\"info\">О себе</div>\n<div id=\"watch\">\n  <a routerLink=\"/assignment\">\n    <button class=\"buttons\">Просмотреть работы</button>\n  </a>\n</div>\n<div id=\"troubles\">\n  <p *ngIf=\"!condition\">\n    <input id=\"text\" type=\"textArea\"/>\n  <button class=\"buttons\" onclick=\"alert('Сообщение отправлено!Мы скоро с вами свяжемся.')\">Отправить</button>\n  </p>\n  <button (click)=\"toggle()\" class=\"buttons\">Пожаловаться</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/other-page/other-page.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/other-page/other-page.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-photo-other></app-photo-other>\r\n<app-info></app-info>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/other-page/photo-other/photo-other.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/other-page/photo-other/photo-other.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"photo1\">\n  <img src=\"assets/resources/photo.png\" alt=\"photo\" height=\"220px\" width=\"220px\">\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/personal-area/graphics/graphics.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/personal-area/graphics/graphics.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"number_works\">\r\n  <google-chart #chart1\r\n                [title]=\"number_works.title\"\r\n                [type]=\"number_works.type\"\r\n                [data]=\"number_works.data\"\r\n                [columnNames]=\"number_works.columnNames\"\r\n                [options]=\"number_works.options\"\r\n  >\r\n  </google-chart>\r\n</div>\r\n\r\n\r\n<div id=\"average\">\r\n  <google-chart #chart2\r\n                [title]=\"average.title\"\r\n                [type]=\"average.type\"\r\n                [data]=\"average.data\"\r\n                [columnNames]=\"average.columnNames\"\r\n                [options]=\"average.options\"\r\n             >\r\n  </google-chart>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/personal-area/personal-area.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/personal-area/personal-area.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Личный кабинет</h3>\r\n<app-photo></app-photo>\r\n<app-personal-info></app-personal-info>\r\n<app-graphics></app-graphics>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/personal-area/personal-info/personal-info.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/personal-area/personal-info/personal-info.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"fio\" class=\"fio\">Введите ФИО:\n  <label>\n    <textarea [(ngModel)]=\"screenName\"></textarea>\n  </label>\n  <div class=\"info\">{{user.screenName}}</div>\n</div>\n<div id=\"info\">\n  <div>Введите информацию о себе</div>\n  <textarea [(ngModel)]=\"bio\"></textarea>\n  <button (click)=\"submitInfo()\">Изменить данные</button>\n  <div class=\"info\">{{user.bio}}</div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/personal-area/photo/photo.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/personal-area/photo/photo.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div><img src=\"photo.png\" height=\"200px\" width=\"200px\" alt=\"фото\" id=\"photo\"></div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/rating/rating-works/rating-works.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rating/rating-works/rating-works.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 id = 'title'>Топ лучших работ</h2>\r\n<table id=\"table\">\r\n  <tr>\r\n    <td><a routerLink=\"/other-page\"> <img src=\"photo.png\" height=\"40px\" width=\"40px\"></a> </td>\r\n    <td class=\"work\"><a routerLink=\"/watching-work/other-works\">вид работы(ссылка на работу)</a></td>\r\n  </tr>\r\n  <tr>\r\n    <td> <a routerLink=\"/other-page\"><img src=\"photo.png\" height=\"40px\" width=\"40px\"> </a></td>\r\n    <td class=\"work\"><a routerLink=\"/watching-work/other-works\">вид работы(ссылка на работу)</a></td>\r\n  </tr>\r\n  <tr>\r\n    <td> <a routerLink=\"/other-page\"><img src=\"photo.png\" height=\"40px\" width=\"40px\"></a> </td>\r\n    <td class=\"work\"><a routerLink=\"/watching-work/other-works\">вид работы(ссылка на работу)</a></td>\r\n  </tr>\r\n  <tr>\r\n    <td><a routerLink=\"/other-page\"> <img src=\"photo.png\" height=\"40px\" width=\"40px\"></a> </td>\r\n    <td class=\"work\"><a routerLink=\"/watching-work/other-works\">вид работы(ссылка на работу)</a></td>\r\n  </tr>\r\n  <tr>\r\n    <td> <a routerLink=\"/other-page\"><img src=\"photo.png\" height=\"40px\" width=\"40px\"> </a></td>\r\n    <td class=\"work\"><a routerLink=\"/watching-work/other-works\">вид работы(ссылка на работу)</a></td>\r\n  </tr>\r\n  <tr>\r\n    <td> <a routerLink=\"/other-page\"><img src=\"photo.png\" height=\"40px\" width=\"40px\"></a> </td>\r\n    <td class=\"work\"><a routerLink=\"/watching-work/other-works\">вид работы(ссылка на работу)</a></td>\r\n  </tr>\r\n</table>\r\n<a routerLink=\"/statistics\"><button id=\"statics\">Статистика</button></a>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"form\" id=\"form\" (ngSubmit)=\"submit()\">\r\n  <div class=\"container\">\r\n    <h2>Регистрация</h2>\r\n    <p><a routerLink=\"/auth\">Авторизация</a></p>\r\n    <p><a routerLink=\"/main\">Главная</a></p>\r\n\r\n    <p><label for=\"login\">Логин</label></p>\r\n    <input type=\"text\" placeholder=\"\" id=\"login\" required formControlName=\"login\">\r\n\r\n    <p><label for=\"password\">Пароль</label></p>\r\n    <input type=\"password\" placeholder=\"\" id=\"password\" required formControlName=\"password\">\r\n\r\n    <div> <button class=\"buttons\">Зарегистрироваться</button></div>\r\n\r\n    <div class=\"error\" *ngIf=\"auth.errors$ | async as error\">\r\n      {{error}}\r\n    </div>\r\n  </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sidebar\">\r\n  <div class=\"vertical-button-panel\">\r\n    <div>\r\n      <a (click)=\"isAuth()\" class=\"lk1\" data-title=\"Личный кабинет\">\r\n        <img src=\"lk.png\" width=\"55px\" height=\"55px\"\r\n             alt=\"личный кабинет\"/>0\r\n      </a>\r\n    </div>\r\n    <div><a routerLink=\"/doing-work\" class=\"do_work\" data-title=\"Написать работу\">\r\n      <img src=\"write-work.png\" width=\"55px\" height=\"55px\"\r\n           alt=\"написать работу\"/></a>\r\n    </div>\r\n    <div><a routerLink=\"/watching-work\" class=\"watch_work\" data-title=\"Просмотреть работы\">\r\n      <img src=\"works.png\" height=\"55px\" width=\"55px\" alt=\"просмотреть работы\"/>\r\n    </a>\r\n    </div>\r\n    <div><a routerLink=\"/rating\" class=\"rating\" data-title=\"Рейтинг\">\r\n      <img src=\"results.png\" height=\"55px\" width=\"55px\" alt=\"рейтинг\">\r\n    </a>\r\n    </div>\r\n    <div><a routerLink=\"/forum\" class=\"forum\" data-title=\"Форум\">\r\n      <img src=\"forum.png\" height=\"55px\" width=\"55px\" alt=\"сообщения\"/>\r\n    </a>\r\n    </div>\r\n    <div><a routerLink=\"/moderator-page\" class=\"info\" data-title=\"Страница модератора\">\r\n      <img src=\"info.png\" height=\"55px\" width=\"55px\" alt=\"справка\">\r\n    </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/statistics/stat-graphics/stat-graphics.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/statistics/stat-graphics/stat-graphics.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"number_works\">\n  <google-chart #chart1\n                [title]=\"number_works.title\"\n                [type]=\"number_works.type\"\n                [data]=\"number_works.data\"\n                [columnNames]=\"number_works.columnNames\"\n                [options]=\"number_works.options\"\n  >\n  </google-chart>\n</div>\n<div id=\"analyze\">\n<google-chart #chart2\n              [title]=\"analyze.title\"\n              [type]=\"analyze.type\"\n              [data]=\"analyze.data\"\n              [columnNames]=\"analyze.columnNames\"\n              [options]=\"analyze.options\"\n>\n</google-chart>\n</div>\n<div id=\"translate\">\n  <google-chart #chart3\n                [title]=\"translate.title\"\n                [type]=\"translate.type\"\n                [data]=\"translate.data\"\n                [columnNames]=\"translate.columnNames\"\n                [options]=\"translate.options\"\n  >\n  </google-chart>\n</div>\n<div id=\"short_desc\">\n  <google-chart #chart4\n                [title]=\"short_desc.title\"\n                [type]=\"short_desc.type\"\n                [data]=\"short_desc.data\"\n                [columnNames]=\"short_desc.columnNames\"\n                [options]=\"short_desc.options\"\n  >\n  </google-chart>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/watching-work/description-work/description-work.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/watching-work/description-work/description-work.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"description\">На этой странице вы можете просмотреть уже написанные работы</div>\r\n<div>\r\n  <!--select name=\"select2\" id=\"select2\">\r\n      <option value=\"анализ\">анализ</option>\r\n      <option value=\"перевод\">перевод</option>\r\n      <option value=\"комментарий\">комментарий</option>\r\n      <option value=\"краткий пересказ\">краткий пересказ</option>\r\n  </select>\r\n  <select name=\"select3\" id=\"select3\">\r\n      <option value=\"Экономика\">500</option>\r\n      <option value=\"Спорт\">600</option>\r\n      <option value=\"Политика\">800</option>\r\n      <option value=\"Хореография\">1000</option>\r\n  </select-->\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/watching-work/other-works/other-works.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/watching-work/other-works/other-works.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table id=\"table\">\r\n  <tr>\r\n    <td *ngFor=\"let viewWorks of works.works\">\r\n\r\n      <div class=\"work\">\r\n        <div class=\"title\">\r\n          <h4>{{viewWorks.title}}</h4>\r\n\r\n          <h5>Тип текста:{{viewWorks.type}}</h5>\r\n        </div>\r\n        <div class=\"text\">{{viewWorks.text}}</div>\r\n      </div>\r\n    </td>\r\n  </tr>\r\n\r\n</table>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/admin-page/admin-page.component.scss":
/*!******************************************************!*\
  !*** ./src/app/admin-page/admin-page.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXBhZ2UvYWRtaW4tcGFnZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/admin-page/admin-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin-page/admin-page.component.ts ***!
  \****************************************************/
/*! exports provided: AdminPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageComponent", function() { return AdminPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminPageComponent = class AdminPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-page/admin-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-page.component.scss */ "./src/app/admin-page/admin-page.component.scss")).default]
    })
], AdminPageComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _personal_area_personal_area_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./personal-area/personal-area.component */ "./src/app/personal-area/personal-area.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _doing_work_doing_work_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./doing-work/doing-work.component */ "./src/app/doing-work/doing-work.component.ts");
/* harmony import */ var _watching_work_watching_work_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./watching-work/watching-work.component */ "./src/app/watching-work/watching-work.component.ts");
/* harmony import */ var _forum_forum_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forum/forum.component */ "./src/app/forum/forum.component.ts");
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rating/rating.component */ "./src/app/rating/rating.component.ts");
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./statistics/statistics.component */ "./src/app/statistics/statistics.component.ts");
/* harmony import */ var _other_page_other_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./other-page/other-page.component */ "./src/app/other-page/other-page.component.ts");
/* harmony import */ var _assignment_assignment_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assignment/assignment.component */ "./src/app/assignment/assignment.component.ts");
/* harmony import */ var _forum_write_message_write_message_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./forum/write-message/write-message.component */ "./src/app/forum/write-message/write-message.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _moderator_page_moderator_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./moderator-page/moderator-page.component */ "./src/app/moderator-page/moderator-page.component.ts");

















const routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"] },
    { path: 'main', component: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"] },
    { path: 'personal-area', component: _personal_area_personal_area_component__WEBPACK_IMPORTED_MODULE_4__["PersonalAreaComponent"] },
    { path: 'doing-work', component: _doing_work_doing_work_component__WEBPACK_IMPORTED_MODULE_6__["DoingWorkComponent"] },
    { path: 'watching-work', component: _watching_work_watching_work_component__WEBPACK_IMPORTED_MODULE_7__["WatchingWorkComponent"] },
    { path: 'rating', component: _rating_rating_component__WEBPACK_IMPORTED_MODULE_9__["RatingComponent"] },
    { path: 'statistics', component: _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_10__["StatisticsComponent"] },
    { path: 'other-page', component: _other_page_other_page_component__WEBPACK_IMPORTED_MODULE_11__["OtherPageComponent"] },
    { path: 'assignment', component: _assignment_assignment_component__WEBPACK_IMPORTED_MODULE_12__["AssignmentComponent"] },
    { path: 'forum', component: _forum_forum_component__WEBPACK_IMPORTED_MODULE_8__["ForumComponent"], children: [
            { path: 'theme/:id', component: _forum_write_message_write_message_component__WEBPACK_IMPORTED_MODULE_13__["WriteMessageComponent"] }
        ] },
    { path: 'registration', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_14__["RegistrationComponent"] },
    { path: 'auth', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_15__["AuthComponent"] },
    { path: 'moderator-page', component: _moderator_page_moderator_page_component__WEBPACK_IMPORTED_MODULE_16__["ModeratorPageComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  width: 100%;\n  height: 100%;\n}\n\n#page-content:not(.auth) {\n  width: 93.9%;\n  float: right;\n  background-color: #e2d6e8;\n  height: 100%;\n}\n\n.auth {\n  width: 99.9%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxTb255YSBTaGVzdGFrb3ZhXFxJZGVhUHJvamVjdHNcXGxhbmd1YWdlLXRyYWluaW5nLWZyb250L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDRkY7O0FESUE7RUFHRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0hGOztBREtBO0VBQ0UsWUFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGhlYWRlcl9oZWlnaHQ6IDklO1xyXG4kc2lkZWJhcl93aWR0aDogNiU7XHJcblxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuI3BhZ2UtY29udGVudDpub3QoLmF1dGgpe1xyXG4gIC8vYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG4gLy8gaGVpZ2h0OiA5OS45JSAtICRoZWFkZXJfaGVpZ2h0O1xyXG4gIHdpZHRoOiA5OS45JSAtICRzaWRlYmFyX3dpZHRoO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJkNmU4O1xyXG4gIGhlaWdodDoxMDAlO1xyXG59XHJcbi5hdXRoe1xyXG4gIHdpZHRoOjk5LjklO1xyXG59XHJcbiIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jcGFnZS1jb250ZW50Om5vdCguYXV0aCkge1xuICB3aWR0aDogOTMuOSU7XG4gIGZsb2F0OiByaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZDZlODtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYXV0aCB7XG4gIHdpZHRoOiA5OS45JTtcbn0iXX0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'language-training-front';
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _landing_writing_work_writing_work_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./landing/writing-work/writing-work.component */ "./src/app/landing/writing-work/writing-work.component.ts");
/* harmony import */ var _landing_watch_works_watch_works_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./landing/watch-works/watch-works.component */ "./src/app/landing/watch-works/watch-works.component.ts");
/* harmony import */ var _landing_events_events_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./landing/events/events.component */ "./src/app/landing/events/events.component.ts");
/* harmony import */ var _landing_information_information_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./landing/information/information.component */ "./src/app/landing/information/information.component.ts");
/* harmony import */ var _personal_area_personal_area_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./personal-area/personal-area.component */ "./src/app/personal-area/personal-area.component.ts");
/* harmony import */ var _personal_area_photo_photo_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./personal-area/photo/photo.component */ "./src/app/personal-area/photo/photo.component.ts");
/* harmony import */ var _personal_area_personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./personal-area/personal-info/personal-info.component */ "./src/app/personal-area/personal-info/personal-info.component.ts");
/* harmony import */ var _personal_area_graphics_graphics_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./personal-area/graphics/graphics.component */ "./src/app/personal-area/graphics/graphics.component.ts");
/* harmony import */ var _doing_work_doing_work_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./doing-work/doing-work.component */ "./src/app/doing-work/doing-work.component.ts");
/* harmony import */ var _doing_work_description_description_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./doing-work/description/description.component */ "./src/app/doing-work/description/description.component.ts");
/* harmony import */ var _doing_work_send_work_send_work_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./doing-work/send-work/send-work.component */ "./src/app/doing-work/send-work/send-work.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _watching_work_watching_work_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./watching-work/watching-work.component */ "./src/app/watching-work/watching-work.component.ts");
/* harmony import */ var _watching_work_description_work_description_work_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./watching-work/description-work/description-work.component */ "./src/app/watching-work/description-work/description-work.component.ts");
/* harmony import */ var _watching_work_other_works_other_works_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./watching-work/other-works/other-works.component */ "./src/app/watching-work/other-works/other-works.component.ts");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! angular-google-charts */ "./node_modules/angular-google-charts/fesm2015/angular-google-charts.js");
/* harmony import */ var _forum_forum_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./forum/forum.component */ "./src/app/forum/forum.component.ts");
/* harmony import */ var _forum_write_message_write_message_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./forum/write-message/write-message.component */ "./src/app/forum/write-message/write-message.component.ts");
/* harmony import */ var _forum_other_message_other_message_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./forum/other-message/other-message.component */ "./src/app/forum/other-message/other-message.component.ts");
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./rating/rating.component */ "./src/app/rating/rating.component.ts");
/* harmony import */ var _rating_rating_works_rating_works_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./rating/rating-works/rating-works.component */ "./src/app/rating/rating-works/rating-works.component.ts");
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./statistics/statistics.component */ "./src/app/statistics/statistics.component.ts");
/* harmony import */ var _statistics_stat_graphics_stat_graphics_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./statistics/stat-graphics/stat-graphics.component */ "./src/app/statistics/stat-graphics/stat-graphics.component.ts");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/fesm2015/ngx-quill.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/common/locales/ru */ "./node_modules/@angular/common/locales/ru.js");
/* harmony import */ var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _other_page_other_page_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./other-page/other-page.component */ "./src/app/other-page/other-page.component.ts");
/* harmony import */ var _other_page_info_info_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./other-page/info/info.component */ "./src/app/other-page/info/info.component.ts");
/* harmony import */ var _other_page_photo_other_photo_other_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./other-page/photo-other/photo-other.component */ "./src/app/other-page/photo-other/photo-other.component.ts");
/* harmony import */ var _assignment_assignment_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./assignment/assignment.component */ "./src/app/assignment/assignment.component.ts");
/* harmony import */ var _assignment_work_and_mark_work_and_mark_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./assignment/work-and-mark/work-and-mark.component */ "./src/app/assignment/work-and-mark/work-and-mark.component.ts");
/* harmony import */ var _assignment_comments_comments_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./assignment/comments/comments.component */ "./src/app/assignment/comments/comments.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _moderator_page_moderator_page_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./moderator-page/moderator-page.component */ "./src/app/moderator-page/moderator-page.component.ts");
/* harmony import */ var _admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./admin-page/admin-page.component */ "./src/app/admin-page/admin-page.component.ts");















































Object(_angular_common__WEBPACK_IMPORTED_MODULE_34__["registerLocaleData"])(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_35___default.a, 'ru');
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            angular_google_charts__WEBPACK_IMPORTED_MODULE_25__["GoogleChartsModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_quill__WEBPACK_IMPORTED_MODULE_33__["QuillModule"].forRoot()
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _landing_landing_component__WEBPACK_IMPORTED_MODULE_7__["LandingComponent"],
            _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
            _landing_writing_work_writing_work_component__WEBPACK_IMPORTED_MODULE_10__["WritingWorkComponent"],
            _landing_watch_works_watch_works_component__WEBPACK_IMPORTED_MODULE_11__["WatchWorksComponent"],
            _landing_events_events_component__WEBPACK_IMPORTED_MODULE_12__["EventsComponent"],
            _landing_information_information_component__WEBPACK_IMPORTED_MODULE_13__["InformationComponent"],
            _personal_area_personal_area_component__WEBPACK_IMPORTED_MODULE_14__["PersonalAreaComponent"],
            _personal_area_photo_photo_component__WEBPACK_IMPORTED_MODULE_15__["PhotoComponent"],
            _personal_area_personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_16__["PersonalInfoComponent"],
            _personal_area_graphics_graphics_component__WEBPACK_IMPORTED_MODULE_17__["GraphicsComponent"],
            _doing_work_doing_work_component__WEBPACK_IMPORTED_MODULE_18__["DoingWorkComponent"],
            _doing_work_description_description_component__WEBPACK_IMPORTED_MODULE_19__["DescriptionComponent"],
            _doing_work_send_work_send_work_component__WEBPACK_IMPORTED_MODULE_20__["SendWorkComponent"],
            _watching_work_watching_work_component__WEBPACK_IMPORTED_MODULE_22__["WatchingWorkComponent"],
            _watching_work_description_work_description_work_component__WEBPACK_IMPORTED_MODULE_23__["DescriptionWorkComponent"],
            _watching_work_other_works_other_works_component__WEBPACK_IMPORTED_MODULE_24__["OtherWorksComponent"],
            _forum_forum_component__WEBPACK_IMPORTED_MODULE_26__["ForumComponent"],
            _forum_write_message_write_message_component__WEBPACK_IMPORTED_MODULE_27__["WriteMessageComponent"],
            _forum_other_message_other_message_component__WEBPACK_IMPORTED_MODULE_28__["OtherMessageComponent"],
            _rating_rating_component__WEBPACK_IMPORTED_MODULE_29__["RatingComponent"],
            _rating_rating_works_rating_works_component__WEBPACK_IMPORTED_MODULE_30__["RatingWorksComponent"],
            _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_31__["StatisticsComponent"],
            _statistics_stat_graphics_stat_graphics_component__WEBPACK_IMPORTED_MODULE_32__["StatGraphicsComponent"],
            _other_page_other_page_component__WEBPACK_IMPORTED_MODULE_36__["OtherPageComponent"],
            _other_page_info_info_component__WEBPACK_IMPORTED_MODULE_37__["InfoComponent"],
            _other_page_photo_other_photo_other_component__WEBPACK_IMPORTED_MODULE_38__["PhotoOtherComponent"],
            _assignment_assignment_component__WEBPACK_IMPORTED_MODULE_39__["AssignmentComponent"],
            _assignment_work_and_mark_work_and_mark_component__WEBPACK_IMPORTED_MODULE_40__["WorkAndMarkComponent"],
            _assignment_comments_comments_component__WEBPACK_IMPORTED_MODULE_41__["CommentsComponent"],
            _registration_registration_component__WEBPACK_IMPORTED_MODULE_42__["RegistrationComponent"],
            _main_main_component__WEBPACK_IMPORTED_MODULE_43__["MainComponent"],
            _auth_auth_component__WEBPACK_IMPORTED_MODULE_44__["AuthComponent"],
            _moderator_page_moderator_page_component__WEBPACK_IMPORTED_MODULE_45__["ModeratorPageComponent"],
            _admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_46__["AdminPageComponent"],
        ],
        providers: [_http_service__WEBPACK_IMPORTED_MODULE_21__["HttpService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/assignment/assignment.component.scss":
/*!******************************************************!*\
  !*** ./src/app/assignment/assignment.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2lnbm1lbnQvYXNzaWdubWVudC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/assignment/assignment.component.ts":
/*!****************************************************!*\
  !*** ./src/app/assignment/assignment.component.ts ***!
  \****************************************************/
/*! exports provided: AssignmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentComponent", function() { return AssignmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AssignmentComponent = class AssignmentComponent {
    constructor() { }
    ngOnInit() {
    }
};
AssignmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assignment',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./assignment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/assignment/assignment.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./assignment.component.scss */ "./src/app/assignment/assignment.component.scss")).default]
    })
], AssignmentComponent);



/***/ }),

/***/ "./src/app/assignment/comments/comments.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/assignment/comments/comments.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#comment {\n  text-align: center;\n  background-color: #d1cfe3;\n  color: darkslategrey;\n  width: 80%;\n  margin-left: 100px;\n  height: 70px;\n}\n\n#send {\n  border-radius: 15px;\n  background-color: #d1cfe3;\n  border-color: mediumpurple;\n  color: darkslategrey;\n  height: 40px;\n  margin-left: 1020px;\n  margin-top: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNzaWdubWVudC9jb21tZW50cy9DOlxcVXNlcnNcXFNvbnlhIFNoZXN0YWtvdmFcXElkZWFQcm9qZWN0c1xcbGFuZ3VhZ2UtdHJhaW5pbmctZnJvbnQvc3JjXFxhcHBcXGFzc2lnbm1lbnRcXGNvbW1lbnRzXFxjb21tZW50cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXNzaWdubWVudC9jb21tZW50cy9jb21tZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURDQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvYXNzaWdubWVudC9jb21tZW50cy9jb21tZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb21tZW50e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFjZmUzO1xyXG4gIGNvbG9yOiBkYXJrc2xhdGVncmV5O1xyXG4gIHdpZHRoOjgwJTtcclxuICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbiAgaGVpZ2h0OjcwcHg7XHJcbn1cclxuI3NlbmR7XHJcbiAgYm9yZGVyLXJhZGl1czoxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2QxY2ZlMztcclxuICBib3JkZXItY29sb3I6IG1lZGl1bXB1cnBsZTtcclxuICBjb2xvcjpkYXJrc2xhdGVncmV5O1xyXG4gIGhlaWdodDo0MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OjEwMjBweDtcclxuICBtYXJnaW4tdG9wOjNweDtcclxufVxyXG4iLCIjY29tbWVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxY2ZlMztcbiAgY29sb3I6IGRhcmtzbGF0ZWdyZXk7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuXG4jc2VuZCB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWNmZTM7XG4gIGJvcmRlci1jb2xvcjogbWVkaXVtcHVycGxlO1xuICBjb2xvcjogZGFya3NsYXRlZ3JleTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tbGVmdDogMTAyMHB4O1xuICBtYXJnaW4tdG9wOiAzcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/assignment/comments/comments.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/assignment/comments/comments.component.ts ***!
  \***********************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CommentsComponent = class CommentsComponent {
    constructor() { }
    ngOnInit() {
    }
};
CommentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comments',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./comments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/assignment/comments/comments.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./comments.component.scss */ "./src/app/assignment/comments/comments.component.scss")).default]
    })
], CommentsComponent);



/***/ }),

/***/ "./src/app/assignment/work-and-mark/work-and-mark.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/assignment/work-and-mark/work-and-mark.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#topic, #work, #mark {\n  text-align: center;\n  background-color: #d1cfe3;\n  color: darkslategrey;\n  width: 80%;\n  margin-left: 100px;\n}\n\n#work {\n  margin-top: 50px;\n  height: 200px;\n}\n\n#topic {\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNzaWdubWVudC93b3JrLWFuZC1tYXJrL0M6XFxVc2Vyc1xcU29ueWEgU2hlc3Rha292YVxcSWRlYVByb2plY3RzXFxsYW5ndWFnZS10cmFpbmluZy1mcm9udC9zcmNcXGFwcFxcYXNzaWdubWVudFxcd29yay1hbmQtbWFya1xcd29yay1hbmQtbWFyay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXNzaWdubWVudC93b3JrLWFuZC1tYXJrL3dvcmstYW5kLW1hcmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXNzaWdubWVudC93b3JrLWFuZC1tYXJrL3dvcmstYW5kLW1hcmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdG9waWMsICN3b3JrICwjbWFya3tcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxY2ZlMztcclxuICBjb2xvcjogZGFya3NsYXRlZ3JleTtcclxuICB3aWR0aDo4MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG59XHJcblxyXG4jd29ya3tcclxuICBtYXJnaW4tdG9wOjUwcHg7XHJcbiAgaGVpZ2h0OjIwMHB4O1xyXG59XHJcblxyXG4jdG9waWN7XHJcbiAgaGVpZ2h0OjUwcHg7XHJcbn1cclxuIiwiI3RvcGljLCAjd29yaywgI21hcmsge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWNmZTM7XG4gIGNvbG9yOiBkYXJrc2xhdGVncmV5O1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tbGVmdDogMTAwcHg7XG59XG5cbiN3b3JrIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuI3RvcGljIHtcbiAgaGVpZ2h0OiA1MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/assignment/work-and-mark/work-and-mark.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/assignment/work-and-mark/work-and-mark.component.ts ***!
  \*********************************************************************/
/*! exports provided: WorkAndMarkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkAndMarkComponent", function() { return WorkAndMarkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WorkAndMarkComponent = class WorkAndMarkComponent {
    constructor() { }
    ngOnInit() {
    }
};
WorkAndMarkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-work-and-mark',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./work-and-mark.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/assignment/work-and-mark/work-and-mark.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./work-and-mark.component.scss */ "./src/app/assignment/work-and-mark/work-and-mark.component.scss")).default]
    })
], WorkAndMarkComponent);



/***/ }),

/***/ "./src/app/auth/auth.component.scss":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#form {\n  margin-left: 48%;\n  border-radius: 10px;\n  border-color: mediumpurple;\n}\n\n.buttons {\n  background-color: #d1cfe3;\n  border-color: mediumpurple;\n  color: darkslategrey;\n  height: 40px;\n  border-radius: 10px;\n  margin-left: 45px;\n  margin-top: 70px;\n}\n\n.auth {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9DOlxcVXNlcnNcXFNvbnlhIFNoZXN0YWtvdmFcXElkZWFQcm9qZWN0c1xcbGFuZ3VhZ2UtdHJhaW5pbmctZnJvbnQvc3JjXFxhcHBcXGF1dGhcXGF1dGguY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQ0NGOztBRENBO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0VGOztBREFBO0VBQ0UsV0FBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Zvcm17XHJcbiAgbWFyZ2luLWxlZnQ6NDglO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiBtZWRpdW1wdXJwbGU7XHJcbn1cclxuLmJ1dHRvbnN7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxY2ZlMztcclxuICBib3JkZXItY29sb3I6IG1lZGl1bXB1cnBsZTtcclxuICBjb2xvcjogZGFya3NsYXRlZ3JleTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OjQ1cHg7XHJcbiAgbWFyZ2luLXRvcDo3MHB4O1xyXG59XHJcbi5hdXRoe1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuIiwiI2Zvcm0ge1xuICBtYXJnaW4tbGVmdDogNDglO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXItY29sb3I6IG1lZGl1bXB1cnBsZTtcbn1cblxuLmJ1dHRvbnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFjZmUzO1xuICBib3JkZXItY29sb3I6IG1lZGl1bXB1cnBsZTtcbiAgY29sb3I6IGRhcmtzbGF0ZWdyZXk7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDQ1cHg7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG59XG5cbi5hdXRoIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_currentUser_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/currentUser.service */ "./src/app/shared/services/currentUser.service.ts");
/* harmony import */ var _shared_services_htpp_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/htpp/auth.service */ "./src/app/shared/services/htpp/auth.service.ts");
/* harmony import */ var _shared_services_userService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/services/userService */ "./src/app/shared/services/userService.ts");








let AuthComponent = class AuthComponent {
    constructor(http, auth, router, currentUser, patchDetailsService) {
        this.http = http;
        this.auth = auth;
        this.router = router;
        this.currentUser = currentUser;
        this.patchDetailsService = patchDetailsService;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    submit() {
        const user = {
            username: this.form.value.login,
            password: this.form.value.password
        };
        this.auth.login(user).subscribe(() => {
            this.form.reset();
            this.currentUser.username = user.username;
            this.router.navigate(['/main']);
        });
        this.patchDetailsService.patchUserDetails(user).subscribe(res => {
            this.currentUser.bio = res.details.bio;
            this.currentUser.screenName = res.details.screenName;
        });
    }
};
AuthComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _shared_services_htpp_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _shared_services_currentUser_service__WEBPACK_IMPORTED_MODULE_5__["CurrentUserService"] },
    { type: _shared_services_userService__WEBPACK_IMPORTED_MODULE_7__["UserService"] }
];
AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auth.component.scss */ "./src/app/auth/auth.component.scss")).default]
    })
], AuthComponent);



/***/ }),

/***/ "./src/app/doing-work/description/description.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/doing-work/description/description.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".description {\n  font-size: 20px;\n  font-weight: 500;\n  height: 70px;\n  margin-left: 40px;\n  margin-right: 40px;\n  text-align: center;\n  background-color: #d1cfe3;\n  color: darkslategrey;\n  padding-top: 30px;\n}\n\n#contactChoice1 {\n  margin-left: 40px;\n  position: relative;\n  margin-top: 20px;\n  font-size: 25px;\n  color: purple;\n}\n\n#contactChoice2 {\n  margin-left: 100px;\n  font-size: 25px;\n}\n\n#contactChoice3 {\n  margin-left: 120px;\n  font-size: 25px;\n}\n\n#contactChoice4 {\n  margin-left: 140px;\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9pbmctd29yay9kZXNjcmlwdGlvbi9DOlxcVXNlcnNcXFNvbnlhIFNoZXN0YWtvdmFcXElkZWFQcm9qZWN0c1xcbGFuZ3VhZ2UtdHJhaW5pbmctZnJvbnQvc3JjXFxhcHBcXGRvaW5nLXdvcmtcXGRlc2NyaXB0aW9uXFxkZXNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZG9pbmctd29yay9kZXNjcmlwdGlvbi9kZXNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURDQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDRUY7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNHRjs7QUREQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ0lGOztBREZBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDS0YiLCJmaWxlIjoic3JjL2FwcC9kb2luZy13b3JrL2Rlc2NyaXB0aW9uL2Rlc2NyaXB0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc2NyaXB0aW9uIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFjZmUzO1xyXG4gIGNvbG9yOiBkYXJrc2xhdGVncmV5O1xyXG4gIHBhZGRpbmctdG9wOjMwcHg7XHJcbn1cclxuI2NvbnRhY3RDaG9pY2Uxe1xyXG4gIG1hcmdpbi1sZWZ0OjQwcHg7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gIGZvbnQtc2l6ZToyNXB4O1xyXG4gIGNvbG9yOnB1cnBsZTtcclxufVxyXG4jY29udGFjdENob2ljZTJ7XHJcbiAgbWFyZ2luLWxlZnQ6MTAwcHg7XHJcbiAgZm9udC1zaXplOjI1cHg7XHJcbn1cclxuI2NvbnRhY3RDaG9pY2Uze1xyXG4gIG1hcmdpbi1sZWZ0OjEyMHB4O1xyXG4gIGZvbnQtc2l6ZToyNXB4O1xyXG59XHJcbiNjb250YWN0Q2hvaWNlNHtcclxuICBtYXJnaW4tbGVmdDoxNDBweDtcclxuICBmb250LXNpemU6MjVweDtcclxufVxyXG4iLCIuZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGhlaWdodDogNzBweDtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFjZmUzO1xuICBjb2xvcjogZGFya3NsYXRlZ3JleTtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG5cbiNjb250YWN0Q2hvaWNlMSB7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6IHB1cnBsZTtcbn1cblxuI2NvbnRhY3RDaG9pY2UyIHtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbiNjb250YWN0Q2hvaWNlMyB7XG4gIG1hcmdpbi1sZWZ0OiAxMjBweDtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4jY29udGFjdENob2ljZTQge1xuICBtYXJnaW4tbGVmdDogMTQwcHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/doing-work/description/description.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/doing-work/description/description.component.ts ***!
  \*****************************************************************/
/*! exports provided: DescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionComponent", function() { return DescriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DescriptionComponent = class DescriptionComponent {
    constructor() { }
    ngOnInit() {
    }
};
DescriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-description',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./description.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/doing-work/description/description.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./description.component.scss */ "./src/app/doing-work/description/description.component.scss")).default]
    })
], DescriptionComponent);



/***/ }),

/***/ "./src/app/doing-work/doing-work.component.scss":
/*!******************************************************!*\
  !*** ./src/app/doing-work/doing-work.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".description {\n  font-size: 20px;\n  font-weight: 500;\n  height: 70px;\n  margin-left: 40px;\n  margin-right: 40px;\n  text-align: center;\n  background-color: #d1cfe3;\n  color: darkslategrey;\n  padding-top: 30px;\n}\n\n#contactChoice1 {\n  margin-left: 40px;\n  position: relative;\n  margin-top: 20px;\n  font-size: 25px;\n  color: purple;\n}\n\n#contactChoice2 {\n  margin-left: 100px;\n  font-size: 25px;\n}\n\n#contactChoice3 {\n  margin-left: 120px;\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9pbmctd29yay9DOlxcVXNlcnNcXFNvbnlhIFNoZXN0YWtvdmFcXElkZWFQcm9qZWN0c1xcbGFuZ3VhZ2UtdHJhaW5pbmctZnJvbnQvc3JjXFxhcHBcXGRvaW5nLXdvcmtcXGRvaW5nLXdvcmsuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RvaW5nLXdvcmsvZG9pbmctd29yay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURDQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDRUY7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNHRjs7QUREQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ0lGIiwiZmlsZSI6InNyYy9hcHAvZG9pbmctd29yay9kb2luZy13b3JrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc2NyaXB0aW9uIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFjZmUzO1xyXG4gIGNvbG9yOiBkYXJrc2xhdGVncmV5O1xyXG4gIHBhZGRpbmctdG9wOjMwcHg7XHJcbn1cclxuI2NvbnRhY3RDaG9pY2Uxe1xyXG4gIG1hcmdpbi1sZWZ0OjQwcHg7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gIGZvbnQtc2l6ZToyNXB4O1xyXG4gIGNvbG9yOnB1cnBsZTtcclxufVxyXG4jY29udGFjdENob2ljZTJ7XHJcbiAgbWFyZ2luLWxlZnQ6MTAwcHg7XHJcbiAgZm9udC1zaXplOjI1cHg7XHJcbn1cclxuI2NvbnRhY3RDaG9pY2Uze1xyXG4gIG1hcmdpbi1sZWZ0OjEyMHB4O1xyXG4gIGZvbnQtc2l6ZToyNXB4O1xyXG59XHJcbiIsIi5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBtYXJnaW4tbGVmdDogNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWNmZTM7XG4gIGNvbG9yOiBkYXJrc2xhdGVncmV5O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuI2NvbnRhY3RDaG9pY2UxIHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogcHVycGxlO1xufVxuXG4jY29udGFjdENob2ljZTIge1xuICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuI2NvbnRhY3RDaG9pY2UzIHtcbiAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xuICBmb250LXNpemU6IDI1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/doing-work/doing-work.component.ts":
/*!****************************************************!*\
  !*** ./src/app/doing-work/doing-work.component.ts ***!
  \****************************************************/
/*! exports provided: DoingWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoingWorkComponent", function() { return DoingWorkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DoingWorkComponent = class DoingWorkComponent {
    constructor() { }
    ngOnInit() {
    }
};
DoingWorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-doing-work',
        template: `<h3>Написание работы</h3>
  <app-description></app-description>
  <app-send-work></app-send-work>`,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./doing-work.component.scss */ "./src/app/doing-work/doing-work.component.scss")).default]
    })
], DoingWorkComponent);



/***/ }),

/***/ "./src/app/doing-work/send-work/send-work.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/doing-work/send-work/send-work.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#text {\n  font-size: 20px;\n  font-weight: 500;\n  height: 140px;\n  margin-left: 40px;\n  margin-right: 40px;\n  position: relative;\n  margin-top: 20px;\n  text-align: center;\n  background-color: #d1cfe3;\n  color: darkslategrey;\n  padding-top: 80px;\n  border: 2px solid mediumpurple;\n}\n\n.work {\n  font-size: 20px;\n  font-weight: 500;\n  height: 140px;\n  margin-left: 40px;\n  margin-right: 40px;\n  position: relative;\n  margin-top: 20px;\n  text-align: left;\n  vertical-align: auto;\n  background-color: #d1cfe3;\n  color: darkslategrey;\n  width: 93.5%;\n  border: 2px solid mediumpurple;\n}\n\n.button {\n  background-color: #d1cfe3;\n  position: relative;\n  margin-top: 20px;\n  margin-left: 950px;\n}\n\n.success {\n  color: green;\n  text-align: center;\n  font-size: 18px;\n}\n\n.title {\n  font-weight: bold;\n  text-align: center;\n  font-size: 17px;\n  margin-top: 25px;\n}\n\n.title-work {\n  margin-left: 44%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9pbmctd29yay9zZW5kLXdvcmsvQzpcXFVzZXJzXFxTb255YSBTaGVzdGFrb3ZhXFxJZGVhUHJvamVjdHNcXGxhbmd1YWdlLXRyYWluaW5nLWZyb250L3NyY1xcYXBwXFxkb2luZy13b3JrXFxzZW5kLXdvcmtcXHNlbmQtd29yay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZG9pbmctd29yay9zZW5kLXdvcmsvc2VuZC13b3JrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7QUNFRjs7QURBQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDR0Y7O0FEQUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDR0Y7O0FEQUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDR0Y7O0FEQUE7RUFDRSxnQkFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvZG9pbmctd29yay9zZW5kLXdvcmsvc2VuZC13b3JrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RleHR7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgaGVpZ2h0OiAxNDBweDtcclxuICBtYXJnaW4tbGVmdDogNDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFjZmUzO1xyXG4gIGNvbG9yOiBkYXJrc2xhdGVncmV5O1xyXG4gIHBhZGRpbmctdG9wOjgwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgbWVkaXVtcHVycGxlO1xyXG59XHJcbi53b3Jre1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGhlaWdodDogMTQwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6MjBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWNmZTM7XHJcbiAgY29sb3I6IGRhcmtzbGF0ZWdyZXk7XHJcbiAgd2lkdGg6OTMuNSU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgbWVkaXVtcHVycGxlO1xyXG59XHJcbi5idXR0b257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxY2ZlMztcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0Ojk1MHB4O1xyXG5cclxufVxyXG4uc3VjY2Vzc3tcclxuICBjb2xvcjogZ3JlZW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuLnRpdGxlLXdvcmt7XHJcbiAgbWFyZ2luLWxlZnQ6IDQ0JTtcclxufVxyXG4iLCIjdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWNmZTM7XG4gIGNvbG9yOiBkYXJrc2xhdGVncmV5O1xuICBwYWRkaW5nLXRvcDogODBweDtcbiAgYm9yZGVyOiAycHggc29saWQgbWVkaXVtcHVycGxlO1xufVxuXG4ud29yayB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB2ZXJ0aWNhbC1hbGlnbjogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxY2ZlMztcbiAgY29sb3I6IGRhcmtzbGF0ZWdyZXk7XG4gIHdpZHRoOiA5My41JTtcbiAgYm9yZGVyOiAycHggc29saWQgbWVkaXVtcHVycGxlO1xufVxuXG4uYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxY2ZlMztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogOTUwcHg7XG59XG5cbi5zdWNjZXNzIHtcbiAgY29sb3I6IGdyZWVuO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4udGl0bGUtd29yayB7XG4gIG1hcmdpbi1sZWZ0OiA0NCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/doing-work/send-work/send-work.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/doing-work/send-work/send-work.component.ts ***!
  \*************************************************************/
/*! exports provided: SendWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendWorkComponent", function() { return SendWorkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_services_currentUser_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/currentUser.service */ "./src/app/shared/services/currentUser.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_workContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/workContainer */ "./src/app/shared/services/workContainer.ts");
/* harmony import */ var _shared_services_htpp_work_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/htpp/work.service */ "./src/app/shared/services/htpp/work.service.ts");
/* harmony import */ var _shared_services_htpp_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/htpp/auth.service */ "./src/app/shared/services/htpp/auth.service.ts");









let SendWorkComponent = class SendWorkComponent {
    constructor(user, http, workService, workContainer, auth, router) {
        this.user = user;
        this.http = http;
        this.workService = workService;
        this.workContainer = workContainer;
        this.auth = auth;
        this.router = router;
        this.isSubmit = false;
        this.isGetText = false;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            text: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            workType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    submitWork() {
        const work = {
            text: this.form.value.text,
            type: this.form.value.workType,
            title: this.text.title,
            textId: this.text.textId
        };
        console.log(work);
        if (this.auth.isAuthenticated()) {
            this.workService.postWork(this.user.username, work).subscribe((res) => {
                let viewType;
                switch (res.type) {
                    case "ANALYSIS":
                        {
                            viewType = "Анализ";
                        }
                        break;
                    case "TRANSLATION":
                        {
                            viewType = "Перевод";
                        }
                        break;
                    case "RETELLING":
                        {
                            viewType = "Краткий пересказ";
                        }
                        break;
                    case "COMMENT":
                        {
                            viewType = "Комментарий";
                        }
                        break;
                }
                this.workContainer.works.push({
                    workId: res.workId,
                    title: res.title,
                    type: viewType,
                    text: res.text
                });
                this.isSubmit = true;
            });
        }
        else {
            this.router.navigate(['/auth']);
        }
    }
    renderText() {
        this.workService.getText().subscribe((response) => {
            this.isGetText = true;
            this.text = {
                textId: response.textId,
                title: response.title,
                text: response.text
            };
        });
    }
};
SendWorkComponent.ctorParameters = () => [
    { type: _shared_services_currentUser_service__WEBPACK_IMPORTED_MODULE_3__["CurrentUserService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _shared_services_htpp_work_service__WEBPACK_IMPORTED_MODULE_7__["WorkService"] },
    { type: _shared_services_workContainer__WEBPACK_IMPORTED_MODULE_6__["WorkContainer"] },
    { type: _shared_services_htpp_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
SendWorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-send-work',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./send-work.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/doing-work/send-work/send-work.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./send-work.component.scss */ "./src/app/doing-work/send-work/send-work.component.scss")).default]
    })
], SendWorkComponent);



/***/ }),

/***/ "./src/app/forum/forum.component.scss":
/*!********************************************!*\
  !*** ./src/app/forum/forum.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#button {\n  border-radius: 15px;\n  background-color: #d1cfe3;\n  border-color: mediumpurple;\n  color: darkslategrey;\n  height: 40px;\n  margin-left: 620px;\n  margin-top: 25px;\n}\n\n#header {\n  text-align: center;\n}\n\n#themes {\n  text-align: center;\n  font-size: 25px;\n}\n\n#submit {\n  border-radius: 15px;\n  background-color: #d1cfe3;\n  border-color: mediumpurple;\n  color: darkslategrey;\n  height: 40px;\n  margin-top: 25px;\n  margin-left: 5px;\n}\n\n#title {\n  font-size: 20px;\n}\n\n#text {\n  font-size: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ydW0vQzpcXFVzZXJzXFxTb255YSBTaGVzdGFrb3ZhXFxJZGVhUHJvamVjdHNcXGxhbmd1YWdlLXRyYWluaW5nLWZyb250L3NyY1xcYXBwXFxmb3J1bVxcZm9ydW0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZvcnVtL2ZvcnVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURBQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ0dGOztBRERBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0lGOztBREZBO0VBQ0UsZUFBQTtBQ0tGOztBREhBO0VBQ0UsZUFBQTtBQ01GIiwiZmlsZSI6InNyYy9hcHAvZm9ydW0vZm9ydW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYnV0dG9ue1xyXG4gIGJvcmRlci1yYWRpdXM6MTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNkMWNmZTM7XHJcbiAgYm9yZGVyLWNvbG9yOiBtZWRpdW1wdXJwbGU7XHJcbiAgY29sb3I6ZGFya3NsYXRlZ3JleTtcclxuICBoZWlnaHQ6NDBweDtcclxuICBtYXJnaW4tbGVmdDo2MjBweDtcclxuICBtYXJnaW4tdG9wOjI1cHg7XHJcbn1cclxuI2hlYWRlcntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuI3RoZW1lc3tcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOjI1cHg7XHJcbn1cclxuI3N1Ym1pdHtcclxuICBib3JkZXItcmFkaXVzOjE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojZDFjZmUzO1xyXG4gIGJvcmRlci1jb2xvcjogbWVkaXVtcHVycGxlO1xyXG4gIGNvbG9yOmRhcmtzbGF0ZWdyZXk7XHJcbiAgaGVpZ2h0OjQwcHg7XHJcbiAgbWFyZ2luLXRvcDoyNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OjVweDtcclxufVxyXG4jdGl0bGV7XHJcbiAgZm9udC1zaXplOjIwcHg7XHJcbn1cclxuI3RleHR7XHJcbiAgZm9udC1zaXplOjQwcHg7XHJcbn1cclxuIiwiI2J1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWNmZTM7XG4gIGJvcmRlci1jb2xvcjogbWVkaXVtcHVycGxlO1xuICBjb2xvcjogZGFya3NsYXRlZ3JleTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tbGVmdDogNjIwcHg7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbiNoZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiN0aGVtZXMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuI3N1Ym1pdCB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWNmZTM7XG4gIGJvcmRlci1jb2xvcjogbWVkaXVtcHVycGxlO1xuICBjb2xvcjogZGFya3NsYXRlZ3JleTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4jdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbiN0ZXh0IHtcbiAgZm9udC1zaXplOiA0MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/forum/forum.component.ts":
/*!******************************************!*\
  !*** ./src/app/forum/forum.component.ts ***!
  \******************************************/
/*! exports provided: ForumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumComponent", function() { return ForumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_services_htpp_theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/htpp/theme.service */ "./src/app/shared/services/htpp/theme.service.ts");





let ForumComponent = class ForumComponent {
    constructor(themeService, route) {
        this.themeService = themeService;
        this.route = route;
        this.themes = [];
        this.showForm = false;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            themeTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
        this.themeService.getTheme().subscribe((response) => {
            response.themes.map(backTheme => {
                this.themes.push({
                    title: backTheme.themeName,
                    id: backTheme.themeId,
                    messages: []
                });
            });
        });
    }
    addTheme() {
        const title = this.form.value.themeTitle;
        this.themeService.createTheme(title).subscribe((res) => {
            this.themes.push({
                title: title,
                id: res.themeId
            });
        });
        this.form.reset();
        this.showForm = false;
        console.log(this.themes);
    }
    getById(id) {
        return this.themes.find(theme => theme.id === id);
    }
};
ForumComponent.ctorParameters = () => [
    { type: _shared_services_htpp_theme_service__WEBPACK_IMPORTED_MODULE_4__["ThemeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ForumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forum',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forum.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forum/forum.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forum.component.scss */ "./src/app/forum/forum.component.scss")).default]
    })
], ForumComponent);



/***/ }),

/***/ "./src/app/forum/other-message/other-message.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/forum/other-message/other-message.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#message {\n  background-color: #d1cfe3;\n  color: darkslategrey;\n  text-align: center;\n  height: 40px;\n  width: 800px;\n}\n\n#table {\n  border-spacing: 10px;\n  margin-left: 250px;\n}\n\n#send {\n  background-color: #d1cfe3;\n  margin-top: 3px;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ydW0vb3RoZXItbWVzc2FnZS9DOlxcVXNlcnNcXFNvbnlhIFNoZXN0YWtvdmFcXElkZWFQcm9qZWN0c1xcbGFuZ3VhZ2UtdHJhaW5pbmctZnJvbnQvc3JjXFxhcHBcXGZvcnVtXFxvdGhlci1tZXNzYWdlXFxvdGhlci1tZXNzYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb3J1bS9vdGhlci1tZXNzYWdlL290aGVyLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2ZvcnVtL290aGVyLW1lc3NhZ2Uvb3RoZXItbWVzc2FnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtZXNzYWdle1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWNmZTM7XHJcbiAgY29sb3I6IGRhcmtzbGF0ZWdyZXk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDo0MHB4O1xyXG4gIHdpZHRoOjgwMHB4O1xyXG59XHJcbiN0YWJsZXtcclxuICBib3JkZXItc3BhY2luZzoxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OjI1MHB4O1xyXG59XHJcbiNzZW5ke1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWNmZTM7XHJcbiAgbWFyZ2luLXRvcDozcHg7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbn1cclxuXHJcblxyXG4iLCIjbWVzc2FnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWNmZTM7XG4gIGNvbG9yOiBkYXJrc2xhdGVncmV5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDgwMHB4O1xufVxuXG4jdGFibGUge1xuICBib3JkZXItc3BhY2luZzogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDI1MHB4O1xufVxuXG4jc2VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWNmZTM7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/forum/other-message/other-message.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/forum/other-message/other-message.component.ts ***!
  \****************************************************************/
/*! exports provided: OtherMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherMessageComponent", function() { return OtherMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OtherMessageComponent = class OtherMessageComponent {
    ngOnInit() {
    }
};
OtherMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-other-message',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./other-message.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forum/other-message/other-message.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./other-message.component.scss */ "./src/app/forum/other-message/other-message.component.scss")).default]
    })
], OtherMessageComponent);



/***/ }),

/***/ "./src/app/forum/write-message/write-message.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/forum/write-message/write-message.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#message {\n  font-size: 20px;\n  font-weight: 500;\n  height: 140px;\n  margin-left: 40px;\n  margin-right: 40px;\n  position: relative;\n  margin-top: 20px;\n  text-align: center;\n  background-color: #d1cfe3;\n  color: darkslategrey;\n  padding-top: 80px;\n  width: 93.5%;\n  border: 2px solid mediumpurple;\n  border-radius: 7px;\n}\n\n.buttons {\n  border-radius: 15px;\n  background-color: #d1cfe3;\n  border-color: mediumpurple;\n  color: darkslategrey;\n  height: 40px;\n}\n\n.messages {\n  border: 1px solid mediumpurple;\n  border-radius: 15px;\n}\n\n#topics {\n  margin-left: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ydW0vd3JpdGUtbWVzc2FnZS9DOlxcVXNlcnNcXFNvbnlhIFNoZXN0YWtvdmFcXElkZWFQcm9qZWN0c1xcbGFuZ3VhZ2UtdHJhaW5pbmctZnJvbnQvc3JjXFxhcHBcXGZvcnVtXFx3cml0ZS1tZXNzYWdlXFx3cml0ZS1tZXNzYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb3J1bS93cml0ZS1tZXNzYWdlL3dyaXRlLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUNFRjs7QURBQTtFQUNFLDhCQUFBO0VBQ0YsbUJBQUE7QUNHQTs7QUREQTtFQUNFLGtCQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC9mb3J1bS93cml0ZS1tZXNzYWdlL3dyaXRlLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWVzc2FnZXtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBoZWlnaHQ6IDE0MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNDBweDtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWNmZTM7XHJcbiAgY29sb3I6IGRhcmtzbGF0ZWdyZXk7XHJcbiAgcGFkZGluZy10b3A6ODBweDtcclxuICB3aWR0aDo5My41JTtcclxuICBib3JkZXI6IDJweCBzb2xpZCBtZWRpdW1wdXJwbGU7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcbi5idXR0b25zIHtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWNmZTM7XHJcbiAgYm9yZGVyLWNvbG9yOiBtZWRpdW1wdXJwbGU7XHJcbiAgY29sb3I6IGRhcmtzbGF0ZWdyZXk7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcbi5tZXNzYWdlc3tcclxuICBib3JkZXI6IDFweCBzb2xpZCBtZWRpdW1wdXJwbGU7XHJcbmJvcmRlci1yYWRpdXM6MTVweDtcclxufVxyXG4jdG9waWNze1xyXG4gIG1hcmdpbi1sZWZ0OjIwMHB4O1xyXG59XHJcblxyXG4iLCIjbWVzc2FnZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWNmZTM7XG4gIGNvbG9yOiBkYXJrc2xhdGVncmV5O1xuICBwYWRkaW5nLXRvcDogODBweDtcbiAgd2lkdGg6IDkzLjUlO1xuICBib3JkZXI6IDJweCBzb2xpZCBtZWRpdW1wdXJwbGU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuLmJ1dHRvbnMge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFjZmUzO1xuICBib3JkZXItY29sb3I6IG1lZGl1bXB1cnBsZTtcbiAgY29sb3I6IGRhcmtzbGF0ZWdyZXk7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLm1lc3NhZ2VzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgbWVkaXVtcHVycGxlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4jdG9waWNzIHtcbiAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/forum/write-message/write-message.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/forum/write-message/write-message.component.ts ***!
  \****************************************************************/
/*! exports provided: WriteMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriteMessageComponent", function() { return WriteMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_htpp_theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/htpp/theme.service */ "./src/app/shared/services/htpp/theme.service.ts");
/* harmony import */ var _forum_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../forum.component */ "./src/app/forum/forum.component.ts");






let WriteMessageComponent = class WriteMessageComponent {
    constructor(route, themeService, forum) {
        this.route = route;
        this.themeService = themeService;
        this.forum = forum;
        this.answerId = 456;
        this.answer = null;
        this.theme = null;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.theme = this.forum.getById(+params.id);
            this.themeService.getMessage(this.theme.id).subscribe((response) => {
                this.theme.messages = [];
                response.messages.map((message) => {
                    this.theme.messages.push({
                        text: message.text,
                        date: new Date(message.createDate)
                    });
                });
            });
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            messageText: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            answerText: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    submitMessage() {
        const message = {
            text: this.form.value.messageText,
            date: new Date(),
            answers: []
        };
        this.themeService.createMessage(message, this.theme.id).subscribe(() => {
            this.theme.messages.push(message);
        });
        this.form.reset();
    }
    showAnswerField(id) {
        this.answer = id;
    }
    submitAnswer(messageId) {
        this.theme.messages.find(message => message.id == messageId).answers.push({
            id: this.answerId,
            text: this.form.value.answerText,
            date: new Date()
        });
        this.answerId++;
        this.form.reset();
    }
};
WriteMessageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _shared_services_htpp_theme_service__WEBPACK_IMPORTED_MODULE_4__["ThemeService"] },
    { type: _forum_component__WEBPACK_IMPORTED_MODULE_5__["ForumComponent"] }
];
WriteMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-write-message',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./write-message.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forum/write-message/write-message.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./write-message.component.scss */ "./src/app/forum/write-message/write-message.component.scss")).default]
    })
], WriteMessageComponent);



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  float: top;\n  height: 9%;\n  width: 100%;\n  background-color: #9974a7;\n  border-bottom: 1px solid #9974a7;\n}\n\n.site-info {\n  margin-left: 20px;\n}\n\n.logo {\n  width: 55px;\n  height: 20px;\n  margin-left: 70px;\n  margin-top: -50px;\n  color: darkslategrey;\n  background-color: #d1cfe3;\n  font-family: monospace;\n  font-size: 12px;\n  font-weight: 500;\n  text-align: center;\n  padding-top: 18px;\n  border-radius: 40px;\n}\n\n.name {\n  width: 200px;\n  height: 28px;\n  margin-left: 150px;\n  margin-top: -38px;\n  color: darkslategrey;\n  background-color: #d1cfe3;\n  font-family: monospace;\n  font-size: 15px;\n  font-weight: 700;\n  text-align: center;\n  padding-top: 10px;\n  border-radius: 7px;\n}\n\n.user-info {\n  color: darkslategrey;\n  background-color: #d1cfe3;\n  font-family: monospace;\n  font-size: 15px;\n  font-weight: 700;\n  text-align: center;\n  padding-top: 10px;\n  border-radius: 7px;\n  width: 200px;\n  height: 30px;\n  margin-left: 1050px;\n  margin-top: -30px;\n}\n\n.btn {\n  margin-left: 1270px;\n  margin-top: -30px;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcU29ueWEgU2hlc3Rha292YVxcSWRlYVByb2plY3RzXFxsYW5ndWFnZS10cmFpbmluZy1mcm9udC9zcmNcXGFwcFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxVQUFBO0VBR0EsVUFOYztFQU9kLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0FDSEY7O0FES0E7RUFDRSxpQkFBQTtBQ0ZGOztBRElBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDREY7O0FER0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURFQTtFQUNFLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGhlYWRlcl9oZWlnaHQ6IDklO1xyXG4kc2lkZWJhcl93aWR0aDogNiU7XHJcbi5oZWFkZXIge1xyXG4gIGZsb2F0OiB0b3A7XHJcbiAgLy9mbG9hdDogdG9wO1xyXG4gIC8vYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIGhlaWdodDogJGhlYWRlcl9oZWlnaHQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5NzRhNztcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk5NzRhNztcclxufVxyXG4uc2l0ZS1pbmZve1xyXG4gIG1hcmdpbi1sZWZ0OjIwcHg7XHJcbn1cclxuLmxvZ297XHJcbiAgd2lkdGg6IDU1cHg7XHJcbiAgaGVpZ2h0OjIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6NzBweDtcclxuICBtYXJnaW4tdG9wOi01MHB4O1xyXG4gIGNvbG9yOmRhcmtzbGF0ZWdyZXk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxY2ZlMztcclxuICBmb250LWZhbWlseTptb25vc3BhY2U7XHJcbiAgZm9udC1zaXplOjEycHg7XHJcbiAgZm9udC13ZWlnaHQ6NTAwO1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOjE4cHggO1xyXG4gIGJvcmRlci1yYWRpdXM6NDBweDtcclxufVxyXG4ubmFtZSB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMjhweDtcclxuICBtYXJnaW4tbGVmdDogMTUwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTM4cHg7XHJcbiAgY29sb3I6IGRhcmtzbGF0ZWdyZXk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxY2ZlMztcclxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOjdweDtcclxufVxyXG4udXNlci1pbmZve1xyXG4gIGNvbG9yOiBkYXJrc2xhdGVncmV5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWNmZTM7XHJcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czo3cHg7XHJcbiAgd2lkdGg6MjAwcHg7XHJcbiAgaGVpZ2h0OjMwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6MTA1MHB4O1xyXG4gIG1hcmdpbi10b3A6LTMwcHggO1xyXG59XHJcblxyXG4uYnRue1xyXG4gIG1hcmdpbi1sZWZ0OjEyNzBweDtcclxuICBtYXJnaW4tdG9wOi0zMHB4O1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG59XHJcbiIsIi5oZWFkZXIge1xuICBmbG9hdDogdG9wO1xuICBoZWlnaHQ6IDklO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5NzRhNztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5OTc0YTc7XG59XG5cbi5zaXRlLWluZm8ge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmxvZ28ge1xuICB3aWR0aDogNTVweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tbGVmdDogNzBweDtcbiAgbWFyZ2luLXRvcDogLTUwcHg7XG4gIGNvbG9yOiBkYXJrc2xhdGVncmV5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFjZmUzO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG59XG5cbi5uYW1lIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNTBweDtcbiAgbWFyZ2luLXRvcDogLTM4cHg7XG4gIGNvbG9yOiBkYXJrc2xhdGVncmV5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFjZmUzO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuLnVzZXItaW5mbyB7XG4gIGNvbG9yOiBkYXJrc2xhdGVncmV5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFjZmUzO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMDUwcHg7XG4gIG1hcmdpbi10b3A6IC0zMHB4O1xufVxuXG4uYnRuIHtcbiAgbWFyZ2luLWxlZnQ6IDEyNzBweDtcbiAgbWFyZ2luLXRvcDogLTMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_htpp_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/htpp/auth.service */ "./src/app/shared/services/htpp/auth.service.ts");
/* harmony import */ var _shared_services_currentUser_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/currentUser.service */ "./src/app/shared/services/currentUser.service.ts");




let HeaderComponent = class HeaderComponent {
    constructor(auth, user) {
        this.auth = auth;
        this.user = user;
    }
    ngOnInit() {
    }
    logout() {
        this.auth.logout();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _shared_services_htpp_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _shared_services_currentUser_service__WEBPACK_IMPORTED_MODULE_3__["CurrentUserService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HttpService = class HttpService {
    constructor() {
    }
    sendForm(arg) {
        console.log(arg);
    }
};
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ "./src/app/landing/events/events.component.scss":
/*!******************************************************!*\
  !*** ./src/app/landing/events/events.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#events {\n  width: 400px;\n  padding-top: 10px;\n  padding-bottom: 75px;\n}\n\n.landing_elements {\n  font-family: monospace;\n  font-size: 15px;\n  font-weight: 500;\n  height: 150px;\n  width: 150px;\n  margin-top: 75px;\n  margin-left: 75px;\n  text-align: center;\n  padding-top: 75px;\n  padding-left: 30px;\n  padding-right: 30px;\n  background-color: #d1cfe3;\n  color: darkslategrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9ldmVudHMvQzpcXFVzZXJzXFxTb255YSBTaGVzdGFrb3ZhXFxJZGVhUHJvamVjdHNcXGxhbmd1YWdlLXRyYWluaW5nLWZyb250L3NyY1xcYXBwXFxsYW5kaW5nXFxldmVudHNcXGV2ZW50cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGFuZGluZy9ldmVudHMvZXZlbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURDQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nL2V2ZW50cy9ldmVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZXZlbnRze1xyXG4gIHdpZHRoOjQwMHB4O1xyXG4gIHBhZGRpbmctdG9wOjEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDc1cHg7XHJcbn1cclxuLmxhbmRpbmdfZWxlbWVudHN7XHJcbiAgZm9udC1mYW1pbHk6bW9ub3NwYWNlO1xyXG4gIGZvbnQtc2l6ZToxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OjUwMDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBtYXJnaW4tdG9wOiA3NXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA3NXB4O1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA3NXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2QxY2ZlMztcclxuICBjb2xvcjpkYXJrc2xhdGVncmV5O1xyXG59XHJcbiIsIiNldmVudHMge1xuICB3aWR0aDogNDAwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNzVweDtcbn1cblxuLmxhbmRpbmdfZWxlbWVudHMge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luLXRvcDogNzVweDtcbiAgbWFyZ2luLWxlZnQ6IDc1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDc1cHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxY2ZlMztcbiAgY29sb3I6IGRhcmtzbGF0ZWdyZXk7XG59Il19 */");

/***/ }),

/***/ "./src/app/landing/events/events.component.ts":
/*!****************************************************!*\
  !*** ./src/app/landing/events/events.component.ts ***!
  \****************************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EventsComponent = class EventsComponent {
    constructor() { }
    ngOnInit() {
    }
};
EventsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-events',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./events.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/events/events.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./events.component.scss */ "./src/app/landing/events/events.component.scss")).default]
    })
], EventsComponent);



/***/ }),

/***/ "./src/app/landing/information/information.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/landing/information/information.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#information {\n  margin-left: 700px;\n  margin-top: -536px;\n  width: 40%;\n  height: 60%;\n}\n\n.landing_elements {\n  font-family: monospace;\n  font-size: 15px;\n  font-weight: 500;\n  height: 150px;\n  width: 150px;\n  margin-top: 75px;\n  margin-left: 75px;\n  text-align: center;\n  padding-top: 75px;\n  padding-left: 30px;\n  padding-right: 30px;\n  background-color: #d1cfe3;\n  color: darkslategrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9pbmZvcm1hdGlvbi9DOlxcVXNlcnNcXFNvbnlhIFNoZXN0YWtvdmFcXElkZWFQcm9qZWN0c1xcbGFuZ3VhZ2UtdHJhaW5pbmctZnJvbnQvc3JjXFxhcHBcXGxhbmRpbmdcXGluZm9ybWF0aW9uXFxpbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGFuZGluZy9pbmZvcm1hdGlvbi9pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0NGOztBRENBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvaW5mb3JtYXRpb24vaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaW5mb3JtYXRpb257XHJcbiAgbWFyZ2luLWxlZnQ6NzAwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTUzNnB4O1xyXG4gIHdpZHRoOjQwJTtcclxuICBoZWlnaHQ6NjAlO1xyXG59XHJcbi5sYW5kaW5nX2VsZW1lbnRze1xyXG4gIGZvbnQtZmFtaWx5Om1vbm9zcGFjZTtcclxuICBmb250LXNpemU6MTVweDtcclxuICBmb250LXdlaWdodDo1MDA7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgbWFyZ2luLXRvcDogNzVweDtcclxuICBtYXJnaW4tbGVmdDogNzVweDtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogNzVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNkMWNmZTM7XHJcbiAgY29sb3I6ZGFya3NsYXRlZ3JleTtcclxufVxyXG4iLCIjaW5mb3JtYXRpb24ge1xuICBtYXJnaW4tbGVmdDogNzAwcHg7XG4gIG1hcmdpbi10b3A6IC01MzZweDtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiA2MCU7XG59XG5cbi5sYW5kaW5nX2VsZW1lbnRzIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIG1hcmdpbi10b3A6IDc1cHg7XG4gIG1hcmdpbi1sZWZ0OiA3NXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA3NXB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWNmZTM7XG4gIGNvbG9yOiBkYXJrc2xhdGVncmV5O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/landing/information/information.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/landing/information/information.component.ts ***!
  \**************************************************************/
/*! exports provided: InformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationComponent", function() { return InformationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InformationComponent = class InformationComponent {
    constructor() { }
    ngOnInit() {
    }
};
InformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-information',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./information.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/information/information.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./information.component.scss */ "./src/app/landing/information/information.component.scss")).default]
    })
], InformationComponent);



/***/ }),

/***/ "./src/app/landing/landing.component.scss":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".landing_elements {\n  font-family: monospace;\n  font-size: 15px;\n  font-weight: 500;\n  height: 150px;\n  width: 150px;\n  margin-top: 75px;\n  margin-left: 75px;\n  text-align: center;\n  padding-top: 75px;\n  padding-left: 30px;\n  padding-right: 30px;\n  background-color: #d1cfe3;\n  color: darkslategrey;\n}\n\n#hello {\n  height: 50px;\n  width: 100%;\n  text-align: center;\n  margin-top: 15px;\n  font-family: monospace;\n  font-size: 20px;\n  font-weight: 500;\n  color: darkslategrey;\n}\n\n.container {\n  height: 90.9%;\n  width: 93.9%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9DOlxcVXNlcnNcXFNvbnlhIFNoZXN0YWtvdmFcXElkZWFQcm9qZWN0c1xcbGFuZ3VhZ2UtdHJhaW5pbmctZnJvbnQvc3JjXFxhcHBcXGxhbmRpbmdcXGxhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDRUY7O0FEQUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhbmRpbmdfZWxlbWVudHN7XHJcbiAgZm9udC1mYW1pbHk6bW9ub3NwYWNlO1xyXG4gIGZvbnQtc2l6ZToxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OjUwMDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBtYXJnaW4tdG9wOiA3NXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA3NXB4O1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA3NXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2QxY2ZlMztcclxuICBjb2xvcjpkYXJrc2xhdGVncmV5O1xyXG59XHJcbiNoZWxsb3tcclxuICBoZWlnaHQ6NTBweDtcclxuICB3aWR0aDoxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgZm9udC1mYW1pbHk6bW9ub3NwYWNlO1xyXG4gIGZvbnQtc2l6ZToyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OjUwMDtcclxuICBjb2xvcjpkYXJrc2xhdGVncmV5O1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgaGVpZ2h0OjkwLjklO1xyXG4gIHdpZHRoOjkzLjklIDtcclxufVxyXG4iLCIubGFuZGluZ19lbGVtZW50cyB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW4tdG9wOiA3NXB4O1xuICBtYXJnaW4tbGVmdDogNzVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNzVweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFjZmUzO1xuICBjb2xvcjogZGFya3NsYXRlZ3JleTtcbn1cblxuI2hlbGxvIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiBkYXJrc2xhdGVncmV5O1xufVxuXG4uY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA5MC45JTtcbiAgd2lkdGg6IDkzLjklO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LandingComponent = class LandingComponent {
    constructor() { }
    ngOnInit() {
    }
};
LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landing.component.scss */ "./src/app/landing/landing.component.scss")).default]
    })
], LandingComponent);



/***/ }),

/***/ "./src/app/landing/watch-works/watch-works.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/landing/watch-works/watch-works.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#watch-work {\n  position: relative;\n  margin-left: 325px;\n  margin-top: -270px;\n}\n\n.landing_elements {\n  font-family: monospace;\n  font-size: 15px;\n  font-weight: 500;\n  height: 150px;\n  width: 150px;\n  margin-top: 75px;\n  margin-left: 75px;\n  text-align: center;\n  padding-top: 75px;\n  padding-left: 30px;\n  padding-right: 30px;\n  background-color: #d1cfe3;\n  color: darkslategrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy93YXRjaC13b3Jrcy9DOlxcVXNlcnNcXFNvbnlhIFNoZXN0YWtvdmFcXElkZWFQcm9qZWN0c1xcbGFuZ3VhZ2UtdHJhaW5pbmctZnJvbnQvc3JjXFxhcHBcXGxhbmRpbmdcXHdhdGNoLXdvcmtzXFx3YXRjaC13b3Jrcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGFuZGluZy93YXRjaC13b3Jrcy93YXRjaC13b3Jrcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvd2F0Y2gtd29ya3Mvd2F0Y2gtd29ya3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjd2F0Y2gtd29ya3tcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDMyNXB4O1xyXG4gIG1hcmdpbi10b3A6IC0yNzBweDtcclxufVxyXG4ubGFuZGluZ19lbGVtZW50c3tcclxuICBmb250LWZhbWlseTptb25vc3BhY2U7XHJcbiAgZm9udC1zaXplOjE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6NTAwO1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDc1cHg7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDc1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojZDFjZmUzO1xyXG4gIGNvbG9yOmRhcmtzbGF0ZWdyZXk7XHJcbn1cclxuIiwiI3dhdGNoLXdvcmsge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiAzMjVweDtcbiAgbWFyZ2luLXRvcDogLTI3MHB4O1xufVxuXG4ubGFuZGluZ19lbGVtZW50cyB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW4tdG9wOiA3NXB4O1xuICBtYXJnaW4tbGVmdDogNzVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNzVweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFjZmUzO1xuICBjb2xvcjogZGFya3NsYXRlZ3JleTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/landing/watch-works/watch-works.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/landing/watch-works/watch-works.component.ts ***!
  \**************************************************************/
/*! exports provided: WatchWorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchWorksComponent", function() { return WatchWorksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WatchWorksComponent = class WatchWorksComponent {
    constructor() { }
    ngOnInit() {
    }
};
WatchWorksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-watch-works',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./watch-works.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/watch-works/watch-works.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./watch-works.component.scss */ "./src/app/landing/watch-works/watch-works.component.scss")).default]
    })
], WatchWorksComponent);



/***/ }),

/***/ "./src/app/landing/writing-work/writing-work.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/landing/writing-work/writing-work.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#writing-work {\n  position: relative;\n  margin-left: 325px;\n  margin-top: -225px;\n}\n\n.landing_elements {\n  font-family: monospace;\n  font-size: 15px;\n  font-weight: 500;\n  height: 150px;\n  width: 150px;\n  margin-top: 75px;\n  margin-left: 75px;\n  text-align: center;\n  padding-top: 75px;\n  padding-left: 30px;\n  padding-right: 30px;\n  background-color: #d1cfe3;\n  color: darkslategrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy93cml0aW5nLXdvcmsvQzpcXFVzZXJzXFxTb255YSBTaGVzdGFrb3ZhXFxJZGVhUHJvamVjdHNcXGxhbmd1YWdlLXRyYWluaW5nLWZyb250L3NyY1xcYXBwXFxsYW5kaW5nXFx3cml0aW5nLXdvcmtcXHdyaXRpbmctd29yay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGFuZGluZy93cml0aW5nLXdvcmsvd3JpdGluZy13b3JrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy93cml0aW5nLXdvcmsvd3JpdGluZy13b3JrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3dyaXRpbmctd29ya3tcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDMyNXB4O1xyXG4gIG1hcmdpbi10b3A6IC0yMjVweDtcclxufVxyXG4ubGFuZGluZ19lbGVtZW50c3tcclxuICBmb250LWZhbWlseTptb25vc3BhY2U7XHJcbiAgZm9udC1zaXplOjE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6NTAwO1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDc1cHg7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDc1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojZDFjZmUzO1xyXG4gIGNvbG9yOmRhcmtzbGF0ZWdyZXk7XHJcbn1cclxuIiwiI3dyaXRpbmctd29yayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IDMyNXB4O1xuICBtYXJnaW4tdG9wOiAtMjI1cHg7XG59XG5cbi5sYW5kaW5nX2VsZW1lbnRzIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIG1hcmdpbi10b3A6IDc1cHg7XG4gIG1hcmdpbi1sZWZ0OiA3NXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA3NXB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWNmZTM7XG4gIGNvbG9yOiBkYXJrc2xhdGVncmV5O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/landing/writing-work/writing-work.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/landing/writing-work/writing-work.component.ts ***!
  \****************************************************************/
/*! exports provided: WritingWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WritingWorkComponent", function() { return WritingWorkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WritingWorkComponent = class WritingWorkComponent {
    constructor() { }
    ngOnInit() {
    }
};
WritingWorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-writing-work',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./writing-work.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/writing-work/writing-work.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./writing-work.component.scss */ "./src/app/landing/writing-work/writing-work.component.scss")).default]
    })
], WritingWorkComponent);



/***/ }),

/***/ "./src/app/main/main.component.scss":
/*!******************************************!*\
  !*** ./src/app/main/main.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainComponent = class MainComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main.component.scss */ "./src/app/main/main.component.scss")).default]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/moderator-page/moderator-page.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/moderator-page/moderator-page.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGVyYXRvci1wYWdlL21vZGVyYXRvci1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/moderator-page/moderator-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/moderator-page/moderator-page.component.ts ***!
  \************************************************************/
/*! exports provided: ModeratorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeratorPageComponent", function() { return ModeratorPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ModeratorPageComponent = class ModeratorPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
ModeratorPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-moderator-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./moderator-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/moderator-page/moderator-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./moderator-page.component.scss */ "./src/app/moderator-page/moderator-page.component.scss")).default]
    })
], ModeratorPageComponent);



/***/ }),

/***/ "./src/app/other-page/info/info.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/other-page/info/info.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#fio, #info {\n  font-size: 15px;\n  font-weight: 500;\n  height: 25px;\n  width: 700px;\n  margin-top: -225px;\n  margin-left: 450px;\n  text-align: center;\n  background-color: #d1cfe3;\n  color: darkslategrey;\n}\n\n#info {\n  margin-top: 30px;\n  height: 173px;\n  text-align: center;\n}\n\n#watch {\n  margin-left: 800px;\n  margin-top: 15px;\n}\n\n#troubles {\n  margin-left: 1040px;\n  position: relative;\n  margin-top: -40px;\n}\n\n.buttons {\n  border-radius: 15px;\n  background-color: #d1cfe3;\n  border-color: mediumpurple;\n  color: darkslategrey;\n  height: 40px;\n}\n\n#text {\n  height: 200px;\n  width: 200px;\n  border-color: mediumpurple;\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3RoZXItcGFnZS9pbmZvL0M6XFxVc2Vyc1xcU29ueWEgU2hlc3Rha292YVxcSWRlYVByb2plY3RzXFxsYW5ndWFnZS10cmFpbmluZy1mcm9udC9zcmNcXGFwcFxcb3RoZXItcGFnZVxcaW5mb1xcaW5mby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvb3RoZXItcGFnZS9pbmZvL2luZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDRUY7O0FEQUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNHRjs7QUREQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ0lGOztBRERBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC9vdGhlci1wYWdlL2luZm8vaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmaW8sICNpbmZvIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgd2lkdGg6IDcwMHB4O1xyXG4gIG1hcmdpbi10b3A6IC0yMjVweDtcclxuICBtYXJnaW4tbGVmdDogNDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWNmZTM7XHJcbiAgY29sb3I6IGRhcmtzbGF0ZWdyZXk7XHJcbn1cclxuXHJcbiNpbmZvIHtcclxuICBtYXJnaW4tdG9wOjMwcHg7XHJcbiAgaGVpZ2h0OjE3M3B4O1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcbiN3YXRjaHtcclxuICBtYXJnaW4tbGVmdDo4MDBweDtcclxuICBtYXJnaW4tdG9wOjE1cHg7XHJcbn1cclxuI3Ryb3VibGVze1xyXG4gIG1hcmdpbi1sZWZ0OjEwNDBweDtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wOi00MHB4O1xyXG59XHJcbi5idXR0b25ze1xyXG4gIGJvcmRlci1yYWRpdXM6MTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNkMWNmZTM7XHJcbiAgYm9yZGVyLWNvbG9yOiBtZWRpdW1wdXJwbGU7XHJcbiAgY29sb3I6ZGFya3NsYXRlZ3JleTtcclxuICBoZWlnaHQ6NDBweDtcclxufVxyXG5cclxuI3RleHR7XHJcbiAgaGVpZ2h0OjIwMHB4O1xyXG4gIHdpZHRoOjIwMHB4O1xyXG4gIGJvcmRlci1jb2xvcjptZWRpdW1wdXJwbGU7XHJcbiAgYm9yZGVyLXJhZGl1czo4cHg7XHJcbn1cclxuIiwiI2ZpbywgI2luZm8ge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDcwMHB4O1xuICBtYXJnaW4tdG9wOiAtMjI1cHg7XG4gIG1hcmdpbi1sZWZ0OiA0NTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFjZmUzO1xuICBjb2xvcjogZGFya3NsYXRlZ3JleTtcbn1cblxuI2luZm8ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBoZWlnaHQ6IDE3M3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiN3YXRjaCB7XG4gIG1hcmdpbi1sZWZ0OiA4MDBweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuI3Ryb3VibGVzIHtcbiAgbWFyZ2luLWxlZnQ6IDEwNDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAtNDBweDtcbn1cblxuLmJ1dHRvbnMge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFjZmUzO1xuICBib3JkZXItY29sb3I6IG1lZGl1bXB1cnBsZTtcbiAgY29sb3I6IGRhcmtzbGF0ZWdyZXk7XG4gIGhlaWdodDogNDBweDtcbn1cblxuI3RleHQge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGJvcmRlci1jb2xvcjogbWVkaXVtcHVycGxlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/other-page/info/info.component.ts":
/*!***************************************************!*\
  !*** ./src/app/other-page/info/info.component.ts ***!
  \***************************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InfoComponent = class InfoComponent {
    constructor() {
        this.condition = true;
    }
    toggle() {
        this.condition = !this.condition;
    }
    ngOnInit() {
    }
};
InfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/other-page/info/info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./info.component.scss */ "./src/app/other-page/info/info.component.scss")).default]
    })
], InfoComponent);



/***/ }),

/***/ "./src/app/other-page/other-page.component.scss":
/*!******************************************************!*\
  !*** ./src/app/other-page/other-page.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL290aGVyLXBhZ2Uvb3RoZXItcGFnZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/other-page/other-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/other-page/other-page.component.ts ***!
  \****************************************************/
/*! exports provided: OtherPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherPageComponent", function() { return OtherPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OtherPageComponent = class OtherPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
OtherPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-other-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./other-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/other-page/other-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./other-page.component.scss */ "./src/app/other-page/other-page.component.scss")).default]
    })
], OtherPageComponent);



/***/ }),

/***/ "./src/app/other-page/photo-other/photo-other.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/other-page/photo-other/photo-other.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#photo1 {\n  margin-left: 200px;\n  margin-top: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3RoZXItcGFnZS9waG90by1vdGhlci9DOlxcVXNlcnNcXFNvbnlhIFNoZXN0YWtvdmFcXElkZWFQcm9qZWN0c1xcbGFuZ3VhZ2UtdHJhaW5pbmctZnJvbnQvc3JjXFxhcHBcXG90aGVyLXBhZ2VcXHBob3RvLW90aGVyXFxwaG90by1vdGhlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvb3RoZXItcGFnZS9waG90by1vdGhlci9waG90by1vdGhlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL290aGVyLXBhZ2UvcGhvdG8tb3RoZXIvcGhvdG8tb3RoZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGhvdG8xe1xyXG4gIG1hcmdpbi1sZWZ0OjIwMHB4O1xyXG4gIG1hcmdpbi10b3A6NzBweDtcclxufVxyXG4iLCIjcGhvdG8xIHtcbiAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xuICBtYXJnaW4tdG9wOiA3MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/other-page/photo-other/photo-other.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/other-page/photo-other/photo-other.component.ts ***!
  \*****************************************************************/
/*! exports provided: PhotoOtherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoOtherComponent", function() { return PhotoOtherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PhotoOtherComponent = class PhotoOtherComponent {
    constructor() { }
    ngOnInit() {
    }
};
PhotoOtherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-photo-other',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./photo-other.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/other-page/photo-other/photo-other.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./photo-other.component.scss */ "./src/app/other-page/photo-other/photo-other.component.scss")).default]
    })
], PhotoOtherComponent);



/***/ }),

/***/ "./src/app/personal-area/graphics/graphics.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/personal-area/graphics/graphics.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#number_works {\n  font-size: 15px;\n  font-weight: 500;\n  height: 180px;\n  width: 48%;\n  margin-top: 70px;\n  margin-left: 20px;\n  text-align: center;\n  background-color: #d1cfe3;\n  color: darkslategrey;\n  padding-top: 100px;\n}\n\n#average {\n  font-size: 15px;\n  font-weight: 500;\n  height: 180px;\n  width: 48%;\n  margin-top: -277px;\n  margin-left: 53%;\n  text-align: center;\n  background-color: #d1cfe3;\n  color: darkslategrey;\n  padding-top: 100px;\n}\n\ngoogle-chart {\n  width: 680px;\n  height: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyc29uYWwtYXJlYS9ncmFwaGljcy9DOlxcVXNlcnNcXFNvbnlhIFNoZXN0YWtvdmFcXElkZWFQcm9qZWN0c1xcbGFuZ3VhZ2UtdHJhaW5pbmctZnJvbnQvc3JjXFxhcHBcXHBlcnNvbmFsLWFyZWFcXGdyYXBoaWNzXFxncmFwaGljcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGVyc29uYWwtYXJlYS9ncmFwaGljcy9ncmFwaGljcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUxrQjtFQU1sQixnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURHQTtFQUFVLGVBQUE7RUFDUixnQkFBQTtFQUNBLGFBQUE7RUFDQSxVQWhCa0I7RUFpQmxCLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbmFsLWFyZWEvZ3JhcGhpY3MvZ3JhcGhpY3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcGhvdG9fd2lkdGg6IDIwMHB4O1xyXG4kbnVtYmVyX3dvcmtzX3dpZHRoOjQ4JTtcclxuI251bWJlcl93b3Jrc3tcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBoZWlnaHQ6IDE4MHB4O1xyXG4gIHdpZHRoOiAkbnVtYmVyX3dvcmtzX3dpZHRoO1xyXG4gIG1hcmdpbi10b3A6IDcwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWNmZTM7XHJcbiAgY29sb3I6IGRhcmtzbGF0ZWdyZXk7XHJcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG59XHJcbiNhdmVyYWdleyBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBoZWlnaHQ6IDE4MHB4O1xyXG4gIHdpZHRoOiAkbnVtYmVyX3dvcmtzX3dpZHRoO1xyXG4gIG1hcmdpbi10b3A6IC0yNzdweDtcclxuICBtYXJnaW4tbGVmdDogNTMlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFjZmUzO1xyXG4gIGNvbG9yOiBkYXJrc2xhdGVncmV5O1xyXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcclxufVxyXG5cclxuZ29vZ2xlLWNoYXJ0e1xyXG4gIHdpZHRoOiA2ODBweDtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG59XHJcbiIsIiNudW1iZXJfd29ya3Mge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGhlaWdodDogMTgwcHg7XG4gIHdpZHRoOiA0OCU7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWNmZTM7XG4gIGNvbG9yOiBkYXJrc2xhdGVncmV5O1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG59XG5cbiNhdmVyYWdlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBoZWlnaHQ6IDE4MHB4O1xuICB3aWR0aDogNDglO1xuICBtYXJnaW4tdG9wOiAtMjc3cHg7XG4gIG1hcmdpbi1sZWZ0OiA1MyU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxY2ZlMztcbiAgY29sb3I6IGRhcmtzbGF0ZWdyZXk7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbn1cblxuZ29vZ2xlLWNoYXJ0IHtcbiAgd2lkdGg6IDY4MHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/personal-area/graphics/graphics.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/personal-area/graphics/graphics.component.ts ***!
  \**************************************************************/
/*! exports provided: GraphicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphicsComponent", function() { return GraphicsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


class Chart {
    constructor(title, type, data, columnNames, options) {
        this.title = title;
        this.type = type;
        this.data = data;
        this.columnNames = columnNames;
        this.options = options;
    }
}
let GraphicsComponent = class GraphicsComponent {
    constructor() {
        this.number_works = new Chart('Количество работы', 'LineChart', [
            ["Январь", 7],
            ["Февраль", 6],
            ["Март", 9],
            ["Апрель", 14],
            ["Май", 18],
            ["Июнь", 21],
            ["Июль", 25],
            ["Август", 26],
            ["Сентябрь", 23],
            ["Октябрь", 18],
            ["Ноябрь", 13],
            ["Декабрь", 9],
        ], ['месяц', 'количество'], {});
        this.average = new Chart('Средний балл', 'LineChart', [
            ["Январь", 25],
            ["Февраль", 26],
            ["Март", 34],
            ["Апрель", 34],
            ["Май", 23],
            ["Июнь", 38],
            ["Июль", 40],
            ["Август", 55],
            ["Сентябрь", 58],
            ["Октябрь", 67],
            ["Ноябрь", 84],
            ["Декабрь", 88],
        ], ['месяц', 'балл'], {});
    }
    ngOnInit() {
    }
};
GraphicsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-graphics',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./graphics.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/personal-area/graphics/graphics.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./graphics.component.scss */ "./src/app/personal-area/graphics/graphics.component.scss")).default]
    })
], GraphicsComponent);



/***/ }),

/***/ "./src/app/personal-area/personal-area.component.scss":
/*!************************************************************!*\
  !*** ./src/app/personal-area/personal-area.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbmFsLWFyZWEvcGVyc29uYWwtYXJlYS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/personal-area/personal-area.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/personal-area/personal-area.component.ts ***!
  \**********************************************************/
/*! exports provided: PersonalAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalAreaComponent", function() { return PersonalAreaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PersonalAreaComponent = class PersonalAreaComponent {
    constructor() { }
    ngOnInit() {
    }
};
PersonalAreaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-personal-area',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./personal-area.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/personal-area/personal-area.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./personal-area.component.scss */ "./src/app/personal-area/personal-area.component.scss")).default]
    })
], PersonalAreaComponent);



/***/ }),

/***/ "./src/app/personal-area/personal-info/personal-info.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/personal-area/personal-info/personal-info.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#fio, info {\n  font-size: 15px;\n  font-weight: 500;\n  height: 25px;\n  width: 950px;\n  margin-top: -225px;\n  margin-left: 280px;\n  text-align: center;\n  background-color: #d1cfe3;\n  color: darkslategrey;\n}\n\n#info {\n  background-color: #d1cfe3;\n  color: darkslategrey;\n  margin-left: 280px;\n  margin-top: 30px;\n  width: 950px;\n  height: 173px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyc29uYWwtYXJlYS9wZXJzb25hbC1pbmZvL0M6XFxVc2Vyc1xcU29ueWEgU2hlc3Rha292YVxcSWRlYVByb2plY3RzXFxsYW5ndWFnZS10cmFpbmluZy1mcm9udC9zcmNcXGFwcFxccGVyc29uYWwtYXJlYVxccGVyc29uYWwtaW5mb1xccGVyc29uYWwtaW5mby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGVyc29uYWwtYXJlYS9wZXJzb25hbC1pbmZvL3BlcnNvbmFsLWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvcGVyc29uYWwtYXJlYS9wZXJzb25hbC1pbmZvL3BlcnNvbmFsLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcGhvdG9fd2lkdGg6IDIwMHB4O1xyXG4jZmlvLCBpbmZvIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgd2lkdGg6IDk1MHB4O1xyXG4gIG1hcmdpbi10b3A6IC0yMjVweDtcclxuICBtYXJnaW4tbGVmdDogJHBob3RvX3dpZHRoKzgwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFjZmUzO1xyXG4gIGNvbG9yOiBkYXJrc2xhdGVncmV5O1xyXG59XHJcblxyXG4jaW5mbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxY2ZlMztcclxuICBjb2xvcjogZGFya3NsYXRlZ3JleTtcclxuICBtYXJnaW4tbGVmdDokcGhvdG9fd2lkdGgrODA7XHJcbiAgbWFyZ2luLXRvcDozMHB4O1xyXG4gIHdpZHRoOjk1MHB4O1xyXG4gIGhlaWdodDoxNzNweDtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG4iLCIjZmlvLCBpbmZvIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiA5NTBweDtcbiAgbWFyZ2luLXRvcDogLTIyNXB4O1xuICBtYXJnaW4tbGVmdDogMjgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxY2ZlMztcbiAgY29sb3I6IGRhcmtzbGF0ZWdyZXk7XG59XG5cbiNpbmZvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxY2ZlMztcbiAgY29sb3I6IGRhcmtzbGF0ZWdyZXk7XG4gIG1hcmdpbi1sZWZ0OiAyODBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgd2lkdGg6IDk1MHB4O1xuICBoZWlnaHQ6IDE3M3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/personal-area/personal-info/personal-info.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/personal-area/personal-info/personal-info.component.ts ***!
  \************************************************************************/
/*! exports provided: PersonalInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInfoComponent", function() { return PersonalInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_currentUser_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/currentUser.service */ "./src/app/shared/services/currentUser.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_services_userService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/userService */ "./src/app/shared/services/userService.ts");





let PersonalInfoComponent = class PersonalInfoComponent {
    constructor(user, details, http) {
        this.user = user;
        this.details = details;
        this.http = http;
    }
    submitInfo() {
        this.user.screenName = this.screenName;
        this.user.bio = this.bio;
        const newUser = {
            username: this.user.username,
            password: "",
            bio: this.user.bio,
            screenName: this.user.screenName
        };
        this.details.patchUserDetails(newUser).subscribe(res => {
        });
    }
    ngOnInit() {
    }
};
PersonalInfoComponent.ctorParameters = () => [
    { type: _shared_services_currentUser_service__WEBPACK_IMPORTED_MODULE_2__["CurrentUserService"] },
    { type: _shared_services_userService__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
PersonalInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-personal-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./personal-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/personal-area/personal-info/personal-info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./personal-info.component.scss */ "./src/app/personal-area/personal-info/personal-info.component.scss")).default]
    })
], PersonalInfoComponent);



/***/ }),

/***/ "./src/app/personal-area/photo/photo.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/personal-area/photo/photo.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#photo {\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyc29uYWwtYXJlYS9waG90by9DOlxcVXNlcnNcXFNvbnlhIFNoZXN0YWtvdmFcXElkZWFQcm9qZWN0c1xcbGFuZ3VhZ2UtdHJhaW5pbmctZnJvbnQvc3JjXFxhcHBcXHBlcnNvbmFsLWFyZWFcXHBob3RvXFxwaG90by5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGVyc29uYWwtYXJlYS9waG90by9waG90by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGlCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9wZXJzb25hbC1hcmVhL3Bob3RvL3Bob3RvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHBob3RvX3dpZHRoOjIwMHB4O1xyXG4jcGhvdG97XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbiIsIiNwaG90byB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/personal-area/photo/photo.component.ts":
/*!********************************************************!*\
  !*** ./src/app/personal-area/photo/photo.component.ts ***!
  \********************************************************/
/*! exports provided: PhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoComponent", function() { return PhotoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PhotoComponent = class PhotoComponent {
    constructor() { }
    ngOnInit() {
    }
};
PhotoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-photo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./photo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/personal-area/photo/photo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./photo.component.scss */ "./src/app/personal-area/photo/photo.component.scss")).default]
    })
], PhotoComponent);



/***/ }),

/***/ "./src/app/rating/rating-works/rating-works.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/rating/rating-works/rating-works.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#title {\n  font-weight: normal;\n  margin-left: 50%;\n}\n\n#table {\n  border-spacing: 20px;\n  margin-left: 150px;\n  width: 85%;\n}\n\n.work {\n  font-size: 20px;\n  font-weight: 500;\n  text-align: center;\n  background-color: #d1cfe3;\n  color: darkslategrey;\n}\n\n#statics {\n  margin-left: 1120px;\n  border-radius: 15px;\n  background-color: #d1cfe3;\n  border-color: mediumpurple;\n  color: darkslategrey;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmF0aW5nL3JhdGluZy13b3Jrcy9DOlxcVXNlcnNcXFNvbnlhIFNoZXN0YWtvdmFcXElkZWFQcm9qZWN0c1xcbGFuZ3VhZ2UtdHJhaW5pbmctZnJvbnQvc3JjXFxhcHBcXHJhdGluZ1xccmF0aW5nLXdvcmtzXFxyYXRpbmctd29ya3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JhdGluZy9yYXRpbmctd29ya3MvcmF0aW5nLXdvcmtzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNFRjs7QURBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtBQ0dGOztBRERBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUNJRiIsImZpbGUiOiJzcmMvYXBwL3JhdGluZy9yYXRpbmctd29ya3MvcmF0aW5nLXdvcmtzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RpdGxlIHtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbn1cclxuI3RhYmxle1xyXG4gIGJvcmRlci1zcGFjaW5nOjIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6MTUwcHg7XHJcbiAgd2lkdGg6ODUlO1xyXG59XHJcbi53b3JrIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxY2ZlMztcclxuICBjb2xvcjogZGFya3NsYXRlZ3JleTtcclxufVxyXG4jc3RhdGljc3tcclxuICBtYXJnaW4tbGVmdDoxMTIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czoxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2QxY2ZlMztcclxuICBib3JkZXItY29sb3I6IG1lZGl1bXB1cnBsZTtcclxuICBjb2xvcjpkYXJrc2xhdGVncmV5O1xyXG4gIGhlaWdodDo0MHB4O1xyXG59XHJcbiIsIiN0aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIG1hcmdpbi1sZWZ0OiA1MCU7XG59XG5cbiN0YWJsZSB7XG4gIGJvcmRlci1zcGFjaW5nOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTUwcHg7XG4gIHdpZHRoOiA4NSU7XG59XG5cbi53b3JrIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWNmZTM7XG4gIGNvbG9yOiBkYXJrc2xhdGVncmV5O1xufVxuXG4jc3RhdGljcyB7XG4gIG1hcmdpbi1sZWZ0OiAxMTIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWNmZTM7XG4gIGJvcmRlci1jb2xvcjogbWVkaXVtcHVycGxlO1xuICBjb2xvcjogZGFya3NsYXRlZ3JleTtcbiAgaGVpZ2h0OiA0MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/rating/rating-works/rating-works.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/rating/rating-works/rating-works.component.ts ***!
  \***************************************************************/
/*! exports provided: RatingWorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingWorksComponent", function() { return RatingWorksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RatingWorksComponent = class RatingWorksComponent {
    constructor() { }
    ngOnInit() {
    }
};
RatingWorksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rating-works',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rating-works.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/rating/rating-works/rating-works.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rating-works.component.scss */ "./src/app/rating/rating-works/rating-works.component.scss")).default]
    })
], RatingWorksComponent);



/***/ }),

/***/ "./src/app/rating/rating.component.scss":
/*!**********************************************!*\
  !*** ./src/app/rating/rating.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/rating/rating.component.ts":
/*!********************************************!*\
  !*** ./src/app/rating/rating.component.ts ***!
  \********************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RatingComponent = class RatingComponent {
    constructor() { }
    ngOnInit() {
    }
};
RatingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rating',
        template: '<h3>Рейтинг</h3><app-rating-works></app-rating-works>',
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rating.component.scss */ "./src/app/rating/rating.component.scss")).default]
    })
], RatingComponent);



/***/ }),

/***/ "./src/app/registration/registration.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#form {\n  margin-left: 48%;\n  border-radius: 10px;\n  border-color: mediumpurple;\n}\n\n.buttons {\n  background-color: #d1cfe3;\n  border-color: mediumpurple;\n  color: darkslategrey;\n  height: 40px;\n  border-radius: 10px;\n  margin-left: 45px;\n  margin-top: 70px;\n}\n\n.vertical-button-panel {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: auto;\n  background-color: #9974a7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmF0aW9uL0M6XFxVc2Vyc1xcU29ueWEgU2hlc3Rha292YVxcSWRlYVByb2plY3RzXFxsYW5ndWFnZS10cmFpbmluZy1mcm9udC9zcmNcXGFwcFxccmVnaXN0cmF0aW9uXFxyZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUNDRjs7QURDQTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNFRjs7QURBQTtFQUNFLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmb3Jte1xyXG4gIG1hcmdpbi1sZWZ0OjQ4JTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci1jb2xvcjogbWVkaXVtcHVycGxlO1xyXG59XHJcbi5idXR0b25ze1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWNmZTM7XHJcbiAgYm9yZGVyLWNvbG9yOiBtZWRpdW1wdXJwbGU7XHJcbiAgY29sb3I6IGRhcmtzbGF0ZWdyZXk7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICBtYXJnaW4tbGVmdDo0NXB4O1xyXG4gIG1hcmdpbi10b3A6NzBweDtcclxufVxyXG4udmVydGljYWwtYnV0dG9uLXBhbmVse1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojOTk3NGE3O1xyXG59XHJcbiIsIiNmb3JtIHtcbiAgbWFyZ2luLWxlZnQ6IDQ4JTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWNvbG9yOiBtZWRpdW1wdXJwbGU7XG59XG5cbi5idXR0b25zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxY2ZlMztcbiAgYm9yZGVyLWNvbG9yOiBtZWRpdW1wdXJwbGU7XG4gIGNvbG9yOiBkYXJrc2xhdGVncmV5O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiA0NXB4O1xuICBtYXJnaW4tdG9wOiA3MHB4O1xufVxuXG4udmVydGljYWwtYnV0dG9uLXBhbmVsIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTc0YTc7XG59Il19 */");

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_userService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/userService */ "./src/app/shared/services/userService.ts");
/* harmony import */ var _shared_services_htpp_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/htpp/auth.service */ "./src/app/shared/services/htpp/auth.service.ts");






let RegistrationComponent = class RegistrationComponent {
    constructor(auth, userService, router) {
        this.auth = auth;
        this.userService = userService;
        this.router = router;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    submit() {
        const user = {
            username: this.form.value.login,
            password: this.form.value.password
        };
        this.auth.register(user).subscribe((res) => {
            this.form.reset();
            this.router.navigate(["/auth"]);
        });
        this.userService.patchUserDetails(user).subscribe(res => {
            let details = res.details;
            user.bio = details.bio;
            user.screenName = details.screenName;
        });
    }
};
RegistrationComponent.ctorParameters = () => [
    { type: _shared_services_htpp_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _shared_services_userService__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registration',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registration.component.scss */ "./src/app/registration/registration.component.scss")).default]
    })
], RegistrationComponent);



/***/ }),

/***/ "./src/app/shared/services/currentUser.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/currentUser.service.ts ***!
  \********************************************************/
/*! exports provided: CurrentUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentUserService", function() { return CurrentUserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CurrentUserService = class CurrentUserService {
    constructor() {
        this.username = '';
        this.bio = '';
        this.screenName = '';
    }
};
CurrentUserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], CurrentUserService);



/***/ }),

/***/ "./src/app/shared/services/htpp/auth.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/htpp/auth.service.ts ***!
  \******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _currentUser_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../currentUser.service */ "./src/app/shared/services/currentUser.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");







let AuthService = class AuthService {
    constructor(http, currentUser) {
        this.http = http;
        this.currentUser = currentUser;
        this.errors$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    get token() {
        return localStorage.getItem('spring-token');
    }
    register(user) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].baseUrl}:${_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].localPort}/auth`, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError.bind(this)));
    }
    login(user) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Username": user.username,
            "Password": user.password,
        });
        const options = { headers: headers };
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].baseUrl}:${_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].localPort}/auth`, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(this.setToken), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError.bind(this)));
    }
    logout() {
        this.setToken(null);
    }
    isAuthenticated() {
        return !!this.token;
    }
    setToken(response) {
        if (response) {
            localStorage.setItem('spring-token', response.token);
        }
        else {
            localStorage.clear();
        }
    }
    handleError(error) {
        const status = error.status;
        switch (status) {
            case 404: {
                this.errors$.next("Такого логина не существует");
                break;
            }
            case 401: {
                this.errors$.next("Неверный пароль");
                break;
            }
            case 400: {
                this.errors$.next("Логин уже существует");
            }
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _currentUser_service__WEBPACK_IMPORTED_MODULE_5__["CurrentUserService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AuthService);



/***/ }),

/***/ "./src/app/shared/services/htpp/theme.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/htpp/theme.service.ts ***!
  \*******************************************************/
/*! exports provided: ThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function() { return ThemeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _currentUser_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../currentUser.service */ "./src/app/shared/services/currentUser.service.ts");





let ThemeService = class ThemeService {
    constructor(http, user) {
        this.http = http;
        this.user = user;
        this.getTheme();
    }
    getTheme() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl}:${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].localPort}/forum/topics`);
    }
    createTheme(themeName) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "username": this.user.username,
            "Authorization": "Bearer " + localStorage.getItem("spring-token"),
            "Content-Type": "application/json"
        });
        const options = { headers: headers };
        const theme = {
            themeName: themeName,
            text: `Создана новая тема с названием "${themeName}"`
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl}:${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].localPort}/forum/topics`, theme, options);
    }
    getMessage(themeId) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json"
        });
        const options = { headers: headers };
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl}:${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].localPort}/forum/messages?themeId=${themeId}`, options);
    }
    createMessage(message, themeId) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "username": this.user.username,
            "Authorization": "Bearer " + localStorage.getItem("spring-token"),
            "Content-Type": "application/json"
        });
        const options = { headers: headers };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl}:${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].localPort}/forum/messages/${themeId}`, message, options);
    }
};
ThemeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _currentUser_service__WEBPACK_IMPORTED_MODULE_4__["CurrentUserService"] }
];
ThemeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], ThemeService);



/***/ }),

/***/ "./src/app/shared/services/htpp/work.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/htpp/work.service.ts ***!
  \******************************************************/
/*! exports provided: WorkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkService", function() { return WorkService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");




let WorkService = class WorkService {
    constructor(http) {
        this.http = http;
    }
    postWork(username, work) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "username": username,
            "Authorization": "Bearer " + localStorage.getItem("spring-token"),
            "Content-Type": "application/json"
        });
        const options = { headers: headers };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl}:${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].localPort}/works`, work, options);
    }
    getText() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl}:${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].localPort}/texts/1`);
    }
};
WorkService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
WorkService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], WorkService);



/***/ }),

/***/ "./src/app/shared/services/userService.ts":
/*!************************************************!*\
  !*** ./src/app/shared/services/userService.ts ***!
  \************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    patchUserDetails(user) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Authorization": "Bearer " + localStorage.getItem("spring-token"),
            "Content-Type": "application/json",
        });
        const options = { headers: headers };
        let username = user.username;
        let body = { screenName: user.screenName, bio: user.bio };
        return this.http.patch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl}:${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].localPort}/users/` + username, body, options);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], UserService);



/***/ }),

/***/ "./src/app/shared/services/workContainer.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/workContainer.ts ***!
  \**************************************************/
/*! exports provided: WorkContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkContainer", function() { return WorkContainer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WorkContainer = class WorkContainer {
    constructor() {
        this.works = [];
    }
    ngOnInit() {
    }
};
WorkContainer = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], WorkContainer);



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.scss":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidebar {\n  float: left;\n  display: block;\n  width: 6%;\n  min-width: 75px;\n  background-color: #9974a7;\n  border-right: 1px solid black;\n  height: 100%;\n}\n\n.vertical-button-panel {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: auto;\n  background-color: #9974a7;\n}\n\n.vertical-button-panel > div {\n  height: 55px;\n  width: 55px;\n  margin-top: 7.5px;\n  background-color: #d1cfe3;\n}\n\n.lk1:hover::after {\n  content: attr(data-title);\n  position: relative;\n  left: 0;\n  bottom: 0px;\n  z-index: 1;\n  background: rgba(0, 42, 167, 0.6);\n  color: #fff;\n  text-align: center;\n  font-family: Arial, sans-serif;\n  font-size: 11px;\n  padding: 5px 10px;\n  border: 1px solid #333;\n}\n\n.do_work:hover::after {\n  content: attr(data-title);\n  position: relative;\n  left: 0;\n  bottom: 0px;\n  z-index: 1;\n  background: rgba(0, 42, 167, 0.6);\n  color: #fff;\n  text-align: center;\n  font-family: Arial, sans-serif;\n  font-size: 11px;\n  padding: 5px 10px;\n  border: 1px solid #333;\n  width: 300px;\n}\n\n.watch_work:hover::after {\n  content: attr(data-title);\n  position: relative;\n  left: 0;\n  bottom: 0px;\n  z-index: 1;\n  background: rgba(0, 42, 167, 0.6);\n  color: #fff;\n  text-align: center;\n  font-family: Arial, sans-serif;\n  font-size: 11px;\n  padding: 5px 10px;\n  border: 1px solid #333;\n  width: 300px;\n}\n\n.rating:hover::after {\n  content: attr(data-title);\n  position: relative;\n  left: 0;\n  bottom: 0px;\n  z-index: 1;\n  background: rgba(0, 42, 167, 0.6);\n  color: #fff;\n  text-align: center;\n  font-family: Arial, sans-serif;\n  font-size: 11px;\n  padding: 5px 10px;\n  border: 1px solid #333;\n  width: 300px;\n}\n\n.forum:hover::after {\n  content: attr(data-title);\n  position: relative;\n  left: 0;\n  bottom: 0px;\n  z-index: 1;\n  background: rgba(0, 42, 167, 0.6);\n  color: #fff;\n  text-align: center;\n  font-family: Arial, sans-serif;\n  font-size: 11px;\n  padding: 5px 10px;\n  border: 1px solid #333;\n  width: 300px;\n}\n\n.info:hover::after {\n  content: attr(data-title);\n  position: relative;\n  left: 0;\n  bottom: 0px;\n  z-index: 1;\n  background: rgba(0, 42, 167, 0.6);\n  color: #fff;\n  text-align: center;\n  font-family: Arial, sans-serif;\n  font-size: 11px;\n  padding: 5px 10px;\n  border: 1px solid #333;\n  width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9DOlxcVXNlcnNcXFNvbnlhIFNoZXN0YWtvdmFcXElkZWFQcm9qZWN0c1xcbGFuZ3VhZ2UtdHJhaW5pbmctZnJvbnQvc3JjXFxhcHBcXHNpZGViYXJcXHNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBRUEsU0FMYztFQU1kLGVBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQ0RGOztBRElBO0VBQ0UsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDREY7O0FESUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUNERjs7QURHQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQVUsV0FBQTtFQUNWLFVBQUE7RUFDQSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNHLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQVUsV0FBQTtFQUNWLFVBQUE7RUFDQSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDRUg7O0FEQ0E7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUFVLFdBQUE7RUFDVixVQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0dGOztBRERBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFBVSxXQUFBO0VBQ1YsVUFBQTtFQUNBLGlDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNLRjs7QURIQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQVUsV0FBQTtFQUNWLFVBQUE7RUFDQSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDT0Y7O0FETEE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUFVLFdBQUE7RUFDVixVQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ1NGIiwiZmlsZSI6InNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHNpZGViYXJfd2lkdGg6IDYlO1xuLnNpZGViYXIge1xuICBmbG9hdDogbGVmdDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC8vIGhlaWdodDogOTkuOSUgLSAkaGVhZGVyX2hlaWdodDtcbiAgd2lkdGg6ICRzaWRlYmFyX3dpZHRoO1xuICBtaW4td2lkdGg6IDc1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTc0YTc7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xuICBoZWlnaHQ6MTAwJTtcbn1cblxuLnZlcnRpY2FsLWJ1dHRvbi1wYW5lbCB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiM5OTc0YTc7XG59XG5cbi52ZXJ0aWNhbC1idXR0b24tcGFuZWwgPiBkaXYge1xuICBoZWlnaHQ6IDU1cHg7XG4gIHdpZHRoOiA1NXB4O1xuICBtYXJnaW4tdG9wOiA3LjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxY2ZlMztcbn1cbi5sazE6aG92ZXI6OmFmdGVyIHtcbiAgY29udGVudDogYXR0cihkYXRhLXRpdGxlKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwOyAgYm90dG9tOiAwcHg7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCw0MiwxNjcsMC42KTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDExcHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xufVxuXG4uZG9fd29yazpob3Zlcjo6YWZ0ZXIge1xuICAgY29udGVudDogYXR0cihkYXRhLXRpdGxlKTtcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgIGxlZnQ6IDA7ICBib3R0b206IDBweDtcbiAgIHotaW5kZXg6IDE7XG4gICBiYWNrZ3JvdW5kOiByZ2JhKDAsNDIsMTY3LDAuNik7XG4gICBjb2xvcjogI2ZmZjtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgIGZvbnQtc2l6ZTogMTFweDtcbiAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcbiAgIHdpZHRoOjMwMHB4O1xuIH1cblxuLndhdGNoX3dvcms6aG92ZXI6OmFmdGVyIHtcbiAgY29udGVudDogYXR0cihkYXRhLXRpdGxlKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwOyAgYm90dG9tOiAwcHg7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCw0MiwxNjcsMC42KTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDExcHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xuICB3aWR0aDozMDBweDtcbn1cbi5yYXRpbmc6aG92ZXI6OmFmdGVyIHtcbiAgY29udGVudDogYXR0cihkYXRhLXRpdGxlKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwOyAgYm90dG9tOiAwcHg7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCw0MiwxNjcsMC42KTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDExcHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xuICB3aWR0aDozMDBweDtcbn1cbi5mb3J1bTpob3Zlcjo6YWZ0ZXIge1xuICBjb250ZW50OiBhdHRyKGRhdGEtdGl0bGUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDA7ICBib3R0b206IDBweDtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDQyLDE2NywwLjYpO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG4gIHdpZHRoOjMwMHB4O1xufVxuLmluZm86aG92ZXI6OmFmdGVyIHtcbiAgY29udGVudDogYXR0cihkYXRhLXRpdGxlKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwOyAgYm90dG9tOiAwcHg7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCw0MiwxNjcsMC42KTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDExcHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xuICB3aWR0aDozMDBweDtcbn1cblxuIiwiLnNpZGViYXIge1xuICBmbG9hdDogbGVmdDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA2JTtcbiAgbWluLXdpZHRoOiA3NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk3NGE3O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udmVydGljYWwtYnV0dG9uLXBhbmVsIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTc0YTc7XG59XG5cbi52ZXJ0aWNhbC1idXR0b24tcGFuZWwgPiBkaXYge1xuICBoZWlnaHQ6IDU1cHg7XG4gIHdpZHRoOiA1NXB4O1xuICBtYXJnaW4tdG9wOiA3LjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxY2ZlMztcbn1cblxuLmxrMTpob3Zlcjo6YWZ0ZXIge1xuICBjb250ZW50OiBhdHRyKGRhdGEtdGl0bGUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMHB4O1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDQyLCAxNjcsIDAuNik7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcbn1cblxuLmRvX3dvcms6aG92ZXI6OmFmdGVyIHtcbiAgY29udGVudDogYXR0cihkYXRhLXRpdGxlKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDBweDtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCA0MiwgMTY3LCAwLjYpO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLndhdGNoX3dvcms6aG92ZXI6OmFmdGVyIHtcbiAgY29udGVudDogYXR0cihkYXRhLXRpdGxlKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDBweDtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCA0MiwgMTY3LCAwLjYpO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLnJhdGluZzpob3Zlcjo6YWZ0ZXIge1xuICBjb250ZW50OiBhdHRyKGRhdGEtdGl0bGUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMHB4O1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDQyLCAxNjcsIDAuNik7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4uZm9ydW06aG92ZXI6OmFmdGVyIHtcbiAgY29udGVudDogYXR0cihkYXRhLXRpdGxlKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDBweDtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCA0MiwgMTY3LCAwLjYpO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLmluZm86aG92ZXI6OmFmdGVyIHtcbiAgY29udGVudDogYXR0cihkYXRhLXRpdGxlKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDBweDtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCA0MiwgMTY3LCAwLjYpO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG4gIHdpZHRoOiAzMDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_htpp_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/htpp/auth.service */ "./src/app/shared/services/htpp/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let SidebarComponent = class SidebarComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    ngOnInit() {
    }
    isAuth() {
        if (this.auth.isAuthenticated()) {
            this.router.navigate(["/personal-area"]);
        }
        else {
            this.router.navigate(["/auth"]);
        }
    }
};
SidebarComponent.ctorParameters = () => [
    { type: _shared_services_htpp_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/sidebar/sidebar.component.scss")).default]
    })
], SidebarComponent);



/***/ }),

/***/ "./src/app/statistics/stat-graphics/stat-graphics.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/statistics/stat-graphics/stat-graphics.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#number_works {\n  height: 180px;\n  width: 48%;\n  margin-top: 70px;\n  margin-left: 20px;\n}\n\ngoogle-chart {\n  width: 580px;\n  height: 250px;\n}\n\n#analyze {\n  margin-left: 50%;\n  position: relative;\n  margin-top: -14%;\n}\n\n#translate {\n  margin-left: 20px;\n  margin-top: 70px;\n}\n\n#short_desc {\n  margin-top: -20%;\n  margin-left: 50%;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGlzdGljcy9zdGF0LWdyYXBoaWNzL0M6XFxVc2Vyc1xcU29ueWEgU2hlc3Rha292YVxcSWRlYVByb2plY3RzXFxsYW5ndWFnZS10cmFpbmluZy1mcm9udC9zcmNcXGFwcFxcc3RhdGlzdGljc1xcc3RhdC1ncmFwaGljc1xcc3RhdC1ncmFwaGljcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3RhdGlzdGljcy9zdGF0LWdyYXBoaWNzL3N0YXQtZ3JhcGhpY3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxhQUFBO0VBQ0EsVUFIa0I7RUFJbEIsZ0JBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNDRjs7QURDQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0VGOztBREFBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQ0dGOztBRERBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC9zdGF0aXN0aWNzL3N0YXQtZ3JhcGhpY3Mvc3RhdC1ncmFwaGljcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRudW1iZXJfd29ya3Nfd2lkdGg6NDglO1xyXG4jbnVtYmVyX3dvcmtze1xyXG4gIGhlaWdodDogMTgwcHg7XHJcbiAgd2lkdGg6ICRudW1iZXJfd29ya3Nfd2lkdGg7XHJcbiAgbWFyZ2luLXRvcDogNzBweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5nb29nbGUtY2hhcnR7XHJcbiAgd2lkdGg6IDU4MHB4O1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbn1cclxuI2FuYWx5emV7XHJcbiAgbWFyZ2luLWxlZnQ6NTAlO1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6LTE0JTtcclxufVxyXG4jdHJhbnNsYXRle1xyXG4gIG1hcmdpbi1sZWZ0OjIwcHg7XHJcbiAgbWFyZ2luLXRvcDo3MHB4O1xyXG59XHJcbiNzaG9ydF9kZXNje1xyXG4gIG1hcmdpbi10b3A6IC0yMCU7XHJcbiAgbWFyZ2luLWxlZnQ6NTAlO1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG59XHJcbiIsIiNudW1iZXJfd29ya3Mge1xuICBoZWlnaHQ6IDE4MHB4O1xuICB3aWR0aDogNDglO1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuZ29vZ2xlLWNoYXJ0IHtcbiAgd2lkdGg6IDU4MHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xufVxuXG4jYW5hbHl6ZSB7XG4gIG1hcmdpbi1sZWZ0OiA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogLTE0JTtcbn1cblxuI3RyYW5zbGF0ZSB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiA3MHB4O1xufVxuXG4jc2hvcnRfZGVzYyB7XG4gIG1hcmdpbi10b3A6IC0yMCU7XG4gIG1hcmdpbi1sZWZ0OiA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/statistics/stat-graphics/stat-graphics.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/statistics/stat-graphics/stat-graphics.component.ts ***!
  \*********************************************************************/
/*! exports provided: StatGraphicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatGraphicsComponent", function() { return StatGraphicsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


class Chart {
    constructor(title, type, data, columnNames, options) {
        this.title = title;
        this.type = type;
        this.data = data;
        this.columnNames = columnNames;
        this.options = options;
    }
}
let StatGraphicsComponent = class StatGraphicsComponent {
    constructor() {
        this.number_works = new Chart('Комментарий', 'LineChart', [
            ["Январь", 7],
            ["Февраль", 6],
            ["Март", 9],
            ["Апрель", 14],
            ["Май", 18],
            ["Июнь", 21],
            ["Июль", 25],
            ["Август", 26],
            ["Сентябрь", 23],
            ["Октябрь", 18],
            ["Ноябрь", 13],
            ["Декабрь", 9],
        ], ['месяц', 'количество работ'], {});
        this.analyze = new Chart('Анализ', 'LineChart', [
            ["Январь", 7],
            ["Февраль", 8],
            ["Март", 9],
            ["Апрель", 14],
            ["Май", 9],
            ["Июнь", 21],
            ["Июль", 25],
            ["Август", 13],
            ["Сентябрь", 20],
            ["Октябрь", 18],
            ["Ноябрь", 9],
            ["Декабрь", 10],
        ], ['месяц', 'количество работ'], {});
        this.translate = new Chart('Перевод', 'LineChart', [
            ["Январь", 10],
            ["Февраль", 8],
            ["Март", 9],
            ["Апрель", 16],
            ["Май", 9],
            ["Июнь", 21],
            ["Июль", 25],
            ["Август", 40],
            ["Сентябрь", 20],
            ["Октябрь", 21],
            ["Ноябрь", 9],
            ["Декабрь", 3],
        ], ['месяц', 'количество работ'], {});
        this.short_desc = new Chart('Краткий пересказ', 'LineChart', [
            ["Январь", 2],
            ["Февраль", 3],
            ["Март", 4],
            ["Апрель", 5],
            ["Май", 6],
            ["Июнь", 7],
            ["Июль", 9],
            ["Август", 10],
            ["Сентябрь", 11],
            ["Октябрь", 12],
            ["Ноябрь", 13],
            ["Декабрь", 14],
        ], ['месяц', 'количество работ'], {});
    }
    ngOnInit() {
    }
};
StatGraphicsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stat-graphics',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stat-graphics.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/statistics/stat-graphics/stat-graphics.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./stat-graphics.component.scss */ "./src/app/statistics/stat-graphics/stat-graphics.component.scss")).default]
    })
], StatGraphicsComponent);



/***/ }),

/***/ "./src/app/statistics/statistics.component.scss":
/*!******************************************************!*\
  !*** ./src/app/statistics/statistics.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpc3RpY3Mvc3RhdGlzdGljcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/statistics/statistics.component.ts":
/*!****************************************************!*\
  !*** ./src/app/statistics/statistics.component.ts ***!
  \****************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StatisticsComponent = class StatisticsComponent {
    constructor() { }
    ngOnInit() {
    }
};
StatisticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-statistics',
        template: '<app-stat-graphics></app-stat-graphics>',
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./statistics.component.scss */ "./src/app/statistics/statistics.component.scss")).default]
    })
], StatisticsComponent);



/***/ }),

/***/ "./src/app/watching-work/description-work/description-work.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/watching-work/description-work/description-work.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".description {\n  font-size: 20px;\n  font-weight: 500;\n  height: 70px;\n  margin-left: 40px;\n  margin-right: 40px;\n  text-align: center;\n  background-color: #d1cfe3;\n  color: darkslategrey;\n  padding-top: 30px;\n}\n\n#select2 {\n  margin-left: 40px;\n  margin-top: 60px;\n  font-size: 20px;\n  color: purple;\n  background-color: #d1cfe3;\n}\n\n#select3 {\n  margin-left: 100px;\n  margin-top: 60px;\n  font-size: 20px;\n  color: purple;\n  background-color: #d1cfe3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2F0Y2hpbmctd29yay9kZXNjcmlwdGlvbi13b3JrL0M6XFxVc2Vyc1xcU29ueWEgU2hlc3Rha292YVxcSWRlYVByb2plY3RzXFxsYW5ndWFnZS10cmFpbmluZy1mcm9udC9zcmNcXGFwcFxcd2F0Y2hpbmctd29ya1xcZGVzY3JpcHRpb24td29ya1xcZGVzY3JpcHRpb24td29yay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvd2F0Y2hpbmctd29yay9kZXNjcmlwdGlvbi13b3JrL2Rlc2NyaXB0aW9uLXdvcmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQ0VGOztBREFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL3dhdGNoaW5nLXdvcmsvZGVzY3JpcHRpb24td29yay9kZXNjcmlwdGlvbi13b3JrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc2NyaXB0aW9uIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFjZmUzO1xyXG4gIGNvbG9yOiBkYXJrc2xhdGVncmV5O1xyXG4gIHBhZGRpbmctdG9wOjMwcHg7XHJcbn1cclxuI3NlbGVjdDJ7XHJcbiAgbWFyZ2luLWxlZnQ6NDBweDtcclxuICBtYXJnaW4tdG9wOjYwcHg7XHJcbiAgZm9udC1zaXplOjIwcHg7XHJcbiAgY29sb3I6cHVycGxlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2QxY2ZlMztcclxufVxyXG4jc2VsZWN0M3tcclxuICBtYXJnaW4tbGVmdDoxMDBweDtcclxuICBtYXJnaW4tdG9wOjYwcHg7XHJcbiAgZm9udC1zaXplOjIwcHg7XHJcbiAgY29sb3I6cHVycGxlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2QxY2ZlMztcclxufVxyXG4iLCIuZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGhlaWdodDogNzBweDtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFjZmUzO1xuICBjb2xvcjogZGFya3NsYXRlZ3JleTtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG5cbiNzZWxlY3QyIHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHB1cnBsZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxY2ZlMztcbn1cblxuI3NlbGVjdDMge1xuICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHB1cnBsZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxY2ZlMztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/watching-work/description-work/description-work.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/watching-work/description-work/description-work.component.ts ***!
  \******************************************************************************/
/*! exports provided: DescriptionWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionWorkComponent", function() { return DescriptionWorkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DescriptionWorkComponent = class DescriptionWorkComponent {
    constructor() { }
    ngOnInit() {
    }
};
DescriptionWorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-description-work',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./description-work.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/watching-work/description-work/description-work.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./description-work.component.scss */ "./src/app/watching-work/description-work/description-work.component.scss")).default]
    })
], DescriptionWorkComponent);



/***/ }),

/***/ "./src/app/watching-work/other-works/other-works.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/watching-work/other-works/other-works.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".work {\n  font-size: 15px;\n  font-weight: 500;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 350px;\n  text-align: center;\n  background-color: #d1cfe3;\n  color: darkslategrey;\n  padding-top: 10px;\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\n#table {\n  width: 100%;\n  margin-top: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2F0Y2hpbmctd29yay9vdGhlci13b3Jrcy9DOlxcVXNlcnNcXFNvbnlhIFNoZXN0YWtvdmFcXElkZWFQcm9qZWN0c1xcbGFuZ3VhZ2UtdHJhaW5pbmctZnJvbnQvc3JjXFxhcHBcXHdhdGNoaW5nLXdvcmtcXG90aGVyLXdvcmtzXFxvdGhlci13b3Jrcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvd2F0Y2hpbmctd29yay9vdGhlci13b3Jrcy9vdGhlci13b3Jrcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvd2F0Y2hpbmctd29yay9vdGhlci13b3Jrcy9vdGhlci13b3Jrcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53b3Jre1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFjZmUzO1xyXG4gIGNvbG9yOiBkYXJrc2xhdGVncmV5O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4jdGFibGV7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDozNXB4O1xyXG59XHJcbiIsIi53b3JrIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICB3aWR0aDogMzUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxY2ZlMztcbiAgY29sb3I6IGRhcmtzbGF0ZWdyZXk7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG5cbiN0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAzNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/watching-work/other-works/other-works.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/watching-work/other-works/other-works.component.ts ***!
  \********************************************************************/
/*! exports provided: OtherWorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherWorksComponent", function() { return OtherWorksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_workContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/workContainer */ "./src/app/shared/services/workContainer.ts");



let OtherWorksComponent = class OtherWorksComponent {
    constructor(works) {
        this.works = works;
    }
    ngOnInit() {
    }
};
OtherWorksComponent.ctorParameters = () => [
    { type: _shared_services_workContainer__WEBPACK_IMPORTED_MODULE_2__["WorkContainer"] }
];
OtherWorksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-other-works',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./other-works.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/watching-work/other-works/other-works.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./other-works.component.scss */ "./src/app/watching-work/other-works/other-works.component.scss")).default]
    })
], OtherWorksComponent);



/***/ }),

/***/ "./src/app/watching-work/watching-work.component.scss":
/*!************************************************************!*\
  !*** ./src/app/watching-work/watching-work.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dhdGNoaW5nLXdvcmsvd2F0Y2hpbmctd29yay5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/watching-work/watching-work.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/watching-work/watching-work.component.ts ***!
  \**********************************************************/
/*! exports provided: WatchingWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchingWorkComponent", function() { return WatchingWorkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WatchingWorkComponent = class WatchingWorkComponent {
    constructor() { }
    ngOnInit() {
    }
};
WatchingWorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-watching-work',
        template: `<h3>Просмотр чужих работ</h3>
  <app-description-work></app-description-work>
  <app-other-works></app-other-works>`,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./watching-work.component.scss */ "./src/app/watching-work/watching-work.component.scss")).default]
    })
], WatchingWorkComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    baseUrl: "http://localhost",
    heliosPort: "12300",
    localPort: "7742",
    textId: "1"
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Sonya Shestakova\IdeaProjects\language-training-front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map