(function(t){function e(e){for(var r,s,i=e[0],c=e[1],u=e[2],p=0,d=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"1a5b":function(t,e,n){"use strict";var r=n("b7f9"),a=n.n(r);a.a},"2e34":function(t,e,n){t.exports=n.p+"img/surfbuss.6fb419b8.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),n("PostComponent")],1)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"appen"}},[r("div",{staticClass:"top-img"},[r("img",{attrs:{alt:"Surfbus and coffee",src:n("2e34")}})]),r("blockquote",[t._v(" “Låt därför livet bära med sig vad det vill,"),r("br"),t._v(" och låt mig vara stark nog att ta emot vad det bjuder.” "),r("br"),t._v(" - A. Lindgren ")])])}],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",[t._v("Ordspråk och citat")]),n("p",[t._v("Dela med dig av ditt favoritcitat.")]),n("div",{staticClass:"create-post"},[n("label",{attrs:{for:"name"}},[t._v("Namn")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",id:"name",placeholder:"Namn.."},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),n("br"),n("label",{attrs:{for:"create-post"}},[t._v("Citat")]),n("br"),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{id:"create-post",placeholder:"Ditt citat.."},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),t._v(" "),n("br"),n("button",{staticClass:"create-btn",on:{click:t.createPost}},[t._v("Skapa")])]),t.error?n("p",{staticClass:"error"},[t._v(t._s(t.error))]):t._e(),n("div",{staticClass:"posts-container"},t._l(t.posts,(function(e,r){return n("div",{key:e._id,staticClass:"post",attrs:{item:e,index:r}},[e.editmode?n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"post.text"}],staticClass:"input-field",domProps:{value:e.text},on:{input:function(n){n.target.composing||t.$set(e,"text",n.target.value)}}}):n("div",{staticClass:"text"},[t._v(' "'+t._s(e.text)+'" ')]),t._v(" "),n("p",{staticClass:"name"},[t._v(" by "),e.editmode?n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"post.name"}],staticClass:"input-field",attrs:{type:"text"},domProps:{value:e.name},on:{input:function(n){n.target.composing||t.$set(e,"name",n.target.value)}}}):n("span",{staticClass:"post-name",on:{click:function(n){return t.enterEditmode(e)}}},[t._v(" "+t._s(e.name)+" ")])]),n("p",{staticClass:"text-date"},[t._v(" "+t._s(e.createdAt.getDate()+"/"+(e.createdAt.getMonth()+1)+"/"+e.createdAt.getFullYear()))]),n("button",{staticClass:"delete-button",on:{click:function(n){return t.deletePost(e._id)}}},[t._v("Radera")]),n("button",{staticClass:"update",on:{click:function(n){return t.enterEditmode(e)}}},[t._v("Ändra")]),n("button",{staticClass:"update-button",on:{click:function(n){return t.updatePost(e._id,e.name,e.text)}}},[t._v("Spara")])])})),0)])},i=[],c=(n("b0c0"),n("2909")),u=(n("96cf"),n("1da1")),l=(n("d81d"),n("d3b7"),n("5530")),p=n("d4ec"),d=n("bee2"),f=n("bc3a"),m=n.n(f),v="api/posts/",b=function(){function t(){Object(p["a"])(this,t)}return Object(d["a"])(t,null,[{key:"getPosts",value:function(){return new Promise((function(t,e){m.a.get(v).then((function(e){var n=e.data;t(n.map((function(t){return Object(l["a"])(Object(l["a"])({},t),{},{createdAt:new Date(t.createdAt)})})))})).catch((function(t){e(t)}))}))}},{key:"insertPost",value:function(t,e){return m.a.post(v,{name:t,text:e})}},{key:"updatePost",value:function(t,e,n){return m.a.put("".concat(v).concat(t),{name:e,text:n})}},{key:"deletePost",value:function(t){return m.a.delete("".concat(v).concat(t))}}]),t}(),g=b,x={name:"PostComponent",data:function(){return{posts:[],error:"",name:"",text:""}},created:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.getPosts();case 3:t.posts=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),t.error=e.t0.message;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},methods:{createPost:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g.insertPost(t.name,t.text);case 2:return e.next=4,g.getPosts();case 4:t.posts=e.sent;case 5:case"end":return e.stop()}}),e)})))()},deletePost:function(t){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,g.deletePost(t);case 2:return n.next=4,g.getPosts();case 4:e.posts=n.sent;case 5:case"end":return n.stop()}}),n)})))()},updatePost:function(t,e,n){var r=this;return Object(u["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,g.updatePost(t,e,n);case 2:return a.next=4,g.getPosts();case 4:r.posts=a.sent;case 5:case"end":return a.stop()}}),a)})))()},enterEditmode:function(t){t.editmode=!0,this.posts=Object(c["a"])(this.posts)}}},h=x,_=(n("1a5b"),n("2877")),P=Object(_["a"])(h,s,i,!1,null,null,null),w=P.exports,y={name:"App",components:{PostComponent:w}},O=y,j=(n("034f"),Object(_["a"])(O,a,o,!1,null,null,null)),k=j.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(k)}}).$mount("#app")},"85ec":function(t,e,n){},b7f9:function(t,e,n){}});
//# sourceMappingURL=app.9223910b.js.map