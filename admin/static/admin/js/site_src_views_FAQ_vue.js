(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["site_src_views_FAQ_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/components/FAQ/MiniCard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/components/FAQ/MiniCard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "MiniCard",
  data: function data() {
    return {
      active: false
    };
  },
  props: {
    description: String,
    title: String
  },
  methods: {
    activate: function activate() {
      this.active = !this.active;
    }
  },
  computed: {}
});

/***/ }),

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/views/FAQ.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/views/FAQ.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_FAQ_MiniCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/FAQ/MiniCard */ "./site/src/components/FAQ/MiniCard.vue");
/* harmony import */ var _Ask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ask */ "./site/src/views/Ask.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'FAQ',
  components: {
    Faq: _components_FAQ_MiniCard__WEBPACK_IMPORTED_MODULE_0__.default,
    Ask: _Ask__WEBPACK_IMPORTED_MODULE_1__.default
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/components/FAQ/MiniCard.vue?vue&type=style&index=0&id=3abf8c14&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/components/FAQ/MiniCard.vue?vue&type=style&index=0&id=3abf8c14&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "\nli[data-v-3abf8c14] {\r\n    transition: max-height 0.25s ease-in;\n}\n.accordion-content[data-v-3abf8c14] {\r\n  transition: max-height 0.25s ease-in;\n}\r\n\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./site/src/components/FAQ/MiniCard.vue":
/*!**********************************************!*\
  !*** ./site/src/components/FAQ/MiniCard.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MiniCard_vue_vue_type_template_id_3abf8c14_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MiniCard.vue?vue&type=template&id=3abf8c14&scoped=true& */ "./site/src/components/FAQ/MiniCard.vue?vue&type=template&id=3abf8c14&scoped=true&");
/* harmony import */ var _MiniCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MiniCard.vue?vue&type=script&lang=js& */ "./site/src/components/FAQ/MiniCard.vue?vue&type=script&lang=js&");
/* harmony import */ var _MiniCard_vue_vue_type_style_index_0_id_3abf8c14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MiniCard.vue?vue&type=style&index=0&id=3abf8c14&scoped=true&lang=css& */ "./site/src/components/FAQ/MiniCard.vue?vue&type=style&index=0&id=3abf8c14&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _MiniCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _MiniCard_vue_vue_type_template_id_3abf8c14_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _MiniCard_vue_vue_type_template_id_3abf8c14_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3abf8c14",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "site/src/components/FAQ/MiniCard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

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

/***/ "./site/src/views/FAQ.vue":
/*!********************************!*\
  !*** ./site/src/views/FAQ.vue ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FAQ_vue_vue_type_template_id_7dbd5ca0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FAQ.vue?vue&type=template&id=7dbd5ca0&scoped=true& */ "./site/src/views/FAQ.vue?vue&type=template&id=7dbd5ca0&scoped=true&");
/* harmony import */ var _FAQ_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FAQ.vue?vue&type=script&lang=js& */ "./site/src/views/FAQ.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _FAQ_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _FAQ_vue_vue_type_template_id_7dbd5ca0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _FAQ_vue_vue_type_template_id_7dbd5ca0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7dbd5ca0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "site/src/views/FAQ.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./site/src/components/FAQ/MiniCard.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./site/src/components/FAQ/MiniCard.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MiniCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MiniCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/components/FAQ/MiniCard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MiniCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./site/src/views/FAQ.vue?vue&type=script&lang=js&":
/*!*********************************************************!*\
  !*** ./site/src/views/FAQ.vue?vue&type=script&lang=js& ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FAQ_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FAQ.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/views/FAQ.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FAQ_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./site/src/components/FAQ/MiniCard.vue?vue&type=template&id=3abf8c14&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./site/src/components/FAQ/MiniCard.vue?vue&type=template&id=3abf8c14&scoped=true& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MiniCard_vue_vue_type_template_id_3abf8c14_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MiniCard_vue_vue_type_template_id_3abf8c14_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MiniCard_vue_vue_type_template_id_3abf8c14_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MiniCard.vue?vue&type=template&id=3abf8c14&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/components/FAQ/MiniCard.vue?vue&type=template&id=3abf8c14&scoped=true&");


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

/***/ "./site/src/views/FAQ.vue?vue&type=template&id=7dbd5ca0&scoped=true&":
/*!***************************************************************************!*\
  !*** ./site/src/views/FAQ.vue?vue&type=template&id=7dbd5ca0&scoped=true& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FAQ_vue_vue_type_template_id_7dbd5ca0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FAQ_vue_vue_type_template_id_7dbd5ca0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FAQ_vue_vue_type_template_id_7dbd5ca0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FAQ.vue?vue&type=template&id=7dbd5ca0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/views/FAQ.vue?vue&type=template&id=7dbd5ca0&scoped=true&");


/***/ }),

