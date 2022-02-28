/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Roboto-Medium.ttf */ "./src/fonts/Roboto-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Roboto-Regular.ttf */ "./src/fonts/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/DalekPinpointBold.ttf */ "./src/fonts/DalekPinpointBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/background.jpg */ "./src/images/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: Roboto;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "),\n      url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n@font-face {\n    font-family: Dalek;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n:root {\n    --main-background-color: rgba(255, 255, 255, 0.8);\n    --text-color: rgb(5,94,177);\n    --title-font-weight: 700;\n    --text-font-weight: 500;\n    --border-valid: 1px solid green;\n    --border-invalid: 1px solid red; \n\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    font-family: Roboto, serif;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-size: cover;\n\n}\n\nheader {\n    display: grid;\n    grid-template-columns: 400px 1fr;\n    width: 100vw;\n    height: 60px;\n    background-color: var(--main-background-color);\n    border-bottom: 2px solid black;\n    font-family: Dalek, serif;\n    \n}\n\n.page-title {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.tabs-container {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    padding: 0 50px 0 0;\n    gap: 50px;\n}\n\n.tab:hover {\n    cursor: pointer;\n    color: rgb(0, 119, 255);\n}\n\n.content-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 50px 0 0 0;\n}\n\n.content {\n    width: 70vw;\n    height: auto;\n    background-color: var(--main-background-color);\n    border-radius: 50px;\n    padding: 50px;\n    margin: 0 0 50px 0;\n    font-family: Dalek;\n}\n\n.text {\n    color: var(--text-color);\n}\n\n.huge-title {\n    font-size: 4rem;\n    font-weight: var(--title-font-weight);\n}\n\n.large-title {\n    font-size: 2.5em;\n    font-weight: var(--title-font-weight);\n}\n\n.medium-title {\n    font-size: 1.75rem;\n    font-weight: var(--title-font-weight);\n}\n\n.content-title {\n    display: flex;\n    justify-content: center;\n    text-align: center;\n}\n\n.description-text {\n    font-weight: var(--title-font-weight);\n    padding-top: 20px;\n    font-family: Roboto;\n    text-align: center;\n}\n\n.about {\n    display: flex;\n    flex-direction: column;\n    gap: 50px;\n    align-items: center;\n    \n}\n\n.work {\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n}\n\n.working-days, .working-hours {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.main-menu {\n    display: grid;\n    margin-top: 20px;\n    grid-template-columns: 1fr 1fr;\n    gap: 20px;\n}\n\n.menu-item {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    gap: 10px;\n}\n\n.menu-image {\n    height: 300px;\n    width: 300px;\n    border-radius: 20px;\n}\n\n.menu-name {\n    font-family: Dalek;\n    font-weight: var(--title-font-weight);\n}\n\n.menu-description {\n    width: 300px;\n    font-weight: var(--text-font-weight);\n}\n\n/* form */\n\nform {\n    width: 100%;\n    margin: auto;\n    margin-top: 20px;\n}\n\n.form-area {\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n    margin-top: 10px;\n    margin-bottom: 0px;\n    padding-bottom: 30px;\n}\n\nfieldset {\n    border-style: none;\n    width: 70%;\n    margin: auto ;\n    padding: 0px;\n}\n\n.form-row{\n    margin-top: 15px;\n    text-align: center;\n}\n\n.form-row input{\n    width: 70%;\n    height: 1.5rem;\n    border-radius: 5px;\n    border: 1px solid black;\n}\n\n.form-row input:valid {\n    border: var(--border-valid);\n}\n\n.form-row input:invalid {\n    border: var(--border-invalid);\n}\n\n.form-row select{\n    width: 15%;\n    height: 1.4rem;\n    background-color: white;\n    border-radius: 5px;\n    border: 1px solid green;\n    text-align: center;\n}\n\n.form-row label{\n    display: block;\n    width: 8rem;\n    padding-bottom: 3px;\n    padding-left: 14%;\n    font-size: 1rem;\n    font-weight: var(--text-font-weight);\n    font-family: Roboto;\n    text-align: left;\n}\n\n.form-row input[type='submit']{\n    margin-top: 10px;\n    width: 7rem;\n    height: 2rem;\n    font-weight: 800;\n}\n\n.form-row input[type='submit']:hover{\n    background-color: rgb(216, 216, 216);\n}\n\n.form-row input[type='submit']:active{\n    box-shadow: 0 0 2px 2px rgb(173, 173, 173);\n}\n\n.form-row input[type='date'] {\n    padding: 1px 2px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB;6CACmC;AACvC;;AAEA;IACI,kBAAkB;IAClB,4CAAyC;AAC7C;;AAEA;IACI,iDAAiD;IACjD,2BAA2B;IAC3B,wBAAwB;IACxB,uBAAuB;IACvB,+BAA+B;IAC/B,+BAA+B;;AAEnC;;AAEA;IACI,SAAS;IACT,UAAU;IACV,0BAA0B;IAC1B,mDAAwC;IACxC,4BAA4B;IAC5B,4BAA4B;IAC5B,sBAAsB;;AAE1B;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,YAAY;IACZ,YAAY;IACZ,8CAA8C;IAC9C,8BAA8B;IAC9B,yBAAyB;;AAE7B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,mBAAmB;IACnB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,8CAA8C;IAC9C,mBAAmB;IACnB,aAAa;IACb,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,eAAe;IACf,qCAAqC;AACzC;;AAEA;IACI,gBAAgB;IAChB,qCAAqC;AACzC;;AAEA;IACI,kBAAkB;IAClB,qCAAqC;AACzC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,qCAAqC;IACrC,iBAAiB;IACjB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,mBAAmB;;AAEvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,8BAA8B;IAC9B,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,qCAAqC;AACzC;;AAEA;IACI,YAAY;IACZ,oCAAoC;AACxC;;AAEA,SAAS;;AAET;IACI,WAAW;IACX,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,WAAW;IACX,gBAAgB;IAChB,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,cAAc;IACd,kBAAkB;IAClB,uBAAuB;AAC3B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,UAAU;IACV,cAAc;IACd,uBAAuB;IACvB,kBAAkB;IAClB,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,mBAAmB;IACnB,iBAAiB;IACjB,eAAe;IACf,oCAAoC;IACpC,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,gBAAgB;AACpB","sourcesContent":["@font-face {\n    font-family: Roboto;\n    src: url('./fonts/Roboto-Medium.ttf'),\n      url('./fonts/Roboto-Regular.ttf');\n}\n\n@font-face {\n    font-family: Dalek;\n    src: url('./fonts/DalekPinpointBold.ttf');\n}\n\n:root {\n    --main-background-color: rgba(255, 255, 255, 0.8);\n    --text-color: rgb(5,94,177);\n    --title-font-weight: 700;\n    --text-font-weight: 500;\n    --border-valid: 1px solid green;\n    --border-invalid: 1px solid red; \n\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    font-family: Roboto, serif;\n    background: url(./images/background.jpg);\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-size: cover;\n\n}\n\nheader {\n    display: grid;\n    grid-template-columns: 400px 1fr;\n    width: 100vw;\n    height: 60px;\n    background-color: var(--main-background-color);\n    border-bottom: 2px solid black;\n    font-family: Dalek, serif;\n    \n}\n\n.page-title {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.tabs-container {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    padding: 0 50px 0 0;\n    gap: 50px;\n}\n\n.tab:hover {\n    cursor: pointer;\n    color: rgb(0, 119, 255);\n}\n\n.content-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 50px 0 0 0;\n}\n\n.content {\n    width: 70vw;\n    height: auto;\n    background-color: var(--main-background-color);\n    border-radius: 50px;\n    padding: 50px;\n    margin: 0 0 50px 0;\n    font-family: Dalek;\n}\n\n.text {\n    color: var(--text-color);\n}\n\n.huge-title {\n    font-size: 4rem;\n    font-weight: var(--title-font-weight);\n}\n\n.large-title {\n    font-size: 2.5em;\n    font-weight: var(--title-font-weight);\n}\n\n.medium-title {\n    font-size: 1.75rem;\n    font-weight: var(--title-font-weight);\n}\n\n.content-title {\n    display: flex;\n    justify-content: center;\n    text-align: center;\n}\n\n.description-text {\n    font-weight: var(--title-font-weight);\n    padding-top: 20px;\n    font-family: Roboto;\n    text-align: center;\n}\n\n.about {\n    display: flex;\n    flex-direction: column;\n    gap: 50px;\n    align-items: center;\n    \n}\n\n.work {\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n}\n\n.working-days, .working-hours {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.main-menu {\n    display: grid;\n    margin-top: 20px;\n    grid-template-columns: 1fr 1fr;\n    gap: 20px;\n}\n\n.menu-item {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    gap: 10px;\n}\n\n.menu-image {\n    height: 300px;\n    width: 300px;\n    border-radius: 20px;\n}\n\n.menu-name {\n    font-family: Dalek;\n    font-weight: var(--title-font-weight);\n}\n\n.menu-description {\n    width: 300px;\n    font-weight: var(--text-font-weight);\n}\n\n/* form */\n\nform {\n    width: 100%;\n    margin: auto;\n    margin-top: 20px;\n}\n\n.form-area {\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n    margin-top: 10px;\n    margin-bottom: 0px;\n    padding-bottom: 30px;\n}\n\nfieldset {\n    border-style: none;\n    width: 70%;\n    margin: auto ;\n    padding: 0px;\n}\n\n.form-row{\n    margin-top: 15px;\n    text-align: center;\n}\n\n.form-row input{\n    width: 70%;\n    height: 1.5rem;\n    border-radius: 5px;\n    border: 1px solid black;\n}\n\n.form-row input:valid {\n    border: var(--border-valid);\n}\n\n.form-row input:invalid {\n    border: var(--border-invalid);\n}\n\n.form-row select{\n    width: 15%;\n    height: 1.4rem;\n    background-color: white;\n    border-radius: 5px;\n    border: 1px solid green;\n    text-align: center;\n}\n\n.form-row label{\n    display: block;\n    width: 8rem;\n    padding-bottom: 3px;\n    padding-left: 14%;\n    font-size: 1rem;\n    font-weight: var(--text-font-weight);\n    font-family: Roboto;\n    text-align: left;\n}\n\n.form-row input[type='submit']{\n    margin-top: 10px;\n    width: 7rem;\n    height: 2rem;\n    font-weight: 800;\n}\n\n.form-row input[type='submit']:hover{\n    background-color: rgb(216, 216, 216);\n}\n\n.form-row input[type='submit']:active{\n    box-shadow: 0 0 2px 2px rgb(173, 173, 173);\n}\n\n.form-row input[type='date'] {\n    padding: 1px 2px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactPage": () => (/* binding */ contactPage)
/* harmony export */ });
const contactPage = () => {

    const contentContainer = document.querySelector('.content-container');
    contentContainer.innerHTML = '';

    const content = document.createElement('div');
    content.setAttribute('class', 'content');
    contentContainer.appendChild(content);

    const contentTitle = document.createElement('div');
    contentTitle.setAttribute('class', 'content-title medium-title text');
    contentTitle.innerText = 'CONTACT';
    content.appendChild(contentTitle);

    const contentText = document.createElement('div');
    contentText.setAttribute('class', 'content-text text');
    contentText.innerHTML = `
    <div class="description-text text">
        Please fill out the form below to reserve a table. You will receive a response and confirmation on your e-mail.
    </div>

    <div class="form-area">
                <fieldset>
                    <form action="#" method="post">
                        <div class="form-row">
                            <label for="first_name">First Name</label>
                            <input type="text" id="name" name="first_name" required>
                        </div>
                        <div class="form-row">
                            <label for="last_name">Last Name</label>
                            <input type="text" id="name" name="last_name" required>
                        </div>
                        <div class="form-row">
                            <label for="email">E-Mail</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        <div class="form-row">
                            <label for="number">Phone Number</label>
                            <input type="tel" id="number" name="number" placeholder="i.e. 00385981234567" required pattern="^[0-9]+$">
                        </div>
                        <div class="form-row">
                            <label for="date">Date:</label>
                            <input type="date" id="date" name="date" required>
                        </div>
                        <div class="form-row">
                            <label for="time">Time:</label>
                            <select id="time" name="time">
                                <option value="1200">12:00</option>
                                <option value="1300">13:00</option>
                                <option value="1400">14:00</option>
                                <option value="1500">15:00</option>
                                <option value="1600">16:00</option>
                                <option value="1700">17:00</option>
                                <option value="1800">18:00</option>
                                <option value="1900">19:00</option>
                                <option value="2000">20:00</option>
                                <option value="2100">21:00</option>
                                <option value="2200">22:00</option>
                                <option value="2300">23:00</option>
                            </select>
                        </div>
                        <div class="form-row">
                            <input type="submit" value="Submit">
                        </div>
                    </form>                    
                </fieldset>
            </div>
            <div class="description-text text">
                Address:
                <div class="description-text text">
                    Cetinska 12<br>10000 Zagreb<br>Croatia
                </div>
            </div>`;
    content.appendChild(contentText);
};



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homePage": () => (/* binding */ homePage)
/* harmony export */ });
const homePage = () => {
    const mainContainer = document.querySelector('.container');
    const contentContainerDelete = document.querySelector('.content-container');
    contentContainerDelete.remove();

    // Same as initial.js from below

    const contentContainer = document.createElement('div');
    contentContainer.setAttribute('class', 'content-container');
    mainContainer.appendChild(contentContainer);

    const content = document.createElement('div');
    content.setAttribute('class', 'content');
    contentContainer.appendChild(content);

    const addContent = document.createElement('div');
    addContent.setAttribute('class', 'content about text');
    contentContainer.appendChild(addContent);

    const addContentMain = document.createElement('div');
    addContentMain.setAttribute('class', 'text description-text');
    addContentMain.innerText = 'Visit our family restaurant in the center of Zagreb. Established in 1978.';
    addContent.appendChild(addContentMain);

    const addContentLocation= document.createElement('div');
    addContentLocation.setAttribute('class', 'text description-text');
    addContentLocation.innerHTML = `
    <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=zagreb&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.whatismyip-address.com/divi-discount/"></a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style><a href="https://www.embedgooglemap.net">google maps code for wordpress</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div></div>`
    addContent.appendChild(addContentLocation);

    const addContentHours= document.createElement('div');
    addContentHours.setAttribute('class', 'work text description-text');
    addContentHours.innerHTML = `
    <div class="working-days text">
      <div class="monday">Monday to Friday</div>
      <div class="saturday">Saturday</div>
      <div class="sunday">Sunday</div>
    </div>
    <div class="working-hours text">
      <div class="monday">12:00 to 23:00</div>
      <div class="saturday">17:00 to 01:00</div>
      <div class="sunday">CLOSED</div>
    </div>`
    addContent.appendChild(addContentHours);

    const contentTitle = document.createElement('div');
    contentTitle.setAttribute('class', 'content-title huge-title text');
    contentTitle.innerText = 'Original Greek experience in Zagreb';
    content.appendChild(contentTitle);
};



