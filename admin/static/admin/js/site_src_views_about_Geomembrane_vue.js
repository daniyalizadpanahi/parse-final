(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["site_src_views_about_Geomembrane_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/views/Ask.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/views/Ask.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Ask",
  methods: {
    submit: function submit() {
      var _this = this;

      var form = document.getElementById('contactForm');
      var formData = new FormData(form);
      this.$axios.post('/api/faq/', formData).then(function (res) {
        _this.$toast.fire({
          title: _this.$t("Action completed"),
          icon: 'success',
          container: 'alert-font',
          customClass: {
            title: 'alert-font'
          }
        });
      })["catch"](function (error) {
        _this.$toast.fire({
          title: _this.$t("Please check your connection"),
          icon: 'error',
          container: 'alert-font',
          customClass: {
            title: 'alert-font'
          }
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/views/about/Geomembrane.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/views/about/Geomembrane.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Ask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Ask */ "./site/src/views/Ask.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Geomembrane',
  components: {
    Ask: _Ask__WEBPACK_IMPORTED_MODULE_0__.default
  }
});

/***/ }),

/***/ "./site/src/views/Ask.vue":
/*!********************************!*\
  !*** ./site/src/views/Ask.vue ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Ask_vue_vue_type_template_id_0f62db93_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ask.vue?vue&type=template&id=0f62db93&scoped=true& */ "./site/src/views/Ask.vue?vue&type=template&id=0f62db93&scoped=true&");
/* harmony import */ var _Ask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ask.vue?vue&type=script&lang=js& */ "./site/src/views/Ask.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Ask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Ask_vue_vue_type_template_id_0f62db93_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Ask_vue_vue_type_template_id_0f62db93_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0f62db93",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "site/src/views/Ask.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./site/src/views/about/Geomembrane.vue":
/*!**********************************************!*\
  !*** ./site/src/views/about/Geomembrane.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Geomembrane_vue_vue_type_template_id_3edae6bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Geomembrane.vue?vue&type=template&id=3edae6bc&scoped=true& */ "./site/src/views/about/Geomembrane.vue?vue&type=template&id=3edae6bc&scoped=true&");
/* harmony import */ var _Geomembrane_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Geomembrane.vue?vue&type=script&lang=js& */ "./site/src/views/about/Geomembrane.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Geomembrane_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Geomembrane_vue_vue_type_template_id_3edae6bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Geomembrane_vue_vue_type_template_id_3edae6bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3edae6bc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "site/src/views/about/Geomembrane.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./site/src/views/Ask.vue?vue&type=script&lang=js&":
/*!*********************************************************!*\
  !*** ./site/src/views/Ask.vue?vue&type=script&lang=js& ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Ask.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/views/Ask.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./site/src/views/about/Geomembrane.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./site/src/views/about/Geomembrane.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Geomembrane_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Geomembrane.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/views/about/Geomembrane.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Geomembrane_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./site/src/views/Ask.vue?vue&type=template&id=0f62db93&scoped=true&":
/*!***************************************************************************!*\
  !*** ./site/src/views/Ask.vue?vue&type=template&id=0f62db93&scoped=true& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ask_vue_vue_type_template_id_0f62db93_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ask_vue_vue_type_template_id_0f62db93_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ask_vue_vue_type_template_id_0f62db93_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Ask.vue?vue&type=template&id=0f62db93&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/views/Ask.vue?vue&type=template&id=0f62db93&scoped=true&");


/***/ }),

