"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[347],{1935:function(t,n,e){e.d(n,{re:function(){return h},V0:function(){return d},Pg:function(){return p},IQ:function(){return v},Jh:function(){return f}});var r=e(5861),c=e(7757),i=e.n(c),a=e(4569).default,o="8b5f28a2836b483110232092b0d0adcf",s="https://api.themoviedb.org/3";function u(){return l.apply(this,arguments)}function l(){return l=(0,r.Z)(i().mark((function t(){var n,e,r=arguments;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:"",t.prev=1,t.next=4,a.get(n);case 4:return e=t.sent,t.abrupt("return",e.data);case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),l.apply(this,arguments)}var h=function(){return u("".concat(s,"/trending/all/day?api_key=").concat(o))},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return u("".concat(s,"/search/movie?api_key=").concat(o,"&query=").concat(t))},p=function(t){return u("".concat(s,"/movie/").concat(t,"?api_key=").concat(o))},v=function(t){return u("".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(o))},f=function(t){return u("".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(o))}},6347:function(t,n,e){e.r(n);var r=e(8152),c=e(2791),i=e(6871),a=e(3504),o=e(1935),s=e(184);n.default=function(){var t=(0,i.UO)().id,n=(0,c.useState)(null),e=(0,r.Z)(n,2),u=e[0],l=e[1];(0,c.useEffect)((function(){(0,o.Pg)(t).then(l)}),[t]);var h=(0,i.s0)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("button",{type:"button",onClick:function(){return h(-1)},children:"Go Back"}),u&&(0,s.jsxs)("article",{style:{},children:[(0,s.jsx)("div",{style:{marginRight:"20px"},children:(0,s.jsx)("img",{src:"".concat("https://www.themoviedb.org/t/p/w600_and_h900_bestv2/").concat(u.poster_path),alt:u.original_title,style:{width:"300px"}})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:u.original_title}),(0,s.jsx)("p",{children:u.release_date}),(0,s.jsx)("p",{children:u.vote_average})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(a.OL,{to:"cast",children:"Cast"})," ",(0,s.jsx)("br",{}),(0,s.jsx)(a.OL,{to:"reviews",children:"Reviews"})]})]}),(0,s.jsx)(i.j3,{})]})}}}]);
//# sourceMappingURL=347.656f4809.chunk.js.map