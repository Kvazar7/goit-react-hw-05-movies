"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[473],{473:function(e,n,t){t.r(n);var c=t(439),i=t(689),r=t(87),o=t(791),a=t(617),s=t(546),d=t(184);n.default=function(){var e,n,t,u=(0,o.useState)({}),l=(0,c.Z)(u,2),h=l[0],f=l[1],v=(0,i.UO)().id,j=null!==(e=null===(n=(0,i.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies";return(0,o.useEffect)((function(){(0,a.aY)(v).then((function(e){return e.json()})).then((function(e){console.log(e),f(e)}))}),[v]),(0,d.jsxs)("div",{children:[(0,d.jsx)(r.rU,{to:j,children:"Go back"}),(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(h.poster_path),alt:h.title}),(0,d.jsxs)("div",{children:[(0,d.jsxs)("h2",{children:[h.title," (",h.release_date,")"]}),(0,d.jsxs)("p",{children:["User score: ",10*h.vote_average,"%"]}),(0,d.jsx)("h3",{children:"Overview"}),(0,d.jsx)("p",{children:h.overview}),(0,d.jsx)("h3",{children:"Genres"}),(0,d.jsx)("p",{children:null===(t=h.genres)||void 0===t?void 0:t.map((function(e){return e.name})).join(" ")})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h4",{children:" Additional information"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(r.rU,{to:"/movies/".concat(h.id,"/cast"),children:"Cast"})},h.id),(0,d.jsx)("li",{children:(0,d.jsx)(r.rU,{to:"/movies/".concat(h.imdb_id,"/reviews"),children:"Reviews"})},h.imdb_id)]})]}),(0,d.jsx)(o.Suspense,{fallback:(0,d.jsx)(s.Z,{}),children:(0,d.jsx)(i.j3,{})})]})}},617:function(e,n,t){t.d(n,{GA:function(){return d},aY:function(){return a},fB:function(){return s},nc:function(){return r},xx:function(){return o}});var c="https://api.themoviedb.org/3/",i="c17d6d199e4f044ab21fca194914f42f",r=function(){return fetch("".concat(c,"trending/movie/day?api_key=").concat(i))},o=function(e){return fetch("".concat(c,"search/movie?api_key=").concat(i,"&query=").concat(e))},a=function(e){return fetch("".concat(c,"movie/").concat(e,"?api_key=").concat(i))},s=function(e){return fetch("".concat(c,"movie/").concat(e,"/credits?api_key=").concat(i))},d=function(e){return fetch("".concat(c,"movie/").concat(e,"/reviews?api_key=").concat(i))}}}]);
//# sourceMappingURL=473.15d29a8e.chunk.js.map