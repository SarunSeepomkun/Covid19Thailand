(this.webpackJsonpcovid19thailand=this.webpackJsonpcovid19thailand||[]).push([[0],{177:function(e,t,n){},178:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(2),a=n.n(c),o=n(53),i=n.n(o),s=(n(60),n(3)),d=n.n(s),l=n(7),u=n(27),p=n(16),h=n.n(p),j=function(){var e=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("https://covid19.th-stat.com/api/open/today").then((function(e){return e})).catch((function(e){return console.log("Error : line 11 api/Covid19TH.fetchToday.get().catch()"),console.log(e),e}));case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.log("Error : line 14 api/Covid19TH.fetchToday.js ".concat(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("https://covid19.th-stat.com/api/open/timeline").then((function(e){return e})).catch((function(e){return console.log("Error : line 53 api/Covid19TH.fetchTimeline.get().catch()"),console.log(e),e}));case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.log("Error : line 59 api/Covid19TH.fetchTimeline.js ".concat(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();n(78),n(37);var f=function(e){var t=e.props;return Object(r.jsxs)("div",{className:"container grid grid-4",children:[Object(r.jsxs)("div",{className:"card border-red",children:[Object(r.jsx)("p",{children:"\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d\u0e2a\u0e30\u0e2a\u0e21"}),Object(r.jsx)("p",{children:t.Confirmed})]}),Object(r.jsxs)("div",{className:"card border-black",children:[Object(r.jsx)("p",{children:"\u0e40\u0e2a\u0e35\u0e22\u0e0a\u0e35\u0e27\u0e34\u0e15\u0e2a\u0e30\u0e2a\u0e21"}),Object(r.jsx)("p",{children:t.Deaths})]}),Object(r.jsxs)("div",{className:"card border-green",children:[Object(r.jsx)("p",{children:"\u0e2d\u0e22\u0e39\u0e48\u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07\u0e23\u0e31\u0e01\u0e29\u0e32\u0e43\u0e19 \u0e23\u0e1e."}),Object(r.jsx)("p",{children:t.Hospitalized})]}),Object(r.jsxs)("div",{className:"card border-yellow",children:[Object(r.jsx)("p",{children:"\u0e1c\u0e39\u0e49\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d\u0e43\u0e2b\u0e21\u0e48"}),Object(r.jsx)("p",{children:t.NewConfirmed})]})]})},v=n(54);var O=function(e){var t=e.props,n=[],c=[];"undefined"!==typeof t&&0!==t.length&&(n=t.Data.map((function(e){return new Date(e.Date).toDateString()})),c=t.Data.map((function(e){return e.Confirmed})));var a={labels:n,datasets:[{label:"Covid-19 Thailand",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:c}]};return Object(r.jsx)("div",{className:"container",children:Object(r.jsx)(v.Line,{data:a})})};n(177);var x=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)([]),i=Object(u.a)(o,2),s=i[0],p=i[1];return Object(c.useEffect)((function(){(function(){var e=Object(l.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:t=e.sent,n=t.data,a(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(c.useEffect)((function(){(function(){var e=Object(l.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("line 38 App.GetCovidTimeline"),e.next=3,b();case 3:t=e.sent,n=t.data,p(n),console.log(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("span",{className:"text-center",children:Object(r.jsx)("h1",{children:"Covid-19 Thailand"})}),Object(r.jsx)(f,{props:n}),Object(r.jsx)(O,{props:s})]}),Object(r.jsx)("footer",{className:"footer py-1",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("p",{className:"text-center",children:["Provide data by :",Object(r.jsx)("a",{href:"https://covid19.ddc.moph.go.th/",target:"_blank",rel:"noopener noreferrer",children:"\u0e01\u0e23\u0e21\u0e04\u0e27\u0e1a\u0e04\u0e38\u0e21\u0e42\u0e23\u0e04"})]})})})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,179)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(x,{})}),document.getElementById("root")),g()},37:function(e,t,n){},60:function(e,t,n){},78:function(e,t,n){}},[[178,1,2]]]);
//# sourceMappingURL=main.b4c70fd8.chunk.js.map