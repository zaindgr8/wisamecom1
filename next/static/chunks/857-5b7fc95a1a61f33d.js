(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[857],{47503:function(r,e,o){"use strict";o.d(e,{j:function(){return i}});let t=r=>"boolean"==typeof r?"".concat(r):0===r?"0":r,n=function(){for(var r=arguments.length,e=Array(r),o=0;o<r;o++)e[o]=arguments[o];return e.flat(1/0).filter(Boolean).join(" ")},i=(r,e)=>o=>{var i;if((null==e?void 0:e.variants)==null)return n(r,null==o?void 0:o.class,null==o?void 0:o.className);let{variants:l,defaultVariants:s}=e,a=Object.keys(l).map(r=>{let e=null==o?void 0:o[r],n=null==s?void 0:s[r];if(null===e)return null;let i=t(e)||t(n);return l[r][i]}),c=o&&Object.entries(o).reduce((r,e)=>{let[o,t]=e;return void 0===t||(r[o]=t),r},{}),d=null==e?void 0:null===(i=e.compoundVariants)||void 0===i?void 0:i.reduce((r,e)=>{let{class:o,className:t,...n}=e;return Object.entries(n).every(r=>{let[e,o]=r;return Array.isArray(o)?o.includes({...s,...c}[e]):({...s,...c})[e]===o})?[...r,o,t]:r},[]);return n(r,a,d,null==o?void 0:o.class,null==o?void 0:o.className)}},89791:function(r,e,o){"use strict";function t(){for(var r,e,o=0,t="";o<arguments.length;)(r=arguments[o++])&&(e=function r(e){var o,t,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e){if(Array.isArray(e))for(o=0;o<e.length;o++)e[o]&&(t=r(e[o]))&&(n&&(n+=" "),n+=t);else for(o in e)e[o]&&(n&&(n+=" "),n+=o)}return n}(r))&&(t&&(t+=" "),t+=e);return t}o.d(e,{W:function(){return t}})},35846:function(r,e,o){r.exports=o(8920)},20293:function(r,e,o){"use strict";o.d(e,{m:function(){return O}});var t=/^\[(.+)\]$/;function n(r,e){var o=r;return e.split("-").forEach(function(r){o.nextPart.has(r)||o.nextPart.set(r,{nextPart:new Map,validators:[]}),o=o.nextPart.get(r)}),o}var i=/\s+/;function l(){for(var r,e,o=0,t="";o<arguments.length;)(r=arguments[o++])&&(e=function r(e){if("string"==typeof e)return e;for(var o,t="",n=0;n<e.length;n++)e[n]&&(o=r(e[n]))&&(t&&(t+=" "),t+=o);return t}(r))&&(t&&(t+=" "),t+=e);return t}function s(r){var e=function(e){return e[r]||[]};return e.isThemeGetter=!0,e}var a=/^\[(?:([a-z-]+):)?(.+)\]$/i,c=/^\d+\/\d+$/,d=new Set(["px","full","screen"]),u=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,p=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))/,f=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function b(r){return x(r)||d.has(r)||c.test(r)||m(r)}function m(r){return N(r,"length",I)}function g(r){return N(r,"size",M)}function v(r){return N(r,"position",M)}function h(r){return N(r,"url",P)}function y(r){return N(r,"number",x)}function x(r){return!Number.isNaN(Number(r))}function w(r){return r.endsWith("%")&&x(r.slice(0,-1))}function k(r){return S(r)||N(r,"number",S)}function z(r){return a.test(r)}function C(){return!0}function j(r){return u.test(r)}function G(r){return N(r,"",E)}function N(r,e,o){var t=a.exec(r);return!!t&&(t[1]?t[1]===e:o(t[2]))}function I(r){return p.test(r)}function M(){return!1}function P(r){return r.startsWith("url(")}function S(r){return Number.isInteger(Number(r))}function E(r){return f.test(r)}var O=function(){for(var r,e,o,s=arguments.length,a=Array(s),c=0;c<s;c++)a[c]=arguments[c];var d=function(i){var l=a[0];return e=(r=function(r){var e,o,i,l,s,a,c,d,u,p,f;return{cache:function(r){if(r<1)return{get:function(){},set:function(){}};var e=0,o=new Map,t=new Map;function n(n,i){o.set(n,i),++e>r&&(e=0,t=o,o=new Map)}return{get:function(r){var e=o.get(r);return void 0!==e?e:void 0!==(e=t.get(r))?(n(r,e),e):void 0},set:function(r,e){o.has(r)?o.set(r,e):n(r,e)}}}(r.cacheSize),splitModifiers:(o=1===(e=r.separator||":").length,i=e[0],l=e.length,function(r){for(var t,n=[],s=0,a=0,c=0;c<r.length;c++){var d=r[c];if(0===s){if(d===i&&(o||r.slice(c,c+l)===e)){n.push(r.slice(a,c)),a=c+l;continue}if("/"===d){t=c;continue}}"["===d?s++:"]"===d&&s--}var u=0===n.length?r:r.substring(a),p=u.startsWith("!"),f=p?u.substring(1):u;return{modifiers:n,hasImportantModifier:p,baseClassName:f,maybePostfixModifierPosition:t&&t>a?t-a:void 0}}),...(d=r.theme,u=r.prefix,p={nextPart:new Map,validators:[]},(f=Object.entries(r.classGroups),u?f.map(function(r){return[r[0],r[1].map(function(r){return"string"==typeof r?u+r:"object"==typeof r?Object.fromEntries(Object.entries(r).map(function(r){return[u+r[0],r[1]]})):r})]}):f).forEach(function(r){var e=r[0];(function r(e,o,t,i){e.forEach(function(e){if("string"==typeof e){(""===e?o:n(o,e)).classGroupId=t;return}if("function"==typeof e){if(e.isThemeGetter){r(e(i),o,t,i);return}o.validators.push({validator:e,classGroupId:t});return}Object.entries(e).forEach(function(e){var l=e[0];r(e[1],n(o,l),t,i)})})})(r[1],p,e,d)}),s=r.conflictingClassGroups,c=void 0===(a=r.conflictingClassGroupModifiers)?{}:a,{getClassGroupId:function(r){var e=r.split("-");return""===e[0]&&1!==e.length&&e.shift(),function r(e,o){if(0===e.length)return o.classGroupId;var t=e[0],n=o.nextPart.get(t),i=n?r(e.slice(1),n):void 0;if(i)return i;if(0!==o.validators.length){var l=e.join("-");return o.validators.find(function(r){return(0,r.validator)(l)})?.classGroupId}}(e,p)||function(r){if(t.test(r)){var e=t.exec(r)[1],o=e?.substring(0,e.indexOf(":"));if(o)return"arbitrary.."+o}}(r)},getConflictingClassGroupIds:function(r,e){var o=s[r]||[];return e&&c[r]?[].concat(o,c[r]):o}})}}(a.slice(1).reduce(function(r,e){return e(r)},l()))).cache.get,o=r.cache.set,d=u,u(i)};function u(t){var n,l,s,a,c,d=e(t);if(d)return d;var u=(l=(n=r).splitModifiers,s=n.getClassGroupId,a=n.getConflictingClassGroupIds,c=new Set,t.trim().split(i).map(function(r){var e=l(r),o=e.modifiers,t=e.hasImportantModifier,n=e.baseClassName,i=e.maybePostfixModifierPosition,a=s(i?n.substring(0,i):n),c=!!i;if(!a){if(!i||!(a=s(n)))return{isTailwindClass:!1,originalClassName:r};c=!1}var d=(function(r){if(r.length<=1)return r;var e=[],o=[];return r.forEach(function(r){"["===r[0]?(e.push.apply(e,o.sort().concat([r])),o=[]):o.push(r)}),e.push.apply(e,o.sort()),e})(o).join(":");return{isTailwindClass:!0,modifierId:t?d+"!":d,classGroupId:a,originalClassName:r,hasPostfixModifier:c}}).reverse().filter(function(r){if(!r.isTailwindClass)return!0;var e=r.modifierId,o=r.classGroupId,t=r.hasPostfixModifier,n=e+o;return!c.has(n)&&(c.add(n),a(o,t).forEach(function(r){return c.add(e+r)}),!0)}).reverse().map(function(r){return r.originalClassName}).join(" "));return o(t,u),u}return function(){return d(l.apply(null,arguments))}}(function(){var r=s("colors"),e=s("spacing"),o=s("blur"),t=s("brightness"),n=s("borderColor"),i=s("borderRadius"),l=s("borderSpacing"),a=s("borderWidth"),c=s("contrast"),d=s("grayscale"),u=s("hueRotate"),p=s("invert"),f=s("gap"),N=s("gradientColorStops"),I=s("gradientColorStopPositions"),M=s("inset"),P=s("margin"),S=s("opacity"),E=s("padding"),O=s("saturate"),A=s("scale"),W=s("sepia"),T=s("skew"),_=s("space"),R=s("translate"),$=function(){return["auto","contain","none"]},q=function(){return["auto","hidden","clip","visible","scroll"]},B=function(){return["auto",e]},V=function(){return["",b]},D=function(){return["auto",x,z]},F=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},H=function(){return["solid","dashed","dotted","double","none"]},J=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},K=function(){return["start","end","center","between","around","evenly","stretch"]},L=function(){return["","0",z]},Q=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},U=function(){return[x,y]},X=function(){return[x,z]};return{cacheSize:500,theme:{colors:[C],spacing:[b],blur:["none","",j,m],brightness:U(),borderColor:[r],borderRadius:["none","","full",j,m],borderSpacing:[e],borderWidth:V(),contrast:U(),grayscale:L(),hueRotate:X(),invert:L(),gap:[e],gradientColorStops:[r],gradientColorStopPositions:[w,m],inset:B(),margin:B(),opacity:U(),padding:[e],saturate:U(),scale:U(),sepia:L(),skew:X(),space:[e],translate:[e]},classGroups:{aspect:[{aspect:["auto","square","video",z]}],container:["container"],columns:[{columns:[j]}],"break-after":[{"break-after":Q()}],"break-before":[{"break-before":Q()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(F(),[z])}],overflow:[{overflow:q()}],"overflow-x":[{"overflow-x":q()}],"overflow-y":[{"overflow-y":q()}],overscroll:[{overscroll:$()}],"overscroll-x":[{"overscroll-x":$()}],"overscroll-y":[{"overscroll-y":$()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[M]}],"inset-x":[{"inset-x":[M]}],"inset-y":[{"inset-y":[M]}],start:[{start:[M]}],end:[{end:[M]}],top:[{top:[M]}],right:[{right:[M]}],bottom:[{bottom:[M]}],left:[{left:[M]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",k]}],basis:[{basis:[e]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",z]}],grow:[{grow:L()}],shrink:[{shrink:L()}],order:[{order:["first","last","none",k]}],"grid-cols":[{"grid-cols":[C]}],"col-start-end":[{col:["auto",{span:[k]},z]}],"col-start":[{"col-start":D()}],"col-end":[{"col-end":D()}],"grid-rows":[{"grid-rows":[C]}],"row-start-end":[{row:["auto",{span:[k]},z]}],"row-start":[{"row-start":D()}],"row-end":[{"row-end":D()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",z]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",z]}],gap:[{gap:[f]}],"gap-x":[{"gap-x":[f]}],"gap-y":[{"gap-y":[f]}],"justify-content":[{justify:["normal"].concat(K())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(K(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(K(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[E]}],px:[{px:[E]}],py:[{py:[E]}],ps:[{ps:[E]}],pe:[{pe:[E]}],pt:[{pt:[E]}],pr:[{pr:[E]}],pb:[{pb:[E]}],pl:[{pl:[E]}],m:[{m:[P]}],mx:[{mx:[P]}],my:[{my:[P]}],ms:[{ms:[P]}],me:[{me:[P]}],mt:[{mt:[P]}],mr:[{mr:[P]}],mb:[{mb:[P]}],ml:[{ml:[P]}],"space-x":[{"space-x":[_]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[_]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",e]}],"min-w":[{"min-w":["min","max","fit",b]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[j]},j,m]}],h:[{h:[e,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",b]}],"max-h":[{"max-h":[e,"min","max","fit"]}],"font-size":[{text:["base",j,m]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",y]}],"font-family":[{font:[C]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",m]}],"line-clamp":[{"line-clamp":["none",x,y]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",b]}],"list-image":[{"list-image":["none",z]}],"list-style-type":[{list:["none","disc","decimal",z]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[r]}],"placeholder-opacity":[{"placeholder-opacity":[S]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[r]}],"text-opacity":[{"text-opacity":[S]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(H(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",b]}],"underline-offset":[{"underline-offset":["auto",b]}],"text-decoration-color":[{decoration:[r]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:[e]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",m]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",z]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[S]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(F(),[v])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",g]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},h]}],"bg-color":[{bg:[r]}],"gradient-from-pos":[{from:[I]}],"gradient-via-pos":[{via:[I]}],"gradient-to-pos":[{to:[I]}],"gradient-from":[{from:[N]}],"gradient-via":[{via:[N]}],"gradient-to":[{to:[N]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[S]}],"border-style":[{border:[].concat(H(),["hidden"])}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[S]}],"divide-style":[{divide:H()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:[""].concat(H())}],"outline-offset":[{"outline-offset":[b]}],"outline-w":[{outline:[b]}],"outline-color":[{outline:[r]}],"ring-w":[{ring:V()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[r]}],"ring-opacity":[{"ring-opacity":[S]}],"ring-offset-w":[{"ring-offset":[b]}],"ring-offset-color":[{"ring-offset":[r]}],shadow:[{shadow:["","inner","none",j,G]}],"shadow-color":[{shadow:[C]}],opacity:[{opacity:[S]}],"mix-blend":[{"mix-blend":J()}],"bg-blend":[{"bg-blend":J()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[t]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",j,z]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[p]}],saturate:[{saturate:[O]}],sepia:[{sepia:[W]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[t]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[S]}],"backdrop-saturate":[{"backdrop-saturate":[O]}],"backdrop-sepia":[{"backdrop-sepia":[W]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",z]}],duration:[{duration:X()}],ease:[{ease:["linear","in","out","in-out",z]}],delay:[{delay:X()}],animate:[{animate:["none","spin","ping","pulse","bounce",z]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[A]}],"scale-x":[{"scale-x":[A]}],"scale-y":[{"scale-y":[A]}],rotate:[{rotate:[k,z]}],"translate-x":[{"translate-x":[R]}],"translate-y":[{"translate-y":[R]}],"skew-x":[{"skew-x":[T]}],"skew-y":[{"skew-y":[T]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",z]}],accent:[{accent:["auto",r]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",z]}],"caret-color":[{caret:[r]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":[e]}],"scroll-mx":[{"scroll-mx":[e]}],"scroll-my":[{"scroll-my":[e]}],"scroll-ms":[{"scroll-ms":[e]}],"scroll-me":[{"scroll-me":[e]}],"scroll-mt":[{"scroll-mt":[e]}],"scroll-mr":[{"scroll-mr":[e]}],"scroll-mb":[{"scroll-mb":[e]}],"scroll-ml":[{"scroll-ml":[e]}],"scroll-p":[{"scroll-p":[e]}],"scroll-px":[{"scroll-px":[e]}],"scroll-py":[{"scroll-py":[e]}],"scroll-ps":[{"scroll-ps":[e]}],"scroll-pe":[{"scroll-pe":[e]}],"scroll-pt":[{"scroll-pt":[e]}],"scroll-pr":[{"scroll-pr":[e]}],"scroll-pb":[{"scroll-pb":[e]}],"scroll-pl":[{"scroll-pl":[e]}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",z]}],fill:[{fill:[r,"none"]}],"stroke-w":[{stroke:[b,y]}],stroke:[{stroke:[r,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}})}}]);