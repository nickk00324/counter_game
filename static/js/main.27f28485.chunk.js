(this["webpackJsonpcounter-game"]=this["webpackJsonpcounter-game"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(14)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(3),r=n.n(c),i=(n(9),n(1)),l=(n(10),function(e){var t=e.initialTarget;return o.a.createElement("header",{className:"header-container"},o.a.createElement("h1",{className:"main-header"},"welcome to the counter game"),o.a.createElement("h2",{className:"sub-header"},"click the button ",t," times to win"))}),u=(n(11),function(e){var t=e.updateCount;return o.a.createElement("div",{className:"buttons"},o.a.createElement("button",{className:"count-button",onClick:t},"click"))}),s=(n(12),function(e){var t=e.highOrLow,n=e.resetGame;return"high"===t?o.a.createElement("div",{className:"game-over-text"},o.a.createElement("button",{className:"reset-button",onClick:n},"reset"),o.a.createElement("p",null,"great, you did it.")):o.a.createElement("div",{className:"game-over-text buttons"},o.a.createElement("button",{className:"reset-button",onClick:n},"reset"),o.a.createElement("p",{className:"low"},"yay! you're so talented!"))});n(13);var m=function(){var e=function(){return.3<Math.random()?1e3:10},t=Object(a.useState)(e),n=Object(i.a)(t,2),c=n[0],r=n[1],m=Object(a.useState)(!1),h=Object(i.a)(m,2),b=h[0],d=h[1],g=Object(a.useState)(10===c?"low":"high"),f=Object(i.a)(g,1)[0];return Object(a.useEffect)((function(){0===c&&d(!0)}),[c]),o.a.createElement(a.Fragment,null,o.a.createElement(l,{initialTarget:c}),b?o.a.createElement(s,{highOrLow:f,resetGame:function(){d(!1),r(e),console.log("ive been hit")}}):o.a.createElement(u,{updateCount:function(){b?console.log("game is over"):r((function(e){return e-1}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[4,1,2]]]);
//# sourceMappingURL=main.27f28485.chunk.js.map