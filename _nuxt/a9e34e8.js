(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2],{242:function(t,e,n){var content=n(244);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(44).default)("4c5ef43a",content,!0,{sourceMap:!1})},243:function(t,e,n){"use strict";n(242)},244:function(t,e,n){var r=n(43)((function(i){return i[1]}));r.push([t.i,"li[data-v-df7dacea]{\n  margin-top:1rem;\n  margin-bottom:1rem\n}\nh3[data-v-df7dacea], p[data-v-df7dacea]{\n  margin:0px\n}\nimg[data-v-df7dacea]{\n  margin-right:1rem;\n  height:4rem;\n  width:4rem;\n  border-radius:9999px\n}\na[data-v-df7dacea]{\n  display:flex;\n  align-items:center\n}\n.text[data-v-df7dacea]{\n  flex-grow:1\n}",""]),r.locals={},t.exports=r},246:function(t,e,n){"use strict";n.r(e);var r=n(6),c=(n(30),{data:function(){return{articles:[]}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("articles").only(["title","description","slug","image"]).sortBy("createdAt","desc").fetch();case 2:t.articles=e.sent;case 3:case"end":return e.stop()}}),e)})))()}}),l=(n(243),n(31)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.articles&&t.articles.length?n("div",{staticClass:"articles"},[n("h2",[t._v("Artikel")]),t._v(" "),n("ul",t._l(t.articles,(function(article){return n("li",{key:article.slug},[n("NuxtLink",{attrs:{to:{name:"articles-slug",params:{slug:article.slug}}}},[article.image?n("figure",[n("img",{attrs:{src:article.image,alt:""}})]):t._e(),t._v(" "),n("div",{staticClass:"text"},[n("h3",[t._v(t._s(article.title))]),t._v(" "),n("p",[t._v(t._s(article.description))])])])],1)})),0)]):t._e()}),[],!1,null,"df7dacea",null);e.default=component.exports},261:function(t,e,n){"use strict";n.r(e);var r=n(6),c=(n(30),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.params,r=t.error,e.next=3,n("index").fetch().catch((function(){r({statusCode:404,message:"Page not found"})}));case 3:return c=e.sent,e.abrupt("return",{page:c});case 5:case"end":return e.stop()}}),e)})))()}}),l=n(31),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(t._s(t.page.title))]),t._v(" "),n("p",[t._v(t._s(t.page.description))]),t._v(" "),n("nuxt-content",{attrs:{document:t.page}}),t._v(" "),n("ArticlesList")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ArticlesList:n(246).default})}}]);