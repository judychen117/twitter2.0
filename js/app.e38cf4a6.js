(function(e){function t(t){for(var a,r,i=t[0],u=t[1],s=t[2],l=0,d=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&d.push(c[r][0]),c[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);m&&m(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==c[i]&&(a=!1)}a&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},c={app:0},o=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-21bf94a0":"0530925b","chunk-2a20f7fe":"670711db","chunk-2e466edd":"b171d1dc","chunk-5de7cbcc":"aa7c28dc","chunk-68732526":"a20a4c9f","chunk-75545c58":"8b878e92","chunk-427dd26c":"c479956d","chunk-7fee5c05":"61e39956","chunk-9ca2dc90":"fb37a551","chunk-1e19cf3d":"73e28a8a","chunk-784248ef":"538b861b","chunk-c6ba1218":"ed3a3b3a","chunk-2cb47342":"742eef71","chunk-67369784":"985fc896","chunk-913d493c":"d1d65cef","chunk-aeeebda8":"07443b2a"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-2a20f7fe":1,"chunk-2e466edd":1,"chunk-5de7cbcc":1,"chunk-68732526":1,"chunk-75545c58":1,"chunk-427dd26c":1,"chunk-7fee5c05":1,"chunk-9ca2dc90":1,"chunk-1e19cf3d":1,"chunk-784248ef":1,"chunk-c6ba1218":1,"chunk-2cb47342":1,"chunk-67369784":1,"chunk-913d493c":1,"chunk-aeeebda8":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-21bf94a0":"31d6cfe0","chunk-2a20f7fe":"64185a9e","chunk-2e466edd":"221e8e3c","chunk-5de7cbcc":"1abe3892","chunk-68732526":"b863cf8e","chunk-75545c58":"361f551a","chunk-427dd26c":"aeecf74f","chunk-7fee5c05":"133ff586","chunk-9ca2dc90":"474acd12","chunk-1e19cf3d":"1a8f765a","chunk-784248ef":"adbcedc7","chunk-c6ba1218":"858abd5e","chunk-2cb47342":"43fcfa24","chunk-67369784":"d521e440","chunk-913d493c":"eada6f3d","chunk-aeeebda8":"0b352f8d"}[e]+".css",c=u.p+a,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var s=o[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===c))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],l=s.getAttribute("data-href");if(l===a||l===c)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var a=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],m.parentNode.removeChild(m),n(o)},m.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){r[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(m);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}c[e]=void 0}};var m=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/twitter2.0/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var m=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"0eb7":function(e,t,n){e.exports=n.p+"img/alphaCampIcon.44f2d4d4.svg"},"21f9":function(e,t,n){"use strict";n("8ddc")},"2fa3":function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return s}));var a=n("bc3a"),r=n.n(a),c=n("3d20"),o=n.n(c),i="https://twitterkiller-backend.herokuapp.com/api",u=r.a.create({baseURL:i}),s=o.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3})},4360:function(e,t,n){"use strict";var a=n("5530"),r=(n("b0c0"),n("2b0e")),c=n("2f62"),o=n("0e44");r["a"].use(c["a"]),t["a"]=new c["a"].Store({plugins:[Object(o["a"])({storage:window.sessionStorage})],state:{currentUser:{id:-1,name:"",email:"",role:""},isAuthenticated:!0,isFirstAuthenticated:!1,token:""},mutations:{setCurrentUser:function(e,t){e.currentUser=Object(a["a"])(Object(a["a"])({},e.currentUser),t),e.token=localStorage.getItem("token"),localStorage.setItem("id",e.currentUser.id),localStorage.setItem("name",e.currentUser.name),localStorage.setItem("email",e.currentUser.email),localStorage.setItem("role",e.currentUser.role),e.isAuthenticated=!0},revokeAuthentication:function(e){e.currentUser={},e.isAuthenticated=!1,e.token="",localStorage.removeItem("token"),localStorage.removeItem("id"),localStorage.removeItem("name"),localStorage.removeItem("email"),localStorage.removeItem("role")}},actions:{fetchCurrentUser:function(e){var t=e.commit;try{var n=localStorage.getItem(n),a=localStorage.getItem(a),r=localStorage.getItem(r),c=localStorage.getItem(c);return t("setCurrentUser",{id:n,name:a,email:r,role:c}),!0}catch(o){return console.error("can not fetch user information"),!1}}},modules:{}})},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"twitter-forum"}},[n("main",{staticClass:"bg-white",attrs:{role:"main"}},[n("router-view")],1)])},c=[],o=(n("4989"),n("ab8b"),{components:{}}),i=o,u=(n("034f"),n("2877")),s=Object(u["a"])(i,r,c,!1,null,null,null),l=s.exports,d=n("1da1"),m=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("caad"),n("b0c0"),n("2532"),n("8c4f")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("404 Not Found")])},p=[],h={},b=Object(u["a"])(h,f,p,!1,null,null,null),k=b.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container py-5"},[n("form",{on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit(t)}}},[e._m(0),e._m(1),n("div",{staticClass:"box"},[n("p",[e._v("帳號")]),n("label",{attrs:{for:"account"}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.account,expression:"account"}],attrs:{id:"account",name:"account",type:"text",placeholder:"",autocomplete:"",required:"",autofocus:""},domProps:{value:e.account},on:{input:function(t){t.target.composing||(e.account=t.target.value)}}}),n("div",{staticClass:"seperation"})]),n("div",{staticClass:"box"},[n("p",[e._v("名稱")]),n("label",{attrs:{for:"name"}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{id:"name",name:"name",type:"text",placeholder:"",autocomplete:"name",required:"",autofocus:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("div",{staticClass:"seperation"})]),n("div",{staticClass:"box"},[n("p",[e._v("Email")]),n("label",{attrs:{for:"email"}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{id:"email",name:"email",type:"email",placeholder:"",autocomplete:"email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("div",{staticClass:"seperation"})]),n("div",{staticClass:"box"},[n("p",[e._v("密碼")]),n("label",{attrs:{for:"password"}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{id:"password",name:"password",type:"password",placeholder:"",autocomplete:"new-password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("div",{staticClass:"seperation"})]),n("div",{staticClass:"box"},[n("p",[e._v("密碼確認")]),n("label",{attrs:{for:"password-check"}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.checkPassword,expression:"checkPassword"}],attrs:{id:"password-check",name:"checkPassword",type:"password",placeholder:"",autocomplete:"new-password",required:""},domProps:{value:e.checkPassword},on:{input:function(t){t.target.composing||(e.checkPassword=t.target.value)}}}),n("div",{staticClass:"seperation"})]),n("button",{staticClass:"btn btn-lg btn-primary btn-block mb-3 mt-4",attrs:{disabled:e.isProcessing,type:"submit"}},[e._v(" 註冊 ")]),n("div",{staticClass:"text-center mb-3"},[n("router-link",{attrs:{to:"/login"}},[e._v("取消")])],1)])])},v=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"logo mb-4"},[a("img",{attrs:{src:n("0eb7"),alt:"alphitter logo"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center mb-4"},[n("h1",{staticClass:"title"},[e._v("建立你的帳號")])])}],w=n("2fa3"),x={signUp:function(e){var t=e.formData;return w["b"].post("/users",t)}},y={data:function(){return{account:"",name:"",email:"",password:"",checkPassword:"",isProcessing:!1}},methods:{handleSubmit:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.account){t.next=3;break}return w["a"].fire({icon:"warning",title:"請填寫帳號"}),t.abrupt("return");case 3:if(e.name){t.next=6;break}return w["a"].fire({icon:"warning",title:"請填寫名稱"}),t.abrupt("return");case 6:if(e.email){t.next=9;break}return w["a"].fire({icon:"warning",title:"請填寫email"}),t.abrupt("return");case 9:if(e.password){t.next=12;break}return w["a"].fire({icon:"warning",title:"請填寫密碼"}),t.abrupt("return");case 12:if(e.checkPassword){t.next=15;break}return w["a"].fire({icon:"warning",title:"請填寫密碼確認"}),t.abrupt("return");case 15:if(e.password===e.checkPassword){t.next=19;break}return w["a"].fire({icon:"warning",title:"密碼確認不一致，請再次填寫"}),e.checkPassword="",t.abrupt("return");case 19:return t.prev=19,n={account:e.account,name:e.name,email:e.email,password:e.password,checkPassword:e.checkPassword},e.isProcessing=!0,t.next=24,x.signUp({formData:n});case 24:if(a=t.sent,r=a.data,"success"===r.status){t.next=28;break}throw new Error(r.message);case 28:w["a"].fire({icon:"success",title:"註冊成功"}),e.$router.push({name:"login"}),t.next=37;break;case 32:t.prev=32,t.t0=t["catch"](19),w["a"].fire({icon:"error",title:"無法註冊帳號，請稍後再試"}),e.isProcessing=!1,console.log(t.t0);case 37:case"end":return t.stop()}}),t,null,[[19,32]])})))()}}},P=y,_=(n("21f9"),Object(u["a"])(P,g,v,!1,null,"89457a7c",null)),C=_.exports,S=n("4360");a["a"].use(m["a"]);var O=new m["a"]({linkExactActiveClass:"nav-active",routes:[{path:"/",name:"root",redirect:"/login"},{path:"/regist",name:"regist",component:C},{path:"/login",name:"login",component:function(){return n.e("chunk-2cb47342").then(n.bind(null,"a55b"))}},{path:"/setting",name:"setting",component:function(){return n.e("chunk-913d493c").then(n.bind(null,"4ef5"))}},{path:"/tweets/:tweet_id",name:"tweet-reply",component:function(){return Promise.all([n.e("chunk-21bf94a0"),n.e("chunk-9ca2dc90"),n.e("chunk-784248ef")]).then(n.bind(null,"99ea"))}},{path:"/tweets",name:"tweets-main",component:function(){return Promise.all([n.e("chunk-21bf94a0"),n.e("chunk-9ca2dc90"),n.e("chunk-1e19cf3d")]).then(n.bind(null,"b6c0"))}},{path:"/users/:id/followers",name:"user-follower",component:function(){return Promise.all([n.e("chunk-21bf94a0"),n.e("chunk-2a20f7fe")]).then(n.bind(null,"7384"))}},{path:"/users/:id/followings",name:"user-following",component:function(){return Promise.all([n.e("chunk-21bf94a0"),n.e("chunk-c6ba1218")]).then(n.bind(null,"cc95"))}},{path:"/users/:id/tweet",name:"user-profile-tweet",component:function(){return Promise.all([n.e("chunk-21bf94a0"),n.e("chunk-2e466edd"),n.e("chunk-68732526")]).then(n.bind(null,"5a38"))}},{path:"/users/:id/reply",name:"user-profile-reply",component:function(){return Promise.all([n.e("chunk-21bf94a0"),n.e("chunk-2e466edd"),n.e("chunk-75545c58")]).then(n.bind(null,"c878"))}},{path:"/users/:id/like",name:"user-profile-like",component:function(){return Promise.all([n.e("chunk-21bf94a0"),n.e("chunk-2e466edd"),n.e("chunk-5de7cbcc")]).then(n.bind(null,"5c7c"))}},{path:"/admin",name:"admin-login",component:function(){return n.e("chunk-aeeebda8").then(n.bind(null,"23b1"))}},{path:"/admin_tweets",name:"admin-tweets",component:function(){return Promise.all([n.e("chunk-21bf94a0"),n.e("chunk-7fee5c05")]).then(n.bind(null,"fa6a"))}},{path:"/admin_users",name:"admin-users",component:function(){return Promise.all([n.e("chunk-21bf94a0"),n.e("chunk-427dd26c")]).then(n.bind(null,"6135"))}},{path:"/chatroom",name:"chatroom",component:function(){return n.e("chunk-67369784").then(n.bind(null,"bf48"))}},{path:"*",name:"not-found",component:k}]});O.beforeEach(function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t,n,a){var r,c,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=localStorage.getItem("token"),c=S["a"].state.token,o=S["a"].state.isAuthenticated,console.log(S["a"].state.isAuthenticated),!r||r===c){e.next=8;break}return e.next=7,S["a"].dispatch("fetchCurrentUser");case 7:o=e.sent;case 8:if(i=["admin-login","login","regist"],o||i.includes(t.name)){e.next=12;break}return a("/login"),e.abrupt("return");case 12:a();case 13:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}());var j=O,E=n("ecee"),I=n("c074"),U=n("ad3d");E["d"].add(I["h"],I["d"],I["g"],I["a"],I["f"],I["b"],I["c"],I["e"]),a["a"].component("font-awesome-icon",U["a"]),E["b"].watch(),a["a"].config.productionTip=!1,new a["a"]({router:j,store:S["a"],render:function(e){return e(l)}}).$mount("#app")},"85ec":function(e,t,n){},"8ddc":function(e,t,n){}});
//# sourceMappingURL=app.e38cf4a6.js.map