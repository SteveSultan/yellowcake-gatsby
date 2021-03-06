webpackHotUpdate("cms",{

/***/ "./src/templates/ContactPage.js":
/*!**************************************!*\
  !*** ./src/templates/ContactPage.js ***!
  \**************************************/
/*! exports provided: ContactPageTemplate, default, pageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageTemplate", function() { return ContactPageTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PageHeader */ "./src/components/PageHeader.js");
/* harmony import */ var _components_FormSimpleAjax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/FormSimpleAjax */ "./src/components/FormSimpleAjax.js");
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Content */ "./src/components/Content.js");
/* harmony import */ var _components_GoogleMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/GoogleMap */ "./src/components/GoogleMap.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _ContactPage_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ContactPage.css */ "./src/templates/ContactPage.css");
/* harmony import */ var _ContactPage_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ContactPage_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_ContactUS__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ContactUS */ "./src/components/ContactUS.js");
var _this = undefined,
    _jsxFileName = "/Users/sultanforwork/Downloads/personalItem/kpainting/Code/yellowcake-gatsby/src/templates/ContactPage.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};









 // Export Template for use in CMS preview

var ContactPageTemplate = function ContactPageTemplate(_ref) {
  var body = _ref.body,
      title = _ref.title,
      subtitle = _ref.subtitle,
      featuredImage = _ref.featuredImage,
      address = _ref.address,
      phone = _ref.phone,
      email = _ref.email,
      locations = _ref.locations;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "Contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PageHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: title,
    subtitle: subtitle,
    backgroundImage: featuredImage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section Contact--Section1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container Contact--Section1--Container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Content__WEBPACK_IMPORTED_MODULE_4__["default"], {
    source: body,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Contact--Details",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, address && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "Contact--Details--Item",
    href: "https://www.google.com.au/maps/search/" + encodeURI(address),
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_1__["MapPin"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }), " ", address), phone && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "Contact--Details--Item",
    href: "tel:" + phone,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_1__["Smartphone"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }), " ", phone), email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "Contact--Details--Item",
    href: "mailto:" + email,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_1__["Mail"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }), " ", email))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ContactUS__WEBPACK_IMPORTED_MODULE_8__["ContactUs"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_GoogleMap__WEBPACK_IMPORTED_MODULE_5__["default"], {
    locations: locations,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }));
};

var ContactPage = function ContactPage(_ref2) {
  var page = _ref2.data.page;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    meta: page.frontmatter.meta || false,
    title: page.frontmatter.title || false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContactPageTemplate, Object.assign({}, page.frontmatter, {
    body: page.html,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }
  })));
};

var _default = ContactPage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
var pageQuery = "2576369059";
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ContactPageTemplate, "ContactPageTemplate", "/Users/sultanforwork/Downloads/personalItem/kpainting/Code/yellowcake-gatsby/src/templates/ContactPage.js");
  reactHotLoader.register(ContactPage, "ContactPage", "/Users/sultanforwork/Downloads/personalItem/kpainting/Code/yellowcake-gatsby/src/templates/ContactPage.js");
  reactHotLoader.register(pageQuery, "pageQuery", "/Users/sultanforwork/Downloads/personalItem/kpainting/Code/yellowcake-gatsby/src/templates/ContactPage.js");
  reactHotLoader.register(_default, "default", "/Users/sultanforwork/Downloads/personalItem/kpainting/Code/yellowcake-gatsby/src/templates/ContactPage.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.28dd7f42ba6203fd2982.hot-update.js.map