!function(e){function n(n){for(var r,i,l=n[0],f=n[1],c=n[2],p=0,s=[];p<l.length;p++)i=l[p],o[i]&&s.push(o[i][0]),o[i]=0;for(r in f)Object.prototype.hasOwnProperty.call(f,r)&&(e[r]=f[r]);for(a&&a(n);s.length;)s.shift()();return u.push.apply(u,c||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,l=1;l<t.length;l++){var f=t[l];0!==o[f]&&(r=!1)}r&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={0:0},u=[];function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],f=l.push.bind(l);l.push=n,l=l.slice();for(var c=0;c<l.length;c++)n(l[c]);var a=f;u.push([27,1]),t()}({27:function(e,n,t){"use strict";t.r(n);t(28),t(48),t(50),t(59);var r=["Human","Web Developer","U can call me Luke"],o=0;function u(){var e=r[o].split("");!function n(){if(!(e.length>0))return function(){var e=r[o].split("");!function n(){if(!(e.length>0))return r.length>o+1?o++:o=0,u(),!1;e.pop(),document.getElementById("word").innerHTML=e.join(""),setTimeout(n,200)}()}(),!1;document.getElementById("word").innerHTML+=e.shift(),setTimeout(n,300)}()}u()},59:function(e,n,t){}});
//# sourceMappingURL=main.d4ab2155.js.map