(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["site_src_views_projects_Projects_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/components/Project.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/components/Project.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Project',
  props: {
    instance: Object
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/views/projects/Projects.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/views/projects/Projects.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Project */ "./site/src/components/Project.vue");
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
  name: 'Projects',
  components: {
    Project: _components_Project__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      index: 1,
      list: [],
      pages: 1,
      loading: true
    };
  },
  methods: {
    getPage: function getPage() {
      var _this = this;

      var app = this;
      this.loading = true;
      this.$axios.get("/api/projects/".concat(this.$route.params.mode[0], "/?page=").concat(this.index, "&lang=").concat(this.$cookies.get('lang'))).then(function (res) {
        app.loading = false;
        app.list = res.data.data;
        app.pages = res.data.pages;
      })["catch"](function (error) {
        if (error.response.status === 404) {
          _this.$router.push('/404');
        }
      });
    },
    after: function after() {
      if (this.index < this.pages) {
        this.index++;
        this.getPage();
      }
    },
    previous: function previous() {
      if (this.index > 1) {
        this.index--;
        this.getPage();
      }
    },
    change_page: function change_page(page) {
      this.index = page;
      this.getPage();
    }
  },
  mounted: function mounted() {
    this.getPage();
  }
});

/***/ }),

/***/ "./site/src/components/Project.vue":
/*!*****************************************!*\
  !*** ./site/src/components/Project.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Project_vue_vue_type_template_id_8b6a8d96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project.vue?vue&type=template&id=8b6a8d96& */ "./site/src/components/Project.vue?vue&type=template&id=8b6a8d96&");
/* harmony import */ var _Project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project.vue?vue&type=script&lang=js& */ "./site/src/components/Project.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Project_vue_vue_type_template_id_8b6a8d96___WEBPACK_IMPORTED_MODULE_0__.render,
  _Project_vue_vue_type_template_id_8b6a8d96___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "site/src/components/Project.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./site/src/views/projects/Projects.vue":
/*!**********************************************!*\
  !*** ./site/src/views/projects/Projects.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Projects_vue_vue_type_template_id_09db5949_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects.vue?vue&type=template&id=09db5949&scoped=true& */ "./site/src/views/projects/Projects.vue?vue&type=template&id=09db5949&scoped=true&");
/* harmony import */ var _Projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projects.vue?vue&type=script&lang=js& */ "./site/src/views/projects/Projects.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Projects_vue_vue_type_template_id_09db5949_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Projects_vue_vue_type_template_id_09db5949_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "09db5949",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "site/src/views/projects/Projects.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./site/src/components/Project.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./site/src/components/Project.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Project.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/components/Project.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./site/src/views/projects/Projects.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./site/src/views/projects/Projects.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Projects.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/views/projects/Projects.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./site/src/components/Project.vue?vue&type=template&id=8b6a8d96&":
/*!************************************************************************!*\
  !*** ./site/src/components/Project.vue?vue&type=template&id=8b6a8d96& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_template_id_8b6a8d96___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_template_id_8b6a8d96___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_template_id_8b6a8d96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Project.vue?vue&type=template&id=8b6a8d96& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/components/Project.vue?vue&type=template&id=8b6a8d96&");


/***/ }),

/***/ "./site/src/views/projects/Projects.vue?vue&type=template&id=09db5949&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./site/src/views/projects/Projects.vue?vue&type=template&id=09db5949&scoped=true& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_template_id_09db5949_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_template_id_09db5949_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_template_id_09db5949_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Projects.vue?vue&type=template&id=09db5949&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/views/projects/Projects.vue?vue&type=template&id=09db5949&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/components/Project.vue?vue&type=template&id=8b6a8d96&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/components/Project.vue?vue&type=template&id=8b6a8d96& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "col-lg-4 col-md-6", style: { direction: "ltr" } },
    [
      _c(
        "router-link",
        {
          staticStyle: { color: "#3a503a" },
          attrs: { to: "/project/" + _vm.instance.id + "/" }
        },
        [
          _c("div", { staticClass: "single-news" }, [
            _c("div", { staticClass: "news-img" }, [
              _c("img", {
                attrs: { src: "/" + _vm.instance.image, alt: "Image" }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "news-content-wrap" }, [
              _c("h3", [_vm._v(_vm._s(_vm.instance.title))]),
              _vm._v(" "),
              _c("p", {
                domProps: {
                  innerHTML: _vm._s(_vm.instance.description.slice(0, 100))
                }
              })
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/views/projects/Projects.vue?vue&type=template&id=09db5949&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/views/projects/Projects.vue?vue&type=template&id=09db5949&scoped=true& ***!
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
  return _c(
    "section",
    { staticClass: "news-area ptb-100", staticStyle: { margin: "100px" } },
    [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "section-title" }, [
          _c("span", [_vm._v(_vm._s(_vm.$t("Projects")))]),
          _vm._v(" "),
          _c("h2", [_vm._v(_vm._s(_vm.$t(_vm.$route.params.mode)))])
        ]),
        _vm._v(" "),
        _vm.loading
          ? _c(
              "div",
              { staticClass: "lds-ellipsis", staticStyle: { width: "53%" } },
              [_c("div"), _c("div"), _c("div"), _c("div")]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.list.length
          ? _c(
              "div",
              { staticClass: "row" },
              [
                _vm._l(_vm.list, function(project) {
                  return _vm.list.length
                    ? _c("Project", {
                        key: project.id,
                        attrs: { instance: project }
                      })
                    : _vm._e()
                }),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-12" }, [
                  _c("div", { staticClass: "page-navigation-area" }, [
                    _c(
                      "nav",
                      {
                        attrs: {
                          "aria-label": "Page navigation example text-center"
                        }
                      },
                      [
                        _c(
                          "ul",
                          { staticClass: "pagination" },
                          [
                            _c("li", { staticClass: "page-item" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "page-link page-links",
                                  attrs: { href: "#" },
                                  on: {
                                    click: function($event) {
                                      return _vm.previous()
                                    }
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "bx bx-chevrons-right"
                                  })
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.pages, function(page) {
                              return _c(
                                "li",
                                {
                                  staticClass: "page-item",
                                  class: page === _vm.index ? "active" : ""
                                },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "page-link",
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          return _vm.change_page(page)
                                        }
                                      }
                                    },
                                    [_vm._v(_vm._s(page))]
                                  )
                                ]
                              )
                            }),
                            _vm._v(" "),
                            _c("li", { staticClass: "page-item" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "page-link",
                                  attrs: { href: "#" },
                                  on: {
                                    click: function($event) {
                                      return _vm.after()
                                    }
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "bx bx-chevrons-left"
                                  })
                                ]
                              )
                            ])
                          ],
                          2
                        )
                      ]
                    )
                  ])
                ])
              ],
              2
            )
          : _c("div", { staticClass: "row" }, [
              _c("p", { staticClass: "text-center" }, [
                _vm._v(_vm._s(_vm.$t("no record found")))
              ])
            ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);