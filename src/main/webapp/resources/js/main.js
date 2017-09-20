/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = angular_lib;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.app = undefined;

var _angular = __webpack_require__(2);

var _angular2 = _interopRequireDefault(_angular);

var _angularUiRouter = __webpack_require__(3);

var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

var _angularChosenLocalytics = __webpack_require__(4);

var _angularChosenLocalytics2 = _interopRequireDefault(_angularChosenLocalytics);

var _routes = __webpack_require__(5);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.BASE_URL = "http://localhost:3000";

var app = exports.app = _angular2.default.module('app', ['ui.router', 'localytics.directives']);

(0, _routes2.default)(app);

app.config(function ($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/home');
    $locationProvider.html5Mode(true);
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(22);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(62);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * angular-chosen-localytics - Angular Chosen directive is an AngularJS Directive that brings the Chosen jQuery in a Angular way
 * @version v1.8.0
 * @link http://github.com/leocaseiro/angular-chosen
 * @license MIT
 */
(function () {
  var chosenModule,
      indexOf = [].indexOf || function (item) {
    for (var i = 0, l = this.length; i < l; i++) {
      if (i in this && this[i] === item) return i;
    }return -1;
  };

  angular.module('localytics.directives', []);

  chosenModule = angular.module('localytics.directives');

  chosenModule.provider('chosen', function () {
    var options;
    options = {};
    return {
      setOption: function setOption(newOpts) {
        angular.extend(options, newOpts);
      },
      $get: function $get() {
        return options;
      }
    };
  });

  chosenModule.directive('chosen', ['chosen', '$timeout', function (config, $timeout) {
    var CHOSEN_OPTION_WHITELIST, NG_OPTIONS_REGEXP, isEmpty, snakeCase;
    NG_OPTIONS_REGEXP = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/;
    CHOSEN_OPTION_WHITELIST = ['persistentCreateOption', 'createOptionText', 'createOption', 'skipNoResults', 'noResultsText', 'allowSingleDeselect', 'disableSearchThreshold', 'disableSearch', 'enableSplitWordSearch', 'inheritSelectClasses', 'maxSelectedOptions', 'placeholderTextMultiple', 'placeholderTextSingle', 'searchContains', 'singleBackstrokeDelete', 'displayDisabledOptions', 'displaySelectedOptions', 'width', 'includeGroupLabelInSelected', 'maxShownResults'];
    snakeCase = function snakeCase(input) {
      return input.replace(/[A-Z]/g, function ($1) {
        return "_" + $1.toLowerCase();
      });
    };
    isEmpty = function isEmpty(value) {
      var key;
      if (angular.isArray(value)) {
        return value.length === 0;
      } else if (angular.isObject(value)) {
        for (key in value) {
          if (value.hasOwnProperty(key)) {
            return false;
          }
        }
      }
      return true;
    };
    return {
      restrict: 'A',
      require: '?ngModel',
      priority: 1,
      link: function link(scope, element, attr, ngModel) {
        var chosen, directiveOptions, empty, initOrUpdate, match, options, origRender, startLoading, stopLoading, updateMessage, valuesExpr, viewWatch;
        scope.disabledValuesHistory = scope.disabledValuesHistory ? scope.disabledValuesHistory : [];
        element = $(element);
        element.addClass('localytics-chosen');
        directiveOptions = scope.$eval(attr.chosen) || {};
        options = angular.copy(config);
        angular.extend(options, directiveOptions);
        angular.forEach(attr, function (value, key) {
          if (indexOf.call(CHOSEN_OPTION_WHITELIST, key) >= 0) {
            return attr.$observe(key, function (value) {
              var prefix;
              prefix = String(element.attr(attr.$attr[key])).slice(0, 2);
              options[snakeCase(key)] = prefix === '{{' ? value : scope.$eval(value);
              return updateMessage();
            });
          }
        });
        startLoading = function startLoading() {
          return element.addClass('loading').attr('disabled', true).trigger('chosen:updated');
        };
        stopLoading = function stopLoading() {
          element.removeClass('loading');
          if (angular.isDefined(attr.disabled)) {
            element.attr('disabled', attr.disabled);
          } else {
            element.attr('disabled', false);
          }
          return element.trigger('chosen:updated');
        };
        chosen = null;
        empty = false;
        initOrUpdate = function initOrUpdate() {
          var defaultText, dropListDom;
          if (chosen) {
            dropListDom = $(element.next('.chosen-with-drop'));
            if (dropListDom && dropListDom.length > 0) {
              return;
            }
            return element.trigger('chosen:updated');
          } else {
            scope.$evalAsync(function () {
              chosen = element.chosen(options).data('chosen');
            });
            if (angular.isObject(chosen)) {
              return defaultText = chosen.default_text;
            }
          }
        };
        updateMessage = function updateMessage() {
          if (chosen && empty) {
            element.attr('data-placeholder', chosen.results_none_found).attr('disabled', true);
          } else {
            element.removeAttr('data-placeholder');
          }
          return element.trigger('chosen:updated');
        };
        if (ngModel) {
          origRender = ngModel.$render;
          ngModel.$render = function () {
            origRender();
            return initOrUpdate();
          };
          element.on('chosen:hiding_dropdown', function () {
            return scope.$apply(function () {
              return ngModel.$setTouched();
            });
          });
          if (attr.multiple) {
            viewWatch = function viewWatch() {
              return ngModel.$viewValue;
            };
            scope.$watch(viewWatch, ngModel.$render, true);
          }
        } else {
          initOrUpdate();
        }
        attr.$observe('disabled', function () {
          return element.trigger('chosen:updated');
        });
        if (attr.ngOptions && ngModel) {
          match = attr.ngOptions.match(NG_OPTIONS_REGEXP);
          valuesExpr = match[7];
          scope.$watchCollection(valuesExpr, function (newVal, oldVal) {
            var timer;
            return timer = $timeout(function () {
              if (angular.isUndefined(newVal)) {
                return startLoading();
              } else {
                empty = isEmpty(newVal);
                stopLoading();
                return updateMessage();
              }
            });
          });
          return scope.$on('$destroy', function (event) {
            if (typeof timer !== "undefined" && timer !== null) {
              return $timeout.cancel(timer);
            }
          });
        }
      }
    };
  }]);
}).call(undefined);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (app) {
    // configure our routes
    app.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: window.BASE_URL + '/resources/views/home.html'
            /*controller: 'HomeController',
            controllerAs: 'homeCtrl'*/
        }).state('admin', {
            url: '/admin',
            templateUrl: window.BASE_URL + '/resources/views/admin.html'
            /*controller: 'HomeController',
            controllerAs: 'homeCtrl'*/
        });
    }]);
};

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map