(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{332:function(e,t,r){var content=r(362);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(54).default)("966fecd4",content,!0,{sourceMap:!1})},361:function(e,t,r){"use strict";r(332)},362:function(e,t,r){var n=r(53)((function(i){return i[1]}));n.push([e.i,"button[data-v-7ebcf0d3]{background-color:#1b3d81;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:12px;margin-left:.5rem;opacity:.8;padding:0 2rem;transition:all .3s ease}button[data-v-7ebcf0d3]:hover{opacity:1}",""]),n.locals={},e.exports=n},369:function(e,t,r){"use strict";r.r(t);r(32),r(28),r(33),r(16),r(44),r(29),r(45);var n=r(14),o=r(37);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var l={name:"Button",computed:f({},Object(o.e)({queryConfig:function(e){return e.queryConfig.selectedConfig}})),methods:f(f({},Object(o.b)({fetchData:"data/fetchData"})),{},{fetchHandler:function(e){console.log("hi"),e.preventDefault(),this.fetchData({config:this.queryConfig})}})},d=(r(361),r(27)),component=Object(d.a)(l,(function(){var e=this;return(0,e._self._c)("button",{on:{click:e.fetchHandler}},[e._v("Send")])}),[],!1,null,"7ebcf0d3",null);t.default=component.exports}}]);