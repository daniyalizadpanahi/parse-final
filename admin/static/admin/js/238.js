(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[238],{83238:(t,a,e)=>{"use strict";e.r(a),e.d(a,{default:()=>i});const s={name:"Edit",data:function(){return{title:null,form:null,data:null,loading:!1,errors:{}}},methods:{getData:function(){var t=this;this.title=this.$route.params.app,this.$axios.get("/admin-api/".concat(this.title,"/").concat(this.$route.params.id,"/change/")).then((function(a){t.form=a.data.form,t.data=a.data.data}))},submit:function(t){var a=this;this.loading=!0,this.errors={};var e=this;this.$isLoading(!0);var s=new FormData(document.getElementById("form_data"));this.$axios.post("/admin-api/".concat(this.title,"/").concat(this.$route.params.id,"/change/"),s).then((function(t){e.$toasted.global.action_completed(),e.$router.push("/resource/".concat(a.title,"/")),a.$isLoading(!0)})).catch((function(t){Object.keys(t.response.data).forEach((function(a){e.errors[a]=t.response.data,e.$forceUpdate()}))})),e.loading=!1}},mounted:function(){this.getData()}};const i=(0,e(51900).Z)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("CCard",[e("CCardHeader",[e("h4",[e("CIcon",{staticClass:"mr-2",attrs:{name:"cil-pencil"}}),t._v(t._s(t.title))],1)]),t._v(" "),e("CCardBody",[e("form",{attrs:{method:"POST",id:"form_data"},on:{submit:function(a){return a.preventDefault(),t.submit(a)}}},[t._l(t.form,(function(a,s,i){return e("div",{key:i,staticClass:"form-group col-md-8 form-row"},[e("label",{staticClass:"col-form-label"},[t._v(t._s(a.label))]),t._v(" "),"text"===a.widget?e("input",{staticClass:"form-control",class:{"is-invalid":t.errors[s]},attrs:{name:s,type:"text",maxlength:a.max_length,disabled:a.disabled},domProps:{value:t.data[s]}}):"password"===a.widget?e("input",{staticClass:"form-control",class:{"is-invalid":t.errors[s]},attrs:{type:"password",name:s,maxlength:a.max_length,disabled:a.disabled},domProps:{value:t.data[s]}}):"select"===a.widget?e("select",{staticClass:"form-control",class:{"is-invalid":t.errors[s]},attrs:{name:s,disabled:a.disabled},domProps:{value:t.data[s]}},t._l(a._choices,(function(s){return e("option",{domProps:{value:a.id}},[t._v("\n              "+t._s(s.name)+"\n            ")])})),0):"select_multiple"===a.widget?e("select",{staticClass:"form-control",class:{"is-invalid":t.errors[s]},attrs:{name:s,multiple:"",disabled:a.disabled},domProps:{value:t.data[s]}},t._l(a._choices,(function(s){return e("option",{domProps:{value:a.id}},[t._v("\n              "+t._s(s.name)+"\n            ")])})),0):"checkbox"===a.widget?e("label",{staticClass:"mr-1 c-switch form-check-label c-switch-primary ml-5"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.data[s],expression:"data[key]"}],staticClass:"c-switch-input form-check-input",class:{"is-invalid":t.errors[s]},attrs:{type:"checkbox",name:s,disabled:a.disabled},domProps:{checked:Array.isArray(t.data[s])?t._i(t.data[s],null)>-1:t.data[s]},on:{change:function(a){var e=t.data[s],i=a.target,r=!!i.checked;if(Array.isArray(e)){var l=t._i(e,null);i.checked?l<0&&t.$set(t.data,s,e.concat([null])):l>-1&&t.$set(t.data,s,e.slice(0,l).concat(e.slice(l+1)))}else t.$set(t.data,s,r)}}}),t._v(" "),e("span",{staticClass:"c-switch-slider"})]):"date"===a.widget?e("input",{staticClass:"form-control",class:{"is-invalid":t.errors[s]},attrs:{name:s,type:"date",maxlength:a.max_length,disabled:a.disabled},domProps:{value:t.data[s]}}):"datetime"===a.widget?e("input",{staticClass:"form-control",class:{"is-invalid":t.errors[s]},attrs:{name:s,type:"datetime-local",maxlength:a.max_length,disabled:a.disabled},domProps:{value:t.data[s]}}):"image"===a.widget?e("input",{staticClass:"form-control",class:{"is-invalid":t.errors[s]},attrs:{accept:"image/*",type:"file",name:s}}):t._e()])})),t._v(" "),e("button",{staticClass:"btn btn-success float-right mt-2",attrs:{disabled:t.loading}},[t._v("Submit")])],2)])],1)],1)}),[],!1,null,"1648e278",null).exports}}]);