"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[44],{2044:function(n,t,e){e.r(t),e.d(t,{default:function(){return g}});var r,c,a,i=e(8152),o=e(2791),u=e(6871),s=e(1935),p=e(168),d=e(2093),f=d.Z.ul(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0;\n  padding: 0;\n"]))),h=d.Z.li(c||(c=(0,p.Z)(["\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n\n  width: 25%;\n  margin: 0;\n  padding: 0;\n  text-align: center;\n  min-height: 100px;\n"]))),l=d.Z.img(a||(a=(0,p.Z)(["\n  display: block;\n  padding: 0;\n  margin: 0;\n  max-width: 100%;\n"]))),v=e(184),g=function(){var n=(0,u.UO)().id,t=(0,o.useState)([]),e=(0,i.Z)(t,2),r=e[0],c=e[1];return(0,o.useEffect)((function(){(0,s.IQ)(n).then((function(n){return c(n.cast)}))}),[n]),(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(f,{children:r.map((function(n){return(0,v.jsxs)(h,{children:[(0,v.jsx)(l,{src:"".concat("https://www.themoviedb.org/t/p/w600_and_h900_bestv2/").concat(n.profile_path),alt:n.name}),(0,v.jsxs)("h3",{children:["In movie: ",n.character]}),(0,v.jsx)("p",{children:n.name})]},n.cast_id)}))})})}},1935:function(n,t,e){e.d(t,{re:function(){return d},V0:function(){return f},Pg:function(){return h},IQ:function(){return l},Jh:function(){return v}});var r=e(5861),c=e(7757),a=e.n(c),i=e(4569).default,o="8b5f28a2836b483110232092b0d0adcf",u="https://api.themoviedb.org/3";function s(){return p.apply(this,arguments)}function p(){return p=(0,r.Z)(a().mark((function n(){var t,e,r=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",n.prev=1,n.next=4,i.get(t);case 4:return e=n.sent,n.abrupt("return",e.data);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])}))),p.apply(this,arguments)}var d=function(){return s("".concat(u,"/trending/all/day?api_key=").concat(o))},f=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return s("".concat(u,"/search/movie?api_key=").concat(o,"&query=").concat(n))},h=function(n){return s("".concat(u,"/movie/").concat(n,"?api_key=").concat(o))},l=function(n){return s("".concat(u,"/movie/").concat(n,"/credits?api_key=").concat(o))},v=function(n){return s("".concat(u,"/movie/").concat(n,"/reviews?api_key=").concat(o))}}}]);
//# sourceMappingURL=44.cfb4bc0f.chunk.js.map