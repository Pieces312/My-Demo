webpackJsonp([8],{"+2zL":function(e,n){},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t("7+uW"),o={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"app"}},[this.$route.meta.keepAlive?n("keep-alive",[n("router-view")],1):n("router-view")],1)},staticRenderFns:[]};var c=t("VU/8")({name:"App"},o,!1,function(e){t("yQTa")},null,null).exports,i=t("/ocq");a.a.use(i.a);var r=new i.a({routes:[{path:"/",name:"home",component:function(e){return t.e(4).then(function(){var n=[t("FP3a")];e.apply(null,n)}.bind(this)).catch(t.oe)}},{path:"/login",name:"login",component:function(e){return t.e(0).then(function(){var n=[t("jT7l")];e.apply(null,n)}.bind(this)).catch(t.oe)}},{path:"/menu",component:function(e){return t.e(2).then(function(){var n=[t("MxVf")];e.apply(null,n)}.bind(this)).catch(t.oe)},children:[{path:"",name:"menu",meta:{keepAlive:!0},component:function(e){return t.e(1).then(function(){var n=[t("MWAP")];e.apply(null,n)}.bind(this)).catch(t.oe)}},{path:"detail",name:"detail",component:function(e){return t.e(3).then(function(){var n=[t("zJJ0")];e.apply(null,n)}.bind(this)).catch(t.oe)}},{path:"clicked",name:"clicked",component:function(e){return t.e(5).then(function(){var n=[t("TEJx")];e.apply(null,n)}.bind(this)).catch(t.oe)}}]},{path:"/order",name:"order",component:function(e){return t.e(6).then(function(){var n=[t("0wiy")];e.apply(null,n)}.bind(this)).catch(t.oe)}}]});r.beforeEach(function(e,n,t){null===localStorage.getItem("token")?"home"===e.name?t({name:"login"}):"login"!==e.name?t({name:"login"}):t():t()});var u=r;t("+2zL");a.a.directive("loading",{bind:function(e,n){var t=function(){var e=document.createElement("div");e.className="mask";var n=document.createElement("div");n.className="mask-content";for(var t=0;t<"加载中".length;t++){var a=document.createElement("span");a.innerText="加载中"[t],a.className="loading_"+(t+1),n.appendChild(a)}return e.appendChild(n),e}(),a=document.querySelector(".mask");n.value&&!a&&document.body.appendChild(t)},update:function(e,n){var t=document.querySelector(".mask");!n.value&&t&&t.remove()}}),a.a.config.productionTip=!1,a.a.mixin({data:function(){return{scrollTop:0}},methods:{toPage:function(e,n){this.$router.push({name:e,query:n})}}}),new a.a({el:"#app",router:u,components:{App:c},template:"<App/>"})},yQTa:function(e,n){}},["NHnr"]);
//# sourceMappingURL=app.e19384fe930ff7ddd85e.js.map