/***/ "./site/src/views/about/Geomembrane.vue?vue&type=template&id=3edae6bc&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./site/src/views/about/Geomembrane.vue?vue&type=template&id=3edae6bc&scoped=true& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Geomembrane_vue_vue_type_template_id_3edae6bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Geomembrane_vue_vue_type_template_id_3edae6bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Geomembrane_vue_vue_type_template_id_3edae6bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Geomembrane.vue?vue&type=template&id=3edae6bc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/views/about/Geomembrane.vue?vue&type=template&id=3edae6bc&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/views/Ask.vue?vue&type=template&id=0f62db93&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/views/Ask.vue?vue&type=template&id=0f62db93&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "ask-question" }, [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "form",
      {
        attrs: { id: "contactForm" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.submit($event)
          }
        }
      },
      [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-6 col-sm-6" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("input", {
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  name: "name",
                  placeholder: _vm.$t("name")
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-6 col-sm-6" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("input", {
                staticClass: "form-control",
                attrs: {
                  type: "email",
                  name: "email",
                  required: "",
                  placeholder: _vm.$t("email")
                }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "help-block with-errors" })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-6 col-sm-6" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("input", {
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  name: "title",
                  required: "",
                  placeholder: _vm.$t("subject")
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-12 col-md-12" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("textarea", {
                staticClass: "form-control",
                attrs: {
                  name: "content",
                  cols: "30",
                  rows: "5",
                  required: "",
                  placeholder: _vm.$t("message")
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-12 col-md-12" }, [
            _c(
              "button",
              { staticClass: "default-btn btn-two", attrs: { type: "submit" } },
              [
                _c("span", { staticClass: "label" }, [
                  _vm._v(
                    "\n                                  " +
                      _vm._s(_vm.$t("send")) +
                      "\n                                  "
                  ),
                  _c("i", { staticClass: "flaticon-left-arrow" })
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", {
              staticClass: "h3 text-center hidden",
              attrs: { id: "msgSubmit" }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "clearfix" })
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section-title" }, [
      _c("h2", [_vm._v("سوال بپرس")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/views/about/Geomembrane.vue?vue&type=template&id=3edae6bc&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/views/about/Geomembrane.vue?vue&type=template&id=3edae6bc&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "service-details-area ptb-100 mt-5" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-4" }, [
          _c("div", { staticClass: "service-sidebar-area" }, [
            _c("div", { staticClass: "service-list service-card" }, [
              _c("h3", { staticClass: "service-details-title" }, [
                _vm._v(_vm._s(_vm.$t("tags")))
              ]),
              _vm._v(" "),
              _c("ul", [
                _c("li", [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.$t("education")) +
                      "\n                "
                  ),
                  _c("i", { staticClass: "bx bx-check" })
                ]),
                _vm._v(" "),
                _c("li", [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.$t("about")) +
                      "\n                "
                  ),
                  _c("i", { staticClass: "bx bx-check" })
                ])
              ])
            ]),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "service-list service-card" }, [
              _c("h3", { staticClass: "service-details-title" }, [
                _vm._v(_vm._s(_vm.$t("Company info")))
              ]),
              _vm._v(" "),
              _vm._m(1)
            ]),
            _vm._v(" "),
            _vm._m(2)
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-8" }, [
          _c(
            "div",
            { staticClass: "service-details-wrap" },
            [
              _vm._m(3),
              _vm._v(" "),
              _c("h3", [_vm._v(_vm._s(_vm.$t("what is geomembrane?")))]),
              _vm._v(" "),
              _c("p", [_vm._v(_vm._s(_vm.$t("geomembrane intro")))]),
              _vm._v(" "),
              _c("h4", [_vm._v(_vm._s(_vm.$t("why use geo")))]),
              _vm._v(" "),
              _c("p", { staticClass: "mb-30" }, [
                _vm._v(_vm._s(_vm.$t("geo using desc")))
              ]),
              _vm._v(" "),
              _vm._m(4),
              _vm._v(" "),
              _c("p", { staticClass: "mb-30" }, [
                _vm._v(_vm._s(_vm.$t("geo using desc")))
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "mb-30" }, [
                _vm._v(_vm._s(_vm.$t("geo for pools")))
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "car-service-list-wrap" }, [
                _c("div", { staticClass: "row align-items-center" }, [
                  _vm._m(5),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-6 col-md-6" }, [
                    _c("div", { staticClass: "car-service-list" }, [
                      _c("ul", [
                        _c("li", [
                          _c("i", { staticClass: "bx bx-check" }),
                          _vm._v(
                            "\n                      " +
                              _vm._s(_vm.$t("cheaper")) +
                              "\n                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("i", { staticClass: "bx bx-check" }),
                          _vm._v(
                            "\n                      " +
                              _vm._s(_vm.$t("longer old")) +
                              "\n                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("i", { staticClass: "bx bx-check" }),
                          _vm._v(
                            "\n                      " +
                              _vm._s(_vm.$t("stronger")) +
                              "\n                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("i", { staticClass: "bx bx-check" }),
                          _vm._v(
                            "\n                      " +
                              _vm._s(_vm.$t("easy to use")) +
                              "\n                    "
                          )
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("Ask")
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "service-faq service-card" }, [
      _c("h3", { staticClass: "service-details-title" }, [
        _vm._v("سوالات متداول")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "faq-area" }, [
        _c("div", { staticClass: "questions-bg-area" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-lg-12" }, [
              _c("div", { staticClass: "faq-accordion" }, [
                _c("ul", { staticClass: "accordion" }, [
                  _c("li", { staticClass: "accordion-item" }, [
                    _c(
                      "a",
                      {
                        staticClass: "accordion-title active",
                        attrs: { href: "javascript:void(0)" }
                      },
                      [
                        _c("i", { staticClass: "bx bx-chevron-down" }),
                        _vm._v(
                          "\n                            سوالات متداول 1؟\n                          "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("p", { staticClass: "accordion-content show" }, [
                      _vm._v(
                        "لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است."
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "accordion-item" }, [
                    _c(
                      "a",
                      {
                        staticClass: "accordion-title",
                        attrs: { href: "javascript:void(0)" }
                      },
                      [
                        _c("i", { staticClass: "bx bx-chevron-down" }),
                        _vm._v(
                          "\n                            سوالات متداول 2؟\n                          "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("p", { staticClass: "accordion-content" }, [
                      _vm._v(
                        "لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است."
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "accordion-item" }, [
                    _c(
                      "a",
                      {
                        staticClass: "accordion-title",
                        attrs: { href: "javascript:void(0)" }
                      },
                      [
                        _c("i", { staticClass: "bx bx-chevron-down" }),
                        _vm._v(
                          "\n                            سوالات متداول 3؟\n                          "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("p", { staticClass: "accordion-content" }, [
                      _vm._v(
                        "لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است."
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "accordion-item" }, [
                    _c(
                      "a",
                      {
                        staticClass: "accordion-title",
                        attrs: { href: "javascript:void(0)" }
                      },
                      [
                        _c("i", { staticClass: "bx bx-chevron-down" }),
                        _vm._v(
                          "\n                            سوالات متداول 4؟\n                          "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("p", { staticClass: "accordion-content" }, [
                      _vm._v(
                        "لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است."
                      )
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _c("a", { attrs: { href: "tel:021-12345678" } }, [
          _vm._v("\n                  021-12345678\n                  "),
          _c("i", { staticClass: "bx bx-phone-call bx-rotate-270" })
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "mailto:hello@ecorik.com" } }, [
          _vm._v("\n                  hello@ecorik.com\n                  "),
          _c("i", { staticClass: "bx bx-envelope" })
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n                ایران ، استان تهران ، میدان آزادی\n                "
        ),
        _c("i", { staticClass: "bx bx-location-plus" })
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v("\n                9:00 عصر – 8:00 صبح\n                "),
        _c("i", { staticClass: "bx bx-time" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "service-list service-card" }, [
      _c("h3", { staticClass: "service-details-title" }, [
        _vm._v("دانلود بروشورها")
      ]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _c("a", { attrs: { href: "#" } }, [
            _vm._v("\n                  دانلود فایل (1)\n                  "),
            _c("i", { staticClass: "bx bxs-cloud-download" })
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("a", { attrs: { href: "#" } }, [
            _vm._v("\n                  دانلود فایل (2)\n                  "),
            _c("i", { staticClass: "bx bxs-cloud-download" })
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("a", { attrs: { href: "#" } }, [
            _vm._v("\n                  دانلود فایل (3)\n                  "),
            _c("i", { staticClass: "bx bxs-cloud-download" })
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("a", { attrs: { href: "#" } }, [
            _vm._v("\n                  دانلود فایل (4)\n                  "),
            _c("i", { staticClass: "bx bxs-cloud-download" })
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "single-services-imgs mb-30" }, [
      _c("img", { attrs: { src: "/static/site/img/pool.jpg", alt: "Image" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "rooms-details mb-30" }, [
      _c("img", {
        attrs: { src: "/static/site/img/geopool.jpg", alt: "Image" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-6 col-md-6" }, [
      _c("div", { staticClass: "service-list-img" }, [
        _c("img", {
          attrs: { src: "/static/site/img/faq.jpg", alt: "FAQ image" }
        })
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);