(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(29),i=n.n(c),r=n(8),o=n(2),j=n(1);var l=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(r.b,{to:"/",children:"HOME"}),Object(j.jsx)(r.b,{to:{pathname:"/about",state:{name:"jin",from:"\uac74\ud765"}},children:"About"})]})};var m=function(e){return console.log(e),Object(j.jsx)("div",{children:Object(j.jsx)("h2",{children:"My name is about"})})},u=n(19),d=n.n(u),b=n(32),v=n(11),h=n(12),p=n(14),O=n(13),x=n(33),f=n.n(x);n(64);var y=function(e){var t=e.id,n=e.year,a=e.title,s=e.summary,c=e.poster,i=e.genres;return Object(j.jsx)(r.b,{to:{pathname:"movie/".concat(t),state:{year:n,title:a,summary:s,poster:c,genres:i}},children:Object(j.jsxs)("div",{className:"movie",children:[Object(j.jsx)("img",{src:c,alt:a,title:a}),Object(j.jsxs)("div",{className:"movie__data",children:[Object(j.jsx)("h3",{className:"movie__title",children:a}),Object(j.jsx)("h5",{className:"movie__year",children:n}),".",Object(j.jsx)("ul",{className:"genres",children:i.map((function(e,t){return Object(j.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(j.jsxs)("p",{className:"movie__summary",children:[s.slice(0,150),"..."]})]})]})})},g=(n(65),function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(v.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0,movies:[]},e.getMovies=Object(b.a)(d.a.mark((function t(){var n,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:n=t.sent,a=n.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(j.jsx)("section",{className:"container",children:t?Object(j.jsx)("div",{className:"loader",children:Object(j.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(j.jsx)("div",{className:"movies",children:n.map((function(e){return Object(j.jsx)(y,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(s.a.Component)),_=g,N=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(j.jsx)("span",{children:e.state.title}):null}}]),n}(s.a.Component),k=N;var M=function(){return Object(j.jsxs)(r.a,{children:[Object(j.jsx)(l,{}),Object(j.jsx)(o.a,{path:"/",exact:!0,component:_}),Object(j.jsx)(o.a,{path:"/about",component:m}),Object(j.jsx)(o.a,{path:"/movie/:id",component:k})]})};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(M,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.94f2feaf.chunk.js.map