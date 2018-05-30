/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window);
 // ----------------------------------------------------------------------------
 // Buzz, a Javascript HTML5 Audio library
 // v1.2.0 - Built 2016-05-22 15:16
 // Licensed under the MIT license.
 // http://buzz.jaysalvat.com/
 // ----------------------------------------------------------------------------
 // Copyright (C) 2010-2016 Jay Salvat
 // http://jaysalvat.com/
 // ----------------------------------------------------------------------------

(function(context, factory) {
    "use strict";
    if (typeof module !== "undefined" && module.exports) {
        module.exports = factory();
    } else if (typeof define === "function" && define.amd) {
        define([], factory);
    } else {
        context.buzz = factory();
    }
})(this, function() {
    "use strict";
    var AudioContext = window.AudioContext || window.webkitAudioContext;
    var buzz = {
        defaults: {
            autoplay: false,
            crossOrigin: null,
            duration: 5e3,
            formats: [],
            loop: false,
            placeholder: "--",
            preload: "metadata",
            volume: 80,
            webAudioApi: false,
            document: window.document
        },
        types: {
            mp3: "audio/mpeg",
            ogg: "audio/ogg",
            wav: "audio/wav",
            aac: "audio/aac",
            m4a: "audio/x-m4a"
        },
        sounds: [],
        el: document.createElement("audio"),
        getAudioContext: function() {
            if (this.audioCtx === undefined) {
                try {
                    this.audioCtx = AudioContext ? new AudioContext() : null;
                } catch (e) {
                    this.audioCtx = null;
                }
            }
            return this.audioCtx;
        },
        sound: function(src, options) {
            options = options || {};
            var doc = options.document || buzz.defaults.document;
            var pid = 0, events = [], eventsOnce = {}, supported = buzz.isSupported();
            this.load = function() {
                if (!supported) {
                    return this;
                }
                this.sound.load();
                return this;
            };
            this.play = function() {
                if (!supported) {
                    return this;
                }
                this.sound.play();
                return this;
            };
            this.togglePlay = function() {
                if (!supported) {
                    return this;
                }
                if (this.sound.paused) {
                    this.sound.play();
                } else {
                    this.sound.pause();
                }
                return this;
            };
            this.pause = function() {
                if (!supported) {
                    return this;
                }
                this.sound.pause();
                return this;
            };
            this.isPaused = function() {
                if (!supported) {
                    return null;
                }
                return this.sound.paused;
            };
            this.stop = function() {
                if (!supported) {
                    return this;
                }
                this.setTime(0);
                this.sound.pause();
                return this;
            };
            this.isEnded = function() {
                if (!supported) {
                    return null;
                }
                return this.sound.ended;
            };
            this.loop = function() {
                if (!supported) {
                    return this;
                }
                this.sound.loop = "loop";
                this.bind("ended.buzzloop", function() {
                    this.currentTime = 0;
                    this.play();
                });
                return this;
            };
            this.unloop = function() {
                if (!supported) {
                    return this;
                }
                this.sound.removeAttribute("loop");
                this.unbind("ended.buzzloop");
                return this;
            };
            this.mute = function() {
                if (!supported) {
                    return this;
                }
                this.sound.muted = true;
                return this;
            };
            this.unmute = function() {
                if (!supported) {
                    return this;
                }
                this.sound.muted = false;
                return this;
            };
            this.toggleMute = function() {
                if (!supported) {
                    return this;
                }
                this.sound.muted = !this.sound.muted;
                return this;
            };
            this.isMuted = function() {
                if (!supported) {
                    return null;
                }
                return this.sound.muted;
            };
            this.setVolume = function(volume) {
                if (!supported) {
                    return this;
                }
                if (volume < 0) {
                    volume = 0;
                }
                if (volume > 100) {
                    volume = 100;
                }
                this.volume = volume;
                this.sound.volume = volume / 100;
                return this;
            };
            this.getVolume = function() {
                if (!supported) {
                    return this;
                }
                return this.volume;
            };
            this.increaseVolume = function(value) {
                return this.setVolume(this.volume + (value || 1));
            };
            this.decreaseVolume = function(value) {
                return this.setVolume(this.volume - (value || 1));
            };
            this.setTime = function(time) {
                if (!supported) {
                    return this;
                }
                var set = true;
                this.whenReady(function() {
                    if (set === true) {
                        set = false;
                        this.sound.currentTime = time;
                    }
                });
                return this;
            };
            this.getTime = function() {
                if (!supported) {
                    return null;
                }
                var time = Math.round(this.sound.currentTime * 100) / 100;
                return isNaN(time) ? buzz.defaults.placeholder : time;
            };
            this.setPercent = function(percent) {
                if (!supported) {
                    return this;
                }
                return this.setTime(buzz.fromPercent(percent, this.sound.duration));
            };
            this.getPercent = function() {
                if (!supported) {
                    return null;
                }
                var percent = Math.round(buzz.toPercent(this.sound.currentTime, this.sound.duration));
                return isNaN(percent) ? buzz.defaults.placeholder : percent;
            };
            this.setSpeed = function(duration) {
                if (!supported) {
                    return this;
                }
                this.sound.playbackRate = duration;
                return this;
            };
            this.getSpeed = function() {
                if (!supported) {
                    return null;
                }
                return this.sound.playbackRate;
            };
            this.getDuration = function() {
                if (!supported) {
                    return null;
                }
                var duration = Math.round(this.sound.duration * 100) / 100;
                return isNaN(duration) ? buzz.defaults.placeholder : duration;
            };
            this.getPlayed = function() {
                if (!supported) {
                    return null;
                }
                return timerangeToArray(this.sound.played);
            };
            this.getBuffered = function() {
                if (!supported) {
                    return null;
                }
                return timerangeToArray(this.sound.buffered);
            };
            this.getSeekable = function() {
                if (!supported) {
                    return null;
                }
                return timerangeToArray(this.sound.seekable);
            };
            this.getErrorCode = function() {
                if (supported && this.sound.error) {
                    return this.sound.error.code;
                }
                return 0;
            };
            this.getErrorMessage = function() {
                if (!supported) {
                    return null;
                }
                switch (this.getErrorCode()) {
                  case 1:
                    return "MEDIA_ERR_ABORTED";

                  case 2:
                    return "MEDIA_ERR_NETWORK";

                  case 3:
                    return "MEDIA_ERR_DECODE";

                  case 4:
                    return "MEDIA_ERR_SRC_NOT_SUPPORTED";

                  default:
                    return null;
                }
            };
            this.getStateCode = function() {
                if (!supported) {
                    return null;
                }
                return this.sound.readyState;
            };
            this.getStateMessage = function() {
                if (!supported) {
                    return null;
                }
                switch (this.getStateCode()) {
                  case 0:
                    return "HAVE_NOTHING";

                  case 1:
                    return "HAVE_METADATA";

                  case 2:
                    return "HAVE_CURRENT_DATA";

                  case 3:
                    return "HAVE_FUTURE_DATA";

                  case 4:
                    return "HAVE_ENOUGH_DATA";

                  default:
                    return null;
                }
            };
            this.getNetworkStateCode = function() {
                if (!supported) {
                    return null;
                }
                return this.sound.networkState;
            };
            this.getNetworkStateMessage = function() {
                if (!supported) {
                    return null;
                }
                switch (this.getNetworkStateCode()) {
                  case 0:
                    return "NETWORK_EMPTY";

                  case 1:
                    return "NETWORK_IDLE";

                  case 2:
                    return "NETWORK_LOADING";

                  case 3:
                    return "NETWORK_NO_SOURCE";

                  default:
                    return null;
                }
            };
            this.set = function(key, value) {
                if (!supported) {
                    return this;
                }
                this.sound[key] = value;
                return this;
            };
            this.get = function(key) {
                if (!supported) {
                    return null;
                }
                return key ? this.sound[key] : this.sound;
            };
            this.bind = function(types, func) {
                if (!supported) {
                    return this;
                }
                types = types.split(" ");
                var self = this, efunc = function(e) {
                    func.call(self, e);
                };
                for (var t = 0; t < types.length; t++) {
                    var type = types[t], idx = type;
                    type = idx.split(".")[0];
                    events.push({
                        idx: idx,
                        func: efunc
                    });
                    this.sound.addEventListener(type, efunc, true);
                }
                return this;
            };
            this.unbind = function(types) {
                if (!supported) {
                    return this;
                }
                types = types.split(" ");
                for (var t = 0; t < types.length; t++) {
                    var idx = types[t], type = idx.split(".")[0];
                    for (var i = 0; i < events.length; i++) {
                        var namespace = events[i].idx.split(".");
                        if (events[i].idx === idx || namespace[1] && namespace[1] === idx.replace(".", "")) {
                            this.sound.removeEventListener(type, events[i].func, true);
                            events.splice(i, 1);
                        }
                    }
                }
                return this;
            };
            this.bindOnce = function(type, func) {
                if (!supported) {
                    return this;
                }
                var self = this;
                eventsOnce[pid++] = false;
                this.bind(type + "." + pid, function() {
                    if (!eventsOnce[pid]) {
                        eventsOnce[pid] = true;
                        func.call(self);
                    }
                    self.unbind(type + "." + pid);
                });
                return this;
            };
            this.trigger = function(types, detail) {
                if (!supported) {
                    return this;
                }
                types = types.split(" ");
                for (var t = 0; t < types.length; t++) {
                    var idx = types[t];
                    for (var i = 0; i < events.length; i++) {
                        var eventType = events[i].idx.split(".");
                        if (events[i].idx === idx || eventType[0] && eventType[0] === idx.replace(".", "")) {
                            var evt = doc.createEvent("HTMLEvents");
                            evt.initEvent(eventType[0], false, true);
                            evt.originalEvent = detail;
                            this.sound.dispatchEvent(evt);
                        }
                    }
                }
                return this;
            };
            this.fadeTo = function(to, duration, callback) {
                if (!supported) {
                    return this;
                }
                if (duration instanceof Function) {
                    callback = duration;
                    duration = buzz.defaults.duration;
                } else {
                    duration = duration || buzz.defaults.duration;
                }
                var from = this.volume, delay = duration / Math.abs(from - to), self = this, fadeToTimeout;
                this.play();
                function doFade() {
                    clearTimeout(fadeToTimeout);
                    fadeToTimeout = setTimeout(function() {
                        if (from < to && self.volume < to) {
                            self.setVolume(self.volume += 1);
                            doFade();
                        } else if (from > to && self.volume > to) {
                            self.setVolume(self.volume -= 1);
                            doFade();
                        } else if (callback instanceof Function) {
                            callback.apply(self);
                        }
                    }, delay);
                }
                this.whenReady(function() {
                    doFade();
                });
                return this;
            };
            this.fadeIn = function(duration, callback) {
                if (!supported) {
                    return this;
                }
                return this.setVolume(0).fadeTo(100, duration, callback);
            };
            this.fadeOut = function(duration, callback) {
                if (!supported) {
                    return this;
                }
                return this.fadeTo(0, duration, callback);
            };
            this.fadeWith = function(sound, duration) {
                if (!supported) {
                    return this;
                }
                this.fadeOut(duration, function() {
                    this.stop();
                });
                sound.play().fadeIn(duration);
                return this;
            };
            this.whenReady = function(func) {
                if (!supported) {
                    return null;
                }
                var self = this;
                if (this.sound.readyState === 0) {
                    this.bind("canplay.buzzwhenready", function() {
                        func.call(self);
                    });
                } else {
                    func.call(self);
                }
            };
            this.addSource = function(src) {
                var self = this, source = doc.createElement("source");
                source.src = src;
                if (buzz.types[getExt(src)]) {
                    source.type = buzz.types[getExt(src)];
                }
                this.sound.appendChild(source);
                source.addEventListener("error", function(e) {
                    self.trigger("sourceerror", e);
                });
                return source;
            };
            function timerangeToArray(timeRange) {
                var array = [], length = timeRange.length - 1;
                for (var i = 0; i <= length; i++) {
                    array.push({
                        start: timeRange.start(i),
                        end: timeRange.end(i)
                    });
                }
                return array;
            }
            function getExt(filename) {
                return filename.split(".").pop();
            }
            if (supported && src) {
                for (var i in buzz.defaults) {
                    if (buzz.defaults.hasOwnProperty(i)) {
                        if (options[i] === undefined) {
                            options[i] = buzz.defaults[i];
                        }
                    }
                }
                this.sound = doc.createElement("audio");
                if (options.crossOrigin !== null) {
                    this.sound.crossOrigin = options.crossOrigin;
                }
                if (options.webAudioApi) {
                    var audioCtx = buzz.getAudioContext();
                    if (audioCtx) {
                        this.source = audioCtx.createMediaElementSource(this.sound);
                        this.source.connect(audioCtx.destination);
                    }
                }
                if (src instanceof Array) {
                    for (var j in src) {
                        if (src.hasOwnProperty(j)) {
                            this.addSource(src[j]);
                        }
                    }
                } else if (options.formats.length) {
                    for (var k in options.formats) {
                        if (options.formats.hasOwnProperty(k)) {
                            this.addSource(src + "." + options.formats[k]);
                        }
                    }
                } else {
                    this.addSource(src);
                }
                if (options.loop) {
                    this.loop();
                }
                if (options.autoplay) {
                    this.sound.autoplay = "autoplay";
                }
                if (options.preload === true) {
                    this.sound.preload = "auto";
                } else if (options.preload === false) {
                    this.sound.preload = "none";
                } else {
                    this.sound.preload = options.preload;
                }
                this.setVolume(options.volume);
                buzz.sounds.push(this);
            }
        },
        group: function(sounds) {
            sounds = argsToArray(sounds, arguments);
            this.getSounds = function() {
                return sounds;
            };
            this.add = function(soundArray) {
                soundArray = argsToArray(soundArray, arguments);
                for (var a = 0; a < soundArray.length; a++) {
                    sounds.push(soundArray[a]);
                }
            };
            this.remove = function(soundArray) {
                soundArray = argsToArray(soundArray, arguments);
                for (var a = 0; a < soundArray.length; a++) {
                    for (var i = 0; i < sounds.length; i++) {
                        if (sounds[i] === soundArray[a]) {
                            sounds.splice(i, 1);
                            break;
                        }
                    }
                }
            };
            this.load = function() {
                fn("load");
                return this;
            };
            this.play = function() {
                fn("play");
                return this;
            };
            this.togglePlay = function() {
                fn("togglePlay");
                return this;
            };
            this.pause = function(time) {
                fn("pause", time);
                return this;
            };
            this.stop = function() {
                fn("stop");
                return this;
            };
            this.mute = function() {
                fn("mute");
                return this;
            };
            this.unmute = function() {
                fn("unmute");
                return this;
            };
            this.toggleMute = function() {
                fn("toggleMute");
                return this;
            };
            this.setVolume = function(volume) {
                fn("setVolume", volume);
                return this;
            };
            this.increaseVolume = function(value) {
                fn("increaseVolume", value);
                return this;
            };
            this.decreaseVolume = function(value) {
                fn("decreaseVolume", value);
                return this;
            };
            this.loop = function() {
                fn("loop");
                return this;
            };
            this.unloop = function() {
                fn("unloop");
                return this;
            };
            this.setSpeed = function(speed) {
                fn("setSpeed", speed);
                return this;
            };
            this.setTime = function(time) {
                fn("setTime", time);
                return this;
            };
            this.set = function(key, value) {
                fn("set", key, value);
                return this;
            };
            this.bind = function(type, func) {
                fn("bind", type, func);
                return this;
            };
            this.unbind = function(type) {
                fn("unbind", type);
                return this;
            };
            this.bindOnce = function(type, func) {
                fn("bindOnce", type, func);
                return this;
            };
            this.trigger = function(type) {
                fn("trigger", type);
                return this;
            };
            this.fade = function(from, to, duration, callback) {
                fn("fade", from, to, duration, callback);
                return this;
            };
            this.fadeIn = function(duration, callback) {
                fn("fadeIn", duration, callback);
                return this;
            };
            this.fadeOut = function(duration, callback) {
                fn("fadeOut", duration, callback);
                return this;
            };
            function fn() {
                var args = argsToArray(null, arguments), func = args.shift();
                for (var i = 0; i < sounds.length; i++) {
                    sounds[i][func].apply(sounds[i], args);
                }
            }
            function argsToArray(array, args) {
                return array instanceof Array ? array : Array.prototype.slice.call(args);
            }
        },
        all: function() {
            return new buzz.group(buzz.sounds);
        },
        isSupported: function() {
            return !!buzz.el.canPlayType;
        },
        isOGGSupported: function() {
            return !!buzz.el.canPlayType && buzz.el.canPlayType('audio/ogg; codecs="vorbis"');
        },
        isWAVSupported: function() {
            return !!buzz.el.canPlayType && buzz.el.canPlayType('audio/wav; codecs="1"');
        },
        isMP3Supported: function() {
            return !!buzz.el.canPlayType && buzz.el.canPlayType("audio/mpeg;");
        },
        isAACSupported: function() {
            return !!buzz.el.canPlayType && (buzz.el.canPlayType("audio/x-m4a;") || buzz.el.canPlayType("audio/aac;"));
        },
        toTimer: function(time, withHours) {
            var h, m, s;
            h = Math.floor(time / 3600);
            h = isNaN(h) ? "--" : h >= 10 ? h : "0" + h;
            m = withHours ? Math.floor(time / 60 % 60) : Math.floor(time / 60);
            m = isNaN(m) ? "--" : m >= 10 ? m : "0" + m;
            s = Math.floor(time % 60);
            s = isNaN(s) ? "--" : s >= 10 ? s : "0" + s;
            return withHours ? h + ":" + m + ":" + s : m + ":" + s;
        },
        fromTimer: function(time) {
            var splits = time.toString().split(":");
            if (splits && splits.length === 3) {
                time = parseInt(splits[0], 10) * 3600 + parseInt(splits[1], 10) * 60 + parseInt(splits[2], 10);
            }
            if (splits && splits.length === 2) {
                time = parseInt(splits[0], 10) * 60 + parseInt(splits[1], 10);
            }
            return time;
        },
        toPercent: function(value, total, decimal) {
            var r = Math.pow(10, decimal || 0);
            return Math.round(value * 100 / total * r) / r;
        },
        fromPercent: function(percent, total, decimal) {
            var r = Math.pow(10, decimal || 0);
            return Math.round(total / 100 * percent * r) / r;
        }
    };
    return buzz;
});
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));
/*
 * ******************************************************************************
 *  jquery.mb.components
 *  file: jquery.mb.browser.js
 *
 *  Copyright (c) 2001-2014. Matteo Bicocchi (Pupunzi);
 *  Open lab srl, Firenze - Italy
 *  email: matteo@open-lab.com
 *  site: 	http://pupunzi.com
 *  blog:	http://pupunzi.open-lab.com
 * 	http://open-lab.com
 *
 *  Licences: MIT, GPL
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 *
 *  last modified: 27/01/14 19.58
 *  *****************************************************************************
 */

/*******************************************************************************
 *
 * jquery.mb.browser
 * Author: pupunzi
 * Creation date: 16/01/13
 *
 ******************************************************************************/
/*Browser detection patch*/

if(!jQuery.browser){

	jQuery.browser = {};
	jQuery.browser.mozilla = false;
	jQuery.browser.webkit = false;
	jQuery.browser.opera = false;
	jQuery.browser.safari = false;
	jQuery.browser.chrome = false;
	jQuery.browser.msie = false;
	jQuery.browser.android = false;
	jQuery.browser.blackberry = false;
	jQuery.browser.ios = false;
	jQuery.browser.operaMobile = false;
	jQuery.browser.windowsMobile = false;
	jQuery.browser.mobile = false;

	var nAgt = navigator.userAgent;
	jQuery.browser.ua = nAgt;

	jQuery.browser.name  = navigator.appName;
	jQuery.browser.fullVersion  = ''+parseFloat(navigator.appVersion);
	jQuery.browser.majorVersion = parseInt(navigator.appVersion,10);
	var nameOffset,verOffset,ix;

// In Opera, the true version is after "Opera" or after "Version"
	if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
		jQuery.browser.opera = true;
		jQuery.browser.name = "Opera";
		jQuery.browser.fullVersion = nAgt.substring(verOffset+6);
		if ((verOffset=nAgt.indexOf("Version"))!=-1)
			jQuery.browser.fullVersion = nAgt.substring(verOffset+8);
	}

// In MSIE < 11, the true version is after "MSIE" in userAgent
	else if ( (verOffset=nAgt.indexOf("MSIE"))!=-1) {
		jQuery.browser.msie = true;
		jQuery.browser.name = "Microsoft Internet Explorer";
		jQuery.browser.fullVersion = nAgt.substring(verOffset+5);
	}

// In TRIDENT (IE11) => 11, the true version is after "rv:" in userAgent
	else if (nAgt.indexOf("Trident")!=-1 ) {
		jQuery.browser.msie = true;
		jQuery.browser.name = "Microsoft Internet Explorer";
		var start = nAgt.indexOf("rv:")+3;
		var end = start+4;
		jQuery.browser.fullVersion = nAgt.substring(start,end);
	}

// In Chrome, the true version is after "Chrome"
	else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
		jQuery.browser.webkit = true;
		jQuery.browser.chrome = true;
		jQuery.browser.name = "Chrome";
		jQuery.browser.fullVersion = nAgt.substring(verOffset+7);
	}
// In Safari, the true version is after "Safari" or after "Version"
	else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
		jQuery.browser.webkit = true;
		jQuery.browser.safari = true;
		jQuery.browser.name = "Safari";
		jQuery.browser.fullVersion = nAgt.substring(verOffset+7);
		if ((verOffset=nAgt.indexOf("Version"))!=-1)
			jQuery.browser.fullVersion = nAgt.substring(verOffset+8);
	}
// In Safari, the true version is after "Safari" or after "Version"
	else if ((verOffset=nAgt.indexOf("AppleWebkit"))!=-1) {
		jQuery.browser.webkit = true;
		jQuery.browser.name = "Safari";
		jQuery.browser.fullVersion = nAgt.substring(verOffset+7);
		if ((verOffset=nAgt.indexOf("Version"))!=-1)
			jQuery.browser.fullVersion = nAgt.substring(verOffset+8);
	}
// In Firefox, the true version is after "Firefox"
	else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
		jQuery.browser.mozilla = true;
		jQuery.browser.name = "Firefox";
		jQuery.browser.fullVersion = nAgt.substring(verOffset+8);
	}
// In most other browsers, "name/version" is at the end of userAgent
	else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) < (verOffset=nAgt.lastIndexOf('/')) ){
		jQuery.browser.name = nAgt.substring(nameOffset,verOffset);
		jQuery.browser.fullVersion = nAgt.substring(verOffset+1);
		if (jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()) {
			jQuery.browser.name = navigator.appName;
		}
	}

	/*Check all mobile environments*/
	jQuery.browser.android = (/Android/i).test(nAgt);
	jQuery.browser.blackberry = (/BlackBerry/i).test(nAgt);
	jQuery.browser.ios = (/iPhone|iPad|iPod/i).test(nAgt);
	jQuery.browser.operaMobile = (/Opera Mini/i).test(nAgt);
	jQuery.browser.windowsMobile = (/IEMobile/i).test(nAgt);
	jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile;