/***/ }),

/***/ "./src/initial.js":
/*!************************!*\
  !*** ./src/initial.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initial": () => (/* binding */ initial)
/* harmony export */ });
const initial = () => {
    const bodyTag = document.querySelector('body');
    const mainContainer = document.createElement('div');
    mainContainer.setAttribute('class', 'container');
    bodyTag.appendChild(mainContainer);

    const header = document.createElement('header');
    mainContainer.appendChild(header);

    const title = document.createElement('div');
    title.setAttribute('class', 'page-title large-title text');
    title.innerText = 'NES\'VISE';
    header.appendChild(title);

    const tabs = document.createElement('div');
    tabs.setAttribute('class', 'tabs-container');
    header.appendChild(tabs);

    const homeTab = document.createElement('div');
    homeTab.setAttribute('class', 'tab home text medium-title');
    homeTab.setAttribute('id', 'home');
    homeTab.innerText = 'HOME';
    tabs.appendChild(homeTab);

    const menuTab = document.createElement('div');
    menuTab.setAttribute('class', 'tab menu text medium-title');
    menuTab.setAttribute('id', 'menu');
    menuTab.innerText = 'MENU';
    tabs.appendChild(menuTab);

    const contactTab = document.createElement('div');
    contactTab.setAttribute('class', 'tab contact text medium-title');
    contactTab.setAttribute('id', 'contact');
    contactTab.innerText = 'CONTACT';
    tabs.appendChild(contactTab);

    // Same as home.js from below

    const contentContainer = document.createElement('div');
    contentContainer.setAttribute('class', 'content-container');
    mainContainer.appendChild(contentContainer);

    const content = document.createElement('div');
    content.setAttribute('class', 'content');
    contentContainer.appendChild(content);

    const addContent = document.createElement('div');
    addContent.setAttribute('class', 'content about text');
    contentContainer.appendChild(addContent);

    const addContentMain = document.createElement('div');
    addContentMain.setAttribute('class', 'text description-text');
    addContentMain.innerText = 'Visit our family restaurant in the center of Zagreb. Established in 1978.';
    addContent.appendChild(addContentMain);

    const addContentLocation= document.createElement('div');
    addContentLocation.setAttribute('class', 'text description-text');
    addContentLocation.innerHTML = `
    <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=zagreb&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.whatismyip-address.com/divi-discount/"></a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style><a href="https://www.embedgooglemap.net">google maps code for wordpress</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div></div>`
    addContent.appendChild(addContentLocation);

    const addContentHours= document.createElement('div');
    addContentHours.setAttribute('class', 'work text description-text');
    addContentHours.innerHTML = `
    <div class="working-days text">
      <div class="monday">Monday to Friday</div>
      <div class="saturday">Saturday</div>
      <div class="sunday">Sunday</div>
    </div>
    <div class="working-hours text">
      <div class="monday">12:00 to 23:00</div>
      <div class="saturday">17:00 to 01:00</div>
      <div class="sunday">CLOSED</div>
    </div>`
    addContent.appendChild(addContentHours);

    const contentTitle = document.createElement('div');
    contentTitle.setAttribute('class', 'content-title huge-title text');
    contentTitle.innerText = 'Original Greek experience in Zagreb';
    content.appendChild(contentTitle);
};




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuPage": () => (/* binding */ menuPage)
/* harmony export */ });
const menuItem = (name, image, description, price) => {
    return {name, image, description, price};
}

