(this["webpackJsonpcard-maker"]=this["webpackJsonpcard-maker"]||[]).push([[0],{14:function(e,t,a){e.exports={makerGrey:"#626262",app:"app_app__1pZ69"}},2:function(e,t,a){e.exports={makerGreen:"#385461",makerWhite:"white",makerBlack:"black",login:"login_login__xs6du",list:"login_list__3VXUk",item:"login_item__V1yhB",button:"login_button__6OivE"}},21:function(e,t,a){e.exports={makerWhite:"white"}},22:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(13),o=a.n(i),c=(a(21),a(22),a(9)),s=a.n(c),l=a(0),u=function(e){return Object(l.jsx)("footer",{className:s.a.footer,children:Object(l.jsx)("p",{className:s.a.title,children:"Code your dream"})})},h=a(3),d=a.n(h),j=function(e){var t=e.onLogout;return Object(l.jsxs)("header",{className:d.a.header,children:[t&&Object(l.jsx)("button",{className:d.a.logout,onClick:t,children:"Logout"}),Object(l.jsx)("img",{className:d.a.logo,src:"/images/logo.png",alt:"logo"}),Object(l.jsx)("h1",{className:d.a.title,children:"Business Card Maker"})]})},b=a(2),m=a.n(b),_=function(e){var t=e.authService,a=function(e){t.login(e.currentTarget.textContent).then(console.log)};return Object(l.jsxs)("section",{children:[Object(l.jsx)(j,{}),Object(l.jsxs)("section",{className:m.a.login,children:[Object(l.jsx)("h1",{children:"Login"}),Object(l.jsxs)("ul",{className:m.a.list,children:[Object(l.jsx)("li",{className:m.a.item,children:Object(l.jsx)("button",{className:m.a.button,onClick:a,children:"Google"})}),Object(l.jsx)("li",{className:m.a.itme,children:Object(l.jsx)("button",{className:m.a.button,onClick:a,children:"Github"})})]})]}),Object(l.jsx)(u,{})]})},p=a(14),g=a.n(p);var k=function(e){var t=e.authService;return Object(l.jsx)("div",{class:g.a.app,children:Object(l.jsx)(_,{authService:t})})},x=a(15),f=a(16),O=a(5),v=a.n(O),N=(a(24),a(26),v.a.initializeApp({apiKey:"AIzaSyDmnUrZYAub6VUn-zQTBjUJno57zf7xGcM",authDomain:"business-card-maker-4d85e.firebaseapp.com",databaseURL:"https://business-card-maker-4d85e-default-rtdb.firebaseio.com",projectId:"business-card-maker-4d85e"})),w=new(function(){function e(){Object(x.a)(this,e)}return Object(f.a)(e,[{key:"login",value:function(e){var t=new(v.a.auth["".concat(e,"AuthProvider")]);return N.auth().signInWithPopup(t)}}]),e}());o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(k,{authService:w})}),document.getElementById("root"))},3:function(e,t,a){e.exports={makerGreen:"#385461",makerWhite:"white",makerBlack:"black",header:"header_header__3wG_y",logo:"header_logo__2gvsh",logout:"header_logout__1Vz6G",title:"header_title__2ykqJ"}},9:function(e,t,a){e.exports={makerGreen:"#385461",makerWhite:"white",footer:"footer_footer__FQX0Z",title:"footer_title__3Bm60"}}},[[29,1,2]]]);
//# sourceMappingURL=main.79f27935.chunk.js.map