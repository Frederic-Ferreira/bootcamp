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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ui */ \"./src/modules/ui.js\");\n\n_modules_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todoEventListener();\n_modules_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].btnTodoEventListener();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/todos.js":
/*!******************************!*\
  !*** ./src/modules/todos.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ todos)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar todos = /*#__PURE__*/function () {\n  function todos() {\n    _classCallCheck(this, todos);\n  }\n\n  _createClass(todos, null, [{\n    key: \"createTodo\",\n    value: function createTodo(title, date, priority) {\n      return {\n        title: title,\n        date: date,\n        priority: priority\n      };\n    }\n  }, {\n    key: \"newTodo\",\n    value: function newTodo(parent) {\n      var html = \"\\n            <li class=\\\"new-todo\\\">\\n            <form class=\\\"todo-form\\\">\\n              <label for=\\\"title\\\">Title</label>\\n              <input\\n                type=\\\"text\\\"\\n                id=\\\"title\\\"\\n                name=\\\"title\\\"\\n                minlength=\\\"3\\\"\\n                placeholder=\\\" \\\"\\n                required\\n              />\\n              <label for=\\\"date\\\">Date</label>\\n              <input type=\\\"date\\\" id=\\\"date\\\" name=\\\"date\\\" required />\\n              <label for=\\\"priority\\\">Priority</label>\\n              <select id=\\\"priority\\\" name=\\\"priority\\\">\\n                <option value=\\\"high\\\">High</option>\\n                <option value=\\\"normal\\\" selected>Normal</option>\\n                <option value=\\\"low\\\">Low</option>\\n              </select>\\n              <button>OK</button>\\n            </form>\\n          </li>\";\n      parent.insertAdjacentHTML('beforeend', html);\n    }\n  }, {\n    key: \"getTitle\",\n    value: function getTitle(todo) {\n      return todo.title;\n    }\n  }, {\n    key: \"getFormattedDate\",\n    value: function getFormattedDate(todoDate) {\n      var year = todoDate.split('-')[0];\n      var month = todoDate.split('-')[1];\n      var day = todoDate.split('-')[2];\n      return \"\".concat(day, \"/\").concat(month, \"/\").concat(year);\n    }\n  }]);\n\n  return todos;\n}();\n\n_defineProperty(todos, \"todoList\", []);\n\n_defineProperty(todos, \"getPriority\", function (todo) {\n  return todo.priority;\n});\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/todos.js?");

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ \"./src/modules/todos.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\nvar todoForm = document.querySelector('.todo-form');\nvar newTodoLi = document.querySelector('.new-todo');\nvar title = document.getElementById('title');\nvar date = document.getElementById('date');\nvar priority = document.getElementById('priority');\nvar sideTodos = document.getElementById('general-list');\nvar sideProjects = document.getElementById('project-list');\nvar mainTodos = document.getElementById('todo-list');\nvar btnTodo = document.getElementById('create-todo');\n\nvar UI = /*#__PURE__*/function () {\n  function UI() {\n    _classCallCheck(this, UI);\n  }\n\n  _createClass(UI, null, [{\n    key: \"todoEventListener\",\n    value: function todoEventListener() {\n      todoForm.addEventListener('submit', function (e) {\n        e.preventDefault();\n        var newTodo = _todos__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createTodo(title.value, date.value, priority.value);\n        _todos__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todoList.push(newTodo);\n        UI.toggleHidden();\n        UI.renderTodoList();\n      });\n    }\n  }, {\n    key: \"btnTodoEventListener\",\n    value: function btnTodoEventListener() {\n      btnTodo.addEventListener('click', UI.addTodo);\n    }\n  }, {\n    key: \"addTodo\",\n    value: function addTodo() {\n      _todos__WEBPACK_IMPORTED_MODULE_0__[\"default\"].newTodo(mainTodos);\n    }\n  }, {\n    key: \"toggleHidden\",\n    value: function toggleHidden() {\n      newTodoLi.classList.toggle('hidden');\n    }\n  }, {\n    key: \"renderTodoList\",\n    value: function renderTodoList() {\n      if (_todos__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todoList.length !== 0) {\n        _todos__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todoList.map(function (todo) {\n          var html = \"\\n                      <li class=\\\"todo\\\">\\n                          <div class=\\\"check\\\"></div>\\n                          <h3>\".concat(_todos__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTitle(todo), \"</h3>\\n                          <p>\").concat(_todos__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFormattedDate(todo.date), \"</p>\\n                          <div class=\\\"span-todo-list\\\">\\n                          <i class=\\\"edit outline icon\\\"></i>\\n                          <i class=\\\"trash alternate outline icon\\\"></i>\\n                          </div>\\n                      </li>\");\n          mainTodos.insertAdjacentHTML('beforeend', html);\n        });\n      }\n    }\n  }]);\n\n  return UI;\n}();\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/ui.js?");

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