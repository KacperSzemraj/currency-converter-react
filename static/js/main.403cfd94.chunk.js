(this["webpackJsonpcurrency-converter-react"]=this["webpackJsonpcurrency-converter-react"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),c=a.n(l),o=(a(9),a(1)),u=(a(10),function(e){var t=e.title;return r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"header__title"},t))}),s=(a(11),function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:"container"},t))}),m=[{short:"EUR",name:"Euro",rate:4.466},{short:"GBP",name:"Funt brytyjski",rate:4.8851},{short:"USD",name:"Dolar ameryka\u0144ski",rate:3.9806},{short:"CHF",name:"Frank szwajcarski",rate:4.1818}],i=(a(12),{weekday:"long",day:"numeric",month:"long",hour:"numeric",minute:"numeric",second:"numeric"}),f=function(){var e=Object(n.useState)(new Date),t=Object(o.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){var e=setInterval((function(){var e=new Date;l(e)}),1e3);return function(){clearInterval(e)}}),[]),r.a.createElement("p",{className:"form__clock"}," Dzisiaj jest ",a.toLocaleDateString(void 0,i))},E=(a(13),function(e){var t=e.calculateResult,a=Object(n.useState)(m[0].short),l=Object(o.a)(a,2),c=l[0],u=l[1],s=Object(n.useState)(""),i=Object(o.a)(s,2),E=i[0],d=i[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(c,E)}},r.a.createElement("fieldset",{className:"form__fieldset"},r.a.createElement("legend",{className:"form__legend"},"Uzupe\u0142nij dane"),r.a.createElement(f,null),r.a.createElement("p",null,r.a.createElement("label",null,r.a.createElement("span",{className:"form__labelText"},"Kwota w z\u0142*:"),r.a.createElement("input",{value:E,onChange:function(e){var t=e.target;return d(t.value)},placeholder:"Podaj kwot\u0119 w z\u0142",className:"form__field",type:"number",required:!0,step:"0.01"}))),r.a.createElement("p",null,r.a.createElement("label",null,r.a.createElement("span",{className:"form__labelText"},"Waluta:"),r.a.createElement("select",{className:"form__field",value:c,onChange:function(e){var t=e.target;return u(t.value)}},m.map((function(e){return r.a.createElement("option",{key:e.short,value:e.short},e.name)}))))),r.a.createElement("button",{className:"form__button"},"Przelicz")))}),d=(a(14),function(){return r.a.createElement("p",{className:"paragraph"},"Kursy walut na podstawie tabeli nr 125/A/NBP/2020 of 2020-06-30 \u2013 ",r.a.createElement("a",{rel:"noreferrer noopener",target:"_blank",href:"https://nbp.pl/",title:"Strona internetowa NBP"},"NBP"))}),p=(a(15),function(e){var t=e.result;return r.a.createElement("div",{className:"result__textBox"},r.a.createElement("span",{className:"result__text"},void 0!==t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"result__sourceAmount"},t.sourceAmount.toFixed(2),"\xa0PLN\xa0"),"to w przeliczeniu\xa0",r.a.createElement("span",{className:"result__targetAmount"},t.targetAmount.toFixed(2),"\xa0",t.currency))))}),h=(a(16),function(){return r.a.createElement("footer",{className:"footer"},"\xa9 2020 Kacper Szemraj")});var v=function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),a=t[0],l=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,{title:"Kalkulator Walutowy"}),r.a.createElement(s,null,r.a.createElement(E,{calculateResult:function(e,t){var a=m.find((function(t){return t.short===e})).rate;l({sourceAmount:+t,targetAmount:t/a,currency:e})}}),r.a.createElement(d,null),r.a.createElement(p,{result:a})),r.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.403cfd94.chunk.js.map