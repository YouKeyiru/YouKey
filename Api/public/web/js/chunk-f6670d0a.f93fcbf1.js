(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f6670d0a"],{"0b47":function(t,a,n){"use strict";n.r(a);var r=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{attrs:{id:"content"}},[r("div",{staticClass:"main"},[r("div",{staticClass:"head"},[t._v(t._s(t.$t("transfer.text1")))]),r("div",{staticClass:"mainBody"},[r("div",{staticClass:"inner"},[r("div",{staticClass:"account"},[r("div",{staticClass:"from"},[r("el-dropdown",{attrs:{trigger:"click"},on:{command:t.fromChange}},[r("span",{staticClass:"el-dropdown-link"},[t._v("\n                "+t._s(t.fromAccount)+"\n                "),r("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.accountList,(function(a,n){return r("el-dropdown-item",{key:n,attrs:{command:a}},[t._v(t._s(a.account_name))])})),1)],1)],1),r("img",{attrs:{src:n("a01a")}}),r("div",{staticClass:"to"},[r("el-dropdown",{attrs:{trigger:"click"},on:{command:t.toChange}},[r("span",{staticClass:"el-dropdown-link"},[t._v("\n                "+t._s(t.toAccount)+"\n                "),r("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.accountList,(function(a,n){return r("el-dropdown-item",{key:n,attrs:{command:a}},[t._v(t._s(a.account_name))])})),1)],1)],1)]),r("div",{staticClass:"num inputBox"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.num,expression:"num"}],attrs:{type:"text",placeholder:t.$t("transfer.text2")},domProps:{value:t.num},on:{input:function(a){a.target.composing||(t.num=a.target.value)}}})]),r("div",{staticClass:"accountInfo"},[r("div",{staticClass:"balance"},[t._v(t._s(t.$t("transfer.text3"))+"："+t._s(t.balance)+"USDT")])]),r("div",{staticClass:"payPassword inputBox"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.payPassword,expression:"payPassword"}],attrs:{type:"password",placeholder:t.$t("transfer.text4")},domProps:{value:t.payPassword},on:{input:function(a){a.target.composing||(t.payPassword=a.target.value)}}})]),r("el-button",{attrs:{type:"primary",loading:t.btnLoding},on:{click:t.submit}},[t._v(t._s(t.$t("transfer.text1")))])],1),r("div",{staticClass:"tip"},[r("h2",[t._v(t._s(t.$t("transfer.text6")))]),r("p",[t._v(t._s(t.$t("transfer.text7")))]),r("p",[t._v(t._s(t.$t("transfer.text8")))])])])])])},e=[],o=n("2a2d"),s=n("c276"),i={data:function(){return{accountList:[],fromAccount:"",fromId:"",toAccount:"",toId:"",num:"",balance:0,payPassword:"",btnLoding:!1,id:"",accountTpye:""}},mounted:function(){var t=this;this.accountTpye=this.$route.query.type-1,this.fromId=this.$route.query.type,this.getlist(),Object(o["m"])().then((function(a){t.id=a.data.data[0].wid}))},methods:{getlist:function(){var t=this;Object(o["a"])().then((function(a){t.accountList=a.data.data,t.fromAccount=t.accountList[t.accountTpye].account_name,t.balance=t.accountList[t.accountTpye].balance}))},fromChange:function(t){if(this.toAccount!=t.account_name){this.fromAccount=t.account_name;for(var a=0;a<this.accountList.length;a++)this.accountList[a].account_name==t.account_name&&(this.balance=this.accountList[a].balance,this.fromId=this.accountList[a].account_id,this.fromAccount=this.accountList[a].account_name)}else this.$message.error(this.$t("transfer.text11"))},toChange:function(t){if(this.fromAccount!=t.account_name){this.toAccount=t.account_name;for(var a=0;a<this.accountList.length;a++)this.accountList[a].account_name==t.account_name&&(this.toId=this.accountList[a].account_id)}else this.$message.error(this.$t("transfer.text11"))},submit:function(){var t=this;if(""!=this.toId&&""!=this.fromId)if(""!=this.num)if(""!=this.payPassword){this.btnLoding=!0;var a={payment_password:this.payPassword,from_account:this.fromId,to_account:this.toId,wid:this.id,amount:this.num};Object(o["l"])(Object(s["c"])(a)).then((function(a){200==a.data.status_code?(t.$message({message:a.data.message,type:"success"}),t.btnLoding=!1,t.num="",t.payPassword="",t.fromAccount=t.$t("transfer.text9"),t.toAccount=t.$t("transfer.text10"),t.fromId="",t.toId="",t.balance=0):(t.btnLoding=!1,t.$message.error(a.data.message))}))}else this.$message.error(this.$t("transfer.text4"));else this.$message.error(this.$t("transfer.text2"));else this.$message.error(this.$t("transfer.text12"))}}},c=i,u=(n("a103"),n("2877")),d=Object(u["a"])(c,r,e,!1,null,"1585ea55",null);a["default"]=d.exports},"2a2d":function(t,a,n){"use strict";n.d(a,"p",(function(){return e})),n.d(a,"e",(function(){return o})),n.d(a,"g",(function(){return s})),n.d(a,"f",(function(){return i})),n.d(a,"b",(function(){return c})),n.d(a,"o",(function(){return u})),n.d(a,"d",(function(){return d})),n.d(a,"j",(function(){return m})),n.d(a,"q",(function(){return f})),n.d(a,"k",(function(){return l})),n.d(a,"c",(function(){return p})),n.d(a,"n",(function(){return h})),n.d(a,"a",(function(){return g})),n.d(a,"m",(function(){return w})),n.d(a,"l",(function(){return A})),n.d(a,"h",(function(){return v})),n.d(a,"i",(function(){return y}));var r=n("66df"),e=function(t){return r["a"].request({url:"/api/withdraw/code_list",method:"get",fromdata:!0,params:t})},o=function(t){return r["a"].request({url:"/api/address/add",method:"post",fromdata:!0,data:t})},s=function(t){return r["a"].request({url:"/api/address/show",method:"get",fromdata:!0,params:t})},i=function(t){return r["a"].request({url:"/api/address/delete",method:"post",fromdata:!0,data:t})},c=function(t){return r["a"].request({url:"/api/withdraw/apply_withdraw",method:"post",fromdata:!0,data:t})},u=function(t){return r["a"].request({url:"/api/recharge/address",method:"get",fromdata:!0,params:t})},d=function(t){return r["a"].request({url:"/api/recharge/code_list",method:"get",fromdata:!0,params:t})},m=function(t){return r["a"].request({url:"/api/recharge/record",method:"get",fromdata:!0,params:t})},f=function(t){return r["a"].request({url:"/api/withdraw/withdraw_log",method:"get",fromdata:!0,params:t})},l=function(t){return r["a"].request({url:"/api/withdraw/revoke_withdraw",method:"post",fromdata:!0,params:t})},p=function(t){return r["a"].request({url:"/api/withdraw/show",method:"get",fromdata:!0,params:t})},h=function(t){return r["a"].request({url:"/api/account/deal_flow",method:"get",fromdata:!0,params:t})},g=function(t){return r["a"].request({url:"/api/transfer/info",method:"get",fromdata:!0,params:t})},w=function(t){return r["a"].request({url:"/api/transfer/allow_code",method:"get",fromdata:!0,params:t})},A=function(t){return r["a"].request({url:"/api/transfer/action",method:"post",fromdata:!0,params:t})},v=function(t){return r["a"].request({url:"/api/cashgift/gift_asset",method:"get",fromdata:!0,params:t})},y=function(t){return r["a"].request({url:"/api/cashgift/gift_list",method:"get",fromdata:!0,params:t})}},"6a61":function(t,a,n){},a01a:function(t,a){t.exports="data:image/png;base64,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"},a103:function(t,a,n){"use strict";var r=n("6a61"),e=n.n(r);e.a}}]);