const item1 = menuItem('Souvlaki', '1', 'Typically marinated in oil, salt, pepper, oregano and lemon. Also known as kalamaki.', '45');
const item2 = menuItem('Moussaka', '2', 'Casserole made of (typically fried) aubergine, potato, and spiced minced meat.', '35');
const item3 = menuItem('Gyros', '3', 'Roasted and sliced meat (usually pork or chicken, rarely beef or lamb) on a turning spit, typically served with sauces like tzatziki and garnishes (tomato, onions) on pita bread.', '40');
const item4 = menuItem('Kleftiko', '4', 'Literally meaning of the klephts, also called "Exochikó", this Cypriot dish is lamb slow-baked on the bone, first marinated in garlic and lemon juice, originally cooked in a pit oven.', '55');

const menuArray = [item1, item2, item3, item4];

const renderMenu = () => {
    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('class', 'main-menu text');
    
    menuArray.forEach((element) =>  {
        const newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'text menu-item');
        newDiv.innerHTML = `
        <img src="./image${element.image}.jpg" alt="menu-item-${element.image}" class="menu-image">
        <div class="menu-name">${element.name}</div>
        <div class="menu-description">${element.description}</div>
        <div class="menu-price">Price: ${element.price} HRK</div>`
        menuContainer.appendChild(newDiv);
    })

    const contentContainer = document.querySelector('.description-text');
    contentContainer.appendChild(menuContainer);
}

