webpackJsonp([1],{"2cXb":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"test"},[n("div",{staticClass:"container"},[n("div",{staticClass:"wrap"},[n("input",{staticStyle:{display:"none"},attrs:{type:"checkbox",id:"checking"}}),t._v(" "),n("button",{staticClass:"blob",on:{click:function(e){return t.routerTo("asyncAwait")}}},[t._v("⌛")]),t._v(" "),n("button",{staticClass:"blob",staticStyle:{display:"none"}},[t._v("⚙")]),t._v(" "),n("button",{staticClass:"blob",staticStyle:{display:"none"}},[t._v("❤")]),t._v(" "),n("button",{staticClass:"blob",on:{click:function(e){return t.routerTo("pageList")}}},[t._v("⭐")]),t._v(" "),n("button",{staticClass:"blob",on:{click:function(e){return t.routerTo("/")}}},[t._v("⛪")]),t._v(" "),n("button",{staticClass:"blob",staticStyle:{display:"none"}},[t._v("✎")]),t._v(" "),n("button",{staticClass:"blob",staticStyle:{display:"none"}},[t._v("♫")]),t._v(" "),n("button",{staticClass:"blob",staticStyle:{display:"none"}},[t._v("✆")]),t._v(" "),t._m(0)])]),t._v(" "),n("svg",[n("defs",[n("filter",{attrs:{id:"filt"}},[n("feGaussianBlur",{attrs:{in:"SourceGraphic",result:"blur",stdDeviation:"10"}}),t._v(" "),n("feColorMatrix",{attrs:{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7",result:"filt"}}),t._v(" "),n("feBlend",{attrs:{in2:"filt",in:"SourceGraphic",result:"mix"}})],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"blob",attrs:{for:"checking"}},[e("span",{staticClass:"bar"}),this._v(" "),e("span",{staticClass:"bar"}),this._v(" "),e("span",{staticClass:"bar"})])}]};var r=n("VU/8")({name:"MenuBtn",data:function(){return{msg:""}},methods:{routerTo:function(t){this.$router.push(t)}}},s,!1,function(t){n("jxvK")},"data-v-bbaa3bc2",null).exports,o={name:"Menu",props:{items:{type:Array,item:{path:String,name:String}}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu"},t._l(t.items,function(e,a){return n("ul",{key:e.name},[(t.items.length,n("li",{attrs:{id:"link-item"}},[n("router-link",{attrs:{to:e.path}},[t._v(t._s(e.name))])],1))])}),0)},staticRenderFns:[]};var l={name:"App",components:{MenuBtn:r,Menu:n("VU/8")(o,i,!1,function(t){n("QSax")},"data-v-2c5f9b8a",null).exports},data:function(){return{menuDatas:[{path:"/pageList",name:"PageList"},{path:"/",name:"Home"},{path:"/asyncAwait",name:"Async"},{path:"/translate",name:"Translate"},{path:"/NPS_EN",name:"NPS_EN"},{path:"/NPS_TW",name:"NPS_TW"}]}}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"content"}},[this._m(0),this._v(" "),e("div",{staticClass:"content-body"},[e("router-view")],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content-header"},[e("div",{staticClass:"update-time-area"},[this._v("（Last Update: 2020/06/18）")])])}]};var u=n("VU/8")(l,c,!1,function(t){n("oDj2")},null,null).exports,v=n("/ocq"),p={name:"home",data:function(){return{customUrl:"",path:"",routeName:"",domain:"https://eappointment.standardchartered.com.tw/scb/public/"}},mounted:function(){console.log(navigator.userAgent)},computed:{fullUrl:function(){var t=this.domain+"redirectCenter?routeName="+this.routeName;return this.path?t+"&"+this.path:t}},methods:{goToUrlbySelf:function(t){t?window.open(t,"_self"):window.open(this.fullUrl,"_self")},goToUrlWithNewTab:function(t){t?window.open(t,"_system"):window.open(this.fullUrl,"_system")}}},m={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("\n    非常歡迎您光臨「Matt Tool」（以下簡稱本網站），為了讓您能夠安心的使用本網站的各項服務與資訊，特此向您說明本網站的隱私權保護政策，以保障您的權益，請您詳閱下列內容：\n  ")]),t._v(" "),n("h1",[t._v("一、隱私權保護政策的適用範圍")]),t._v(" "),n("p",[t._v("\n    隱私權保護政策內容，包括本網站如何處理在您使用網站服務時收集到的個人識別資料。隱私權保護政策不適用於本網站以外的相關連結網站，也不適用於非本網站所委託或參與管理的人員。\n  ")]),t._v(" "),n("h1",[t._v("二、個人資料的蒐集、處理及利用方式")]),t._v(" "),n("ul",[n("li",[t._v("\n      當您造訪本網站或使用本網站所提供之功能服務時，我們將視該服務功能性質，請您提供必要的個人資料，並在該特定目的範圍內處理及利用您的個人資料；非經您書面同意，本網站不會將個人資料用於其他用途。\n    ")]),t._v(" "),n("li",[t._v("\n      本網站在您使用服務信箱、問卷調查等互動性功能時，會保留您所提供的姓名、電子郵件地址、聯絡方式及使用時間等。\n    ")]),t._v(" "),n("li",[t._v("\n      於一般瀏覽時，伺服器會自行記錄相關行徑，包括您使用連線設備的 IP\n      位址、使用時間、使用的瀏覽器、瀏覽及點選資料記錄等，做為我們增進網站服務的參考依據，此記錄為內部應用，決不對外公佈。\n    ")]),t._v(" "),n("li",[t._v("\n      為提供精確的服務，我們會將收集的問卷調查內容進行統計與分析，分析結果之統計數據或說明文字呈現，除供內部研究外，我們會視需要公佈統計數據及說明文字，但不涉及特定個人之資料。\n    ")]),t._v(" "),n("li",[t._v("\n      您可以隨時向我們提出請求，以更正或刪除您的帳戶或本網站所蒐集的個人資料等隱私資訊。聯繫方式請見最下方聯繫管道。\n    ")])]),t._v(" "),n("h1",[t._v("三、資料之保護")]),t._v(" "),n("ul",[n("li",[t._v("\n      本網站主機均設有防火牆、防毒系統等相關的各項資訊安全設備及必要的安全防護措施，加以保護網站及您的個人資料採用嚴格的保護措施，只由經過授權的人員才能接觸您的個人資料，相關處理人員皆簽有保密合約，如有違反保密義務者，將會受到相關的法律處分。\n    ")]),t._v(" "),n("li",[t._v("\n      如因業務需要有必要委託其他單位提供服務時，本網站亦會嚴格要求其遵守保密義務，並且採取必要檢查程序以確定其將確實遵守。\n    ")])]),t._v(" "),n("h1",[t._v("四、網站對外的相關連結")]),t._v(" "),n("p",[t._v("\n    本網站的網頁提供其他網站的網路連結，您也可經由本網站所提供的連結，點選進入其他網站。但該連結網站不適用本網站的隱私權保護政策，您必須參考該連結網站中的隱私權保護政策。\n  ")]),t._v(" "),n("h1",[t._v("五、與第三人共用個人資料之政策")]),t._v(" "),n("p",[t._v("\n    本網站絕不會提供、交換、出租或出售任何您的個人資料給其他個人、團體、私人企業或公務機關，但有法律依據或合約義務者，不在此限。\n    前項但書之情形包括不限於：\n    "),n("ul",[n("li",[t._v("經由您書面同意。 法律明文規定。")]),t._v(" "),n("li",[t._v("為免除您生命、身體、自由或財產上之危險。")]),t._v(" "),n("li",[t._v("與公務機關或學術研究機構合作，基於公共利益為統計或學術研究而有必要，且資料經過提供者處理或蒐集者依其揭露方式無從識別特定之當事人。")]),t._v(" "),n("li",[t._v("當您在網站的行為，違反服務條款或可能損害或妨礙網站與其他使用者權益或導致任何人遭受損害時，經網站管理單位研析揭露您的個人資料是為了辨識、聯絡或採取法律行動所必要者。")]),t._v(" "),n("li",[t._v("有利於您的權益。")]),t._v(" "),n("li",[t._v("本網站委託廠商協助蒐集、處理或利用您的個人資料時，將對委外廠商或個人善盡監督管理之責。")])])]),t._v(" "),n("h1",[t._v("六、Cookie 之使用")]),t._v(" "),n("p",[t._v("為了提供您最佳的服務，本網站會在您的電腦中放置並取用我們的Cookie，若您不願接受 Cookie的寫入，您可在您使用的瀏覽器功能項中設定隱私權等級為高，即可拒絕 Cookie的寫入，但可能會導致網站某些功能無法正常執行 。")]),t._v(" "),n("h1",[t._v("七、隱私權保護政策之修正")]),t._v("\n  本網站隱私權保護政策將因應需求隨時進行修正，修正後的條款將刊登於網站上。\n\n  "),n("h1",[t._v("八、聯繫管道")]),t._v("\n  對於本站之隱私權政策有任何疑問，或者想提出變更、移除個人資料之請求，請Email 至： sarmiley@gmail.com\n")])}]};var d=n("VU/8")(p,m,!1,function(t){n("kM9i")},"data-v-02e4cede",null).exports,_={name:"Login",data:function(){return{account:"",password:""}},methods:{confirm:function(){"matt"!==this.account||"matt"!==this.password?alert("登入失敗"):this.$router.push({name:"success"})}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("h1"),t._v(" "),n("div",{staticClass:"type-area"},[n("label",[n("small",[t._v("Account")]),t._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],attrs:{type:"text"},domProps:{value:t.account},on:{input:function(e){e.target.composing||(t.account=e.target.value)}}})])])]),t._v(" "),n("div",{staticClass:"type-area"},[n("label",[n("small",[t._v("password")]),t._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])])]),t._v(" "),n("button",{on:{click:t.confirm}},[t._v("送出")])])},staticRenderFns:[]};var f,b,g=n("VU/8")(_,h,!1,function(t){n("2cXb")},"data-v-ab640fee",null).exports,w={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"home"}},[e("h1",[this._v("登入成功")])])}]},y=n("VU/8")({name:"success"},w,!1,null,null,null).exports,x=n("Xxa5"),C=n.n(x),k=n("exGp"),U=n.n(k),N=n("mtWM"),T=n.n(N),S=(f=U()(C.a.mark(function t(e,n){return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:T.a.post(e,n).then(function(t){return console.log("response : "+t),t}).catch(function(t){return console.log(t),t});case 1:case"end":return t.stop()}},t,this)})),b=U()(C.a.mark(function t(e){var n=this;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",T.a.get(e).then(function(){var t=U()(C.a.mark(function t(e){return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e);case 1:case"end":return t.stop()}},t,n)}));return function(e){return t.apply(this,arguments)}}()).catch(function(t){return console.log(t),t}));case 1:case"end":return t.stop()}},t,this)})),function(t){return b.apply(this,arguments)}),E=function(){var t=U()(C.a.mark(function t(e){var n,a,s,r,o;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.q,a=e.source,s=e.target,r="AIzaSyBYJlispBkRCRN3IbTbIBp6kZAfBnfZU8w",n=n.replace(/\n/g,"%0A"),o="https://translation.googleapis.com/language/translate/v2?key="+r+"&q="+n+"&source="+a+"&target="+s,t.abrupt("return",S(o).then(function(t){var e=t.data;return console.log(" < ================ translateText  ================ >"),console.log(e.data),console.log(" < ================ translateText  ================ >"),e.data}));case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),A={name:"translate",components:{translateText:E},data:function(){return{translation:"translated text",result:"",source:"en",target:"zh-TW"}},methods:{translate:function(){var t=U()(C.a.mark(function t(){var e=this;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E({q:this.translation,source:this.source,target:this.target}).then(function(t){console.log(t.translations),e.result=t.translations[0].translatedText});case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},P={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"translate"}},[n("h1",[t._v("Translator")]),t._v(" "),n("label",[t._v("English")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.translation,expression:"translation"}],domProps:{value:t.translation},on:{input:function(e){e.target.composing||(t.translation=e.target.value)}}}),t._v(" "),n("label",[t._v("中文")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.result,expression:"result"}],domProps:{value:t.result},on:{input:function(e){e.target.composing||(t.result=e.target.value)}}}),t._v(" "),n("button",{on:{click:t.translate}},[t._v("translate")])])},staticRenderFns:[]};var $=n("VU/8")(A,P,!1,function(t){n("VL5R")},"data-v-7d9484ea",null).exports,R={name:"DeeplinkHelper",data:function(){return{customUrl:"",path:"",routeName:"",domain:"https://eappointment.standardchartered.com.tw/scb/public/"}},mounted:function(){console.log(navigator.userAgent)},computed:{fullUrl:function(){var t=this.domain+"redirectCenter?routeName="+this.routeName;return this.path?t+"&"+this.path:t}},methods:{goToUrlbySelf:function(t){t?window.open(t,"_self"):window.open(this.fullUrl,"_self")},goToUrlWithNewTab:function(t){t?window.open(t,"_system"):window.open(this.fullUrl,"_system")}}},M={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"prod-body"},[n("div",{staticClass:"prod-search-box"},[n("div",{staticClass:"full-url"},[t._v("\n        "+t._s(t.fullUrl)+"\n      ")]),t._v(" "),n("div",[n("label",[t._v(" Host：")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.domain,expression:"domain"}],staticClass:"domain-select",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.domain=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"https://eappointment.standardchartered.com.tw/scb/public/"}},[t._v("\n            eappointment\n          ")]),t._v(" "),n("option",{attrs:{value:"https://localhost:8080/public/"}},[t._v("localhost")])]),t._v(" "),n("label",[t._v("routeName：")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.routeName,expression:"routeName"}],attrs:{type:"text"},domProps:{value:t.routeName},on:{input:function(e){e.target.composing||(t.routeName=e.target.value)}}}),t._v(" "),n("label",[t._v("path：")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.path,expression:"path"}],attrs:{type:"text"},domProps:{value:t.path},on:{input:function(e){e.target.composing||(t.path=e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"btn-section"},[n("button",{staticClass:"btn btn-link",on:{click:function(e){return t.goToUrlWithNewTab()}}},[t._v("\n        開新分頁前往\n      ")]),t._v(" "),n("button",{staticClass:"btn btn-link",on:{click:function(e){return t.goToUrlbySelf()}}},[t._v("原頁轉導")])])]),t._v(" "),n("div",{staticClass:"prod-body"},[n("div",{staticClass:"prod-search-box2"},[n("label",[t._v("Custom URL：")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.customUrl,expression:"customUrl"}],attrs:{type:"text"},domProps:{value:t.customUrl},on:{input:function(e){e.target.composing||(t.customUrl=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"btn-section"},[n("button",{staticClass:"btn btn-link",on:{click:function(e){return t.goToUrlWithNewTab(t.customUrl)}}},[t._v("\n        開新分頁前往\n      ")]),t._v(" "),n("button",{staticClass:"btn btn-link",on:{click:function(e){return t.goToUrlbySelf(t.customUrl)}}},[t._v("\n        原頁轉導\n      ")])])])])},staticRenderFns:[]};var V=n("VU/8")(R,M,!1,function(t){n("c+69")},"data-v-529d8d5a",null).exports;a.a.use(v.a);var W=new v.a({mode:"history",base:"/",routes:[{path:"/deeplinkHelper",name:"deeplinkHelper",component:V},{path:"/translate",name:"translate",component:$},{path:"/login",name:"login",component:g},{path:"/success",name:"success",component:y},{path:"/",name:"home",component:d}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:W,components:{App:u},template:"<App/>"})},QSax:function(t,e){},VL5R:function(t,e){},"c+69":function(t,e){},jxvK:function(t,e){},kM9i:function(t,e){},oDj2:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f20b727d2a36ba49d183.js.map