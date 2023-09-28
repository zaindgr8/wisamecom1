(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[794],{24418:function(e,t){var n,o,r;/** @license
 * eventsource.js
 * Available under MIT License (MIT)
 * https://github.com/Yaffle/EventSource/
 */!function(i){"use strict";var a=i.setTimeout,s=i.clearTimeout,c=i.XMLHttpRequest,d=i.XDomainRequest,u=i.ActiveXObject,h=i.EventSource,l=i.document,p=i.Promise,f=i.fetch,v=i.Response,y=i.TextDecoder,g=i.TextEncoder,w=i.AbortController;if("undefined"==typeof window||void 0===l||"readyState"in l||null!=l.body||(l.readyState="loading",window.addEventListener("load",function(e){l.readyState="complete"},!1)),null==c&&null!=u&&(c=function(){return new u("Microsoft.XMLHTTP")}),void 0==Object.create&&(Object.create=function(e){function t(){}return t.prototype=e,new t}),Date.now||(Date.now=function(){return new Date().getTime()}),void 0==w){var b=f;f=function(e,t){var n=t.signal;return b(e,{headers:t.headers,credentials:t.credentials,cache:t.cache}).then(function(e){var t=e.body.getReader();return n._reader=t,n._aborted&&n._reader.cancel(),{status:e.status,statusText:e.statusText,headers:e.headers,body:{getReader:function(){return t}}}})},w=function(){this.signal={_reader:null,_aborted:!1},this.abort=function(){null!=this.signal._reader&&this.signal._reader.cancel(),this.signal._aborted=!0}}}function E(){this.bitsNeeded=0,this.codePoint=0}E.prototype.decode=function(e){function t(e,t,n){if(1===n)return e>=128>>t&&e<<t<=2047;if(2===n)return e>=2048>>t&&e<<t<=55295||e>=57344>>t&&e<<t<=65535;if(3===n)return e>=65536>>t&&e<<t<=1114111;throw Error()}function n(e,t){if(6===e)return t>>6>15?3:t>31?2:1;if(12===e)return t>15?3:2;if(18===e)return 3;throw Error()}for(var o="",r=this.bitsNeeded,i=this.codePoint,a=0;a<e.length;a+=1){var s=e[a];0!==r&&(s<128||s>191||!t(i<<6|63&s,r-6,n(r,i)))&&(r=0,o+=String.fromCharCode(i=65533)),0===r?(s>=0&&s<=127?(r=0,i=s):s>=192&&s<=223?(r=6,i=31&s):s>=224&&s<=239?(r=12,i=15&s):s>=240&&s<=247?(r=18,i=7&s):(r=0,i=65533),0===r||t(i,r,n(r,i))||(r=0,i=65533)):(r-=6,i=i<<6|63&s),0===r&&(i<=65535?o+=String.fromCharCode(i):o+=String.fromCharCode(55296+(i-65535-1>>10))+String.fromCharCode(56320+(i-65535-1&1023)))}return this.bitsNeeded=r,this.codePoint=i,o},(void 0==y||void 0==g||!function(){try{return"test"===new y().decode(new g().encode("test"),{stream:!0})}catch(e){console.debug("TextDecoder does not support streaming option. Using polyfill instead: "+e)}return!1}())&&(y=E);var T=function(){};function m(e){this.withCredentials=!1,this.readyState=0,this.status=0,this.statusText="",this.responseText="",this.onprogress=T,this.onload=T,this.onerror=T,this.onreadystatechange=T,this._contentType="",this._xhr=e,this._sendTimeout=0,this._abort=T}function _(e){return e.replace(/[A-Z]/g,function(e){return String.fromCharCode(e.charCodeAt(0)+32)})}function C(e){for(var t=Object.create(null),n=e.split("\r\n"),o=0;o<n.length;o+=1){var r=n[o].split(": "),i=r.shift(),a=r.join(": ");t[_(i)]=a}this._map=t}function S(){}function x(e){this._headers=e}function R(){}function O(){this._listeners=Object.create(null)}function D(e){a(function(){throw e},0)}function A(e){this.type=e,this.target=void 0}function N(e,t){A.call(this,e),this.data=t.data,this.lastEventId=t.lastEventId}function H(e,t){A.call(this,e),this.status=t.status,this.statusText=t.statusText,this.headers=t.headers}function j(e,t){A.call(this,e),this.error=t.error}m.prototype.open=function(e,t){this._abort(!0);var n=this,o=this._xhr,r=1,i=0;this._abort=function(e){0!==n._sendTimeout&&(s(n._sendTimeout),n._sendTimeout=0),1!==r&&2!==r&&3!==r||(r=4,o.onload=T,o.onerror=T,o.onabort=T,o.onprogress=T,o.onreadystatechange=T,o.abort(),0!==i&&(s(i),i=0),e||(n.readyState=4,n.onabort(null),n.onreadystatechange())),r=0};var d=function(){if(1===r){var e=0,t="",i=void 0;if("contentType"in o)e=200,t="OK",i=o.contentType;else try{e=o.status,t=o.statusText,i=o.getResponseHeader("Content-Type")}catch(n){e=0,t="",i=void 0}0!==e&&(r=2,n.readyState=2,n.status=e,n.statusText=t,n._contentType=i,n.onreadystatechange())}},u=function(){if(d(),2===r||3===r){r=3;var e="";try{e=o.responseText}catch(e){}n.readyState=3,n.responseText=e,n.onprogress()}},h=function(e,t){if((null==t||null==t.preventDefault)&&(t={preventDefault:T}),u(),1===r||2===r||3===r){if(r=4,0!==i&&(s(i),i=0),n.readyState=4,"load"===e)n.onload(t);else if("error"===e)n.onerror(t);else if("abort"===e)n.onabort(t);else throw TypeError();n.onreadystatechange()}},l=function(e){void 0==o||(4===o.readyState?"onload"in o&&"onerror"in o&&"onabort"in o||h(""===o.responseText?"error":"load",e):3===o.readyState?"onprogress"in o||u():2===o.readyState&&d())},p=function(){i=a(function(){p()},500),3===o.readyState&&u()};"onload"in o&&(o.onload=function(e){h("load",e)}),"onerror"in o&&(o.onerror=function(e){h("error",e)}),"onabort"in o&&(o.onabort=function(e){h("abort",e)}),"onprogress"in o&&(o.onprogress=u),"onreadystatechange"in o&&(o.onreadystatechange=function(e){l(e)}),("contentType"in o||!("ontimeout"in c.prototype))&&(t+=(-1===t.indexOf("?")?"?":"&")+"padding=true"),o.open(e,t,!0),"readyState"in o&&(i=a(function(){p()},0))},m.prototype.abort=function(){this._abort(!1)},m.prototype.getResponseHeader=function(e){return this._contentType},m.prototype.setRequestHeader=function(e,t){var n=this._xhr;"setRequestHeader"in n&&n.setRequestHeader(e,t)},m.prototype.getAllResponseHeaders=function(){return void 0!=this._xhr.getAllResponseHeaders&&this._xhr.getAllResponseHeaders()||""},m.prototype.send=function(){if((!("ontimeout"in c.prototype)||!("sendAsBinary"in c.prototype)&&!("mozAnon"in c.prototype))&&void 0!=l&&void 0!=l.readyState&&"complete"!==l.readyState){var e=this;e._sendTimeout=a(function(){e._sendTimeout=0,e.send()},4);return}var t=this._xhr;"withCredentials"in t&&(t.withCredentials=this.withCredentials);try{t.send(void 0)}catch(e){throw e}},C.prototype.get=function(e){return this._map[_(e)]},null!=c&&null==c.HEADERS_RECEIVED&&(c.HEADERS_RECEIVED=2),S.prototype.open=function(e,t,n,o,r,i,a){e.open("GET",r);var s=0;for(var d in e.onprogress=function(){var t=e.responseText.slice(s);s+=t.length,n(t)},e.onerror=function(e){e.preventDefault(),o(Error("NetworkError"))},e.onload=function(){o(null)},e.onabort=function(){o(null)},e.onreadystatechange=function(){if(e.readyState===c.HEADERS_RECEIVED){var n=e.status,o=e.statusText,r=e.getResponseHeader("Content-Type"),i=e.getAllResponseHeaders();t(n,o,r,new C(i))}},e.withCredentials=i,a)Object.prototype.hasOwnProperty.call(a,d)&&e.setRequestHeader(d,a[d]);return e.send(),e},x.prototype.get=function(e){return this._headers.get(e)},R.prototype.open=function(e,t,n,o,r,i,a){var s=null,c=new w,d=c.signal,u=new y;return f(r,{headers:a,credentials:i?"include":"same-origin",signal:d,cache:"no-store"}).then(function(e){return s=e.body.getReader(),t(e.status,e.statusText,e.headers.get("Content-Type"),new x(e.headers)),new p(function(e,t){var o=function(){s.read().then(function(t){t.done?e(void 0):(n(u.decode(t.value,{stream:!0})),o())}).catch(function(e){t(e)})};o()})}).catch(function(e){if("AbortError"!==e.name)return e}).then(function(e){o(e)}),{abort:function(){null!=s&&s.cancel(),c.abort()}}},O.prototype.dispatchEvent=function(e){e.target=this;var t=this._listeners[e.type];if(void 0!=t)for(var n=t.length,o=0;o<n;o+=1){var r=t[o];try{"function"==typeof r.handleEvent?r.handleEvent(e):r.call(this,e)}catch(e){D(e)}}},O.prototype.addEventListener=function(e,t){e=String(e);var n=this._listeners,o=n[e];void 0==o&&(o=[],n[e]=o);for(var r=!1,i=0;i<o.length;i+=1)o[i]===t&&(r=!0);r||o.push(t)},O.prototype.removeEventListener=function(e,t){e=String(e);var n=this._listeners,o=n[e];if(void 0!=o){for(var r=[],i=0;i<o.length;i+=1)o[i]!==t&&r.push(o[i]);0===r.length?delete n[e]:n[e]=r}},N.prototype=Object.create(A.prototype),H.prototype=Object.create(A.prototype),j.prototype=Object.create(A.prototype);var I=/^text\/event\-stream(;.*)?$/i,P=function(e,t){var n=null==e?t:parseInt(e,10);return n!=n&&(n=t),L(n)},L=function(e){return Math.min(Math.max(e,1e3),18e6)},M=function(e,t,n){try{"function"==typeof t&&t.call(e,n)}catch(e){D(e)}};function q(e,t){var n,o,r,i,u,h,l,p,f,v,y,g,w,b,E,T,_,C,x,D,A,q,X,G,V,U,z,B,K,Q;O.call(this),t=t||{},this.onopen=void 0,this.onmessage=void 0,this.onerror=void 0,this.url=void 0,this.readyState=void 0,this.withCredentials=void 0,this.headers=void 0,this._close=void 0,n=this,o=e,r=t,o=String(o),i=!!r.withCredentials,u=r.lastEventIdQueryParameterName||"lastEventId",h=L(1e3),l=P(r.heartbeatTimeout,45e3),p="",f=h,v=!1,y=0,g=r.headers||{},w=r.Transport,b=k&&void 0==w?void 0:new m(void 0!=w?new w:void 0!=c&&"withCredentials"in c.prototype||void 0==d?new c:new d),E=null!=w&&"string"!=typeof w?new w:void 0==b?new R:new S,T=void 0,_=0,C=-1,x="",D="",A="",q="",X=0,G=0,V=0,U=function(e,t,o,r){if(0===C){if(200===e&&void 0!=o&&I.test(o)){C=1,v=Date.now(),f=h,n.readyState=1;var i=new H("open",{status:e,statusText:t,headers:r});n.dispatchEvent(i),M(n,n.onopen,i)}else{var a="";200!==e?(t&&(t=t.replace(/\s+/g," ")),a="EventSource's response has a status "+e+" "+t+" that is not 200. Aborting the connection."):a="EventSource's response has a Content-Type specifying an unsupported type: "+(void 0==o?"-":o.replace(/\s+/g," "))+". Aborting the connection.",K();var i=new H("error",{status:e,statusText:t,headers:r});n.dispatchEvent(i),M(n,n.onerror,i),console.error(a)}}},z=function(e){if(1===C){for(var t=-1,o=0;o<e.length;o+=1){var r=e.charCodeAt(o);(10===r||13===r)&&(t=o)}var i=(-1!==t?q:"")+e.slice(0,t+1);q=(-1===t?q:"")+e.slice(t+1),""!==e&&(v=Date.now(),y+=e.length);for(var c=0;c<i.length;c+=1){var r=i.charCodeAt(c);if(-1===X&&10===r)X=0;else if(-1===X&&(X=0),13===r||10===r){if(0!==X){1===X&&(V=c+1);var d=i.slice(G,V-1),u=i.slice(V+(V<c&&32===i.charCodeAt(V)?1:0),c);"data"===d?x+="\n"+u:"id"===d?D=u:"event"===d?A=u:"retry"===d?f=h=P(u,h):"heartbeatTimeout"===d&&(l=P(u,l),0!==_&&(s(_),_=a(function(){Q()},l)))}if(0===X){if(""!==x){p=D,""===A&&(A="message");var g=new N(A,{data:x.slice(1),lastEventId:D});if(n.dispatchEvent(g),"open"===A?M(n,n.onopen,g):"message"===A?M(n,n.onmessage,g):"error"===A&&M(n,n.onerror,g),2===C)return}x="",A=""}X=13===r?-1:0}else 0===X&&(G=c,X=1),1===X?58===r&&(V=c+1,X=2):2===X&&(X=3)}}},B=function(e){if(1===C||0===C){C=-1,0!==_&&(s(_),_=0),_=a(function(){Q()},f),f=L(Math.min(16*h,2*f)),n.readyState=0;var t=new j("error",{error:e});n.dispatchEvent(t),M(n,n.onerror,t),void 0!=e&&console.error(e)}},K=function(){C=2,void 0!=T&&(T.abort(),T=void 0),0!==_&&(s(_),_=0),n.readyState=2},Q=function(){if(_=0,-1!==C){if(v||void 0==T){var e=Math.max((v||Date.now())+l-Date.now(),1);v=!1,_=a(function(){Q()},e)}else B(Error("No activity within "+l+" milliseconds. "+(0===C?"No response received.":y+" chars received.")+" Reconnecting.")),void 0!=T&&(T.abort(),T=void 0);return}v=!1,y=0,_=a(function(){Q()},l),C=0,x="",A="",D=p,q="",G=0,V=0,X=0;var t=o;if("data:"!==o.slice(0,5)&&"blob:"!==o.slice(0,5)&&""!==p){var r=o.indexOf("?");t=(-1===r?o:o.slice(0,r+1)+o.slice(r+1).replace(/(?:^|&)([^=&]*)(?:=[^&]*)?/g,function(e,t){return t===u?"":e}))+((-1===o.indexOf("?")?"?":"&")+u)+"="+encodeURIComponent(p)}var i=n.withCredentials,s={};s.Accept="text/event-stream";var c=n.headers;if(void 0!=c)for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(s[d]=c[d]);try{T=E.open(b,U,z,B,t,i,s)}catch(e){throw K(),e}},n.url=o,n.readyState=0,n.withCredentials=i,n.headers=g,n._close=K,Q()}var k=void 0!=f&&void 0!=v&&"body"in v.prototype;q.prototype=Object.create(O.prototype),q.prototype.CONNECTING=0,q.prototype.OPEN=1,q.prototype.CLOSED=2,q.prototype.close=function(){this._close()},q.CONNECTING=0,q.OPEN=1,q.CLOSED=2,q.prototype.withCredentials=void 0;var X=h;void 0==c||void 0!=h&&"withCredentials"in h.prototype||(X=q),function(i){if("object"==typeof e.exports){var a=i(t);void 0!==a&&(e.exports=a)}else o=[t],void 0!==(r="function"==typeof(n=i)?n.apply(t,o):n)&&(e.exports=r)}(function(e){e.EventSourcePolyfill=q,e.NativeEventSource=h,e.EventSource=X})}("undefined"==typeof globalThis?"undefined"!=typeof window?window:"undefined"!=typeof self?self:this:globalThis)},7794:function(e,t,n){e.exports=n(24418).EventSourcePolyfill}}]);