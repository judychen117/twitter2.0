(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aeeebda8"],{"23b1":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5"},[a("form",{on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.handleSubmit(e)}}},[t._m(0),t._m(1),a("div",{staticClass:"box"},[a("p",[t._v("帳號")]),a("label",{attrs:{for:"account"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{id:"account",name:"account",type:"text",placeholder:"",autocomplete:"username",required:"",autofocus:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("div",{staticClass:"seperation"})]),a("div",{staticClass:"box"},[a("p",[t._v("密碼")]),a("label",{attrs:{for:"password"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{id:"password",name:"password",type:"password",placeholder:"",autocomplete:"new-password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("div",{staticClass:"seperation"})]),a("button",{staticClass:"btn btn-lg btn-primary btn-block mb-3 mt-4",attrs:{type:"submit"}},[t._v(" 登入 ")]),a("div",{staticClass:"text-right mb-3 mt-4"},[a("router-link",{attrs:{to:"/login"}},[t._v(" 前台登入")])],1)])])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"logo mb-4"},[s("img",{attrs:{src:a("0eb7"),alt:"alphitter logo"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center mb-4"},[a("h1",{staticClass:"title"},[t._v("後台登入")])])}],n=a("1da1"),o=(a("96cf"),a("2fa3")),i={signIn:function(t){var e=t.email,a=t.password;return o["b"].post("/admin/signin",{email:e,password:a})}},c={data:function(){return{email:"",password:"",isProcessing:!1}},methods:{handleSubmit:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t.email&&t.password){e.next=4;break}return o["a"].fire({icon:"warning",title:"請填入email與password"}),e.abrupt("return");case 4:return t.isProcessing=!0,e.next=7,i.signIn({email:t.email,password:t.password});case 7:if(a=e.sent,console.log("response",a),s=a.data,"success"===s.status){e.next=12;break}throw new Error(s.message);case 12:localStorage.setItem("token",s.token),t.$store.commit("setCurrentUser",s.user),t.$router.push("/admin_tweets"),e.next=23;break;case 17:e.prev=17,e.t0=e["catch"](0),t.password="",o["a"].fire({icon:"warning",title:"請確認您輸入了正確的帳號密碼"}),t.isProcessing=!1,console.log(e.t0);case 23:case"end":return e.stop()}}),e,null,[[0,17]])})))()}}},l=c,u=(a("5f96"),a("2877")),p=Object(u["a"])(l,s,r,!1,null,"8d188090",null);e["default"]=p.exports},"5f96":function(t,e,a){"use strict";a("7a90")},"7a90":function(t,e,a){}}]);
//# sourceMappingURL=chunk-aeeebda8.07443b2a.js.map