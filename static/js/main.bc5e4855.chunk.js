(this["webpackJsonpwhat-szymi"]=this["webpackJsonpwhat-szymi"]||[]).push([[0],{21:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var i=a(0),s=a.n(i),c=a(13),r=a.n(c),n=(a(21),a(12)),o=(a(22),a(23),a.p+"static/media/atleta.696072d5.jpeg"),l=a.p+"static/media/blachara.e4ee47f5.jpeg",d=a.p+"static/media/dojebany.d036a5c1.png",m=a.p+"static/media/elegant.19f13193.jpeg",p=a.p+"static/media/fighter.16073cba.jpeg",j=a.p+"static/media/gangster.f539f4db.jpeg",z=a.p+"static/media/gotowy.012b0cbc.jpeg",u=a.p+"static/media/jajcarz.22c7a9d9.jpeg",y=a.p+"static/media/kielba.856b1e4a.jpeg",g=a.p+"static/media/kitka.af0d0502.jpeg",b=a.p+"static/media/lodzik.ecf89bae.png",k=a.p+"static/media/raper.96717749.jpeg",h=a.p+"static/media/relaks.364534d8.png",w=a.p+"static/media/ruhacz.466376dc.png",f=a.p+"static/media/smieszek.e9130948.jpeg",O=a.p+"static/media/smoker.72ba838b.png",S=a.p+"static/media/stylowy.239eddbf.jpeg",x=a.p+"static/media/support.7b553d95.jpeg",v=a.p+"static/media/wujas.e9e529a8.png",N=a.p+"static/media/ziomal.c6e2007d.jpeg",C=a(1);function J(e){switch(e){case"atleta":return o;case"blachara":return l;case"dojebany":return d;case"elegant":return m;case"fighter":return p;case"gangster":return j;case"gotowy":return z;case"jajcarz":return u;case"kielba":return y;case"kitka":return g;case"lodzik":return b;case"raper":return k;case"relaks":return h;case"ruhacz":return w;case"smieszek":return f;case"smoker":return O;case"stylowy":return S;case"support":return x;case"wujas":return v;case"ziomal":return N;default:return null}}var L=function(e){var t=e.szymi,a=e.restart;return Object(C.jsxs)("div",{className:"mid",children:[Object(C.jsx)("div",{className:"today",children:"Dzisiaj jeste\u015b:"}),Object(C.jsx)("img",{className:"pic",src:J(t.src),alt:"resultant szymi"}),Object(C.jsx)("div",{className:"title",children:t.title}),Object(C.jsx)("div",{children:t.description}),Object(C.jsx)("button",{className:"btn",onClick:a,children:"Jeszcze raz!"})]})},F=(a(25),a(26),a.p+"static/media/logo.0159ae03.jpeg");var M=function(e){var t=e.loading;return Object(C.jsxs)("div",{className:t?"relSpin":"rel",children:[Object(C.jsx)("img",{className:"logo",src:F,alt:"main logo"}),t&&Object(C.jsx)("div",{className:"over",children:Object(C.jsx)("p",{className:"q",children:"?"})})]})};var P=function(e){var t=e.startLoading,a=e.loading;return Object(C.jsxs)("div",{className:"mid",children:[Object(C.jsx)(M,{loading:a}),Object(C.jsx)("p",{children:"Jakim Szymim dzisiaj jeste\u015b?"}),Object(C.jsx)("button",{onClick:t,children:"losuj"})]})},T=[{title:"Szymi wojownik",description:"Bardzo pot\u0119zny, rozjebie cie na hitsa. A nie to ty jeste\u015b tym szymmim wiec ty rozjebiesz kazdego na hitsa",src:"fighter"},{title:"Szymi gangster",description:"Czas na napaaaad",src:"gangster"},{title:"Szymi \u015bmieszek",description:"Chyba co\u015b tam by\u0142o palone, takie oczkaa :pp",src:"smieszek"},{title:"Szymi jaracz",description:"Dawka relaksacyjna, papierosek mmm :)",src:"smoker"},{title:"Szymi support",description:"Hello, w czym mog\u0119 pomoc",src:"support"},{title:"Szymi wujas na weselu",description:"Ze mna sie mlody nie napijesz???",src:"wujas"},{title:"Szymi atleta",description:"Gi\u0119tki jak ma\u0142o ktory",src:"atleta"},{title:"Szymi blachara",description:"sika na widok golfa 3",src:"blachara"},{title:"Szymi paker",description:"si\u0142acz jakich ma\u0142o. sylwetka adonisa",src:"dojebany"},{title:"Szymi elegancki",description:"w sam raz na komunie/wesele/pogrzeb",src:"elegant"},{title:"Szymi gotowy na jebanie",description:"owiniety -> nie peknie",src:"gotowy"},{title:"Szymi jajcarz",description:"Co? Jajecczko :==)",src:"jajcarz"},{title:"Szymi ogniskowy",description:"Ogrzeje ci kie\u0142be",src:"kielba"},{title:"Szymi stylowy fryz",description:"Kto si\u0119 oprze takiej kiteczce",src:"kitka"},{title:"Szymi lodziarz",description:"Juz wiemy skad ksywa ALgidziak :PP",src:"lodzik"},{title:"Szymi raper",description:"wytrzep w koncu ten jebaany dywan - AL",src:"raper"},{title:"Szymi zrelaksowany",description:"nic dodac nic ujac",src:"relaks"},{title:"Szymi jebaka",description:"ma wielkiego ptaka",src:"ruhacz"},{title:"Szymi stylowy",description:"Trendsetter, polska nie gotowa na szymiryczke",src:"stylowy"},{title:"Szymi ziomal",description:"Nie rozumiesz mnie? Mam cie gdziee\u015b",src:"ziomal"}];var A=function(){var e=Object(i.useState)(null),t=Object(n.a)(e,2),a=t[0],s=t[1],c=Object(i.useState)(!1),r=Object(n.a)(c,2),o=r[0],l=r[1];return Object(C.jsx)("div",{children:a?Object(C.jsx)(L,{szymi:a,restart:function(){return s(null)}}):Object(C.jsx)(P,{loading:o,startLoading:function(){l(!0),setTimeout(d,2e3)}})});function d(){var e=Math.floor(Math.random()*T.length);s(T[e]),l(!1)}},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,36)).then((function(t){var a=t.getCLS,i=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),i(e),s(e),c(e),r(e)}))},D=a(14),I=a(2);r.a.render(Object(C.jsx)(s.a.StrictMode,{children:Object(C.jsx)(D.a,{children:Object(C.jsx)(I.c,{children:Object(C.jsx)(I.a,{exact:!0,path:"/szymi",children:Object(C.jsx)(A,{})})})})}),document.getElementById("root")),B()}},[[35,1,2]]]);
//# sourceMappingURL=main.bc5e4855.chunk.js.map