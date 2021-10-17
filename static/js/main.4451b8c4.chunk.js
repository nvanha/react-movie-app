(this["webpackJsonpreact-movie-app"]=this["webpackJsonpreact-movie-app"]||[]).push([[0],{46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},55:function(e,t,n){},57:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(36),i=n.n(a),s=n(17),o=(n(45),n(46),n(47),n(11)),l=n(5),u=(n(48),n.p+"static/media/logo.11e067ef.png"),d="react-movie-app",j=n(1),b=[{display:"Home",path:"/".concat(d)},{display:"Movies",path:"/".concat(d,"/movie")},{display:"TV Series",path:"/".concat(d,"/tv")}],m=function(){var e=Object(l.g)().pathname,t=Object(c.useRef)(null),n=b.findIndex((function(t){return t.path===e}));return Object(c.useEffect)((function(){var e=function(){document.body.scrollTop>100||document.documentElement.scrollTop>100?t.current.classList.add("shrink"):t.current.classList.remove("shrink")};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),Object(j.jsx)("div",{ref:t,className:"header",children:Object(j.jsxs)("div",{className:"header__wrap container",children:[Object(j.jsxs)("div",{className:"logo",children:[Object(j.jsx)("img",{src:u,alt:"logo"}),Object(j.jsx)(o.b,{to:"/".concat(d),children:"NVANHA"})]}),Object(j.jsx)("ul",{className:"header__nav",children:b.map((function(e,t){return Object(j.jsx)("li",{className:"".concat(t===n?"active":""),children:Object(j.jsx)(o.b,{to:e.path,children:e.display})},t)}))})]})})},p=function(){return Object(j.jsx)("div",{children:"Footer"})},h=(n(55),function(e){return Object(j.jsx)("button",{className:"btn ".concat(e.className),onClick:e.onClick?function(){return e.onClick()}:null,children:e.children})}),v=function(e){return Object(j.jsx)(h,{className:"btn-outline ".concat(e.className),onClick:e.onClick?function(){return e.onClick()}:null,children:e.children})},f=h,O=n(12),x=n.n(O),g=n(16),_=n(20),N=n(95),w=n(93),y=n(96),k=n(94),C=(n(57),function(e){var t=Object(c.useRef)(null);return Object(j.jsxs)("div",{ref:t,className:"modal__content",children:[e.children,Object(j.jsx)("div",{className:"modal__content__close",onClick:function(){t.current.parentNode.classList.remove("active"),e.onClose&&e.onClose()},children:Object(j.jsx)("i",{className:"bx bx-x"})})]})}),L=function(e){var t=Object(c.useState)(!1),n=Object(_.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){a(e.active)}),[e.active]),Object(j.jsx)("div",{id:e.id,className:"modal ".concat(r?"active":""),children:e.children})},S=n(39),E=n.n(S),I=n(40),T=n.n(I),M={baseUrl:"https://api.themoviedb.org/3/",apiKey:"193593681eeeb9f10b20ee6506e9af8b",originalImage:function(e){return"https://image.tmdb.org/t/p/original/".concat(e)},w500Image:function(e){return"https://image.tmdb.org/t/p/w500/".concat(e)}},V=E.a.create({baseURL:M.baseUrl,headers:{"Content-Type":"application/json"},paramsSerializer:function(e){return T.a.stringify(Object(s.a)(Object(s.a)({},e),{},{api_key:M.apiKey}))}});V.interceptors.request.use(function(){var e=Object(g.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),V.interceptors.response.use((function(e){return e&&e.data?e.data:e}),(function(e){throw e}));var A=V,q={movie:"movie",tv:"tv"},R={upcoming:"upcoming",popular:"popular",top_rated:"top_rated"},F={popular:"popular",top_rated:"top_rated",on_the_air:"on_the_air"},H={getMoviesList:function(e,t){var n="movie/"+R[e];return A.get(n,t)},getTvList:function(e,t){var n="tv/"+F[e];return A.get(n,t)},getVideos:function(e,t){var n=q[e]+"/"+t+"/videos";return A.get(n,{params:{}})},search:function(e,t){var n="search/"+q[e];return A.get(n,t)},detail:function(e,t,n){var c=q[e]+"/"+t;return A.get(c,n)},credits:function(e,t){var n=q[e]+"/"+t+"/credits";return A.get(n,{params:{}})},similar:function(e,t){var n=q[e]+"/"+t+"/similar";return A.get(n,{params:{}})}},U=(n(90),function(e){var t=Object(l.f)(),n=e.item,c=M.originalImage(n.backdrop_path?n.backdrop_path:n.poster_path),r=function(){var e=Object(g.a)(x.a.mark((function e(){var t,c,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.querySelector("#modal_".concat(n.id)),e.next=3,H.getVideos(q.movie,n.id);case 3:(c=e.sent).results.length>0?(r="https://www.youtube.com/embed/"+c.results[0].key,t.querySelector(".modal__content > iframe").setAttribute("src",r)):t.querySelector(".modal__content").innerHTML="No trailer",t.classList.toggle("active");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"hero-slide__item ".concat(e.className),style:{backgroundImage:"url(".concat(c,")")},children:Object(j.jsxs)("div",{className:"hero-slide__item__content container",children:[Object(j.jsxs)("div",{className:"hero-slide__item__content__info",children:[Object(j.jsx)("h2",{className:"title",children:n.title}),Object(j.jsx)("div",{className:"overview",children:n.overview}),Object(j.jsxs)("div",{className:"btns",children:[Object(j.jsx)(f,{onClick:function(){return t.push("/".concat(d,"/movie/")+n.id)},children:"Watch now"}),Object(j.jsx)(v,{onClick:r,children:"Watch trailer"})]})]}),Object(j.jsx)("div",{className:"hero-slide__item__content__poster",children:Object(j.jsx)("img",{src:M.w500Image(n.poster_path),alt:""})})]})})}),B=function(e){var t=e.item,n=Object(c.useRef)(null);return Object(j.jsx)(L,{active:!1,id:"modal_".concat(t.id),children:Object(j.jsx)(C,{onClose:function(){return n.current.setAttribute("src","")},children:Object(j.jsx)("iframe",{ref:n,width:"100%",height:"500px",title:"trailer"})})})},J=function(){N.a.use([w.a]);var e=Object(c.useState)([]),t=Object(_.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(g.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={page:1},e.prev=1,e.next=4,H.getMoviesList(R.popular,{params:t});case 4:n=e.sent,r(n.results.slice(0,4)),console.log(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("error");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(j.jsxs)("div",{className:"hero-slide",children:[Object(j.jsx)(y.a,{modules:[w.a],grabCursor:!0,spaceBetween:0,slidesPerView:1,autoplay:{delay:4e3},children:n.map((function(e,t){return Object(j.jsx)(k.a,{children:function(t){var n=t.isActive;return Object(j.jsx)(U,{item:e,className:"".concat(n?"active":"")})}},t)}))}),n.map((function(e,t){return Object(j.jsx)(B,{item:e},t)}))]})},K=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(J,{}),Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"section mb-3",children:Object(j.jsxs)("div",{className:"section__header mb-2",children:[Object(j.jsx)("h2",{children:"Trending Movies"}),Object(j.jsx)(o.b,{to:"/".concat(d,"/movie"),children:Object(j.jsx)(v,{className:"small",children:"View more"})})]})})})]})},W=function(){return Object(j.jsx)("div",{children:"Catalog"})},z=function(){return Object(j.jsx)("div",{children:"Detail"})},D=function(){return Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/".concat(d,"/:category/search/:keyword"),component:W}),Object(j.jsx)(l.a,{path:"/".concat(d,"/:category/:id"),component:z}),Object(j.jsx)(l.a,{path:"/".concat(d,"/:category"),component:W}),Object(j.jsx)(l.a,{path:"/".concat(d),exact:!0,component:K})]})};var P=function(){return Object(j.jsx)(o.a,{children:Object(j.jsx)(l.a,{render:function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(m,Object(s.a)({},e)),Object(j.jsx)(D,{}),Object(j.jsx)(p,{})]})}})})};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(P,{})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.4451b8c4.chunk.js.map