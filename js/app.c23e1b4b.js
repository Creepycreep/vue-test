(function(){"use strict";var t={1135:function(t,s,n){var i=n(9963),e=n(6252);const o={class:"main"},r={class:"stopwatches"},c={class:"stopwatch stopwatch__btn"};function u(t,s,n,i,u,a){const h=(0,e.up)("StopwatchItem");return(0,e.wg)(),(0,e.iD)("div",o,[(0,e._)("div",r,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(u.items,(t=>((0,e.wg)(),(0,e.j4)(h,{key:t})))),128)),(0,e._)("div",c,[(0,e._)("button",{class:"controls__btn btn_plus",onClick:s[0]||(s[0]=(...t)=>a.addStopwatch&&a.addStopwatch(...t))})])])])}n(7658);var a=n(3577);const h={class:"digits"},l=(0,e._)("hr",null,null,-1),d={class:"controls"};function v(t,s,n,i,o,r){return(0,e.wg)(),(0,e.iD)("div",{class:(0,a.C_)(["stopwatch",{active:o.isActive}])},[(0,e._)("div",h,[(0,e._)("span",{class:(0,a.C_)({display:o.hideHours})},(0,a.zw)(o.hours)+":",3),(0,e._)("span",{class:(0,a.C_)({display:o.hideMins})},(0,a.zw)(o.minutes)+":",3),(0,e._)("span",null,(0,a.zw)(o.seconds),1)]),l,(0,e._)("div",d,[(0,e._)("button",{id:"start",class:(0,a.C_)(["controls__btn btn_start",{active:!o.isActive}]),onClick:s[0]||(s[0]=(...t)=>r.start&&r.start(...t))},null,2),(0,e._)("button",{id:"pause",class:(0,a.C_)(["controls__btn btn_pause",{active:o.isActive}]),onClick:s[1]||(s[1]=(...t)=>r.pause&&r.pause(...t))},null,2),(0,e._)("button",{id:"reset",class:(0,a.C_)(["controls__btn btn_reset",{active:o.isActive}]),onClick:s[2]||(s[2]=(...t)=>r.reset&&r.reset(...t))},null,2)])],2)}var p={data(){return{isActive:!1,hideMins:!0,hideHours:!0,hours:0,minutes:0,seconds:0,interval:0}},methods:{start(){this.isActive=!0,this.interval=setInterval(this.timeCount,1)},pause(){this.isActive=!1,clearInterval(this.interval)},reset(){this.isActive=!1,clearInterval(this.interval),this.hideMins=!0,this.hideHours=!0,this.hours=0,this.minutes=0,this.seconds=0},timeCount:function(){this.seconds++,this.seconds>=60&&(this.seconds=0,this.minutes++,this.hideMins=!1,this.minutes>=60&&(this.minutes=0,this.hours++,this.hideHours=!1)),this.addNull()},addNull:function(){this.seconds<9&&!this.hideMins&&(this.seconds="0"+this.seconds),this.minutes<9&&!this.hideHours&&(this.minutes="0"+this.seconds)}}},f=n(3744);const _=(0,f.Z)(p,[["render",v]]);var b=_,m={name:"App",components:{StopwatchItem:b},data(){return{items:[]}},methods:{addStopwatch(){this.items.push(b)}}};const w=(0,f.Z)(m,[["render",u]]);var C=w;(0,i.ri)(C).mount("#app")}},s={};function n(i){var e=s[i];if(void 0!==e)return e.exports;var o=s[i]={exports:{}};return t[i](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(s,i,e,o){if(!i){var r=1/0;for(h=0;h<t.length;h++){i=t[h][0],e=t[h][1],o=t[h][2];for(var c=!0,u=0;u<i.length;u++)(!1&o||r>=o)&&Object.keys(n.O).every((function(t){return n.O[t](i[u])}))?i.splice(u--,1):(c=!1,o<r&&(r=o));if(c){t.splice(h--,1);var a=e();void 0!==a&&(s=a)}}return s}o=o||0;for(var h=t.length;h>0&&t[h-1][2]>o;h--)t[h]=t[h-1];t[h]=[i,e,o]}}(),function(){n.d=function(t,s){for(var i in s)n.o(s,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:s[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){var t={143:0};n.O.j=function(s){return 0===t[s]};var s=function(s,i){var e,o,r=i[0],c=i[1],u=i[2],a=0;if(r.some((function(s){return 0!==t[s]}))){for(e in c)n.o(c,e)&&(n.m[e]=c[e]);if(u)var h=u(n)}for(s&&s(i);a<r.length;a++)o=r[a],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(h)},i=self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[];i.forEach(s.bind(null,0)),i.push=s.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(1135)}));i=n.O(i)})();
//# sourceMappingURL=app.c23e1b4b.js.map