// trim the fullVersion string at semicolon/space if present
	if ((ix=jQuery.browser.fullVersion.indexOf(";"))!=-1)
		jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix);
	if ((ix=jQuery.browser.fullVersion.indexOf(" "))!=-1)
		jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix);

	jQuery.browser.majorVersion = parseInt(''+jQuery.browser.fullVersion,10);
	if (isNaN(jQuery.browser.majorVersion)) {
		jQuery.browser.fullVersion  = ''+parseFloat(navigator.appVersion);
		jQuery.browser.majorVersion = parseInt(navigator.appVersion,10);
	}
	jQuery.browser.version = jQuery.browser.majorVersion;
}
!(function ($, window, document, navigator) {
    "use strict";

    /**
     * Vide settings
     * @private
     */
    var pluginName = "vide",
        defaults = {
            volume: 1,
            playbackRate: 1,
            muted: true,
            loop: true,
            autoplay: true,
            position: "50% 50%",
            posterType: "detect",
            resizing: true
        },

    // is iOs?
        isIOS = /iPad|iPhone|iPod/i.test(navigator.userAgent),

    // is Android?
        isAndroid = /Android/i.test(navigator.userAgent);

    /**
     * Parse string with options
     * @param {String} str
     * @returns {Object|String}
     * @private
     */
    function parseOptions(str) {
        var obj = {},
            delimiterIndex,
            option,
            prop, val,
            arr, len,
            i;

        // remove spaces around delimiters and split
        arr = str.replace(/\s*:\s*/g, ":").replace(/\s*,\s*/g, ",").split(",");

        // parse string
        for (i = 0, len = arr.length; i < len; i++) {
            option = arr[i];

            // Ignore urls and string without colon delimiters
            if (option.search(/^(http|https|ftp):\/\//) !== -1 ||
                option.search(":") === -1) {
                break;
            }

            delimiterIndex = option.indexOf(":");
            prop = option.substring(0, delimiterIndex);
            val = option.substring(delimiterIndex + 1);

            // if val is an empty string, make it undefined
            if (!val) {
                val = undefined;
            }

            // convert string value if it is like a boolean
            if (typeof val === "string") {
                val = val === "true" || (val === "false" ? false : val);
            }

            // convert string value if it is like a number
            if (typeof val === "string") {
                val = !isNaN(val) ? +val : val;
            }

            obj[prop] = val;
        }

        // if nothing is parsed
        if (prop == null && val == null) {
            return str;
        }

        return obj;
    }

    /**
     * Parse position option
     * @param {String} str
     * @returns {Object}
     * @private
     */
    function parsePosition(str) {
        str = "" + str;

        // default value is a center
        var args = str.split(/\s+/),
            x = "50%", y = "50%",
            len, arg,
            i;

        for (i = 0, len = args.length; i < len; i++) {
            arg = args[i];

            // convert values
            if (arg === "left") {
                x = "0%";
            } else if (arg === "right") {
                x = "100%";
            } else if (arg === "top") {
                y = "0%";
            } else if (arg === "bottom") {
                y = "100%";
            } else if (arg === "center") {
                if (i === 0) {
                    x = "50%";
                } else {
                    y = "50%";
                }
            } else {
                if (i === 0) {
                    x = arg;
                } else {
                    y = arg;
                }
            }
        }

        return {x: x, y: y};
    }

    /**
     * Search poster
     * @param {String} path
     * @param {Function} callback
     * @private
     */
    function findPoster(path, callback) {
        var onLoad = function () {
            callback(this.src);
        };

        $("<img src='http://" + Util.getMediaServer() + "/" + path + ".jpg'>").load(onLoad);
    }

    /**
     * Vide constructor
     * @param {HTMLElement} element
     * @param {Object|String} path
     * @param {Object|String} options
     * @constructor
     */
    function Vide(element, path, options) {
        this.$element = $(element);

        // parse path
        if (typeof path === "string") {
            path = parseOptions(path);
        }

        // parse options
        if (!options) {
            options = {};
        } else if (typeof options === "string") {
            options = parseOptions(options);
        }

        // remove extension
        if (typeof path === "string") {
            path = path.replace(/\.\w*$/, "");
        } else if (typeof path === "object") {
            for (var i in path) {
                if (path.hasOwnProperty(i)) {
                    path[i] = path[i].replace(/\.\w*$/, "");
                }
            }
        }

        this.settings = $.extend({}, defaults, options);
        this.path = path;

        this.init();
    }

    /**
     * Initialization
     * @public
     */
    Vide.prototype.init = function () {
        var vide = this,
            position = parsePosition(vide.settings.position),
            sources,
            poster;

        // Set video wrapper styles
        vide.$wrapper = $("<div class='video-container'>").css({
            "position": "absolute",
            "z-index": -1,
            "top": 0,
            "left": 0,
            "bottom": 0,
            "right": 0,
            "overflow": "hidden",
            "-webkit-background-size": "cover",
            "-moz-background-size": "cover",
            "-o-background-size": "cover",
            "background-size": "cover",
            "background-repeat": "no-repeat",
            "background-position": position.x + " " + position.y
        });


        // Get poster path
        poster = vide.path;
        if (typeof vide.path === "object") {
            if (vide.path.poster) {
                poster = vide.path.poster;
            } else {
                if (vide.path.mp4) {
                    poster = vide.path.mp4;
                } else if (vide.path.webm) {
                    poster = vide.path.webm;
                } else if (vide.path.ogv) {
                    poster = vide.path.ogv;
                }
            }
        }

        // Set video poster
        if (vide.settings.posterType === "detect") {
            findPoster(poster, function (url) {
                vide.$wrapper.css("background-image", "url(" + url + ")");
            });
        } else if (vide.settings.posterType !== "none") {
            vide.$wrapper
                .css("background-image", "url(http://" + Util.getMediaServer() + "/" + poster + "." + vide.settings.posterType + ")");
        }

        // if parent element has a static position, make it relative
        if (vide.$element.css("position") === "static") {
            vide.$element.css("position", "relative");
        }

        vide.$element.prepend(vide.$wrapper);

        if (!isIOS && !isAndroid) {
            sources = "";

            if (typeof vide.path === "object") {
                if (vide.path.mp4) {
                    sources += "<source src='http://" + Util.getMediaServer() + "/" + vide.path.mp4 + ".mp4' type='video/mp4'>";
                }
                if (vide.path.webm) {
                    sources += "<source src='http://" + Util.getMediaServer() + "/" + vide.path.webm + ".webm' type='video/webm'>";
                }
                if (vide.path.ogv) {
                    sources += "<source src='http://" + Util.getMediaServer() + "/" + vide.path.ogv + ".ogv' type='video/ogv'>";
                }

                vide.$video = $("<video>" + sources + "</video>");
            } else {
                vide.$video = $("<video>" +
                "<source src='http://" + Util.getMediaServer() + "/" + vide.path + ".mp4' type='video/mp4'>" +
                "<source src='http://" + Util.getMediaServer() + "/" + vide.path + ".webm' type='video/webm'>" +
                "<source src='http://" + Util.getMediaServer() + "/" + vide.path + ".ogv' type='video/ogg'>" +
                "</video>");
            }

            // Disable visibility, while loading
            vide.$video.css("visibility", "hidden");

            // Set video properties
            vide.$video.prop({
                autoplay: vide.settings.autoplay,
                loop: vide.settings.loop,
                volume: vide.settings.volume,
                muted: vide.settings.muted,
                playbackRate: vide.settings.playbackRate
            });

            // Append video
            vide.$wrapper.append(vide.$video);

            // Video alignment
            vide.$video.css({
                "margin": "auto",
                "position": "absolute",
                "z-index": -1,
                "top": position.y,
                "left": position.x,
                "-webkit-transform": "translate(-" + position.x + ", -" + position.y + ")",
                "-ms-transform": "translate(-" + position.x + ", -" + position.y + ")",
                "transform": "translate(-" + position.x + ", -" + position.y + ")"
            });

            // resize video, when it's loaded
            vide.$video.bind("loadedmetadata." + pluginName, function () {
                vide.$video.css("visibility", "visible");
                vide.resize();
                vide.$wrapper.css("background-image", "none");
            });
            vide.$video.bind("canplaythrough." + pluginName, function () {
                setTimeout(function () {
                    $(".video-fader").removeClass('faded-full');
                }, 100)

            });

            // resize event is available only for 'window',
            // use another code solutions to detect DOM elements resizing
            vide.$element.bind("resize." + pluginName, function () {
                if (vide.settings.resizing) {
                    vide.resize();
                }
            });
        } else {
            $(".video-fader").removeClass('faded-full');
        }
    };

    /**
     * Get video element of the background
     * @returns {HTMLVideoElement|null}
     * @public
     */
    Vide.prototype.getVideoObject = function () {
        return this.$video ? this.$video[0] : null;
    };

    /**
     * Resize video background
     * @public
     */
    Vide.prototype.resize = function () {
        if (!this.$video) {
            return;
        }

        var
        // get native video size
            videoHeight = this.$video[0].videoHeight,
            videoWidth = this.$video[0].videoWidth,

        // get wrapper size
            wrapperHeight = this.$wrapper.height(),
            wrapperWidth = this.$wrapper.width();

        if (wrapperWidth / videoWidth > wrapperHeight / videoHeight) {
            this.$video.css({
                "width": wrapperWidth + 2,

                // +2 pixels to prevent empty space after transformation
                "height": "auto"
            });
        } else {
            this.$video.css({
                "width": "auto",

                // +2 pixels to prevent empty space after transformation
                "height": wrapperHeight + 2
            });
        }
    };

    /**
     * Destroy video background
     * @public
     */
    Vide.prototype.destroy = function () {
        this.$element.unbind(pluginName);

        if (this.$video) {
            this.$video.unbind(pluginName);
        }

        delete $[pluginName].lookup[this.index];
        this.$element.removeData(pluginName);
        this.$wrapper.remove();
    };

    /**
     * Special plugin object for instances.
     * @type {Object}
     * @public
     */
    $[pluginName] = {
        lookup: []
    };

    /**
     * Plugin constructor
     * @param {Object|String} path
     * @param {Object|String} options
     * @returns {JQuery}
     * @constructor
     */
    $.fn[pluginName] = function (path, options) {
        var instance;

        this.each(function () {
            instance = $.data(this, pluginName);

            if (instance) {

                // destroy plugin instance if exists
                instance.destroy();
            }

            // create plugin instance
            instance = new Vide(this, path, options);
            instance.index = $[pluginName].lookup.push(instance) - 1;
            $.data(this, pluginName, instance);
        });

        return this;
    };

    $(document).ready(function () {

        // window resize event listener
        $(window).bind("resize." + pluginName, function () {
            for (var len = $[pluginName].lookup.length, i = 0, instance; i < len; i++) {
                instance = $[pluginName].lookup[i];

                if (instance && instance.settings.resizing) {
                    instance.resize();
                }
            }
        });

        // Auto initialization.
        // Add 'data-vide-bg' attribute with a path to the video without extension.
        // Also you can pass options throw the 'data-vide-options' attribute.
        // 'data-vide-options' must be like "muted: false, volume: 0.5".
        $(document).find("[data-" + pluginName + "-bg]").each(function (i, element) {
            var $element = $(element),
                options = $element.data(pluginName + "-options"),
                path = $element.data(pluginName + "-bg");

            $element[pluginName](path, options);
        });
    });
})(window.jQuery, window, document, navigator);

$(document).ready(function () {
    SettingsPanel.init();
    Data.init(current);
    Video.init();
    Photo.init();
    Music.init();
    //IntroTeasers.init();
    //if (Math.random() > 0.5) {
    //    $('.container.big.google').addClass('hidden');
    //    $('.container.big.admitad').removeClass('hidden');
    //    Admitad.init();
    //}

    //if ($('.cow').length) {
    //    var date1 = new Date('11/20/2015');
    //    var date2 = new Date();
    //    var diffDays = date2.getDate() - date1.getDate();
    //    $('.cow span').text(diffDays + ' ' + Util.pluralize(diffDays, ['Ð´ÐµÐ½ÑŒ', 'Ð´Ð½Ñ', 'Ð´Ð½ÐµÐ¹']))
    //    $('.cow').show();
    //}


    initNews();
    initTime();
    initPulseSettingsButton();
    initOtherSettings();

    if ($.browser.opera && $.browser.version <= 12 || $.browser.msie) {
        function adjustFontSize() {
            if ($(window).width() > $(window).height()) {
                $('.quotes .item').css('width', (Math.floor(99 / $('.quotes .item').length)) + "%").css('margin-bottom', '0');
                $('.quotes .item .value').css('font-size', $('.quotes .item').width() / 3.1);
                setTimeout(function () {
                    $('.quotes').css('margin-top', -$('.quotes').height() / 2);
                }, 0)
            } else {
                $('.quotes .item').css('width', (100) + "%").css('margin-bottom', '5%');
                $('.quotes .item .value').css('font-size', $('.quotes .item').width() / 5);
                setTimeout(function () {
                    $('.quotes').css('margin-top', 0);
                }, 0)
            }
        }

        adjustFontSize();
        $(window).on('resize', adjustFontSize);
    }
});

function initPulseSettingsButton() {
    setInterval(function () {
        $('.grid-button').toggleClass('hl');
    }, 4000);
}


function initTime() {
    var $time = $('.datetime .time');
    setInterval(function () {
        var dt = new Date();
        var minutes = dt.getMinutes()
        $time.text(dt.getHours() + ':' + (minutes < 10 ? "0" : "") + minutes)
    }, 1000)

}

function initOtherSettings() {
    Settings.load();
    Data.updateView();

    $('#disable-digits').prop('checked', Settings.getOther('hideData')).on('click', function () {
        Settings.setOther('hideData', $(this).is(':checked'))
        $('#disable-comments, #disable-smalldigits').prop('disabled', $(this).is(':checked'));
        Data.updateView();
    })
    $('#disable-comments').prop('checked', Settings.getOther('hideNotes')).prop('disabled', Settings.getOther('hideData')).on('click', function () {
        Settings.setOther('hideNotes', $(this).is(':checked'))
        Data.updateView();
    })
    $('#disable-smalldigits').prop('checked', Settings.getOther('hideAdditionalDigits')).prop('disabled', Settings.getOther('hideData')).on('click', function () {
        Settings.setOther('hideAdditionalDigits', $(this).is(':checked'))
        Data.updateView();
    })
    $('#disable-clock').prop('checked', Settings.getOther('hideClock')).on('click', function () {
        Settings.setOther('hideClock', $(this).is(':checked'))
        Data.updateView();
    })
}


function initNews() {
    var news = {};

    function updateNews() {
        $.getJSON('/build/js/news.js').done(function (res) {
            if (res) {
                news = res;
                // console.log(news);
            }
        })
    }

    updateNews();
    setInterval(updateNews, 120000)
}
/*
 * ******************************************************************************
 *  jquery.mb.components
 *  file: jquery.mb.browser.js
 *
 *  Copyright (c) 2001-2014. Matteo Bicocchi (Pupunzi);
 *  Open lab srl, Firenze - Italy
 *  email: matteo@open-lab.com
 *  site: 	http://pupunzi.com
 *  blog:	http://pupunzi.open-lab.com
 * 	http://open-lab.com
 *
 *  Licences: MIT, GPL
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 *
 *  last modified: 27/01/14 19.58
 *  *****************************************************************************
 */

/*******************************************************************************
 *
 * jquery.mb.browser
 * Author: pupunzi
 * Creation date: 16/01/13
 *
 ******************************************************************************/
/*Browser detection patch*/

if(!jQuery.browser){

	jQuery.browser = {};
	jQuery.browser.mozilla = false;
	jQuery.browser.webkit = false;
	jQuery.browser.opera = false;
	jQuery.browser.safari = false;
	jQuery.browser.chrome = false;
	jQuery.browser.msie = false;
	jQuery.browser.android = false;
	jQuery.browser.blackberry = false;
	jQuery.browser.ios = false;
	jQuery.browser.operaMobile = false;
	jQuery.browser.windowsMobile = false;
	jQuery.browser.mobile = false;

	var nAgt = navigator.userAgent;
	jQuery.browser.ua = nAgt;

	jQuery.browser.name  = navigator.appName;
	jQuery.browser.fullVersion  = ''+parseFloat(navigator.appVersion);
	jQuery.browser.majorVersion = parseInt(navigator.appVersion,10);
	var nameOffset,verOffset,ix;

// In Opera, the true version is after "Opera" or after "Version"
	if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
		jQuery.browser.opera = true;
		jQuery.browser.name = "Opera";
		jQuery.browser.fullVersion = nAgt.substring(verOffset+6);
		if ((verOffset=nAgt.indexOf("Version"))!=-1)
			jQuery.browser.fullVersion = nAgt.substring(verOffset+8);
	}

// In MSIE < 11, the true version is after "MSIE" in userAgent
	else if ( (verOffset=nAgt.indexOf("MSIE"))!=-1) {
		jQuery.browser.msie = true;
		jQuery.browser.name = "Microsoft Internet Explorer";
		jQuery.browser.fullVersion = nAgt.substring(verOffset+5);
	}

// In TRIDENT (IE11) => 11, the true version is after "rv:" in userAgent
	else if (nAgt.indexOf("Trident")!=-1 ) {
		jQuery.browser.msie = true;
		jQuery.browser.name = "Microsoft Internet Explorer";
		var start = nAgt.indexOf("rv:")+3;
		var end = start+4;
		jQuery.browser.fullVersion = nAgt.substring(start,end);
	}

// In Chrome, the true version is after "Chrome"
	else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
		jQuery.browser.webkit = true;
		jQuery.browser.chrome = true;
		jQuery.browser.name = "Chrome";
		jQuery.browser.fullVersion = nAgt.substring(verOffset+7);
	}
// In Safari, the true version is after "Safari" or after "Version"
	else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
		jQuery.browser.webkit = true;
		jQuery.browser.safari = true;
		jQuery.browser.name = "Safari";
		jQuery.browser.fullVersion = nAgt.substring(verOffset+7);
		if ((verOffset=nAgt.indexOf("Version"))!=-1)
			jQuery.browser.fullVersion = nAgt.substring(verOffset+8);
	}
// In Safari, the true version is after "Safari" or after "Version"
	else if ((verOffset=nAgt.indexOf("AppleWebkit"))!=-1) {
		jQuery.browser.webkit = true;
		jQuery.browser.name = "Safari";
		jQuery.browser.fullVersion = nAgt.substring(verOffset+7);
		if ((verOffset=nAgt.indexOf("Version"))!=-1)
			jQuery.browser.fullVersion = nAgt.substring(verOffset+8);
	}
// In Firefox, the true version is after "Firefox"
	else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
		jQuery.browser.mozilla = true;
		jQuery.browser.name = "Firefox";
		jQuery.browser.fullVersion = nAgt.substring(verOffset+8);
	}
// In most other browsers, "name/version" is at the end of userAgent
	else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) < (verOffset=nAgt.lastIndexOf('/')) ){
		jQuery.browser.name = nAgt.substring(nameOffset,verOffset);
		jQuery.browser.fullVersion = nAgt.substring(verOffset+1);
		if (jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()) {
			jQuery.browser.name = navigator.appName;
		}
	}

	/*Check all mobile environments*/
	jQuery.browser.android = (/Android/i).test(nAgt);
	jQuery.browser.blackberry = (/BlackBerry/i).test(nAgt);
	jQuery.browser.ios = (/iPhone|iPad|iPod/i).test(nAgt);
	jQuery.browser.operaMobile = (/Opera Mini/i).test(nAgt);
	jQuery.browser.windowsMobile = (/IEMobile/i).test(nAgt);
	jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile;


