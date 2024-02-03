(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([t.id,"html {\n    height: 100%;\n}\nbody {\n    background-color: red;\n    height: 100%;\n}\n\n.content {\n    height: 100%;\n}\n\n.header {\n    background-color: blue;\n    height: 20%;\n    display: grid;\n    grid-template-columns: 3fr 1fr;\n    padding: 2%;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    color: white;\n}\n\n#addProject {\n    width: 50%;\n    height: 20%;\n    padding: 5%;\n}\n\n.projectHolder {\n    display: grid;\n    height: 70%;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n   \n}\n\n.item {\n    min-height: 25%;\n    background-color: white;\n    border: 1px solid black;\n    padding: 2%;\n    font-size: 2rem;\n    font-weight: bold;\n    \n}\n\n.details {\n    font-size: 1.5rem;\n    font-weight: lighter;\n    padding-top: 2%;\n    \n}\n\n.project {\n    padding: 2%;\n    font-size: 2rem;\n}",""]);const c=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<t.length;u++){var d=[].concat(t[u]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],c=0;c<t.length;c++){var s=t[c],u=r.base?s[0]+r.base:s[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var m=n(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)e[m].references++,e[m].updater(f);else{var h=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=n(a[i]);e[c].references--}for(var s=r(t,o),u=0;u<a.length;u++){var d=n(a[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0;var r={};(()=>{n.d(r,{NG:()=>yt,N:()=>bt,F6:()=>pt,Ut:()=>gt,R2:()=>ht});var t=n(379),e=n.n(t),o=n(795),a=n.n(o),i=n(569),c=n.n(i),s=n(565),u=n.n(s),d=n(216),l=n.n(d),m=n(589),f=n.n(m),h=n(426),g={};function p(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}function y(t){if(!(e=t,e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)||"number"==typeof t))return!1;var e;const n=p(t);return!isNaN(Number(n))}g.styleTagTransform=f(),g.setAttributes=u(),g.insert=c().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=l(),e()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;const b={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function w(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const v={date:w({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:w({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:w({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},k={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function M(t){return(e,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,o=n?.width?String(n.width):e;r=t.formattingValues[o]||t.formattingValues[e]}else{const e=t.defaultWidth,o=n?.width?String(n.width):t.defaultWidth;r=t.values[o]||t.values[e]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const S={ordinalNumber:(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:M({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:M({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:M({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:M({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:M({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function T(t){return(e,n={})=>{const r=n.width,o=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],a=e.match(o);if(!a)return null;const i=a[0],c=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(c)?function(t,e){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(c):function(t,e){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(c);let u;return u=t.valueCallback?t.valueCallback(s):s,u=n.valueCallback?n.valueCallback(u):u,{value:u,rest:e.slice(i.length)}}}const x={ordinalNumber:(P={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(P.matchPattern);if(!n)return null;const r=n[0],o=t.match(P.parsePattern);if(!o)return null;let a=P.valueCallback?P.valueCallback(o[0]):o[0];return a=e.valueCallback?e.valueCallback(a):a,{value:a,rest:t.slice(r.length)}}),era:T({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:T({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:T({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:T({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:T({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var P;const C={code:"en-US",formatDistance:(t,e,n)=>{let r;const o=b[t];return r="string"==typeof o?o:1===e?o.one:o.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:v,formatRelative:(t,e,n,r)=>k[t],localize:S,match:x,options:{weekStartsOn:0,firstWeekContainsDate:1}};let E={};function D(){return E}Math.pow(10,8);const N=6048e5,j=864e5;function W(t){const e=p(t);return e.setHours(0,0,0,0),e}function H(t){const e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function L(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function O(t){const e=p(t);return function(t,e){const n=W(t),r=W(e),o=n.getTime()-H(n),a=r.getTime()-H(r);return Math.round((o-a)/j)}(e,function(t){const e=p(t),n=L(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}(e))+1}function q(t,e){const n=D(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,o=p(t),a=o.getDay(),i=(a<r?7:0)+a-r;return o.setDate(o.getDate()-i),o.setHours(0,0,0,0),o}function I(t){return q(t,{weekStartsOn:1})}function Y(t){const e=p(t),n=e.getFullYear(),r=L(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const o=I(r),a=L(t,0);a.setFullYear(n,0,4),a.setHours(0,0,0,0);const i=I(a);return e.getTime()>=o.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function $(t){const e=p(t),n=I(e).getTime()-function(t){const e=Y(t),n=L(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),I(n)}(e).getTime();return Math.round(n/N)+1}function B(t,e){const n=p(t),r=n.getFullYear(),o=D(),a=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1,i=L(t,0);i.setFullYear(r+1,0,a),i.setHours(0,0,0,0);const c=q(i,e),s=L(t,0);s.setFullYear(r,0,a),s.setHours(0,0,0,0);const u=q(s,e);return n.getTime()>=c.getTime()?r+1:n.getTime()>=u.getTime()?r:r-1}function F(t,e){const n=p(t),r=q(n,e).getTime()-function(t,e){const n=D(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,o=B(t,e),a=L(t,0);return a.setFullYear(o,0,r),a.setHours(0,0,0,0),q(a,e)}(n,e).getTime();return Math.round(r/N)+1}function A(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const z={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return A("yy"===e?r%100:r,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):A(n+1,2)},d:(t,e)=>A(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>A(t.getHours()%12||12,e.length),H:(t,e)=>A(t.getHours(),e.length),m:(t,e)=>A(t.getMinutes(),e.length),s:(t,e)=>A(t.getSeconds(),e.length),S(t,e){const n=e.length,r=t.getMilliseconds();return A(Math.floor(r*Math.pow(10,n-3)),e.length)}},Q={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),r=e>0?e:1-e;return n.ordinalNumber(r,{unit:"year"})}return z.y(t,e)},Y:function(t,e,n,r){const o=B(t,r),a=o>0?o:1-o;return"YY"===e?A(a%100,2):"Yo"===e?n.ordinalNumber(a,{unit:"year"}):A(a,e.length)},R:function(t,e){return A(Y(t),e.length)},u:function(t,e){return A(t.getFullYear(),e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return A(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return A(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return z.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return A(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const o=F(t,r);return"wo"===e?n.ordinalNumber(o,{unit:"week"}):A(o,e.length)},I:function(t,e,n){const r=$(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):A(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):z.d(t,e)},D:function(t,e,n){const r=O(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):A(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const o=t.getDay(),a=(o-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(a);case"ee":return A(a,2);case"eo":return n.ordinalNumber(a,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const o=t.getDay(),a=(o-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(a);case"cc":return A(a,e.length);case"co":return n.ordinalNumber(a,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),o=0===r?7:r;switch(e){case"i":return String(o);case"ii":return A(o,e.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let o;switch(o=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let o;switch(o=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return z.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):z.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):A(r,e.length)},k:function(t,e,n){let r=t.getHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):A(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):z.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):z.s(t,e)},S:function(t,e){return z.S(t,e)},X:function(t,e,n,r){const o=(r._originalDate||t).getTimezoneOffset();if(0===o)return"Z";switch(e){case"X":return J(o);case"XXXX":case"XX":return X(o);default:return X(o,":")}},x:function(t,e,n,r){const o=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return J(o);case"xxxx":case"xx":return X(o);default:return X(o,":")}},O:function(t,e,n,r){const o=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+G(o,":");default:return"GMT"+X(o,":")}},z:function(t,e,n,r){const o=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+G(o,":");default:return"GMT"+X(o,":")}},t:function(t,e,n,r){const o=r._originalDate||t;return A(Math.floor(o.getTime()/1e3),e.length)},T:function(t,e,n,r){return A((r._originalDate||t).getTime(),e.length)}};function G(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),o=Math.floor(r/60),a=r%60;return 0===a?n+String(o):n+String(o)+e+A(a,2)}function J(t,e){return t%60==0?(t>0?"-":"+")+A(Math.abs(t)/60,2):X(t,e)}function X(t,e=""){const n=t>0?"-":"+",r=Math.abs(t);return n+A(Math.floor(r/60),2)+e+A(r%60,2)}const R=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},_=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},U={p:_,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],o=n[2];if(!o)return R(t,e);let a;switch(r){case"P":a=e.dateTime({width:"short"});break;case"PP":a=e.dateTime({width:"medium"});break;case"PPP":a=e.dateTime({width:"long"});break;default:a=e.dateTime({width:"full"})}return a.replace("{{date}}",R(r,e)).replace("{{time}}",_(o,e))}},Z=/^D+$/,K=/^Y+$/,V=["D","DD","YY","YYYY"];function tt(t,e,n){const r=function(t,e,n){const r="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,n);if(console.warn(r),V.includes(t))throw new RangeError(r)}const et=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,nt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,rt=/^'([^]*?)'?$/,ot=/''/g,at=/[a-zA-Z]/;function it(t,e){t.list;const n=t.name,r=document.getElementById(`${n}`),o=document.createElement("div");o.className="itemHolder";const a=document.createElement("button");a.id=`${e}`,a.className="detailsBtn",a.innerText="Details",r.appendChild(o),r.appendChild(a)}function ct(t){let e=[];for(let n=0;n<t;n++){let t=localStorage.getItem(n),r=JSON.parse(t);e.push(r)}return null!=e[0]?e:[]}!function(t,e,n){const r=D(),o=n?.locale??r.locale??C,a=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,c=p(t);if(!y(c))throw new RangeError("Invalid time value");const s={firstWeekContainsDate:a,weekStartsOn:i,locale:o,_originalDate:c};e.match(nt).map((function(t){const e=t[0];return"p"===e||"P"===e?(0,U[e])(t,o.formatLong):t})).join("").match(et).map((function(r){if("''"===r)return"'";const a=r[0];if("'"===a)return function(t){const e=t.match(rt);return e?e[1].replace(ot,"'"):t}(r);const i=Q[a];if(i)return!n?.useAdditionalWeekYearTokens&&(u=r,K.test(u))&&tt(r,e,String(t)),!n?.useAdditionalDayOfYearTokens&&function(t){return Z.test(t)}(r)&&tt(r,e,String(t)),i(c,r,o.localize,s);var u;if(a.match(at))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return r})).join("")}(new Date(2014,1,11),"yyyy-MM-dd");const st=function(){let t;return{addItem:function(){return t++},getCount:function(){return t},startCount:function(){return t=null==localStorage.getItem("count")?0:localStorage.getItem("count"),t}}}();let ut=st.startCount();function dt(t,e){const n=JSON.stringify(t);if(-1==e){let t=st.getCount();localStorage.setItem(t,n),st.addItem(),localStorage.setItem("count",st.getCount())}let r=JSON.parse(localStorage.getItem(e));console.log(t),console.log("LOOK HERE!!!!"),console.log(t.list),console.log(r),localStorage.setItem(e,n)}const lt=function(){let t=[],e=ct(ut);for(let n=0;n<st.getCount();n++)t.push(e[n].name);return{add:function(e){return t.push(e),t},list:t}}();function mt(t){let e=0;return lt.add(t),{name:t,list:[],getLength:function(){return e},addLength:function(){return e++},subtractLength:function(){return e--}}}function ft(t){let e=t.list;const n=function(n){return e.push(n),t.addLength(),e};return{getTask:function(t,e,r,o,a){n({task:t,description:e,priority:r,date:o,complete:a})},addTask:n,removeTask:function(n){let r=t.getLength();for(let o=0;o<r;o++)if(n==e[o].task){e.splice(`${o}`,1),t.subtractLength();break}return e},changePriority:function(n,r){const o=t.getLength();for(let t=0;t<o;t++)e[t].task==n&&(e[t].priority=r);return e},setComplete:function(n){const r=t.getLength();for(let t=0;t<r;t++)e[t].task==n&&(e[t].complete=1);return e},list:e}}function ht(){document.querySelector("#submit").addEventListener("click",(function(t){!function(t,e,n,r,o){const a=mt(t);ft(a).getTask(e,n,r,o,0),dt(a,-1)}(document.getElementById("name").value,document.getElementById("task").value,document.getElementById("description").value,document.getElementById("priority").value,document.getElementById("date").value)}))}function gt(t){document.getElementById("addTaskSubmit").addEventListener("click",(function(e){const n=document.getElementById("task").value,r=document.getElementById("description").value,o=document.getElementById("priority").value,a=document.getElementById("date").value;!function(t,e,n){let r=JSON.parse(localStorage.getItem(t)),o=r.name,a=r.list;console.log(a[0]);let i=a[0].task,c=a[0].description,s=a[0].priority,u=a[0].date,d=r.list.length;const l=mt(o);if(ft(l).getTask(i,c,s,u,0),d>1)for(let t=1;t<d;t++){let e={task:a[t].task,description:a[t].description,priority:a[t].priority,date:a[t].date,complete:0};ft(l).addTask(e)}ft(l).addTask(e),dt(l,t)}(t,{task:n,description:r,priority:o,date:a,complete:0})}))}function pt(t,e){console.log(`task is ${e}`);const n=JSON.parse(localStorage.getItem(t));let r=n.list,o=n.list.length;for(let t=0;t<o;t++)if(r[t].task==e){r.splice(t,1);break}let a=r.length;const i=mt(n.name);let c=r[0].task,s=r[0].description,u=r[0].priority,d=r[0].date,l=r[0].complete;ft(i).getTask(c,s,u,d,l);for(let t=1;t<a;t++){let e={task:r[t].task,description:r[t].description,priority:r[t].priority,date:r[t].date,complete:r[t].complete};ft(i).addTask(e)}dt(i,t)}function yt(t,e,n){console.log(t),console.log(e);const r=wt(t);console.log(r),ft(r).changePriority(e,n),console.log(r),dt(r,t)}function bt(t,e){console.log(t),console.log(e);const n=wt(t);console.log(n),ft(n).setComplete(e),dt(n,t)}function wt(t){const e=JSON.parse(localStorage.getItem(t));let n=e.list,r=n.length;const o=mt(e.name);let a=n[0].task,i=n[0].description,c=n[0].priority,s=n[0].date,u=n[0].complete;ft(o).getTask(a,i,c,s,u);for(let t=1;t<r;t++){let e={task:n[t].task,description:n[t].description,priority:n[t].priority,date:n[t].date,complete:n[t].complete};ft(o).addTask(e)}return o}!function(){const t=document.querySelector(".content"),e=document.createElement("div");e.style.display="none",e.className="addProject",e.innerHTML='\n         <form>\n             <label for = "name">Project Name</label>\n             <input type = "text" id = "name">\n             <label for = "tast">Task</label>\n             <input type = "text" id = "task">\n             <label for = "description">Description</label>\n             <input type = "text" id = "description">\n             <label for = "priority">Priority</label>\n             <input type = "number" id = "priority">\n             <label for = "date">Date</label>\n             <input type = "text" id = "date">\n             <button id = "submit" type="submit">Submit</button>\n         </form>',t.appendChild(e),t.innerHTML='\n         <div class = "header">\n                <div id = "info">Here are your projects!</div>\n                <div id = "btns"><button id = "addProject">Add Project</button></div>\n                 \n         </div>\n         <div class = "projectHolder">\n         </div>'}(),function(t){const e=t.list,n=e.length,r=document.querySelector(".projectHolder");for(let t=0;t<n;t++){let n=document.createElement("div");n.className="project",n.id=`${e[t]}`,n.innerText=e[t],r.appendChild(n)}}(lt),function(){let t=ct(ut),e=st.getCount();for(let n=0;n<e;n++)it(t[n],n)}(),document.querySelector("#addProject").addEventListener("click",(function t(){const e=document.querySelector(".content");document.querySelector(".projectHolder").style.display="none";const n=document.createElement("div");n.className="addProject",n.innerHTML='\n    <form>\n        <label for = "name">Project Name</label>\n        <input type = "text" id = "name">\n        <label for = "task">Task</label>\n        <input type = "text" id = "task">\n        <label for = "description">Description</label>\n        <input type = "text" id = "description">\n        <label for = "priority">Priority</label>\n        <input type = "number" id = "priority">\n        <label for = "date">Date</label>\n        <input type = "date" id = "date">\n        <button id = "submit" type="submit">Submit</button>\n    </form>',e.appendChild(n),document.querySelector("#addProject").removeEventListener("click",t),ht()})),document.querySelectorAll(".detailsBtn").forEach((function(t){t.addEventListener("click",(function(){!function(t){document.querySelector(".header").style.display="none",document.querySelector(".projectHolder").style.display="none";const e=document.querySelector(".content"),n=document.createElement("div");n.id=`project${t}`,n.className="projectDiv";let r=JSON.parse(localStorage.getItem(t));console.log(r.list[0]),console.log(r);const o=document.createElement("div");o.className="projectHeader";const a=document.createElement("h1");a.id=r.name,a.innerText=`Project: ${r.name}`,o.appendChild(a);const i=document.createElement("button");i.id=`add${t}`,i.className="btn",i.innerText="Add Task",o.appendChild(i),n.appendChild(o);const c=document.createElement("div");c.className="toDo";let s=r.list.length;console.log(s),console.log(r.list);for(let e=0;e<s;e++){let n=r.list[e],o=document.createElement("ul"),a=document.createElement("li");a.innerText=`Task: ${n.task}`,o.appendChild(a);let i=document.createElement("li");i.innerText=`Description: ${n.description}`,o.appendChild(i);let s=document.createElement("li");s.innerText=`Priority: ${n.priority}`,o.appendChild(s);let u=document.createElement("li");u.innerText=`Date: ${n.date}`,o.appendChild(u);let d=document.createElement("li");d.innerText=`Complete: ${n.complete}`,o.appendChild(d),c.appendChild(o);let l=document.createElement("div");l.id=`holder${n.task}`;let m=document.createElement("button");m.id=`priority${t}${n.task}`,m.className="btn",m.innerText="Change Priority",l.appendChild(m);let f=document.createElement("button");f.id=`complete${t}${n.task}`,f.className="btn",f.innerText="Mark Complete",l.appendChild(f);let h=document.createElement("button");h.id=`remove${t}${n.task}`,h.className="btn",h.innerText="Remove Task",l.appendChild(h),c.appendChild(l)}n.appendChild(c),e.appendChild(n),document.querySelectorAll(".btn").forEach((function(t){t.addEventListener("click",(function(){let e;if("Add Task"==t.innerHTML&&(e=t.id[3],function(t){console.log(t);const e=document.querySelector(`#project${t}`),n=document.createElement("div");n.className="addTask",n.innerHTML='\n    <form>\n        <label for = "task">Task</label>\n        <input type = "text" id = "task">\n        <label for = "description">Description</label>\n        <input type = "text" id = "description">\n        <label for = "priority">Priority</label>\n        <input type = "number" id = "priority">\n        <label for = "date">Date</label>\n        <input type = "date" id = "date">\n        <button id = "addTaskSubmit" type="submit">Submit</button>\n    </form>',e.appendChild(n),document.querySelector(`#add${t}`).style.display="none",gt(t)}(e)),"Remove Task"==t.innerHTML){e=t.id[6];let n=t.id,r=t.id.length;pt(e,n.substring(7,r))}if("Change Priority"==t.innerHTML){document.getElementById(`${t.id}`).style.display="none",e=t.id[8];let n=t.id,r=n.length;!function(t,e){const n=document.createElement("div");n.id="priSubmit",n.innerHTML=' <h3>Set new priority</h3>\n    <form>\n    <label for = "priority">Priority</label>\n    <input type = "number" id = "priority">\n    <button type = "submit" id = "newpri">Submit</button>\n    </form>',document.getElementById(`holder${t}`).appendChild(n),document.getElementById("newpri").onclick=function(n){n.preventDefault();const r=document.getElementById("priority").value;console.log(r),yt(e,t,r)}}(n.substring(9,r),e)}if("Mark Complete"==t.innerHTML){e=t.id[8];let n=t.id,r=n.length;bt(e,n.substring(9,r))}}))}))}(t.id)}))}))})()})();