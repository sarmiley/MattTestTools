webpackJsonp([1],{"Aj/x":function(t,e){},IJaH:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"test"},[n("div",{staticClass:"container"},[n("div",{staticClass:"wrap"},[n("input",{staticStyle:{display:"none"},attrs:{type:"checkbox",id:"checking"}}),t._v(" "),n("button",{staticClass:"blob",on:{click:function(e){return t.routerTo("asyncAwait")}}},[t._v("⌛")]),t._v(" "),n("button",{staticClass:"blob",staticStyle:{display:"none"}},[t._v("⚙")]),t._v(" "),n("button",{staticClass:"blob",staticStyle:{display:"none"}},[t._v("❤")]),t._v(" "),n("button",{staticClass:"blob",on:{click:function(e){return t.routerTo("pageList")}}},[t._v("⭐")]),t._v(" "),n("button",{staticClass:"blob",on:{click:function(e){return t.routerTo("/")}}},[t._v("⛪")]),t._v(" "),n("button",{staticClass:"blob",staticStyle:{display:"none"}},[t._v("✎")]),t._v(" "),n("button",{staticClass:"blob",staticStyle:{display:"none"}},[t._v("♫")]),t._v(" "),n("button",{staticClass:"blob",staticStyle:{display:"none"}},[t._v("✆")]),t._v(" "),t._m(0)])]),t._v(" "),n("svg",[n("defs",[n("filter",{attrs:{id:"filt"}},[n("feGaussianBlur",{attrs:{in:"SourceGraphic",result:"blur",stdDeviation:"10"}}),t._v(" "),n("feColorMatrix",{attrs:{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7",result:"filt"}}),t._v(" "),n("feBlend",{attrs:{in2:"filt",in:"SourceGraphic",result:"mix"}})],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"blob",attrs:{for:"checking"}},[e("span",{staticClass:"bar"}),this._v(" "),e("span",{staticClass:"bar"}),this._v(" "),e("span",{staticClass:"bar"})])}]};var r=n("VU/8")({name:"MenuBtn",data:function(){return{msg:""}},methods:{routerTo:function(t){this.$router.push(t)}}},s,!1,function(t){n("dITw")},"data-v-45c2cd8a",null).exports,i={name:"Menu",props:{items:{type:Array,item:{path:String,name:String}}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu"},t._l(t.items,function(e,a){return n("ul",{key:e.name},[(t.items.length,n("li",{attrs:{id:"link-item"}},[n("router-link",{attrs:{to:e.path}},[t._v(t._s(e.name))])],1))])}),0)},staticRenderFns:[]};var c={name:"App",components:{MenuBtn:r,Menu:n("VU/8")(i,o,!1,function(t){n("TGXu")},"data-v-fb7bd5d8",null).exports},data:function(){return{menuDatas:[{path:"/pageList",name:"PageList"},{path:"/",name:"Home"},{path:"/asyncAwait",name:"Async"},{path:"/translate",name:"Translate"},{path:"/NPS_EN",name:"NPS_EN"},{path:"/NPS_TW",name:"NPS_TW"}]}}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"content"}},[e("div",{staticClass:"content-header"}),this._v(" "),e("div",{staticClass:"content-body"},[e("router-view")],1)])])},staticRenderFns:[]};var u=n("VU/8")(c,l,!1,function(t){n("pgLf")},null,null).exports,v=n("/ocq"),p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("h1",[this._v(this._s(this.msg))])])},staticRenderFns:[]};var h=n("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Matt's Vue Lab"}}},p,!1,function(t){n("IJaH")},"data-v-4afaf1ab",null).exports,_={name:"home",components:{HelloWorld:h,MenuBtn:r}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"home"}},[e("h1",[this._v("測試是否有成功部署")]),this._v(" "),e("router-link",{attrs:{to:{name:"NPS_EN"}}},[e("p",[this._v("NPS EN")])]),this._v(" "),e("router-link",{attrs:{to:{name:"NPS_TW"}}},[e("p",[this._v("NPS TW")])])],1)},staticRenderFns:[]},f=n("VU/8")(_,m,!1,null,null,null).exports,d={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"pageList"}},[this._v("\n  Test\n")])},staticRenderFns:[]},b=n("VU/8")({name:"pageList",components:{}},d,!1,null,null,null).exports,g=n("//Fk"),w=n.n(g),x=n("Xxa5"),y=n.n(x),S=n("exGp"),M=n.n(S),C={name:"asyncAwait",data:function(){return{testMsg:"",num:0,timer:0,intervalSec:1e3,timerReciprocal:null,consoleMsg:""}},watch:{timer:function(){0===this.timer&&this.clearReciprocal()}},methods:{startAction:function(){this.testMsg="Action Start"},asyncAction:function(){var t=M()(y.a.mark(function t(){var e;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getMsg();case 2:e=t.sent,this.showMsg(e),this.testMsg=e?"奇數：Async Await 回傳成功":"偶數：Async Await 回傳false";case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),getMsg:function(){var t=M()(y.a.mark(function t(){return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.consoleMsg="開始！",this.showMsg("sleep"),this.reciprocal(5),this.showMsg("等待答案"),this.setNum(),t.next=7,this.sleep(5e3);case 7:if(this.showMsg("取得答案"),this.num%2!=1){t.next=12;break}return t.abrupt("return",!0);case 12:return t.abrupt("return",!1);case 13:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),setNum:function(){this.num=Math.floor(10*Math.random())},sleep:function(){var t=M()(y.a.mark(function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new w.a(function(t,n){setTimeout(t,e)}));case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),reciprocal:function(t){var e=this;this.timer=t,this.timerReciprocal=setInterval(function(){e.timer>0&&e.timer--},this.intervalSec)},clearReciprocal:function(){clearInterval(this.timerReciprocal)},showMsg:function(t){this.consoleMsg+="\n",this.consoleMsg+=t}}},k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"listDemo"},[n("h1",[t._v("Async Await Test")]),t._v(" "),n("p",[t._v("骰出來的數字若為奇數回傳 true，若為偶數則回傳 false")]),t._v(" "),n("h2",[t._v("隨機數字")]),t._v(" "),n("p",[t._v(t._s(t.num))]),t._v(" "),n("h2",[t._v("答案")]),t._v(" "),n("p",[t._v(t._s(t.testMsg))]),t._v(" "),n("div",{staticClass:"msg-timer"},[n("p",[t._v(t._s(t.timer))])]),t._v(" "),n("div",[n("button",{staticClass:"start-btn",on:{click:function(e){return e.preventDefault(),t.asyncAction(e)}}},[t._v("Async Start")])]),t._v(" "),n("div",{staticClass:"msg-box"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.consoleMsg,expression:"consoleMsg"}],attrs:{readonly:""},domProps:{value:t.consoleMsg},on:{input:function(e){e.target.composing||(t.consoleMsg=e.target.value)}}})])])},staticRenderFns:[]};var N,E,T=n("VU/8")(C,k,!1,function(t){n("y0+/")},"data-v-405e49c6",null).exports,A=n("mtWM"),P=n.n(A),$=(N=M()(y.a.mark(function t(e,n){return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:P.a.post(e,n).then(function(t){return console.log("response : "+t),t}).catch(function(t){return console.log(t),t});case 1:case"end":return t.stop()}},t,this)})),E=M()(y.a.mark(function t(e){var n=this;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",P.a.get(e).then(function(){var t=M()(y.a.mark(function t(e){return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e);case 1:case"end":return t.stop()}},t,n)}));return function(e){return t.apply(this,arguments)}}()).catch(function(t){return console.log(t),t}));case 1:case"end":return t.stop()}},t,this)})),function(t){return E.apply(this,arguments)}),L=function(){var t=M()(y.a.mark(function t(e){var n,a,s,r,i;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.q,a=e.source,s=e.target,r="AIzaSyBYJlispBkRCRN3IbTbIBp6kZAfBnfZU8w",n=n.replace(/\n/g,"%0A"),i="https://translation.googleapis.com/language/translate/v2?key="+r+"&q="+n+"&source="+a+"&target="+s,t.abrupt("return",$(i).then(function(t){var e=t.data;return console.log(" < ================ translateText  ================ >"),console.log(e.data),console.log(" < ================ translateText  ================ >"),e.data}));case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),W={name:"translate",components:{translateText:L},data:function(){return{translation:"translated text",result:"",source:"en",target:"zh-TW"}},methods:{translate:function(){var t=M()(y.a.mark(function t(){var e=this;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L({q:this.translation,source:this.source,target:this.target}).then(function(t){console.log(t.translations),e.result=t.translations[0].translatedText});case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},B={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"translate"}},[n("h1",[t._v("Translator")]),t._v(" "),n("label",[t._v("English")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.translation,expression:"translation"}],domProps:{value:t.translation},on:{input:function(e){e.target.composing||(t.translation=e.target.value)}}}),t._v(" "),n("label",[t._v("中文")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.result,expression:"result"}],domProps:{value:t.result},on:{input:function(e){e.target.composing||(t.result=e.target.value)}}}),t._v(" "),n("button",{on:{click:t.translate}},[t._v("translate")])])},staticRenderFns:[]};var R=n("VU/8")(W,B,!1,function(t){n("Aj/x")},"data-v-263e13b2",null).exports,V={name:"NPSCloseTW",components:{HelloWorld:h}},F={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"NPSCloseTW"}},[n("hello-world"),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),n("hr"),t._v(" "),n("hr"),t._v(" "),n("hr"),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{"padding-top":"30px"}},[e("a",{staticStyle:{margin:"32px 32px"},attrs:{href:"https://vibank.standardchartered.com.tw/barrierfree/scb/nps_close"}},[e("button",[this._v("回到SCMobile")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{"padding-top":"30px"}},[e("a",{staticStyle:{margin:"32px 32px"},attrs:{href:"https://vibank.standardchartered.com.tw/barrierfree/scb/vi_close"}},[e("button",[this._v("回到SCMobile (vi_close)")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{"padding-top":"30px"}},[e("a",{staticStyle:{margin:"32px 32px"},attrs:{href:"https://vibank.standardchartered.com.tw/barrierfree/scb/vi_login"}},[e("button",[this._v("回到SC Mobile 登入頁面2 (vi_login)")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{"padding-top":"30px"}},[e("a",{staticStyle:{margin:"32px 32px"},attrs:{href:"https://sarmiley.gitlab.io/VueLab/#/scb/vi_login"}},[e("button",[this._v("回到SC Mobile 登入頁面3 (vi_login in gitlab)")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{"padding-top":"30px"}},[e("a",{attrs:{href:"https://www.sc.com/tw/scb/vi_close"}},[e("button",[this._v("Back SCMobile (sc vi_login)")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{"padding-top":"30px"}},[e("a",{attrs:{href:"https://www.sc.com/tw/scb/vi_login"}},[e("button",[this._v("Back SCMobile Login (sc vi_login)")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{"padding-top":"30px"}},[e("a",{attrs:{href:"http://10.229.202.92/scb/vi_login"}},[e("button",[this._v("Back SCMobile Login2 (ip vi_login)")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{"padding-top":"30px"}},[e("a",{attrs:{href:"https://sarmiley.gitlab.io/VueLab/#/scb/vi_login"}},[e("button",[this._v("Back SCMobile Login3")])])])}]},U=n("VU/8")(V,F,!1,null,null,null).exports,H={name:"NPSCloseEN",components:{HelloWorld:h}},I={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"NPSCloseEN"}},[n("hello-world"),t._v(" "),t._m(0),t._v(" "),n("br"),t._v(" "),t._m(1),t._v(" "),n("br"),t._v(" "),t._m(2),t._v(" "),t._m(3)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"https://www.sc.com/tw/scb/nps_close"}},[e("button",[this._v("Back SCMobile")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"https://www.sc.com/tw/scb/vi_login"}},[e("button",[this._v("Back SCMobile Login")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"http://10.229.202.92/scb/vi_login"}},[e("button",[this._v("Back SCMobile Login2")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{"padding-top":"30px"}},[e("a",{attrs:{href:"https://sarmiley.gitlab.io/VueLab/#/scb/vi_login"}},[e("button",[this._v("Back SCMobile Login3")])])])}]},G=n("VU/8")(H,I,!1,null,null,null).exports;a.a.use(v.a);var q=new v.a({mode:"history",base:"/MattTest/",routes:[{path:"/",name:"home",component:f},{path:"/pageList",name:"pageList",component:b},{path:"/asyncAwait",name:"asyncAwait",component:T},{path:"/translate",name:"translate",component:R},{path:"/NPS_EN",name:"NPS_EN",component:G},{path:"/NPS_TW%23first-element",name:"NPS_TW",component:U},{path:"/NPS_TW",name:"NPS_TW",component:U},{path:"/scb/vi_login",name:"NPS_TW",component:U}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:q,components:{App:u},template:"<App/>"})},TGXu:function(t,e){},dITw:function(t,e){},pgLf:function(t,e){},"y0+/":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.8b4b1bb9991b6e1d2f4b.js.map