// trim the fullVersion string at semicolon/space if present
	if ((ix=jQuery.browser.fullVersion.indexOf(";"))!=-1)
		jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix);
	if ((ix=jQuery.browser.fullVersion.indexOf(" "))!=-1)
		jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix);

	jQuery.browser.majorVersion = parseInt(''+jQuery.browser.fullVersion,10);
	if (isNaN(jQuery.browser.majorVersion)) {
		jQuery.browser.fullVersion  = ''+parseFloat(navigator.appVersion);
		jQuery.browser.majorVersion = parseInt(navigator.appVersion,10);
	}
	jQuery.browser.version = jQuery.browser.majorVersion;
}
!(function ($, window, document, navigator) {
    "use strict";

    /**
     * Vide settings
     * @private
     */
    var pluginName = "vide",
        defaults = {
            volume: 1,
            playbackRate: 1,
            muted: true,
            loop: true,
            autoplay: true,
            position: "50% 50%",
            posterType: "detect",
            resizing: true
        },

    // is iOs?
        isIOS = /iPad|iPhone|iPod/i.test(navigator.userAgent),

    // is Android?
        isAndroid = /Android/i.test(navigator.userAgent);

    /**
     * Parse string with options
     * @param {String} str
     * @returns {Object|String}
     * @private
     */
    function parseOptions(str) {
        var obj = {},
            delimiterIndex,
            option,
            prop, val,
            arr, len,
            i;

        // remove spaces around delimiters and split
        arr = str.replace(/\s*:\s*/g, ":").replace(/\s*,\s*/g, ",").split(",");

        // parse string
        for (i = 0, len = arr.length; i < len; i++) {
            option = arr[i];

            // Ignore urls and string without colon delimiters
            if (option.search(/^(http|https|ftp):\/\//) !== -1 ||
                option.search(":") === -1) {
                break;
            }

            delimiterIndex = option.indexOf(":");
            prop = option.substring(0, delimiterIndex);
            val = option.substring(delimiterIndex + 1);

            // if val is an empty string, make it undefined
            if (!val) {
                val = undefined;
            }

            // convert string value if it is like a boolean
            if (typeof val === "string") {
                val = val === "true" || (val === "false" ? false : val);
            }

            // convert string value if it is like a number
            if (typeof val === "string") {
                val = !isNaN(val) ? +val : val;
            }

            obj[prop] = val;
        }

        // if nothing is parsed
        if (prop == null && val == null) {
            return str;
        }

        return obj;
    }

    /**
     * Parse position option
     * @param {String} str
     * @returns {Object}
     * @private
     */
    function parsePosition(str) {
        str = "" + str;

        // default value is a center
        var args = str.split(/\s+/),
            x = "50%", y = "50%",
            len, arg,
            i;

        for (i = 0, len = args.length; i < len; i++) {
            arg = args[i];

            // convert values
            if (arg === "left") {
                x = "0%";
            } else if (arg === "right") {
                x = "100%";
            } else if (arg === "top") {
                y = "0%";
            } else if (arg === "bottom") {
                y = "100%";
            } else if (arg === "center") {
                if (i === 0) {
                    x = "50%";
                } else {
                    y = "50%";
                }
            } else {
                if (i === 0) {
                    x = arg;
                } else {
                    y = arg;
                }
            }
        }

        return {x: x, y: y};
    }

    /**
     * Search poster
     * @param {String} path
     * @param {Function} callback
     * @private
     */
    function findPoster(path, callback) {
        var onLoad = function () {
            callback(this.src);
        };

        $("<img src='http://" + Util.getMediaServer() + "/" + path + ".jpg'>").load(onLoad);
    }

    /**
     * Vide constructor
     * @param {HTMLElement} element
     * @param {Object|String} path
     * @param {Object|String} options
     * @constructor
     */
    function Vide(element, path, options) {
        this.$element = $(element);

        // parse path
        if (typeof path === "string") {
            path = parseOptions(path);
        }

        // parse options
        if (!options) {
            options = {};
        } else if (typeof options === "string") {
            options = parseOptions(options);
        }

        // remove extension
        if (typeof path === "string") {
            path = path.replace(/\.\w*$/, "");
        } else if (typeof path === "object") {
            for (var i in path) {
                if (path.hasOwnProperty(i)) {
                    path[i] = path[i].replace(/\.\w*$/, "");
                }
            }
        }

        this.settings = $.extend({}, defaults, options);
        this.path = path;

        this.init();
    }

    /**
     * Initialization
     * @public
     */
    Vide.prototype.init = function () {
        var vide = this,
            position = parsePosition(vide.settings.position),
            sources,
            poster;

        // Set video wrapper styles
        vide.$wrapper = $("<div class='video-container'>").css({
            "position": "absolute",
            "z-index": -1,
            "top": 0,
            "left": 0,
            "bottom": 0,
            "right": 0,
            "overflow": "hidden",
            "-webkit-background-size": "cover",
            "-moz-background-size": "cover",
            "-o-background-size": "cover",
            "background-size": "cover",
            "background-repeat": "no-repeat",
            "background-position": position.x + " " + position.y
        });


        // Get poster path
        poster = vide.path;
        if (typeof vide.path === "object") {
            if (vide.path.poster) {
                poster = vide.path.poster;
            } else {
                if (vide.path.mp4) {
                    poster = vide.path.mp4;
                } else if (vide.path.webm) {
                    poster = vide.path.webm;
                } else if (vide.path.ogv) {
                    poster = vide.path.ogv;
                }
            }
        }

        // Set video poster
        if (vide.settings.posterType === "detect") {
            findPoster(poster, function (url) {
                vide.$wrapper.css("background-image", "url(" + url + ")");
            });
        } else if (vide.settings.posterType !== "none") {
            vide.$wrapper
                .css("background-image", "url(http://" + Util.getMediaServer() + "/" + poster + "." + vide.settings.posterType + ")");
        }

        // if parent element has a static position, make it relative
        if (vide.$element.css("position") === "static") {
            vide.$element.css("position", "relative");
        }

        vide.$element.prepend(vide.$wrapper);

        if (!isIOS && !isAndroid) {
            sources = "";

            if (typeof vide.path === "object") {
                if (vide.path.mp4) {
                    sources += "<source src='http://" + Util.getMediaServer() + "/" + vide.path.mp4 + ".mp4' type='video/mp4'>";
                }
                if (vide.path.webm) {
                    sources += "<source src='http://" + Util.getMediaServer() + "/" + vide.path.webm + ".webm' type='video/webm'>";
                }
                if (vide.path.ogv) {
                    sources += "<source src='http://" + Util.getMediaServer() + "/" + vide.path.ogv + ".ogv' type='video/ogv'>";
                }

                vide.$video = $("<video>" + sources + "</video>");
            } else {
                vide.$video = $("<video>" +
                "<source src='http://" + Util.getMediaServer() + "/" + vide.path + ".mp4' type='video/mp4'>" +
                "<source src='http://" + Util.getMediaServer() + "/" + vide.path + ".webm' type='video/webm'>" +
                "<source src='http://" + Util.getMediaServer() + "/" + vide.path + ".ogv' type='video/ogg'>" +
                "</video>");
            }

            // Disable visibility, while loading
            vide.$video.css("visibility", "hidden");

            // Set video properties
            vide.$video.prop({
                autoplay: vide.settings.autoplay,
                loop: vide.settings.loop,
                volume: vide.settings.volume,
                muted: vide.settings.muted,
                playbackRate: vide.settings.playbackRate
            });

            // Append video
            vide.$wrapper.append(vide.$video);

            // Video alignment
            vide.$video.css({
                "margin": "auto",
                "position": "absolute",
                "z-index": -1,
                "top": position.y,
                "left": position.x,
                "-webkit-transform": "translate(-" + position.x + ", -" + position.y + ")",
                "-ms-transform": "translate(-" + position.x + ", -" + position.y + ")",
                "transform": "translate(-" + position.x + ", -" + position.y + ")"
            });

            // resize video, when it's loaded
            vide.$video.bind("loadedmetadata." + pluginName, function () {
                vide.$video.css("visibility", "visible");
                vide.resize();
                vide.$wrapper.css("background-image", "none");
            });
            vide.$video.bind("canplaythrough." + pluginName, function () {
                setTimeout(function () {
                    $(".video-fader").removeClass('faded-full');
                }, 100)

            });

            // resize event is available only for 'window',
            // use another code solutions to detect DOM elements resizing
            vide.$element.bind("resize." + pluginName, function () {
                if (vide.settings.resizing) {
                    vide.resize();
                }
            });
        } else {
            $(".video-fader").removeClass('faded-full');
        }
    };

    /**
     * Get video element of the background
     * @returns {HTMLVideoElement|null}
     * @public
     */
    Vide.prototype.getVideoObject = function () {
        return this.$video ? this.$video[0] : null;
    };

    /**
     * Resize video background
     * @public
     */
    Vide.prototype.resize = function () {
        if (!this.$video) {
            return;
        }

        var
        // get native video size
            videoHeight = this.$video[0].videoHeight,
            videoWidth = this.$video[0].videoWidth,

        // get wrapper size
            wrapperHeight = this.$wrapper.height(),
            wrapperWidth = this.$wrapper.width();

        if (wrapperWidth / videoWidth > wrapperHeight / videoHeight) {
            this.$video.css({
                "width": wrapperWidth + 2,

                // +2 pixels to prevent empty space after transformation
                "height": "auto"
            });
        } else {
            this.$video.css({
                "width": "auto",

                // +2 pixels to prevent empty space after transformation
                "height": wrapperHeight + 2
            });
        }
    };

    /**
     * Destroy video background
     * @public
     */
    Vide.prototype.destroy = function () {
        this.$element.unbind(pluginName);

        if (this.$video) {
            this.$video.unbind(pluginName);
        }

        delete $[pluginName].lookup[this.index];
        this.$element.removeData(pluginName);
        this.$wrapper.remove();
    };

    /**
     * Special plugin object for instances.
     * @type {Object}
     * @public
     */
    $[pluginName] = {
        lookup: []
    };

    /**
     * Plugin constructor
     * @param {Object|String} path
     * @param {Object|String} options
     * @returns {JQuery}
     * @constructor
     */
    $.fn[pluginName] = function (path, options) {
        var instance;

        this.each(function () {
            instance = $.data(this, pluginName);

            if (instance) {

                // destroy plugin instance if exists
                instance.destroy();
            }

            // create plugin instance
            instance = new Vide(this, path, options);
            instance.index = $[pluginName].lookup.push(instance) - 1;
            $.data(this, pluginName, instance);
        });

        return this;
    };

    $(document).ready(function () {

        // window resize event listener
        $(window).bind("resize." + pluginName, function () {
            for (var len = $[pluginName].lookup.length, i = 0, instance; i < len; i++) {
                instance = $[pluginName].lookup[i];

                if (instance && instance.settings.resizing) {
                    instance.resize();
                }
            }
        });

        // Auto initialization.
        // Add 'data-vide-bg' attribute with a path to the video without extension.
        // Also you can pass options throw the 'data-vide-options' attribute.
        // 'data-vide-options' must be like "muted: false, volume: 0.5".
        $(document).find("[data-" + pluginName + "-bg]").each(function (i, element) {
            var $element = $(element),
                options = $element.data(pluginName + "-options"),
                path = $element.data(pluginName + "-bg");

            $element[pluginName](path, options);
        });
    });
})(window.jQuery, window, document, navigator);
//$(document).ready(function () {
//    var items = [
//        {
//            title: "ÐŸÑ€Ð¾ÑÑ‹Ð¿Ð°Ñ‚ÑŒÑÑ Ð² ÐÐ¾Ð²Ñ‹Ð¹ Ð“Ð¾Ð´ Ð² 4* ÐœÐ°Ñ€Ð¸Ð¾Ñ‚Ñ‚Ðµ Ð½Ð°Ð¿Ñ€Ð¾Ñ‚Ð¸Ð² ÐšÐ°Ð·Ð°Ð½ÑÐºÐ¾Ð³Ð¾ ÐšÑ€ÐµÐ¼Ð»Ñ Ð·Ð° 50 Ð•Ð²Ñ€Ð¾â€¦",
//            href: "http://www.onetwotrip.com/ru/hotel/RU/Kazan/Courtyard-by-Marriott-Kazan-Kremlin-406760?date_start=2015-01-09&date_end=2015-01-10&persons=2,0&sc_type=geo&sc=551487&utm_source=zenrus_hotels&utm_medium=banner&utm_campaign=zenrus"
//        },
//        {
//            title: "ÐžÑ‚ÐµÐ»Ð¸ Ð² ÐšÐ°Ð·Ð°Ð½Ð¸ Ð² Ð½Ð¾Ð²Ð¾Ð³Ð¾Ð´Ð½ÑŽÑŽ Ð½Ð¾Ñ‡ÑŒ Ñ‚ÐµÐ¿ÐµÑ€ÑŒ Ð¾Ñ‚ 21 Ð•Ð²Ñ€Ð¾",
//            href: "http://www.onetwotrip.com/ru/hotels/?utm_source=zenrus_hotels&utm_medium=banner&utm_campaign=zenrus#hotels/btj3:5310/d:3112,0101/p:20"
//        },
//        {
//            title: "ÐÐ¾Ð²Ð¾Ð³Ð¾Ð´Ð½Ð¸Ð¹ ÑÐ°Ð»ÑŽÑ‚ Ð¸Ð· Ð¾ÐºÐ½Ð° 4* ÐœÐ°Ñ€Ð¸Ð¾Ñ‚Ñ‚Ð° Ð½Ð° Ð’Ð°ÑÐ¸Ð»ÑŒÐµÐ²ÑÐºÐ¾Ð¼ Ð¾ÑÑ‚Ñ€Ð¾Ð²Ðµ Ñ‚ÐµÐ¿ÐµÑ€ÑŒ Ð²ÑÐµÐ³Ð¾ 70 Ð•Ð²Ñ€Ð¾",
//            href: "http://www.onetwotrip.com/ru/hotel/RU/Saint-Petersburg/Courtyard-by-Marriott-St.-Petersburg-Vasilievsky-296126?date_start=2014-12-31&date_end=2015-01-01&persons=2,0&sc_type=geo&sc=498817&utm_source=zenrus_hotels&utm_medium=banner&utm_campaign=zenrus"
//        },
//        {
//            title: "Ð’ ÐŸÐ¸Ñ‚ÐµÑ€Ðµ Ð´Ð°Ð¶Ðµ Ð² Ð½Ð¾Ð²Ð¾Ð³Ð¾Ð´Ð½ÑŽÑŽ Ð½Ð¾Ñ‡ÑŒ Ð¾Ñ‚ÐµÐ»Ð¸ ÑÑ‚Ð¾ÑÑ‚ Ð¾Ñ‚ 24 Ð•Ð²Ñ€Ð¾",
//            href: "http://www.onetwotrip.com/ru/hotels/?utm_source=zenrus_hotels&utm_medium=banner&utm_campaign=zenrus#hotels/aow1:5310/d:3112,0101/p:20"
//        },
//        {
//            title: "Ð¡Ð»ÐµÑ‚Ð°Ñ‚ÑŒ Ð² ÐÐ¾Ð²Ñ‹Ð¹ Ð“Ð¾Ð´ Ð² ÐšÐ°Ð·Ð°Ð½ÑŒ  Ð¼Ð¾Ð¶Ð½Ð¾ Ð·Ð°  130 Ð•Ð²Ñ€Ð¾",
//            href: "http://www.onetwotrip.com/ru/aviabilety/moscow-kazan_MOW-KZN/?utm_source=zenrus_hotels&utm_medium=banner&utm_campaign=zenrus#2912MOWKZN0201&s|SU|1"
//        },
//        {
//            title: "ÐžÑ‚ÐµÐ»Ð¸ Ð² Ð¡Ð¾Ñ‡Ð¸ Ð´Ð°Ð¶Ðµ Ð² Ð½Ð¾Ð²Ð¾Ð³Ð¾Ð´Ð½ÑŽÑŽ Ð½Ð¾Ñ‡ÑŒ Ð¾Ñ‚ 80 Ð•Ð²Ñ€Ð¾",
//            href: "http://www.onetwotrip.com/ru/hotels/?utm_source=zenrus_hotels&utm_medium=banner&utm_campaign=zenrus#hotels/aj6m:5310/d:3112,0101/p:20"
//        },
//        {
//            title: "ÐžÑ‚Ð»Ð¸Ñ‡Ð½Ñ‹Ð¹ Ð¾Ñ‚ÐµÐ»ÑŒ  Ð½Ð° ÐºÑƒÑ€Ð¾Ñ€Ñ‚Ðµ Ð Ð¾Ð·Ð° Ð¥ÑƒÑ‚Ð¾Ñ€ Ð² Ð½Ð¾Ð²Ð¾Ð³Ð¾Ð´Ð½ÑŽÑŽ Ð½Ð¾Ñ‡ÑŒ Ð²ÑÐµÐ³Ð¾ 113 Ð•Ð²Ñ€Ð¾",
//            href: "http://www.onetwotrip.com/ru/hotel/RU/Estosadok/MERCURE-Rosa-Khutor-Hotel-916663?date_start=2014-12-31&date_end=2015-01-01&persons=2,0&sc_type=geo&sc=491422&utm_source=zenrus_hotels&utm_medium=banner&utm_campaign=zenrus"
//        },
//        {
//            title: "Ð’ ÐšÑ€Ð°ÑÐ½Ð¾Ð¹ ÐŸÐ¾Ð»ÑÐ½Ðµ Ð´Ð°Ð¶Ðµ Ð² ÐÐ¾Ð²Ñ‹Ð¹ Ð“Ð¾Ð´ Ð¼Ð¾Ð¶Ð½Ð¾ Ð½Ð°Ð¹Ñ‚Ð¸ Ð¾Ñ‚ÐµÐ»ÑŒ Ð·Ð° 53 Ð•Ð²Ñ€Ð¾",
//            href: "http://www.onetwotrip.com/ru/hotel/RU/Krasnaya-Polyana/Olympia-Hotel-2454818?date_start=2014-12-31&date_end=2015-01-01&persons=2,0&sc_type=geo&sc=491422&utm_source=zenrus_hotels&utm_medium=banner&utm_campaign=zenrus"
//        },
//        {
//            title: "Ð¡Ð»ÐµÑ‚Ð°Ñ‚ÑŒ Ð² ÐÐ¾Ð²Ñ‹Ð¹ Ð“Ð¾Ð´ Ð² Ð¡Ð¾Ñ‡Ð¸ Ð¼Ð¾Ð¶Ð½Ð¾ Ð·Ð° 140 Ð•Ð²Ñ€Ð¾",
//            href: "http://www.onetwotrip.com/ru/aviabilety/moscow-sochi_MOW-AER/?utm_source=zenrus_hotels&utm_medium=banner&utm_campaign=zenrus#2912MOWAER0301&s"
//        },
//        {
//            title: "Ð¡Ð»ÐµÑ‚Ð°Ñ‚ÑŒ Ð² ÐÐ¾Ð²Ñ‹Ð¹ Ð“Ð¾Ð´ Ð² ÐŸÐ¸Ñ‚ÐµÑ€ Ð¼Ð¾Ð¶Ð½Ð¾ Ð·Ð° 87 Ð•Ð²Ñ€Ð¾",
//            href: "http://www.onetwotrip.com/ru/aviabilety/moscow-st_petersburg_MOW-LED/?utm_source=zenrus_hotels&utm_medium=banner&utm_campaign=zenrus#2912MOWLED0201&s"
//        },
//        {
//            title: "Ð’ÑÑ‚Ñ€ÐµÑ‚Ð¸Ñ‚ÑŒ ÐÐ¾Ð²Ñ‹Ð¹ Ð³Ð¾Ð´ Ð½Ð° Ð³Ð¾Ñ€Ð½Ð¾Ð»Ñ‹Ð¶Ð½Ð¾Ð¼ ÐºÑƒÑ€Ð¾Ñ€Ñ‚Ðµ ÐŸÑ€Ð¸ÑÐ»ÑŒÐ±Ñ€ÑƒÑÑŒÑ Ð²ÑÐµÐ³Ð¾ Ð·Ð° 60 ÐµÐ²Ñ€Ð¾",
//            href: "http://www.onetwotrip.com/ru/hotel/RU/Terskol/Ozon-Cheget-2269245?date_start=2014-12-31&date_end=2015-01-01&persons=2,0&sc_type=hotel&sc=483269&utm_source=zenrus_hotels&utm_medium=banner&utm_campaign=zenrus&lang=ru&locale=ru"
//        }
//    ];
//
//    var ottLink = {
//        title: "Ð’Ð¾Ð·Ð²Ñ€Ð°Ñ‰Ð°Ð¹Ñ‚Ðµ Ð´Ð¾ 5% Ñ ÐºÐ°Ð¶Ð´Ð¾Ð¹ Ð¿Ð¾ÐºÑƒÐ¿ÐºÐ¸ Ð¿Ð¾ ÐºÐ°Ñ€Ñ‚Ðµ Ð»Ð¾ÑÐ»ÑŒÐ½Ð¾ÑÑ‚Ð¸ OneTwoTrip",
//        href: "http://www.onetwotrip.com/ru/promo/tcsbank_s/?utm_source=zenrus_hotels&utm_medium=banner&utm_campaign=zenrus"
//    }
//
//
//    function shuffle(o) { //v1.0
//        for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
//        return o;
//    };
//
//    var currentItem = 0;
//    var $container = $('.bottom-rotator');
//
//    items = shuffle(items)
//
//    items.splice(3, 0, ottLink);
//    items.splice(7, 0, ottLink);
//    items.splice(12, 0, ottLink);
//
//    setTimeout(function () {
//        var showFunc = arguments.callee
//        var $a = $('<a href="' + items[currentItem]['href'] + '" target="_blank">' + items[currentItem]['title'] + '</a>');
//        $container.append($a);
//        $container.addClass('shown');
//        setTimeout(function () {
//            $container.removeClass('shown');
//            setTimeout(function () {
//                $a.remove();
//                currentItem++
//                if (currentItem >= items.length) currentItem = 0;
//                setTimeout(showFunc, 2000);
//            }, 2000);
//        }, 13000);
//
//
//    }, 2000)
//
//});
//$(document).ready(function () {
//    var firstDelay = 10000;
//    var interCycleDelay = 30000;
//    var letterAppearingDelay = 90;
//    var onePhraseTime = 3000;
//    var interPhraseTime = 100;
//    if ($('.top-center-logo-logo').length) {
//        $('.center-logo').addClass('shown')
//        var doAppearPhrase = function (noteNumber, callback) {
//            var self = arguments.callee;
//            var $div = $('.top-center-logo-logo .note-' + noteNumber).empty();
//            var text = $div.data('text') || '';
//            var currentLetterPosition = 1;
//            $div.fadeIn(1400, function () {
//                setTimeout(function () {
//                    if (text) {
//                        $div.text(text.substring(0, currentLetterPosition))
//                        currentLetterPosition++;
//                    }
//                    if (text && currentLetterPosition <= text.length) {
//                        setTimeout(arguments.callee, letterAppearingDelay);
//                    } else {
//                        setTimeout(function () {
//                            $div.fadeOut(1400, function () {
//                                if (noteNumber < 3) {
//                                    setTimeout(function () {
//                                        self(noteNumber + 1, callback)
//                                    }, interPhraseTime)
//                                } else {
//                                    callback();
//                                }
//                            });
//                        }, onePhraseTime)
//                    }
//                }, letterAppearingDelay)
//            })
//
//        };
//
//        setTimeout(function () {
//            var cycleStart = arguments.callee;
//            doAppearPhrase(1, function () {
//                setTimeout(cycleStart, interCycleDelay)
//            });
//        }, firstDelay);
//    }
//
//});
$(document).ready(function () {

                        
	$(".top-center-logo-logo").on("click", function() {
		yaCounter27378659.reachGoal('TM_CLICK');
	})

    var firstDelay = 1000;
    var interCycleDelay = 30000;
    var letterAppearingDelay = 90;
    var onePhraseTime = 3000;
    var interPhraseTime = 100;
    if ($('.top-center-logo-logo').length) {
        $('.center-logo').addClass('shown')
        var doAppearPhrase = function (noteNumber, callback) {
            var self = arguments.callee;
            var $div = $('.top-center-logo-logo .note-' + noteNumber).empty();
            var text = $div.data('text') || '';
            var currentLetterPosition = 1;
            $div.fadeIn(1400, function () {
                setTimeout(function () {
                    if (text) {
                        $div.text(text.substring(0, currentLetterPosition))
                        currentLetterPosition++;
                    }
                    if (text && currentLetterPosition <= text.length) {
                        setTimeout(arguments.callee, letterAppearingDelay);
                    } else {
                        setTimeout(function () {
                            $div.fadeOut(1400, function () {
                                if (noteNumber < 5) {
                                    setTimeout(function () {
                                        self(noteNumber + 1, callback)
                                    }, interPhraseTime)
                                } else {
                                    callback();
                                }
                            });
                        }, onePhraseTime)
                    }
                }, letterAppearingDelay)
            })

        };

        setTimeout(function () {
            var cycleStart = arguments.callee;
            doAppearPhrase(1, function () {
                setTimeout(cycleStart, interCycleDelay)
            });
        }, firstDelay);
    }

});
var Data = {

    quotes: {0: 'usd', 1: 'eur', 2: 'brent', 9: 'bitcoin', 10: 'eth', 11: 'bch'},
    elements: {},

    $clientsOnline: $('.clients-online span'),
    $body: $('body'),
    $rubbrent: $('.rubbrent'),
    $eurusd: $('.eurusd'),

    showed: false,

    lastValuesUpdate: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    valuesUpdateInterval: 2000,
    usersUpdateInterval: 4000,

    initElements: function () {
        for (var i in this.quotes) {
            if (this.quotes.hasOwnProperty(i)) {
                this.elements[i] = {};
                this.elements[i].$container = $('[data-item-name=' + this.quotes[i] + ']');
                this.elements[i].$cell = this.elements[i].$container.find('.value');
                this.elements[i].$note = this.elements[i].$container.find('.note:first span');
            }
        }

    },

    updateValues: function (current) {
        // update main values
        console.log(this.quotes);
        for (var i in this.quotes) {
            if ((new Date).getTime() - this.lastValuesUpdate[i] > this.valuesUpdateInterval) {
                this.lastValuesUpdate[i] = (new Date).getTime();
                if (!isNaN(current[i])) {
                    if (i == 9) {
                        $('.bitcoin').css('opacity', .7)
                    }
                    if (i == 10) {
                        $('.eth').css('opacity', .7)
                    }
                    if (i == 11) {
                        $('.bch').css('opacity', .7)
                    }

                    var signClass = Util.getSignClass(current[i], this.elements[i].$cell.text(), i == 0 || i == 1);
                    if (signClass) {
                        this.elements[i].$container.removeClass('plus').removeClass('minus')
                    }

                    this.elements[i].$container.addClass(signClass);
                    this.elements[i].$cell.text(Util.formatFloatVal(current[i], i >= 9 ? 1 : 2));
                    if (this.elements[i].$note.length) {
                        this.elements[i].$note.text(Util.pluralize(current[i], i < 2 ? ['Ñ€ÑƒÐ±Ð»ÑŒ', 'Ñ€ÑƒÐ±Ð»Ñ', 'Ñ€ÑƒÐ±Ð»ÐµÐ¹'] : ['Ð´Ð¾Ð»Ð»Ð°Ñ€', 'Ð´Ð¾Ð»Ð»Ð°Ñ€Ð°', 'Ð´Ð¾Ð»Ð»Ð°Ñ€Ð¾Ð²']))
                    }
                }
            }
        }

        // update sub values
        var rubBrent = current[0] * current[2];
        this.$rubbrent.text(Math.round(rubBrent) + ' ' + Util.pluralize(rubBrent, ['Ñ€ÑƒÐ±Ð»ÑŒ', 'Ñ€ÑƒÐ±Ð»Ñ', 'Ñ€ÑƒÐ±Ð»ÐµÐ¹']) + ' Ð·Ð° Ð±Ð°Ñ€Ñ€ÐµÐ»ÑŒ');
        this.$eurusd.text('EUR/USD: ' + Util.formatFloatVal(current[1] / current[0], 2));

        //$('.cow span').text(Math.round(Math.random()*10+40));

        // update clients inline
        if (typeof current[3] != 'undefined') {
            if (!this.showed) {
                this.$clientsOnline.parent().addClass('showed')
                this.showed = true;
            }
            if ((new Date).getTime() - this.lastValuesUpdate[3] > this.usersUpdateInterval) {
                this.lastValuesUpdate[3] = (new Date).getTime();
                this.$clientsOnline.text(current[3])
            }
        }

        $('.zvr-val').text(current[6]);
        $('.reserve-val').text(current[7]);
        $('.national-val').text(current[8]);
        $('.rkn a').text(current[12] ? Math.round(parseInt(current[12]) / 100000) / 10 : '...');


    },

    initWatchDog: function () {
        var _this = this;
        setInterval(function () {
            if ((new Date).getTime() - _this.lastValuesUpdate[3] > 120) {
                _this.initWebSockets()
            }
        }, 3600000);

        setTimeout(function () {
            document.location.reload();
        }, 3600000);
    },

    initWebSockets: function () {
        var _this = this;
        var conn = new WebSocket('ws://' + Util.getMainDomainPart() + ':8888');
        conn.onmessage = function (e) {
            _this.updateValues(e.data.split(';'));
        };
        this.initWatchDog();

    },

    updateView: function () {
        $('#container .quotes').toggle(!Settings.getOther('hideData'));
        $('#container .note.comment').toggle(!Settings.getOther('hideNotes'));
        $('#container .note.additional').toggle(!Settings.getOther('hideAdditionalDigits'));
        $('.datetime').toggle(!Settings.getOther('hideClock'));
    },

    init: function (current) {
        this.initElements();
        this.updateValues(current);
        this.initWebSockets()
    }
}
var IntroTeasers = {
    init: function () {
        this.initIntro();
        this.initAppMobileTeaser();
    },

    initAppMobileTeaser: function () {
        if (Util.isMobile()) {
            if ($(".app-teaser-popup").length) {
                $(".app-teaser-popup").on('click', function (e) {
                    if ($(e.target).is('.app-teaser-popup')) {
                        $('body').removeClass('mobile-teaser');
                        $('.app-teaser-popup').hide();
                    }
                });
                $(".app-teaser-popup a").on('click', function () {
                    $.cookie('appTeaserShowed', 1, {expires: 1000});
                    $('body').removeClass('mobile-teaser');
                    $('.app-teaser-popup').hide();
                    if ($(this).is('.app-no')) {
                        return false;
                    }
                    if ($(this).is('.btn-android')) {
                        yaCounter27378659.reachGoal('APP_TEASER_ANDROID');
                    }
                    if ($(this).is('.btn-apple')) {
                        yaCounter27378659.reachGoal('APP_TEASER_APPLE');
                    }

                });
                if (!$.cookie('appTeaserShowed')) {
                    window.onload = function () {
                        $('body').addClass('mobile-teaser');
                        window.scrollTo(0, 1);
                        $('.app-teaser-popup').fadeIn();
                        yaCounter27378659.reachGoal('APP_TEASER');
                    };
                }
            }
        }
    },

    initIntro: function () {
        if (!Util.isMobile()) {
            if (!$.cookie('introAlreadyShowed')) {
                $('.video-fader').addClass('faded');
                $('.new-settings-teaser, .new-apps-teaser').addClass('showed');
                $.cookie('introAlreadyShowed', 1, {expires: 1000});
                var documentClickHandler = function (e) {
                    $('.video-fader').removeClass('faded');
                    $('.new-settings-teaser, .new-apps-teaser').removeClass('showed');
                    document.removeEventListener('click', documentClickHandler, true);
                };

                document.addEventListener('click', documentClickHandler, true);
            }
        }
    }
}
var Music = {
    musicTracks: ['Thai', 'Beach', 'Blue Line Loop', 'Cosmos', 'Ocean', 'Day and Night', 'Dream of Wings', 'Fire', 'Glass of hope', 'Healing', 'Spa Bells', 'Inner circle', 'Moon Garden', 'Morning Sun', 'Song of Wind', 'The Light', 'Get those vibes', 'The night sub'],
    currentMusic: $.cookie('music'),
    $musicCycleCheckbox: $('#music-cycle'),
    $musicEnableCheckbox: $('#music-enable'),
    $container: $('.tab-music .scroll-container'),
    playerObject: new buzz.sound(),

    initSwitcher: function () {
        var _this = this;
        var $switcherContainer = $('.audio-switcher');
        for (var i in this.musicTracks) {
            $switcherContainer.append('<a href="' + this.musicTracks[i] + '" ' + (this.currentMusic == this.musicTracks[i] ? 'class="active"' : '') + '" data-name="' + this.musicTracks[i] + '">' + this.musicTracks[i] + '</a>');
        }

        // video selector
        $switcherContainer.on('click', 'a', function (e) {
            _this.switchMusic($(this).attr('href'));

            $(this).addClass('active').siblings().removeClass('active');

            return false;
        });

        // cycle checkbox
        _this.$musicCycleCheckbox.click(function () {
            $.cookie('cycleMusic', $(this).is(':checked') ? 1 : 0, {expires: 1000});
        }).prop('checked', _this.isAutoCycleOn())

        // music checkbox
        _this.$musicEnableCheckbox.click(function () {
            $.cookie('sound', $(this).is(':checked') ? '' : 'off', {expires: 1000});
            if ($(this).is(':checked')) {
                _this.turnOn();
            } else {
                _this.turnOff();
            }
        }).prop('checked', _this.isMusicOn());

        $('.sound-button').on('click', function() {
            _this.$musicEnableCheckbox.trigger('click');
        });

        if (!_this.isMusicOn()) {
            _this.disableMusicUi();
        }

    },

    isMusicOn: function () {
        return $.cookie('sound') != 'off';
    },

    isAutoCycleOn: function () {
        return $.cookie('cycleMusic') == 1;
    },

    turnOffAutoCycle: function () {
        $.cookie('cycleMusic', 0);
        this.$musicCycleCheckbox.prop('checked', false)
    },

    switchMusic: function (music, keepAutoCycle) {
        var _this = this;
        console.log('switchMusic', music);
        $.cookie('music', music);
        // if (keepAutoCycle !== true) {
        //     this.turnOffAutoCycle();
        // }
        this.playerObject.fadeOut(500, function () {
            console.log('fadeout complete, stopping');
            _this.playerObject.stop().unbind('seeking');
            _this.playMusic(music)
        })
    },

    turnOn: function () {
        console.log('turnOn');

        this.enableMusicUi();
        this.playerObject.play()
            .fadeTo(30)
            .loop();
    },

    turnOff: function () {
        this.disableMusicUi();
        this.playerObject.stop();
    },

    enableMusicUi: function () {
        this.$container.removeClass('disabled');
        this.$musicCycleCheckbox.prop('disabled', false).parent().removeClass('disabled');
        $('.sound-button').removeClass('turned-off');
    },

    disableMusicUi: function () {
        this.$container.addClass('disabled');
        this.$musicCycleCheckbox.prop('disabled', true).parent().addClass('disabled');
        $('.sound-button').addClass('turned-off');
    },

    playMusic: function (music) {
        console.log('playMusic', music);
        this.playerObject = new buzz.sound('http://' + Util.getMediaServer() + '/media/sounds/' + music, {
            formats: ["ogg", "mp3", "aac"],
            volume: 0
        });
        this.startAutoCycle();
        if (this.isMusicOn()) {
            this.turnOn();
        }
    },

    startAutoCycle: function () {
        var _this = this;
        this.playerObject.bind('seeking', function () {
            console.log('seeking');
            if (_this.isAutoCycleOn() && _this.isMusicOn()) {
                var next = Math.floor(Math.random() * _this.musicTracks.length);
                console.log('isAutoCycleOn... next is:', next);
                _this.switchMusic(_this.musicTracks[next], true);
                $('.audio-switcher a[data-name="' + _this.musicTracks[next] + '"]').addClass('active').siblings().removeClass('active');

            }
        })
    },

    init: function () {
        if (!this.currentMusic || this.musicTracks.indexOf(this.currentMusic) == -1) {
            this.currentMusic = this.musicTracks[0];
        }

        this.initSwitcher();
        this.playMusic(this.currentMusic);
    }
}
var Photo = {
    photos: [
        "018F6F064C",
        "0c412568",
        "24945A3721",
        "39C341DF09",
        "40AD00293D",
        "5CD14419F3",
        "5CF8E5718A",
        "5fcb0a55",
        "6B4CEF8918",
        "6e609595",
        "7A572F1BB5",
        "91A4D5CC8A",
        "93B5170725",
        "9874C83105",
        "9E2DF43994",
        "9ED76457E9",
        "A95834A5D6",
        "D0B13477F5",
        "D2783DA1FF",
        "D9A0249DB1",
        "F0277449BE",
        "F59D96DC72",
        "F798A704EA",
        "FA333B830F",
        "eda0fb7c",
        "photo-1416862291207-4ca732144d83",
        "photo-1416934625760-d56f5e79f6fe",
        "photo-1417434743061-9873e0beaed6",
        "photo-1417436026361-a033044d901f",
        "photo-1419064642531-e575728395f2",
    ],
    colors: ["000000", "232323", "121d23", "071d05", "170619", "1b0000"],
    currentPhoto: $.cookie('photo1'),
    currentColor: $.cookie('color1'),
    $container: $("#container"),
    $photoCycleCheckbox: $('#photo-cycle'),
    autoCycleTime: 30000,
    cycleTimer: null,

    initSwitcher: function () {
        var _this = this;
        var $switcherContainer = $('.photo-switcher');
        for (var i in this.colors) {
            $switcherContainer.append('<a href="' + this.colors[i] + '" style="background:#' + this.colors[i] + '" class="' + (Settings.getBackgroundMode() == 'photo' && this.currentPhoto == this.colors[i] ? 'active' : '') + ' color" data-color="' + this.colors[i] + '"></a>');
        }
        for (var i in this.photos) {
            $switcherContainer.append('<a href="' + this.photos[i] + '" ' + (Settings.getBackgroundMode() == 'photo' && this.currentPhoto == this.photos[i] ? 'class="active"' : '') + ' style="background-image:url(media/photo/th_' + this.photos[i] + '.jpg)" data-name="' + this.photos[i] + '"></a>');
        }

        // photo selector
        $switcherContainer.on('click', 'a', function (e) {
            Video.off();
            Settings.setBackgroundMode('photo');
            _this.turnOffAutoCycle();
            _this.switchPhoto($(this).attr('href'), $(this).data('color'));

            $(this).addClass('active').siblings().removeClass('active');

            return false;
        });

        // cycle checkbox
        _this.$photoCycleCheckbox.click(function () {
            Video.off();
            Settings.setBackgroundMode('photo');
            $.cookie('cyclePhoto', $(this).is(':checked') ? 1 : 0, {expires: 1000});
            _this.startAutoCycle(true);
        }).prop('checked', _this.isAutoCycleOn())

    },

    off: function () {
        this.turnOffAutoCycle();
        this.$container.css('background', '');
        $('.photo-switcher a.active').removeClass('active');

    },

    isAutoCycleOn: function () {
        return $.cookie('cyclePhoto') == 1;
    },

    turnOffAutoCycle: function () {
        $.cookie('cyclePhoto', 0);
        this.$photoCycleCheckbox.prop('checked', false)
    },

    switchPhoto: function (photo, color) {
        $.cookie('photo1', photo, {expires: 1000});
        if (typeof color == 'undefined') {
            $.cookie('color1', '', {expires: 1000});
        } else {
            $.cookie('color1', color, {expires: 1000});
        }
        this.showPhoto(photo, color)
        //$(".video-fader").removeClass('faded-full');
    },

    showPhoto: function (photo, color) {
        if (typeof color != "undefined" && color != "") {
            this.$container.css('background', "#" + color)
        } else {
            this.$container.css('background', 'url("media/photo/' + photo + '.jpg")').css('background-size', 'cover')
        }
    },

    startAutoCycle: function (restart) {
        var _this = this;
        var cycleTickHandler = function () {
            if (_this.isAutoCycleOn() && Settings.getBackgroundMode() == 'photo') {
                var next = Math.floor(Math.random() * _this.photos.length);
                $(".video-fader").addClass('faded-full');
                $('.photo-switcher a[data-name="' + _this.photos[next] + '"]').addClass('active').siblings().removeClass('active');
                setTimeout(function () {
                    _this.showPhoto(_this.photos[next]);
                    setTimeout(function () {
                        $(".video-fader").removeClass('faded-full');
                    }, 400);
                }, 400);
            }
        }

        if (restart == true) {
            if (_this.cycleTimer) clearInterval(_this.cycleTimer);
            cycleTickHandler();
        }

        _this.cycleTimer = setInterval(function () {
            cycleTickHandler();
        }, this.autoCycleTime);
    },

    init: function () {
        if (!this.currentPhoto || (this.photos.indexOf(this.currentPhoto) == -1 && this.colors.indexOf(this.currentPhoto) == -1)) {
            this.currentPhoto = this.photos[0];
        }

        this.initSwitcher();
        this.startAutoCycle();
        if (Settings.getBackgroundMode() == 'photo') {
            this.showPhoto(this.currentPhoto, this.currentColor);
        }
    }
}
var SettingsPanel = {

    opened: false,

    initPanelToggle: function () {
        var _this = this;

        $('.settings-button').on('click', function () {

            if (!_this.opened) {
                _this.opened = true;
                $(this).addClass('close');

                $('.settings-layer').addClass('shown');
                $('.settings-panel').addClass('opened');
                $('.left-ad-panel').addClass('opened');
                $('.video-fader').addClass('faded');
                $('.bottom-google-panel').hide();
        		yaCounter27378659.reachGoal('OPEN_SETTINGS');
            }
            else {
                _this.opened = false;
                $(this).removeClass('close');
                $('.settings-layer').removeClass('shown');
                $('.settings-panel').removeClass('opened');
                $('.left-ad-panel').removeClass('opened');
                $('.video-fader').removeClass('faded');
                $('.bottom-google-panel').show();
            }
            return false;
        })

        $('.video-fader').on('click', function () {
            if (_this.opened) {
                $('.settings-button').trigger('click');
            }
        });

        $(document).keyup(function (e) {
            if (e.keyCode == 27) {
                if (_this.opened) {
                    $('.settings-button').trigger('click');
                }
            }
        });

        setTimeout(function () {
            $('.settings-button').toggleClass('dark');
            setTimeout(arguments.callee, 10000);
        }, 10000);

    },

    initMenu: function () {
        $('.settings-panel .menu li').click(function () {
            $(this).addClass('active').siblings().removeClass('active');
            $('.settings-container:eq(' + $(this).prevAll().length + ')').addClass('active').siblings().removeClass('active');
        })
    },

    init: function () {
        this.initPanelToggle();
        this.initMenu();

        $('.settings-panel .menu li:eq(' + (Settings.getBackgroundMode() == 'video' ? 0 : 1) + ')').trigger('click');
    }
}
var Settings = {

    other: {
        hideData: false,
        hideNotes: false,
        hideAdditionalDigits: false,
        hideClock: false
    },

    getBackgroundMode: function () {
        var mode = $.cookie('backgroundMode');
        if (mode != 'video' && mode != 'photo') mode = 'video';
        return mode;
    },

    setBackgroundMode: function (mode) {
        if (mode != 'video' && mode != 'photo') mode = 'video';
        $.cookie('backgroundMode', mode, {expires: 1000});
    },

    setOther: function (field, val) {
        this.other[field] = val;
        this.save();
    },

    getOther: function (field) {
        return this.other[field];
    },

    save: function () {
        $.cookie('settings', JSON.stringify(this.other), {expires: 1000});
    },

    load: function () {
        var loadedData;
        try {
            loadedData = $.parseJSON($.cookie('settings'));
            this.other = loadedData;
        } catch (e) {
        }
    }
}
var Util = {
    formatFloatVal: function (val, digits) {
        return parseFloat(val).toFixed(digits).replace(".", ",");
    },

    getSignClass: function (val, prevVal, invert) {
        val = parseFloat(val).toFixed(2);
        prevVal = parseFloat(prevVal.replace(",", ".")).toFixed(2);
        if (val > prevVal) return invert ? 'minus' : 'plus';
        if (val < prevVal) return invert ? 'plus' : 'minus';
        return false;
    },

    getMainDomainPart: function () {
        return window.location.hostname.split('.').slice(-2).join('.');
    },

    pluralize: function (value, strings) {
        value = Math.round(value);
        if (value > 100) {
            value = value % 100;
        }

        firstDigit = value % 10;
        secondDigit = Math.floor(value / 10);

        if (secondDigit != 1) {
            if (firstDigit == 1) {
                return strings[0];
            } else if (firstDigit > 1 && firstDigit < 5) {
                return strings[1];
            } else {
                return strings[2];
            }
        } else {
            return strings[2];
        }
    },

    getMediaServer: function () {
        var server = "media2";
        //var rnd = Math.floor(Math.random() * 12)
        //if (rnd < 2) {
        //    server = "media1"
        //} else if (rnd < 4) {
        //    server = "media2"
        //}


        return server + "." + Util.getMainDomainPart();
    },

    isMobile: function () {
        return (/Android/i.test(navigator.userAgent) || /iPhone|iPad|iPod/i.test(navigator.userAgent));
    }


}
var Video = {
    videos: ['ocean', 'clouds', 'grassdrop', 'lake', 'lake2', 'oilpump', 'raindrops', 'sea2', 'sunsetocean', 'town', 'waterfall4', 'space', 'aurora', 'snow', 'mountains', 'mountains2', 'rain', 'night', 'volcano', 'meduza', 'desert', 'moscow1', 'waterfall', 'waterfall2', 'waterfall3', 'singapore', 'sea', 'fire', 'palms', 'clever'],
    currentVideo: $.cookie('video'),
    $container: $("#container"),
    $videoFader: $('.video-fader'),
    $videoCycleCheckbox: $('#video-cycle'),
    autoCycleTime: 120000,

    initSwitcher: function () {
        var _this = this;
        var $switcherContainer = $('.video-switcher');
        for (var i in this.videos) {
            $switcherContainer.append('<a href="' + this.videos[i] + '" ' + (Settings.getBackgroundMode() == 'video' && this.currentVideo == this.videos[i] ? 'class="active"' : '') + ' style="background-image:url(media/video/75x75/' + this.videos[i] + '.jpg)" data-name="' + this.videos[i] + '"></a>');
        }

        // video selector
        $switcherContainer.on('click', 'a', function (e) {
            Photo.off();
            Settings.setBackgroundMode('video');
            _this.turnOffAutoCycle();
            _this.switchVideo($(this).attr('href'));

            $(this).addClass('active').siblings().removeClass('active');

            return false;
        });

        // cycle checkbox
        _this.$videoCycleCheckbox.click(function () {
            $.cookie('cycleVideo', $(this).is(':checked') ? 1 : 0, {expires: 1000});
            if (Settings.getBackgroundMode() != 'video') {
                Photo.off();
                Settings.setBackgroundMode('video');
                _this.startAutoCycle(true);
            }
        }).prop('checked', _this.isAutoCycleOn())

    },

    isAutoCycleOn: function () {
        return $.cookie('cycleVideo') == 1;
    },

    turnOffAutoCycle: function () {
        $.cookie('cycleVideo', 0);
        this.$videoCycleCheckbox.prop('checked', false)
    },

    switchVideo: function (video) {
        $(".video-fader").addClass('faded-full');
        var _this = this;
        $.cookie('video', video, {expires: 1000});
        setTimeout(function () {
            _this.playVideo(video)
        }, 300)

    },

    playVideo: function (video) {
        this.$container.vide('media/video/' + video).removeClass().addClass(video)
    },

    off: function () {
        this.turnOffAutoCycle()
        $('.video-switcher a.active').removeClass('active');
        if (this.$container.data("vide")) {
            this.$container.data("vide").destroy();
        }
    },


    startAutoCycle: function (restart) {
        var _this = this;

        var cycleTickHandler = function () {
            if (_this.isAutoCycleOn() && Settings.getBackgroundMode() == 'video') {
                var next = Math.floor(Math.random() * _this.videos.length);
                _this.switchVideo(_this.videos[next]);
                $('.video-switcher a[data-name="' + _this.videos[next] + '"]').addClass('active').siblings().removeClass('active');
            }
        };

        if (restart == true) {
            if (_this.cycleTimer) clearInterval(_this.cycleTimer);
            cycleTickHandler();
        }

        _this.cycleTimer = setInterval(function () {
            cycleTickHandler();
        }, this.autoCycleTime);
    },

    init: function () {
        if (!this.currentVideo || this.videos.indexOf(this.currentVideo) == -1) {
            this.currentVideo = this.videos[0];
        }

        this.initSwitcher();
        this.startAutoCycle();
        if (Settings.getBackgroundMode() == 'video') {
            this.playVideo(this.currentVideo);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJ2ZW5kb3IvanF1ZXJ5Lm1iLmJyb3dzZXIuanMiLCJ2ZW5kb3IvanF1ZXJ5LnZpZGUuanMiLCJvbGQvX19vdHQtYm90dG9tLXJvdGF0b3IuanMiLCJvbGQvX190b3AtY2VudGVyLWxvZ28uanMiLCJtb2R1bGVzL2JvdHRvbS1yb3RhdG9yLmpzIiwibW9kdWxlcy9kYXRhLmpzIiwibW9kdWxlcy9pbnRyby10ZWFzZXJzLmpzIiwibW9kdWxlcy9tdXNpYy5qcyIsIm1vZHVsZXMvcGhvdG8uanMiLCJtb2R1bGVzL3NldHRpbmdzLXBhbmVsLmpzIiwibW9kdWxlcy9zZXR0aW5ncy5qcyIsIm1vZHVsZXMvdXRpbC5qcyIsIm1vZHVsZXMvdmlkZW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BnREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0YkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vPSAuLi8uLi9ib3dlcl9jb21wb25lbnRzL2pxdWVyeS9qcXVlcnkubWluLmpzXG4vLz0gLi4vLi4vYm93ZXJfY29tcG9uZW50cy9idXp6L2Rpc3QvYnV6ei5qc1xuLy89IC4uLy4uL2Jvd2VyX2NvbXBvbmVudHMvanF1ZXJ5LmNvb2tpZS9qcXVlcnkuY29va2llLmpzXG4vLz0gdmVuZG9yL2pxdWVyeS5tYi5icm93c2VyLmpzXG4vLz0gdmVuZG9yL2pxdWVyeS52aWRlLmpzXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICBTZXR0aW5nc1BhbmVsLmluaXQoKTtcbiAgICBEYXRhLmluaXQoY3VycmVudCk7XG4gICAgVmlkZW8uaW5pdCgpO1xuICAgIFBob3RvLmluaXQoKTtcbiAgICBNdXNpYy5pbml0KCk7XG4gICAgLy9JbnRyb1RlYXNlcnMuaW5pdCgpO1xuICAgIC8vaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcbiAgICAvLyAgICAkKCcuY29udGFpbmVyLmJpZy5nb29nbGUnKS5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgLy8gICAgJCgnLmNvbnRhaW5lci5iaWcuYWRtaXRhZCcpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAvLyAgICBBZG1pdGFkLmluaXQoKTtcbiAgICAvL31cblxuICAgIC8vaWYgKCQoJy5jb3cnKS5sZW5ndGgpIHtcbiAgICAvLyAgICB2YXIgZGF0ZTEgPSBuZXcgRGF0ZSgnMTEvMjAvMjAxNScpO1xuICAgIC8vICAgIHZhciBkYXRlMiA9IG5ldyBEYXRlKCk7XG4gICAgLy8gICAgdmFyIGRpZmZEYXlzID0gZGF0ZTIuZ2V0RGF0ZSgpIC0gZGF0ZTEuZ2V0RGF0ZSgpO1xuICAgIC8vICAgICQoJy5jb3cgc3BhbicpLnRleHQoZGlmZkRheXMgKyAnICcgKyBVdGlsLnBsdXJhbGl6ZShkaWZmRGF5cywgWyfQtNC10L3RjCcsICfQtNC90Y8nLCAn0LTQvdC10LknXSkpXG4gICAgLy8gICAgJCgnLmNvdycpLnNob3coKTtcbiAgICAvL31cblxuXG4gICAgaW5pdE5ld3MoKTtcbiAgICBpbml0VGltZSgpO1xuICAgIGluaXRQdWxzZVNldHRpbmdzQnV0dG9uKCk7XG4gICAgaW5pdE90aGVyU2V0dGluZ3MoKTtcblxuICAgIGlmICgkLmJyb3dzZXIub3BlcmEgJiYgJC5icm93c2VyLnZlcnNpb24gPD0gMTIgfHwgJC5icm93c2VyLm1zaWUpIHtcbiAgICAgICAgZnVuY3Rpb24gYWRqdXN0Rm9udFNpemUoKSB7XG4gICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiAkKHdpbmRvdykuaGVpZ2h0KCkpIHtcbiAgICAgICAgICAgICAgICAkKCcucXVvdGVzIC5pdGVtJykuY3NzKCd3aWR0aCcsIChNYXRoLmZsb29yKDk5IC8gJCgnLnF1b3RlcyAuaXRlbScpLmxlbmd0aCkpICsgXCIlXCIpLmNzcygnbWFyZ2luLWJvdHRvbScsICcwJyk7XG4gICAgICAgICAgICAgICAgJCgnLnF1b3RlcyAuaXRlbSAudmFsdWUnKS5jc3MoJ2ZvbnQtc2l6ZScsICQoJy5xdW90ZXMgLml0ZW0nKS53aWR0aCgpIC8gMy4xKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnF1b3RlcycpLmNzcygnbWFyZ2luLXRvcCcsIC0kKCcucXVvdGVzJykuaGVpZ2h0KCkgLyAyKTtcbiAgICAgICAgICAgICAgICB9LCAwKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCcucXVvdGVzIC5pdGVtJykuY3NzKCd3aWR0aCcsICgxMDApICsgXCIlXCIpLmNzcygnbWFyZ2luLWJvdHRvbScsICc1JScpO1xuICAgICAgICAgICAgICAgICQoJy5xdW90ZXMgLml0ZW0gLnZhbHVlJykuY3NzKCdmb250LXNpemUnLCAkKCcucXVvdGVzIC5pdGVtJykud2lkdGgoKSAvIDUpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkKCcucXVvdGVzJykuY3NzKCdtYXJnaW4tdG9wJywgMCk7XG4gICAgICAgICAgICAgICAgfSwgMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGFkanVzdEZvbnRTaXplKCk7XG4gICAgICAgICQod2luZG93KS5vbigncmVzaXplJywgYWRqdXN0Rm9udFNpemUpO1xuICAgIH1cbn0pO1xuXG5mdW5jdGlvbiBpbml0UHVsc2VTZXR0aW5nc0J1dHRvbigpIHtcbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5ncmlkLWJ1dHRvbicpLnRvZ2dsZUNsYXNzKCdobCcpO1xuICAgIH0sIDQwMDApO1xufVxuXG5cbmZ1bmN0aW9uIGluaXRUaW1lKCkge1xuICAgIHZhciAkdGltZSA9ICQoJy5kYXRldGltZSAudGltZScpO1xuICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGR0ID0gbmV3IERhdGUoKTtcbiAgICAgICAgdmFyIG1pbnV0ZXMgPSBkdC5nZXRNaW51dGVzKClcbiAgICAgICAgJHRpbWUudGV4dChkdC5nZXRIb3VycygpICsgJzonICsgKG1pbnV0ZXMgPCAxMCA/IFwiMFwiIDogXCJcIikgKyBtaW51dGVzKVxuICAgIH0sIDEwMDApXG5cbn1cblxuZnVuY3Rpb24gaW5pdE90aGVyU2V0dGluZ3MoKSB7XG4gICAgU2V0dGluZ3MubG9hZCgpO1xuICAgIERhdGEudXBkYXRlVmlldygpO1xuXG4gICAgJCgnI2Rpc2FibGUtZGlnaXRzJykucHJvcCgnY2hlY2tlZCcsIFNldHRpbmdzLmdldE90aGVyKCdoaWRlRGF0YScpKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFNldHRpbmdzLnNldE90aGVyKCdoaWRlRGF0YScsICQodGhpcykuaXMoJzpjaGVja2VkJykpXG4gICAgICAgICQoJyNkaXNhYmxlLWNvbW1lbnRzLCAjZGlzYWJsZS1zbWFsbGRpZ2l0cycpLnByb3AoJ2Rpc2FibGVkJywgJCh0aGlzKS5pcygnOmNoZWNrZWQnKSk7XG4gICAgICAgIERhdGEudXBkYXRlVmlldygpO1xuICAgIH0pXG4gICAgJCgnI2Rpc2FibGUtY29tbWVudHMnKS5wcm9wKCdjaGVja2VkJywgU2V0dGluZ3MuZ2V0T3RoZXIoJ2hpZGVOb3RlcycpKS5wcm9wKCdkaXNhYmxlZCcsIFNldHRpbmdzLmdldE90aGVyKCdoaWRlRGF0YScpKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFNldHRpbmdzLnNldE90aGVyKCdoaWRlTm90ZXMnLCAkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKVxuICAgICAgICBEYXRhLnVwZGF0ZVZpZXcoKTtcbiAgICB9KVxuICAgICQoJyNkaXNhYmxlLXNtYWxsZGlnaXRzJykucHJvcCgnY2hlY2tlZCcsIFNldHRpbmdzLmdldE90aGVyKCdoaWRlQWRkaXRpb25hbERpZ2l0cycpKS5wcm9wKCdkaXNhYmxlZCcsIFNldHRpbmdzLmdldE90aGVyKCdoaWRlRGF0YScpKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFNldHRpbmdzLnNldE90aGVyKCdoaWRlQWRkaXRpb25hbERpZ2l0cycsICQodGhpcykuaXMoJzpjaGVja2VkJykpXG4gICAgICAgIERhdGEudXBkYXRlVmlldygpO1xuICAgIH0pXG4gICAgJCgnI2Rpc2FibGUtY2xvY2snKS5wcm9wKCdjaGVja2VkJywgU2V0dGluZ3MuZ2V0T3RoZXIoJ2hpZGVDbG9jaycpKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFNldHRpbmdzLnNldE90aGVyKCdoaWRlQ2xvY2snLCAkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKVxuICAgICAgICBEYXRhLnVwZGF0ZVZpZXcoKTtcbiAgICB9KVxufVxuXG5cbmZ1bmN0aW9uIGluaXROZXdzKCkge1xuICAgIHZhciBuZXdzID0ge307XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVOZXdzKCkge1xuICAgICAgICAkLmdldEpTT04oJy9idWlsZC9qcy9uZXdzLmpzJykuZG9uZShmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICAgICAgbmV3cyA9IHJlcztcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB1cGRhdGVOZXdzKCk7XG4gICAgc2V0SW50ZXJ2YWwodXBkYXRlTmV3cywgMTIwMDAwKVxufSIsIi8qXG4gKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqICBqcXVlcnkubWIuY29tcG9uZW50c1xuICogIGZpbGU6IGpxdWVyeS5tYi5icm93c2VyLmpzXG4gKlxuICogIENvcHlyaWdodCAoYykgMjAwMS0yMDE0LiBNYXR0ZW8gQmljb2NjaGkgKFB1cHVuemkpO1xuICogIE9wZW4gbGFiIHNybCwgRmlyZW56ZSAtIEl0YWx5XG4gKiAgZW1haWw6IG1hdHRlb0BvcGVuLWxhYi5jb21cbiAqICBzaXRlOiBcdGh0dHA6Ly9wdXB1bnppLmNvbVxuICogIGJsb2c6XHRodHRwOi8vcHVwdW56aS5vcGVuLWxhYi5jb21cbiAqIFx0aHR0cDovL29wZW4tbGFiLmNvbVxuICpcbiAqICBMaWNlbmNlczogTUlULCBHUExcbiAqICBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICogIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9ncGwuaHRtbFxuICpcbiAqICBsYXN0IG1vZGlmaWVkOiAyNy8wMS8xNCAxOS41OFxuICogICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKi9cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqXG4gKiBqcXVlcnkubWIuYnJvd3NlclxuICogQXV0aG9yOiBwdXB1bnppXG4gKiBDcmVhdGlvbiBkYXRlOiAxNi8wMS8xM1xuICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKkJyb3dzZXIgZGV0ZWN0aW9uIHBhdGNoKi9cblxuaWYoIWpRdWVyeS5icm93c2VyKXtcblxuXHRqUXVlcnkuYnJvd3NlciA9IHt9O1xuXHRqUXVlcnkuYnJvd3Nlci5tb3ppbGxhID0gZmFsc2U7XG5cdGpRdWVyeS5icm93c2VyLndlYmtpdCA9IGZhbHNlO1xuXHRqUXVlcnkuYnJvd3Nlci5vcGVyYSA9IGZhbHNlO1xuXHRqUXVlcnkuYnJvd3Nlci5zYWZhcmkgPSBmYWxzZTtcblx0alF1ZXJ5LmJyb3dzZXIuY2hyb21lID0gZmFsc2U7XG5cdGpRdWVyeS5icm93c2VyLm1zaWUgPSBmYWxzZTtcblx0alF1ZXJ5LmJyb3dzZXIuYW5kcm9pZCA9IGZhbHNlO1xuXHRqUXVlcnkuYnJvd3Nlci5ibGFja2JlcnJ5ID0gZmFsc2U7XG5cdGpRdWVyeS5icm93c2VyLmlvcyA9IGZhbHNlO1xuXHRqUXVlcnkuYnJvd3Nlci5vcGVyYU1vYmlsZSA9IGZhbHNlO1xuXHRqUXVlcnkuYnJvd3Nlci53aW5kb3dzTW9iaWxlID0gZmFsc2U7XG5cdGpRdWVyeS5icm93c2VyLm1vYmlsZSA9IGZhbHNlO1xuXG5cdHZhciBuQWd0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcblx0alF1ZXJ5LmJyb3dzZXIudWEgPSBuQWd0O1xuXG5cdGpRdWVyeS5icm93c2VyLm5hbWUgID0gbmF2aWdhdG9yLmFwcE5hbWU7XG5cdGpRdWVyeS5icm93c2VyLmZ1bGxWZXJzaW9uICA9ICcnK3BhcnNlRmxvYXQobmF2aWdhdG9yLmFwcFZlcnNpb24pO1xuXHRqUXVlcnkuYnJvd3Nlci5tYWpvclZlcnNpb24gPSBwYXJzZUludChuYXZpZ2F0b3IuYXBwVmVyc2lvbiwxMCk7XG5cdHZhciBuYW1lT2Zmc2V0LHZlck9mZnNldCxpeDtcblxuLy8gSW4gT3BlcmEsIHRoZSB0cnVlIHZlcnNpb24gaXMgYWZ0ZXIgXCJPcGVyYVwiIG9yIGFmdGVyIFwiVmVyc2lvblwiXG5cdGlmICgodmVyT2Zmc2V0PW5BZ3QuaW5kZXhPZihcIk9wZXJhXCIpKSE9LTEpIHtcblx0XHRqUXVlcnkuYnJvd3Nlci5vcGVyYSA9IHRydWU7XG5cdFx0alF1ZXJ5LmJyb3dzZXIubmFtZSA9IFwiT3BlcmFcIjtcblx0XHRqUXVlcnkuYnJvd3Nlci5mdWxsVmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCs2KTtcblx0XHRpZiAoKHZlck9mZnNldD1uQWd0LmluZGV4T2YoXCJWZXJzaW9uXCIpKSE9LTEpXG5cdFx0XHRqUXVlcnkuYnJvd3Nlci5mdWxsVmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCs4KTtcblx0fVxuXG4vLyBJbiBNU0lFIDwgMTEsIHRoZSB0cnVlIHZlcnNpb24gaXMgYWZ0ZXIgXCJNU0lFXCIgaW4gdXNlckFnZW50XG5cdGVsc2UgaWYgKCAodmVyT2Zmc2V0PW5BZ3QuaW5kZXhPZihcIk1TSUVcIikpIT0tMSkge1xuXHRcdGpRdWVyeS5icm93c2VyLm1zaWUgPSB0cnVlO1xuXHRcdGpRdWVyeS5icm93c2VyLm5hbWUgPSBcIk1pY3Jvc29mdCBJbnRlcm5ldCBFeHBsb3JlclwiO1xuXHRcdGpRdWVyeS5icm93c2VyLmZ1bGxWZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0KzUpO1xuXHR9XG5cbi8vIEluIFRSSURFTlQgKElFMTEpID0+IDExLCB0aGUgdHJ1ZSB2ZXJzaW9uIGlzIGFmdGVyIFwicnY6XCIgaW4gdXNlckFnZW50XG5cdGVsc2UgaWYgKG5BZ3QuaW5kZXhPZihcIlRyaWRlbnRcIikhPS0xICkge1xuXHRcdGpRdWVyeS5icm93c2VyLm1zaWUgPSB0cnVlO1xuXHRcdGpRdWVyeS5icm93c2VyLm5hbWUgPSBcIk1pY3Jvc29mdCBJbnRlcm5ldCBFeHBsb3JlclwiO1xuXHRcdHZhciBzdGFydCA9IG5BZ3QuaW5kZXhPZihcInJ2OlwiKSszO1xuXHRcdHZhciBlbmQgPSBzdGFydCs0O1xuXHRcdGpRdWVyeS5icm93c2VyLmZ1bGxWZXJzaW9uID0gbkFndC5zdWJzdHJpbmcoc3RhcnQsZW5kKTtcblx0fVxuXG4vLyBJbiBDaHJvbWUsIHRoZSB0cnVlIHZlcnNpb24gaXMgYWZ0ZXIgXCJDaHJvbWVcIlxuXHRlbHNlIGlmICgodmVyT2Zmc2V0PW5BZ3QuaW5kZXhPZihcIkNocm9tZVwiKSkhPS0xKSB7XG5cdFx0alF1ZXJ5LmJyb3dzZXIud2Via2l0ID0gdHJ1ZTtcblx0XHRqUXVlcnkuYnJvd3Nlci5jaHJvbWUgPSB0cnVlO1xuXHRcdGpRdWVyeS5icm93c2VyLm5hbWUgPSBcIkNocm9tZVwiO1xuXHRcdGpRdWVyeS5icm93c2VyLmZ1bGxWZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0KzcpO1xuXHR9XG4vLyBJbiBTYWZhcmksIHRoZSB0cnVlIHZlcnNpb24gaXMgYWZ0ZXIgXCJTYWZhcmlcIiBvciBhZnRlciBcIlZlcnNpb25cIlxuXHRlbHNlIGlmICgodmVyT2Zmc2V0PW5BZ3QuaW5kZXhPZihcIlNhZmFyaVwiKSkhPS0xKSB7XG5cdFx0alF1ZXJ5LmJyb3dzZXIud2Via2l0ID0gdHJ1ZTtcblx0XHRqUXVlcnkuYnJvd3Nlci5zYWZhcmkgPSB0cnVlO1xuXHRcdGpRdWVyeS5icm93c2VyLm5hbWUgPSBcIlNhZmFyaVwiO1xuXHRcdGpRdWVyeS5icm93c2VyLmZ1bGxWZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0KzcpO1xuXHRcdGlmICgodmVyT2Zmc2V0PW5BZ3QuaW5kZXhPZihcIlZlcnNpb25cIikpIT0tMSlcblx0XHRcdGpRdWVyeS5icm93c2VyLmZ1bGxWZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0KzgpO1xuXHR9XG4vLyBJbiBTYWZhcmksIHRoZSB0cnVlIHZlcnNpb24gaXMgYWZ0ZXIgXCJTYWZhcmlcIiBvciBhZnRlciBcIlZlcnNpb25cIlxuXHRlbHNlIGlmICgodmVyT2Zmc2V0PW5BZ3QuaW5kZXhPZihcIkFwcGxlV2Via2l0XCIpKSE9LTEpIHtcblx0XHRqUXVlcnkuYnJvd3Nlci53ZWJraXQgPSB0cnVlO1xuXHRcdGpRdWVyeS5icm93c2VyLm5hbWUgPSBcIlNhZmFyaVwiO1xuXHRcdGpRdWVyeS5icm93c2VyLmZ1bGxWZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0KzcpO1xuXHRcdGlmICgodmVyT2Zmc2V0PW5BZ3QuaW5kZXhPZihcIlZlcnNpb25cIikpIT0tMSlcblx0XHRcdGpRdWVyeS5icm93c2VyLmZ1bGxWZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0KzgpO1xuXHR9XG4vLyBJbiBGaXJlZm94LCB0aGUgdHJ1ZSB2ZXJzaW9uIGlzIGFmdGVyIFwiRmlyZWZveFwiXG5cdGVsc2UgaWYgKCh2ZXJPZmZzZXQ9bkFndC5pbmRleE9mKFwiRmlyZWZveFwiKSkhPS0xKSB7XG5cdFx0alF1ZXJ5LmJyb3dzZXIubW96aWxsYSA9IHRydWU7XG5cdFx0alF1ZXJ5LmJyb3dzZXIubmFtZSA9IFwiRmlyZWZveFwiO1xuXHRcdGpRdWVyeS5icm93c2VyLmZ1bGxWZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0KzgpO1xuXHR9XG4vLyBJbiBtb3N0IG90aGVyIGJyb3dzZXJzLCBcIm5hbWUvdmVyc2lvblwiIGlzIGF0IHRoZSBlbmQgb2YgdXNlckFnZW50XG5cdGVsc2UgaWYgKCAobmFtZU9mZnNldD1uQWd0Lmxhc3RJbmRleE9mKCcgJykrMSkgPCAodmVyT2Zmc2V0PW5BZ3QubGFzdEluZGV4T2YoJy8nKSkgKXtcblx0XHRqUXVlcnkuYnJvd3Nlci5uYW1lID0gbkFndC5zdWJzdHJpbmcobmFtZU9mZnNldCx2ZXJPZmZzZXQpO1xuXHRcdGpRdWVyeS5icm93c2VyLmZ1bGxWZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0KzEpO1xuXHRcdGlmIChqUXVlcnkuYnJvd3Nlci5uYW1lLnRvTG93ZXJDYXNlKCk9PWpRdWVyeS5icm93c2VyLm5hbWUudG9VcHBlckNhc2UoKSkge1xuXHRcdFx0alF1ZXJ5LmJyb3dzZXIubmFtZSA9IG5hdmlnYXRvci5hcHBOYW1lO1xuXHRcdH1cblx0fVxuXG5cdC8qQ2hlY2sgYWxsIG1vYmlsZSBlbnZpcm9ubWVudHMqL1xuXHRqUXVlcnkuYnJvd3Nlci5hbmRyb2lkID0gKC9BbmRyb2lkL2kpLnRlc3QobkFndCk7XG5cdGpRdWVyeS5icm93c2VyLmJsYWNrYmVycnkgPSAoL0JsYWNrQmVycnkvaSkudGVzdChuQWd0KTtcblx0alF1ZXJ5LmJyb3dzZXIuaW9zID0gKC9pUGhvbmV8aVBhZHxpUG9kL2kpLnRlc3QobkFndCk7XG5cdGpRdWVyeS5icm93c2VyLm9wZXJhTW9iaWxlID0gKC9PcGVyYSBNaW5pL2kpLnRlc3QobkFndCk7XG5cdGpRdWVyeS5icm93c2VyLndpbmRvd3NNb2JpbGUgPSAoL0lFTW9iaWxlL2kpLnRlc3QobkFndCk7XG5cdGpRdWVyeS5icm93c2VyLm1vYmlsZSA9IGpRdWVyeS5icm93c2VyLmFuZHJvaWQgfHwgalF1ZXJ5LmJyb3dzZXIuYmxhY2tiZXJyeSB8fCBqUXVlcnkuYnJvd3Nlci5pb3MgfHwgalF1ZXJ5LmJyb3dzZXIud2luZG93c01vYmlsZSB8fCBqUXVlcnkuYnJvd3Nlci5vcGVyYU1vYmlsZTtcblxuXG4vLyB0cmltIHRoZSBmdWxsVmVyc2lvbiBzdHJpbmcgYXQgc2VtaWNvbG9uL3NwYWNlIGlmIHByZXNlbnRcblx0aWYgKChpeD1qUXVlcnkuYnJvd3Nlci5mdWxsVmVyc2lvbi5pbmRleE9mKFwiO1wiKSkhPS0xKVxuXHRcdGpRdWVyeS5icm93c2VyLmZ1bGxWZXJzaW9uPWpRdWVyeS5icm93c2VyLmZ1bGxWZXJzaW9uLnN1YnN0cmluZygwLGl4KTtcblx0aWYgKChpeD1qUXVlcnkuYnJvd3Nlci5mdWxsVmVyc2lvbi5pbmRleE9mKFwiIFwiKSkhPS0xKVxuXHRcdGpRdWVyeS5icm93c2VyLmZ1bGxWZXJzaW9uPWpRdWVyeS5icm93c2VyLmZ1bGxWZXJzaW9uLnN1YnN0cmluZygwLGl4KTtcblxuXHRqUXVlcnkuYnJvd3Nlci5tYWpvclZlcnNpb24gPSBwYXJzZUludCgnJytqUXVlcnkuYnJvd3Nlci5mdWxsVmVyc2lvbiwxMCk7XG5cdGlmIChpc05hTihqUXVlcnkuYnJvd3Nlci5tYWpvclZlcnNpb24pKSB7XG5cdFx0alF1ZXJ5LmJyb3dzZXIuZnVsbFZlcnNpb24gID0gJycrcGFyc2VGbG9hdChuYXZpZ2F0b3IuYXBwVmVyc2lvbik7XG5cdFx0alF1ZXJ5LmJyb3dzZXIubWFqb3JWZXJzaW9uID0gcGFyc2VJbnQobmF2aWdhdG9yLmFwcFZlcnNpb24sMTApO1xuXHR9XG5cdGpRdWVyeS5icm93c2VyLnZlcnNpb24gPSBqUXVlcnkuYnJvd3Nlci5tYWpvclZlcnNpb247XG59XG4iLCIhKGZ1bmN0aW9uICgkLCB3aW5kb3csIGRvY3VtZW50LCBuYXZpZ2F0b3IpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8qKlxuICAgICAqIFZpZGUgc2V0dGluZ3NcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHZhciBwbHVnaW5OYW1lID0gXCJ2aWRlXCIsXG4gICAgICAgIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgdm9sdW1lOiAxLFxuICAgICAgICAgICAgcGxheWJhY2tSYXRlOiAxLFxuICAgICAgICAgICAgbXV0ZWQ6IHRydWUsXG4gICAgICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICBwb3NpdGlvbjogXCI1MCUgNTAlXCIsXG4gICAgICAgICAgICBwb3N0ZXJUeXBlOiBcImRldGVjdFwiLFxuICAgICAgICAgICAgcmVzaXppbmc6IHRydWVcbiAgICAgICAgfSxcblxuICAgIC8vIGlzIGlPcz9cbiAgICAgICAgaXNJT1MgPSAvaVBhZHxpUGhvbmV8aVBvZC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksXG5cbiAgICAvLyBpcyBBbmRyb2lkP1xuICAgICAgICBpc0FuZHJvaWQgPSAvQW5kcm9pZC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZSBzdHJpbmcgd2l0aCBvcHRpb25zXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICAgICAqIEByZXR1cm5zIHtPYmplY3R8U3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZnVuY3Rpb24gcGFyc2VPcHRpb25zKHN0cikge1xuICAgICAgICB2YXIgb2JqID0ge30sXG4gICAgICAgICAgICBkZWxpbWl0ZXJJbmRleCxcbiAgICAgICAgICAgIG9wdGlvbixcbiAgICAgICAgICAgIHByb3AsIHZhbCxcbiAgICAgICAgICAgIGFyciwgbGVuLFxuICAgICAgICAgICAgaTtcblxuICAgICAgICAvLyByZW1vdmUgc3BhY2VzIGFyb3VuZCBkZWxpbWl0ZXJzIGFuZCBzcGxpdFxuICAgICAgICBhcnIgPSBzdHIucmVwbGFjZSgvXFxzKjpcXHMqL2csIFwiOlwiKS5yZXBsYWNlKC9cXHMqLFxccyovZywgXCIsXCIpLnNwbGl0KFwiLFwiKTtcblxuICAgICAgICAvLyBwYXJzZSBzdHJpbmdcbiAgICAgICAgZm9yIChpID0gMCwgbGVuID0gYXJyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBvcHRpb24gPSBhcnJbaV07XG5cbiAgICAgICAgICAgIC8vIElnbm9yZSB1cmxzIGFuZCBzdHJpbmcgd2l0aG91dCBjb2xvbiBkZWxpbWl0ZXJzXG4gICAgICAgICAgICBpZiAob3B0aW9uLnNlYXJjaCgvXihodHRwfGh0dHBzfGZ0cCk6XFwvXFwvLykgIT09IC0xIHx8XG4gICAgICAgICAgICAgICAgb3B0aW9uLnNlYXJjaChcIjpcIikgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlbGltaXRlckluZGV4ID0gb3B0aW9uLmluZGV4T2YoXCI6XCIpO1xuICAgICAgICAgICAgcHJvcCA9IG9wdGlvbi5zdWJzdHJpbmcoMCwgZGVsaW1pdGVySW5kZXgpO1xuICAgICAgICAgICAgdmFsID0gb3B0aW9uLnN1YnN0cmluZyhkZWxpbWl0ZXJJbmRleCArIDEpO1xuXG4gICAgICAgICAgICAvLyBpZiB2YWwgaXMgYW4gZW1wdHkgc3RyaW5nLCBtYWtlIGl0IHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKCF2YWwpIHtcbiAgICAgICAgICAgICAgICB2YWwgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNvbnZlcnQgc3RyaW5nIHZhbHVlIGlmIGl0IGlzIGxpa2UgYSBib29sZWFuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHZhbCA9IHZhbCA9PT0gXCJ0cnVlXCIgfHwgKHZhbCA9PT0gXCJmYWxzZVwiID8gZmFsc2UgOiB2YWwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjb252ZXJ0IHN0cmluZyB2YWx1ZSBpZiBpdCBpcyBsaWtlIGEgbnVtYmVyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHZhbCA9ICFpc05hTih2YWwpID8gK3ZhbCA6IHZhbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb2JqW3Byb3BdID0gdmFsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgbm90aGluZyBpcyBwYXJzZWRcbiAgICAgICAgaWYgKHByb3AgPT0gbnVsbCAmJiB2YWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2UgcG9zaXRpb24gb3B0aW9uXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBwYXJzZVBvc2l0aW9uKHN0cikge1xuICAgICAgICBzdHIgPSBcIlwiICsgc3RyO1xuXG4gICAgICAgIC8vIGRlZmF1bHQgdmFsdWUgaXMgYSBjZW50ZXJcbiAgICAgICAgdmFyIGFyZ3MgPSBzdHIuc3BsaXQoL1xccysvKSxcbiAgICAgICAgICAgIHggPSBcIjUwJVwiLCB5ID0gXCI1MCVcIixcbiAgICAgICAgICAgIGxlbiwgYXJnLFxuICAgICAgICAgICAgaTtcblxuICAgICAgICBmb3IgKGkgPSAwLCBsZW4gPSBhcmdzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBhcmcgPSBhcmdzW2ldO1xuXG4gICAgICAgICAgICAvLyBjb252ZXJ0IHZhbHVlc1xuICAgICAgICAgICAgaWYgKGFyZyA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgICAgICAgICB4ID0gXCIwJVwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhcmcgPT09IFwicmlnaHRcIikge1xuICAgICAgICAgICAgICAgIHggPSBcIjEwMCVcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJnID09PSBcInRvcFwiKSB7XG4gICAgICAgICAgICAgICAgeSA9IFwiMCVcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJnID09PSBcImJvdHRvbVwiKSB7XG4gICAgICAgICAgICAgICAgeSA9IFwiMTAwJVwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhcmcgPT09IFwiY2VudGVyXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB4ID0gXCI1MCVcIjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB5ID0gXCI1MCVcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHggPSBhcmc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgeSA9IGFyZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge3g6IHgsIHk6IHl9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlYXJjaCBwb3N0ZXJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBmaW5kUG9zdGVyKHBhdGgsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBvbkxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjayh0aGlzLnNyYyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgJChcIjxpbWcgc3JjPSdodHRwOi8vXCIgKyBVdGlsLmdldE1lZGlhU2VydmVyKCkgKyBcIi9cIiArIHBhdGggKyBcIi5qcGcnPlwiKS5sb2FkKG9uTG9hZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVmlkZSBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IHBhdGhcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG9wdGlvbnNcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBWaWRlKGVsZW1lbnQsIHBhdGgsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy4kZWxlbWVudCA9ICQoZWxlbWVudCk7XG5cbiAgICAgICAgLy8gcGFyc2UgcGF0aFxuICAgICAgICBpZiAodHlwZW9mIHBhdGggPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHBhdGggPSBwYXJzZU9wdGlvbnMocGF0aCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwYXJzZSBvcHRpb25zXG4gICAgICAgIGlmICghb3B0aW9ucykge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gcGFyc2VPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVtb3ZlIGV4dGVuc2lvblxuICAgICAgICBpZiAodHlwZW9mIHBhdGggPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoL1xcLlxcdyokLywgXCJcIik7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHBhdGggPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gcGF0aCkge1xuICAgICAgICAgICAgICAgIGlmIChwYXRoLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhbaV0gPSBwYXRoW2ldLnJlcGxhY2UoL1xcLlxcdyokLywgXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6YXRpb25cbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgVmlkZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHZpZGUgPSB0aGlzLFxuICAgICAgICAgICAgcG9zaXRpb24gPSBwYXJzZVBvc2l0aW9uKHZpZGUuc2V0dGluZ3MucG9zaXRpb24pLFxuICAgICAgICAgICAgc291cmNlcyxcbiAgICAgICAgICAgIHBvc3RlcjtcblxuICAgICAgICAvLyBTZXQgdmlkZW8gd3JhcHBlciBzdHlsZXNcbiAgICAgICAgdmlkZS4kd3JhcHBlciA9ICQoXCI8ZGl2IGNsYXNzPSd2aWRlby1jb250YWluZXInPlwiKS5jc3Moe1xuICAgICAgICAgICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICBcInotaW5kZXhcIjogLTEsXG4gICAgICAgICAgICBcInRvcFwiOiAwLFxuICAgICAgICAgICAgXCJsZWZ0XCI6IDAsXG4gICAgICAgICAgICBcImJvdHRvbVwiOiAwLFxuICAgICAgICAgICAgXCJyaWdodFwiOiAwLFxuICAgICAgICAgICAgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiLFxuICAgICAgICAgICAgXCItd2Via2l0LWJhY2tncm91bmQtc2l6ZVwiOiBcImNvdmVyXCIsXG4gICAgICAgICAgICBcIi1tb3otYmFja2dyb3VuZC1zaXplXCI6IFwiY292ZXJcIixcbiAgICAgICAgICAgIFwiLW8tYmFja2dyb3VuZC1zaXplXCI6IFwiY292ZXJcIixcbiAgICAgICAgICAgIFwiYmFja2dyb3VuZC1zaXplXCI6IFwiY292ZXJcIixcbiAgICAgICAgICAgIFwiYmFja2dyb3VuZC1yZXBlYXRcIjogXCJuby1yZXBlYXRcIixcbiAgICAgICAgICAgIFwiYmFja2dyb3VuZC1wb3NpdGlvblwiOiBwb3NpdGlvbi54ICsgXCIgXCIgKyBwb3NpdGlvbi55XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgLy8gR2V0IHBvc3RlciBwYXRoXG4gICAgICAgIHBvc3RlciA9IHZpZGUucGF0aDtcbiAgICAgICAgaWYgKHR5cGVvZiB2aWRlLnBhdGggPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlmICh2aWRlLnBhdGgucG9zdGVyKSB7XG4gICAgICAgICAgICAgICAgcG9zdGVyID0gdmlkZS5wYXRoLnBvc3RlcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHZpZGUucGF0aC5tcDQpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zdGVyID0gdmlkZS5wYXRoLm1wNDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZpZGUucGF0aC53ZWJtKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc3RlciA9IHZpZGUucGF0aC53ZWJtO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmlkZS5wYXRoLm9ndikge1xuICAgICAgICAgICAgICAgICAgICBwb3N0ZXIgPSB2aWRlLnBhdGgub2d2O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCB2aWRlbyBwb3N0ZXJcbiAgICAgICAgaWYgKHZpZGUuc2V0dGluZ3MucG9zdGVyVHlwZSA9PT0gXCJkZXRlY3RcIikge1xuICAgICAgICAgICAgZmluZFBvc3Rlcihwb3N0ZXIsIGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgICAgICAgICB2aWRlLiR3cmFwcGVyLmNzcyhcImJhY2tncm91bmQtaW1hZ2VcIiwgXCJ1cmwoXCIgKyB1cmwgKyBcIilcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh2aWRlLnNldHRpbmdzLnBvc3RlclR5cGUgIT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgICB2aWRlLiR3cmFwcGVyXG4gICAgICAgICAgICAgICAgLmNzcyhcImJhY2tncm91bmQtaW1hZ2VcIiwgXCJ1cmwoaHR0cDovL1wiICsgVXRpbC5nZXRNZWRpYVNlcnZlcigpICsgXCIvXCIgKyBwb3N0ZXIgKyBcIi5cIiArIHZpZGUuc2V0dGluZ3MucG9zdGVyVHlwZSArIFwiKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIHBhcmVudCBlbGVtZW50IGhhcyBhIHN0YXRpYyBwb3NpdGlvbiwgbWFrZSBpdCByZWxhdGl2ZVxuICAgICAgICBpZiAodmlkZS4kZWxlbWVudC5jc3MoXCJwb3NpdGlvblwiKSA9PT0gXCJzdGF0aWNcIikge1xuICAgICAgICAgICAgdmlkZS4kZWxlbWVudC5jc3MoXCJwb3NpdGlvblwiLCBcInJlbGF0aXZlXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmlkZS4kZWxlbWVudC5wcmVwZW5kKHZpZGUuJHdyYXBwZXIpO1xuXG4gICAgICAgIGlmICghaXNJT1MgJiYgIWlzQW5kcm9pZCkge1xuICAgICAgICAgICAgc291cmNlcyA9IFwiXCI7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmlkZS5wYXRoID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZpZGUucGF0aC5tcDQpIHtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlcyArPSBcIjxzb3VyY2Ugc3JjPSdodHRwOi8vXCIgKyBVdGlsLmdldE1lZGlhU2VydmVyKCkgKyBcIi9cIiArIHZpZGUucGF0aC5tcDQgKyBcIi5tcDQnIHR5cGU9J3ZpZGVvL21wNCc+XCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2aWRlLnBhdGgud2VibSkge1xuICAgICAgICAgICAgICAgICAgICBzb3VyY2VzICs9IFwiPHNvdXJjZSBzcmM9J2h0dHA6Ly9cIiArIFV0aWwuZ2V0TWVkaWFTZXJ2ZXIoKSArIFwiL1wiICsgdmlkZS5wYXRoLndlYm0gKyBcIi53ZWJtJyB0eXBlPSd2aWRlby93ZWJtJz5cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZpZGUucGF0aC5vZ3YpIHtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlcyArPSBcIjxzb3VyY2Ugc3JjPSdodHRwOi8vXCIgKyBVdGlsLmdldE1lZGlhU2VydmVyKCkgKyBcIi9cIiArIHZpZGUucGF0aC5vZ3YgKyBcIi5vZ3YnIHR5cGU9J3ZpZGVvL29ndic+XCI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmlkZS4kdmlkZW8gPSAkKFwiPHZpZGVvPlwiICsgc291cmNlcyArIFwiPC92aWRlbz5cIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZpZGUuJHZpZGVvID0gJChcIjx2aWRlbz5cIiArXG4gICAgICAgICAgICAgICAgXCI8c291cmNlIHNyYz0naHR0cDovL1wiICsgVXRpbC5nZXRNZWRpYVNlcnZlcigpICsgXCIvXCIgKyB2aWRlLnBhdGggKyBcIi5tcDQnIHR5cGU9J3ZpZGVvL21wNCc+XCIgK1xuICAgICAgICAgICAgICAgIFwiPHNvdXJjZSBzcmM9J2h0dHA6Ly9cIiArIFV0aWwuZ2V0TWVkaWFTZXJ2ZXIoKSArIFwiL1wiICsgdmlkZS5wYXRoICsgXCIud2VibScgdHlwZT0ndmlkZW8vd2VibSc+XCIgK1xuICAgICAgICAgICAgICAgIFwiPHNvdXJjZSBzcmM9J2h0dHA6Ly9cIiArIFV0aWwuZ2V0TWVkaWFTZXJ2ZXIoKSArIFwiL1wiICsgdmlkZS5wYXRoICsgXCIub2d2JyB0eXBlPSd2aWRlby9vZ2cnPlwiICtcbiAgICAgICAgICAgICAgICBcIjwvdmlkZW8+XCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBEaXNhYmxlIHZpc2liaWxpdHksIHdoaWxlIGxvYWRpbmdcbiAgICAgICAgICAgIHZpZGUuJHZpZGVvLmNzcyhcInZpc2liaWxpdHlcIiwgXCJoaWRkZW5cIik7XG5cbiAgICAgICAgICAgIC8vIFNldCB2aWRlbyBwcm9wZXJ0aWVzXG4gICAgICAgICAgICB2aWRlLiR2aWRlby5wcm9wKHtcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdmlkZS5zZXR0aW5ncy5hdXRvcGxheSxcbiAgICAgICAgICAgICAgICBsb29wOiB2aWRlLnNldHRpbmdzLmxvb3AsXG4gICAgICAgICAgICAgICAgdm9sdW1lOiB2aWRlLnNldHRpbmdzLnZvbHVtZSxcbiAgICAgICAgICAgICAgICBtdXRlZDogdmlkZS5zZXR0aW5ncy5tdXRlZCxcbiAgICAgICAgICAgICAgICBwbGF5YmFja1JhdGU6IHZpZGUuc2V0dGluZ3MucGxheWJhY2tSYXRlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gQXBwZW5kIHZpZGVvXG4gICAgICAgICAgICB2aWRlLiR3cmFwcGVyLmFwcGVuZCh2aWRlLiR2aWRlbyk7XG5cbiAgICAgICAgICAgIC8vIFZpZGVvIGFsaWdubWVudFxuICAgICAgICAgICAgdmlkZS4kdmlkZW8uY3NzKHtcbiAgICAgICAgICAgICAgICBcIm1hcmdpblwiOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgICBcInotaW5kZXhcIjogLTEsXG4gICAgICAgICAgICAgICAgXCJ0b3BcIjogcG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICBcImxlZnRcIjogcG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICBcIi13ZWJraXQtdHJhbnNmb3JtXCI6IFwidHJhbnNsYXRlKC1cIiArIHBvc2l0aW9uLnggKyBcIiwgLVwiICsgcG9zaXRpb24ueSArIFwiKVwiLFxuICAgICAgICAgICAgICAgIFwiLW1zLXRyYW5zZm9ybVwiOiBcInRyYW5zbGF0ZSgtXCIgKyBwb3NpdGlvbi54ICsgXCIsIC1cIiArIHBvc2l0aW9uLnkgKyBcIilcIixcbiAgICAgICAgICAgICAgICBcInRyYW5zZm9ybVwiOiBcInRyYW5zbGF0ZSgtXCIgKyBwb3NpdGlvbi54ICsgXCIsIC1cIiArIHBvc2l0aW9uLnkgKyBcIilcIlxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIHJlc2l6ZSB2aWRlbywgd2hlbiBpdCdzIGxvYWRlZFxuICAgICAgICAgICAgdmlkZS4kdmlkZW8uYmluZChcImxvYWRlZG1ldGFkYXRhLlwiICsgcGx1Z2luTmFtZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZpZGUuJHZpZGVvLmNzcyhcInZpc2liaWxpdHlcIiwgXCJ2aXNpYmxlXCIpO1xuICAgICAgICAgICAgICAgIHZpZGUucmVzaXplKCk7XG4gICAgICAgICAgICAgICAgdmlkZS4kd3JhcHBlci5jc3MoXCJiYWNrZ3JvdW5kLWltYWdlXCIsIFwibm9uZVwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmlkZS4kdmlkZW8uYmluZChcImNhbnBsYXl0aHJvdWdoLlwiICsgcGx1Z2luTmFtZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkKFwiLnZpZGVvLWZhZGVyXCIpLnJlbW92ZUNsYXNzKCdmYWRlZC1mdWxsJyk7XG4gICAgICAgICAgICAgICAgfSwgMTAwKVxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gcmVzaXplIGV2ZW50IGlzIGF2YWlsYWJsZSBvbmx5IGZvciAnd2luZG93JyxcbiAgICAgICAgICAgIC8vIHVzZSBhbm90aGVyIGNvZGUgc29sdXRpb25zIHRvIGRldGVjdCBET00gZWxlbWVudHMgcmVzaXppbmdcbiAgICAgICAgICAgIHZpZGUuJGVsZW1lbnQuYmluZChcInJlc2l6ZS5cIiArIHBsdWdpbk5hbWUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodmlkZS5zZXR0aW5ncy5yZXNpemluZykge1xuICAgICAgICAgICAgICAgICAgICB2aWRlLnJlc2l6ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIi52aWRlby1mYWRlclwiKS5yZW1vdmVDbGFzcygnZmFkZWQtZnVsbCcpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldCB2aWRlbyBlbGVtZW50IG9mIHRoZSBiYWNrZ3JvdW5kXG4gICAgICogQHJldHVybnMge0hUTUxWaWRlb0VsZW1lbnR8bnVsbH1cbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgVmlkZS5wcm90b3R5cGUuZ2V0VmlkZW9PYmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiR2aWRlbyA/IHRoaXMuJHZpZGVvWzBdIDogbnVsbDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVzaXplIHZpZGVvIGJhY2tncm91bmRcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgVmlkZS5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuJHZpZGVvKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXJcbiAgICAgICAgLy8gZ2V0IG5hdGl2ZSB2aWRlbyBzaXplXG4gICAgICAgICAgICB2aWRlb0hlaWdodCA9IHRoaXMuJHZpZGVvWzBdLnZpZGVvSGVpZ2h0LFxuICAgICAgICAgICAgdmlkZW9XaWR0aCA9IHRoaXMuJHZpZGVvWzBdLnZpZGVvV2lkdGgsXG5cbiAgICAgICAgLy8gZ2V0IHdyYXBwZXIgc2l6ZVxuICAgICAgICAgICAgd3JhcHBlckhlaWdodCA9IHRoaXMuJHdyYXBwZXIuaGVpZ2h0KCksXG4gICAgICAgICAgICB3cmFwcGVyV2lkdGggPSB0aGlzLiR3cmFwcGVyLndpZHRoKCk7XG5cbiAgICAgICAgaWYgKHdyYXBwZXJXaWR0aCAvIHZpZGVvV2lkdGggPiB3cmFwcGVySGVpZ2h0IC8gdmlkZW9IZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuJHZpZGVvLmNzcyh7XG4gICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiB3cmFwcGVyV2lkdGggKyAyLFxuXG4gICAgICAgICAgICAgICAgLy8gKzIgcGl4ZWxzIHRvIHByZXZlbnQgZW1wdHkgc3BhY2UgYWZ0ZXIgdHJhbnNmb3JtYXRpb25cbiAgICAgICAgICAgICAgICBcImhlaWdodFwiOiBcImF1dG9cIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiR2aWRlby5jc3Moe1xuICAgICAgICAgICAgICAgIFwid2lkdGhcIjogXCJhdXRvXCIsXG5cbiAgICAgICAgICAgICAgICAvLyArMiBwaXhlbHMgdG8gcHJldmVudCBlbXB0eSBzcGFjZSBhZnRlciB0cmFuc2Zvcm1hdGlvblxuICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IHdyYXBwZXJIZWlnaHQgKyAyXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95IHZpZGVvIGJhY2tncm91bmRcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgVmlkZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy4kZWxlbWVudC51bmJpbmQocGx1Z2luTmFtZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuJHZpZGVvKSB7XG4gICAgICAgICAgICB0aGlzLiR2aWRlby51bmJpbmQocGx1Z2luTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgJFtwbHVnaW5OYW1lXS5sb29rdXBbdGhpcy5pbmRleF07XG4gICAgICAgIHRoaXMuJGVsZW1lbnQucmVtb3ZlRGF0YShwbHVnaW5OYW1lKTtcbiAgICAgICAgdGhpcy4kd3JhcHBlci5yZW1vdmUoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU3BlY2lhbCBwbHVnaW4gb2JqZWN0IGZvciBpbnN0YW5jZXMuXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgJFtwbHVnaW5OYW1lXSA9IHtcbiAgICAgICAgbG9va3VwOiBbXVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQbHVnaW4gY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IHBhdGhcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJucyB7SlF1ZXJ5fVxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgICQuZm5bcGx1Z2luTmFtZV0gPSBmdW5jdGlvbiAocGF0aCwgb3B0aW9ucykge1xuICAgICAgICB2YXIgaW5zdGFuY2U7XG5cbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGluc3RhbmNlID0gJC5kYXRhKHRoaXMsIHBsdWdpbk5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoaW5zdGFuY2UpIHtcblxuICAgICAgICAgICAgICAgIC8vIGRlc3Ryb3kgcGx1Z2luIGluc3RhbmNlIGlmIGV4aXN0c1xuICAgICAgICAgICAgICAgIGluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY3JlYXRlIHBsdWdpbiBpbnN0YW5jZVxuICAgICAgICAgICAgaW5zdGFuY2UgPSBuZXcgVmlkZSh0aGlzLCBwYXRoLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGluc3RhbmNlLmluZGV4ID0gJFtwbHVnaW5OYW1lXS5sb29rdXAucHVzaChpbnN0YW5jZSkgLSAxO1xuICAgICAgICAgICAgJC5kYXRhKHRoaXMsIHBsdWdpbk5hbWUsIGluc3RhbmNlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAvLyB3aW5kb3cgcmVzaXplIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgICQod2luZG93KS5iaW5kKFwicmVzaXplLlwiICsgcGx1Z2luTmFtZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZm9yICh2YXIgbGVuID0gJFtwbHVnaW5OYW1lXS5sb29rdXAubGVuZ3RoLCBpID0gMCwgaW5zdGFuY2U7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gJFtwbHVnaW5OYW1lXS5sb29rdXBbaV07XG5cbiAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2UgJiYgaW5zdGFuY2Uuc2V0dGluZ3MucmVzaXppbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UucmVzaXplKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBdXRvIGluaXRpYWxpemF0aW9uLlxuICAgICAgICAvLyBBZGQgJ2RhdGEtdmlkZS1iZycgYXR0cmlidXRlIHdpdGggYSBwYXRoIHRvIHRoZSB2aWRlbyB3aXRob3V0IGV4dGVuc2lvbi5cbiAgICAgICAgLy8gQWxzbyB5b3UgY2FuIHBhc3Mgb3B0aW9ucyB0aHJvdyB0aGUgJ2RhdGEtdmlkZS1vcHRpb25zJyBhdHRyaWJ1dGUuXG4gICAgICAgIC8vICdkYXRhLXZpZGUtb3B0aW9ucycgbXVzdCBiZSBsaWtlIFwibXV0ZWQ6IGZhbHNlLCB2b2x1bWU6IDAuNVwiLlxuICAgICAgICAkKGRvY3VtZW50KS5maW5kKFwiW2RhdGEtXCIgKyBwbHVnaW5OYW1lICsgXCItYmddXCIpLmVhY2goZnVuY3Rpb24gKGksIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciAkZWxlbWVudCA9ICQoZWxlbWVudCksXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9ICRlbGVtZW50LmRhdGEocGx1Z2luTmFtZSArIFwiLW9wdGlvbnNcIiksXG4gICAgICAgICAgICAgICAgcGF0aCA9ICRlbGVtZW50LmRhdGEocGx1Z2luTmFtZSArIFwiLWJnXCIpO1xuXG4gICAgICAgICAgICAkZWxlbWVudFtwbHVnaW5OYW1lXShwYXRoLCBvcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KSh3aW5kb3cualF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBuYXZpZ2F0b3IpO1xuIiwiLy8kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4vLyAgICB2YXIgaXRlbXMgPSBbXG4vLyAgICAgICAge1xuLy8gICAgICAgICAgICB0aXRsZTogXCLQn9GA0L7RgdGL0L/QsNGC0YzRgdGPINCyINCd0L7QstGL0Lkg0JPQvtC0INCyIDQqINCc0LDRgNC40L7RgtGC0LUg0L3QsNC/0YDQvtGC0LjQsiDQmtCw0LfQsNC90YHQutC+0LPQviDQmtGA0LXQvNC70Y8g0LfQsCA1MCDQldCy0YDQvuKAplwiLFxuLy8gICAgICAgICAgICBocmVmOiBcImh0dHA6Ly93d3cub25ldHdvdHJpcC5jb20vcnUvaG90ZWwvUlUvS2F6YW4vQ291cnR5YXJkLWJ5LU1hcnJpb3R0LUthemFuLUtyZW1saW4tNDA2NzYwP2RhdGVfc3RhcnQ9MjAxNS0wMS0wOSZkYXRlX2VuZD0yMDE1LTAxLTEwJnBlcnNvbnM9MiwwJnNjX3R5cGU9Z2VvJnNjPTU1MTQ4NyZ1dG1fc291cmNlPXplbnJ1c19ob3RlbHMmdXRtX21lZGl1bT1iYW5uZXImdXRtX2NhbXBhaWduPXplbnJ1c1wiXG4vLyAgICAgICAgfSxcbi8vICAgICAgICB7XG4vLyAgICAgICAgICAgIHRpdGxlOiBcItCe0YLQtdC70Lgg0LIg0JrQsNC30LDQvdC4INCyINC90L7QstC+0LPQvtC00L3RjtGOINC90L7Rh9GMINGC0LXQv9C10YDRjCDQvtGCIDIxINCV0LLRgNC+XCIsXG4vLyAgICAgICAgICAgIGhyZWY6IFwiaHR0cDovL3d3dy5vbmV0d290cmlwLmNvbS9ydS9ob3RlbHMvP3V0bV9zb3VyY2U9emVucnVzX2hvdGVscyZ1dG1fbWVkaXVtPWJhbm5lciZ1dG1fY2FtcGFpZ249emVucnVzI2hvdGVscy9idGozOjUzMTAvZDozMTEyLDAxMDEvcDoyMFwiXG4vLyAgICAgICAgfSxcbi8vICAgICAgICB7XG4vLyAgICAgICAgICAgIHRpdGxlOiBcItCd0L7QstC+0LPQvtC00L3QuNC5INGB0LDQu9GO0YIg0LjQtyDQvtC60L3QsCA0KiDQnNCw0YDQuNC+0YLRgtCwINC90LAg0JLQsNGB0LjQu9GM0LXQstGB0LrQvtC8INC+0YHRgtGA0L7QstC1INGC0LXQv9C10YDRjCDQstGB0LXQs9C+IDcwINCV0LLRgNC+XCIsXG4vLyAgICAgICAgICAgIGhyZWY6IFwiaHR0cDovL3d3dy5vbmV0d290cmlwLmNvbS9ydS9ob3RlbC9SVS9TYWludC1QZXRlcnNidXJnL0NvdXJ0eWFyZC1ieS1NYXJyaW90dC1TdC4tUGV0ZXJzYnVyZy1WYXNpbGlldnNreS0yOTYxMjY/ZGF0ZV9zdGFydD0yMDE0LTEyLTMxJmRhdGVfZW5kPTIwMTUtMDEtMDEmcGVyc29ucz0yLDAmc2NfdHlwZT1nZW8mc2M9NDk4ODE3JnV0bV9zb3VyY2U9emVucnVzX2hvdGVscyZ1dG1fbWVkaXVtPWJhbm5lciZ1dG1fY2FtcGFpZ249emVucnVzXCJcbi8vICAgICAgICB9LFxuLy8gICAgICAgIHtcbi8vICAgICAgICAgICAgdGl0bGU6IFwi0JIg0J/QuNGC0LXRgNC1INC00LDQttC1INCyINC90L7QstC+0LPQvtC00L3RjtGOINC90L7Rh9GMINC+0YLQtdC70Lgg0YHRgtC+0Y/RgiDQvtGCIDI0INCV0LLRgNC+XCIsXG4vLyAgICAgICAgICAgIGhyZWY6IFwiaHR0cDovL3d3dy5vbmV0d290cmlwLmNvbS9ydS9ob3RlbHMvP3V0bV9zb3VyY2U9emVucnVzX2hvdGVscyZ1dG1fbWVkaXVtPWJhbm5lciZ1dG1fY2FtcGFpZ249emVucnVzI2hvdGVscy9hb3cxOjUzMTAvZDozMTEyLDAxMDEvcDoyMFwiXG4vLyAgICAgICAgfSxcbi8vICAgICAgICB7XG4vLyAgICAgICAgICAgIHRpdGxlOiBcItCh0LvQtdGC0LDRgtGMINCyINCd0L7QstGL0Lkg0JPQvtC0INCyINCa0LDQt9Cw0L3RjCAg0LzQvtC20L3QviDQt9CwICAxMzAg0JXQstGA0L5cIixcbi8vICAgICAgICAgICAgaHJlZjogXCJodHRwOi8vd3d3Lm9uZXR3b3RyaXAuY29tL3J1L2F2aWFiaWxldHkvbW9zY293LWthemFuX01PVy1LWk4vP3V0bV9zb3VyY2U9emVucnVzX2hvdGVscyZ1dG1fbWVkaXVtPWJhbm5lciZ1dG1fY2FtcGFpZ249emVucnVzIzI5MTJNT1dLWk4wMjAxJnN8U1V8MVwiXG4vLyAgICAgICAgfSxcbi8vICAgICAgICB7XG4vLyAgICAgICAgICAgIHRpdGxlOiBcItCe0YLQtdC70Lgg0LIg0KHQvtGH0Lgg0LTQsNC20LUg0LIg0L3QvtCy0L7Qs9C+0LTQvdGO0Y4g0L3QvtGH0Ywg0L7RgiA4MCDQldCy0YDQvlwiLFxuLy8gICAgICAgICAgICBocmVmOiBcImh0dHA6Ly93d3cub25ldHdvdHJpcC5jb20vcnUvaG90ZWxzLz91dG1fc291cmNlPXplbnJ1c19ob3RlbHMmdXRtX21lZGl1bT1iYW5uZXImdXRtX2NhbXBhaWduPXplbnJ1cyNob3RlbHMvYWo2bTo1MzEwL2Q6MzExMiwwMTAxL3A6MjBcIlxuLy8gICAgICAgIH0sXG4vLyAgICAgICAge1xuLy8gICAgICAgICAgICB0aXRsZTogXCLQntGC0LvQuNGH0L3Ri9C5INC+0YLQtdC70YwgINC90LAg0LrRg9GA0L7RgNGC0LUg0KDQvtC30LAg0KXRg9GC0L7RgCDQsiDQvdC+0LLQvtCz0L7QtNC90Y7RjiDQvdC+0YfRjCDQstGB0LXQs9C+IDExMyDQldCy0YDQvlwiLFxuLy8gICAgICAgICAgICBocmVmOiBcImh0dHA6Ly93d3cub25ldHdvdHJpcC5jb20vcnUvaG90ZWwvUlUvRXN0b3NhZG9rL01FUkNVUkUtUm9zYS1LaHV0b3ItSG90ZWwtOTE2NjYzP2RhdGVfc3RhcnQ9MjAxNC0xMi0zMSZkYXRlX2VuZD0yMDE1LTAxLTAxJnBlcnNvbnM9MiwwJnNjX3R5cGU9Z2VvJnNjPTQ5MTQyMiZ1dG1fc291cmNlPXplbnJ1c19ob3RlbHMmdXRtX21lZGl1bT1iYW5uZXImdXRtX2NhbXBhaWduPXplbnJ1c1wiXG4vLyAgICAgICAgfSxcbi8vICAgICAgICB7XG4vLyAgICAgICAgICAgIHRpdGxlOiBcItCSINCa0YDQsNGB0L3QvtC5INCf0L7Qu9GP0L3QtSDQtNCw0LbQtSDQsiDQndC+0LLRi9C5INCT0L7QtCDQvNC+0LbQvdC+INC90LDQudGC0Lgg0L7RgtC10LvRjCDQt9CwIDUzINCV0LLRgNC+XCIsXG4vLyAgICAgICAgICAgIGhyZWY6IFwiaHR0cDovL3d3dy5vbmV0d290cmlwLmNvbS9ydS9ob3RlbC9SVS9LcmFzbmF5YS1Qb2x5YW5hL09seW1waWEtSG90ZWwtMjQ1NDgxOD9kYXRlX3N0YXJ0PTIwMTQtMTItMzEmZGF0ZV9lbmQ9MjAxNS0wMS0wMSZwZXJzb25zPTIsMCZzY190eXBlPWdlbyZzYz00OTE0MjImdXRtX3NvdXJjZT16ZW5ydXNfaG90ZWxzJnV0bV9tZWRpdW09YmFubmVyJnV0bV9jYW1wYWlnbj16ZW5ydXNcIlxuLy8gICAgICAgIH0sXG4vLyAgICAgICAge1xuLy8gICAgICAgICAgICB0aXRsZTogXCLQodC70LXRgtCw0YLRjCDQsiDQndC+0LLRi9C5INCT0L7QtCDQsiDQodC+0YfQuCDQvNC+0LbQvdC+INC30LAgMTQwINCV0LLRgNC+XCIsXG4vLyAgICAgICAgICAgIGhyZWY6IFwiaHR0cDovL3d3dy5vbmV0d290cmlwLmNvbS9ydS9hdmlhYmlsZXR5L21vc2Nvdy1zb2NoaV9NT1ctQUVSLz91dG1fc291cmNlPXplbnJ1c19ob3RlbHMmdXRtX21lZGl1bT1iYW5uZXImdXRtX2NhbXBhaWduPXplbnJ1cyMyOTEyTU9XQUVSMDMwMSZzXCJcbi8vICAgICAgICB9LFxuLy8gICAgICAgIHtcbi8vICAgICAgICAgICAgdGl0bGU6IFwi0KHQu9C10YLQsNGC0Ywg0LIg0J3QvtCy0YvQuSDQk9C+0LQg0LIg0J/QuNGC0LXRgCDQvNC+0LbQvdC+INC30LAgODcg0JXQstGA0L5cIixcbi8vICAgICAgICAgICAgaHJlZjogXCJodHRwOi8vd3d3Lm9uZXR3b3RyaXAuY29tL3J1L2F2aWFiaWxldHkvbW9zY293LXN0X3BldGVyc2J1cmdfTU9XLUxFRC8/dXRtX3NvdXJjZT16ZW5ydXNfaG90ZWxzJnV0bV9tZWRpdW09YmFubmVyJnV0bV9jYW1wYWlnbj16ZW5ydXMjMjkxMk1PV0xFRDAyMDEmc1wiXG4vLyAgICAgICAgfSxcbi8vICAgICAgICB7XG4vLyAgICAgICAgICAgIHRpdGxlOiBcItCS0YHRgtGA0LXRgtC40YLRjCDQndC+0LLRi9C5INCz0L7QtCDQvdCwINCz0L7RgNC90L7Qu9GL0LbQvdC+0Lwg0LrRg9GA0L7RgNGC0LUg0J/RgNC40Y3Qu9GM0LHRgNGD0YHRjNGPINCy0YHQtdCz0L4g0LfQsCA2MCDQtdCy0YDQvlwiLFxuLy8gICAgICAgICAgICBocmVmOiBcImh0dHA6Ly93d3cub25ldHdvdHJpcC5jb20vcnUvaG90ZWwvUlUvVGVyc2tvbC9Pem9uLUNoZWdldC0yMjY5MjQ1P2RhdGVfc3RhcnQ9MjAxNC0xMi0zMSZkYXRlX2VuZD0yMDE1LTAxLTAxJnBlcnNvbnM9MiwwJnNjX3R5cGU9aG90ZWwmc2M9NDgzMjY5JnV0bV9zb3VyY2U9emVucnVzX2hvdGVscyZ1dG1fbWVkaXVtPWJhbm5lciZ1dG1fY2FtcGFpZ249emVucnVzJmxhbmc9cnUmbG9jYWxlPXJ1XCJcbi8vICAgICAgICB9XG4vLyAgICBdO1xuLy9cbi8vICAgIHZhciBvdHRMaW5rID0ge1xuLy8gICAgICAgIHRpdGxlOiBcItCS0L7Qt9Cy0YDQsNGJ0LDQudGC0LUg0LTQviA1JSDRgSDQutCw0LbQtNC+0Lkg0L/QvtC60YPQv9C60Lgg0L/QviDQutCw0YDRgtC1INC70L7Rj9C70YzQvdC+0YHRgtC4IE9uZVR3b1RyaXBcIixcbi8vICAgICAgICBocmVmOiBcImh0dHA6Ly93d3cub25ldHdvdHJpcC5jb20vcnUvcHJvbW8vdGNzYmFua19zLz91dG1fc291cmNlPXplbnJ1c19ob3RlbHMmdXRtX21lZGl1bT1iYW5uZXImdXRtX2NhbXBhaWduPXplbnJ1c1wiXG4vLyAgICB9XG4vL1xuLy9cbi8vICAgIGZ1bmN0aW9uIHNodWZmbGUobykgeyAvL3YxLjBcbi8vICAgICAgICBmb3IgKHZhciBqLCB4LCBpID0gby5sZW5ndGg7IGk7IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpKSwgeCA9IG9bLS1pXSwgb1tpXSA9IG9bal0sIG9bal0gPSB4KTtcbi8vICAgICAgICByZXR1cm4gbztcbi8vICAgIH07XG4vL1xuLy8gICAgdmFyIGN1cnJlbnRJdGVtID0gMDtcbi8vICAgIHZhciAkY29udGFpbmVyID0gJCgnLmJvdHRvbS1yb3RhdG9yJyk7XG4vL1xuLy8gICAgaXRlbXMgPSBzaHVmZmxlKGl0ZW1zKVxuLy9cbi8vICAgIGl0ZW1zLnNwbGljZSgzLCAwLCBvdHRMaW5rKTtcbi8vICAgIGl0ZW1zLnNwbGljZSg3LCAwLCBvdHRMaW5rKTtcbi8vICAgIGl0ZW1zLnNwbGljZSgxMiwgMCwgb3R0TGluayk7XG4vL1xuLy8gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4vLyAgICAgICAgdmFyIHNob3dGdW5jID0gYXJndW1lbnRzLmNhbGxlZVxuLy8gICAgICAgIHZhciAkYSA9ICQoJzxhIGhyZWY9XCInICsgaXRlbXNbY3VycmVudEl0ZW1dWydocmVmJ10gKyAnXCIgdGFyZ2V0PVwiX2JsYW5rXCI+JyArIGl0ZW1zW2N1cnJlbnRJdGVtXVsndGl0bGUnXSArICc8L2E+Jyk7XG4vLyAgICAgICAgJGNvbnRhaW5lci5hcHBlbmQoJGEpO1xuLy8gICAgICAgICRjb250YWluZXIuYWRkQ2xhc3MoJ3Nob3duJyk7XG4vLyAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4vLyAgICAgICAgICAgICRjb250YWluZXIucmVtb3ZlQ2xhc3MoJ3Nob3duJyk7XG4vLyAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuLy8gICAgICAgICAgICAgICAgJGEucmVtb3ZlKCk7XG4vLyAgICAgICAgICAgICAgICBjdXJyZW50SXRlbSsrXG4vLyAgICAgICAgICAgICAgICBpZiAoY3VycmVudEl0ZW0gPj0gaXRlbXMubGVuZ3RoKSBjdXJyZW50SXRlbSA9IDA7XG4vLyAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHNob3dGdW5jLCAyMDAwKTtcbi8vICAgICAgICAgICAgfSwgMjAwMCk7XG4vLyAgICAgICAgfSwgMTMwMDApO1xuLy9cbi8vXG4vLyAgICB9LCAyMDAwKVxuLy9cbi8vfSk7IiwiLy8kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4vLyAgICB2YXIgZmlyc3REZWxheSA9IDEwMDAwO1xuLy8gICAgdmFyIGludGVyQ3ljbGVEZWxheSA9IDMwMDAwO1xuLy8gICAgdmFyIGxldHRlckFwcGVhcmluZ0RlbGF5ID0gOTA7XG4vLyAgICB2YXIgb25lUGhyYXNlVGltZSA9IDMwMDA7XG4vLyAgICB2YXIgaW50ZXJQaHJhc2VUaW1lID0gMTAwO1xuLy8gICAgaWYgKCQoJy50b3AtY2VudGVyLWxvZ28tbG9nbycpLmxlbmd0aCkge1xuLy8gICAgICAgICQoJy5jZW50ZXItbG9nbycpLmFkZENsYXNzKCdzaG93bicpXG4vLyAgICAgICAgdmFyIGRvQXBwZWFyUGhyYXNlID0gZnVuY3Rpb24gKG5vdGVOdW1iZXIsIGNhbGxiYWNrKSB7XG4vLyAgICAgICAgICAgIHZhciBzZWxmID0gYXJndW1lbnRzLmNhbGxlZTtcbi8vICAgICAgICAgICAgdmFyICRkaXYgPSAkKCcudG9wLWNlbnRlci1sb2dvLWxvZ28gLm5vdGUtJyArIG5vdGVOdW1iZXIpLmVtcHR5KCk7XG4vLyAgICAgICAgICAgIHZhciB0ZXh0ID0gJGRpdi5kYXRhKCd0ZXh0JykgfHwgJyc7XG4vLyAgICAgICAgICAgIHZhciBjdXJyZW50TGV0dGVyUG9zaXRpb24gPSAxO1xuLy8gICAgICAgICAgICAkZGl2LmZhZGVJbigxNDAwLCBmdW5jdGlvbiAoKSB7XG4vLyAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbi8vICAgICAgICAgICAgICAgICAgICBpZiAodGV4dCkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAkZGl2LnRleHQodGV4dC5zdWJzdHJpbmcoMCwgY3VycmVudExldHRlclBvc2l0aW9uKSlcbi8vICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudExldHRlclBvc2l0aW9uKys7XG4vLyAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0ICYmIGN1cnJlbnRMZXR0ZXJQb3NpdGlvbiA8PSB0ZXh0Lmxlbmd0aCkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGFyZ3VtZW50cy5jYWxsZWUsIGxldHRlckFwcGVhcmluZ0RlbGF5KTtcbi8vICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICRkaXYuZmFkZU91dCgxNDAwLCBmdW5jdGlvbiAoKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vdGVOdW1iZXIgPCAzKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZihub3RlTnVtYmVyICsgMSwgY2FsbGJhY2spXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGludGVyUGhyYXNlVGltZSlcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICB9LCBvbmVQaHJhc2VUaW1lKVxuLy8gICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgIH0sIGxldHRlckFwcGVhcmluZ0RlbGF5KVxuLy8gICAgICAgICAgICB9KVxuLy9cbi8vICAgICAgICB9O1xuLy9cbi8vICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbi8vICAgICAgICAgICAgdmFyIGN5Y2xlU3RhcnQgPSBhcmd1bWVudHMuY2FsbGVlO1xuLy8gICAgICAgICAgICBkb0FwcGVhclBocmFzZSgxLCBmdW5jdGlvbiAoKSB7XG4vLyAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGN5Y2xlU3RhcnQsIGludGVyQ3ljbGVEZWxheSlcbi8vICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgfSwgZmlyc3REZWxheSk7XG4vLyAgICB9XG4vL1xuLy99KTsiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuXHQkKFwiLnRvcC1jZW50ZXItbG9nby1sb2dvXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG5cdFx0eWFDb3VudGVyMjczNzg2NTkucmVhY2hHb2FsKCdUTV9DTElDSycpO1xuXHR9KVxuXG4gICAgdmFyIGZpcnN0RGVsYXkgPSAxMDAwO1xuICAgIHZhciBpbnRlckN5Y2xlRGVsYXkgPSAzMDAwMDtcbiAgICB2YXIgbGV0dGVyQXBwZWFyaW5nRGVsYXkgPSA5MDtcbiAgICB2YXIgb25lUGhyYXNlVGltZSA9IDMwMDA7XG4gICAgdmFyIGludGVyUGhyYXNlVGltZSA9IDEwMDtcbiAgICBpZiAoJCgnLnRvcC1jZW50ZXItbG9nby1sb2dvJykubGVuZ3RoKSB7XG4gICAgICAgICQoJy5jZW50ZXItbG9nbycpLmFkZENsYXNzKCdzaG93bicpXG4gICAgICAgIHZhciBkb0FwcGVhclBocmFzZSA9IGZ1bmN0aW9uIChub3RlTnVtYmVyLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSBhcmd1bWVudHMuY2FsbGVlO1xuICAgICAgICAgICAgdmFyICRkaXYgPSAkKCcudG9wLWNlbnRlci1sb2dvLWxvZ28gLm5vdGUtJyArIG5vdGVOdW1iZXIpLmVtcHR5KCk7XG4gICAgICAgICAgICB2YXIgdGV4dCA9ICRkaXYuZGF0YSgndGV4dCcpIHx8ICcnO1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRMZXR0ZXJQb3NpdGlvbiA9IDE7XG4gICAgICAgICAgICAkZGl2LmZhZGVJbigxNDAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkZGl2LnRleHQodGV4dC5zdWJzdHJpbmcoMCwgY3VycmVudExldHRlclBvc2l0aW9uKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRMZXR0ZXJQb3NpdGlvbisrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0ICYmIGN1cnJlbnRMZXR0ZXJQb3NpdGlvbiA8PSB0ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChhcmd1bWVudHMuY2FsbGVlLCBsZXR0ZXJBcHBlYXJpbmdEZWxheSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZGl2LmZhZGVPdXQoMTQwMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobm90ZU51bWJlciA8IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYobm90ZU51bWJlciArIDEsIGNhbGxiYWNrKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgaW50ZXJQaHJhc2VUaW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgb25lUGhyYXNlVGltZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIGxldHRlckFwcGVhcmluZ0RlbGF5KVxuICAgICAgICAgICAgfSlcblxuICAgICAgICB9O1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGN5Y2xlU3RhcnQgPSBhcmd1bWVudHMuY2FsbGVlO1xuICAgICAgICAgICAgZG9BcHBlYXJQaHJhc2UoMSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoY3ljbGVTdGFydCwgaW50ZXJDeWNsZURlbGF5KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGZpcnN0RGVsYXkpO1xuICAgIH1cblxufSk7IiwidmFyIERhdGEgPSB7XG5cbiAgICBxdW90ZXM6IHswOiAndXNkJywgMTogJ2V1cicsIDI6ICdicmVudCcsIDk6ICdiaXRjb2luJywgMTA6ICdldGgnLCAxMTogJ2JjaCd9LFxuICAgIGVsZW1lbnRzOiB7fSxcblxuICAgICRjbGllbnRzT25saW5lOiAkKCcuY2xpZW50cy1vbmxpbmUgc3BhbicpLFxuICAgICRib2R5OiAkKCdib2R5JyksXG4gICAgJHJ1YmJyZW50OiAkKCcucnViYnJlbnQnKSxcbiAgICAkZXVydXNkOiAkKCcuZXVydXNkJyksXG5cbiAgICBzaG93ZWQ6IGZhbHNlLFxuXG4gICAgbGFzdFZhbHVlc1VwZGF0ZTogWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuXG4gICAgdmFsdWVzVXBkYXRlSW50ZXJ2YWw6IDIwMDAsXG4gICAgdXNlcnNVcGRhdGVJbnRlcnZhbDogNDAwMCxcblxuICAgIGluaXRFbGVtZW50czogZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMucXVvdGVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5xdW90ZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzW2ldID0ge307XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50c1tpXS4kY29udGFpbmVyID0gJCgnW2RhdGEtaXRlbS1uYW1lPScgKyB0aGlzLnF1b3Rlc1tpXSArICddJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50c1tpXS4kY2VsbCA9IHRoaXMuZWxlbWVudHNbaV0uJGNvbnRhaW5lci5maW5kKCcudmFsdWUnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzW2ldLiRub3RlID0gdGhpcy5lbGVtZW50c1tpXS4kY29udGFpbmVyLmZpbmQoJy5ub3RlOmZpcnN0IHNwYW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIHVwZGF0ZVZhbHVlczogZnVuY3Rpb24gKGN1cnJlbnQpIHtcbiAgICAgICAgLy8gdXBkYXRlIG1haW4gdmFsdWVzXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucXVvdGVzKTtcbiAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLnF1b3Rlcykge1xuICAgICAgICAgICAgaWYgKChuZXcgRGF0ZSkuZ2V0VGltZSgpIC0gdGhpcy5sYXN0VmFsdWVzVXBkYXRlW2ldID4gdGhpcy52YWx1ZXNVcGRhdGVJbnRlcnZhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdFZhbHVlc1VwZGF0ZVtpXSA9IChuZXcgRGF0ZSkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgIGlmICghaXNOYU4oY3VycmVudFtpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gOSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmJpdGNvaW4nKS5jc3MoJ29wYWNpdHknLCAuNylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAxMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmV0aCcpLmNzcygnb3BhY2l0eScsIC43KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09IDExKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuYmNoJykuY3NzKCdvcGFjaXR5JywgLjcpXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgc2lnbkNsYXNzID0gVXRpbC5nZXRTaWduQ2xhc3MoY3VycmVudFtpXSwgdGhpcy5lbGVtZW50c1tpXS4kY2VsbC50ZXh0KCksIGkgPT0gMCB8fCBpID09IDEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2lnbkNsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzW2ldLiRjb250YWluZXIucmVtb3ZlQ2xhc3MoJ3BsdXMnKS5yZW1vdmVDbGFzcygnbWludXMnKVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50c1tpXS4kY29udGFpbmVyLmFkZENsYXNzKHNpZ25DbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHNbaV0uJGNlbGwudGV4dChVdGlsLmZvcm1hdEZsb2F0VmFsKGN1cnJlbnRbaV0sIGkgPj0gOSA/IDEgOiAyKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnRzW2ldLiRub3RlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50c1tpXS4kbm90ZS50ZXh0KFV0aWwucGx1cmFsaXplKGN1cnJlbnRbaV0sIGkgPCAyID8gWyfRgNGD0LHQu9GMJywgJ9GA0YPQsdC70Y8nLCAn0YDRg9Cx0LvQtdC5J10gOiBbJ9C00L7Qu9C70LDRgCcsICfQtNC+0LvQu9Cw0YDQsCcsICfQtNC+0LvQu9Cw0YDQvtCyJ10pKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdXBkYXRlIHN1YiB2YWx1ZXNcbiAgICAgICAgdmFyIHJ1YkJyZW50ID0gY3VycmVudFswXSAqIGN1cnJlbnRbMl07XG4gICAgICAgIHRoaXMuJHJ1YmJyZW50LnRleHQoTWF0aC5yb3VuZChydWJCcmVudCkgKyAnICcgKyBVdGlsLnBsdXJhbGl6ZShydWJCcmVudCwgWyfRgNGD0LHQu9GMJywgJ9GA0YPQsdC70Y8nLCAn0YDRg9Cx0LvQtdC5J10pICsgJyDQt9CwINCx0LDRgNGA0LXQu9GMJyk7XG4gICAgICAgIHRoaXMuJGV1cnVzZC50ZXh0KCdFVVIvVVNEOiAnICsgVXRpbC5mb3JtYXRGbG9hdFZhbChjdXJyZW50WzFdIC8gY3VycmVudFswXSwgMikpO1xuXG4gICAgICAgIC8vJCgnLmNvdyBzcGFuJykudGV4dChNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqMTArNDApKTtcblxuICAgICAgICAvLyB1cGRhdGUgY2xpZW50cyBpbmxpbmVcbiAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50WzNdICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2hvd2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kY2xpZW50c09ubGluZS5wYXJlbnQoKS5hZGRDbGFzcygnc2hvd2VkJylcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKG5ldyBEYXRlKS5nZXRUaW1lKCkgLSB0aGlzLmxhc3RWYWx1ZXNVcGRhdGVbM10gPiB0aGlzLnVzZXJzVXBkYXRlSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RWYWx1ZXNVcGRhdGVbM10gPSAobmV3IERhdGUpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRjbGllbnRzT25saW5lLnRleHQoY3VycmVudFszXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICQoJy56dnItdmFsJykudGV4dChjdXJyZW50WzZdKTtcbiAgICAgICAgJCgnLnJlc2VydmUtdmFsJykudGV4dChjdXJyZW50WzddKTtcbiAgICAgICAgJCgnLm5hdGlvbmFsLXZhbCcpLnRleHQoY3VycmVudFs4XSk7XG4gICAgICAgICQoJy5ya24gYScpLnRleHQoY3VycmVudFsxMl0gPyBNYXRoLnJvdW5kKHBhcnNlSW50KGN1cnJlbnRbMTJdKSAvIDEwMDAwMCkgLyAxMCA6ICcuLi4nKTtcblxuXG4gICAgfSxcblxuICAgIGluaXRXYXRjaERvZzogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoKG5ldyBEYXRlKS5nZXRUaW1lKCkgLSBfdGhpcy5sYXN0VmFsdWVzVXBkYXRlWzNdID4gMTIwKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuaW5pdFdlYlNvY2tldHMoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAzNjAwMDAwKTtcblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9LCAzNjAwMDAwKTtcbiAgICB9LFxuXG4gICAgaW5pdFdlYlNvY2tldHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGNvbm4gPSBuZXcgV2ViU29ja2V0KCd3czovLycgKyBVdGlsLmdldE1haW5Eb21haW5QYXJ0KCkgKyAnOjg4ODgnKTtcbiAgICAgICAgY29ubi5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgX3RoaXMudXBkYXRlVmFsdWVzKGUuZGF0YS5zcGxpdCgnOycpKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pbml0V2F0Y2hEb2coKTtcblxuICAgIH0sXG5cbiAgICB1cGRhdGVWaWV3OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJyNjb250YWluZXIgLnF1b3RlcycpLnRvZ2dsZSghU2V0dGluZ3MuZ2V0T3RoZXIoJ2hpZGVEYXRhJykpO1xuICAgICAgICAkKCcjY29udGFpbmVyIC5ub3RlLmNvbW1lbnQnKS50b2dnbGUoIVNldHRpbmdzLmdldE90aGVyKCdoaWRlTm90ZXMnKSk7XG4gICAgICAgICQoJyNjb250YWluZXIgLm5vdGUuYWRkaXRpb25hbCcpLnRvZ2dsZSghU2V0dGluZ3MuZ2V0T3RoZXIoJ2hpZGVBZGRpdGlvbmFsRGlnaXRzJykpO1xuICAgICAgICAkKCcuZGF0ZXRpbWUnKS50b2dnbGUoIVNldHRpbmdzLmdldE90aGVyKCdoaWRlQ2xvY2snKSk7XG4gICAgfSxcblxuICAgIGluaXQ6IGZ1bmN0aW9uIChjdXJyZW50KSB7XG4gICAgICAgIHRoaXMuaW5pdEVsZW1lbnRzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWVzKGN1cnJlbnQpO1xuICAgICAgICB0aGlzLmluaXRXZWJTb2NrZXRzKClcbiAgICB9XG59XG4iLCJ2YXIgSW50cm9UZWFzZXJzID0ge1xuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pbml0SW50cm8oKTtcbiAgICAgICAgdGhpcy5pbml0QXBwTW9iaWxlVGVhc2VyKCk7XG4gICAgfSxcblxuICAgIGluaXRBcHBNb2JpbGVUZWFzZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKFV0aWwuaXNNb2JpbGUoKSkge1xuICAgICAgICAgICAgaWYgKCQoXCIuYXBwLXRlYXNlci1wb3B1cFwiKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAkKFwiLmFwcC10ZWFzZXItcG9wdXBcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoZS50YXJnZXQpLmlzKCcuYXBwLXRlYXNlci1wb3B1cCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ21vYmlsZS10ZWFzZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5hcHAtdGVhc2VyLXBvcHVwJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJChcIi5hcHAtdGVhc2VyLXBvcHVwIGFcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkLmNvb2tpZSgnYXBwVGVhc2VyU2hvd2VkJywgMSwge2V4cGlyZXM6IDEwMDB9KTtcbiAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdtb2JpbGUtdGVhc2VyJyk7XG4gICAgICAgICAgICAgICAgICAgICQoJy5hcHAtdGVhc2VyLXBvcHVwJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5pcygnLmFwcC1ubycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaXMoJy5idG4tYW5kcm9pZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB5YUNvdW50ZXIyNzM3ODY1OS5yZWFjaEdvYWwoJ0FQUF9URUFTRVJfQU5EUk9JRCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmlzKCcuYnRuLWFwcGxlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHlhQ291bnRlcjI3Mzc4NjU5LnJlYWNoR29hbCgnQVBQX1RFQVNFUl9BUFBMRScpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoISQuY29va2llKCdhcHBUZWFzZXJTaG93ZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdtb2JpbGUtdGVhc2VyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuYXBwLXRlYXNlci1wb3B1cCcpLmZhZGVJbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgeWFDb3VudGVyMjczNzg2NTkucmVhY2hHb2FsKCdBUFBfVEVBU0VSJyk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGluaXRJbnRybzogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIVV0aWwuaXNNb2JpbGUoKSkge1xuICAgICAgICAgICAgaWYgKCEkLmNvb2tpZSgnaW50cm9BbHJlYWR5U2hvd2VkJykpIHtcbiAgICAgICAgICAgICAgICAkKCcudmlkZW8tZmFkZXInKS5hZGRDbGFzcygnZmFkZWQnKTtcbiAgICAgICAgICAgICAgICAkKCcubmV3LXNldHRpbmdzLXRlYXNlciwgLm5ldy1hcHBzLXRlYXNlcicpLmFkZENsYXNzKCdzaG93ZWQnKTtcbiAgICAgICAgICAgICAgICAkLmNvb2tpZSgnaW50cm9BbHJlYWR5U2hvd2VkJywgMSwge2V4cGlyZXM6IDEwMDB9KTtcbiAgICAgICAgICAgICAgICB2YXIgZG9jdW1lbnRDbGlja0hhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAkKCcudmlkZW8tZmFkZXInKS5yZW1vdmVDbGFzcygnZmFkZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLm5ldy1zZXR0aW5ncy10ZWFzZXIsIC5uZXctYXBwcy10ZWFzZXInKS5yZW1vdmVDbGFzcygnc2hvd2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZG9jdW1lbnRDbGlja0hhbmRsZXIsIHRydWUpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRvY3VtZW50Q2xpY2tIYW5kbGVyLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJ2YXIgTXVzaWMgPSB7XG4gICAgbXVzaWNUcmFja3M6IFsnVGhhaScsICdCZWFjaCcsICdCbHVlIExpbmUgTG9vcCcsICdDb3Ntb3MnLCAnT2NlYW4nLCAnRGF5IGFuZCBOaWdodCcsICdEcmVhbSBvZiBXaW5ncycsICdGaXJlJywgJ0dsYXNzIG9mIGhvcGUnLCAnSGVhbGluZycsICdTcGEgQmVsbHMnLCAnSW5uZXIgY2lyY2xlJywgJ01vb24gR2FyZGVuJywgJ01vcm5pbmcgU3VuJywgJ1Nvbmcgb2YgV2luZCcsICdUaGUgTGlnaHQnLCAnR2V0IHRob3NlIHZpYmVzJywgJ1RoZSBuaWdodCBzdWInXSxcbiAgICBjdXJyZW50TXVzaWM6ICQuY29va2llKCdtdXNpYycpLFxuICAgICRtdXNpY0N5Y2xlQ2hlY2tib3g6ICQoJyNtdXNpYy1jeWNsZScpLFxuICAgICRtdXNpY0VuYWJsZUNoZWNrYm94OiAkKCcjbXVzaWMtZW5hYmxlJyksXG4gICAgJGNvbnRhaW5lcjogJCgnLnRhYi1tdXNpYyAuc2Nyb2xsLWNvbnRhaW5lcicpLFxuICAgIHBsYXllck9iamVjdDogbmV3IGJ1enouc291bmQoKSxcblxuICAgIGluaXRTd2l0Y2hlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgJHN3aXRjaGVyQ29udGFpbmVyID0gJCgnLmF1ZGlvLXN3aXRjaGVyJyk7XG4gICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5tdXNpY1RyYWNrcykge1xuICAgICAgICAgICAgJHN3aXRjaGVyQ29udGFpbmVyLmFwcGVuZCgnPGEgaHJlZj1cIicgKyB0aGlzLm11c2ljVHJhY2tzW2ldICsgJ1wiICcgKyAodGhpcy5jdXJyZW50TXVzaWMgPT0gdGhpcy5tdXNpY1RyYWNrc1tpXSA/ICdjbGFzcz1cImFjdGl2ZVwiJyA6ICcnKSArICdcIiBkYXRhLW5hbWU9XCInICsgdGhpcy5tdXNpY1RyYWNrc1tpXSArICdcIj4nICsgdGhpcy5tdXNpY1RyYWNrc1tpXSArICc8L2E+Jyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB2aWRlbyBzZWxlY3RvclxuICAgICAgICAkc3dpdGNoZXJDb250YWluZXIub24oJ2NsaWNrJywgJ2EnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgX3RoaXMuc3dpdGNoTXVzaWMoJCh0aGlzKS5hdHRyKCdocmVmJykpO1xuXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjeWNsZSBjaGVja2JveFxuICAgICAgICBfdGhpcy4kbXVzaWNDeWNsZUNoZWNrYm94LmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQuY29va2llKCdjeWNsZU11c2ljJywgJCh0aGlzKS5pcygnOmNoZWNrZWQnKSA/IDEgOiAwLCB7ZXhwaXJlczogMTAwMH0pO1xuICAgICAgICB9KS5wcm9wKCdjaGVja2VkJywgX3RoaXMuaXNBdXRvQ3ljbGVPbigpKVxuXG4gICAgICAgIC8vIG11c2ljIGNoZWNrYm94XG4gICAgICAgIF90aGlzLiRtdXNpY0VuYWJsZUNoZWNrYm94LmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQuY29va2llKCdzb3VuZCcsICQodGhpcykuaXMoJzpjaGVja2VkJykgPyAnJyA6ICdvZmYnLCB7ZXhwaXJlczogMTAwMH0pO1xuICAgICAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy50dXJuT24oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudHVybk9mZigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5wcm9wKCdjaGVja2VkJywgX3RoaXMuaXNNdXNpY09uKCkpO1xuXG4gICAgICAgICQoJy5zb3VuZC1idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIF90aGlzLiRtdXNpY0VuYWJsZUNoZWNrYm94LnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghX3RoaXMuaXNNdXNpY09uKCkpIHtcbiAgICAgICAgICAgIF90aGlzLmRpc2FibGVNdXNpY1VpKCk7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBpc011c2ljT246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICQuY29va2llKCdzb3VuZCcpICE9ICdvZmYnO1xuICAgIH0sXG5cbiAgICBpc0F1dG9DeWNsZU9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAkLmNvb2tpZSgnY3ljbGVNdXNpYycpID09IDE7XG4gICAgfSxcblxuICAgIHR1cm5PZmZBdXRvQ3ljbGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJC5jb29raWUoJ2N5Y2xlTXVzaWMnLCAwKTtcbiAgICAgICAgdGhpcy4kbXVzaWNDeWNsZUNoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSlcbiAgICB9LFxuXG4gICAgc3dpdGNoTXVzaWM6IGZ1bmN0aW9uIChtdXNpYywga2VlcEF1dG9DeWNsZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBjb25zb2xlLmxvZygnc3dpdGNoTXVzaWMnLCBtdXNpYyk7XG4gICAgICAgICQuY29va2llKCdtdXNpYycsIG11c2ljKTtcbiAgICAgICAgLy8gaWYgKGtlZXBBdXRvQ3ljbGUgIT09IHRydWUpIHtcbiAgICAgICAgLy8gICAgIHRoaXMudHVybk9mZkF1dG9DeWNsZSgpO1xuICAgICAgICAvLyB9XG4gICAgICAgIHRoaXMucGxheWVyT2JqZWN0LmZhZGVPdXQoNTAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZmFkZW91dCBjb21wbGV0ZSwgc3RvcHBpbmcnKTtcbiAgICAgICAgICAgIF90aGlzLnBsYXllck9iamVjdC5zdG9wKCkudW5iaW5kKCdzZWVraW5nJyk7XG4gICAgICAgICAgICBfdGhpcy5wbGF5TXVzaWMobXVzaWMpXG4gICAgICAgIH0pXG4gICAgfSxcblxuICAgIHR1cm5PbjogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygndHVybk9uJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVNdXNpY1VpKCk7XG4gICAgICAgIHRoaXMucGxheWVyT2JqZWN0LnBsYXkoKVxuICAgICAgICAgICAgLmZhZGVUbygzMClcbiAgICAgICAgICAgIC5sb29wKCk7XG4gICAgfSxcblxuICAgIHR1cm5PZmY6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlTXVzaWNVaSgpO1xuICAgICAgICB0aGlzLnBsYXllck9iamVjdC5zdG9wKCk7XG4gICAgfSxcblxuICAgIGVuYWJsZU11c2ljVWk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy4kY29udGFpbmVyLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xuICAgICAgICB0aGlzLiRtdXNpY0N5Y2xlQ2hlY2tib3gucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSkucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgICAgICQoJy5zb3VuZC1idXR0b24nKS5yZW1vdmVDbGFzcygndHVybmVkLW9mZicpO1xuICAgIH0sXG5cbiAgICBkaXNhYmxlTXVzaWNVaTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLiRjb250YWluZXIuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgICAgIHRoaXMuJG11c2ljQ3ljbGVDaGVja2JveC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpLnBhcmVudCgpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuICAgICAgICAkKCcuc291bmQtYnV0dG9uJykuYWRkQ2xhc3MoJ3R1cm5lZC1vZmYnKTtcbiAgICB9LFxuXG4gICAgcGxheU11c2ljOiBmdW5jdGlvbiAobXVzaWMpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3BsYXlNdXNpYycsIG11c2ljKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJPYmplY3QgPSBuZXcgYnV6ei5zb3VuZCgnaHR0cDovLycgKyBVdGlsLmdldE1lZGlhU2VydmVyKCkgKyAnL21lZGlhL3NvdW5kcy8nICsgbXVzaWMsIHtcbiAgICAgICAgICAgIGZvcm1hdHM6IFtcIm9nZ1wiLCBcIm1wM1wiLCBcImFhY1wiXSxcbiAgICAgICAgICAgIHZvbHVtZTogMFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdGFydEF1dG9DeWNsZSgpO1xuICAgICAgICBpZiAodGhpcy5pc011c2ljT24oKSkge1xuICAgICAgICAgICAgdGhpcy50dXJuT24oKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzdGFydEF1dG9DeWNsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnBsYXllck9iamVjdC5iaW5kKCdzZWVraW5nJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlZWtpbmcnKTtcbiAgICAgICAgICAgIGlmIChfdGhpcy5pc0F1dG9DeWNsZU9uKCkgJiYgX3RoaXMuaXNNdXNpY09uKCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV4dCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIF90aGlzLm11c2ljVHJhY2tzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2lzQXV0b0N5Y2xlT24uLi4gbmV4dCBpczonLCBuZXh0KTtcbiAgICAgICAgICAgICAgICBfdGhpcy5zd2l0Y2hNdXNpYyhfdGhpcy5tdXNpY1RyYWNrc1tuZXh0XSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgJCgnLmF1ZGlvLXN3aXRjaGVyIGFbZGF0YS1uYW1lPVwiJyArIF90aGlzLm11c2ljVHJhY2tzW25leHRdICsgJ1wiXScpLmFkZENsYXNzKCdhY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0sXG5cbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50TXVzaWMgfHwgdGhpcy5tdXNpY1RyYWNrcy5pbmRleE9mKHRoaXMuY3VycmVudE11c2ljKSA9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TXVzaWMgPSB0aGlzLm11c2ljVHJhY2tzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbml0U3dpdGNoZXIoKTtcbiAgICAgICAgdGhpcy5wbGF5TXVzaWModGhpcy5jdXJyZW50TXVzaWMpO1xuICAgIH1cbn0iLCJ2YXIgUGhvdG8gPSB7XG4gICAgcGhvdG9zOiBbXG4gICAgICAgIFwiMDE4RjZGMDY0Q1wiLFxuICAgICAgICBcIjBjNDEyNTY4XCIsXG4gICAgICAgIFwiMjQ5NDVBMzcyMVwiLFxuICAgICAgICBcIjM5QzM0MURGMDlcIixcbiAgICAgICAgXCI0MEFEMDAyOTNEXCIsXG4gICAgICAgIFwiNUNEMTQ0MTlGM1wiLFxuICAgICAgICBcIjVDRjhFNTcxOEFcIixcbiAgICAgICAgXCI1ZmNiMGE1NVwiLFxuICAgICAgICBcIjZCNENFRjg5MThcIixcbiAgICAgICAgXCI2ZTYwOTU5NVwiLFxuICAgICAgICBcIjdBNTcyRjFCQjVcIixcbiAgICAgICAgXCI5MUE0RDVDQzhBXCIsXG4gICAgICAgIFwiOTNCNTE3MDcyNVwiLFxuICAgICAgICBcIjk4NzRDODMxMDVcIixcbiAgICAgICAgXCI5RTJERjQzOTk0XCIsXG4gICAgICAgIFwiOUVENzY0NTdFOVwiLFxuICAgICAgICBcIkE5NTgzNEE1RDZcIixcbiAgICAgICAgXCJEMEIxMzQ3N0Y1XCIsXG4gICAgICAgIFwiRDI3ODNEQTFGRlwiLFxuICAgICAgICBcIkQ5QTAyNDlEQjFcIixcbiAgICAgICAgXCJGMDI3NzQ0OUJFXCIsXG4gICAgICAgIFwiRjU5RDk2REM3MlwiLFxuICAgICAgICBcIkY3OThBNzA0RUFcIixcbiAgICAgICAgXCJGQTMzM0I4MzBGXCIsXG4gICAgICAgIFwiZWRhMGZiN2NcIixcbiAgICAgICAgXCJwaG90by0xNDE2ODYyMjkxMjA3LTRjYTczMjE0NGQ4M1wiLFxuICAgICAgICBcInBob3RvLTE0MTY5MzQ2MjU3NjAtZDU2ZjVlNzlmNmZlXCIsXG4gICAgICAgIFwicGhvdG8tMTQxNzQzNDc0MzA2MS05ODczZTBiZWFlZDZcIixcbiAgICAgICAgXCJwaG90by0xNDE3NDM2MDI2MzYxLWEwMzMwNDRkOTAxZlwiLFxuICAgICAgICBcInBob3RvLTE0MTkwNjQ2NDI1MzEtZTU3NTcyODM5NWYyXCIsXG4gICAgXSxcbiAgICBjb2xvcnM6IFtcIjAwMDAwMFwiLCBcIjIzMjMyM1wiLCBcIjEyMWQyM1wiLCBcIjA3MWQwNVwiLCBcIjE3MDYxOVwiLCBcIjFiMDAwMFwiXSxcbiAgICBjdXJyZW50UGhvdG86ICQuY29va2llKCdwaG90bzEnKSxcbiAgICBjdXJyZW50Q29sb3I6ICQuY29va2llKCdjb2xvcjEnKSxcbiAgICAkY29udGFpbmVyOiAkKFwiI2NvbnRhaW5lclwiKSxcbiAgICAkcGhvdG9DeWNsZUNoZWNrYm94OiAkKCcjcGhvdG8tY3ljbGUnKSxcbiAgICBhdXRvQ3ljbGVUaW1lOiAzMDAwMCxcbiAgICBjeWNsZVRpbWVyOiBudWxsLFxuXG4gICAgaW5pdFN3aXRjaGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciAkc3dpdGNoZXJDb250YWluZXIgPSAkKCcucGhvdG8tc3dpdGNoZXInKTtcbiAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLmNvbG9ycykge1xuICAgICAgICAgICAgJHN3aXRjaGVyQ29udGFpbmVyLmFwcGVuZCgnPGEgaHJlZj1cIicgKyB0aGlzLmNvbG9yc1tpXSArICdcIiBzdHlsZT1cImJhY2tncm91bmQ6IycgKyB0aGlzLmNvbG9yc1tpXSArICdcIiBjbGFzcz1cIicgKyAoU2V0dGluZ3MuZ2V0QmFja2dyb3VuZE1vZGUoKSA9PSAncGhvdG8nICYmIHRoaXMuY3VycmVudFBob3RvID09IHRoaXMuY29sb3JzW2ldID8gJ2FjdGl2ZScgOiAnJykgKyAnIGNvbG9yXCIgZGF0YS1jb2xvcj1cIicgKyB0aGlzLmNvbG9yc1tpXSArICdcIj48L2E+Jyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLnBob3Rvcykge1xuICAgICAgICAgICAgJHN3aXRjaGVyQ29udGFpbmVyLmFwcGVuZCgnPGEgaHJlZj1cIicgKyB0aGlzLnBob3Rvc1tpXSArICdcIiAnICsgKFNldHRpbmdzLmdldEJhY2tncm91bmRNb2RlKCkgPT0gJ3Bob3RvJyAmJiB0aGlzLmN1cnJlbnRQaG90byA9PSB0aGlzLnBob3Rvc1tpXSA/ICdjbGFzcz1cImFjdGl2ZVwiJyA6ICcnKSArICcgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOnVybChtZWRpYS9waG90by90aF8nICsgdGhpcy5waG90b3NbaV0gKyAnLmpwZylcIiBkYXRhLW5hbWU9XCInICsgdGhpcy5waG90b3NbaV0gKyAnXCI+PC9hPicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcGhvdG8gc2VsZWN0b3JcbiAgICAgICAgJHN3aXRjaGVyQ29udGFpbmVyLm9uKCdjbGljaycsICdhJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIFZpZGVvLm9mZigpO1xuICAgICAgICAgICAgU2V0dGluZ3Muc2V0QmFja2dyb3VuZE1vZGUoJ3Bob3RvJyk7XG4gICAgICAgICAgICBfdGhpcy50dXJuT2ZmQXV0b0N5Y2xlKCk7XG4gICAgICAgICAgICBfdGhpcy5zd2l0Y2hQaG90bygkKHRoaXMpLmF0dHIoJ2hyZWYnKSwgJCh0aGlzKS5kYXRhKCdjb2xvcicpKTtcblxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY3ljbGUgY2hlY2tib3hcbiAgICAgICAgX3RoaXMuJHBob3RvQ3ljbGVDaGVja2JveC5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBWaWRlby5vZmYoKTtcbiAgICAgICAgICAgIFNldHRpbmdzLnNldEJhY2tncm91bmRNb2RlKCdwaG90bycpO1xuICAgICAgICAgICAgJC5jb29raWUoJ2N5Y2xlUGhvdG8nLCAkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpID8gMSA6IDAsIHtleHBpcmVzOiAxMDAwfSk7XG4gICAgICAgICAgICBfdGhpcy5zdGFydEF1dG9DeWNsZSh0cnVlKTtcbiAgICAgICAgfSkucHJvcCgnY2hlY2tlZCcsIF90aGlzLmlzQXV0b0N5Y2xlT24oKSlcblxuICAgIH0sXG5cbiAgICBvZmY6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy50dXJuT2ZmQXV0b0N5Y2xlKCk7XG4gICAgICAgIHRoaXMuJGNvbnRhaW5lci5jc3MoJ2JhY2tncm91bmQnLCAnJyk7XG4gICAgICAgICQoJy5waG90by1zd2l0Y2hlciBhLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblxuICAgIH0sXG5cbiAgICBpc0F1dG9DeWNsZU9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAkLmNvb2tpZSgnY3ljbGVQaG90bycpID09IDE7XG4gICAgfSxcblxuICAgIHR1cm5PZmZBdXRvQ3ljbGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJC5jb29raWUoJ2N5Y2xlUGhvdG8nLCAwKTtcbiAgICAgICAgdGhpcy4kcGhvdG9DeWNsZUNoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSlcbiAgICB9LFxuXG4gICAgc3dpdGNoUGhvdG86IGZ1bmN0aW9uIChwaG90bywgY29sb3IpIHtcbiAgICAgICAgJC5jb29raWUoJ3Bob3RvMScsIHBob3RvLCB7ZXhwaXJlczogMTAwMH0pO1xuICAgICAgICBpZiAodHlwZW9mIGNvbG9yID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAkLmNvb2tpZSgnY29sb3IxJywgJycsIHtleHBpcmVzOiAxMDAwfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkLmNvb2tpZSgnY29sb3IxJywgY29sb3IsIHtleHBpcmVzOiAxMDAwfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaG93UGhvdG8ocGhvdG8sIGNvbG9yKVxuICAgICAgICAvLyQoXCIudmlkZW8tZmFkZXJcIikucmVtb3ZlQ2xhc3MoJ2ZhZGVkLWZ1bGwnKTtcbiAgICB9LFxuXG4gICAgc2hvd1Bob3RvOiBmdW5jdGlvbiAocGhvdG8sIGNvbG9yKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY29sb3IgIT0gXCJ1bmRlZmluZWRcIiAmJiBjb2xvciAhPSBcIlwiKSB7XG4gICAgICAgICAgICB0aGlzLiRjb250YWluZXIuY3NzKCdiYWNrZ3JvdW5kJywgXCIjXCIgKyBjb2xvcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJGNvbnRhaW5lci5jc3MoJ2JhY2tncm91bmQnLCAndXJsKFwibWVkaWEvcGhvdG8vJyArIHBob3RvICsgJy5qcGdcIiknKS5jc3MoJ2JhY2tncm91bmQtc2l6ZScsICdjb3ZlcicpXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RhcnRBdXRvQ3ljbGU6IGZ1bmN0aW9uIChyZXN0YXJ0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBjeWNsZVRpY2tIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLmlzQXV0b0N5Y2xlT24oKSAmJiBTZXR0aW5ncy5nZXRCYWNrZ3JvdW5kTW9kZSgpID09ICdwaG90bycpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV4dCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIF90aGlzLnBob3Rvcy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICQoXCIudmlkZW8tZmFkZXJcIikuYWRkQ2xhc3MoJ2ZhZGVkLWZ1bGwnKTtcbiAgICAgICAgICAgICAgICAkKCcucGhvdG8tc3dpdGNoZXIgYVtkYXRhLW5hbWU9XCInICsgX3RoaXMucGhvdG9zW25leHRdICsgJ1wiXScpLmFkZENsYXNzKCdhY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2hvd1Bob3RvKF90aGlzLnBob3Rvc1tuZXh0XSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJChcIi52aWRlby1mYWRlclwiKS5yZW1vdmVDbGFzcygnZmFkZWQtZnVsbCcpO1xuICAgICAgICAgICAgICAgICAgICB9LCA0MDApO1xuICAgICAgICAgICAgICAgIH0sIDQwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdGFydCA9PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMuY3ljbGVUaW1lcikgY2xlYXJJbnRlcnZhbChfdGhpcy5jeWNsZVRpbWVyKTtcbiAgICAgICAgICAgIGN5Y2xlVGlja0hhbmRsZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLmN5Y2xlVGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjeWNsZVRpY2tIYW5kbGVyKCk7XG4gICAgICAgIH0sIHRoaXMuYXV0b0N5Y2xlVGltZSk7XG4gICAgfSxcblxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRQaG90byB8fCAodGhpcy5waG90b3MuaW5kZXhPZih0aGlzLmN1cnJlbnRQaG90bykgPT0gLTEgJiYgdGhpcy5jb2xvcnMuaW5kZXhPZih0aGlzLmN1cnJlbnRQaG90bykgPT0gLTEpKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQaG90byA9IHRoaXMucGhvdG9zWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbml0U3dpdGNoZXIoKTtcbiAgICAgICAgdGhpcy5zdGFydEF1dG9DeWNsZSgpO1xuICAgICAgICBpZiAoU2V0dGluZ3MuZ2V0QmFja2dyb3VuZE1vZGUoKSA9PSAncGhvdG8nKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dQaG90byh0aGlzLmN1cnJlbnRQaG90bywgdGhpcy5jdXJyZW50Q29sb3IpO1xuICAgICAgICB9XG4gICAgfVxufSIsInZhciBTZXR0aW5nc1BhbmVsID0ge1xuXG4gICAgb3BlbmVkOiBmYWxzZSxcblxuICAgIGluaXRQYW5lbFRvZ2dsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICQoJy5zZXR0aW5ncy1idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIGlmICghX3RoaXMub3BlbmVkKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMub3BlbmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdjbG9zZScpO1xuXG4gICAgICAgICAgICAgICAgJCgnLnNldHRpbmdzLWxheWVyJykuYWRkQ2xhc3MoJ3Nob3duJyk7XG4gICAgICAgICAgICAgICAgJCgnLnNldHRpbmdzLXBhbmVsJykuYWRkQ2xhc3MoJ29wZW5lZCcpO1xuICAgICAgICAgICAgICAgICQoJy5sZWZ0LWFkLXBhbmVsJykuYWRkQ2xhc3MoJ29wZW5lZCcpO1xuICAgICAgICAgICAgICAgICQoJy52aWRlby1mYWRlcicpLmFkZENsYXNzKCdmYWRlZCcpO1xuICAgICAgICAgICAgICAgICQoJy5ib3R0b20tZ29vZ2xlLXBhbmVsJykuaGlkZSgpO1xuICAgICAgICBcdFx0eWFDb3VudGVyMjczNzg2NTkucmVhY2hHb2FsKCdPUEVOX1NFVFRJTkdTJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5vcGVuZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdjbG9zZScpO1xuICAgICAgICAgICAgICAgICQoJy5zZXR0aW5ncy1sYXllcicpLnJlbW92ZUNsYXNzKCdzaG93bicpO1xuICAgICAgICAgICAgICAgICQoJy5zZXR0aW5ncy1wYW5lbCcpLnJlbW92ZUNsYXNzKCdvcGVuZWQnKTtcbiAgICAgICAgICAgICAgICAkKCcubGVmdC1hZC1wYW5lbCcpLnJlbW92ZUNsYXNzKCdvcGVuZWQnKTtcbiAgICAgICAgICAgICAgICAkKCcudmlkZW8tZmFkZXInKS5yZW1vdmVDbGFzcygnZmFkZWQnKTtcbiAgICAgICAgICAgICAgICAkKCcuYm90dG9tLWdvb2dsZS1wYW5lbCcpLnNob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSlcblxuICAgICAgICAkKCcudmlkZW8tZmFkZXInKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMub3BlbmVkKSB7XG4gICAgICAgICAgICAgICAgJCgnLnNldHRpbmdzLWJ1dHRvbicpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLmtleXVwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09IDI3KSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLm9wZW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAkKCcuc2V0dGluZ3MtYnV0dG9uJykudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnLnNldHRpbmdzLWJ1dHRvbicpLnRvZ2dsZUNsYXNzKCdkYXJrJyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGFyZ3VtZW50cy5jYWxsZWUsIDEwMDAwKTtcbiAgICAgICAgfSwgMTAwMDApO1xuXG4gICAgfSxcblxuICAgIGluaXRNZW51OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5zZXR0aW5ncy1wYW5lbCAubWVudSBsaScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgJCgnLnNldHRpbmdzLWNvbnRhaW5lcjplcSgnICsgJCh0aGlzKS5wcmV2QWxsKCkubGVuZ3RoICsgJyknKS5hZGRDbGFzcygnYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH0pXG4gICAgfSxcblxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pbml0UGFuZWxUb2dnbGUoKTtcbiAgICAgICAgdGhpcy5pbml0TWVudSgpO1xuXG4gICAgICAgICQoJy5zZXR0aW5ncy1wYW5lbCAubWVudSBsaTplcSgnICsgKFNldHRpbmdzLmdldEJhY2tncm91bmRNb2RlKCkgPT0gJ3ZpZGVvJyA/IDAgOiAxKSArICcpJykudHJpZ2dlcignY2xpY2snKTtcbiAgICB9XG59IiwidmFyIFNldHRpbmdzID0ge1xuXG4gICAgb3RoZXI6IHtcbiAgICAgICAgaGlkZURhdGE6IGZhbHNlLFxuICAgICAgICBoaWRlTm90ZXM6IGZhbHNlLFxuICAgICAgICBoaWRlQWRkaXRpb25hbERpZ2l0czogZmFsc2UsXG4gICAgICAgIGhpZGVDbG9jazogZmFsc2VcbiAgICB9LFxuXG4gICAgZ2V0QmFja2dyb3VuZE1vZGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG1vZGUgPSAkLmNvb2tpZSgnYmFja2dyb3VuZE1vZGUnKTtcbiAgICAgICAgaWYgKG1vZGUgIT0gJ3ZpZGVvJyAmJiBtb2RlICE9ICdwaG90bycpIG1vZGUgPSAndmlkZW8nO1xuICAgICAgICByZXR1cm4gbW9kZTtcbiAgICB9LFxuXG4gICAgc2V0QmFja2dyb3VuZE1vZGU6IGZ1bmN0aW9uIChtb2RlKSB7XG4gICAgICAgIGlmIChtb2RlICE9ICd2aWRlbycgJiYgbW9kZSAhPSAncGhvdG8nKSBtb2RlID0gJ3ZpZGVvJztcbiAgICAgICAgJC5jb29raWUoJ2JhY2tncm91bmRNb2RlJywgbW9kZSwge2V4cGlyZXM6IDEwMDB9KTtcbiAgICB9LFxuXG4gICAgc2V0T3RoZXI6IGZ1bmN0aW9uIChmaWVsZCwgdmFsKSB7XG4gICAgICAgIHRoaXMub3RoZXJbZmllbGRdID0gdmFsO1xuICAgICAgICB0aGlzLnNhdmUoKTtcbiAgICB9LFxuXG4gICAgZ2V0T3RoZXI6IGZ1bmN0aW9uIChmaWVsZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vdGhlcltmaWVsZF07XG4gICAgfSxcblxuICAgIHNhdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJC5jb29raWUoJ3NldHRpbmdzJywgSlNPTi5zdHJpbmdpZnkodGhpcy5vdGhlciksIHtleHBpcmVzOiAxMDAwfSk7XG4gICAgfSxcblxuICAgIGxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGxvYWRlZERhdGE7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsb2FkZWREYXRhID0gJC5wYXJzZUpTT04oJC5jb29raWUoJ3NldHRpbmdzJykpO1xuICAgICAgICAgICAgdGhpcy5vdGhlciA9IGxvYWRlZERhdGE7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJ2YXIgVXRpbCA9IHtcbiAgICBmb3JtYXRGbG9hdFZhbDogZnVuY3Rpb24gKHZhbCwgZGlnaXRzKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbCkudG9GaXhlZChkaWdpdHMpLnJlcGxhY2UoXCIuXCIsIFwiLFwiKTtcbiAgICB9LFxuXG4gICAgZ2V0U2lnbkNsYXNzOiBmdW5jdGlvbiAodmFsLCBwcmV2VmFsLCBpbnZlcnQpIHtcbiAgICAgICAgdmFsID0gcGFyc2VGbG9hdCh2YWwpLnRvRml4ZWQoMik7XG4gICAgICAgIHByZXZWYWwgPSBwYXJzZUZsb2F0KHByZXZWYWwucmVwbGFjZShcIixcIiwgXCIuXCIpKS50b0ZpeGVkKDIpO1xuICAgICAgICBpZiAodmFsID4gcHJldlZhbCkgcmV0dXJuIGludmVydCA/ICdtaW51cycgOiAncGx1cyc7XG4gICAgICAgIGlmICh2YWwgPCBwcmV2VmFsKSByZXR1cm4gaW52ZXJ0ID8gJ3BsdXMnIDogJ21pbnVzJztcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG5cbiAgICBnZXRNYWluRG9tYWluUGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLnNwbGl0KCcuJykuc2xpY2UoLTIpLmpvaW4oJy4nKTtcbiAgICB9LFxuXG4gICAgcGx1cmFsaXplOiBmdW5jdGlvbiAodmFsdWUsIHN0cmluZ3MpIHtcbiAgICAgICAgdmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlKTtcbiAgICAgICAgaWYgKHZhbHVlID4gMTAwKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICUgMTAwO1xuICAgICAgICB9XG5cbiAgICAgICAgZmlyc3REaWdpdCA9IHZhbHVlICUgMTA7XG4gICAgICAgIHNlY29uZERpZ2l0ID0gTWF0aC5mbG9vcih2YWx1ZSAvIDEwKTtcblxuICAgICAgICBpZiAoc2Vjb25kRGlnaXQgIT0gMSkge1xuICAgICAgICAgICAgaWYgKGZpcnN0RGlnaXQgPT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdHJpbmdzWzBdO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChmaXJzdERpZ2l0ID4gMSAmJiBmaXJzdERpZ2l0IDwgNSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdHJpbmdzWzFdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyaW5nc1syXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdzWzJdO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGdldE1lZGlhU2VydmVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzZXJ2ZXIgPSBcIm1lZGlhMlwiO1xuICAgICAgICAvL3ZhciBybmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMilcbiAgICAgICAgLy9pZiAocm5kIDwgMikge1xuICAgICAgICAvLyAgICBzZXJ2ZXIgPSBcIm1lZGlhMVwiXG4gICAgICAgIC8vfSBlbHNlIGlmIChybmQgPCA0KSB7XG4gICAgICAgIC8vICAgIHNlcnZlciA9IFwibWVkaWEyXCJcbiAgICAgICAgLy99XG5cblxuICAgICAgICByZXR1cm4gc2VydmVyICsgXCIuXCIgKyBVdGlsLmdldE1haW5Eb21haW5QYXJ0KCk7XG4gICAgfSxcblxuICAgIGlzTW9iaWxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoL0FuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpIHx8IC9pUGhvbmV8aVBhZHxpUG9kL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSk7XG4gICAgfVxuXG5cbn1cbiIsInZhciBWaWRlbyA9IHtcbiAgICB2aWRlb3M6IFsnb2NlYW4nLCAnY2xvdWRzJywgJ2dyYXNzZHJvcCcsICdsYWtlJywgJ2xha2UyJywgJ29pbHB1bXAnLCAncmFpbmRyb3BzJywgJ3NlYTInLCAnc3Vuc2V0b2NlYW4nLCAndG93bicsICd3YXRlcmZhbGw0JywgJ3NwYWNlJywgJ2F1cm9yYScsICdzbm93JywgJ21vdW50YWlucycsICdtb3VudGFpbnMyJywgJ3JhaW4nLCAnbmlnaHQnLCAndm9sY2FubycsICdtZWR1emEnLCAnZGVzZXJ0JywgJ21vc2NvdzEnLCAnd2F0ZXJmYWxsJywgJ3dhdGVyZmFsbDInLCAnd2F0ZXJmYWxsMycsICdzaW5nYXBvcmUnLCAnc2VhJywgJ2ZpcmUnLCAncGFsbXMnLCAnY2xldmVyJ10sXG4gICAgY3VycmVudFZpZGVvOiAkLmNvb2tpZSgndmlkZW8nKSxcbiAgICAkY29udGFpbmVyOiAkKFwiI2NvbnRhaW5lclwiKSxcbiAgICAkdmlkZW9GYWRlcjogJCgnLnZpZGVvLWZhZGVyJyksXG4gICAgJHZpZGVvQ3ljbGVDaGVja2JveDogJCgnI3ZpZGVvLWN5Y2xlJyksXG4gICAgYXV0b0N5Y2xlVGltZTogMTIwMDAwLFxuXG4gICAgaW5pdFN3aXRjaGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciAkc3dpdGNoZXJDb250YWluZXIgPSAkKCcudmlkZW8tc3dpdGNoZXInKTtcbiAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLnZpZGVvcykge1xuICAgICAgICAgICAgJHN3aXRjaGVyQ29udGFpbmVyLmFwcGVuZCgnPGEgaHJlZj1cIicgKyB0aGlzLnZpZGVvc1tpXSArICdcIiAnICsgKFNldHRpbmdzLmdldEJhY2tncm91bmRNb2RlKCkgPT0gJ3ZpZGVvJyAmJiB0aGlzLmN1cnJlbnRWaWRlbyA9PSB0aGlzLnZpZGVvc1tpXSA/ICdjbGFzcz1cImFjdGl2ZVwiJyA6ICcnKSArICcgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOnVybChtZWRpYS92aWRlby83NXg3NS8nICsgdGhpcy52aWRlb3NbaV0gKyAnLmpwZylcIiBkYXRhLW5hbWU9XCInICsgdGhpcy52aWRlb3NbaV0gKyAnXCI+PC9hPicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdmlkZW8gc2VsZWN0b3JcbiAgICAgICAgJHN3aXRjaGVyQ29udGFpbmVyLm9uKCdjbGljaycsICdhJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIFBob3RvLm9mZigpO1xuICAgICAgICAgICAgU2V0dGluZ3Muc2V0QmFja2dyb3VuZE1vZGUoJ3ZpZGVvJyk7XG4gICAgICAgICAgICBfdGhpcy50dXJuT2ZmQXV0b0N5Y2xlKCk7XG4gICAgICAgICAgICBfdGhpcy5zd2l0Y2hWaWRlbygkKHRoaXMpLmF0dHIoJ2hyZWYnKSk7XG5cbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGN5Y2xlIGNoZWNrYm94XG4gICAgICAgIF90aGlzLiR2aWRlb0N5Y2xlQ2hlY2tib3guY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJC5jb29raWUoJ2N5Y2xlVmlkZW8nLCAkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpID8gMSA6IDAsIHtleHBpcmVzOiAxMDAwfSk7XG4gICAgICAgICAgICBpZiAoU2V0dGluZ3MuZ2V0QmFja2dyb3VuZE1vZGUoKSAhPSAndmlkZW8nKSB7XG4gICAgICAgICAgICAgICAgUGhvdG8ub2ZmKCk7XG4gICAgICAgICAgICAgICAgU2V0dGluZ3Muc2V0QmFja2dyb3VuZE1vZGUoJ3ZpZGVvJyk7XG4gICAgICAgICAgICAgICAgX3RoaXMuc3RhcnRBdXRvQ3ljbGUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnByb3AoJ2NoZWNrZWQnLCBfdGhpcy5pc0F1dG9DeWNsZU9uKCkpXG5cbiAgICB9LFxuXG4gICAgaXNBdXRvQ3ljbGVPbjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gJC5jb29raWUoJ2N5Y2xlVmlkZW8nKSA9PSAxO1xuICAgIH0sXG5cbiAgICB0dXJuT2ZmQXV0b0N5Y2xlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQuY29va2llKCdjeWNsZVZpZGVvJywgMCk7XG4gICAgICAgIHRoaXMuJHZpZGVvQ3ljbGVDaGVja2JveC5wcm9wKCdjaGVja2VkJywgZmFsc2UpXG4gICAgfSxcblxuICAgIHN3aXRjaFZpZGVvOiBmdW5jdGlvbiAodmlkZW8pIHtcbiAgICAgICAgJChcIi52aWRlby1mYWRlclwiKS5hZGRDbGFzcygnZmFkZWQtZnVsbCcpO1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAkLmNvb2tpZSgndmlkZW8nLCB2aWRlbywge2V4cGlyZXM6IDEwMDB9KTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5wbGF5VmlkZW8odmlkZW8pXG4gICAgICAgIH0sIDMwMClcblxuICAgIH0sXG5cbiAgICBwbGF5VmlkZW86IGZ1bmN0aW9uICh2aWRlbykge1xuICAgICAgICB0aGlzLiRjb250YWluZXIudmlkZSgnbWVkaWEvdmlkZW8vJyArIHZpZGVvKS5yZW1vdmVDbGFzcygpLmFkZENsYXNzKHZpZGVvKVxuICAgIH0sXG5cbiAgICBvZmY6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy50dXJuT2ZmQXV0b0N5Y2xlKClcbiAgICAgICAgJCgnLnZpZGVvLXN3aXRjaGVyIGEuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICBpZiAodGhpcy4kY29udGFpbmVyLmRhdGEoXCJ2aWRlXCIpKSB7XG4gICAgICAgICAgICB0aGlzLiRjb250YWluZXIuZGF0YShcInZpZGVcIikuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfSxcblxuXG4gICAgc3RhcnRBdXRvQ3ljbGU6IGZ1bmN0aW9uIChyZXN0YXJ0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGN5Y2xlVGlja0hhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMuaXNBdXRvQ3ljbGVPbigpICYmIFNldHRpbmdzLmdldEJhY2tncm91bmRNb2RlKCkgPT0gJ3ZpZGVvJykge1xuICAgICAgICAgICAgICAgIHZhciBuZXh0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogX3RoaXMudmlkZW9zLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuc3dpdGNoVmlkZW8oX3RoaXMudmlkZW9zW25leHRdKTtcbiAgICAgICAgICAgICAgICAkKCcudmlkZW8tc3dpdGNoZXIgYVtkYXRhLW5hbWU9XCInICsgX3RoaXMudmlkZW9zW25leHRdICsgJ1wiXScpLmFkZENsYXNzKCdhY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAocmVzdGFydCA9PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMuY3ljbGVUaW1lcikgY2xlYXJJbnRlcnZhbChfdGhpcy5jeWNsZVRpbWVyKTtcbiAgICAgICAgICAgIGN5Y2xlVGlja0hhbmRsZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLmN5Y2xlVGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjeWNsZVRpY2tIYW5kbGVyKCk7XG4gICAgICAgIH0sIHRoaXMuYXV0b0N5Y2xlVGltZSk7XG4gICAgfSxcblxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRWaWRlbyB8fCB0aGlzLnZpZGVvcy5pbmRleE9mKHRoaXMuY3VycmVudFZpZGVvKSA9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VmlkZW8gPSB0aGlzLnZpZGVvc1swXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5pdFN3aXRjaGVyKCk7XG4gICAgICAgIHRoaXMuc3RhcnRBdXRvQ3ljbGUoKTtcbiAgICAgICAgaWYgKFNldHRpbmdzLmdldEJhY2tncm91bmRNb2RlKCkgPT0gJ3ZpZGVvJykge1xuICAgICAgICAgICAgdGhpcy5wbGF5VmlkZW8odGhpcy5jdXJyZW50VmlkZW8pO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
