(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,a,c){},12:function(e,a,c){"use strict";c.r(a);var t=c(5),n=c.n(t),i=c(4),r=c(1),l=(c(10),c(2)),s=c.n(l),o=c(0),j=function(e){var a=e.total,c=e.perPage,t=e.currentPage,n=e.onPageChange,i=c*t-c,l=c*t,j=a.slice(i,l),d=a.slice(0,Math.ceil(42/c)),u=1===t,h=t===d.length;return Object(r.useEffect)((function(){return n(a[0])}),[c]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("ul",{className:"pagination",children:[Object(o.jsx)("li",{className:s()("page-item",{disabled:u}),children:Object(o.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":u,onClick:function(){return n(t-1)},children:"\xab"})}),d.map((function(e){return Object(o.jsx)("li",{className:s()("page-item",{active:t===e}),onClick:function(){n(e)},"aria-hidden":"true",children:Object(o.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),children:e})},e)})),Object(o.jsx)("li",{className:s()("page-item",{disabled:h}),children:Object(o.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":h,onClick:function(){return n(t+1)},children:"\xbb"})})]}),Object(o.jsx)("ul",{children:j.map((function(e){return Object(o.jsx)("li",{"data-cy":"item",children:"Item ".concat(e)},e)}))})]})};var d=function(e,a){for(var c=[],t=e;t<=a;t+=1)c.push(t);return c}(1,42).map((function(e){return e})),u=function(){var e=["3","5","10","20"],a=Object(r.useState)(d[0]),c=Object(i.a)(a,2),t=c[0],n=c[1],l=Object(r.useState)(e[1]),s=Object(i.a)(l,2),u=s[0],h=s[1],b=+u*t-+u,m=+u*t,g=d.slice(b,m);return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{children:"Items with Pagination"}),Object(o.jsxs)("p",{className:"lead","data-cy":"info",children:["Page"," ",t," (items ".concat(g[0]," - ").concat(g[g.length-1]," of ").concat(d.length,")")]}),Object(o.jsxs)("div",{className:"form-group row",children:[Object(o.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(o.jsx)("select",{"data-cy":"perPageSelector",value:u,id:"perPageSelector",className:"form-control",onChange:function(e){h(e.target.value)},children:e.map((function(e){return Object(o.jsx)("option",{value:e,children:e},e)}))})}),Object(o.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(o.jsx)(j,{total:d,perPage:+u,currentPage:t,onPageChange:n})]})};n.a.render(Object(o.jsx)(u,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.e21684df.chunk.js.map