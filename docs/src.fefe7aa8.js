parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QCba":[function(require,module,exports) {
"use strict";var e=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),t=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")};function n(e,t){if(!e)throw new Error(t)}console.log("Open source at https://github.com/XavierCooney/logic/");var r=["p","q","r","s","a","b","x","y"],i=!1,a=[{t:"frege",v:["a","b"],a:["a"],c:"b → a",name:"Proposition 1"},{t:"frege",v:["a","b","c"],a:["c → (b → a)"],c:"(c → b) → (c → a)",name:"Proposition 2"},{t:"frege",v:["a","b","c"],a:["b → a"],c:"(c → (b → a)) → ((c → b) → (c → a))",name:"Proposition 3"},{t:"frege",v:["a","b","c"],a:["(b → a) → (c → (b → a))"],c:"(b → a) → ((c → b) → (c → a))",name:"Proposition 4"},{t:"frege",v:["a","b","c"],a:["b → a"],c:"((c → b) → (c → a))",name:"Proposition 5"},{t:"frege",v:["a","b","c","d"],a:["c → (b → a)"],c:"c → ((d → b) → (d → a))",name:"Proposition 6"},{t:"frege",v:["a","b","c","d"],a:["b → a"],c:"(d → (c → b)) → (d → (c → a))",name:"Proposition 7"},{t:"frege",v:["a","b","c","d"],a:["d → (b → a)"],c:"b → (d → a)",name:"Proposition 8"},{t:"frege",v:["a","b","c","d"],a:["c → b"],c:"(b → a) → (c → a)",name:"Proposition 9"},{t:"frege",v:["a","b","c","d","e"],a:["(e → (d → b)) → a"],c:"(d → (e → b)) → a",name:"Proposition 10"},{t:"example",v:["p","q"],a:["p → q","p"],c:"q",name:"Modus ponens"},{t:"example",v:["p","q"],a:["p → q","¬q"],c:"¬p",name:"Modus tollens"},{t:"example",v:["p","q"],a:["p → q","q → p"],c:"p ↔ q",name:"Biconditional introduction"},{t:"example",v:["p","q"],a:["¬(p ∧ q)","p"],c:"¬q",name:"Modus ponendo tollens"},{t:"example",v:["p","q","r"],a:["((p → q) ∧ (q → r))"],c:"(p → r)",name:"Hypothetical Syllogism"},{t:"example",v:["p","q"],a:["((p ∨ q) ∧ ¬p)"],c:"q",name:"Disjunctive Syllogism"},{t:"example",v:["p","q","r","s"],a:["(p → q) ∧ (r → s)","p ∨ r"],c:"q ∨ s",name:"Constructive Dilemma"},{t:"example",v:["p","q","r","s"],a:["(p → q) ∧ (r → s)","¬q ∨ ¬s"],c:"¬p ∨ ¬r",name:"Destructive Dilemma"},{t:"example",v:["p","q","r"],a:["(p → q) ∧ (p → r)"],c:"p → (q ∧ r)",name:"Composition"},{t:"example",v:["p","q"],a:[],c:"(¬(p ∧ q) ↔ (¬p ∨ ¬q)) ∧ (¬(p ∨ q) ↔ (¬p ∧ ¬q))",name:"De Morgan's Laws"},{t:"example",v:["p","q","r"],a:[],c:"((p ∧ q) → r) ↔ (p → (q → r))",name:"Importation & Exportation"},{t:"example",v:["p"],a:[],c:"p ∨ ¬p",name:"Tertium non datur"},{t:"example",v:["p","q"],a:["p → (q ∧ ¬q)"],c:"¬p",name:"Proof by Contradiction"},{t:"example",v:["p","q"],a:["p ∧ ¬p"],c:"q",name:"Principle of Explosion"},{t:"example",v:["p","q","r"],a:[],c:"(p → (q → p)) ∧ ((p → (q → r) → ((p → q) → (p → r))) ∧ ((¬p → ¬q) → (q → p)))",name:"Jan Łukasiewicz's Axioms"},{t:"fallacy",v:["p","q"],a:["p → q","¬p"],c:"¬q",name:"Fallacy: Denying the antecedent"},{t:"fallacy",v:["p","q"],a:["p → q","q"],c:"p",name:"Fallacy: Affirming the consequent"},{t:"fallacy",v:["p","q"],a:["p ∨ q","q"],c:"¬p",name:"Fallacy: Affirming a disjunct"}],o=[{v:["p","q"],a:["p → q","p"],c:"q",name:"Modus ponens"},{v:["p","q"],a:["p → q","¬q"],c:"¬p",name:"Modus tollens"},{v:["p","q"],a:["p → q","q → p"],c:"p ↔ q",name:"Biconditional introduction"},{v:["p","q"],a:["¬(p ∧ q)","p"],c:"¬q",name:"Modus ponendo tollens"},{v:["p","q","r"],a:["((p → q) ∧ (q → r))"],c:"(p → r)",name:"Hypothetical Syllogism"},{v:["p","q"],a:["((p ∨ q) ∧ ¬p)"],c:"q",name:"Disjunctive Syllogism"},{v:["p","q","r","s"],a:["(p → q) ∧ (r → s)","p ∨ r"],c:"q ∨ s",name:"Constructive Dilemma"},{v:["p","q","r","s"],a:["(p → q) ∧ (r → s)","¬q ∨ ¬s"],c:"¬p ∨ ¬r",name:"Destructive Dilemma"},{v:["p","q","r"],a:["(p → q) ∧ (p → r)"],c:"p → (q ∧ r)",name:"Composition"},{v:["p","q"],a:[],c:"(¬(p ∧ q) ↔ (¬p ∨ ¬q)) ∧ (¬(p ∨ q) ↔ (¬p ∧ ¬q))",name:"De Morgan's Laws"},{v:["p","q","r"],a:[],c:"((p ∧ q) → r) ↔ (p → (q → r))",name:"Importation & Exportation"},{v:["p"],a:[],c:"p ∨ ¬p",name:"Tertium non datur"},{v:["p","q"],a:["p → (q ∧ ¬q)"],c:"¬p",name:"Proof by Contradiction"},{v:["p","q","r"],a:[],c:"(p → (q → p)) ∧ ((p → (q → r) → ((p → q) → (p → r))) ∧ ((¬p → ¬q) → (q → p)))",name:"Jan Łukasiewicz's Axioms"},{v:["p","q"],a:["p → q","¬p"],c:"¬q",name:"Fallacy: Denying the antecedent"},{v:["p","q"],a:["p → q","q"],c:"p",name:"Fallacy: Affirming the consequent"},{v:["p","q"],a:["p ∨ q","q"],c:"¬p",name:"Fallacy: Affirming a disjunct"},{v:["p","q"],a:["p ∧ ¬p"],c:"q",name:"Principle of Explosion"}];console.log(a.length+" examples laoded");var s=[],l=function(){return function(){}}(),c=function(t){function n(e){var n=t.call(this)||this;return n.symbol=e,n}return e(n,t),n.prototype.evaluate=function(e){return e[this.symbol]},n}(l),p=function(t){function n(e){var n=t.call(this)||this;return n.e=e,n}return e(n,t),n.prototype.evaluate=function(e){return!this.e.evaluate(e)},n}(l),u=function(t){function n(e,n){var r=t.call(this)||this;return r.a=e,r.b=n,r}return e(n,t),n.prototype.evaluate=function(e){return this.a.evaluate(e)&&this.b.evaluate(e)},n}(l),m=function(t){function n(e,n){var r=t.call(this)||this;return r.a=e,r.b=n,r}return e(n,t),n.prototype.evaluate=function(e){return this.a.evaluate(e)||this.b.evaluate(e)},n}(l),d=function(t){function n(e,n){var r=t.call(this)||this;return r.a=e,r.b=n,r}return e(n,t),n.prototype.evaluate=function(e){return this.a.evaluate(e)==this.b.evaluate(e)},n}(l),v=function(t){function n(e,n){var r=t.call(this)||this;return r.a=e,r.b=n,r}return e(n,t),n.prototype.evaluate=function(e){var t=this.a.evaluate(e),n=this.b.evaluate(e);return!t||n},n}(l),h=function(t){function n(e){var n=t.call(this)||this;return n.value=e,n}return e(n,t),n.prototype.evaluate=function(e){return this.value},n}(l),f=function(){return function(e,t){if(!e&&!t)throw new Error("Neither expression nor message defined");this.expr=e,this.msg=t}}(),y=function(){function e(e){this.s=e}return e.prototype.consume_whitespace=function(){var e,t=null===(e=this.s.match(/^[ ]*/))||void 0===e?void 0:e[0].length;this.s=this.s.slice(t)},e.prototype.parse=function(e){if(this.consume_whitespace(),e<=0){var t=this.s.match(/^[a-zA-Z_]+/);return null==t||["T","F"].includes(t[0])?this.s.length>0&&"("==this.s[0]?(this.s=this.s.slice(1),this.consume_whitespace(),(a=this.parse(10)).msg?a:(this.consume_whitespace(),this.s.length<1||")"!=this.s[0]?new f(void 0,"Expected close bracket"):(this.s=this.s.slice(1),this.consume_whitespace(),a))):this.s.length>0&&["⊤","T"].includes(this.s[0])?(this.s=this.s.slice(1),this.consume_whitespace(),new f(new h(!0),void 0)):this.s.length>0&&["⊥","F"].includes(this.s[0])?(this.s=this.s.slice(1),this.consume_whitespace(),new f(new h(!1),void 0)):this.s.length>0?new f(void 0,'Incorrect formulation (around character "'+this.s[0]+'")'):new f(void 0,"Incorrect formulation (around the end of input)"):(this.s=this.s.slice(t[0].length),s.includes(t[0])?new f(new c(t[0]),void 0):new f(void 0,'Unrecognised variable "'+t[0]+'"'))}if(1==e){var r=0;for(this.consume_whitespace();this.s.length>0&&["~","!","¬"].includes(this.s[0]);)this.s=this.s.slice(1),this.consume_whitespace(),r+=1;if((a=this.parse(e-1)).msg)return a;for(;r>0;)n(a.expr),a=new f(new p(a.expr),a.msg),r-=1;return a}if(3==e){if((a=this.parse(e-1)).msg)return a;for(this.consume_whitespace();this.s.length>0&&["∧","&","."].includes(this.s[0]);){if(this.s=this.s.slice(1),this.consume_whitespace(),(i=this.parse(e-1)).msg)return i;this.consume_whitespace(),n(a.expr),n(i.expr),a=new f(new u(a.expr,i.expr),a.msg)}return a}if(4==e){if((a=this.parse(e-1)).msg)return a;for(this.consume_whitespace();this.s.length>0&&["∨","+","|"].includes(this.s[0]);){if(this.s=this.s.slice(1),this.consume_whitespace(),(i=this.parse(e-1)).msg)return i;this.consume_whitespace(),n(a.expr),n(i.expr),a=new f(new m(a.expr,i.expr),a.msg)}return a}if(5==e){if((a=this.parse(e-1)).msg)return a;for(this.consume_whitespace();this.s.length>0&&["→",">"].includes(this.s[0]);){if(this.s=this.s.slice(1),this.consume_whitespace(),(i=this.parse(e-1)).msg)return i;this.consume_whitespace(),n(a.expr),n(i.expr),a=new f(new v(a.expr,i.expr),a.msg)}return a}if(6==e){if((a=this.parse(e-1)).msg)return a;for(this.consume_whitespace();this.s.length>0&&["↔","=","≡","⊨"].includes(this.s[0]);){var i;if(this.s=this.s.slice(1),this.consume_whitespace(),(i=this.parse(e-1)).msg)return i;this.consume_whitespace(),n(a.expr),n(i.expr),a=new f(new d(a.expr,i.expr),a.msg)}return a}var a=this.parse(e-1);return this.consume_whitespace(),a},e.prototype.parse_fully=function(){var e=this.parse(10);return!e.msg&&this.s.length>0?new f(void 0,'Failed to fully read input around "'+this.s+'"'):e},e}();function g(){var e=document.getElementById("variable-logic-input").value.split(/[ ,]+/).filter(Boolean);e.length==s.length&&e.every(function(e,t){return e===s[t]})||(s=e,q())}function q(){for(var e,n,i=document.getElementById("variable-select-btns");i.firstChild;)i.removeChild(i.firstChild);var a=new Set(r.concat(s)),o=function(e){var t=document.createElement("button"),n=s.includes(e);t.innerText=e+(n?" ✔":""),n&&(t.style.border="3px red solid"),t.addEventListener("click",function(t){s.includes(e)?s=s.filter(function(t){return t!=e}):s.push(e),q()}),i.appendChild(t)};try{for(var l=t(a),c=l.next();!c.done;c=l.next()){o(c.value)}}catch(p){e={error:p}}finally{try{c&&!c.done&&(n=l.return)&&n.call(l)}finally{if(e)throw e.error}}document.getElementById("variable-logic-input").value=s.join(", "),x(),b()}function x(){var e,n,r,i,a=document.getElementById("option-logic-symbols-hints"),o=document.getElementById("option-logic-symbols-synonyms"),l=a.checked,c=o.checked,p=[[" → ","→","implies"],["¬","¬","negation"],[" ∧ ","∧","conjunction"],[" ∨ ","∨","disjunction"],[" ↔ ","↔","iff"],["(","(",""],[")",")",""],["⊤","⊤","tautology"],["⊥","⊥","contradiction"]];c&&(p=p.concat([[" = ","=","is equivalent to"],[" ≡ ","≡","if and only if"],["T","T","true"],["F","F","false"]]));try{for(var u=t(s),m=u.next();!m.done;m=u.next()){var d=m.value;p.push([d,d,"variable"])}}catch(y){e={error:y}}finally{try{m&&!m.done&&(n=u.return)&&n.call(u)}finally{if(e)throw e.error}}var v=function(e){for(var n,r;e.firstChild;)e.removeChild(e.firstChild);var i=function(t){var n=document.createElement("button");n.innerText=t[1]+(l&&t[2]?" ("+t[2]+")":""),n.addEventListener("click",function(){var n=e.parentElement.getElementsByClassName("logic-input-line")[0].getElementsByClassName("logic-input")[0],r=n.selectionStart;n.value=n.value.slice(0,n.selectionStart)+t[0]+n.value.slice(n.selectionStart),n.focus(),n.selectionStart=n.selectionEnd=r+t[0].length,b()}),e.appendChild(n)};try{for(var a=(n=void 0,t(p)),o=a.next();!o.done;o=a.next()){i(o.value)}}catch(s){n={error:s}}finally{try{o&&!o.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}};try{for(var h=t(Array.prototype.slice.call(document.getElementsByClassName("virt-btn-keyboard virt-btn-logic-symbs"))),f=h.next();!f.done;f=h.next()){v(f.value)}}catch(g){r={error:g}}finally{try{f&&!f.done&&(i=h.return)&&i.call(h)}finally{if(r)throw r.error}}}function b(){if(i){var e=document.getElementById("example-loaded-msg-modified");e&&(e.style.display="")}setTimeout(w,10)}function w(){var e,r,i,a,o,l,c=Array.prototype.slice.call(document.getElementsByClassName("conclusions-input-box")),p=Array.prototype.slice.call(document.getElementsByClassName("premises-input-box")),u=[],m=[];try{for(var d=t(c),v=d.next();!v.done;v=d.next()){var h=v.value,f=h.getElementsByClassName("logic-output-err")[0],g=h.getElementsByClassName("logic-input")[0].value,q=new y(g).parse_fully();f.classList.remove("all-good"),q.msg?f.innerText=q.msg+"\n":(f.innerText="",n(q.expr),u.push({e:q.expr,b:f}))}}catch(I){e={error:I}}finally{try{v&&!v.done&&(r=d.return)&&r.call(d)}finally{if(e)throw e.error}}try{for(var x=t(p),b=x.next();!b.done;b=x.next()){var w=b.value;f=w.getElementsByClassName("logic-output-err")[0],g=w.getElementsByClassName("logic-input")[0].value;(q=new y(g).parse_fully()).msg?f.innerText=q.msg+"\n":(f.innerText="",n(q.expr),m.push({e:q.expr,b:f}))}}catch(L){i={error:L}}finally{try{b&&!b.done&&(a=x.return)&&a.call(x)}finally{if(i)throw i.error}}function E(e){var t=[];for(var n in e){e[n]?t.push(""+n):t.push("¬"+n)}return 0==t.length?" for empty set":"for "+t.join(", ")}!function e(n,r){if(0==n.length)!function(e){var n,r,i,a;try{for(var o=t(m),s=o.next();!s.done;s=o.next())if(!(p=s.value).e.evaluate(e))return}catch(d){n={error:d}}finally{try{s&&!s.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}try{for(var l=t(u),c=l.next();!c.done;c=l.next()){var p;(p=c.value).e.evaluate(e)||(p.b.innerText+="Case failed "+E(e)+"\n")}}catch(v){i={error:v}}finally{try{c&&!c.done&&(a=l.return)&&a.call(l)}finally{if(i)throw i.error}}}(r);else{var i=Object.assign({},r);i[n[0]]=!1;var a=Object.assign({},r);a[n[0]]=!0,e(n.slice(1),i),e(n.slice(1),a)}}(s,{});try{for(var _=t(u),B=_.next();!B.done;B=_.next()){var C=B.value;console.log(C.b.innerText),""==C.b.innerText?(C.b.classList.add("all-good"),C.b.innerText="✅ All cases correct"):C.b.innerText="❌ "+C.b.innerText}}catch(T){o={error:T}}finally{try{B&&!B.done&&(l=_.return)&&l.call(_)}finally{if(o)throw o.error}}}function E(){var e,n,r,i,a,o;x();try{for(var s=t(Array.prototype.slice.call(document.getElementsByClassName("logic-input"))),l=s.next();!l.done;l=s.next()){var c=l.value;c.spellcheck=!1,c.autocapitalize="off",c.autocomplete="off"}}catch(h){e={error:h}}finally{try{l&&!l.done&&(n=s.return)&&n.call(s)}finally{if(e)throw e.error}}try{for(var p=t(Array.prototype.slice.call(document.getElementsByClassName("logic-input"))),u=p.next();!u.done;u=p.next()){(v=u.value).addEventListener("input",b),v.addEventListener("change",b)}}catch(f){r={error:f}}finally{try{u&&!u.done&&(i=p.return)&&i.call(p)}finally{if(r)throw r.error}}try{for(var m=t(Array.prototype.slice.call(document.getElementsByClassName("logic-remove-premise"))),d=m.next();!d.done;d=m.next()){var v;(v=d.value).addEventListener("click",function(){var e,t,n;null===(n=null===(t=null===(e=null===this||void 0===this?void 0:this.parentElement)||void 0===e?void 0:e.parentElement)||void 0===t?void 0:t.parentElement)||void 0===n||n.remove(),b()})}}catch(y){a={error:y}}finally{try{d&&!d.done&&(o=m.return)&&o.call(m)}finally{if(a)throw a.error}}}function _(e,n,r){var i,a;s=e.slice(0),document.getElementById("logic-conclusion-input").value=r,Array.from(document.getElementsByClassName("premises-input-box")).forEach(function(e){e.remove()});try{for(var o=t(n),l=o.next();!l.done;l=o.next()){C(l.value)}}catch(p){i={error:p}}finally{try{l&&!l.done&&(a=o.return)&&a.call(o)}finally{if(i)throw i.error}}q(),b();var c=document.getElementById("example-loaded-msg-modified");c&&(c.style.display="none")}function B(){var e=new URL(window.location.href).searchParams.get("s");if(e){var t=decodeURIComponent(escape(atob(decodeURIComponent(e))));console.log("JSON: "+t);var n=JSON.parse(t);_(n.v,n.a,n.c)}}function C(e){var t,n,r=document.createElement("div");r.classList.add("big-box"),r.classList.add("premises-input-box"),r.innerHTML='\n    <div class="inner-input-box">\n        <div class="logic-input-line">\n            <h2>Premise</h2>\n            <input class="logic-input">\n            <button class="logic-remove-premise">Remove</button>\n        </div>\n        <div id="conclusions-select-btns" class="virt-btn-keyboard virt-btn-logic-symbs"></div>\n    </div>\n    <div class="logic-output-err"></div>',r.getElementsByClassName("logic-input")[0].value=e,null===(n=null===(t=document.getElementById("make-new-assumption"))||void 0===t?void 0:t.parentElement)||void 0===n||n.insertBefore(r,document.getElementById("make-new-assumption")),E(),b()}function I(){var e={v:[],a:[],c:""};function t(e){return Array.prototype.slice.call(document.getElementsByClassName(e)).map(function(e){return e.getElementsByClassName("logic-input")[0].value})}return e.v=s,e.a=t("premises-input-box"),e.c=t("conclusions-input-box")[0],e}window.convert_system_to_object_str=function(){return JSON.stringify(I())},window.addEventListener("load",function(){var e,r,o,s,l,c,p,u;B(),q();var m=document.getElementById("variable-logic-input");n(m),m.addEventListener("change",g),m.addEventListener("input",g),E(),null===(o=document.getElementById("option-logic-symbols-hints"))||void 0===o||o.addEventListener("click",x),null===(s=document.getElementById("option-logic-symbols-synonyms"))||void 0===s||s.addEventListener("click",x),null===(l=document.getElementById("make-new-assumption"))||void 0===l||l.addEventListener("click",function(){C("")}),null===(c=document.getElementById("share-btn"))||void 0===c||c.addEventListener("click",function(){var e=btoa(unescape(encodeURIComponent(JSON.stringify(I())))),t=window.location.href.slice(0,window.location.href.length-window.location.search.length);prompt("Please share/save this URL to return to your logic system:",t+"?s="+window.encodeURIComponent(e))});try{for(var d=t(a),v=d.next();!v.done;v=d.next()){var h=v.value,f=document.createElement("option");f.innerText=h.name,null===(p=document.getElementById("example-"+h.t))||void 0===p||p.appendChild(f)}}catch(y){e={error:y}}finally{try{v&&!v.done&&(r=d.return)&&r.call(d)}finally{if(e)throw e.error}}null===(u=document.getElementById("load-example-btn"))||void 0===u||u.addEventListener("click",function(){var e=document.getElementById("example-select").selectedIndex;document.getElementById("example-loaded-msg").innerText="Example Loaded: "+a[e].name,i=!0,_(a[e].v,a[e].a,a[e].c)})});
},{}]},{},["QCba"], null)
//# sourceMappingURL=src.fefe7aa8.js.map