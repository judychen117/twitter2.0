(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9ca2dc90"],{"05b0":function(t,e,r){t.exports=r.p+"img/chat.b4f7574f.svg"},"0cb2":function(t,e,r){var a=r("7b0b"),n=Math.floor,s="".replace,i=/\$([$&'`]|\d\d?|<[^>]*>)/g,o=/\$([$&'`]|\d\d?)/g;t.exports=function(t,e,r,c,l,u){var d=r+t.length,f=c.length,v=o;return void 0!==l&&(l=a(l),v=i),s.call(u,v,(function(a,s){var i;switch(s.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(d);case"<":i=l[s.slice(1,-1)];break;default:var o=+s;if(0===o)return a;if(o>f){var u=n(o/10);return 0===u?a:u<=f?void 0===c[u-1]?s.charAt(1):c[u-1]+s.charAt(1):a}i=c[o-1]}return void 0===i?"":i}))}},"14c3":function(t,e,r){var a=r("c6b6"),n=r("9263");t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var s=r.call(t,e);if("object"!==typeof s)throw TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==a(t))throw TypeError("RegExp#exec called on incompatible receiver");return n.call(t,e)}},1602:function(t,e,r){"use strict";var a=r("2fa3"),n=function(){return localStorage.getItem("token")};e["a"]={users:{get:function(){return console.log(n()),a["b"].get("/users",{headers:{Authorization:"Bearer ".concat(n())}})}},user:{get:function(t){var e=t.id;return a["b"].get("/users/".concat(e),{headers:{Authorization:"Bearer ".concat(n())}})}},addFollowing:function(t){var e=t.id;return a["b"].post("/followships",{id:e},{headers:{Authorization:"Bearer ".concat(n())}})},deleteFollowing:function(t){var e=t.followingId;return a["b"].delete("/followships/".concat(e),{headers:{Authorization:"Bearer ".concat(n())}})},addLiked:function(t){return a["b"].post("/tweets/".concat(t,"/like"),null,{headers:{Authorization:"Bearer ".concat(n())}})},deleteLiked:function(t){return a["b"].post("/tweets/".concat(t,"/unlike"),null,{headers:{Authorization:"Bearer ".concat(n())}})},getTweet:function(t){var e=t.id;return a["b"].get("/users/".concat(e,"/tweets"),{headers:{Authorization:"Bearer ".concat(n())}})},getReply:function(t){var e=t.id;return a["b"].get("/users/".concat(e,"/replied_tweets"),{headers:{Authorization:"Bearer ".concat(n())}})},getLike:function(t){var e=t.id;return a["b"].get("/users/".concat(e,"/likes"),{headers:{Authorization:"Bearer ".concat(n())}})},userEdit:{editSetting:function(t){var e=t.id,r=t.formData;return a["b"].put("/users/".concat(e),r,{headers:{Authorization:"Bearer ".concat(n())}})},getSetting:function(t){return a["b"].get("/users/".concat(t,"/edit"),{headers:{Authorization:"Bearer ".concat(n())}})}}}},3229:function(t,e,r){},"338c":function(t,e,r){"use strict";r("7002")},"4b01":function(t,e,r){t.exports=r.p+"img/divider.642b8121.svg"},5319:function(t,e,r){"use strict";var a=r("d784"),n=r("825a"),s=r("50c4"),i=r("a691"),o=r("1d80"),c=r("8aa5"),l=r("0cb2"),u=r("14c3"),d=Math.max,f=Math.min,v=function(t){return void 0===t?t:String(t)};a("replace",2,(function(t,e,r,a){var p=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=a.REPLACE_KEEPS_$0,g=p?"$":"$0";return[function(r,a){var n=o(this),s=void 0==r?void 0:r[t];return void 0!==s?s.call(r,n,a):e.call(String(n),r,a)},function(t,a){if(!p&&m||"string"===typeof a&&-1===a.indexOf(g)){var o=r(e,t,this,a);if(o.done)return o.value}var h=n(t),w=String(this),b="function"===typeof a;b||(a=String(a));var x=h.global;if(x){var C=h.unicode;h.lastIndex=0}var _=[];while(1){var k=u(h,w);if(null===k)break;if(_.push(k),!x)break;var E=String(k[0]);""===E&&(h.lastIndex=c(w,s(h.lastIndex),C))}for(var y="",R=0,A=0;A<_.length;A++){k=_[A];for(var U=String(k[0]),S=d(f(i(k.index),w.length),0),$=[],I=1;I<k.length;I++)$.push(v(k[I]));var O=k.groups;if(b){var P=[U].concat($,S,w);void 0!==O&&P.push(O);var T=String(a.apply(void 0,P))}else T=l(U,w,S,$,O,a);S>=R&&(y+=w.slice(R,S)+T,R=S+U.length)}return y+w.slice(R)}]}))},6783:function(t,e,r){"use strict";r("a4d3"),r("e01a");var a=r("2fa3"),n=function(){return localStorage.getItem("token")};e["a"]={tweets:{get:function(){return a["b"].get("/tweets",{headers:{Authorization:"Bearer ".concat(n())}})},post:function(t){var e=t.description;return a["b"].post("/tweets",{description:e},{headers:{Authorization:"Bearer ".concat(n())}})}},tweet:{get:function(t){var e=t.tweet_id;return a["b"].get("/tweets/".concat(e),{headers:{Authorization:"Bearer ".concat(n())}})},replyTweet:function(t){var e=t.tweet_id,r=t.comment;return a["b"].post("/tweets/".concat(e,"/replies"),{comment:r},{headers:{Authorization:"Bearer ".concat(n())}})}}}},"6edd":function(t,e,r){t.exports=r.p+"img/commentIcon.17ee81ba.svg"},7002:function(t,e,r){},"88fd":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"recommend-bar"},[r("div",{staticClass:"recommend mt-3"},[t._m(0),r("div",{staticClass:"recommend-followers"},[r("ul",{staticClass:"recommend-followers-list"},t._l(t.recommendUsers,(function(e){return r("li",{key:e.id,staticClass:"recommend-followers-item"},[r("router-link",{staticClass:"recommend-followers-title",attrs:{to:{name:"user-profile-tweet",params:{id:e.id}}}},[r("img",{staticClass:"tweets-avatar",attrs:{src:t._f("emptyPicture")(e.avatar),alt:"avatar"}}),r("div",[r("p",{staticClass:"recommend-followers-name"},[t._v(t._s(e.name))]),r("p",{staticClass:"recommend-followers-id"},[t._v(" "+t._s(e.account)+" ")])])]),e.isFollowed?r("button",{staticClass:"followers-item-button",on:{click:function(r){return r.stopPropagation(),r.preventDefault(),t.deleteFollowing(e.id)}}},[t._v(" 正在跟隨 ")]):r("button",{staticClass:"followers-item-button",on:{click:function(r){return r.stopPropagation(),r.preventDefault(),t.addFollowing(e.id)}}},[t._v(" 跟隨 ")])],1)})),0)]),r("div",{staticClass:"recommend-fotter"},[t._v("顯示更多")])])])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"recommend-title"},[r("p",[t._v("跟隨誰")])])}],s=r("5530"),i=r("1da1"),o=(r("d81d"),r("96cf"),r("1602")),c=r("2fa3"),l=r("2708"),u={data:function(){return{recommendUsers:[]}},created:function(){this.fetcgRecomendUsers()},methods:{fetcgRecomendUsers:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o["a"].users.get();case 3:r=e.sent,a=r.data,t.recommendUsers=a,console.log(t.recommendUsers),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),c["a"].fire({icon:"error",title:"暫時無法獲取推薦名單,請稍後再試"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},deleteFollowing:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o["a"].deleteFollowing({followingId:t});case 3:if(a=r.sent,n=a.data,"success"===n.status){r.next=7;break}throw new Error(n.message);case 7:e.recommendUsers=e.recommendUsers.map((function(e){return e.id!==t?e:Object(s["a"])(Object(s["a"])({},e),{},{followerCount:e.followerCount-1,isFollowed:!1})})),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](0),c["a"].fire({icon:"error",title:"暫時無法取消追隨,請稍後再試"});case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()},addFollowing:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o["a"].addFollowing({id:t});case 3:if(a=r.sent,n=a.data,"success"===n.status){r.next=7;break}throw new Error(n.message);case 7:e.recommendUsers=e.recommendUsers.map((function(e){return e.id!==t?e:Object(s["a"])(Object(s["a"])({},e),{},{followerCount:e.followerCount+1,isFollowed:!0})})),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](0),c["a"].fire({icon:"error",title:"暫時無法追隨,請稍後再試"});case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()}},mixins:[l["a"]]},d=u,f=(r("9b08"),r("2877")),v=Object(f["a"])(d,a,n,!1,null,"14e02274",null);e["a"]=v.exports},"8aa5":function(t,e,r){"use strict";var a=r("6547").charAt;t.exports=function(t,e,r){return e+(r?a(t,e).length:1)}},9263:function(t,e,r){"use strict";var a=r("ad6d"),n=r("9f7f"),s=RegExp.prototype.exec,i=String.prototype.replace,o=s,c=function(){var t=/a/,e=/b*/g;return s.call(t,"a"),s.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=n.UNSUPPORTED_Y||n.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=c||u||l;d&&(o=function(t){var e,r,n,o,d=this,f=l&&d.sticky,v=a.call(d),p=d.source,m=0,g=t;return f&&(v=v.replace("y",""),-1===v.indexOf("g")&&(v+="g"),g=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(p="(?: "+p+")",g=" "+g,m++),r=new RegExp("^(?:"+p+")",v)),u&&(r=new RegExp("^"+p+"$(?!\\s)",v)),c&&(e=d.lastIndex),n=s.call(f?r:d,g),f?n?(n.input=n.input.slice(m),n[0]=n[0].slice(m),n.index=d.lastIndex,d.lastIndex+=n[0].length):d.lastIndex=0:c&&n&&(d.lastIndex=d.global?n.index+n[0].length:e),u&&n&&n.length>1&&i.call(n[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(n[o]=void 0)})),n}),t.exports=o},9291:function(t,e,r){t.exports=r.p+"img/likeIcon.5fd74e35.svg"},9309:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-box"},[a("div",{staticClass:"popup"},[a("div",{staticClass:"header"},[a("img",{staticClass:"close",attrs:{src:r("c3b6"),alt:"close"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.closeModal(e)}}})]),a("div",{staticClass:"tweets-card"},[a("img",{staticClass:"tweets-avatar",attrs:{src:t.tweet.User.avatar,alt:"avatar"}}),a("div",{staticClass:"tweets-content"},[a("a",{staticClass:"tweets-title",attrs:{href:""}},[a("div",{staticClass:"tweets-name"},[t._v(t._s(t.tweet.User.name))]),a("div",{staticClass:"tweets-id"},[t._v(t._s(t.tweet.User.account)+"・")]),a("div",{staticClass:"tweets-time"},[t._v(t._s(t._f("fromNow")(t.tweet.createdAt)))])]),a("router-link",{attrs:{to:{name:"tweet-reply",params:{tweet_id:t.tweet.id}}}},[a("div",{staticClass:"tweet tweets-text"},[a("p",{staticClass:"card-text"},[t._v(" "+t._s(t.tweet.description)+" ")])])]),a("div",{staticClass:"reply-info"},[a("span",[t._v("回覆給")]),a("span",[a("a",{staticClass:"tweets-post-user",attrs:{href:""}},[t._v(t._s(t.tweet.User.account))])])])],1)]),a("div",{staticClass:"tweets-post-card"},[a("div",{staticClass:"tweets-post"},[a("img",{staticClass:"tweets-divider",attrs:{src:r("4b01"),alt:"divider"}}),a("router-link",{attrs:{to:{name:"user-profile-tweet",params:{id:t.currentUser.id}}}},[a("img",{staticClass:"tweets-avatar-myself tweets-avatar",attrs:{src:t.currentUser.avatar,alt:"avatar"}})]),a("form",{staticClass:"tweets-form",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit(e)}}},[a("div",{staticClass:"tweets-text"},[a("label",{attrs:{for:"text"}}),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"form-control",attrs:{rows:"3",name:"text",placeholder:"推你的回覆"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),t._m(0)])],1)])])])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tweets-submit"},[r("button",{staticClass:"tweets-button",attrs:{type:"submit"}},[t._v("回覆")])])}],s=r("1da1"),i=r("5530"),o=(r("96cf"),r("5319"),r("ac1f"),r("2708")),c=r("2fa3"),l=r("6783"),u=r("2f62"),d={mixins:[o["c"]],props:{initialModalTweet:{type:Object,default:function(){return{id:"1",UserId:"1",description:"Ipsa nihil nemo mollitia autem adipisci quis dolorem.",createdAt:"2021-03-08T16:14:00.000Z",User:{id:"1",email:"user1@example.com",password:"$2a$10$b6qBvYwzLV6dwuX6usgdR.arjW5VLVPHfQ/k54zzFq2mnaDUyh486",name:"user1",avatar:"https://loremflickr.com/320/240/user/?lock=22.865033574174177",introduction:"Qui vitae hic esse veritatis.",role:"user",account:"@說好不打臉",cover:"https://loremflickr.com/520/320/banner/?lock=73.83472776587239",createdAt:"2021-03-08T16:13:59.000Z",updatedAt:"2021-03-08T16:13:59.000Z"}}}}},data:function(){return{tweet:this.initialModalTweet,text:"",showModal:"none"}},watch:{initialModalTweet:{handler:function(t){console.log("new",t),this.tweet=Object(i["a"])(Object(i["a"])({},this.tweet),t)}}},computed:Object(i["a"])({},Object(u["b"])(["currentUser"])),methods:{handleSubmit:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,""!==t.text.replace(/\s*/g,"")){e.next=4;break}return c["a"].fire({icon:"error",title:"推文內容不能空白,請輸入內容"}),e.abrupt("return");case 4:return r=t.text,console.log("comment",r),e.next=8,l["a"].tweet.replyTweet({tweet_id:t.tweet.id,comment:r});case 8:if(a=e.sent,n=a.data,"success"===n.status){e.next=12;break}throw new Error(n.message);case 12:t.text="",t.$emit("close-post-modal",t.showModal),e.next=19;break;case 16:e.prev=16,e.t0=e["catch"](0),c["a"].fire({icon:"error",title:"暫時無法新增推文,請稍後再試"});case 19:case"end":return e.stop()}}),e,null,[[0,16]])})))()},closeModal:function(){this.$emit("close-post-modal",this.showModal)}}},f=d,v=(r("338c"),r("2877")),p=Object(v["a"])(f,a,n,!1,null,"3ad1e4d3",null);e["a"]=p.exports},"9b08":function(t,e,r){"use strict";r("e8a8")},"9f7f":function(t,e,r){"use strict";var a=r("d039");function n(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=a((function(){var t=n("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=a((function(){var t=n("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a5f6:function(t,e,r){"use strict";r("3229")},ac1f:function(t,e,r){"use strict";var a=r("23e7"),n=r("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},ad6d:function(t,e,r){"use strict";var a=r("825a");t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b768:function(t,e,r){t.exports=r.p+"img/icon_like_fill.2426b6b3.svg"},c3b6:function(t,e,r){t.exports=r.p+"img/cancel.18445307.svg"},d178:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-bar"},[a("div",{staticClass:"mt-3"},[a("router-link",{staticClass:"nav-logo",attrs:{to:{name:"tweets-main"}}},[a("img",{staticClass:"logo",attrs:{src:r("0eb7"),alt:"logo"}})]),a("ul",{staticClass:"nav-list"},[a("li",{staticClass:"nav-item nav-home"},[a("router-link",{attrs:{to:{name:"tweets-main"}}},[a("i",{staticClass:"nav-icon fas fa-home"}),a("p",[t._v("首頁")])])],1),a("li",{staticClass:"nav-item"},[a("router-link",{attrs:{to:{name:"chatroom"}}},[a("img",{staticClass:"nav-icon",attrs:{src:r("e334"),alt:"chat"}}),a("p",[t._v("通知")])])],1),a("li",{staticClass:"nav-item"},[a("router-link",{attrs:{to:{name:"chatroom"}}},[a("img",{staticClass:"nav-icon",attrs:{src:r("05b0"),alt:"chat"}}),a("p",[t._v("公開聊天室")])])],1),a("li",{staticClass:"nav-item"},[a("router-link",{attrs:{to:{name:"chatroom"}}},[a("img",{staticClass:"nav-icon",attrs:{src:r("05b0"),alt:"chat"}}),a("p",[t._v("私人訊息")])])],1),a("li",{staticClass:"nav-item nav-profile"},[a("router-link",{attrs:{to:{name:"user-profile-tweet",params:{id:t.currentUser.id}}}},[a("i",{staticClass:"nav-icon fas fa-user-alt"}),a("p",[t._v("個人資料")])])],1),a("li",{staticClass:"nav-item nav-setting"},[a("router-link",{attrs:{to:{name:"setting"}}},[a("i",{staticClass:"nav-icon fas fa-cog"}),a("p",[t._v("設定")])])],1),a("li",[a("button",{staticClass:"nav-teweet-button button",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addPost(e)}}},[t._v(" 推文 ")])])]),a("router-link",{staticClass:"nav-item nav-sign-out",attrs:{to:{name:"login"}}},[a("i",{staticClass:"nav-icon fas fa-sign-out-alt",on:{click:t.logout}}),a("p",{on:{click:t.logout}},[t._v("登出")])])],1)])},n=[],s=r("5530"),i=r("2f62"),o={data:function(){return{showModal:"post"}},computed:Object(s["a"])({},Object(i["b"])(["currentUser","isAuthenticated"])),methods:{addPost:function(){this.showModal="post",this.$emit("show-post-modal",this.showModal)},logout:function(){this.$store.commit("revokeAuthentication"),this.$router.push("/login")}}},c=o,l=(r("a5f6"),r("2877")),u=Object(l["a"])(c,a,n,!1,null,"19543579",null);e["a"]=u.exports},d784:function(t,e,r){"use strict";r("ac1f");var a=r("6eeb"),n=r("d039"),s=r("b622"),i=r("9263"),o=r("9112"),c=s("species"),l=!n((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=s("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),v=!n((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,d){var p=s(t),m=!n((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),g=m&&!n((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[c]=function(){return r},r.flags="",r[p]=/./[p]),r.exec=function(){return e=!0,null},r[p](""),!e}));if(!m||!g||"replace"===t&&(!l||!u||f)||"split"===t&&!v){var h=/./[p],w=r(p,""[t],(function(t,e,r,a,n){return e.exec===i?m&&!n?{done:!0,value:h.call(e,r,a)}:{done:!0,value:t.call(r,e,a)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),b=w[0],x=w[1];a(String.prototype,t,b),a(RegExp.prototype,p,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)})}d&&o(RegExp.prototype[p],"sham",!0)}},d81d:function(t,e,r){"use strict";var a=r("23e7"),n=r("b727").map,s=r("1dde"),i=s("map");a({target:"Array",proto:!0,forced:!i},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},e01a:function(t,e,r){"use strict";var a=r("23e7"),n=r("83ab"),s=r("da84"),i=r("5135"),o=r("861d"),c=r("9bf2").f,l=r("e893"),u=s.Symbol;if(n&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new u(t):void 0===t?u():u(t);return""===t&&(d[e]=!0),e};l(f,u);var v=f.prototype=u.prototype;v.constructor=f;var p=v.toString,m="Symbol(test)"==String(u("test")),g=/^Symbol\((.*)\)[^)]+$/;c(v,"description",{configurable:!0,get:function(){var t=o(this)?this.valueOf():this,e=p.call(t);if(i(d,t))return"";var r=m?e.slice(7,-1):e.replace(g,"$1");return""===r?void 0:r}}),a({global:!0,forced:!0},{Symbol:f})}},e334:function(t,e,r){t.exports=r.p+"img/Notice.4c08ba67.svg"},e8a8:function(t,e,r){}}]);
//# sourceMappingURL=chunk-9ca2dc90.fb37a551.js.map