"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[390],{390:function(n,e,t){t.r(e);var c=t(439),r=t(689),o=t(791),i=t(617),u=t(184);e.default=function(){var n=(0,o.useState)([]),e=(0,c.Z)(n,2),t=e[0],a=e[1],f=(0,r.UO)().movieId;return(0,o.useEffect)((function(){(0,i.GA)(f).then((function(n){return n.json()})).then((function(n){console.log(n),a(n.results)}))}),[f]),(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:"Reviews"}),(0,u.jsx)("ul",{children:0!==t.length?t.map((function(n){return(0,u.jsxs)("li",{children:[(0,u.jsxs)("h3",{children:["Author: ",n.author]}),(0,u.jsx)("p",{children:n.content})]},n.id)})):(0,u.jsx)("p",{children:"Sorry, we don't have any reviews "})})]})}},617:function(n,e,t){t.d(e,{GA:function(){return f},aY:function(){return u},fB:function(){return a},nc:function(){return o},xx:function(){return i}});var c="https://api.themoviedb.org/3/",r="c17d6d199e4f044ab21fca194914f42f",o=function(){return fetch("".concat(c,"trending/movie/day?api_key=").concat(r))},i=function(n){return fetch("".concat(c,"search/movie?api_key=").concat(r,"&query=").concat(n))},u=function(n){return fetch("".concat(c,"movie/").concat(n,"?api_key=").concat(r))},a=function(n){return fetch("".concat(c,"movie/").concat(n,"/credits?api_key=").concat(r))},f=function(n){return fetch("".concat(c,"movie/").concat(n,"/reviews?api_key=").concat(r))}}}]);
//# sourceMappingURL=390.e22ba56a.chunk.js.map