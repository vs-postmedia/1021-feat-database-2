var xe=Object.defineProperty;var Ie=(e,t,n)=>t in e?xe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var W=(e,t,n)=>(Ie(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function x(){}function J(e,t){for(const n in t)e[n]=t[n];return e}function be(e){return e()}function se(){return Object.create(null)}function Q(e){e.forEach(be)}function ve(e){return typeof e=="function"}function ye(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let z;function Me(e,t){return e===t?!0:(z||(z=document.createElement("a")),z.href=t,e===z.href)}function Fe(e){return Object.keys(e).length===0}function Pe(e,t,n,r){if(e){const o=we(e,t,n,r);return e[0](o)}}function we(e,t,n,r){return e[1]&&r?J(n.ctx.slice(),e[1](r(t))):n.ctx}function Re(e,t,n,r){if(e[2]&&r){const o=e[2](r(n));if(t.dirty===void 0)return o;if(typeof o=="object"){const s=[],i=Math.max(t.dirty.length,o.length);for(let c=0;c<i;c+=1)s[c]=t.dirty[c]|o[c];return s}return t.dirty|o}return t.dirty}function Ue(e,t,n,r,o,s){if(o){const i=we(t,n,r,s);e.p(i,o)}}function qe(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let r=0;r<n;r++)t[r]=-1;return t}return-1}function De(e){const t={};for(const n in e)n[0]!=="$"&&(t[n]=e[n]);return t}function ue(e,t){const n={};t=new Set(t);for(const r in e)!t.has(r)&&r[0]!=="$"&&(n[r]=e[r]);return n}function L(e,t){e.appendChild(t)}function S(e,t,n){e.insertBefore(t,n||null)}function T(e){e.parentNode&&e.parentNode.removeChild(e)}function Be(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function N(e){return document.createElement(e)}function H(e){return document.createTextNode(e)}function M(){return H(" ")}function He(){return H("")}function I(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function Ve(e){return function(t){return t.preventDefault(),e.call(this,t)}}function v(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}const Qe=["width","height"];function ae(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const r in t)t[r]==null?e.removeAttribute(r):r==="style"?e.style.cssText=t[r]:r==="__value"?e.value=e[r]=t[r]:n[r]&&n[r].set&&Qe.indexOf(r)===-1?e[r]=t[r]:v(e,r,t[r])}function Ze(e){return Array.from(e.childNodes)}function te(e,t){t=""+t,e.data!==t&&(e.data=t)}function ce(e,t){e.value=t??""}function q(e,t,n,r){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}function ze(e,t,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:r})}let V;function B(e){V=e}function ie(){if(!V)throw new Error("Function called outside component initialization");return V}function Ae(e){ie().$$.on_mount.push(e)}function Ye(e){ie().$$.after_update.push(e)}function Je(){const e=ie();return(t,n,{cancelable:r=!1}={})=>{const o=e.$$.callbacks[t];if(o){const s=ze(t,n,{cancelable:r});return o.slice().forEach(i=>{i.call(e,s)}),!s.defaultPrevented}return!0}}function F(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach(r=>r.call(this,t))}const R=[],K=[];let U=[];const ne=[],Ke=Promise.resolve();let re=!1;function We(){re||(re=!0,Ke.then(Ce))}function oe(e){U.push(e)}function Ge(e){ne.push(e)}const G=new Set;let P=0;function Ce(){if(P!==0)return;const e=V;do{try{for(;P<R.length;){const t=R[P];P++,B(t),Xe(t.$$)}}catch(t){throw R.length=0,P=0,t}for(B(null),R.length=0,P=0;K.length;)K.pop()();for(let t=0;t<U.length;t+=1){const n=U[t];G.has(n)||(G.add(n),n())}U.length=0}while(R.length);for(;ne.length;)ne.pop()();re=!1,G.clear(),B(e)}function Xe(e){if(e.fragment!==null){e.update(),Q(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(oe)}}function $e(e){const t=[],n=[];U.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),U=t}const Y=new Set;let et;function le(e,t){e&&e.i&&(Y.delete(e),e.i(t))}function Ee(e,t,n,r){if(e&&e.o){if(Y.has(e))return;Y.add(e),et.c.push(()=>{Y.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function fe(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function tt(e,t){const n={},r={},o={$$scope:1};let s=e.length;for(;s--;){const i=e[s],c=t[s];if(c){for(const f in i)f in c||(r[f]=1);for(const f in c)o[f]||(n[f]=c[f],o[f]=1);e[s]=c}else for(const f in i)o[f]=1}for(const i in r)i in n||(n[i]=void 0);return n}function nt(e,t,n){const r=e.$$.props[t];r!==void 0&&(e.$$.bound[r]=n,n(e.$$.ctx[r]))}function rt(e){e&&e.c()}function Le(e,t,n){const{fragment:r,after_update:o}=e.$$;r&&r.m(t,n),oe(()=>{const s=e.$$.on_mount.map(be).filter(ve);e.$$.on_destroy?e.$$.on_destroy.push(...s):Q(s),e.$$.on_mount=[]}),o.forEach(oe)}function ke(e,t){const n=e.$$;n.fragment!==null&&($e(n.after_update),Q(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ot(e,t){e.$$.dirty[0]===-1&&(R.push(e),We(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Oe(e,t,n,r,o,s,i,c=[-1]){const f=V;B(e);const a=e.$$={fragment:null,ctx:[],props:s,update:x,not_equal:o,bound:se(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:se(),dirty:c,skip_bound:!1,root:t.target||f.$$.root};i&&i(a.root);let y=!1;if(a.ctx=n?n(e,t.props||{},(u,d,...b)=>{const h=b.length?b[0]:d;return a.ctx&&o(a.ctx[u],a.ctx[u]=h)&&(!a.skip_bound&&a.bound[u]&&a.bound[u](h),y&&ot(e,u)),d}):[],a.update(),y=!0,Q(a.before_update),a.fragment=r?r(a.ctx):!1,t.target){if(t.hydrate){const u=Ze(t.target);a.fragment&&a.fragment.l(u),u.forEach(T)}else a.fragment&&a.fragment.c();t.intro&&le(e.$$.fragment),Le(e,t.target,t.anchor),Ce()}B(f)}class Ne{constructor(){W(this,"$$");W(this,"$$set")}$destroy(){ke(this,1),this.$destroy=x}$on(t,n){if(!ve(n))return x;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!Fe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const it="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(it);var de={},X={},$=34,D=10,ee=13;function Te(e){return new Function("d","return {"+e.map(function(t,n){return JSON.stringify(t)+": d["+n+'] || ""'}).join(",")+"}")}function lt(e,t){var n=Te(e);return function(r,o){return t(n(r),o,e)}}function he(e){var t=Object.create(null),n=[];return e.forEach(function(r){for(var o in r)o in t||n.push(t[o]=o)}),n}function E(e,t){var n=e+"",r=n.length;return r<t?new Array(t-r+1).join(0)+n:n}function st(e){return e<0?"-"+E(-e,6):e>9999?"+"+E(e,6):E(e,4)}function ut(e){var t=e.getUTCHours(),n=e.getUTCMinutes(),r=e.getUTCSeconds(),o=e.getUTCMilliseconds();return isNaN(e)?"Invalid Date":st(e.getUTCFullYear())+"-"+E(e.getUTCMonth()+1,2)+"-"+E(e.getUTCDate(),2)+(o?"T"+E(t,2)+":"+E(n,2)+":"+E(r,2)+"."+E(o,3)+"Z":r?"T"+E(t,2)+":"+E(n,2)+":"+E(r,2)+"Z":n||t?"T"+E(t,2)+":"+E(n,2)+"Z":"")}function at(e){var t=new RegExp('["'+e+`
\r]`),n=e.charCodeAt(0);function r(u,d){var b,h,p=o(u,function(w,l){if(b)return b(w,l-1);h=w,b=d?lt(w,d):Te(w)});return p.columns=h||[],p}function o(u,d){var b=[],h=u.length,p=0,w=0,l,_=h<=0,k=!1;u.charCodeAt(h-1)===D&&--h,u.charCodeAt(h-1)===ee&&--h;function j(){if(_)return X;if(k)return k=!1,de;var A,g=p,C;if(u.charCodeAt(g)===$){for(;p++<h&&u.charCodeAt(p)!==$||u.charCodeAt(++p)===$;);return(A=p)>=h?_=!0:(C=u.charCodeAt(p++))===D?k=!0:C===ee&&(k=!0,u.charCodeAt(p)===D&&++p),u.slice(g+1,A-1).replace(/""/g,'"')}for(;p<h;){if((C=u.charCodeAt(A=p++))===D)k=!0;else if(C===ee)k=!0,u.charCodeAt(p)===D&&++p;else if(C!==n)continue;return u.slice(g,A)}return _=!0,u.slice(g,h)}for(;(l=j())!==X;){for(var O=[];l!==de&&l!==X;)O.push(l),l=j();d&&(O=d(O,w++))==null||b.push(O)}return b}function s(u,d){return u.map(function(b){return d.map(function(h){return y(b[h])}).join(e)})}function i(u,d){return d==null&&(d=he(u)),[d.map(y).join(e)].concat(s(u,d)).join(`
`)}function c(u,d){return d==null&&(d=he(u)),s(u,d).join(`
`)}function f(u){return u.map(a).join(`
`)}function a(u){return u.map(y).join(e)}function y(u){return u==null?"":u instanceof Date?ut(u):t.test(u+="")?'"'+u.replace(/"/g,'""')+'"':u}return{parse:r,parseRows:o,format:i,formatBody:c,formatRows:f,formatRow:a,formatValue:y}}var ct=at(","),ft=ct.parse;const dt=e=>({}),me=e=>({});function ht(e){let t;return{c(){t=H(e[2])},m(n,r){S(n,t,r)},p(n,r){r&4&&te(t,n[2])},d(n){n&&T(t)}}}function mt(e){let t,n,r,o,s,i,c,f,a,y,u;const d=e[10].label,b=Pe(d,e,e[9],me),h=b||ht(e);let p=[{name:"search"},{type:"search"},{placeholder:"Search..."},{autocomplete:"off"},{spellcheck:"false"},e[6],{id:e[4]}],w={};for(let l=0;l<p.length;l+=1)w=J(w,p[l]);return{c(){t=N("form"),n=N("label"),h&&h.c(),s=M(),i=N("input"),v(n,"id",r=e[4]+"-label"),v(n,"for",e[4]),v(n,"style",o=e[3]&&"position: absolute;height: 1px;width: 1px;overflow: hidden;clip: rect(1px 1px 1px 1px);clip: rect(1px, 1px, 1px, 1px);white-space: nowrap;"),ae(i,w),v(t,"data-svelte-search",""),v(t,"role",c=e[5]?null:"search"),v(t,"aria-labelledby",f=e[5]?null:e[4])},m(l,_){S(l,t,_),L(t,n),h&&h.m(n,null),L(t,s),L(t,i),i.autofocus&&i.focus(),e[17](i),ce(i,e[0]),a=!0,y||(u=[I(i,"input",e[18]),I(i,"input",e[12]),I(i,"change",e[13]),I(i,"focus",e[14]),I(i,"blur",e[15]),I(i,"keydown",e[16]),I(t,"submit",Ve(e[11]))],y=!0)},p(l,[_]){b?b.p&&(!a||_&512)&&Ue(b,d,l,l[9],a?Re(d,l[9],_,dt):qe(l[9]),me):h&&h.p&&(!a||_&4)&&h.p(l,a?_:-1),(!a||_&16&&r!==(r=l[4]+"-label"))&&v(n,"id",r),(!a||_&16)&&v(n,"for",l[4]),(!a||_&8&&o!==(o=l[3]&&"position: absolute;height: 1px;width: 1px;overflow: hidden;clip: rect(1px 1px 1px 1px);clip: rect(1px, 1px, 1px, 1px);white-space: nowrap;"))&&v(n,"style",o),ae(i,w=tt(p,[{name:"search"},{type:"search"},{placeholder:"Search..."},{autocomplete:"off"},{spellcheck:"false"},_&64&&l[6],(!a||_&16)&&{id:l[4]}])),_&1&&i.value!==l[0]&&ce(i,l[0]),(!a||_&32&&c!==(c=l[5]?null:"search"))&&v(t,"role",c),(!a||_&48&&f!==(f=l[5]?null:l[4]))&&v(t,"aria-labelledby",f)},i(l){a||(le(h,l),a=!0)},o(l){Ee(h,l),a=!1},d(l){l&&T(t),h&&h.d(l),e[17](null),y=!1,Q(u)}}}function pt(e,t,n){const r=["value","autofocus","debounce","label","hideLabel","id","ref","removeFormAriaAttributes"];let o=ue(t,r),{$$slots:s={},$$scope:i}=t,{value:c=""}=t,{autofocus:f=!1}=t,{debounce:a=0}=t,{label:y="Label"}=t,{hideLabel:u=!1}=t,{id:d="search"+Math.random().toString(36)}=t,{ref:b=null}=t,{removeFormAriaAttributes:h=!1}=t;const p=Je();let w=c,l,_=!1;function k(m){_||(_=!0,l=setTimeout(()=>{m(),_=!1},a))}Ae(()=>(f&&window.requestAnimationFrame(()=>b.focus()),()=>clearTimeout(l))),Ye(()=>{c.length>0&&c!==w&&(a>0?k(()=>p("type",c)):p("type",c)),c.length===0&&w.length>0&&p("clear"),w=c});function j(m){F.call(this,e,m)}function O(m){F.call(this,e,m)}function A(m){F.call(this,e,m)}function g(m){F.call(this,e,m)}function C(m){F.call(this,e,m)}function Z(m){F.call(this,e,m)}function Se(m){K[m?"unshift":"push"](()=>{b=m,n(1,b)})}function je(){c=this.value,n(0,c)}return e.$$set=m=>{t=J(J({},t),De(m)),n(6,o=ue(t,r)),"value"in m&&n(0,c=m.value),"autofocus"in m&&n(7,f=m.autofocus),"debounce"in m&&n(8,a=m.debounce),"label"in m&&n(2,y=m.label),"hideLabel"in m&&n(3,u=m.hideLabel),"id"in m&&n(4,d=m.id),"ref"in m&&n(1,b=m.ref),"removeFormAriaAttributes"in m&&n(5,h=m.removeFormAriaAttributes),"$$scope"in m&&n(9,i=m.$$scope)},[c,b,y,u,d,h,o,f,a,i,s,j,O,A,g,C,Z,Se,je]}class _t extends Ne{constructor(t){super(),Oe(this,t,pt,mt,ye,{value:0,autofocus:7,debounce:8,label:2,hideLabel:3,id:4,ref:1,removeFormAriaAttributes:5})}}const gt=_t;function pe(e,t,n){const r=e.slice();return r[15]=t[n],r}function bt(e){let t,n=fe(e[1]),r=[];for(let o=0;o<n.length;o+=1)r[o]=_e(pe(e,n,o));return{c(){for(let o=0;o<r.length;o+=1)r[o].c();t=He()},m(o,s){for(let i=0;i<r.length;i+=1)r[i]&&r[i].m(o,s);S(o,t,s)},p(o,s){if(s&10){n=fe(o[1]);let i;for(i=0;i<n.length;i+=1){const c=pe(o,n,i);r[i]?r[i].p(c,s):(r[i]=_e(c),r[i].c(),r[i].m(t.parentNode,t))}for(;i<r.length;i+=1)r[i].d(1);r.length=n.length}},d(o){o&&T(t),Be(r,o)}}}function vt(e){let t;return{c(){t=N("p"),t.textContent="No one by that name was found in the database.",v(t,"class","descriptor svelte-1hctq0x")},m(n,r){S(n,t,r)},p:x,d(n){n&&T(t)}}}function yt(e){return{c:x,m:x,p:x,d:x}}function _e(e){let t,n,r=ge(e[15])+"",o,s,i=e[3](e[15])+"",c;return{c(){t=N("p"),n=N("span"),o=H(r),s=M(),c=H(i),v(n,"class","bold svelte-1hctq0x"),v(t,"class","descriptor svelte-1hctq0x")},m(f,a){S(f,t,a),L(t,n),L(n,o),L(t,s),L(t,c)},p(f,a){a&2&&r!==(r=ge(f[15])+"")&&te(o,r),a&2&&i!==(i=f[3](f[15])+"")&&te(c,i)},d(f){f&&T(t)}}}function wt(e){let t,n,r,o,s,i,c,f,a,y,u,d,b,h,p,w,l;function _(g){e[4](g)}let k={label:"",placeholder:"Search for a last name..."};e[0]!==void 0&&(k.value=e[0]),o=new gt({props:k}),K.push(()=>nt(o,"value",_)),o.$on("submit",e[5]);function j(g,C){if(C&2&&(f=null),f==null&&(f=!Array.isArray(g[1])),f)return yt;if(g[1].length===0)return vt;if(g[1].length>0)return bt}let O=j(e,-1),A=O&&O(e);return{c(){t=N("header"),t.innerHTML='<h1 class="svelte-1hctq0x">Search the Midnight Order database of missing people and unsolved deaths in B.C.</h1>',n=M(),r=N("main"),rt(o.$$.fragment),i=M(),c=N("div"),A&&A.c(),a=M(),y=N("h2"),y.textContent="Stories from the missing and murdered database",u=M(),d=N("iframe"),h=N("div"),h.innerHTML='<a class="flourish-credit" href="https://public.flourish.studio/visualisation/15410744/?utm_source=embed&amp;utm_campaign=visualisation/15410744" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"/></a>',p=M(),w=N("footer"),w.innerHTML='<p class="note">Researchers also included a few deaths, suicides and overdoses that appeared suspicious; all Indigenous murders, whether solved or unsolved, to help build a complete list of Indigenous victims in Canada; and victims of serial killers to allow for the study of patterns.</p> <p class="note">If you know of someone that should be included in the database, please fill out <a href="https://docs.google.com/forms/d/e/1FAIpQLSeBbrOu7zBvVcdeoOj1Idi1lnaLyIMMwoPn4FtePNNgDL5-FA/viewform" target="_blank">this form</a>. Questions, corrections and comments should be sent to <a href="mailto:Midnightordermmd@gmail.com" target="_blank">midnightordermmd@gmail.com</a>.</p> <p class="source">Source: Midnight Order</p>',v(t,"class","svelte-1hctq0x"),v(c,"id","descriptor-block"),v(c,"class","svelte-1hctq0x"),v(y,"class","svelte-1hctq0x"),Me(d.src,b="https://flo.uri.sh/visualisation/15410744/embed")||v(d,"src",b),v(d,"title","Interactive or visual content"),v(d,"class","flourish-embed-iframe"),v(d,"frameborder","0"),v(d,"scrolling","no"),q(d,"width","100%"),q(d,"height","450px"),v(d,"sandbox","allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"),q(h,"width","100%!"),q(h,"margin-top","4px",1),q(h,"text-align","right",1),v(r,"class","svelte-1hctq0x")},m(g,C){S(g,t,C),S(g,n,C),S(g,r,C),Le(o,r,null),L(r,i),L(r,c),A&&A.m(c,null),L(r,a),L(r,y),L(r,u),L(r,d),L(r,h),S(g,p,C),S(g,w,C),l=!0},p(g,[C]){const Z={};!s&&C&1&&(s=!0,Z.value=g[0],Ge(()=>s=!1)),o.$set(Z),O===(O=j(g,C))&&A?A.p(g,C):(A&&A.d(1),A=O&&O(g),A&&(A.c(),A.m(c,null)))},i(g){l||(le(o.$$.fragment,g),l=!0)},o(g){Ee(o.$$.fragment,g),l=!1},d(g){g&&(T(t),T(n),T(r),T(p),T(w)),ke(o),A&&A.d()}}}const At="https://vs-postmedia-data.sfo2.digitaloceanspaces.com/midnight-order-mmd/db-output.csv";function ge(e){return e.name}function Ct(e,t,n){let r,o,s,i,c,f,a,y;function u(l){n(1,y=s.filter(_=>_.name.split(" ").pop().toLowerCase()===l.toLowerCase())),!(y.length<1)&&d(y)}function d(l){l.person_state==="missing"?c="last seen":l.person_state==="deceased"&&(c="found dead"),l.location_last_seen_suburb==="unknown".toLowerCase()||l.location_last_seen_suburb==="NA"?o="an unconfirmed location":o=l.location_last_seen_suburb,l.year==="NA"?a="on an unconfirmed date":a=`in ${l.year}`,l.sex==="male"?f="He":l.sex==="female"&&(f="She"),l.age==="Unknown"?r=!1:r=!0;const _=`was ${c} in ${o} ${a}.`,k=r?`${f} was ${l.age} years old`:"",j=parseInt(l.year_last_seen)<parseInt(l.year)?` in ${l.year_last_seen} when ${f.toLowerCase()} went missing.`:".";return`${_} ${k}${j}`}async function b(l){return s=await(await fetch(l)).text(),ft(s)}async function h(){s=await b(At)}Ae(h);function p(l){i=l,n(0,i)}return[i,y,u,d,p,()=>u(i)]}class Et extends Ne{constructor(t){super(),Oe(this,t,Ct,wt,ye,{})}}new Et({target:document.getElementById("app")});