/***/ "./site/src/components/FAQ/MiniCard.vue?vue&type=style&index=0&id=3abf8c14&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./site/src/components/FAQ/MiniCard.vue?vue&type=style&index=0&id=3abf8c14&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MiniCard_vue_vue_type_style_index_0_id_3abf8c14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src/index.js??clonedRuleSet-8[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MiniCard.vue?vue&type=style&index=0&id=3abf8c14&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/components/FAQ/MiniCard.vue?vue&type=style&index=0&id=3abf8c14&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MiniCard_vue_vue_type_style_index_0_id_3abf8c14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MiniCard_vue_vue_type_style_index_0_id_3abf8c14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MiniCard_vue_vue_type_style_index_0_id_3abf8c14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MiniCard_vue_vue_type_style_index_0_id_3abf8c14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/components/FAQ/MiniCard.vue?vue&type=template&id=3abf8c14&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/components/FAQ/MiniCard.vue?vue&type=template&id=3abf8c14&scoped=true& ***!
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
  return _c("li", { staticClass: "accordion-item" }, [
    _c(
      "a",
      {
        staticClass: "accordion-title",
        class: { active: _vm.active },
        staticStyle: { cursor: "pointer" },
        on: {
          click: function($event) {
            $event.stopPropagation()
            return _vm.activate($event)
          }
        }
      },
      [
        _c("i", { staticClass: "bx bx-chevron-down" }),
        _vm._v("\n    " + _vm._s(_vm.title) + "\n  ")
      ]
    ),
    _vm._v(" "),
    _c("p", { staticClass: "accordion-content", class: { show: _vm.active } }, [
      _vm._v(_vm._s(_vm.description))
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/views/FAQ.vue?vue&type=template&id=7dbd5ca0&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/views/FAQ.vue?vue&type=template&id=7dbd5ca0&scoped=true& ***!
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
  return _c("div", { staticClass: "mt-5" }, [
    _c("section", { staticClass: "faq-area ptb-100" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "section-title" }, [
          _c("span", [_vm._v(_vm._s(_vm.$t("FAQ")))]),
          _vm._v(" "),
          _c("h2", [_vm._v(_vm._s(_vm.$t("users answered questions")))])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-8" }, [
            _c("div", { staticClass: "faq-accordion" }, [
              _c(
                "ul",
                { staticClass: "accordion" },
                [
                  _c("Faq", {
                    attrs: {
                      title: "سوالات متداول 1؟",
                      description:
                        "لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است."
                    }
                  }),
                  _vm._v(" "),
                  _c("Faq", {
                    attrs: {
                      title: "سوالات متداول 1؟",
                      description:
                        "لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است."
                    }
                  }),
                  _vm._v(" "),
                  _c("Faq", {
                    attrs: {
                      title: "سوالات متداول 1؟",
                      description:
                        "لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است."
                    }
                  }),
                  _vm._v(" "),
                  _c("Faq", {
                    attrs: {
                      title: "سوالات متداول 1؟",
                      description:
                        "لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است."
                    }
                  }),
                  _vm._v(" "),
                  _c("Faq", {
                    attrs: {
                      title: "سوالات متداول 1؟",
                      description:
                        "لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است."
                    }
                  })
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _vm._m(0)
        ])
      ])
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "faq-contact-area pb-100" }, [
      _c("div", { staticClass: "container" }, [_c("Ask")], 1)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-4" }, [
      _c("div", { staticClass: "faq-img" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/components/FAQ/MiniCard.vue?vue&type=style&index=0&id=3abf8c14&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/components/FAQ/MiniCard.vue?vue&type=style&index=0&id=3abf8c14&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src/index.js??clonedRuleSet-8[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MiniCard.vue?vue&type=style&index=0&id=3abf8c14&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./site/src/components/FAQ/MiniCard.vue?vue&type=style&index=0&id=3abf8c14&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("1a1fa37c", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);