const menuPage = () => {

    const contentContainer = document.querySelector('.content-container');
    contentContainer.innerHTML = '';

    const content = document.createElement('div');
    content.setAttribute('class', 'content');
    contentContainer.appendChild(content);

    const contentTitle = document.createElement('div');
    contentTitle.setAttribute('class', 'content-title medium-title text');
    contentTitle.innerText = 'MENU';
    content.appendChild(contentTitle);

    const contentText = document.createElement('div');
    contentText.setAttribute('class', 'description-text text');
    contentText.innerText = 'Our menu has been specially designed by our head chef to offer the best and highest quality Greek meals.';
    content.appendChild(contentText);

    renderMenu()
};



/***/ }),

/***/ "./src/fonts/DalekPinpointBold.ttf":
/*!*****************************************!*\
  !*** ./src/fonts/DalekPinpointBold.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb54d752865fdfa2b1bf.ttf";

/***/ }),

/***/ "./src/fonts/Roboto-Medium.ttf":
/*!*************************************!*\
  !*** ./src/fonts/Roboto-Medium.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7429a63c09f79a1760b0.ttf";

/***/ }),

/***/ "./src/fonts/Roboto-Regular.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Roboto-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a8d6ac03c7b96b7acb62.ttf";

/***/ }),

/***/ "./src/images/background.jpg":
/*!***********************************!*\
  !*** ./src/images/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "27a72eb75fd6c357ce66.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _initial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initial */ "./src/initial.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./src/contact.js");






const renderPage = (() => {
    (0,_initial__WEBPACK_IMPORTED_MODULE_1__.initial)();
})();

