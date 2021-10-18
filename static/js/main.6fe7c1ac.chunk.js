(this["webpackJsonpreact-movie-app"]=this["webpackJsonpreact-movie-app"]||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},102:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(39),s=c.n(a),i=c(19),o=(c(49),c(50),c(51),c(5)),l=c(4),j=(c(52),c.p+"static/media/logo.11e067ef.png"),u="react-movie-app",d=c(0),b=[{display:"Home",path:"/".concat(u)},{display:"Movies",path:"/".concat(u,"/movie")},{display:"TV Series",path:"/".concat(u,"/tv")}],m=function(){var e=Object(l.g)().pathname,t=Object(n.useRef)(null),c=b.findIndex((function(t){return t.path===e}));return Object(n.useEffect)((function(){var e=function(){document.body.scrollTop>100||document.documentElement.scrollTop>100?t.current.classList.add("shrink"):t.current.classList.remove("shrink")};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),Object(d.jsx)("div",{ref:t,className:"header",children:Object(d.jsxs)("div",{className:"header__wrap container",children:[Object(d.jsxs)("div",{className:"logo",children:[Object(d.jsx)("img",{src:j,alt:"logo"}),Object(d.jsx)(o.b,{to:"/".concat(u),children:"hMovies"})]}),Object(d.jsx)("ul",{className:"header__nav",children:b.map((function(e,t){return Object(d.jsx)("li",{className:"".concat(t===c?"active":""),children:Object(d.jsx)(o.b,{to:e.path,children:e.display})},t)}))})]})})},h=(c(59),c.p+"static/media/footer-bg.67e95f05.jpg"),p=function(){return Object(d.jsx)("div",{className:"footer",style:{backgroundImage:"url(".concat(h,")")},children:Object(d.jsxs)("div",{className:"footer__content container",children:[Object(d.jsx)("div",{className:"footer__content__logo",children:Object(d.jsxs)("div",{className:"logo",children:[Object(d.jsx)("img",{src:j,alt:"logo"}),Object(d.jsx)(o.b,{to:"/".concat(u),children:"hMovies"})]})}),Object(d.jsxs)("div",{className:"footer__content__menus",children:[Object(d.jsxs)("div",{className:"footer__content__menu",children:[Object(d.jsx)(o.b,{to:"/".concat(u),children:"Home"}),Object(d.jsx)(o.b,{to:"/".concat(u),children:"Contact us"}),Object(d.jsx)(o.b,{to:"/".concat(u),children:"Term of service"}),Object(d.jsx)(o.b,{to:"/".concat(u),children:"About us"})]}),Object(d.jsxs)("div",{className:"footer__content__menu",children:[Object(d.jsx)(o.b,{to:"/".concat(u),children:"Live"}),Object(d.jsx)(o.b,{to:"/".concat(u),children:"FAQ"}),Object(d.jsx)(o.b,{to:"/".concat(u),children:"Premium"}),Object(d.jsx)(o.b,{to:"/".concat(u),children:"Privacy policy"})]}),Object(d.jsxs)("div",{className:"footer__content__menu",children:[Object(d.jsx)(o.b,{to:"/".concat(u),children:"You must watch"}),Object(d.jsx)(o.b,{to:"/".concat(u),children:"Recent release"}),Object(d.jsx)(o.b,{to:"/".concat(u),children:"Top IMDB"})]})]})]})})},O=(c(60),function(e){return Object(d.jsx)("button",{className:"btn ".concat(e.className),onClick:e.onClick?function(){return e.onClick()}:null,children:e.children})}),v=function(e){return Object(d.jsx)(O,{className:"btn-outline ".concat(e.className),onClick:e.onClick?function(){return e.onClick()}:null,children:e.children})},x=O,f=c(7),g=c.n(f),_=c(10),y=c(9),N=c(105),k=c(103),w=c(106),C=c(104),L=(c(62),function(e){var t=Object(n.useRef)(null);return Object(d.jsxs)("div",{ref:t,className:"modal__content",children:[e.children,Object(d.jsx)("div",{className:"modal__content__close",onClick:function(){t.current.parentNode.classList.remove("active"),e.onClose&&e.onClose()},children:Object(d.jsx)("i",{className:"bx bx-x"})})]})}),S=function(e){var t=Object(n.useState)(!1),c=Object(y.a)(t,2),r=c[0],a=c[1];return Object(n.useEffect)((function(){a(e.active)}),[e.active]),Object(d.jsx)("div",{id:e.id,className:"modal ".concat(r?"active":""),children:e.children})},T=c(42),I=c.n(T),E=c(43),M=c.n(E),V={baseUrl:"https://api.themoviedb.org/3/",apiKey:"193593681eeeb9f10b20ee6506e9af8b",originalImage:function(e){return"https://image.tmdb.org/t/p/original/".concat(e)},w500Image:function(e){return"https://image.tmdb.org/t/p/w500/".concat(e)}},F=I.a.create({baseURL:V.baseUrl,headers:{"Content-Type":"application/json"},paramsSerializer:function(e){return M.a.stringify(Object(i.a)(Object(i.a)({},e),{},{api_key:V.apiKey}))}});F.interceptors.request.use(function(){var e=Object(_.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),F.interceptors.response.use((function(e){return e&&e.data?e.data:e}),(function(e){throw e}));var R=F,q={movie:"movie",tv:"tv"},A={upcoming:"upcoming",popular:"popular",top_rated:"top_rated"},B={popular:"popular",top_rated:"top_rated",on_the_air:"on_the_air"},P={getMoviesList:function(e,t){var c="movie/"+A[e];return R.get(c,t)},getTvList:function(e,t){var c="tv/"+B[e];return R.get(c,t)},getVideos:function(e,t){var c=q[e]+"/"+t+"/videos";return R.get(c,{params:{}})},search:function(e,t){var c="search/"+q[e];return R.get(c,t)},detail:function(e,t,c){var n=q[e]+"/"+t;return R.get(n,c)},credits:function(e,t){var c=q[e]+"/"+t+"/credits";return R.get(c,{params:{}})},similar:function(e,t){var c=q[e]+"/"+t+"/similar";return R.get(c,{params:{}})}},H=(c(95),function(e){var t=Object(l.f)(),c=e.item,n=V.originalImage(c.backdrop_path?c.backdrop_path:c.poster_path),r=function(){var e=Object(_.a)(g.a.mark((function e(){var t,n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.querySelector("#modal_".concat(c.id)),e.next=3,P.getVideos(q.movie,c.id);case 3:(n=e.sent).results.length>0?(r="https://www.youtube.com/embed/"+n.results[0].key,t.querySelector(".modal__content > iframe").setAttribute("src",r)):t.querySelector(".modal__content").innerHTML="No trailer",t.classList.toggle("active");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"hero-slide__item ".concat(e.className),style:{backgroundImage:"url(".concat(n,")")},children:Object(d.jsxs)("div",{className:"hero-slide__item__content container",children:[Object(d.jsxs)("div",{className:"hero-slide__item__content__info",children:[Object(d.jsx)("h2",{className:"title",children:c.title}),Object(d.jsx)("div",{className:"overview",children:c.overview}),Object(d.jsxs)("div",{className:"btns",children:[Object(d.jsx)(x,{onClick:function(){return t.push("/".concat(u,"/movie/")+c.id)},children:"Watch now"}),Object(d.jsx)(v,{onClick:r,children:"Watch trailer"})]})]}),Object(d.jsx)("div",{className:"hero-slide__item__content__poster",children:Object(d.jsx)("img",{src:V.w500Image(c.poster_path),alt:""})})]})})}),U=function(e){var t=e.item,c=Object(n.useRef)(null);return Object(d.jsx)(S,{active:!1,id:"modal_".concat(t.id),children:Object(d.jsx)(L,{onClose:function(){return c.current.setAttribute("src","")},children:Object(d.jsx)("iframe",{ref:c,width:"100%",height:"500px",title:"trailer"})})})},W=function(){N.a.use([k.a]);var e=Object(n.useState)([]),t=Object(y.a)(e,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(_.a)(g.a.mark((function e(){var t,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={page:1},e.prev=1,e.next=4,P.getMoviesList(A.popular,{params:t});case 4:c=e.sent,r(c.results.slice(0,4)),console.log(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("error");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(d.jsxs)("div",{className:"hero-slide",children:[Object(d.jsx)(w.a,{modules:[k.a],grabCursor:!0,spaceBetween:0,slidesPerView:1,autoplay:{delay:4e3},children:c.map((function(e,t){return Object(d.jsx)(C.a,{children:function(t){var c=t.isActive;return Object(d.jsx)(H,{item:e,className:"".concat(c?"active":"")})}},t)}))}),c.map((function(e,t){return Object(d.jsx)(U,{item:e},t)}))]})},D=(c(96),c(97),function(e){var t=e.item,c="/"+u+"/"+q[e.category]+"/"+t.id,n=V.w500Image(t.poster_path||t.backdrop_path);return Object(d.jsxs)(o.b,{to:c,children:[Object(d.jsx)("div",{className:"movie-card",style:{backgroundImage:"url(".concat(n,")")},children:Object(d.jsx)(x,{children:Object(d.jsx)("i",{className:"bx bx-play"})})}),Object(d.jsx)("h3",{children:t.title||t.name})]})}),J=function(e){var t=Object(n.useState)([]),c=Object(y.a)(t,2),r=c[0],a=c[1];return Object(n.useEffect)((function(){(function(){var t=Object(_.a)(g.a.mark((function t(){var c,n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=null,n={},"similar"===e.type){t.next=15;break}t.t0=e.category,t.next=t.t0===q.movie?6:10;break;case 6:return t.next=8,P.getMoviesList(e.type,{params:n});case 8:return c=t.sent,t.abrupt("break",13);case 10:return t.next=12,P.getTvList(e.type,{params:n});case 12:c=t.sent;case 13:t.next=18;break;case 15:return t.next=17,P.similar(e.category,e.id);case 17:c=t.sent;case 18:a(c.results);case 19:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e.category,e.id,e.type]),Object(d.jsx)("div",{className:"movie-list",children:Object(d.jsx)(w.a,{grabCursor:!0,spaceBetween:10,slidesPerView:"auto",children:r.map((function(t,c){return Object(d.jsx)(C.a,{children:Object(d.jsx)(D,{item:t,category:e.category})},c)}))})})},K=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(W,{}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"section mb-3",children:[Object(d.jsxs)("div",{className:"section__header mb-2",children:[Object(d.jsx)("h2",{children:"Trending Movies"}),Object(d.jsx)(o.b,{to:"/".concat(u,"/movie"),children:Object(d.jsx)(v,{className:"small",children:"View more"})})]}),Object(d.jsx)(J,{category:q.movie,type:A.popular})]}),Object(d.jsxs)("div",{className:"section mb-3",children:[Object(d.jsxs)("div",{className:"section__header mb-2",children:[Object(d.jsx)("h2",{children:"Top Rated Movies"}),Object(d.jsx)(o.b,{to:"/".concat(u,"/movie"),children:Object(d.jsx)(v,{className:"small",children:"View more"})})]}),Object(d.jsx)(J,{category:q.movie,type:A.top_rated})]}),Object(d.jsxs)("div",{className:"section mb-3",children:[Object(d.jsxs)("div",{className:"section__header mb-2",children:[Object(d.jsx)("h2",{children:"Trending TV"}),Object(d.jsx)(o.b,{to:"/".concat(u,"/tv"),children:Object(d.jsx)(v,{className:"small",children:"View more"})})]}),Object(d.jsx)(J,{category:q.tv,type:B.popular})]}),Object(d.jsxs)("div",{className:"section mb-3",children:[Object(d.jsxs)("div",{className:"section__header mb-2",children:[Object(d.jsx)("h2",{children:"Top Rated TV"}),Object(d.jsx)(o.b,{to:"/".concat(u,"/tv"),children:Object(d.jsx)(v,{className:"small",children:"View more"})})]}),Object(d.jsx)(J,{category:q.tv,type:B.top_rated})]})]})]})},z=c(28),Q=(c(98),c(99),function(e){return Object(d.jsx)("input",{type:e.type,placeholder:e.placeholder,value:e.value,onChange:e.onChange?function(t){return e.onChange(t)}:null})}),Y=function(e){var t=Object(l.f)(),c=Object(n.useState)(e.keyword?e.keyword:""),r=Object(y.a)(c,2),a=r[0],s=r[1],i=Object(n.useCallback)((function(){a.trim().length>0&&t.push("/".concat(u,"/").concat(q[e.category],"/search/").concat(a))}),[a,e.category,t]);return Object(n.useEffect)((function(){var e=function(e){e.preventDefault(),13===e.keyCode&&i()};return document.addEventListener("keyup",e),function(){document.removeEventListener("keyup",e)}}),[i]),Object(d.jsxs)("div",{className:"movie-search",children:[Object(d.jsx)(Q,{type:"text",placeholder:"Enter keyword",value:a,onChange:function(e){return s(e.target.value)}}),Object(d.jsx)(x,{className:"small",onClick:i,children:"Search"})]})},G=function(e){var t=Object(n.useState)([]),c=Object(y.a)(t,2),r=c[0],a=c[1],s=Object(n.useState)(1),i=Object(y.a)(s,2),o=i[0],j=i[1],u=Object(n.useState)(0),b=Object(y.a)(u,2),m=b[0],h=b[1],p=Object(l.h)().keyword;Object(n.useEffect)((function(){(function(){var t=Object(_.a)(g.a.mark((function t(){var c,n,r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=null,void 0!==p){t.next=15;break}n={},t.t0=e.category,t.next=t.t0===q.movie?6:10;break;case 6:return t.next=8,P.getMoviesList(A.upcoming,{params:n});case 8:return c=t.sent,t.abrupt("break",13);case 10:return t.next=12,P.getTvList(B.popular,{params:n});case 12:c=t.sent;case 13:t.next=19;break;case 15:return r={query:p},t.next=18,P.search(e.category,{params:r});case 18:c=t.sent;case 19:a(c.results),h(c.total_pages);case 21:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[p,e.category]);var O=function(){var t=Object(_.a)(g.a.mark((function t(){var c,n,s;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=null,void 0!==p){t.next=15;break}n={page:o+1},t.t0=e.category,t.next=t.t0===q.movie?6:10;break;case 6:return t.next=8,P.getMoviesList(A.upcoming,{params:n});case 8:return c=t.sent,t.abrupt("break",13);case 10:return t.next=12,P.getTvList(B.popular,{params:n});case 12:c=t.sent;case 13:t.next=19;break;case 15:return s={page:o+1,query:p},t.next=18,P.search(e.category,{params:s});case 18:c=t.sent;case 19:a([].concat(Object(z.a)(r),Object(z.a)(c.results))),j(o+1);case 21:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"section mb-3",children:Object(d.jsx)(Y,{category:e.category,keyword:p})}),Object(d.jsx)("div",{className:"movie-grid",children:r.map((function(t,c){return Object(d.jsx)(D,{category:e.category,item:t},c)}))}),o<m?Object(d.jsx)("div",{className:"movie-grid__loadmore",children:Object(d.jsx)(v,{className:"small",onClick:O,children:"Load more"})}):""]})},X=(c(100),function(e){return Object(d.jsx)("div",{className:"page-header",style:{backgroundImage:"url(".concat(h,")")},children:Object(d.jsx)("h2",{children:e.children})})}),Z=function(){var e=Object(l.h)().category;return console.log(e),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(X,{children:e===q.movie?"Movies":"TV Series"}),Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"section mb-3",children:Object(d.jsx)(G,{category:e})})})]})},$=(c(101),function(e){var t=Object(l.h)().category,c=Object(n.useState)([]),r=Object(y.a)(c,2),a=r[0],s=r[1];return Object(n.useEffect)((function(){(function(){var c=Object(_.a)(g.a.mark((function c(){var n;return g.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,P.credits(t,e.id);case 2:n=c.sent,s(n.cast.slice(0,5));case 4:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}})()()}),[t,e.id]),Object(d.jsx)("div",{className:"casts",children:a.map((function(e,t){return Object(d.jsxs)("div",{className:"casts__item",children:[Object(d.jsx)("div",{className:"casts__item__img",style:{backgroundImage:"url(".concat(V.w500Image(e.profile_path),")")}}),Object(d.jsx)("p",{className:"casts__item__name",children:e.name})]},t)}))})}),ee=function(e){var t=e.item,c=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=9*c.current.offsetWidth/16+"px";c.current.setAttribute("height",e)}),[]),Object(d.jsxs)("div",{className:"video",children:[Object(d.jsx)("div",{className:"video__title",children:Object(d.jsx)("h2",{children:t.name})}),Object(d.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(t.key),ref:c,width:"100%",title:"video"})]})},te=function(e){var t=Object(l.h)().category,c=Object(n.useState)([]),r=Object(y.a)(c,2),a=r[0],s=r[1];return Object(n.useEffect)((function(){(function(){var c=Object(_.a)(g.a.mark((function c(){var n;return g.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,P.getVideos(t,e.id);case 2:n=c.sent,s(n.results.slice(0,5));case 4:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}})()()}),[t,e.id]),Object(d.jsx)(d.Fragment,{children:a.map((function(e,t){return Object(d.jsx)(ee,{item:e},t)}))})},ce=function(){var e=Object(l.h)(),t=e.category,c=e.id,r=Object(n.useState)(null),a=Object(y.a)(r,2),s=a[0],i=a[1];return Object(n.useEffect)((function(){(function(){var e=Object(_.a)(g.a.mark((function e(){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.detail(t,c,{params:{}});case 2:n=e.sent,i(n),window.scrollTo(0,0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,c]),Object(d.jsx)(d.Fragment,{children:s&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"banner",style:{backgroundImage:"url(".concat(V.originalImage(s.backdrop_path||s.poster_path),")")}}),Object(d.jsxs)("div",{className:"mb-3 movie-content container",children:[Object(d.jsx)("div",{className:"movie-content__poster",children:Object(d.jsx)("div",{className:"movie-content__poster__img",style:{backgroundImage:"url(".concat(V.originalImage(s.backdrop_path||s.poster_path),")")}})}),Object(d.jsxs)("div",{className:"movie-content__info",children:[Object(d.jsx)("h1",{className:"title",children:s.title||s.name}),Object(d.jsx)("div",{className:"genres",children:s.genres&&s.genres.slice(0,5).map((function(e,t){return Object(d.jsx)("span",{className:"genres__item",children:e.name},t)}))}),Object(d.jsx)("p",{className:"overview",children:s.overview}),Object(d.jsxs)("div",{className:"cast",children:[Object(d.jsx)("div",{className:"section__header",children:Object(d.jsx)("h2",{children:"Casts"})}),Object(d.jsx)($,{id:s.id})]})]})]}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"section mb-3",children:Object(d.jsx)(te,{id:s.id})}),Object(d.jsxs)("div",{className:"section mb-3",children:[Object(d.jsx)("div",{className:"section__header mb-2",children:Object(d.jsx)("h2",{children:"Similar"})}),Object(d.jsx)(J,{category:t,type:"similar",id:s.id})]})]})]})})},ne=function(){return Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{path:"/".concat(u,"/:category/search/:keyword"),component:Z}),Object(d.jsx)(l.a,{path:"/".concat(u,"/:category/:id"),component:ce}),Object(d.jsx)(l.a,{path:"/".concat(u,"/:category"),component:Z}),Object(d.jsx)(l.a,{path:"/".concat(u),exact:!0,component:K})]})};var re=function(){return Object(d.jsx)(o.a,{children:Object(d.jsx)(l.a,{render:function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(m,Object(i.a)({},e)),Object(d.jsx)(ne,{}),Object(d.jsx)(p,{})]})}})})};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(re,{})}),document.getElementById("root"))},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},62:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){},99:function(e,t,c){}},[[102,1,2]]]);
//# sourceMappingURL=main.6fe7c1ac.chunk.js.map