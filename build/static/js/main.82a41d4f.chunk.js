(this["webpackJsonpfacebook-messenger-clone"]=this["webpackJsonpfacebook-messenger-clone"]||[]).push([[0],{55:function(e,f,n){},56:function(e,f,n){},57:function(e,f,n){},72:function(e,f,n){"use strict";n.r(f);var s=n(2),t=n.n(s),r=n(17),v=n.n(r),a=(n(55),n(26)),c=n(92),i=n(94),d=n(95),b=(n(56),n(96)),o=n(90),u=n(91),j=(n(57),n(11)),P=Object(s.forwardRef)((function(e,f){var n=e.message,s=e.username===n.username;return Object(j.jsx)("div",{ref:f,className:"message ".concat(s&&"message_user"),children:Object(j.jsx)(b.a,{className:s?"message_userCard":"message_guestCard",children:Object(j.jsx)(o.a,{children:Object(j.jsxs)(u.a,{color:"white",variant:"h5",component:"h2",children:[!s&&"".concat(n.username||"unknown user",": ")," ",n.message]})})})})})),m=n(37),H=(n(66),m.a.initializeApp({apiKey:"AIzaSyBfrvEvTfz2Yg7OhEYi2IiBR1AvlU7etgk",authDomain:"simple-messenger-1d007.firebaseapp.com",projectId:"simple-messenger-1d007",storageBucket:"simple-messenger-1d007.appspot.com",messagingSenderId:"239475164976",appId:"1:239475164976:web:d434a1531f107d9c8b6af5",measurementId:"G-EFG5Y9HVMP"}).firestore()),p=n(48),l=n(47),z=n.n(l),h=n(93);var y=function(){var e=Object(s.useState)(""),f=Object(a.a)(e,2),n=f[0],t=f[1],r=Object(s.useState)([]),v=Object(a.a)(r,2),b=v[0],o=v[1],u=Object(s.useState)(""),l=Object(a.a)(u,2),y=l[0],D=l[1];return Object(s.useEffect)((function(){H.collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){o(e.docs.map((function(e){return{id:e.id,message:e.data()}})))}))}),[]),Object(s.useEffect)((function(){D(prompt("please eneter your name"))}),[]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("img",{style:{height:"5rem"},src:"data:image/png;base64,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",alt:""}),Object(j.jsx)("h1",{children:" Hello Clever Programmers! "}),Object(j.jsxs)("h2",{children:[" welcome ",y," "]}),Object(j.jsx)("form",{className:"app_form",children:Object(j.jsxs)(c.a,{className:"app_formcontrol",children:[Object(j.jsx)(i.a,{children:"Enter a message..."}),Object(j.jsx)(d.a,{className:"app_icon",placeholder:"Enter a message...",value:n,onChange:function(e){return t(e.target.value)},type:"text"}),Object(j.jsx)(h.a,{className:"app_iconButton",disabled:!n,varient:"contained",color:"primary",type:"submit",onClick:function(e){H.collection("messages").add({message:n,username:y,timestamp:m.a.firestore.FieldValue.serverTimestamp()}),t(""),e.preventDefault()},children:Object(j.jsx)(z.a,{})})]})}),Object(j.jsx)(p.a,{children:b.map((function(e){var f=e.id,n=e.message;return Object(j.jsx)(P,{username:y,message:n},f)}))})]})};v.a.render(Object(j.jsx)(t.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.82a41d4f.chunk.js.map