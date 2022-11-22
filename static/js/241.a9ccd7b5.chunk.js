"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[241],{6062:function(n,e,t){t.d(e,{O:function(){return b}});var r,a,c,o,u,i,s,l=t(168),p=t(6444),f=t(6731),d=p.default.ul(r||(r=(0,l.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 14px;\n  display: grid;\n  grid-gap: 10px;\n  grid-template-columns: repeat(5, 1fr);\n"]))),h=p.default.li(a||(a=(0,l.Z)(["\n  width: 150px;\n  transition: 1s;\n  display: flex;\n  :hover {\n    transform: scale(1.1);\n  }\n"]))),g=(0,p.default)(f.OL)(c||(c=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  ",":hover & {\n    color: rgb(255, 127, 80);\n  }\n\n  &.active {\n    color: coral;\n  }\n"])),h),m=p.default.div(o||(o=(0,l.Z)(["\n  width: 850px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),v=p.default.img(u||(u=(0,l.Z)(["\n  width: 150px;\n  height: 225px;\n  margin-top: 5px;\n"]))),x=p.default.h3(i||(i=(0,l.Z)(["\n  flex-grow: 1;\n  font-weight: 400;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n  background-color: inherit;\n"]))),w=p.default.div(s||(s=(0,l.Z)(["\n  font-style: italic;\n  margin-top: 10px;\n"]))),Z=t(184),b=function(n){var e=n.gallery,t=n.pathLocation;return(0,Z.jsx)(Z.Fragment,{children:e&&0!==e.length?(0,Z.jsx)(m,{children:(0,Z.jsx)(d,{children:e.map((function(n){var e=n.id,r=n.title,a=n.release_date,c=n.poster_path;return(0,Z.jsx)(h,{children:(0,Z.jsxs)(g,{to:t+e.toString(),children:[(0,Z.jsxs)(x,{children:[r," (",a.slice(0,4),")"]}),(0,Z.jsx)(v,{src:"https://image.tmdb.org/t/p/w500"+c,alt:r})]})},e)}))})}):(0,Z.jsx)(w,{children:"Loading..."})})}},3241:function(n,e,t){t.r(e),t.d(e,{default:function(){return x}});var r,a,c,o=t(885),u=t(2791),i=t(2690),s=t(6731),l=t(7689),p=t(6062),f=t(168),d=t(6444),h=d.default.input(r||(r=(0,f.Z)(["\n  width: 200px;\n  height: 20px;\n  margin-right: 10px;\n"]))),g=d.default.form(a||(a=(0,f.Z)(["\n  margin-top: 20px;\n  margin-bottom: 20px;\n"]))),m=d.default.button(c||(c=(0,f.Z)(["\n  background-color: coral;\n  border-style: none;\n  border-radius: 5px;\n  height: 25px;\n  width: 70px;\n\n  :hover,\n  :focus {\n    background-color: #fccab8;\n    cursor: pointer;\n  }\n"]))),v=t(184),x=function(){var n=(0,u.useState)([]),e=(0,o.Z)(n,2),t=e[0],r=e[1],a=(0,s.lr)(),c=(0,o.Z)(a,2),f=c[0],d=c[1],x=f.get("name");return(0,u.useEffect)((function(){x&&(""!==x.trim()?(0,i.z1)(x).then(r):alert("Please enter the name for search!"))}),[x]),(0,v.jsxs)("div",{children:[(0,v.jsxs)(g,{onSubmit:function(n){n.preventDefault();var e=n.target.elements.name.value;d({name:e})},children:[(0,v.jsx)(h,{name:"name",type:"text"}),(0,v.jsx)(m,{children:"Search"})]}),0!==t.length&&(0,v.jsx)(p.O,{gallery:t,pathLocation:""}),(0,v.jsx)(l.j3,{})]})}},2690:function(n,e,t){t.d(e,{Hx:function(){return f},Y5:function(){return l},uV:function(){return p},wr:function(){return i},z1:function(){return s}});var r=t(5861),a=t(7757),c=t.n(a),o=t(1044);o.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var u={api_key:"0214e4f6556edfc65f2eadfc23b43510",page:1},i=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.ZP)("/trending/movie/day",{params:u});case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.ZP)("/search/movie?query=".concat(e),{params:u});case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.ZP)("/movie/".concat(e),{params:u});case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.ZP)("/movie/".concat(e,"/credits"),{params:u});case 3:return t=n.sent,n.abrupt("return",t.data.cast);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.ZP)("/movie/".concat(e,"/reviews"),{params:u});case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=241.a9ccd7b5.chunk.js.map