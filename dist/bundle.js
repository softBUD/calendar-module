/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/calendar.js":
/*!*************************!*\
  !*** ./src/calendar.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calendar: () => (/* binding */ calendar)\n/* harmony export */ });\nfunction calendar() {\n  var datePickBox = document.getElementById('date-pick-box');\n  var calendarContainer = document.getElementById('calendar-container');\n  var currentYearElement = document.getElementById('currentYear');\n  var currentMonthElement = document.getElementById('currentMonth');\n  var calendarNav = document.getElementById('calendarNav');\n  var currentDate = new Date();\n  var currentYear = currentDate.getFullYear();\n  var currentMonth = currentDate.getMonth() + 1; // 0-based index\n\n  datePickBox.addEventListener('click', function () {\n    calendarContainer.classList.toggle('visible');\n  });\n  function updateUI() {\n    currentYearElement.textContent = currentYear;\n    currentMonthElement.textContent = currentMonth;\n  }\n  updateUI();\n  document.addEventListener('click', function (event) {\n    if (event.target === datePickBox) {\n      return;\n    }\n    if (!calendarContainer.classList.contains('visible')) {\n      calendarContainer.classList.add('visible');\n    }\n  });\n  if (calendarNav) {\n    calendarNav.addEventListener('click', function (event) {\n      var target = event.target;\n      if (target.classList.contains('nav-button')) {\n        var action = target.getAttribute('data-action');\n        handleButtonClick(action);\n      }\n    });\n  }\n  function handleButtonClick(action) {\n    switch (action) {\n      case 'prevYear':\n        currentYear -= 1;\n        break;\n      case 'prevMonth':\n        if (currentMonth === 1) {\n          currentYear -= 1;\n          currentMonth = 12;\n        } else {\n          currentMonth -= 1;\n        }\n        break;\n      case 'nextMonth':\n        if (currentMonth === 12) {\n          currentYear += 1;\n          currentMonth = 1;\n        } else {\n          currentMonth += 1;\n        }\n        break;\n      case 'nextYear':\n        currentYear += 1;\n        break;\n      default:\n        break;\n    }\n    updateUI();\n  }\n}\n\n//# sourceURL=webpack://work4/./src/calendar.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar */ \"./src/calendar.js\");\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  (0,_calendar__WEBPACK_IMPORTED_MODULE_0__.calendar)();\n});\n\n//# sourceURL=webpack://work4/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;