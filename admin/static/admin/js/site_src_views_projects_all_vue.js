(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["site_src_views_projects_all_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/views/projects/all.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/views/projects/all.vue?vue&type=script&lang=js& ***!
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
  name: "all",
  data: function data() {
    return {
      projects: null,
      loading: true
    };
  },
  methods: {
    getProjects: function getProjects() {
      var _this = this;

      this.$axios.get('/api/projects/count').then(function (res) {
        _this.projects = res.data;
      });
      this.loading = false;
    }
  },
  mounted: function mounted() {
    this.getProjects();
  }
});

/***/ }),

/***/ "./site/src/views/projects/all.vue":
/*!*****************************************!*\
  !*** ./site/src/views/projects/all.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _all_vue_vue_type_template_id_fa09cb7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all.vue?vue&type=template&id=fa09cb7c&scoped=true& */ "./site/src/views/projects/all.vue?vue&type=template&id=fa09cb7c&scoped=true&");
/* harmony import */ var _all_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all.vue?vue&type=script&lang=js& */ "./site/src/views/projects/all.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _all_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _all_vue_vue_type_template_id_fa09cb7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _all_vue_vue_type_template_id_fa09cb7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "fa09cb7c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "site/src/views/projects/all.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./site/src/views/projects/all.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./site/src/views/projects/all.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_all_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./all.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/views/projects/all.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_all_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./site/src/views/projects/all.vue?vue&type=template&id=fa09cb7c&scoped=true&":
/*!************************************************************************************!*\
  !*** ./site/src/views/projects/all.vue?vue&type=template&id=fa09cb7c&scoped=true& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_all_vue_vue_type_template_id_fa09cb7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_all_vue_vue_type_template_id_fa09cb7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_all_vue_vue_type_template_id_fa09cb7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./all.vue?vue&type=template&id=fa09cb7c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/views/projects/all.vue?vue&type=template&id=fa09cb7c&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/views/projects/all.vue?vue&type=template&id=fa09cb7c&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/views/projects/all.vue?vue&type=template&id=fa09cb7c&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "container",
      staticStyle: { "margin-top": "200px", "margin-bottom": "100px" }
    },
    [
      _c("h2", { staticClass: "text-center text-primary" }, [
        _vm._v(_vm._s(_vm.$t("projects")))
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "text-center my-4" }, [
        _vm._v(_vm._s(_vm.$t("projects_desc")))
      ]),
      _vm._v(" "),
      _vm.loading
        ? _c(
            "div",
            { staticClass: "lds-ellipsis", staticStyle: { width: "53%" } },
            [_c("div"), _c("div"), _c("div"), _c("div")]
          )
        : _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-lg-4 col-md-6" },
              [
                _c("router-link", { attrs: { to: "/projects/finished" } }, [
                  _c("div", { staticClass: "single-news" }, [
                    _c("div", { staticClass: "news-img" }, [
                      _c("img", {
                        staticStyle: { width: "500px" },
                        attrs: {
                          src: "/static/site/img/projects/1.jpg",
                          alt: "Image"
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "dates" }, [
                        _c("span", [_vm._v(_vm._s(_vm.$t("finished")))])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "news-content-wrap" }, [
                      _c("ul", [
                        _c("li", [
                          _c("a", { attrs: { href: "#" } }, [
                            _c("i", { staticClass: "flaticon-conversation" }),
                            _vm._v(
                              "\n                  " +
                                _vm._s(
                                  _vm.projects.finished +
                                    " " +
                                    _vm.$t("project")
                                ) +
                                "\n                "
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("h3", [_vm._v(_vm._s(_vm.$t("finished_projects")))]),
                      _vm._v(" "),
                      _c("p", { staticStyle: { color: "#7a7e9a" } }, [
                        _vm._v(_vm._s(_vm.$t("finished_projects_desc")))
                      ]),
                      _vm._v(" "),
                      _c(
                        "a",
                        { staticClass: "read-more", attrs: { href: "" } },
                        [
                          _vm._v(
                            "\n              " +
                              _vm._s(_vm.$t("more")) +
                              "\n              "
                          ),
                          _c("i", { staticClass: "flaticon-left-arrow" })
                        ]
                      )
                    ])
                  ])
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-lg-4 col-md-6" },
              [
                _c("router-link", { attrs: { to: "/projects/progress" } }, [
                  _c("div", { staticClass: "single-news" }, [
                    _c("div", { staticClass: "news-img" }, [
                      _c("img", {
                        staticStyle: { width: "500px" },
                        attrs: {
                          src: "/static/site/img/projects/2.jpg",
                          alt: "Image"
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "dates" }, [
                        _c("span", [_vm._v(_vm._s(_vm.$t("progress")))])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "news-content-wrap" }, [
                      _c("ul", [
                        _c("li", [
                          _c("a", { attrs: { href: "#" } }, [
                            _c("i", { staticClass: "flaticon-conversation" }),
                            _vm._v(
                              "\n                  " +
                                _vm._s(
                                  _vm.projects.progress +
                                    " " +
                                    _vm.$t("project")
                                ) +
                                "\n                "
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("h3", [_vm._v(_vm._s(_vm.$t("progress_projects")))]),
                      _vm._v(" "),
                      _c("p", { staticStyle: { color: "#7a7e9a" } }, [
                        _vm._v(_vm._s(_vm.$t("progress_projects_desc")))
                      ]),
                      _vm._v(" "),
                      _c(
                        "a",
                        { staticClass: "read-more", attrs: { href: "" } },
                        [
                          _vm._v(
                            "\n              " +
                              _vm._s(_vm.$t("more")) +
                              "\n              "
                          ),
                          _c("i", { staticClass: "flaticon-left-arrow" })
                        ]
                      )
                    ])
                  ])
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-lg-4 col-md-6 offset-md-3 offset-lg-0" },
              [
                _c("router-link", { attrs: { to: "/projects/progress" } }, [
                  _c("div", { staticClass: "single-news" }, [
                    _c("div", { staticClass: "news-img" }, [
                      _c("img", {
                        staticStyle: { width: "500px" },
                        attrs: {
                          src: "/static/site/img/slider/slider-img-1.jpg",
                          alt: "Image"
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "dates" }, [
                        _c("span", [_vm._v(_vm._s(_vm.$t("started")))])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "news-content-wrap" }, [
                      _c("ul", [
                        _c("li", [
                          _c("a", { attrs: { href: "#" } }, [
                            _c("i", { staticClass: "flaticon-conversation" }),
                            _vm._v(
                              "\n                  " +
                                _vm._s(
                                  _vm.projects.started + " " + _vm.$t("project")
                                ) +
                                "\n                "
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("h3", [_vm._v(_vm._s(_vm.$t("started_projects")))]),
                      _vm._v(" "),
                      _c("p", { staticStyle: { color: "#7a7e9a" } }, [
                        _vm._v(_vm._s(_vm.$t("started_projects_desc")))
                      ]),
                      _vm._v(" "),
                      _c(
                        "a",
                        { staticClass: "read-more", attrs: { href: "" } },
                        [
                          _vm._v(
                            "\n              " +
                              _vm._s(_vm.$t("more")) +
                              "\n              "
                          ),
                          _c("i", { staticClass: "flaticon-left-arrow" })
                        ]
                      )
                    ])
                  ])
                ])
              ],
              1
            )
          ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);