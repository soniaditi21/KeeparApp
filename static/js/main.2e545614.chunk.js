(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{54:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(7),j=n.n(r),a=n(39),i=n(22),o=n(35),s=n.n(o),l=n(2);var u=function(){return Object(l.jsx)("header",{children:Object(l.jsxs)("h1",{children:[Object(l.jsx)(s.a,{}),"Keeper"]})})};var b=function(){var e=(new Date).getFullYear();return Object(l.jsx)("footer",{children:Object(l.jsxs)("p",{children:["Copyright \u24d2 ",e]})})},O=n(37),d=n.n(O);var h=function(e){return Object(l.jsxs)("div",{className:"note",children:[Object(l.jsx)("h1",{children:e.title}),Object(l.jsx)("p",{children:e.content}),Object(l.jsx)("button",{onClick:function(){e.onDelete(e.id)},children:Object(l.jsx)(d.a,{})})]})},x=n(26),f=n(34),v=n(38),p=n.n(v),m=n(71),g=n(72);var k=function(e){var t=Object(c.useState)(!1),n=Object(i.a)(t,2),r=n[0],j=n[1],a=Object(c.useState)({title:"",content:""}),o=Object(i.a)(a,2),s=o[0],u=o[1];function b(e){var t=e.target,n=t.name,c=t.value;u((function(e){return Object(f.a)(Object(f.a)({},e),{},Object(x.a)({},n,c))}))}return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{className:"create-note",children:[r&&Object(l.jsx)("input",{name:"title",onChange:b,value:s.title,placeholder:"Title"}),Object(l.jsx)("textarea",{name:"content",onClick:function(){j(!0)},onChange:b,value:s.content,placeholder:"Take a note...",rows:r?3:1}),Object(l.jsx)(g.a,{in:r,children:Object(l.jsx)(m.a,{onClick:function(t){e.onAdd(s),u({title:"",content:""}),t.preventDefault()},children:Object(l.jsx)(p.a,{})})})]})})};var C=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];function j(e){r((function(t){return t.filter((function(t,n){return n!==e}))}))}return Object(l.jsxs)("div",{children:[Object(l.jsx)(u,{}),Object(l.jsx)(k,{onAdd:function(e){r((function(t){return[].concat(Object(a.a)(t),[e])}))}}),n.map((function(e,t){return Object(l.jsx)(h,{id:t,title:e.title,content:e.content,onDelete:j},t)})),Object(l.jsx)(b,{})]})};j.a.render(Object(l.jsx)(C,{}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.2e545614.chunk.js.map