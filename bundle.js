!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){n(5),window.onload=function(){var e,t,n,r,o,i,a=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],l=document.getElementById("lives"),d=document.getElementById("categoryName"),s=document.getElementById("hintBtn"),u=document.getElementById("playBtn"),c=(document.getElementById("alphabet"),document.getElementById("alphabetList")),f=document.getElementById("clue"),p=document.getElementById("emptyWord"),h=[],g=10,o=0,m=function(){ul=document.createElement("ul"),ul.id="letter";for(var e=0;e<a.length;e++)n=document.createElement("li"),n.setAttribute("class","letters"),n.innerHTML=a[e],b(),ul.appendChild(n),c.appendChild(ul)},b=function(){n.onclick=function(){this.setAttribute("class","active"),r=this.innerHTML;for(var t=0;t<e.length;t++)e[t]===r&&(o++,v(),h[t].innerHTML=r);var n=e.indexOf(r);-1===n&&(g--,v())}},v=function(){l.innerHTML=g+" guesses left",1>g&&(l.innerHTML="You Lose"),o===h.length&&(l.innerHTML="You Win")},y=function(){wordHolder=document.createElement("ul"),wordHolder.id="word-holder";for(var t=0;t<e.length;t++)list=document.createElement("li"),list.setAttribute("class","blank"),"-"===e[t]?list.innerHTML="-":list.innerHTML="_",h.push(list),wordHolder.appendChild(list),p.appendChild(wordHolder)},x=function(){i===t[0]&&(d.innerHTML="Perth"),i===t[1]&&(d.innerHTML="Australia"),i===t[2]&&(d.innerHTML="Bundy")},w=function(){console.log("replay called"),t=[["mustang","kings-park","fremantle"],["melbourne","sydney","bundaberg"],["globe-hotel","flood","northside"]],i=t[Math.floor(Math.random()*t.length)],e=i[Math.floor(Math.random()*i.length)],m(),y(),v(),x()};w(),s.onclick=function(){hints=[["Friday, Saturday, Sunday Night","High in the sky","cottlesloe beach"],["federation square","opera house","farming"],["get pissed everyday","water everywhere","wayne the driver"]],categoriesIndex=t.indexOf(i),wordIndex=i.indexOf(e),f.innerHTML=hints[categoriesIndex][wordIndex]},u.onclick=function(){wordHolder.parentNode.removeChild(wordHolder),ul.parentNode.removeChild(ul),f.innerHTML="",w()}}},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,'body{text-align:center;font-family:arial;background-image:url("http://www.goliath.com/wp-content/uploads/2015/09/Vanna_Blank_Board.jpg");color:#fff;font-size:16px;height:550px}#word-holder{width:73%;margin:0 auto}#alphabetList{position:absolute;bottom:0}#alphabetList .letters{color:#fff;font-size:87%;font-weight:bolder;display:inline-block;margin-right:20px;padding:5px;border:3px solid #2d48cf;border-radius:5px;background-color:#31abfd}#alphabetList .active,#alphabetList .letters:hover{color:#fff;font-size:87%;font-weight:bolder;display:inline-block;margin-right:20px;padding:5px;border:3px solid #2d48cf;border-radius:5px;background-color:#31abfd;opacity:.3}#buttons{position:absolute;left:50px;bottom:140px}#buttons #hintBtn,#buttons #playBtn{border:3px solid #cf2d2d;background-color:#ed5e53;padding:5px;font-size:120%;font-weight:bolder;border-radius:5px;color:#fff}#categoryName{color:#000;font-weight:bolder;background-color:rgba(255,255,0,.64);border:5px solid #ff0;padding:10px 15px;text-align:center;display:inline-block;margin-top:100px}#lives{font-weight:bolder;font-size:150%;color:#fff;background-color:rgba(0,0,0,.5);width:40%;margin:0 auto;padding:5px}#emptyWord{margin-top:140px}.letterHolder{display:inline-block;margin-right:10px}.blank{display:inline-block;margin:15px;font-size:500%;width:47px}#header{text-decoration:underline}',""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=p[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(s(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(s(r.parts[i],t));p[r.id]={id:r.id,refs:1,parts:a}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],a=o[1],l=o[2],d=o[3],s={css:a,media:l,sourceMap:d};n[i]?n[i].parts.push(s):t.push(n[i]={id:i,parts:[s]})}return t}function i(e,t){var n=m(),r=y[y.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),y.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=y.indexOf(e);t>=0&&y.splice(t,1)}function l(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function d(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function s(e,t){var n,r,o;if(t.singleton){var i=v++;n=b||(b=l(t)),r=u.bind(null,n,i,!1),o=u.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=d(t),r=f.bind(null,n),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=l(t),r=c.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function u(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function c(e,t){var n=t.css,r=t.media;t.sourceMap;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function f(e,t){var n=t.css,r=(t.media,t.sourceMap);r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var p={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},g=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=h(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,v=0,y=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=g()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var l=n[a],d=p[l.id];d.refs--,i.push(d)}if(e){var s=o(e);r(s,t)}for(var a=0;a<i.length;a++){var d=i[a];if(0===d.refs){for(var u=0;u<d.parts.length;u++)d.parts[u]();delete p[d.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.id,r,""]]);n(4)(r,{});r.locals&&(e.exports=r.locals)}]);