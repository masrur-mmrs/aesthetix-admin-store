import{q as k,e as q}from"./a-7777287a.js";import"./index-d61dff85.js";import"./layout-46e8c2aa.js";import"./index-9b406524.js";import"./index-784107ff.js";import"./index-aa73cc34.js";import"./index-6eb82494.js";function j(a,e){return Object.keys(e).reduce(function(i,t){if(t.startsWith(a)){var r=t.substr(a.length);i[r]=e[t]}return i},{})}function R(a,e){var i=document.createElement("a");i.href=e;var t=i.search.slice(1),r=t.split("&").reduce(function(v,P){var p=P.split("="),b=p[0],S=p[1];return v[b]=k(S),v},{}),s=[],f=r.ajs_uid,m=r.ajs_event,c=r.ajs_aid,n=q(a.options.useQueryString)?a.options.useQueryString:{},u=n.aid,l=u===void 0?/.+/:u,o=n.uid,A=o===void 0?/.+/:o;if(c){var _=Array.isArray(r.ajs_aid)?r.ajs_aid[0]:r.ajs_aid;l.test(_)&&a.setAnonymousId(_)}if(f){var d=Array.isArray(r.ajs_uid)?r.ajs_uid[0]:r.ajs_uid;if(A.test(d)){var h=j("ajs_trait_",r);s.push(a.identify(d,h))}}if(m){var y=Array.isArray(r.ajs_event)?r.ajs_event[0]:r.ajs_event,g=j("ajs_prop_",r);s.push(a.track(y,g))}return Promise.all(s)}export{R as queryString};