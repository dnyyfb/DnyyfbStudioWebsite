(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f1030"],{"9f8e":function(t,a,o){"use strict";o.r(a);var n=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("VContainer",[t.loading?o("VRow",{attrs:{dense:""}},[o("VCol",[o("VSkeletonLoader",{staticClass:"elevation-1",attrs:{type:"card"}})],1)],1):t._e(),o("VRow",{attrs:{dense:""}},[t._l(t.$db.favoriteAuthor[t.page],(function(t){return o("VCol",{key:t.mid,attrs:{cols:"12"}},[o("BiliobAuthorInfoCard",{attrs:{author:t}})],1)})),o("VCol",{attrs:{cols:"6"}},[o("VBtn",{attrs:{disabled:0==t.page,color:"primary",block:"",outlined:""},on:{click:function(a){a.stopPropagation(),t.page--}}},[t._v(" 上一页 ")])],1),o("VCol",{attrs:{cols:"6"}},[o("VBtn",{attrs:{disabled:t.last,color:"primary",block:"",outlined:""},on:{click:function(a){a.stopPropagation(),t.page++}}},[t._v(" 下一页 ")])],1)],2)],1)},e=[],r={data:function(){return{loading:!0,page:0,last:!0}},watch:{page:function(){this.loading=!0,this.refreshData()}},mounted:function(){this.refreshData()},methods:{refreshData:function(){var t=this;void 0==this.$db.favoriteAuthor[this.page]?this.axios.get("/user/author?page=".concat(this.page)).then((function(a){t.$db.favoriteAuthor[t.page]=a.data.content,t.last=a.data.last,t.loading=!1})):this.loading=!1}}},i=r,s=o("2877"),l=o("6544"),c=o.n(l),d=o("8336"),u=o("62ad"),h=o("a523"),p=o("0fd9"),f=o("3129"),g=Object(s["a"])(i,n,e,!1,null,null,null);a["default"]=g.exports;c()(g,{VBtn:d["a"],VCol:u["a"],VContainer:h["a"],VRow:p["a"],VSkeletonLoader:f["a"]})}}]);