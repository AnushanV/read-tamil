(this["webpackJsonpread-tamil"]=this["webpackJsonpread-tamil"]||[]).push([[0],{77:function(e,t,c){},78:function(e,t,c){},84:function(e,t,c){},86:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(26),i=c.n(r),s=(c(77),c(78),c(129)),o=c(2),l=function(){return Object(o.jsx)(s.a,{variant:"h3",className:"title",children:"Read Tamil"})},u=c(12),h=(c(84),c(126)),j=c(124);var d=function(e){for(var t=e.characters.length/12,c=[],a=function(t){c.push(Object(o.jsxs)("div",{className:"characterRow",children:[Object(o.jsxs)(h.a,{container:!0,justify:"center",alignItems:"center",direction:"row",children:[e.characters.slice(12*t,12*t+12).map((function(e){return Object(o.jsx)(h.a,{item:!0,xs:1,children:e[0]},e)})),e.characters.slice(12*t,12*t+12).map((function(e){return Object(o.jsx)(h.a,{item:!0,xs:1,children:Object(o.jsx)(s.a,{color:"text.secondary",children:e[1]})},e)}))]}),Object(o.jsx)(j.a,{checked:e.checked[t],onChange:function(){return e.handleToggle(t)}})]},t))},n=0;n<t;n++)a(n);return c},b=c(130),x=c(132),O=c(127);var k=function(e){return Object(o.jsxs)(n.a.Fragment,{children:[Object(o.jsx)(h.a,{children:Object(o.jsxs)(b.a,{style:{maxWidth:"95vw"},children:[Object(o.jsx)(x.a,{children:Object(o.jsx)(s.a,{children:"This website allows you to study the tamil alphabet. Select which rows of characters you would like to study below. Once you have selected the characters, press the Start button to continue."})}),Object(o.jsx)(x.a,{children:Object(o.jsx)(d,{checked:e.checked,handleToggle:e.handleToggle,characters:e.characters})})]})}),Object(o.jsx)(h.a,{children:Object(o.jsx)(O.a,{id:"button",variant:"contained",onClick:e.startButtonClicked,children:"Start"})})]})};var f=function(e){return Object(o.jsx)(s.a,{variant:"h2",children:e.currentCharacter})},g=c(122);var m=function(e){var t=n.a.useState(function(t){for(var c,a,n,r=[],i=0;i<e.checked.length;i++)e.checked[i]&&(r=r.concat(t.slice(12*i,12*i+12)));for(n=r.length-1;n>0;n--)c=Math.floor(Math.random()*(n+1)),a=r[n],r[n]=r[c],r[c]=a;return console.log(r),r}(e.characters)),c=Object(u.a)(t,2),a=c[0],r=c[1],i=n.a.useState(a[0]),l=Object(u.a)(i,2),j=l[0],d=l[1],k=n.a.useState(!0),m=Object(u.a)(k,2),v=m[0],p=m[1];return Object(o.jsxs)(n.a.Fragment,{children:[Object(o.jsx)(h.a,{children:Object(o.jsxs)(b.a,{style:{maxWidth:"95vw"},children:[v&&Object(o.jsx)(x.a,{children:Object(o.jsx)(s.a,{children:'Enter the sound of the current letter using the English alphabet. Press "Enter" or "Space" to submit your answer.'})}),Object(o.jsx)(x.a,{className:"currentCharacter",children:Object(o.jsx)(f,{currentCharacter:v?j[0]:"Practice Complete!"})}),Object(o.jsx)(x.a,{className:"textInput",children:v&&Object(o.jsx)(g.a,{id:"outlined-basic",label:"Enter Sound",variant:"outlined",onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),console.log("userInput: ",e.target.value),console.log("expectedInput: ",j[1]),e.target.value===j[1]&&(a.length>1?(d(a[1]),r(a.slice(1))):p(!1)),e.target.value="")}})})]})}),Object(o.jsx)(h.a,{children:Object(o.jsx)(O.a,{id:"button",variant:"contained",onClick:e.exitButtonClicked,children:"Back"})})]})};var v=function(){var e=a.useState([!1,!1]),t=Object(u.a)(e,2),c=t[0],n=t[1],r=a.useState(!1),i=Object(u.a)(r,2),s=i[0],l=i[1],j=[["\u0b85","a"],["\u0b86","aa"],["\u0b87","i"],["\u0b88","ii"],["\u0b89","u"],["\u0b8a","uu"],["\u0b8e","e"],["\u0b8f","ee"],["\u0b90","ai"],["\u0b92","o"],["\u0b93","oo"],["\u0b94","au"],["\u0b95","ka"],["\u0b95\u0bbe","kaa"],["\u0b95\u0bbf","ki"],["\u0b95\u0bc0","kii"],["\u0b95\u0bc1","ku"],["\u0b95\u0bc2","kuu"],["\u0b95\u0bc6","ke"],["\u0b95\u0bc7","kee"],["\u0b95\u0bc8","kai"],["\u0b95\u0bca","ko"],["\u0b95\u0bcb","koo"],["\u0b95\u0bcc","kau"]];return Object(o.jsxs)(h.a,{container:!0,justify:"center",alignItems:"center",direction:"column",children:[!s&&Object(o.jsx)(k,{checked:c,handleToggle:function(e){var t=c.map((function(t,c){return c===e?!t:t}));n(t)},startButtonClicked:function(){c.includes(!0)?l(!0):window.alert("Please check at least one box.")},characters:j}),s&&Object(o.jsx)(m,{exitButtonClicked:function(){l(!1)},characters:j,checked:c})]})},p=c(62),w=c(128),y=c(121);var C=function(){var e=Object(p.a)({palette:{mode:"dark"}});return Object(o.jsxs)(w.a,{theme:e,children:[Object(o.jsx)(y.a,{}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(l,{}),Object(o.jsx)(v,{})]})]})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,133)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),r(e),i(e)}))};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(C,{})}),document.getElementById("root")),S()}},[[86,1,2]]]);
//# sourceMappingURL=main.4d5310bd.chunk.js.map