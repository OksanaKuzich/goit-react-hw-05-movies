"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[170],{5170:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var r,a,c,s,o,i,u,l=t(4095),p=t(7689),d=t(2690),f=t(168),v=t(6444),h=t(6731),x=v.default.button(r||(r=(0,f.Z)(["\n  background-color: coral;\n  border-style: none;\n  border-radius: 5px;\n  height: 25px;\n  width: 70px;\n  margin-right: 20px;\n\n  :hover,\n  :focus {\n    background-color: #fccab8;\n    cursor: pointer;\n  }\n"]))),m=v.default.div(a||(a=(0,f.Z)(["\nwidth: 900px;\n  display: flex;\n  justify-content: space-between;\n  margin: 20px auto 0 auto;\n"]))),g=v.default.div(c||(c=(0,f.Z)(["\n  display: flex;\n"]))),w=v.default.div(s||(s=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  text-align: left;\n  margin-left: 20px;\n  width: 400px;\n"]))),b=v.default.ul(o||(o=(0,f.Z)(["\n  display: flex;\n  flex-direction: row;\n  grid-gap: 5px;\n"]))),j=v.default.h2(i||(i=(0,f.Z)(["\n  margin-top: 0;\n"]))),Z=(0,v.default)(h.OL)(u||(u=(0,f.Z)(["\n  :not(:last-child) {\n    margin-right: 5px;\n  }\n\n  :hover,\n  :focus {\n    color: coral;\n  }\n\n  &.active {\n    background-color: coral;\n    color: black;\n    padding: 2px 7px;\n    border-radius: 5px\n  }\n"]))),y=t(184),k=function(){var n,e,t=(0,l.f)(d.Y5),r=(0,p.s0)(),a=null!==(n=null===(e=(0,p.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(m,{children:[(0,y.jsx)(x,{type:"button",onClick:function(){r(a)},children:"Go back"}),t&&(0,y.jsxs)(g,{children:[(0,y.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+t.poster_path,alt:t.title,width:"350px"}),(0,y.jsxs)(w,{children:[(0,y.jsxs)("div",{children:[(0,y.jsxs)(j,{children:[t.title," (",t.release_date.slice(0,4),")"]}),(0,y.jsxs)("p",{children:["Vote/Votes: ",t.vote_average.toFixed(1),"/",t.vote_count]}),(0,y.jsxs)("p",{children:["Popularity: ",t.popularity.toFixed(1)]}),(0,y.jsx)("h3",{children:"Overview"}),(0,y.jsx)("p",{children:t.overview}),(0,y.jsx)("h3",{children:"Genres"}),(0,y.jsx)(b,{children:t.genres.map((function(n){var e=n.name;return(0,y.jsx)("li",{children:e},e)}))})]}),(0,y.jsxs)("div",{children:[(0,y.jsx)(Z,{to:"cast",state:{from:a},children:"Cast"}),(0,y.jsx)(Z,{to:"reviews",state:{from:a},children:"Reviews"})]})]})]})]}),(0,y.jsx)(p.j3,{})]})}},4095:function(n,e,t){t.d(e,{f:function(){return s}});var r=t(885),a=t(2791),c=t(7689),s=function(n){var e=(0,a.useState)(null),t=(0,r.Z)(e,2),s=t[0],o=t[1],i=(0,c.UO)().id;return(0,a.useEffect)((function(){n(i).then(o)}),[n,i]),s}},2690:function(n,e,t){t.d(e,{Hx:function(){return d},Y5:function(){return l},uV:function(){return p},wr:function(){return i},z1:function(){return u}});var r=t(5861),a=t(7757),c=t.n(a),s=t(1044);s.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var o={api_key:"0214e4f6556edfc65f2eadfc23b43510",page:1},i=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.ZP)("/trending/movie/day",{params:o});case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.ZP)("/search/movie?query=".concat(e),{params:o});case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.ZP)("/movie/".concat(e),{params:o});case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.ZP)("/movie/".concat(e,"/credits"),{params:o});case 3:return t=n.sent,n.abrupt("return",t.data.cast);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.ZP)("/movie/".concat(e,"/reviews"),{params:o});case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=170.547b551d.chunk.js.map