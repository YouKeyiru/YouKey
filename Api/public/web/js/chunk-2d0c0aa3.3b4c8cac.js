(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c0aa3"],{"436d":function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"login_con"},[i("h2",{staticClass:"titleh1"},[e._v(e._s(e.$t("reg[6]")))]),e.single?i("section",{staticClass:"frommain"},[i("div",{staticClass:"fromcont"},[i("el-form",{ref:"ruleForm",attrs:{"label-position":"top","label-width":"80px",rules:e.rules,model:e.formLabelAlign}},[i("el-form-item",{attrs:{label:e.$t("mobile[1]"),prop:"email"}},[i("el-input",{attrs:{placeholder:e.$t("mobile[2]")},model:{value:e.formLabelAlign.email,callback:function(t){e.$set(e.formLabelAlign,"email",t)},expression:"formLabelAlign.email"}})],1)],1),i("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.nextstep}},[e._v(e._s(e.$t("mobile[3]")))])],1),i("div",{staticClass:"resetpassword"},[i("router-link",{attrs:{to:"phonepassword"}},[e._v(e._s(e.$t("mobile[12]")))])],1)]):i("section",{staticClass:"frommain"},[i("div",{staticClass:"fromcont"},[i("el-form",{ref:"ruleForm1",attrs:{"label-position":"top","label-width":"80px",rules:e.rules1,model:e.formLabelAlign}},[i("el-form-item",{attrs:{label:e.$t("mobile[4]"),prop:"password"}},[i("el-input",{attrs:{placeholder:e.$t("mobile[5]"),"show-password":""},model:{value:e.formLabelAlign.password,callback:function(t){e.$set(e.formLabelAlign,"password",t)},expression:"formLabelAlign.password"}})],1),i("el-form-item",{attrs:{label:e.$t("mobile[6]"),prop:"password_confirmation"}},[i("el-input",{attrs:{placeholder:e.$t("reg[5]"),"show-password":""},model:{value:e.formLabelAlign.password_confirmation,callback:function(t){e.$set(e.formLabelAlign,"password_confirmation",t)},expression:"formLabelAlign.password_confirmation"}})],1),i("el-form-item",{attrs:{label:e.$t("mobile[9]"),prop:"code"}},[i("el-input",{attrs:{placeholder:e.$t("mobile[10]")},model:{value:e.formLabelAlign.v_code,callback:function(t){e.$set(e.formLabelAlign,"v_code",t)},expression:"formLabelAlign.v_code"}},[i("template",{slot:"append"},[i("el-button",{on:{click:function(t){return e.Verificationfun()}}},[e._v(e._s(e.Verification.text))])],1)],2)],1)],1),i("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){return e.handleSubmit()}}},[e._v(e._s(e.$t("mobile[11]")))]),i("div",{staticClass:"resetpassword"},[i("router-link",{attrs:{to:"phonepassword"}},[e._v(e._s(e.$t("mobile[12]")))])],1)],1)])])},o=[],a=i("c24f"),l=i("c276"),n={name:"login",data:function(){var e=this,t=function(t,i,r){""===i?r(new Error(e.$t("mobile[13]"))):Object(l["a"])(i)?e.$public.email(i)?r():r(new Error(e.$t("reg[10]"))):e.$public.phone(i)?r():r(new Error(e.$t("reg[11]")))},i=function(t,i,r){""===i?r(new Error(e.$t("reg[12]"))):e.$public.pwds(i)?r():r(new Error(e.$t("reg[13]")))},r=function(t,i,r){""===i?r(new Error(e.$t("reg[12]"))):i!==e.formLabelAlign.password?r(new Error(e.$t("mobile[14]"))):r()};return{formLabelAlign:{email:"",password:"",password_confirmation:"",v_code:""},single:!0,Displaycharacter:"",Verification:{text:this.$t("reg[0]"),time:60,type:!0,timer:""},rules:{email:[{validator:t,trigger:"blur"}]},rules1:{password:[{validator:i,trigger:"blur"}],password_confirmation:[{validator:r,trigger:"blur"}],code:[]}}},methods:{handleSubmit:function(){var e=this;this.$refs["ruleForm1"].validate((function(t){if(!t)return!1;e.formLabelAlign;Object(a["e"])(Object(l["c"])(e.formLabelAlign)).then((function(t){200==t.data.status_code?(e.$message({message:e.$t("mobile[16]"),type:"success"}),setTimeout((function(){e.$router.push({path:"/login"})}),800)):e.$message.error(t.data.message)})).catch((function(t){e.$message.error(t.msg)}))}))},nextstep:function(){var e=this;this.$refs["ruleForm"].validate((function(t){if(!t)return!1;e.single=!1,e.Displaycharacter=Object(l["b"])(e.formLabelAlign.email)}))},Verificationfun:function(){if(!this.Verification.type)return!1;var e={type:"2",phone:this.formLabelAlign.email};this.$public.captcha(e,this)},typecaptcha:function(){var e=this;this.Verification.type=!1,this.Verification.timer=setInterval((function(){e.Verification.time--,e.Verification.time<1?(clearInterval(e.Verification.timer),e.Verification.type=!0,e.Verification.time=60,e.Verification.text=e.$t("reg[1]")):e.Verification.text=e.Verification.time+"S"}),1e3)}},beforeEach:function(e,t,i){clearInterval(this.Verification.timer),i()}},s=n,c=i("2877"),m=Object(c["a"])(s,r,o,!1,null,null,null);t["default"]=m.exports}}]);