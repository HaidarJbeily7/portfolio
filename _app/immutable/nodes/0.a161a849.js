import{s as O,n as L,c as V,d as M,e as B,u as K,g as Q,f as W}from"../chunks/scheduler.d965c405.js";import{S as P,i as T,g as d,m as q,s as w,h,j as v,n as z,f as u,c as A,k as t,a as x,x as c,r as J,y as X,u as N,v as R,d as j,t as S,w as D}from"../chunks/index.c6685214.js";import{p as Y}from"../chunks/stores.fb298576.js";import{e as U}from"../chunks/singletons.3b7b7236.js";const Z=!0,ee="always",pe=Object.freeze(Object.defineProperty({__proto__:null,prerender:Z,trailingSlash:ee},Symbol.toStringTag,{value:"Module"}));function te(p){let a,s,l,n,f,i,_,k,r,e,o,y;return{c(){a=d("header"),s=d("nav"),l=d("ul"),n=d("li"),f=d("a"),i=q("Portfolio"),k=w(),r=d("li"),e=d("a"),o=q("Comic"),this.h()},l($){a=h($,"HEADER",{class:!0});var m=v(a);s=h(m,"NAV",{});var b=v(s);l=h(b,"UL",{class:!0});var I=v(l);n=h(I,"LI",{"aria-current":!0,class:!0});var E=v(n);f=h(E,"A",{href:!0,class:!0});var g=v(f);i=z(g,"Portfolio"),g.forEach(u),E.forEach(u),k=A(I),r=h(I,"LI",{"aria-current":!0,class:!0});var G=v(r);e=h(G,"A",{href:!0,class:!0});var H=v(e);o=z(H,"Comic"),H.forEach(u),G.forEach(u),I.forEach(u),b.forEach(u),m.forEach(u),this.h()},h(){t(f,"href",U+"/"),t(f,"class","svelte-1yxu2fk"),t(n,"aria-current",_=p[0].url.pathname==="/"?"page":void 0),t(n,"class","svelte-1yxu2fk"),t(e,"href",U+"/comic"),t(e,"class","svelte-1yxu2fk"),t(r,"aria-current",y=p[0].url.pathname==="/comic/"?"page":void 0),t(r,"class","svelte-1yxu2fk"),t(l,"class","svelte-1yxu2fk"),t(a,"class","svelte-1yxu2fk")},m($,m){x($,a,m),c(a,s),c(s,l),c(l,n),c(n,f),c(f,i),c(l,k),c(l,r),c(r,e),c(e,o)},p($,[m]){m&1&&_!==(_=$[0].url.pathname==="/"?"page":void 0)&&t(n,"aria-current",_),m&1&&y!==(y=$[0].url.pathname==="/comic/"?"page":void 0)&&t(r,"aria-current",y)},i:L,o:L,d($){$&&u(a)}}}function ae(p,a,s){let l;return V(p,Y,n=>s(0,l=n)),[l]}class se extends P{constructor(a){super(),T(this,a,ae,te,O,{})}}const re="/_app/immutable/assets/github-icon.5be2d271.png",le="/_app/immutable/assets/linkedin-icon.7dcbc614.png",ne="/_app/immutable/assets/email-icon.0d53c821.png",ie="/_app/immutable/assets/telegram-icon.679f1d83.png";function oe(p){let a,s,l,n,f,i,_,k,r,e,o,y,$,m,b,I;return{c(){a=d("footer"),s=d("a"),l=d("img"),f=w(),i=d("a"),_=d("img"),r=w(),e=d("a"),o=d("img"),$=w(),m=d("a"),b=d("img"),this.h()},l(E){a=h(E,"FOOTER",{class:!0});var g=v(a);s=h(g,"A",{href:!0,id:!0,class:!0,target:!0});var G=v(s);l=h(G,"IMG",{src:!0,alt:!0}),G.forEach(u),f=A(g),i=h(g,"A",{href:!0,id:!0,class:!0,target:!0});var H=v(i);_=h(H,"IMG",{src:!0,alt:!0}),H.forEach(u),r=A(g),e=h(g,"A",{href:!0,id:!0,class:!0});var C=v(e);o=h(C,"IMG",{src:!0,alt:!0}),C.forEach(u),$=A(g),m=h(g,"A",{href:!0,id:!0,class:!0,target:!0});var F=v(m);b=h(F,"IMG",{src:!0,alt:!0}),F.forEach(u),g.forEach(u),this.h()},h(){M(l.src,n=re)||t(l,"src",n),t(l,"alt","GitHub Icon"),t(s,"href","https://github.com/HaidarJbeily7"),t(s,"id","gh-link"),t(s,"class","icon-link svelte-1swahgk"),t(s,"target","_blank"),M(_.src,k=ie)||t(_,"src",k),t(_,"alt","Telegram Icon"),t(i,"href","https://t.me/HaidarJbeily"),t(i,"id","tg-link"),t(i,"class","icon-link svelte-1swahgk"),t(i,"target","_blank"),M(o.src,y=ne)||t(o,"src",y),t(o,"alt","Email Icon"),t(e,"href","mailto:haidarjbeily76@gmail.com"),t(e,"id","email"),t(e,"class","icon-link svelte-1swahgk"),M(b.src,I=le)||t(b,"src",I),t(b,"alt","LinkedIn Icon"),t(m,"href","https://www.linkedin.com/in/haidar-jbeily-5478081b3/"),t(m,"id","linkedin"),t(m,"class","icon-link svelte-1swahgk"),t(m,"target","_blank"),t(a,"class","svelte-1swahgk")},m(E,g){x(E,a,g),c(a,s),c(s,l),c(a,f),c(a,i),c(i,_),c(a,r),c(a,e),c(e,o),c(a,$),c(a,m),c(m,b)},p:L,i:L,o:L,d(E){E&&u(a)}}}class ce extends P{constructor(a){super(),T(this,a,null,oe,O,{})}}function ue(p){let a,s,l,n,f,i,_;s=new se({});const k=p[1].default,r=B(k,p,p[0],null);return i=new ce({}),{c(){a=w(),J(s.$$.fragment),l=w(),n=d("main"),r&&r.c(),f=w(),J(i.$$.fragment),this.h()},l(e){X("svelte-faixpc",document.head).forEach(u),a=A(e),N(s.$$.fragment,e),l=A(e),n=h(e,"MAIN",{class:!0});var y=v(n);r&&r.l(y),y.forEach(u),f=A(e),N(i.$$.fragment,e),this.h()},h(){document.title="Portfolio",t(n,"class","svelte-e1sgaz")},m(e,o){x(e,a,o),R(s,e,o),x(e,l,o),x(e,n,o),r&&r.m(n,null),x(e,f,o),R(i,e,o),_=!0},p(e,[o]){r&&r.p&&(!_||o&1)&&K(r,k,e,e[0],_?W(k,e[0],o,null):Q(e[0]),null)},i(e){_||(j(s.$$.fragment,e),j(r,e),j(i.$$.fragment,e),_=!0)},o(e){S(s.$$.fragment,e),S(r,e),S(i.$$.fragment,e),_=!1},d(e){e&&(u(a),u(l),u(n),u(f)),D(s,e),r&&r.d(e),D(i,e)}}}function fe(p,a,s){let{$$slots:l={},$$scope:n}=a;return p.$$set=f=>{"$$scope"in f&&s(0,n=f.$$scope)},[n,l]}class ge extends P{constructor(a){super(),T(this,a,fe,ue,O,{})}}export{ge as component,pe as universal};