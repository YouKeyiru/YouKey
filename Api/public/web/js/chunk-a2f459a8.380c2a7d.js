(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a2f459a8"],{"3e65":function(t,a,e){},"506d":function(t,a,e){"use strict";var s=e("3e65"),i=e.n(s);i.a},"7b1d":function(t,a,e){t.exports=e.p+"img/banner-2-en.8229546e.png"},"9ea0":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"powerPage"},["en"==t.lan?s("img",{staticClass:"topImg",attrs:{src:e("7b1d"),alt:""}}):t._e(),"zh"==t.lan?s("img",{staticClass:"topImg",attrs:{src:e("b743"),alt:""}}):t._e(),s("div",{staticClass:"powerDiv1"},[s("p",[t._v(t._s(t.$t("dasai[0]")))])]),s("p",{staticClass:"powerP1"},[t._v("\n    "+t._s(t.$t("dasai[1]"))+"\n  ")]),s("div",{staticClass:"powerDiv2"},[s("p",[t._v(t._s(t.$t("dasai[2]")))]),s("p",[t._v(t._s(t.$t("dasai[3]")))]),s("p",[t._v(t._s(t.$t("dasai[4]")))])]),t._l(t.competitionlistData,(function(a,e){return s("div",{staticClass:"powerDiv2 powerDiv3"},[s("p",[t._v(t._s(a.sort))]),s("p",[t._v(t._s(a.name_en?a.name_en:a.name_cn))]),s("p",[t._v(t._s(a.profit)+"USDT")]),a.sort<4?s("i",{class:"dd"+(a.sort-1),style:"width:"+parseFloat(a.profit)/t.num*100+"%"}):t._e()])})),t._l(t.competitionruleData,(function(a){return 1==a.type?s("div",[s("div",{staticClass:"powerDiv1"},[s("p",[t._v(t._s(a.title))])]),s("p",{staticClass:"powerP2",domProps:{innerHTML:t._s(a.content)}})]):t._e()})),t._l(t.competitionruleData,(function(a){return 2==a.type?s("div",[s("div",{staticClass:"powerDiv1"},[s("p",[t._v(t._s(a.title))])]),s("div",{staticStyle:{"margin-top":"50px"},domProps:{innerHTML:t._s(a.content)}})]):t._e()})),t._l(t.competitionruleData,(function(a){return 3==a.type?s("div",[s("div",{staticClass:"powerDiv1"},[s("p",[t._v(t._s(a.title))])]),s("div",{staticStyle:{"margin-top":"50px"},domProps:{innerHTML:t._s(a.content)}})]):t._e()})),s("div",{staticStyle:{height:"50px"}})],2)},i=[],n=e("1684"),o={data:function(){return{competitionruleData:null,competitionlistData:null,num:1,lan:"en"}},created:function(){var t=this,a=localStorage.getItem("lang");a&&"zh"==a&&(this.lan="zh"),Object(n["a"])().then((function(a){if(200===a.data.status_code){t.competitionlistData=a.data.data;for(var e=0,s=0;s<a.data.data.length;s++)e+=parseFloat(a.data.data[s].profit);t.num=e}else t.$message.error(a.data.message)})).catch((function(a){t.$message.error(a.data.message)})),Object(n["b"])().then((function(a){200===a.data.status_code?t.competitionruleData=a.data.data:t.$message.error(a.data.message)})).catch((function(a){t.$message.error(a.data.message)}))}},r=o,c=(e("506d"),e("2877")),p=Object(c["a"])(r,s,i,!1,null,null,null);a["default"]=p.exports},b743:function(t,a,e){t.exports=e.p+"img/banner-2.541dd262.png"}}]);