"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[135],{135:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(861),i=n(439),a=n(757),s=n.n(a),c=n(791),o=n(87),u=n(689),l=n(818),v="MovieDetails_button__uXZxd",d="MovieDetails_info__qv2SI",h="MovieDetails_about__8ZMko",f="MovieDetails_poster__yO7gD",p="MovieDetails_moreinfo__9w1Nk",m="MovieDetails_link__U+v+7",_=n(184),x=function(){var e,t,n=(0,c.useState)({}),a=(0,i.Z)(n,2),x=a[0],g=a[1],j=(0,u.UO)().movieID,w=(0,u.s0)(),b=(0,u.TH)(),k=(0,c.useRef)(b),D="".concat(null===(e=k.current.state)||void 0===e?void 0:e.pathname).concat(null===(t=k.current.state)||void 0===t?void 0:t.search)||"/";(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t,n,r,i,a,c,o,u,v,d,h,f;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.vq)(j);case 3:t=e.sent,n=t.data,r=n.title,i=n.overview,a=n.vote_average,c=n.release_date,o=n.poster_path,u=n.genres,v=u.map((function(e){return e.name})).join(" "),d=new Date(c),h=d.getFullYear(),f=Math.ceil(10*a),g({title:r,overview:i,rating:f,fullYear:h,poster_path:o,genresInfo:v}),e.next=15;break;case 13:e.prev=13,e.t0=e.catch(0);case 15:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[j]);var N=x.title,M=x.overview,y=x.rating,U=x.fullYear,I=x.poster_path,O=x.genresInfo;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{className:d,children:[(0,_.jsx)("img",{className:f,src:"https://image.tmdb.org/t/p/w500".concat(I),alt:N,width:"450"}),(0,_.jsxs)("div",{className:h,children:[(0,_.jsxs)("h2",{children:[N," (",U,")"]}),(0,_.jsxs)("p",{children:["User Score: ",y,"%"]}),(0,_.jsx)("h3",{children:"Overview"}),(0,_.jsx)("p",{children:M}),(0,_.jsx)("h3",{children:"Genres"}),(0,_.jsx)("p",{children:O}),(0,_.jsx)("button",{className:v,type:"button",onClick:function(){return w(D)},children:"Go back"})]})]}),(0,_.jsxs)("div",{className:p,children:[(0,_.jsx)("h3",{children:"Additional information"}),(0,_.jsx)("li",{children:(0,_.jsx)(o.OL,{className:m,to:"cast",children:"Cast"})}),(0,_.jsx)("li",{children:(0,_.jsx)(o.OL,{className:m,to:"reviews",children:"Reviews"})})]}),(0,_.jsx)(u.j3,{})]})}},818:function(e,t,n){n.d(t,{UN:function(){return o},W0:function(){return s},XT:function(){return i},pI:function(){return c},vq:function(){return a}});var r=n(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"0b81ec7b97ebe28b2ec2748d1e4054f2",language:"en-US"}}),i=function(){return r.get("/trending/movie/day")},a=function(e){return r.get("/movie/".concat(e))},s=function(e){return r.get("/movie/".concat(e,"/credits"))},c=function(e){return r.get("/movie/".concat(e,"/reviews"))},o=function(e){return r.get("/search/movie?query=".concat(e))}}}]);
//# sourceMappingURL=135.900e9072.chunk.js.map