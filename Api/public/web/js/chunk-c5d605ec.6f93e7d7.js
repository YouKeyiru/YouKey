(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c5d605ec"],{"01ca":function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pagination"},[s("el-pagination",{attrs:{layout:"prev, pager, next",total:t.content.total,"current-page":t.content.current_page,"page-size":15},on:{"current-change":t.change}})],1)},i=[],o={name:"newsflashdetails",props:["content"],data:function(){return{}},methods:{change:function(t){console.log(t);var e={page:t};this.$emit("func",e)}}},n=o,a=s("2877"),c=Object(a["a"])(n,r,i,!1,null,null,null),u=c.exports;e["a"]=u},ae40:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"securitycenterheader"},[s("h2",{staticClass:"headertile"},[t._v(t._s(t.$t("header.tishi[5]")))]),s("ul",{staticClass:"conit"},[s("li",{staticClass:"list",class:{acvte:1==t.content}},[s("router-link",{attrs:{to:"securitycenter"}},[t._v(t._s(t.$t("header.tishi[4]")))])],1),s("li",{staticClass:"list",class:{acvte:2==t.content}},[s("router-link",{attrs:{to:"authentication"}},[t._v(t._s(t.$t("header.route[7]")))])],1),s("li",{staticClass:"list",class:{acvte:3==t.content}},[s("router-link",{attrs:{to:"payways"}},[t._v(t._s(t.$t("header.add[9]")))])],1)])])},i=[],o={name:"securitycenterheader",props:["content"],data:function(){return{}},methods:{}},n=o,a=s("2877"),c=Object(a["a"])(n,r,i,!1,null,null,null),u=c.exports;e["a"]=u},ce0a:function(t,e,s){"use strict";s.d(e,"f",(function(){return i})),s.d(e,"d",(function(){return o})),s.d(e,"g",(function(){return n})),s.d(e,"c",(function(){return a})),s.d(e,"h",(function(){return c})),s.d(e,"b",(function(){return u})),s.d(e,"a",(function(){return l})),s.d(e,"e",(function(){return f}));var r=s("66df"),i=function(t){return r["a"].request({url:"/api/user/set_phone",method:"post",fromdata:!0,data:t})},o=function(t){return r["a"].request({url:"/api/user/set_email",method:"post",fromdata:!0,data:t})},n=function(t){return r["a"].request({url:"/api/user/modify_login_pwd",method:"post",fromdata:!0,data:t})},a=function(t){return r["a"].request({url:"/api/user/set_pay_pwd",method:"post",fromdata:!0,data:t})},c=function(t){return r["a"].request({url:"/api/user/reset_pay_pwd",method:"post",fromdata:!0,data:t})},u=function(t){return r["a"].request({url:"/api/google/create",method:"get",fromdata:!0,params:t})},l=function(t){return r["a"].request({url:"/api/google/bind",method:"post",fromdata:!0,data:t})},f=function(t){return r["a"].request({url:"/api/google/update_status",method:"post",fromdata:!0,data:t})}},e910:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"securitycenter"},[s("PersonalHeader",{attrs:{content:1}}),s("section",{staticClass:"securitycentermain"},[s("section",{staticClass:"type"},[s("h2",{staticClass:"title"},[t._v(t._s(t.$t("user[0]")))]),s("ul",{staticClass:"contt"},[s("li",{staticClass:"list"},[s("p",{staticClass:"one"},[t._v(t._s(t.$t("user[1]")))]),t._m(0),s("p",{staticClass:"three"},[t._v("\n            "+t._s(t.$t("user[2]"))+"\n            "),s("span",{staticStyle:{"margin-left":"15px"}}),0==t.userInfo.security_level?s("el-button",{attrs:{type:"primary",size:"mini",round:""}},[t._v(t._s(t.$t("user[3]")))]):s("el-button",{attrs:{size:"mini",round:""}},[t._v(t._s(t.$t("user[3]")))]),1==t.userInfo.security_level?s("el-button",{attrs:{type:"primary",size:"mini",round:""}},[t._v(t._s(t.$t("user[4]")))]):s("el-button",{attrs:{size:"mini",round:""}},[t._v(t._s(t.$t("user[4]")))]),2==t.userInfo.security_level?s("el-button",{attrs:{type:"primary",size:"mini",round:""}},[t._v(t._s(t.$t("user[5]")))]):s("el-button",{attrs:{size:"mini",round:""}},[t._v(t._s(t.$t("user[5]")))]),3==t.userInfo.security_level?s("el-button",{attrs:{type:"primary",size:"mini",round:""}},[t._v(t._s(t.$t("user[6]")))]):s("el-button",{attrs:{size:"mini",round:""}},[t._v(t._s(t.$t("user[6]")))])],1),s("p",{staticClass:"four"},[s("a",{on:{click:function(e){return t.change_router("syloginpassword")}}},[t._v(t._s(t.$t("user[7]")))])])]),s("li",{staticClass:"list"},[s("p",{staticClass:"one"},[t._v(t._s(t.$t("user[8]")))]),s("p",{staticClass:"two"},[s("i",{class:{"el-icon-error":0==t.userInfo.phone_bind,"el-icon-success":1==t.userInfo.phone_bind}})]),s("p",{staticClass:"three"},[t._v(t._s(t.$t("user[9]")))]),s("p",{staticClass:"four"},[0==t.userInfo.phone_bind?s("a",{on:{click:function(e){return t.change_router("syphone")}}},[t._v(t._s(t.$t("user[10]")))]):t._e()])]),s("li",{staticClass:"list"},[s("p",{staticClass:"one"},[t._v(t._s(t.$t("user[11]")))]),s("p",{staticClass:"two"},[s("i",{class:{"el-icon-error":0==t.userInfo.email_bind,"el-icon-success":1==t.userInfo.email_bind}})]),s("p",{staticClass:"three"},[t._v(t._s(t.$t("user[12]")))]),s("p",{staticClass:"four"},[0==t.userInfo.email_bind?s("a",{on:{click:function(e){return t.change_router("syemail")}}},[t._v(t._s(t.$t("user[13]")))]):t._e()])]),s("li",{staticClass:"list"},[s("p",{staticClass:"one"},[t._v(t._s(t.$t("user[14]")))]),s("p",{staticClass:"two"},[s("i",{class:{"el-icon-error":0==t.userInfo.payment_password_set,"el-icon-success":1==t.userInfo.payment_password_set}})]),s("p",{staticClass:"three"},[t._v(t._s(t.$t("user[15]")))]),s("p",{staticClass:"four"},[0==t.userInfo.payment_password_set?s("a",{on:{click:function(e){return t.change_router("sycapitalpassword")}}},[t._v(t._s(t.$t("order[17]")))]):s("a",{on:{click:function(e){return t.change_router("sycapitalpasswordmodify")}}},[t._v(t._s(t.$t("user[16]")))])])]),s("li",{staticClass:"list"},[s("p",{staticClass:"one"},[t._v(t._s(t.$t("reg[15]")))]),s("p",{staticClass:"two"},[s("i",{class:{"el-icon-error":0==t.userInfo.google_bind,"el-icon-success":1==t.userInfo.google_bind}})]),s("p",{staticClass:"three"},[t._v(t._s(t.$t("user[17]")))]),s("p",{staticClass:"four"},[0==t.userInfo.google_bind?s("a",{on:{click:function(e){return t.change_router("sygoogle")}}},[t._v(t._s(t.$t("user[18]")))]):1==t.userInfo.google_verify?s("a",{on:{click:function(e){t.dialogVisible=!0}}},[t._v(t._s(t.$t("contract[15]")))]):0==t.userInfo.google_verify?s("a",{on:{click:function(e){t.dialogVisible=!0}}},[t._v(t._s(t.$t("user[19]")))]):t._e()])])])]),s("el-dialog",{attrs:{title:t.$t("user[20]"),visible:t.dialogVisible,width:"30%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[s("div",[s("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm,"status-icon":"",rules:t.rules,"label-width":"100px"}},[s("el-form-item",{attrs:{label:t.$t("user[21]"),prop:"google_code"}},[s("el-input",{model:{value:t.ruleForm.google_code,callback:function(e){t.$set(t.ruleForm,"google_code",e)},expression:"ruleForm.google_code"}})],1),s("el-form-item",{attrs:{label:t.$t("user[22]"),prop:"code"}},[s("el-input",{model:{value:t.ruleForm.code,callback:function(e){t.$set(t.ruleForm,"code",e)},expression:"ruleForm.code"}},[s("template",{slot:"append"},[s("el-button",{on:{click:function(e){return t.Verificationfun()}}},[t._v(t._s(t.Verification.text))])],1)],2)],1)],1)],1),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{size:"medium",round:""},on:{click:function(e){t.dialogVisible=!1}}},[t._v(t._s(t.$t("order2[15]")))]),s("el-button",{attrs:{type:"primary",size:"medium",round:""},on:{click:t.googleVerifyStartclick}},[t._v(t._s(t.$t("order2[16]")))])],1)]),t._e()],1)],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"two"},[s("i",{staticClass:"el-icon-success"})])}],o=(s("8e6e"),s("ac6a"),s("456d"),s("bd86")),n=(s("c24f"),s("ce0a")),a=s("01ca"),c=s("ae40"),u=s("2f62");function l(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function f(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?l(Object(s),!0).forEach((function(e){Object(o["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var d={name:"securitycenter",data:function(){return{loginHistorydata:"",userInfo:"",changedata:{page:"1"},dialogVisible:!1,ruleForm:{google_code:"",key:"",code:""},rules:{google_code:[{required:!0,message:this.$t("user[30]"),trigger:"blur"}],code:[{required:!0,message:this.$t("user[31]"),trigger:"blur"}]},Verification:{text:this.$t("reg[0]"),time:60,type:!0,timer:""}}},methods:f({},Object(u["b"])(["getUserInfo"]),{getMsgFormSon:function(t){this.changedata=t},change_router:function(t){"sygoogle"!=t&&"syloginpassword"!=t&&"sycapitalpassword"!=t||1==this.userInfo.phone_bind?this.$router.push({path:t}):this.$message.error("请先绑定手机号")},handleClose:function(){this.dialogVisible=!1,clearInterval(this.Verification.timer),this.Verification.type=!0,this.Verification.time=60,this.Verification.text=this.$t("reg[0]"),this.$refs["ruleForm"].resetFields()},googleVerifyStartclick:function(){var t=this;this.$refs["ruleForm"].validate((function(e){e&&(t.ruleForm.key=1==t.userInfo.google_verify?"stop":"start",Object(n["e"])(t.ruleForm).then((function(e){200==e.data.status_code?(t.handleClose(),t.$message({message:t.$t("user[32]"),type:"success"}),setTimeout((function(){1===t.userInfo.google_verify?t.userInfo.google_verify=0:t.userInfo.google_verify=1}),800)):t.$message.error(e.data.message)})).catch((function(t){})))}))},Verificationfun:function(){if(!this.Verification.type)return!1;var t={type:"4",phone:this.$store.state.user.phone?this.$store.state.user.phone:this.$store.state.user.email};this.$public.captcha(t,this)},typecaptcha:function(){var t=this;this.Verification.type=!1,this.Verification.timer=setInterval((function(){t.Verification.time--,t.Verification.time<1?(clearInterval(t.Verification.timer),t.Verification.type=!0,t.Verification.time=60,t.Verification.text=t.$t("reg[1]")):t.Verification.text=t.Verification.time+"S"}),1e3)}}),created:function(){var t=this;this.getUserInfo().then((function(e){t.userInfo=e.config})).catch((function(t){}))},beforeEach:function(t,e,s){clearInterval(this.Verification.timer),s()},components:{PagesSize:a["a"],PersonalHeader:c["a"]}},p=d,_=s("2877"),g=Object(_["a"])(p,r,i,!1,null,null,null);e["default"]=g.exports}}]);