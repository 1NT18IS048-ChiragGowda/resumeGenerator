(this.webpackJsonpresumebuilder=this.webpackJsonpresumebuilder||[]).push([[0],{115:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(67),s=n.n(r),i=(n(77),n(6)),o=n(7),j=n(24),l=n.n(j),u=n(36),d=n(10),b=n(5),x=n(3),p=n(48),O=n.n(p),h=n(1);var f=function(){var e=a.a.useState({}),t=Object(x.a)(e,2),n=t[0],c=t[1],r=[n.email,n.password,n.phno],s=r[0],i=r[1],o=r[2],j=a.a.useState(!1),p=Object(x.a)(j,2),f=p[0],m=p[1];function v(e){c(Object(b.a)(Object(b.a)({},n),{},Object(d.a)({},e.target.name,e.target.value)))}function y(){return(y=Object(u.a)(l.a.mark((function e(t,n){var c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://localhost:3002/app/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s,pass:i,phno:o})});case 3:return c=e.sent,e.next=6,c.json();case 6:"ok"===(a=e.sent).status?(m(!0),window.location.href="/resume",n.authentication=!0):alert("credentials are incorrect"),console.log(a);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:O.a.Resume,children:"Resume Builder"}),Object(h.jsxs)("form",{onSubmit:function(e,t){return function(e,t){return y.apply(this,arguments)}(e,t)},className:O.a.Container,children:[Object(h.jsx)("h2",{children:"Login"}),Object(h.jsx)("input",{required:!0,name:"email",type:"text",placeholder:"Email",onInput:function(e){return v(e)}}),Object(h.jsx)("input",{required:!0,name:"password",type:"text",placeholder:"Password",onInput:function(e){return v(e)}}),Object(h.jsx)("input",{required:!0,name:"phno",type:"text",placeholder:"Phno",onInput:function(e){return v(e)}}),Object(h.jsx)("button",{type:"submit",value:"submit",children:f?"Logined":"Login"}),Object(h.jsx)("span",{children:"Don't have an account?"}),Object(h.jsx)("button",{children:Object(h.jsx)("a",{href:"/register",children:"Register"})})]})]})})},m=n(49),v=n.n(m);var y=function(){var e=a.a.useState({}),t=Object(x.a)(e,2),n=t[0],c=t[1],r=[n.email,n.password,n.phno],s=r[0],i=r[1],o=r[2],j=a.a.useState(!1),p=Object(x.a)(j,2),O=p[0],f=p[1];function m(e){c(Object(b.a)(Object(b.a)({},n),{},Object(d.a)({},e.target.name,e.target.value)))}function y(){return(y=Object(u.a)(l.a.mark((function e(t){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://localhost:3002/app/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s,pass:i,phno:o})});case 3:return n=e.sent,e.next=6,n.json();case 6:"ok"===(c=e.sent).status?f(!0):alert("already data exist"),console.log(c);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:v.a.Resume,children:"Resume Builder"}),Object(h.jsxs)("form",{onSubmit:function(e){return function(e){return y.apply(this,arguments)}(e)},className:v.a.Container,children:[Object(h.jsx)("h2",{children:"Register"}),Object(h.jsx)("input",{required:!0,name:"email",type:"text",placeholder:"Email",onInput:function(e){return m(e)}}),Object(h.jsx)("input",{required:!0,name:"password",type:"text",placeholder:"Password",onInput:function(e){return m(e)}}),Object(h.jsx)("input",{required:!0,name:"phno",type:"text",placeholder:"Phno",onInput:function(e){return m(e)}}),Object(h.jsx)("button",{type:"submit",value:"submit",children:O?"Registered":"Register"}),Object(h.jsx)("span",{children:"Do you have an account ?"}),Object(h.jsx)("button",{children:Object(h.jsx)("a",{href:"/",children:"Login"})})]})]})};var g=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(i.a,{children:[Object(h.jsx)(o.a,{component:f,path:"/",exact:!0}),Object(h.jsx)(o.a,{component:y,path:"/register",exact:!0})]})})},S=n(40),C=n.n(S),N=a.a.createContext({resume:[]}),k=n(14);var D=function(){var e=a.a.useState({}),t=Object(x.a)(e,2),n=t[0],c=t[1],r=a.a.useState(!1),s=Object(x.a)(r,2),i=s[0],o=s[1],j=a.a.useContext(N);function l(e){c(Object(b.a)(Object(b.a)({},n),{},Object(d.a)({},e.target.name,e.target.value)))}return Object(h.jsx)(N.Consumer,{children:function(e){return Object(h.jsxs)("div",{className:C.a.BasicInfo,children:[Object(h.jsx)("h1",{children:"Basic Infomation"}),Object(h.jsx)("div",{children:Object(h.jsxs)("form",{className:C.a.Inputs,onSubmit:function(t){return function(e,t){e.preventDefault(),t.details=[Object(b.a)({},n)],o(!0),console.log(j)}(t,e)},children:[Object(h.jsx)("input",{required:!0,type:"text",placeholder:"First Name",name:"fname",onChange:function(e){return l(e)}}),Object(h.jsx)("input",{required:!0,type:"text",placeholder:"Last Name",name:"lname",onChange:function(e){return l(e)}}),Object(h.jsx)("input",{required:!0,type:"text",placeholder:"Address",name:"address",onChange:function(e){return l(e)}}),Object(h.jsx)("input",{required:!0,type:"tel",placeholder:"Phno",name:"phno",onChange:function(e){return l(e)}}),Object(h.jsx)("input",{required:!0,type:"date",placeholder:"DOB",name:"dob",onChange:function(e){return l(e)}}),Object(h.jsx)("button",{className:C.a.button,type:"submit",value:"submit",children:i?"Updated":"Update To Resume"}),i?Object(h.jsxs)("div",{style:{display:"flex",fontSize:"18px"},children:[Object(h.jsx)("p",{children:"your data is successfully saved"}),Object(h.jsx)(k.a,{style:{fontSize:"30px",paddingTop:"0px",color:"green"}})]}):null]})})]})}})},_=n(51),w=n.n(_);var B=function(){var e=a.a.useState({}),t=Object(x.a)(e,2),n=t[0],c=t[1],r=a.a.useContext(N),s=a.a.useState(!1),i=Object(x.a)(s,2),o=i[0],j=i[1];function l(e){c(Object(b.a)(Object(b.a)({},n),{},Object(d.a)({},e.target.name,e.target.value)))}return Object(h.jsx)(N.Consumer,{children:function(e){return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{className:w.a.Edu,onSubmit:function(t){return function(e,t){e.preventDefault(),j(!0),t.education=[Object(b.a)({},n)],console.log(r)}(t,e)},children:[Object(h.jsx)("h1",{children:"Education Details"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:"SSLC"}),Object(h.jsx)("input",{required:!0,type:"text",name:"schoolname",placeholder:"school name",onChange:function(e){return l(e)}}),Object(h.jsx)("input",{required:!0,type:"text",name:"marks",placeholder:"marks obtains in number",onChange:function(e){return l(e)}})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:"PUC"}),Object(h.jsx)("input",{required:!0,type:"text",placeholder:"college name",name:"collegename",onChange:function(e){return l(e)}}),Object(h.jsx)("input",{required:!0,type:"text",placeholder:"marks obtains in number",name:"marksobtained",onChange:function(e){return l(e)}})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:"DEGREE"}),Object(h.jsx)("input",{required:!0,type:"text",placeholder:"college name",name:"degname",onChange:function(e){return l(e)}}),Object(h.jsx)("input",{required:!0,type:"text",placeholder:"marks obtains in number",name:"degmarks",onChange:function(e){return l(e)}})]}),Object(h.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[o?Object(h.jsxs)("div",{style:{display:"flex",fontSize:"20px"},children:[Object(h.jsx)("p",{children:"your data is successfully saved"}),Object(h.jsx)(k.a,{style:{fontSize:"30px",paddingTop:"0px"}})]}):null,Object(h.jsx)("input",{type:"submit",value:o?"Updated":"Update To Resume",className:w.a.save})]})]})})}})},I=n(15),q=n(70),T=n.n(q);var P=function(e){var t=Object(c.useState)({}),n=Object(x.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(""),o=Object(x.a)(s,2),j=o[0],l=o[1],u=Object(c.useState)(""),d=Object(x.a)(u,2),p=d[0],O=d[1],f=Object(c.useState)(!1),m=Object(x.a)(f,2),v=m[0],y=m[1];return Object(h.jsx)("div",{children:Object(h.jsx)(i.a,{children:Object(h.jsxs)("form",{className:T.a.WorkInputs,onSubmit:function(t){return function(t){t.preventDefault(),y(!v),console.log(a),e.parentCallBack(a)}(t)},children:[Object(h.jsx)("input",{required:!0,type:"text",placeholder:"company name",onInput:function(e){return function(e){l(e.target.value),r(Object(b.a)(Object(b.a)({},a),{},{companyName:e.target.value}))}(e)},value:j}),Object(h.jsx)("input",{required:!0,type:"text",placeholder:"exp in short",onInput:function(e){return function(e){O(e.target.value),r(Object(b.a)(Object(b.a)({},a),{},{expInShort:e.target.value}))}(e)},value:p}),v?Object(h.jsxs)("div",{style:{display:"flex",fontSize:"18px"},children:[Object(h.jsx)("p",{children:"your data is successfully saved"}),Object(h.jsx)(k.a,{style:{fontSize:"30px",paddingTop:"0px",color:"green"}})]}):null,Object(h.jsx)("button",{type:"submit",children:"Save"})]})})})},R=n(41),U=n.n(R);function W(){var e=Object(c.useState)(1),t=Object(x.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),s=Object(x.a)(r,2),i=s[0],o=s[1],j=Object(c.useState)(!1),l=Object(x.a)(j,2),u=l[0],d=l[1],b=Object(c.useContext)(N);function p(){a(n+1)}function O(e,t){t,o([].concat(Object(I.a)(i),[e]))}return Object(h.jsx)(N.Consumer,{children:function(e){return Object(h.jsxs)("div",{className:U.a.WorkContainer,children:[Object(h.jsx)("h1",{children:"Work Experience"}),Object(h.jsx)("p",{children:"make sure to save after flling details"}),Object(h.jsx)("button",{onClick:p,className:U.a.button,children:"Add"}),Object(I.a)(Array(n)).map((function(e,t){return Object(h.jsx)(P,{parentCallBack:O},t)})),Object(h.jsx)("button",{onClick:function(){return function(e){e.workexp=Object(I.a)(i),d(!0),console.log("work exp updated"),console.log(b)}(e)},className:U.a.proceed,children:u?"Updated":"Update To Resume"})]})}})}var E=n(20),z=n.n(E);var J=function(e){var t=Object(c.useState)({}),n=Object(x.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(!1),i=Object(x.a)(s,2),o=i[0],j=i[1];function l(e){r(Object(b.a)(Object(b.a)({},a),{},Object(d.a)({},e.target.name,e.target.value)))}return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{onSubmit:function(t){return function(t){t.preventDefault(),j(!0),e.getData(a,o)}(t)},className:z.a.SkillFlex,children:[Object(h.jsx)("input",{type:"text",required:!0,onChange:function(e){return l(e)},name:"skillname"}),Object(h.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"20px"},children:[Object(h.jsx)("input",{type:"radio",value:"beginner",onChange:function(e){return l(e)},name:"level"}),Object(h.jsx)("label",{children:"Beginner"}),Object(h.jsx)("input",{type:"radio",value:"intermediate",onChange:function(e){return l(e)},name:"level"}),Object(h.jsx)("label",{children:"Intermeidate"}),Object(h.jsx)("input",{type:"radio",value:"difficult",onChange:function(e){return l(e)},name:"level"}),Object(h.jsx)("label",{children:"Difficult"})]}),o?Object(h.jsxs)("div",{style:{display:"flex",fontSize:"18px"},children:[Object(h.jsx)("p",{children:"your data is successfully saved"}),Object(h.jsx)(k.a,{style:{fontSize:"30px",paddingTop:"0px"}})]}):null,Object(h.jsx)("button",{className:z.a.save,type:"submit",value:"Save",children:"Save"})]})})};var A=function(){var e,t=Object(c.useState)(1),n=Object(x.a)(t,2),r=n[0],s=n[1],i=Object(c.useState)([]),o=Object(x.a)(i,2),j=o[0],l=o[1],u=a.a.useContext(N),d=Object(c.useState)(!1),b=Object(x.a)(d,2),p=b[0],O=b[1];function f(t,n){l([].concat(Object(I.a)(j),[t])),e=n}function m(){s(r+1)}return Object(h.jsx)(N.Consumer,{children:function(t){return Object(h.jsxs)("div",{className:z.a.Skill,children:[Object(h.jsx)("h1",{children:"Skills"}),Object(h.jsx)("button",{onClick:m,className:z.a.button,children:"Add"}),Object(I.a)(Array(r)).map((function(e,t){return Object(h.jsx)(J,{getData:f},t)})),Object(h.jsx)("button",{className:z.a.proceed,onClick:function(){return function(t){O(!e),t.skills=Object(I.a)(j),console.log(u)}(t)},children:p?"Updated":"Update To Resume"})]})}})},X=n(21),L=n.n(X);var F=function(e){var t=Object(c.useState)({}),n=Object(x.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(!1),i=Object(x.a)(s,2),o=i[0],j=i[1];function l(e){r(Object(b.a)(Object(b.a)({},a),{},Object(d.a)({},e.target.name,e.target.value)))}return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{onSubmit:function(t){return function(t){t.preventDefault(),j(!o),e.getData(a,o),console.log(a)}(t)},className:L.a.ProjectFlex,children:[Object(h.jsx)("input",{required:!0,type:"text",placeholder:"Project name",name:"projectTitle",onChange:function(e){return l(e)}}),Object(h.jsx)("input",{required:!0,type:"text",placeholder:"explanation",name:"projectExplanation",onChange:function(e){return l(e)}}),o?Object(h.jsxs)("div",{style:{display:"flex",fontSize:"18px"},children:[Object(h.jsx)("p",{children:"your data is successfully saved"}),Object(h.jsx)(k.a,{style:{fontSize:"30px",paddingTop:"0px"}})]}):null,Object(h.jsx)("button",{type:"submit",className:L.a.save,children:"Save"})]})})};var G=function(){var e=Object(c.useState)([]),t=Object(x.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(1),i=Object(x.a)(s,2),o=i[0],j=i[1],l=a.a.useContext(N),u=Object(c.useState)(!1),d=Object(x.a)(u,2),b=d[0],p=d[1];function O(){j(o+1)}function f(e,t){r([].concat(Object(I.a)(n),[e])),t}return Object(h.jsx)(N.Consumer,{children:function(e){return Object(h.jsxs)("div",{className:L.a.Project,children:[Object(h.jsx)("h1",{children:"Project"}),Object(h.jsx)("button",{className:L.a.button,onClick:O,children:"Add"}),Object(I.a)(Array(o)).map((function(e,t){return Object(h.jsx)(F,{getData:f},t)})),Object(h.jsx)("button",{onClick:function(){return function(e){p(!0),e.project=Object(I.a)(n),console.log(l)}(e)},className:L.a.save,children:b?"updated":"Update To Resume"})]})}})},K=n(9),Y=n.n(K),H=n(71),V=n.n(H);var Q=function(){var e,t=a.a.createRef(),n=a.a.useContext(N);if(Object.keys(n).length<6)e=Object(h.jsx)("h1",{style:{textAlign:"center"},children:" please fill in details properly"});else{var c,r=function(){var e=document.body.clientWidth;d.format=e>700?[8.26,11.69]:[4.26,11.69]},s=n.details,i=n.objective,o=n.workexp,j=n.education,l=n.skills,u=n.project;[s,i,o,j,l,u].map((function(e,t,n){return 0===e.length})).forEach((function(e){c=!1===e})),console.log(c);var d={orientation:"portrait",unit:"in",format:[8.26,11.69]};e=!1===c?Object(h.jsx)("h1",{style:{textAlign:"center"},children:"Some details are not filled"}):Object(h.jsxs)("div",{className:Y.a.PDF,children:[Object(h.jsx)(V.a,{targetRef:t,filename:"div-blue.pdf",options:d,onComplete:function(){return r},x:.5,y:.5,scale:.8,children:function(e){var t=e.toPdf;return Object(h.jsx)("button",{onClick:t,className:Y.a.Generate,children:"Download and save"})}}),Object(h.jsxs)("div",{ref:t,className:Y.a.Design,children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:Y.a.BorderTop,children:"Resume"}),Object(h.jsx)("h3",{className:Y.a.Underline,children:Object(h.jsx)("u",{children:"Information"})}),s.map((function(e){return Object(h.jsx)("div",{children:Object(h.jsxs)("h3",{children:[e.fname," || ",e.lname," || ",e.address," || ",e.phno," || ",e.dob,"(D.O.B)"]})})}))]}),Object(h.jsx)("div",{className:Y.a.Border}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{className:Y.a.Underline,children:Object(h.jsx)("u",{children:"Objective"})}),i.map((function(e){return Object(h.jsx)("div",{children:Object(h.jsx)("p",{children:e.object})})}))]}),Object(h.jsx)("div",{className:Y.a.Border}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{className:Y.a.Underline,children:Object(h.jsx)("u",{children:"Work Experience"})}),o.map((function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:e.companyName}),Object(h.jsx)("p",{children:e.expInShort})]})}))]}),Object(h.jsx)("div",{className:Y.a.Border}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{className:Y.a.Underline,children:Object(h.jsx)("u",{children:"Education"})}),j.map((function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:Object(h.jsxs)("h4",{children:["SSLC -- ",e.schoolname,"/",e.marks]})}),Object(h.jsx)("div",{children:Object(h.jsxs)("h4",{children:["PUC -- ",e.collegename,"/",e.marksobtained]})}),Object(h.jsx)("div",{children:Object(h.jsxs)("h4",{children:["Degree -- ",e.degname,"/",e.degmarks]})})]})}))]}),Object(h.jsx)("div",{className:Y.a.Border}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{className:Y.a.Underline,children:Object(h.jsx)("u",{children:"Skills"})}),l.map((function(e){return Object(h.jsx)("div",{children:Object(h.jsxs)("p",{children:[e.skillname," - ",e.level]})})}))]}),Object(h.jsx)("div",{className:Y.a.Border}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{className:Y.a.Underline,children:Object(h.jsx)("u",{children:"Projects"})}),u.map((function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:e.projectTitle}),Object(h.jsx)("p",{children:e.projectExplanation})]})}))]})]})]})}return console.log(n),Object(h.jsx)("div",{children:e})},Z=n(52),M=n.n(Z);var $=function(){var e=Object(c.useState)({}),t=Object(x.a)(e,2),n=t[0],r=t[1],s=a.a.useContext(N),i=Object(c.useState)(!1),o=Object(x.a)(i,2),j=o[0],l=o[1];return Object(h.jsx)(N.Consumer,{children:function(e){return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{onSubmit:function(t){return function(e,t){e.preventDefault(),l(!0),t.objective=[Object(b.a)({},n)],console.log(s)}(t,e)},className:M.a.Object,children:[Object(h.jsx)("h1",{children:"Objective"}),Object(h.jsx)("input",{required:!0,type:"text",onChange:function(e){return function(e){r({object:e.target.value})}(e)}}),Object(h.jsx)("button",{type:"submit",className:M.a.save,children:j?"Updated":"Update To Resume"}),j?Object(h.jsxs)("div",{style:{display:"flex",fontSize:"18px"},children:[Object(h.jsx)("p",{children:"your data is successfully saved"}),Object(h.jsx)(k.a,{style:{fontSize:"30px",paddingTop:"0px"}})]}):null]})})}})},ee=n(72),te=n.n(ee),ne=n(37),ce=n(38),ae=n(39);var re=function(){var e={color:"white",fontSize:"30px"},t={color:"white",textDecoration:"none"};return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:te.a.Navbar,children:[Object(h.jsxs)("div",{children:[Object(h.jsx)(ne.a,{style:e}),Object(h.jsx)("p",{children:Object(h.jsx)(i.b,{to:"info",style:t,children:"Info"})})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)(ne.b,{style:e}),Object(h.jsx)("p",{children:Object(h.jsx)(i.b,{to:"/projects",style:t,children:"Project"})})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)(ce.b,{style:e}),Object(h.jsx)("p",{children:Object(h.jsx)(i.b,{to:"/skills",style:t,children:"Skills"})})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)(ae.a,{style:e}),Object(h.jsx)("p",{children:Object(h.jsx)(i.b,{to:"/education",style:t,children:"Education"})})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)(ce.a,{style:e}),Object(h.jsx)("p",{children:Object(h.jsx)(i.b,{to:"/objective",style:t,children:"objective"})})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)(ae.b,{style:e}),Object(h.jsx)("p",{children:Object(h.jsx)(i.b,{to:"/workexp",style:t,children:"WorkExp"})})]})]}),Object(h.jsx)("h3",{style:{textAlign:"center",color:"red"},children:"Click on specific links to fill in details"})]})},se=n(29),ie=n.n(se);var oe=function(){return a.a.useContext(N),Object(h.jsx)(N.Consumer,{children:function(e){return Object(h.jsxs)("div",{className:ie.a.CV,children:[Object(h.jsx)("button",{onClick:function(){return window.location.reload(),void(window.location.href="/resume")},className:ie.a.Button,children:"Reset CV"}),Object(h.jsx)("button",{className:ie.a.Button,onClick:function(){return window.location.href="/",void alert("you're logged out")},children:"LOGOUT"}),Object(h.jsx)("button",{className:ie.a.Button,children:Object(h.jsx)(i.b,{to:"/template",style:{color:"white",textDecoration:"none"},children:"CHECK CV"})})]})}})};var je=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(N.Provider,{value:{details:[]},children:Object(h.jsxs)(i.a,{children:[Object(h.jsx)(re,{}),Object(h.jsx)(oe,{}),Object(h.jsx)(o.a,{component:D,path:"/info",exact:!0}),Object(h.jsx)(o.a,{component:W,path:"/workexp",exact:!0}),Object(h.jsx)(o.a,{component:B,path:"/education",exact:!0}),Object(h.jsx)(o.a,{component:A,path:"/skills",exact:!0}),Object(h.jsx)(o.a,{component:G,path:"/projects",exact:!0}),Object(h.jsx)(o.a,{component:$,path:"/objective",exact:!0}),Object(h.jsx)(o.a,{component:Q,path:"/template",exact:!0})]})})})};var le=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(i.a,{children:[Object(h.jsx)(o.a,{component:g,path:"/"}),Object(h.jsx)(o.a,{component:je,path:"/resume"})]})})};s.a.render(Object(h.jsx)(le,{}),document.getElementById("root"))},20:function(e,t,n){e.exports={Skill:"NngmDoHDjiP7a8KCv4N0d",button:"_3eoORMhQfaIxmp_aeUhJwN",proceed:"_1-ra2mK58h1BJgXfc_VbC_",save:"KXqOQtYLUT7gA4Kx7BVhY",SkillFlex:"_1NE-7fX2VW0KpveGJCcOzu"}},21:function(e,t,n){e.exports={button:"_1jNWr1gI10mS1c8p7yTg1C",Project:"_3J3OfRz-9XL5BaoXpKcVn3",ProjectFlex:"FbivNt6Yj7N6DhH5F2Dyy",save:"_2-wOJujgs6zCeDpdoHKJJD"}},29:function(e,t,n){e.exports={CV:"RubUlW6pf9X-qSk3fb6_Q",Button:"_3ariswB6_fbGHKKNyk-0n8"}},40:function(e,t,n){e.exports={BasicInfo:"G36rK_cjfPsMHuuApIZGn",Inputs:"_3Nh__NfWWzeExuhnXDjM6G"}},41:function(e,t,n){e.exports={WorkContainer:"_3fy-foOSwtx3Ztn4jvelm5",button:"_2PaKGW04F4oFojBLbwgPb6",proceed:"_3TpnkrilQ21q_pL12fWDRY"}},48:function(e,t,n){e.exports={Container:"_3DBNugsNW9Uu7ycgywKcy2",Resume:"_1GWAc4xwbO-jzqaA2neSAf"}},49:function(e,t,n){e.exports={Container:"_1ApgPAbey_z9u5nF5oIXcL",Resume:"_2dXl9LyMifIv1Z9CJbmyZ9"}},51:function(e,t,n){e.exports={Edu:"_3mddTYiHWy484G5pIDZuMW",proceed:"_3FT3ciNeiJOYw3Y8uvJF6t",save:"_38iSXcQJoyB9-DLX6ga7IY"}},52:function(e,t,n){e.exports={Object:"_2L-4lXLys2nw91Bdliqvp0",proceed:"_3ED941x3Ki9WIGdG6aDkN4",save:"_1w1f9rX_5ZC6ieh6_Jmk1f"}},70:function(e,t,n){e.exports={WorkInputs:"_2IBhvLYpNrozWuYi4Qkh9t"}},72:function(e,t,n){e.exports={Navbar:"_3XTbU9nRX9714X9Yl0jMp"}},77:function(e,t,n){},9:function(e,t,n){e.exports={BorderTop:"_8Z9JDc_x15bbD7nunaxH1",Border:"_3MFhPT812q2NAHmJQzll_Z",PDF:"_3J2odFkadjB06IrgwgjJ_V",Generate:"_2kcOGSW9X5TDdv0wpF3X3_",Underline:"_2mXx1Y5hpqWiEtbQVBgHTW"}}},[[115,1,3]]]);
//# sourceMappingURL=main.7af06a72.chunk.js.map