(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["admin_views_Add_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/views/Add.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/views/Add.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Add",
  data: function data() {
    return {
      title: null,
      form: null,
      loading: false,
      errors: {},
      editor: null
    };
  },
  methods: {
    getData: function getData() {
      var app = this;
      this.title = this.$route.params.app;
      this.$axios.get("/admin-api/".concat(this.title, "/create/")).then(function (res) {
        app.form = res.data;
      });
    },
    submit: function submit(e) {
      var _this = this;

      this.loading = true;
      var app = this;
      var formData = new FormData(document.getElementById('form_data'));
      this.$isLoading(true);
      this.errors = {};
      this.$axios.post("/admin-api/".concat(this.title, "/create/"), formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function (res) {
        app.$toasted.global.action_completed();
        app.$router.push("/resource/".concat(_this.title, "/"));
      })["catch"](function (error) {
        Object.keys(error.response.data).forEach(function (key) {
          app.errors[key] = error.response.data;
          app.$forceUpdate();
        });
      });
      app.$isLoading(false);
      app.loading = false;
    }
  },
  mounted: function mounted() {
    this.getData();
  }
});

/***/ }),

/***/ "./admin/views/Add.vue":
/*!*****************************!*\
  !*** ./admin/views/Add.vue ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Add_vue_vue_type_template_id_98c68cfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=98c68cfc&scoped=true& */ "./admin/views/Add.vue?vue&type=template&id=98c68cfc&scoped=true&");
/* harmony import */ var _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js& */ "./admin/views/Add.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Add_vue_vue_type_template_id_98c68cfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Add_vue_vue_type_template_id_98c68cfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "98c68cfc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "admin/views/Add.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/views/Add.vue?vue&type=script&lang=js&":
/*!******************************************************!*\
  !*** ./admin/views/Add.vue?vue&type=script&lang=js& ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/views/Add.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./admin/views/Add.vue?vue&type=template&id=98c68cfc&scoped=true&":
/*!************************************************************************!*\
  !*** ./admin/views/Add.vue?vue&type=template&id=98c68cfc&scoped=true& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_98c68cfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_98c68cfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_98c68cfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Add.vue?vue&type=template&id=98c68cfc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/views/Add.vue?vue&type=template&id=98c68cfc&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/views/Add.vue?vue&type=template&id=98c68cfc&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/views/Add.vue?vue&type=template&id=98c68cfc&scoped=true& ***!
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
    [
      _c(
        "CCard",
        [
          _c("CCardHeader", [
            _c(
              "h4",
              [
                _c("CIcon", {
                  staticClass: "mr-2",
                  attrs: { name: "cil-pencil" }
                }),
                _vm._v(_vm._s(_vm.title))
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("CCardBody", [
            _c(
              "form",
              {
                attrs: { method: "POST", id: "form_data" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.submit($event)
                  }
                }
              },
              [
                _vm._l(_vm.form, function(item, key, index) {
                  return _c(
                    "div",
                    { key: index, staticClass: "form-group col-md-8 form-row" },
                    [
                      _c("label", { staticClass: "col-form-label" }, [
                        _vm._v(_vm._s(item.label))
                      ]),
                      _vm._v(" "),
                      item.widget === "text"
                        ? _c("input", {
                            staticClass: "form-control",
                            class: { "is-invalid": _vm.errors[key] },
                            attrs: {
                              name: key,
                              type: "text",
                              maxlength: item.max_length,
                              disabled: item.disabled
                            }
                          })
                        : item.widget === "password"
                        ? _c("input", {
                            staticClass: "form-control",
                            class: { "is-invalid": _vm.errors[key] },
                            attrs: {
                              type: "password",
                              name: key,
                              maxlength: item.max_length,
                              disabled: item.disabled
                            }
                          })
                        : item.widget === "select"
                        ? _c(
                            "select",
                            {
                              staticClass: "form-control",
                              class: { "is-invalid": _vm.errors[key] },
                              attrs: { name: key, disabled: item.disabled }
                            },
                            _vm._l(item._choices, function(choice) {
                              return _c(
                                "option",
                                {
                                  domProps: {
                                    value: choice.id ? choice.id : choice[0]
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(
                                        choice.name ? choice.name : choice[1]
                                      ) +
                                      "\n              "
                                  )
                                ]
                              )
                            }),
                            0
                          )
                        : item.widget === "select_multiple"
                        ? _c(
                            "select",
                            {
                              staticClass: "form-control",
                              class: { "is-invalid": _vm.errors[key] },
                              attrs: {
                                name: key,
                                multiple: "",
                                disabled: item.disabled
                              }
                            },
                            _vm._l(item._choices, function(choice) {
                              return _c(
                                "option",
                                { domProps: { value: item.id } },
                                [
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(choice.name) +
                                      "\n              "
                                  )
                                ]
                              )
                            }),
                            0
                          )
                        : item.widget === "checkbox"
                        ? _c(
                            "label",
                            {
                              staticClass:
                                "mr-1 c-switch form-check-label c-switch-primary ml-5"
                            },
                            [
                              _c("input", {
                                staticClass: "c-switch-input form-check-input",
                                class: { "is-invalid": _vm.errors[key] },
                                attrs: {
                                  type: "checkbox",
                                  name: key,
                                  disabled: item.disabled
                                }
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "c-switch-slider" })
                            ]
                          )
                        : item.widget === "date"
                        ? _c("input", {
                            staticClass: "form-control",
                            class: { "is-invalid": _vm.errors[key] },
                            attrs: {
                              name: key,
                              type: "date",
                              maxlength: item.max_length,
                              disabled: item.disabled
                            }
                          })
                        : item.widget === "datetime"
                        ? _c("input", {
                            staticClass: "form-control",
                            class: { "is-invalid": _vm.errors[key] },
                            attrs: {
                              name: key,
                              type: "datetime-local",
                              maxlength: item.max_length,
                              disabled: item.disabled
                            }
                          })
                        : item.widget === "textarea"
                        ? _c(
                            "div",
                            { class: { "is-invalid": _vm.errors[key] } },
                            [
                              _c("quill-editor", {
                                model: {
                                  value: _vm.editor,
                                  callback: function($$v) {
                                    _vm.editor = $$v
                                  },
                                  expression: "editor"
                                }
                              }),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.editor,
                                    expression: "editor"
                                  }
                                ],
                                attrs: { type: "hidden", name: key },
                                domProps: { value: _vm.editor },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.editor = $event.target.value
                                  }
                                }
                              })
                            ],
                            1
                          )
                        : item.widget === "image"
                        ? _c("input", {
                            staticClass: "form-control",
                            class: { "is-invalid": _vm.errors[key] },
                            attrs: {
                              accept: "image/*",
                              type: "file",
                              name: key
                            }
                          })
                        : _vm._e()
                    ]
                  )
                }),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-success float-right mt-2",
                    attrs: { disabled: _vm.loading }
                  },
                  [_vm._v("Submit")]
                )
              ],
              2
            )
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);