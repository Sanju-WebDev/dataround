(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{350:function(e,t,n){var content=n(375);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(54).default)("2658d336",content,!0,{sourceMap:!1})},374:function(e,t,n){"use strict";n(350)},375:function(e,t,n){var r=n(53)((function(i){return i[1]}));r.push([e.i,".authorisation[data-v-60c6da9e]{background-color:#fff;display:flex;flex-direction:column;gap:2px;padding:1px}input[data-v-60c6da9e]{background-color:#f4f4f4;border:none;min-height:30px;outline:none;padding:1px 1rem;width:100%}",""]),r.locals={},e.exports=r},393:function(e,t,n){"use strict";n.r(t);n(32),n(28),n(33),n(16),n(44),n(29),n(45);var r=n(14),o=n(37);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var l={name:"Authorization",props:["tabon"],computed:d({},Object(o.e)({username:function(e){return e.queryConfig.selectedConfig.username},password:function(e){return e.queryConfig.selectedConfig.password}})),methods:d(d({},Object(o.d)({updateKey:"queryConfig/UPDATE_KEY"})),{},{inputHandler:function(e,t){this.updateKey({key:t,value:e.target.value})}})},f=(n(374),n(27)),component=Object(f.a)(l,(function(){var e=this,t=e._self._c;return"auth"===e.tabon?t("div",{staticClass:"authorisation"},[t("input",{attrs:{placeholder:"username",type:"text"},domProps:{value:e.username},on:{change:function(t){return e.inputHandler(t,"username")}}}),e._v(" "),t("input",{attrs:{placeholder:"password",type:"password"},domProps:{value:e.password},on:{change:function(t){return e.inputHandler(t,"password")}}})]):e._e()}),[],!1,null,"60c6da9e",null);t.default=component.exports}}]);