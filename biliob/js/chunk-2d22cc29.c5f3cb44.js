(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22cc29"],{f537:function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("VContainer",[e("VRow",{attrs:{dense:""}},[e("VCol",{attrs:{cols:"12"}},[e("VExpansionPanels",{attrs:{tile:""}},[e("VExpansionPanel",[e("VExpansionPanelHeader",{staticClass:"primary--text px-4"},[e("h3",[e("VIcon",{attrs:{color:"primary",left:""}},[t._v(" mdi-account-group ")]),t._v("UP主群组 / GROUP ")],1)]),e("VExpansionPanelContent",{staticClass:"px-0"},[e("VRow",{attrs:{dense:""}},[e("VCol",[e("h4",[t._v("UP主群组系统简介")])])],1),e("VRow",{attrs:{dense:""}},[e("VCol",{staticClass:"body-2"},[t._v(" - 聚合统计一些相关的UP主信息。"),e("br"),t._v(" - 头衔达到追寻者及以上即可添加群组"),e("br"),t._v(" - 收藏群组需要1积分"),e("br"),t._v(" - 被收藏能够增加0.5积分"),e("br"),t._v(" - 添加群组目前需要20点积分 "),e("h5",[t._v("待完成功能：")]),t._v(" - 维护权转交"),e("br"),t._v(" - 编辑者任命"),e("br"),t._v(" - 修改记录追踪"),e("br"),t._v(" - 查看收藏的群组列表"),e("br"),t._v(" - 设置群组列表为私有"),e("br"),t._v(" - 群组内聚合统计 ")])],1),e("VRow",{attrs:{dense:""}},[e("VSpacer"),e("VCol",{staticClass:"body-2",attrs:{cols:"auto"}},[e("VBtn",{attrs:{disabled:-1==["管理者","观测者","追寻者","观想者"].indexOf(t.$db.user.title),large:"",color:"primary"},on:{click:function(a){t.createDialog=!0}}},[e("VIcon",{attrs:{left:""}},[t._v(" mdi-account-multiple-plus ")]),t._v(" "+t._s(-1==["管理者","观测者","追寻者","观想者"].indexOf(t.$db.user.title)?"创建群组需要用户等级达到「追寻者」":"创建新群组")+" ")],1),e("VDialog",{attrs:{"max-width":"800px"},model:{value:t.createDialog,callback:function(a){t.createDialog=a},expression:"createDialog"}},[e("VCard",[e("VCardTitle",[t._v("创建新群组")]),e("VCardText",[e("BiliobAuthorGroupInfoForm",{on:{groupInfoSubmit:t.groupCreated}})],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),e("VRow",{attrs:{dense:""}},[e("VCol",[e("VTextField",{attrs:{solo:"",label:"输入关键词开始探索","hide-details":""},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.search(a)}},model:{value:t.searchWord,callback:function(a){t.searchWord=a},expression:"searchWord"}})],1),e("VCol",{staticClass:"align-self-center",attrs:{cols:"auto"}},[e("VBtn",{attrs:{color:"primary",large:""},on:{click:t.search}},[e("VIcon",{attrs:{left:""}},[t._v(" mdi-send ")]),t._v(" 搜索 ")],1)],1)],1),e("VSlideYTransition",[0==t.loaded?e("VRow",{attrs:{dense:""}},[e("VCol",[e("VSkeletonLoader",{staticClass:"elevation-1",attrs:{type:"card"}})],1)],1):e("VRow",{attrs:{dense:""}},t._l(t.$db.author.group.list[""+t.page+t.searchWord],(function(t,a){return e("VCol",{key:a,attrs:{cols:"12",lg:"6"}},[e("BiliobAuthorGroupInfoCard",{staticStyle:{height:"100%"},attrs:{"author-group":t}})],1)})),1)],1),t.none?e("VRow",{attrs:{dense:""}},[e("VCol",{attrs:{cols:"12"}},[e("VCard",[e("VCardText",[t._v("没有数据")])],1)],1)],1):t._e(),t.loaded&&!t.none?e("VRow",{attrs:{dense:""}},[e("VCol",{attrs:{cols:"6"}},[e("VBtn",{attrs:{disabled:1==t.page,outlined:"",color:"primary",block:""},on:{click:function(a){a.stopPropagation(),t.page--,t.$router.push({query:{page:t.page}})}}},[t._v(" 上一页 ")])],1),e("VCol",{attrs:{cols:"6"}},[e("VBtn",{attrs:{outlined:"",color:"primary",block:""},on:{click:function(a){a.stopPropagation(),t.page++,t.$router.push({query:{page:t.page}})}}},[t._v(" 下一页 ")])],1)],1):t._e()],1)},r=[],n=(e("99af"),{data:function(){return{page:void 0==this.$route.query.page?1:this.$route.query.page,searchWord:"",loaded:!1,createDialog:!1,none:!0}},watch:{page:function(){this.getData()},"this.$route.query.page":function(){void 0!=this.$route.query.page&&(this.page=this.$route.query.page)}},mounted:function(){this.getData()},methods:{search:function(){this.page=1,this.$route.query.page=1,this.getData()},groupCreated:function(){this.createDialog=!1},getData:function(){var t=this;this.loaded=!1,this.none=!1,void 0==this.$route.query.page&&this.$router.push({query:{page:1}}),void 0==this.$db.author.group.list["".concat(this.$route.query.page).concat(this.searchWord)]?this.axios.get("/author/group?p=".concat(this.$route.query.page,"&kw=").concat(this.searchWord)).then((function(a){t.$db.author.group.list["".concat(t.$route.query.page).concat(t.searchWord)]=a.data,t.loaded=!0,0==a.data.length&&(t.none=!0)})):this.loaded=!0}}}),s=n,i=e("2877"),l=e("6544"),c=e.n(l),d=e("8336"),u=e("b0af"),p=e("99d9"),h=e("62ad"),V=e("a523"),g=e("169a"),f=e("cd55"),C=e("49e2"),v=e("c865"),b=e("0393"),_=e("132d"),y=e("0fd9"),x=e("3129"),k=e("0789"),w=e("2fa4"),$=e("8654"),m=Object(i["a"])(s,o,r,!1,null,null,null);a["default"]=m.exports;c()(m,{VBtn:d["a"],VCard:u["a"],VCardText:p["b"],VCardTitle:p["c"],VCol:h["a"],VContainer:V["a"],VDialog:g["a"],VExpansionPanel:f["a"],VExpansionPanelContent:C["a"],VExpansionPanelHeader:v["a"],VExpansionPanels:b["a"],VIcon:_["a"],VRow:y["a"],VSkeletonLoader:x["a"],VSlideYTransition:k["h"],VSpacer:w["a"],VTextField:$["a"]})}}]);