const switcher = (() => {
    const tabs = document.querySelectorAll('.tab');
    
    let i;
    for ( i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', detectTab);
    }

    function detectTab(event) {
        const tabs = ['home', 'menu', 'contact'];
        const tabClass = event.target.getAttribute('id');

        if (tabClass === tabs[0]) {
            (0,_home__WEBPACK_IMPORTED_MODULE_2__.homePage) ();
        } else if (tabClass === tabs[1]) {
            (0,_menu__WEBPACK_IMPORTED_MODULE_3__.menuPage) ();
        } else if (tabClass === tabs[2]) {
            (0,_contact__WEBPACK_IMPORTED_MODULE_4__.contactPage) ();
        }
    }
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCcUI7QUFDZTtBQUNGO0FBQ0E7QUFDTTs7QUFFeEM7QUFDQSxJQUFJLGlEQUFPO0FBQ1gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLCtDQUFRO0FBQ3BCLFVBQVU7QUFDVixZQUFZLCtDQUFRO0FBQ3BCLFVBQVU7QUFDVixZQUFZLHFEQUFXO0FBQ3ZCO0FBQ0E7QUFDQSxDQUFDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdGlhbC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvUm9ib3RvLU1lZGl1bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vZm9udHMvRGFsZWtQaW5wb2ludEJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpLFxcbiAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogRGFsZWs7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLW1haW4tYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgICAtLXRleHQtY29sb3I6IHJnYig1LDk0LDE3Nyk7XFxuICAgIC0tdGl0bGUtZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgLS10ZXh0LWZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIC0tYm9yZGVyLXZhbGlkOiAxcHggc29saWQgZ3JlZW47XFxuICAgIC0tYm9yZGVyLWludmFsaWQ6IDFweCBzb2xpZCByZWQ7IFxcblxcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBzZXJpZjtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MDBweCAxZnI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICAgIGZvbnQtZmFtaWx5OiBEYWxlaywgc2VyaWY7XFxuICAgIFxcbn1cXG5cXG4ucGFnZS10aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGFicy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDUwcHggMCAwO1xcbiAgICBnYXA6IDUwcHg7XFxufVxcblxcbi50YWI6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiByZ2IoMCwgMTE5LCAyNTUpO1xcbn1cXG5cXG4uY29udGVudC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiA1MHB4IDAgMCAwO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIHdpZHRoOiA3MHZ3O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIHBhZGRpbmc6IDUwcHg7XFxuICAgIG1hcmdpbjogMCAwIDUwcHggMDtcXG4gICAgZm9udC1mYW1pbHk6IERhbGVrO1xcbn1cXG5cXG4udGV4dCB7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLmh1Z2UtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS10aXRsZS1mb250LXdlaWdodCk7XFxufVxcblxcbi5sYXJnZS10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMi41ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS10aXRsZS1mb250LXdlaWdodCk7XFxufVxcblxcbi5tZWRpdW0tdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS10aXRsZS1mb250LXdlaWdodCk7XFxufVxcblxcbi5jb250ZW50LXRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLXRleHQge1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tdGl0bGUtZm9udC13ZWlnaHQpO1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYWJvdXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDUwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG4ud29yayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLndvcmtpbmctZGF5cywgLndvcmtpbmctaG91cnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFpbi1tZW51IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLm1lbnUtaW1hZ2Uge1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi5tZW51LW5hbWUge1xcbiAgICBmb250LWZhbWlseTogRGFsZWs7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS10aXRsZS1mb250LXdlaWdodCk7XFxufVxcblxcbi5tZW51LWRlc2NyaXB0aW9uIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tdGV4dC1mb250LXdlaWdodCk7XFxufVxcblxcbi8qIGZvcm0gKi9cXG5cXG5mb3JtIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLmZvcm0tYXJlYSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxufVxcblxcbmZpZWxkc2V0IHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBtYXJnaW46IGF1dG8gO1xcbiAgICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbi5mb3JtLXJvd3tcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZm9ybS1yb3cgaW5wdXR7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uZm9ybS1yb3cgaW5wdXQ6dmFsaWQge1xcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlci12YWxpZCk7XFxufVxcblxcbi5mb3JtLXJvdyBpbnB1dDppbnZhbGlkIHtcXG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXItaW52YWxpZCk7XFxufVxcblxcbi5mb3JtLXJvdyBzZWxlY3R7XFxuICAgIHdpZHRoOiAxNSU7XFxuICAgIGhlaWdodDogMS40cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZm9ybS1yb3cgbGFiZWx7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogOHJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNCU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLXRleHQtZm9udC13ZWlnaHQpO1xcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uZm9ybS1yb3cgaW5wdXRbdHlwZT0nc3VibWl0J117XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIHdpZHRoOiA3cmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcblxcbi5mb3JtLXJvdyBpbnB1dFt0eXBlPSdzdWJtaXQnXTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNiwgMjE2LCAyMTYpO1xcbn1cXG5cXG4uZm9ybS1yb3cgaW5wdXRbdHlwZT0nc3VibWl0J106YWN0aXZle1xcbiAgICBib3gtc2hhZG93OiAwIDAgMnB4IDJweCByZ2IoMTczLCAxNzMsIDE3Myk7XFxufVxcblxcbi5mb3JtLXJvdyBpbnB1dFt0eXBlPSdkYXRlJ10ge1xcbiAgICBwYWRkaW5nOiAxcHggMnB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25COzZDQUNtQztBQUN2Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiw0Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxpREFBaUQ7SUFDakQsMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsK0JBQStCO0lBQy9CLCtCQUErQjs7QUFFbkM7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLDBCQUEwQjtJQUMxQixtREFBd0M7SUFDeEMsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixzQkFBc0I7O0FBRTFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osWUFBWTtJQUNaLDhDQUE4QztJQUM5Qyw4QkFBOEI7SUFDOUIseUJBQXlCOztBQUU3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiw4Q0FBOEM7SUFDOUMsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsOEJBQThCO0lBQzlCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0NBQW9DO0FBQ3hDOztBQUVBLFNBQVM7O0FBRVQ7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL1JvYm90by1NZWRpdW0udHRmJyksXFxuICAgICAgdXJsKCcuL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZicpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IERhbGVrO1xcbiAgICBzcmM6IHVybCgnLi9mb250cy9EYWxla1BpbnBvaW50Qm9sZC50dGYnKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLW1haW4tYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgICAtLXRleHQtY29sb3I6IHJnYig1LDk0LDE3Nyk7XFxuICAgIC0tdGl0bGUtZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgLS10ZXh0LWZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIC0tYm9yZGVyLXZhbGlkOiAxcHggc29saWQgZ3JlZW47XFxuICAgIC0tYm9yZGVyLWludmFsaWQ6IDFweCBzb2xpZCByZWQ7IFxcblxcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBzZXJpZjtcXG4gICAgYmFja2dyb3VuZDogdXJsKC4vaW1hZ2VzL2JhY2tncm91bmQuanBnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MDBweCAxZnI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICAgIGZvbnQtZmFtaWx5OiBEYWxlaywgc2VyaWY7XFxuICAgIFxcbn1cXG5cXG4ucGFnZS10aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGFicy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDUwcHggMCAwO1xcbiAgICBnYXA6IDUwcHg7XFxufVxcblxcbi50YWI6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiByZ2IoMCwgMTE5LCAyNTUpO1xcbn1cXG5cXG4uY29udGVudC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiA1MHB4IDAgMCAwO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIHdpZHRoOiA3MHZ3O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIHBhZGRpbmc6IDUwcHg7XFxuICAgIG1hcmdpbjogMCAwIDUwcHggMDtcXG4gICAgZm9udC1mYW1pbHk6IERhbGVrO1xcbn1cXG5cXG4udGV4dCB7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLmh1Z2UtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS10aXRsZS1mb250LXdlaWdodCk7XFxufVxcblxcbi5sYXJnZS10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMi41ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS10aXRsZS1mb250LXdlaWdodCk7XFxufVxcblxcbi5tZWRpdW0tdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS10aXRsZS1mb250LXdlaWdodCk7XFxufVxcblxcbi5jb250ZW50LXRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLXRleHQge1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tdGl0bGUtZm9udC13ZWlnaHQpO1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYWJvdXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDUwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG4ud29yayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLndvcmtpbmctZGF5cywgLndvcmtpbmctaG91cnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFpbi1tZW51IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLm1lbnUtaW1hZ2Uge1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi5tZW51LW5hbWUge1xcbiAgICBmb250LWZhbWlseTogRGFsZWs7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS10aXRsZS1mb250LXdlaWdodCk7XFxufVxcblxcbi5tZW51LWRlc2NyaXB0aW9uIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tdGV4dC1mb250LXdlaWdodCk7XFxufVxcblxcbi8qIGZvcm0gKi9cXG5cXG5mb3JtIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLmZvcm0tYXJlYSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxufVxcblxcbmZpZWxkc2V0IHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBtYXJnaW46IGF1dG8gO1xcbiAgICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbi5mb3JtLXJvd3tcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZm9ybS1yb3cgaW5wdXR7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uZm9ybS1yb3cgaW5wdXQ6dmFsaWQge1xcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlci12YWxpZCk7XFxufVxcblxcbi5mb3JtLXJvdyBpbnB1dDppbnZhbGlkIHtcXG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXItaW52YWxpZCk7XFxufVxcblxcbi5mb3JtLXJvdyBzZWxlY3R7XFxuICAgIHdpZHRoOiAxNSU7XFxuICAgIGhlaWdodDogMS40cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZm9ybS1yb3cgbGFiZWx7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogOHJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNCU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLXRleHQtZm9udC13ZWlnaHQpO1xcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uZm9ybS1yb3cgaW5wdXRbdHlwZT0nc3VibWl0J117XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIHdpZHRoOiA3cmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcblxcbi5mb3JtLXJvdyBpbnB1dFt0eXBlPSdzdWJtaXQnXTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNiwgMjE2LCAyMTYpO1xcbn1cXG5cXG4uZm9ybS1yb3cgaW5wdXRbdHlwZT0nc3VibWl0J106YWN0aXZle1xcbiAgICBib3gtc2hhZG93OiAwIDAgMnB4IDJweCByZ2IoMTczLCAxNzMsIDE3Myk7XFxufVxcblxcbi5mb3JtLXJvdyBpbnB1dFt0eXBlPSdkYXRlJ10ge1xcbiAgICBwYWRkaW5nOiAxcHggMnB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY29udGFjdFBhZ2UgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtY29udGFpbmVyJyk7XG4gICAgY29udGVudENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29udGVudCcpO1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgICBjb25zdCBjb250ZW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50VGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb250ZW50LXRpdGxlIG1lZGl1bS10aXRsZSB0ZXh0Jyk7XG4gICAgY29udGVudFRpdGxlLmlubmVyVGV4dCA9ICdDT05UQUNUJztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnRUaXRsZSk7XG5cbiAgICBjb25zdCBjb250ZW50VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnRUZXh0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29udGVudC10ZXh0IHRleHQnKTtcbiAgICBjb250ZW50VGV4dC5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uLXRleHQgdGV4dFwiPlxuICAgICAgICBQbGVhc2UgZmlsbCBvdXQgdGhlIGZvcm0gYmVsb3cgdG8gcmVzZXJ2ZSBhIHRhYmxlLiBZb3Ugd2lsbCByZWNlaXZlIGEgcmVzcG9uc2UgYW5kIGNvbmZpcm1hdGlvbiBvbiB5b3VyIGUtbWFpbC5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWFyZWFcIj5cbiAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIiBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZmlyc3RfbmFtZVwiPkZpcnN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIG5hbWU9XCJmaXJzdF9uYW1lXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJsYXN0X25hbWVcIj5MYXN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIG5hbWU9XCJsYXN0X25hbWVcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RS1NYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibnVtYmVyXCI+UGhvbmUgTnVtYmVyPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRlbFwiIGlkPVwibnVtYmVyXCIgbmFtZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiaS5lLiAwMDM4NTk4MTIzNDU2N1wiIHJlcXVpcmVkIHBhdHRlcm49XCJeWzAtOV0rJFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGF0ZVwiPkRhdGU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImRhdGVcIiBuYW1lPVwiZGF0ZVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGltZVwiPlRpbWU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwidGltZVwiIG5hbWU9XCJ0aW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMjAwXCI+MTI6MDA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEzMDBcIj4xMzowMDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTQwMFwiPjE0OjAwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxNTAwXCI+MTU6MDA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE2MDBcIj4xNjowMDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTcwMFwiPjE3OjAwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxODAwXCI+MTg6MDA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE5MDBcIj4xOTowMDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjAwMFwiPjIwOjAwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMTAwXCI+MjE6MDA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIyMDBcIj4yMjowMDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjMwMFwiPjIzOjAwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb24tdGV4dCB0ZXh0XCI+XG4gICAgICAgICAgICAgICAgQWRkcmVzczpcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb24tdGV4dCB0ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgIENldGluc2thIDEyPGJyPjEwMDAwIFphZ3JlYjxicj5Dcm9hdGlhXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5gO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudFRleHQpO1xufTtcblxuZXhwb3J0IHsgY29udGFjdFBhZ2UgfTsiLCJjb25zdCBob21lUGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXJEZWxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1jb250YWluZXInKTtcbiAgICBjb250ZW50Q29udGFpbmVyRGVsZXRlLnJlbW92ZSgpO1xuXG4gICAgLy8gU2FtZSBhcyBpbml0aWFsLmpzIGZyb20gYmVsb3dcblxuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29udGVudC1jb250YWluZXInKTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpO1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb250ZW50Jyk7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICAgIGNvbnN0IGFkZENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRDb250ZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29udGVudCBhYm91dCB0ZXh0Jyk7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRDb250ZW50KTtcblxuICAgIGNvbnN0IGFkZENvbnRlbnRNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkQ29udGVudE1haW4uc2V0QXR0cmlidXRlKCdjbGFzcycsICd0ZXh0IGRlc2NyaXB0aW9uLXRleHQnKTtcbiAgICBhZGRDb250ZW50TWFpbi5pbm5lclRleHQgPSAnVmlzaXQgb3VyIGZhbWlseSByZXN0YXVyYW50IGluIHRoZSBjZW50ZXIgb2YgWmFncmViLiBFc3RhYmxpc2hlZCBpbiAxOTc4Lic7XG4gICAgYWRkQ29udGVudC5hcHBlbmRDaGlsZChhZGRDb250ZW50TWFpbik7XG5cbiAgICBjb25zdCBhZGRDb250ZW50TG9jYXRpb249IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZENvbnRlbnRMb2NhdGlvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RleHQgZGVzY3JpcHRpb24tdGV4dCcpO1xuICAgIGFkZENvbnRlbnRMb2NhdGlvbi5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cIm1hcG91dGVyXCI+PGRpdiBjbGFzcz1cImdtYXBfY2FudmFzXCI+PGlmcmFtZSB3aWR0aD1cIjYwMFwiIGhlaWdodD1cIjUwMFwiIGlkPVwiZ21hcF9jYW52YXNcIiBzcmM9XCJodHRwczovL21hcHMuZ29vZ2xlLmNvbS9tYXBzP3E9emFncmViJnQ9Jno9MTMmaWU9VVRGOCZpd2xvYz0mb3V0cHV0PWVtYmVkXCIgZnJhbWVib3JkZXI9XCIwXCIgc2Nyb2xsaW5nPVwibm9cIiBtYXJnaW5oZWlnaHQ9XCIwXCIgbWFyZ2lud2lkdGg9XCIwXCI+PC9pZnJhbWU+PGEgaHJlZj1cImh0dHBzOi8vd3d3LndoYXRpc215aXAtYWRkcmVzcy5jb20vZGl2aS1kaXNjb3VudC9cIj48L2E+PGJyPjxzdHlsZT4ubWFwb3V0ZXJ7cG9zaXRpb246cmVsYXRpdmU7dGV4dC1hbGlnbjpyaWdodDtoZWlnaHQ6NTAwcHg7d2lkdGg6NjAwcHg7fTwvc3R5bGU+PGEgaHJlZj1cImh0dHBzOi8vd3d3LmVtYmVkZ29vZ2xlbWFwLm5ldFwiPmdvb2dsZSBtYXBzIGNvZGUgZm9yIHdvcmRwcmVzczwvYT48c3R5bGU+LmdtYXBfY2FudmFzIHtvdmVyZmxvdzpoaWRkZW47YmFja2dyb3VuZDpub25lIWltcG9ydGFudDtoZWlnaHQ6NTAwcHg7d2lkdGg6NjAwcHg7fTwvc3R5bGU+PC9kaXY+PC9kaXY+YFxuICAgIGFkZENvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkQ29udGVudExvY2F0aW9uKTtcblxuICAgIGNvbnN0IGFkZENvbnRlbnRIb3Vycz0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkQ29udGVudEhvdXJzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnd29yayB0ZXh0IGRlc2NyaXB0aW9uLXRleHQnKTtcbiAgICBhZGRDb250ZW50SG91cnMuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJ3b3JraW5nLWRheXMgdGV4dFwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1vbmRheVwiPk1vbmRheSB0byBGcmlkYXk8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzYXR1cmRheVwiPlNhdHVyZGF5PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic3VuZGF5XCI+U3VuZGF5PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIndvcmtpbmctaG91cnMgdGV4dFwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1vbmRheVwiPjEyOjAwIHRvIDIzOjAwPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic2F0dXJkYXlcIj4xNzowMCB0byAwMTowMDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInN1bmRheVwiPkNMT1NFRDwvZGl2PlxuICAgIDwvZGl2PmBcbiAgICBhZGRDb250ZW50LmFwcGVuZENoaWxkKGFkZENvbnRlbnRIb3Vycyk7XG5cbiAgICBjb25zdCBjb250ZW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50VGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb250ZW50LXRpdGxlIGh1Z2UtdGl0bGUgdGV4dCcpO1xuICAgIGNvbnRlbnRUaXRsZS5pbm5lclRleHQgPSAnT3JpZ2luYWwgR3JlZWsgZXhwZXJpZW5jZSBpbiBaYWdyZWInO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudFRpdGxlKTtcbn07XG5cbmV4cG9ydCB7IGhvbWVQYWdlIH07IiwiY29uc3QgaW5pdGlhbCA9ICgpID0+IHtcbiAgICBjb25zdCBib2R5VGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29udGFpbmVyJyk7XG4gICAgYm9keVRhZy5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwYWdlLXRpdGxlIGxhcmdlLXRpdGxlIHRleHQnKTtcbiAgICB0aXRsZS5pbm5lclRleHQgPSAnTkVTXFwnVklTRSc7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YWJzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFicy1jb250YWluZXInKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGFicyk7XG5cbiAgICBjb25zdCBob21lVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZVRhYi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RhYiBob21lIHRleHQgbWVkaXVtLXRpdGxlJyk7XG4gICAgaG9tZVRhYi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUnKTtcbiAgICBob21lVGFiLmlubmVyVGV4dCA9ICdIT01FJztcbiAgICB0YWJzLmFwcGVuZENoaWxkKGhvbWVUYWIpO1xuXG4gICAgY29uc3QgbWVudVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVUYWIuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YWIgbWVudSB0ZXh0IG1lZGl1bS10aXRsZScpO1xuICAgIG1lbnVUYWIuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51Jyk7XG4gICAgbWVudVRhYi5pbm5lclRleHQgPSAnTUVOVSc7XG4gICAgdGFicy5hcHBlbmRDaGlsZChtZW51VGFiKTtcblxuICAgIGNvbnN0IGNvbnRhY3RUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0VGFiLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFiIGNvbnRhY3QgdGV4dCBtZWRpdW0tdGl0bGUnKTtcbiAgICBjb250YWN0VGFiLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdCcpO1xuICAgIGNvbnRhY3RUYWIuaW5uZXJUZXh0ID0gJ0NPTlRBQ1QnO1xuICAgIHRhYnMuYXBwZW5kQ2hpbGQoY29udGFjdFRhYik7XG5cbiAgICAvLyBTYW1lIGFzIGhvbWUuanMgZnJvbSBiZWxvd1xuXG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnRDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb250ZW50LWNvbnRhaW5lcicpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcik7XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbnRlbnQnKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gICAgY29uc3QgYWRkQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZENvbnRlbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb250ZW50IGFib3V0IHRleHQnKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZENvbnRlbnQpO1xuXG4gICAgY29uc3QgYWRkQ29udGVudE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRDb250ZW50TWFpbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RleHQgZGVzY3JpcHRpb24tdGV4dCcpO1xuICAgIGFkZENvbnRlbnRNYWluLmlubmVyVGV4dCA9ICdWaXNpdCBvdXIgZmFtaWx5IHJlc3RhdXJhbnQgaW4gdGhlIGNlbnRlciBvZiBaYWdyZWIuIEVzdGFibGlzaGVkIGluIDE5NzguJztcbiAgICBhZGRDb250ZW50LmFwcGVuZENoaWxkKGFkZENvbnRlbnRNYWluKTtcblxuICAgIGNvbnN0IGFkZENvbnRlbnRMb2NhdGlvbj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkQ29udGVudExvY2F0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGV4dCBkZXNjcmlwdGlvbi10ZXh0Jyk7XG4gICAgYWRkQ29udGVudExvY2F0aW9uLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwibWFwb3V0ZXJcIj48ZGl2IGNsYXNzPVwiZ21hcF9jYW52YXNcIj48aWZyYW1lIHdpZHRoPVwiNjAwXCIgaGVpZ2h0PVwiNTAwXCIgaWQ9XCJnbWFwX2NhbnZhc1wiIHNyYz1cImh0dHBzOi8vbWFwcy5nb29nbGUuY29tL21hcHM/cT16YWdyZWImdD0mej0xMyZpZT1VVEY4Jml3bG9jPSZvdXRwdXQ9ZW1iZWRcIiBmcmFtZWJvcmRlcj1cIjBcIiBzY3JvbGxpbmc9XCJub1wiIG1hcmdpbmhlaWdodD1cIjBcIiBtYXJnaW53aWR0aD1cIjBcIj48L2lmcmFtZT48YSBocmVmPVwiaHR0cHM6Ly93d3cud2hhdGlzbXlpcC1hZGRyZXNzLmNvbS9kaXZpLWRpc2NvdW50L1wiPjwvYT48YnI+PHN0eWxlPi5tYXBvdXRlcntwb3NpdGlvbjpyZWxhdGl2ZTt0ZXh0LWFsaWduOnJpZ2h0O2hlaWdodDo1MDBweDt3aWR0aDo2MDBweDt9PC9zdHlsZT48YSBocmVmPVwiaHR0cHM6Ly93d3cuZW1iZWRnb29nbGVtYXAubmV0XCI+Z29vZ2xlIG1hcHMgY29kZSBmb3Igd29yZHByZXNzPC9hPjxzdHlsZT4uZ21hcF9jYW52YXMge292ZXJmbG93OmhpZGRlbjtiYWNrZ3JvdW5kOm5vbmUhaW1wb3J0YW50O2hlaWdodDo1MDBweDt3aWR0aDo2MDBweDt9PC9zdHlsZT48L2Rpdj48L2Rpdj5gXG4gICAgYWRkQ29udGVudC5hcHBlbmRDaGlsZChhZGRDb250ZW50TG9jYXRpb24pO1xuXG4gICAgY29uc3QgYWRkQ29udGVudEhvdXJzPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRDb250ZW50SG91cnMuc2V0QXR0cmlidXRlKCdjbGFzcycsICd3b3JrIHRleHQgZGVzY3JpcHRpb24tdGV4dCcpO1xuICAgIGFkZENvbnRlbnRIb3Vycy5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cIndvcmtpbmctZGF5cyB0ZXh0XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9uZGF5XCI+TW9uZGF5IHRvIEZyaWRheTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInNhdHVyZGF5XCI+U2F0dXJkYXk8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzdW5kYXlcIj5TdW5kYXk8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwid29ya2luZy1ob3VycyB0ZXh0XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9uZGF5XCI+MTI6MDAgdG8gMjM6MDA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzYXR1cmRheVwiPjE3OjAwIHRvIDAxOjAwPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic3VuZGF5XCI+Q0xPU0VEPC9kaXY+XG4gICAgPC9kaXY+YFxuICAgIGFkZENvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkQ29udGVudEhvdXJzKTtcblxuICAgIGNvbnN0IGNvbnRlbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnRUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbnRlbnQtdGl0bGUgaHVnZS10aXRsZSB0ZXh0Jyk7XG4gICAgY29udGVudFRpdGxlLmlubmVyVGV4dCA9ICdPcmlnaW5hbCBHcmVlayBleHBlcmllbmNlIGluIFphZ3JlYic7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250ZW50VGl0bGUpO1xufTtcblxuXG5leHBvcnQgeyBpbml0aWFsIH07IiwiY29uc3QgbWVudUl0ZW0gPSAobmFtZSwgaW1hZ2UsIGRlc2NyaXB0aW9uLCBwcmljZSkgPT4ge1xuICAgIHJldHVybiB7bmFtZSwgaW1hZ2UsIGRlc2NyaXB0aW9uLCBwcmljZX07XG59XG5cbmNvbnN0IGl0ZW0xID0gbWVudUl0ZW0oJ1NvdXZsYWtpJywgJzEnLCAnVHlwaWNhbGx5IG1hcmluYXRlZCBpbiBvaWwsIHNhbHQsIHBlcHBlciwgb3JlZ2FubyBhbmQgbGVtb24uIEFsc28ga25vd24gYXMga2FsYW1ha2kuJywgJzQ1Jyk7XG5jb25zdCBpdGVtMiA9IG1lbnVJdGVtKCdNb3Vzc2FrYScsICcyJywgJ0Nhc3Nlcm9sZSBtYWRlIG9mICh0eXBpY2FsbHkgZnJpZWQpIGF1YmVyZ2luZSwgcG90YXRvLCBhbmQgc3BpY2VkIG1pbmNlZCBtZWF0LicsICczNScpO1xuY29uc3QgaXRlbTMgPSBtZW51SXRlbSgnR3lyb3MnLCAnMycsICdSb2FzdGVkIGFuZCBzbGljZWQgbWVhdCAodXN1YWxseSBwb3JrIG9yIGNoaWNrZW4sIHJhcmVseSBiZWVmIG9yIGxhbWIpIG9uIGEgdHVybmluZyBzcGl0LCB0eXBpY2FsbHkgc2VydmVkIHdpdGggc2F1Y2VzIGxpa2UgdHphdHppa2kgYW5kIGdhcm5pc2hlcyAodG9tYXRvLCBvbmlvbnMpIG9uIHBpdGEgYnJlYWQuJywgJzQwJyk7XG5jb25zdCBpdGVtNCA9IG1lbnVJdGVtKCdLbGVmdGlrbycsICc0JywgJ0xpdGVyYWxseSBtZWFuaW5nIG9mIHRoZSBrbGVwaHRzLCBhbHNvIGNhbGxlZCBcIkV4b2NoaWvDs1wiLCB0aGlzIEN5cHJpb3QgZGlzaCBpcyBsYW1iIHNsb3ctYmFrZWQgb24gdGhlIGJvbmUsIGZpcnN0IG1hcmluYXRlZCBpbiBnYXJsaWMgYW5kIGxlbW9uIGp1aWNlLCBvcmlnaW5hbGx5IGNvb2tlZCBpbiBhIHBpdCBvdmVuLicsICc1NScpO1xuXG5jb25zdCBtZW51QXJyYXkgPSBbaXRlbTEsIGl0ZW0yLCBpdGVtMywgaXRlbTRdO1xuXG5jb25zdCByZW5kZXJNZW51ID0gKCkgPT4ge1xuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWFpbi1tZW51IHRleHQnKTtcbiAgICBcbiAgICBtZW51QXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4gIHtcbiAgICAgICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ld0Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RleHQgbWVudS1pdGVtJyk7XG4gICAgICAgIG5ld0Rpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxpbWcgc3JjPVwiLi9pbWFnZSR7ZWxlbWVudC5pbWFnZX0uanBnXCIgYWx0PVwibWVudS1pdGVtLSR7ZWxlbWVudC5pbWFnZX1cIiBjbGFzcz1cIm1lbnUtaW1hZ2VcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtbmFtZVwiPiR7ZWxlbWVudC5uYW1lfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1kZXNjcmlwdGlvblwiPiR7ZWxlbWVudC5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtcHJpY2VcIj5QcmljZTogJHtlbGVtZW50LnByaWNlfSBIUks8L2Rpdj5gXG4gICAgICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RGl2KTtcbiAgICB9KVxuXG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbi10ZXh0Jyk7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcbn1cblxuY29uc3QgbWVudVBhZ2UgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtY29udGFpbmVyJyk7XG4gICAgY29udGVudENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29udGVudCcpO1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgICBjb25zdCBjb250ZW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50VGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb250ZW50LXRpdGxlIG1lZGl1bS10aXRsZSB0ZXh0Jyk7XG4gICAgY29udGVudFRpdGxlLmlubmVyVGV4dCA9ICdNRU5VJztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnRUaXRsZSk7XG5cbiAgICBjb25zdCBjb250ZW50VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnRUZXh0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGVzY3JpcHRpb24tdGV4dCB0ZXh0Jyk7XG4gICAgY29udGVudFRleHQuaW5uZXJUZXh0ID0gJ091ciBtZW51IGhhcyBiZWVuIHNwZWNpYWxseSBkZXNpZ25lZCBieSBvdXIgaGVhZCBjaGVmIHRvIG9mZmVyIHRoZSBiZXN0IGFuZCBoaWdoZXN0IHF1YWxpdHkgR3JlZWsgbWVhbHMuJztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnRUZXh0KTtcblxuICAgIHJlbmRlck1lbnUoKVxufTtcblxuZXhwb3J0IHsgbWVudVBhZ2UgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGluaXRpYWwgfSBmcm9tICcuL2luaXRpYWwnO1xuaW1wb3J0IHsgaG9tZVBhZ2UgfSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IHsgbWVudVBhZ2UgfSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IHsgY29udGFjdFBhZ2UgfSBmcm9tICcuL2NvbnRhY3QnO1xuXG5jb25zdCByZW5kZXJQYWdlID0gKCgpID0+IHtcbiAgICBpbml0aWFsKCk7XG59KSgpO1xuXG5jb25zdCBzd2l0Y2hlciA9ICgoKSA9PiB7XG4gICAgY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWInKTtcbiAgICBcbiAgICBsZXQgaTtcbiAgICBmb3IgKCBpID0gMDsgaSA8IHRhYnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGFic1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRldGVjdFRhYik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGV0ZWN0VGFiKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRhYnMgPSBbJ2hvbWUnLCAnbWVudScsICdjb250YWN0J107XG4gICAgICAgIGNvbnN0IHRhYkNsYXNzID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKTtcblxuICAgICAgICBpZiAodGFiQ2xhc3MgPT09IHRhYnNbMF0pIHtcbiAgICAgICAgICAgIGhvbWVQYWdlICgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhYkNsYXNzID09PSB0YWJzWzFdKSB7XG4gICAgICAgICAgICBtZW51UGFnZSAoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YWJDbGFzcyA9PT0gdGFic1syXSkge1xuICAgICAgICAgICAgY29udGFjdFBhZ2UgKCk7XG4gICAgICAgIH1cbiAgICB9XG59KSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==