(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[705],{59034:(t,a,e)=>{"use strict";e.d(a,{Z:()=>i});var s=e(23645),n=e.n(s)()((function(t){return t[1]}));n.push([t.id,".table-dark[data-v-9671540a]{color:#fff;background:transparent}.table-light[data-v-9671540a]{color:#00f;background:transparent}",""]);const i=n},70705:(t,a,e)=>{"use strict";e.r(a),e.d(a,{default:()=>d});const s={name:"Table",props:{items:Array,fields:Array,actions:Object,caption:{type:String,default:"Table"},hover:Boolean,striped:Boolean,border:Boolean,small:Boolean,fixed:Boolean,dark:Boolean},methods:{warning:function(t){var a=this;this.$swal.fire({title:"Delete this instance?",showCancelButton:!0,icon:"warning",confirmButtonText:"DELETE",confirmButtonColor:"red",cancelButtonText:"Go back"}).then((function(e){e.isConfirmed&&a.delete(t)}))},delete:function(t){var a=this;this.$axios.post("/admin-api/".concat(this.$route.params.app,"/").concat(t.id,"/delete/")).then((function(e){var s=a.items.indexOf(t);a.items.splice(s,1),a.$toasted.global.action_completed()}))}}};var n=e(93379),i=e.n(n),o=e(59034),r={insert:"head",singleton:!1};i()(o.Z,r);o.Z.locals;var l=e(51900);const c={name:"Index",data:function(){return{fields:[],data:[],actions:{}}},components:{Table:(0,l.Z)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("CCardBody",[e("CDataTable",{attrs:{hover:t.hover,striped:t.striped,border:t.border,small:t.small,fixed:t.fixed,items:t.items,fields:t.fields,"items-per-page":t.small?10:5,dark:t.dark,pagination:""},scopedSlots:t._u([{key:"actions",fn:function(a){var s=a.item;return[e("td",[t.actions.change?e("router-link",{staticClass:"mr-1",class:t.dark?"table-dark":"table-light",attrs:{to:s.id+"/change/"}},[e("i",{staticClass:"far fa-edit"})]):t._e(),t._v(" "),t.actions.delete?e("span",{class:t.dark?"table-dark":"table-light",staticStyle:{cursor:"pointer"},on:{click:function(a){return t.warning(s)}}},[e("i",{staticClass:"fas fa-trash"})]):t._e()],1)]}}])})],1)}),[],!1,null,"9671540a",null).exports},methods:{getApp:function(){var t=this;this.$isLoading(!0),this.$axios.get("/admin-api/"+this.$route.params.app+"/").then((function(a){t.actions=a.data.actions,a.data.data&&(t.data=Object.values(a.data.data),t.fields=Object.keys(a.data.data[0]).concat(["actions"]))})).catch((function(t){})),t.$isLoading(!1)}},mounted:function(){this.getApp()}};const d=(0,l.Z)(c,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("CCard",[e("h3",{staticClass:"m-3"},[e("i",{staticClass:"fas fa-list-alt mr-2"}),t._v("\n    "+t._s(t.$route.params.app[0].toUpperCase()+t.$route.params.app.slice(1)))]),t._v(" "),e("router-link",{staticClass:"btn btn-success col-1 ml-auto mr-2",attrs:{to:"add/"}},[t._v("Add")]),t._v(" "),t.fields?e("Table",{attrs:{fields:t.fields,items:t.data,striped:"",caption:t.$route.params.app,actions:t.actions,hover:""}}):t._e()],1)}),[],!1,null,"06b56f40",null).exports}}]);