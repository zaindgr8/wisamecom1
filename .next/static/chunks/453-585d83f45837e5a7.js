(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[453],{49453:function(t){t.exports=function(){function t(){return(t=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function i(t,i){(null==i||i>t.length)&&(i=t.length);for(var r=0,n=Array(i);r<i;r++)n[r]=t[r];return n}var r="image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";function n(t){return("image-"+t.split("/").slice(-1)[0]).replace(/\.([a-z]+)$/,"-$1")}var o=[["width","w"],["height","h"],["format","fm"],["download","dl"],["blur","blur"],["sharpen","sharp"],["invert","invert"],["orientation","or"],["minHeight","min-h"],["maxHeight","max-h"],["minWidth","min-w"],["maxWidth","max-w"],["quality","q"],["fit","fit"],["crop","crop"],["saturation","sat"],["auto","auto"],["dpr","dpr"],["pad","pad"]],e=["clip","crop","fill","fillmax","max","scale","min"],h=["top","bottom","left","right","center","focalpoint","entropy"],a=["format"],s=function(){function s(i,r){this.options=void 0,this.options=i?t({},i.options||{},r||{}):t({},r||{})}var p=s.prototype;return p.withOptions=function(r){var n=r.baseUrl||this.options.baseUrl,e={baseUrl:n};for(var h in r)r.hasOwnProperty(h)&&(e[function(t){for(var r,n=function(t,r){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=function(t,r){if(t){if("string"==typeof t)return i(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,r)}}(t))){n&&(t=n);var o=0;return function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(o);!(r=n()).done;){var e=r.value,h=e[0],a=e[1];if(t===h||t===a)return h}return t}(h)]=r[h]);return new s(this,t({baseUrl:n},e))},p.image=function(t){return this.withOptions({source:t})},p.dataset=function(t){return this.withOptions({dataset:t})},p.projectId=function(t){return this.withOptions({projectId:t})},p.bg=function(t){return this.withOptions({bg:t})},p.dpr=function(t){return this.withOptions(t&&1!==t?{dpr:t}:{})},p.width=function(t){return this.withOptions({width:t})},p.height=function(t){return this.withOptions({height:t})},p.focalPoint=function(t,i){return this.withOptions({focalPoint:{x:t,y:i}})},p.maxWidth=function(t){return this.withOptions({maxWidth:t})},p.minWidth=function(t){return this.withOptions({minWidth:t})},p.maxHeight=function(t){return this.withOptions({maxHeight:t})},p.minHeight=function(t){return this.withOptions({minHeight:t})},p.size=function(t,i){return this.withOptions({width:t,height:i})},p.blur=function(t){return this.withOptions({blur:t})},p.sharpen=function(t){return this.withOptions({sharpen:t})},p.rect=function(t,i,r,n){return this.withOptions({rect:{left:t,top:i,width:r,height:n}})},p.format=function(t){return this.withOptions({format:t})},p.invert=function(t){return this.withOptions({invert:t})},p.orientation=function(t){return this.withOptions({orientation:t})},p.quality=function(t){return this.withOptions({quality:t})},p.forceDownload=function(t){return this.withOptions({download:t})},p.flipHorizontal=function(){return this.withOptions({flipHorizontal:!0})},p.flipVertical=function(){return this.withOptions({flipVertical:!0})},p.ignoreImageParams=function(){return this.withOptions({ignoreImageParams:!0})},p.fit=function(t){if(-1===e.indexOf(t))throw Error('Invalid fit mode "'+t+'"');return this.withOptions({fit:t})},p.crop=function(t){if(-1===h.indexOf(t))throw Error('Invalid crop mode "'+t+'"');return this.withOptions({crop:t})},p.saturation=function(t){return this.withOptions({saturation:t})},p.auto=function(t){if(-1===a.indexOf(t))throw Error('Invalid auto mode "'+t+'"');return this.withOptions({auto:t})},p.pad=function(t){return this.withOptions({pad:t})},p.url=function(){return function(i){var e=t({},i||{}),h=e.source;delete e.source;var a=function(i){var r;if(!i)return null;if("string"==typeof i&&/^https?:\/\//.test(""+i))r={asset:{_ref:n(i)}};else if("string"==typeof i)r={asset:{_ref:i}};else if(i&&"string"==typeof i._ref)r={asset:i};else if(i&&"string"==typeof i._id)r={asset:{_ref:i._id||""}};else if(i&&i.asset&&"string"==typeof i.asset.url)r={asset:{_ref:n(i.asset.url)}};else{if("object"!=typeof i.asset)return null;r=t({},i)}return i.crop&&(r.crop=i.crop),i.hotspot&&(r.hotspot=i.hotspot),function(i){if(i.crop&&i.hotspot)return i;var r=t({},i);return r.crop||(r.crop={left:0,top:0,bottom:0,right:0}),r.hotspot||(r.hotspot={x:.5,y:.5,height:1,width:1}),r}(r)}(h);if(!a)throw Error("Unable to resolve image URL from source ("+JSON.stringify(h)+")");var s=function(t){var i=t.split("-"),n=i[1],o=i[2],e=i[3];if(!n||!o||!e)throw Error("Malformed asset _ref '"+t+"'. Expected an id like \""+r+'".');var h=o.split("x"),a=h[0],s=h[1],p=+a,u=+s;if(!(isFinite(p)&&isFinite(u)))throw Error("Malformed asset _ref '"+t+"'. Expected an id like \""+r+'".');return{id:n,width:p,height:u,format:e}}(a.asset._ref||a.asset._id||""),p=Math.round(a.crop.left*s.width),u=Math.round(a.crop.top*s.height),f={left:p,top:u,width:Math.round(s.width-a.crop.right*s.width-p),height:Math.round(s.height-a.crop.bottom*s.height-u)},c=a.hotspot.height*s.height/2,l=a.hotspot.width*s.width/2,d=a.hotspot.x*s.width,w=a.hotspot.y*s.height;return e.rect||e.focalPoint||e.ignoreImageParams||e.crop||(e=t({},e,function(t,i){var r,n=i.width,o=i.height;if(!(n&&o))return{width:n,height:o,rect:t.crop};var e=t.crop,h=t.hotspot,a=n/o;if(e.width/e.height>a){var s=Math.round(e.height),p=Math.round(s*a),u=Math.max(0,Math.round(e.top)),f=Math.max(0,Math.round(Math.round((h.right-h.left)/2+h.left)-p/2));f<e.left?f=e.left:f+p>e.left+e.width&&(f=e.left+e.width-p),r={left:f,top:u,width:p,height:s}}else{var c=e.width,l=Math.round(c/a),d=Math.max(0,Math.round(e.left)),w=Math.max(0,Math.round(Math.round((h.bottom-h.top)/2+h.top)-l/2));w<e.top?w=e.top:w+l>e.top+e.height&&(w=e.top+e.height-l),r={left:d,top:w,width:c,height:l}}return{width:n,height:o,rect:r}}({crop:f,hotspot:{left:d-l,top:w-c,right:d+l,bottom:w+c}},e))),function(t){var i=(t.baseUrl||"https://cdn.sanity.io").replace(/\/+$/,""),r=t.asset.id+"-"+t.asset.width+"x"+t.asset.height+"."+t.asset.format,n=i+"/images/"+t.projectId+"/"+t.dataset+"/"+r,e=[];if(t.rect){var h=t.rect,a=h.left,s=h.top,p=h.width,u=h.height;(0!==a||0!==s||u!==t.asset.height||p!==t.asset.width)&&e.push("rect="+a+","+s+","+p+","+u)}t.bg&&e.push("bg="+t.bg),t.focalPoint&&(e.push("fp-x="+t.focalPoint.x),e.push("fp-y="+t.focalPoint.y));var f=[t.flipHorizontal&&"h",t.flipVertical&&"v"].filter(Boolean).join("");return(f&&e.push("flip="+f),o.forEach(function(i){var r=i[0],n=i[1];void 0!==t[r]?e.push(n+"="+encodeURIComponent(t[r])):void 0!==t[n]&&e.push(n+"="+encodeURIComponent(t[n]))}),0===e.length)?n:n+"?"+e.join("&")}(t({},e,{asset:s}))}(this.options)},p.toString=function(){return this.url()},s}();return function(t){if(t&&"config"in t&&"function"==typeof t.config){var i=t.config(),r=i.apiHost,n=i.projectId,o=i.dataset;return new s(null,{baseUrl:(r||"https://api.sanity.io").replace(/^https:\/\/api\./,"https://cdn."),projectId:n,dataset:o})}if(t&&"clientConfig"in t&&"object"==typeof t.clientConfig){var e=t.clientConfig,h=e.apiHost,a=e.projectId,p=e.dataset;return new s(null,{baseUrl:(h||"https://api.sanity.io").replace(/^https:\/\/api\./,"https://cdn."),projectId:a,dataset:p})}return new s(null,t)}}()}}]);