(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-215df2f9"],{"3b97":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"authentication"},[a("PersonalHeader",{attrs:{content:2}}),a("section",{staticClass:"authenticationmain"},[a("section",{staticClass:"type"},[a("h2",{staticClass:"title"},[t._v(t._s(t.$t("userRz[0]")))]),a("ul",{staticClass:"contt"},[a("li",{staticClass:"list"},[a("a",{on:{click:t.primaryclick}},[a("img",{attrs:{src:s("8459"),alt:""}}),a("div",{staticClass:"two"},[a("h2",[t._v(t._s(t.$t("userRz[1]")))]),0==t.userInfo.user.authentication?a("p",[a("span",[t._v(t._s(t.$t("userRz[2]")))])]):a("p",[a("span",[t._v(t._s(t.userInfo.auth.name))]),t._v("|\n                                "),a("span",[t._v(t._s(t.userInfo.auth.card_id))])])]),0==t.userInfo.user.authentication?a("div",{staticClass:"three"},[t._v(t._s(t.$t("userRz[3]")))]):a("div",{staticClass:"three"},[t._v(t._s(t.$t("userRz[4]")))])])]),a("li",{staticClass:"list"},[a("a",{on:{click:t.seniorclick}},[a("img",{attrs:{src:s("c7c2"),alt:""}}),a("div",{staticClass:"two"},[a("h2",[t._v(t._s(t.$t("userRz[5]")))]),a("p",[2==t.userInfo.user.authentication?a("span",[t._v(t._s(t.$t("userRz[6]")))]):3==t.userInfo.user.authentication?a("span",[t._v(t._s(t.$t("userRz[7]")))]):4==t.userInfo.user.authentication?a("span",[t._v(t._s(t.$t("userRz[8]")))]):a("span",[t._v(t._s(t.$t("userRz[9]")))])]),a("p",[4==t.userInfo.user.authentication?a("span",[t._v(t._s(t.userInfo.refuse_reason))]):t._e()])]),0==t.userInfo.user.authentication?a("div",{staticClass:"three"},[t._v(t._s(t.$t("userRz[10]")))]):1==t.userInfo.user.authentication?a("div",{staticClass:"three"},[t._v(t._s(t.$t("userRz[11]")))]):2==t.userInfo.user.authentication?a("div",{staticClass:"three"},[t._v(t._s(t.$t("userRz[12]")))]):3==t.userInfo.user.authentication?a("div",{staticClass:"three"},[t._v(t._s(t.$t("userRz[13]")))]):a("div",{staticClass:"three"},[t._v(t._s(t.$t("userRz[14]")))])])])])])])],1)},r=[],n=(s("8e6e"),s("ac6a"),s("456d"),s("bd86")),i=s("ae40"),c=s("2f62");function u(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function o(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?u(Object(s),!0).forEach((function(e){Object(n["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var h={name:"authentication",data:function(){return{userInfo:{user:{account:"",phone:"",email:"",nickname:"",avatar:"",authentication:0},auth:{name:"",status:0,card_id:"",refuse_reason:null}}}},methods:o({},Object(c["b"])(["getUserInfo"]),{getdata:function(){var t=this;this.getUserInfo().then((function(e){t.userInfo=e})).catch((function(t){}))},primaryclick:function(){var t=this.userInfo.user.authentication;switch(t){case 0:this.$router.push({path:"/authenticationprimary"});break;default:this.$message.error(this.$t("userRz[15]"));break}},seniorclick:function(){var t=this.userInfo.user.authentication;switch(t){case 0:this.$router.push({path:"/authenticationprimary"});break;case 1:this.$router.push({path:"/authenticationsenior"});break;case 2:this.$message.error(this.$t("userRz[16]"));break;case 3:this.$message.error(this.$t("userRz[17]"));break;case 4:this.$router.push({path:"/authenticationsenior"});break;default:this.$message.error(this.$t("userRz[17]"));break}}}),created:function(){this.getdata()},components:{PersonalHeader:i["a"]}},l=h,p=s("2877"),f=Object(p["a"])(l,a,r,!1,null,null,null);e["default"]=f.exports},8459:function(t,e,s){t.exports=s.p+"img/smrz-icon.c955116d.png"},ae40:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"securitycenterheader"},[s("h2",{staticClass:"headertile"},[t._v(t._s(t.$t("header.tishi[5]")))]),s("ul",{staticClass:"conit"},[s("li",{staticClass:"list",class:{acvte:1==t.content}},[s("router-link",{attrs:{to:"securitycenter"}},[t._v(t._s(t.$t("header.tishi[4]")))])],1),s("li",{staticClass:"list",class:{acvte:2==t.content}},[s("router-link",{attrs:{to:"authentication"}},[t._v(t._s(t.$t("header.route[7]")))])],1),s("li",{staticClass:"list",class:{acvte:3==t.content}},[s("router-link",{attrs:{to:"payways"}},[t._v(t._s(t.$t("header.add[9]")))])],1)])])},r=[],n={name:"securitycenterheader",props:["content"],data:function(){return{}},methods:{}},i=n,c=s("2877"),u=Object(c["a"])(i,a,r,!1,null,null,null),o=u.exports;e["a"]=o},c7c2:function(t,e,s){t.exports=s.p+"img/gjrz-icon.16d3b7b3.png"}}]);