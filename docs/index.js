!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){n(2),e.exports=n(0)},function(e,t,n){"use strict";n.r(t);n(0);window.addEventListener("load",(function(){var e="",t=0,n=[],o=function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.value=t,this.level=n},r=function(e){return e.trim()},u=function(e){for(var t="",n=0;n<e.level;n++)t=t.concat("   ");return t.concat(e.value.trim().concat("\n"))},c=function(c){for(var i in function(e){for(var u=!1,c=e;;){for(var i=0;i<c.length;i++)if('"'!==c[i]&&"'"!==c[i]||(u=!u),!1===u){if("{"===c[i]){var l=new o(r(c.slice(0,i)),t);n.push(l),l=new o(r(c[i]),t),n.push(l),t++,c=c.slice(i+1,c.length);break}if(";"===c[i]){var a=new o(r(c.slice(0,i+1)),t);n.push(a),c=c.slice(i+1,c.length);break}if("}"===c[i]){t--;var d=new o(r(c[i]),t);n.push(d),c=c.slice(i+1,c.length);break}}if(0===c.length)break}}(r(c)),n)e=e.concat(u(n[i]))};document.getElementById("indentButton").addEventListener("click",(function(){n=[],e="";var t=document.getElementById("inputCode").value;c(t),document.getElementById("outputCode").value=e})),document.getElementById("resetButton").addEventListener("click",(function(){n=[],e="",document.getElementById("inputCode").value="",document.getElementById("outputCode").value=""})),document.getElementById("copyButton").addEventListener("click",(function(){var e=document.getElementById("outputCode");e.select(),e.setSelectionRange(0,99999),document.execCommand("copy")}))}))}]);