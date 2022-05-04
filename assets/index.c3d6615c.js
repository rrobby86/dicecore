var U=Object.defineProperty,Z=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var B=(s,e,o)=>e in s?U(s,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[e]=o,L=(s,e)=>{for(var o in e||(e={}))G.call(e,o)&&B(s,o,e[o]);if(O)for(var o of O(e))H.call(e,o)&&B(s,o,e[o]);return s},T=(s,e)=>Z(s,q(e));import{d as J,o as u,c as M,a as p,b as t,r as W,e as k,T as j,f as b,n as v,u as i,g,h as R,w as P,i as w,F as S,j as m,t as A,m as V,k as z,l as Q,p as X,v as Y,q as ee,s as oe,x as se,y as te,z as le,A as re,B as ne,C as ce,D as ae,E as ie,G as ue,H as fe,I as de,J as pe}from"./vendor.8da4080d.js";const me=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const n of l)if(n.type==="childList")for(const f of n.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function o(l){const n={};return l.integrity&&(n.integrity=l.integrity),l.referrerpolicy&&(n.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?n.credentials="include":l.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(l){if(l.ep)return;l.ep=!0;const n=o(l);fetch(l.href,n)}};me();function ve(s){return[...Array(s)].map(e=>[...Array(4)].map(o=>[]))}const D=J("scores",{state:()=>({nextId:0,rounds:3,scores:[]}),getters:{roundScores:s=>{const e=[];for(const r of s.scores){const l=[];for(const n of r.scores){var o=0;for(const[f,_]of n.entries())for(const x of _)o+=(f+1)*x;l.push(o)}e.push(l)}return e},totalScores:s=>{const e=[];for(const r of s.roundScores){var o=0;for(const l of r)o+=l;e.push(o)}return e}},actions:{addPlayer(s){this.scores.push(T(L({id:this.nextId},s),{scores:ve(this.rounds)}));var e=0;for(var o of this.scores)o.id>e&&(e=o.id);this.nextId=e+1},updatePlayer(s,e){this.scores[s].name=e.name,this.scores[s].color=e.color},removePlayer(s){this.nextId=this.scores[s].id,this.scores.splice(s,1)},shuffle(){for(let o=this.scores.length-1;o>0;o--){var s=Math.floor(Math.random()*(o+1)),e=this.scores[o];this.scores[o]=this.scores[s],this.scores[s]=e}},rank(){const s=[...Array(this.scores.length)].map((o,r)=>({index:r,score:this.totalScores[r]}));s.sort((o,r)=>r.score-o.score);const e=s.map(o=>this.scores[o.index]);this.scores.splice(0,e.length,...e)},clearScores(){for(var s of this.scores)for(var e of s.scores)for(var o of e)o.splice(0)},clearAll(){this.scores.splice(0),this.nextId=0}},persist:{key:"dicecore-scores"}}),$={red:{main:"#ff0000",fg:"#ffffff"},orange:{main:"#ff8800",fg:"#000000"},yellow:{main:"#ffff00",fg:"#000000"},green:{main:"#00ff00",fg:"#000000"},cyan:{main:"#66ccff",fg:"#000000"},blue:{main:"#2222ff",fg:"#ffffff"},pink:{main:"#ff99ff",fg:"#000000"},purple:{main:"#880088",fg:"#ffffff"}};const _e={key:0,class:"modal-overlay"},ye={class:"modal-container"},I={props:["open"],setup(s){return(e,o)=>(u(),M(j,{to:"#modals"},[s.open?(u(),p("div",_e,[t("div",ye,[W(e.$slots,"default")])])):k("",!0)]))}};const he={class:"die"},ge={viewBox:"0 0 100 100"},E={props:["value","color","pips"],setup(s){const e=s,o=b(()=>e.value>=2),r=b(()=>e.value%2),l=b(()=>e.value>=4),n=b(()=>e.value===6);return(f,_)=>(u(),p("button",he,[(u(),p("svg",ge,[t("path",{style:v({fill:s.color}),d:"M20 20h80v80h-80Z"},null,4),t("path",{style:v({fill:s.color}),d:"M0 4l16 16v76l-16 -16Z"},null,4),t("path",{style:v({fill:s.color}),d:"M4 0h76l16 16h-76Z"},null,4),i(o)?(u(),p("circle",{key:0,class:"pip",cx:"40",cy:"40",r:"8",style:v({fill:s.pips})},null,4)):k("",!0),i(n)?(u(),p("circle",{key:1,class:"pip",cx:"60",cy:"40",r:"8",style:v({fill:s.pips})},null,4)):k("",!0),i(l)?(u(),p("circle",{key:2,class:"pip",cx:"80",cy:"40",r:"8",style:v({fill:s.pips})},null,4)):k("",!0),i(r)?(u(),p("circle",{key:3,class:"pip",cx:"60",cy:"60",r:"8",style:v({fill:s.pips})},null,4)):k("",!0),i(l)?(u(),p("circle",{key:4,class:"pip",cx:"40",cy:"80",r:"8",style:v({fill:s.pips})},null,4)):k("",!0),i(n)?(u(),p("circle",{key:5,class:"pip",cx:"60",cy:"80",r:"8",style:v({fill:s.pips})},null,4)):k("",!0),i(o)?(u(),p("circle",{key:6,class:"pip",cx:"80",cy:"80",r:"8",style:v({fill:s.pips})},null,4)):k("",!0)]))]))}};const xe={class:"scoremod-root flex-col flex-gap-m"},ke={class:"scoremod-main flex-row flex-gap-m"},be={class:"scoremod-dice flex-col flex-gap-m"},$e={class:"scoremod-slots flex-grow flex-col flex-gap-m"},Ce=["onClick"],we={class:"scoremod-slot-label"},Se={class:"scoremod-footer flex-row flex-gap-m"},Me={class:"scoremod-total flex-grow"},Ae={props:["target"],emits:["close"],setup(s){const e=s,o=D(),r=()=>o.scores[e.target.player].scores[e.target.round],l=b(()=>({color:$[o.scores[e.target.player].color].main,pips:$[o.scores[e.target.player].color].fg}));b(()=>o.scores[e.target.player].color.main);const n=b(()=>o.roundScores[e.target.player][e.target.round]),f=g(null);function _(d){f.value!==null&&r()[f.value].push(d)}function x(d,a){r()[d].splice(a,1)}return(d,a)=>{const y=R("FAIcon");return u(),M(I,{open:s.target!==null},{default:P(()=>[t("div",xe,[t("div",ke,[t("div",be,[(u(),p(S,null,w(6,c=>m(E,V({key:c,value:c},i(l),{onClick:h=>_(c)}),null,16,["value","onClick"])),64))]),t("div",$e,[(u(),p(S,null,w([3,2,1,0],c=>t("div",{class:z(["scoremod-slot",{selected:f.value===c}]),onClick:h=>f.value=c},[t("div",we,A(c+1)+"x",1),(u(!0),p(S,null,w(r()[c],(h,C)=>(u(),M(E,V({key:C,value:h},i(l),{onClick:N=>x(c,C)}),null,16,["value","onClick"]))),128))],10,Ce)),64))])]),t("div",Se,[t("button",{class:"scoremod-ok",onClick:a[0]||(a[0]=c=>s.target=null)},[m(y,{icon:"check",size:"2x",title:"Confirm"})]),t("div",Me,A(i(n)),1)])])]),_:1},8,["open"])}}};const Pe={class:"playermod-root flex-col flex-gap-m"},Ie={class:"playermod-palette"},De=["onClick"],Fe={emits:["confirmed"],setup(s,{expose:e,emit:o}){const r=g(!1),l=g(null),n=Q({name:"",color:null});function f(x,d={name:"",color:null}){r.value=!0,l.value=x,n.name=d.name,n.color=d.color}function _(){r.value=!1,o("confirmed",l.value,n)}return e({open:f}),(x,d)=>(u(),M(I,{open:r.value},{default:P(()=>[t("div",Pe,[X(t("input",{class:"playermod-name","onUpdate:modelValue":d[0]||(d[0]=a=>i(n).name=a)},null,512),[[Y,i(n).name]]),t("div",Ie,[(u(!0),p(S,null,w(i($),(a,y)=>(u(),p("button",{class:z(["playermod-color",{selected:i(n).color===y}]),key:a.id,style:v({backgroundColor:a.main}),onClick:c=>i(n).color=y},null,14,De))),128))]),t("button",{onClick:_},"OK"),t("button",{onClick:d[1]||(d[1]=a=>r.value=!1)},"Cancel")])]),_:1},8,["open"]))}},Ne={class:"reset-root flex-col flex-gap-m"},Oe={setup(s,{expose:e}){const o=D(),r=g(!1);function l(){r.value=!0}return e({open:l}),(n,f)=>(u(),M(I,{open:r.value},{default:P(()=>[t("div",Ne,[t("button",{onClick:f[0]||(f[0]=_=>{i(o).clearScores(),r.value=!1})},"Reset scores"),t("button",{onClick:f[1]||(f[1]=_=>{i(o).clearAll(),r.value=!1})},"Reset all"),t("button",{onClick:f[2]||(f[2]=_=>r.value=!1)},"Cancel")])]),_:1},8,["open"]))}};const Be={class:"aboutroot flex-col flex-gap-m"},Le=t("p",{class:"title"},"DiceCore",-1),Te=t("p",null,[ee("A minimalistic scoreboard for "),t("a",{href:"https://boardgamegeek.com/boardgame/16747/tumblin-dice",target:"_blank"},"Tumblin-Dice")],-1),Ve=t("p",null,'by rrobby86 / "barbap"',-1),Ee=t("a",{href:"https://github.com/rrobby86/dicecore",target:"_blank"},"Help and source code",-1),Re={setup(s,{expose:e}){const o=g(!1);function r(){o.value=!0}return e({open:r}),(l,n)=>(u(),M(I,{open:o.value},{default:P(()=>[t("div",Be,[Le,Te,Ve,Ee,t("button",{onClick:n[0]||(n[0]=f=>o.value=!1)},"OK")])]),_:1},8,["open"]))}};const ze={class:"main flex-col flex-gap-m"},Ke={class:"main-topbar flex-row flex-gap-m"},Ue={class:"main-buttons flex-row flex-gap-m"},Ze={class:"main-table flex-grow"},qe={class:"scoretable"},Ge={class:"player-root flex-row flex-gap-m"},He={class:"player-name flex-grow"},Je={class:"player-buttons flex-row flex-gap-m"},We=["onClick"],je=["onClick"],Qe=["onClick"],Xe={setup(s){const e=D(),o=g(null),r=g(),l=g(),n=g(),f=d=>({backgroundColor:$[d.color].main,color:$[d.color].fg});function _(d,a){o.value={player:d,round:a}}function x(d,a){d===-1?e.addPlayer(a):e.updatePlayer(d,a)}return(d,a)=>{const y=R("FAIcon");return u(),p("div",ze,[t("div",Ke,[t("div",{class:"main-title flex-grow",onClick:a[0]||(a[0]=(...c)=>n.value.open&&n.value.open(...c))},"DiceCore"),t("div",Ue,[t("button",{class:"custom-btn",onClick:a[1]||(a[1]=c=>r.value.open(-1))},[m(y,{icon:"user-plus",title:"Add player"})]),t("button",{class:"custom-btn",onClick:a[2]||(a[2]=(...c)=>i(e).rank&&i(e).rank(...c))},[m(y,{icon:"arrow-down-wide-short",title:"Rank players by score"})]),t("button",{class:"custom-btn",onClick:a[3]||(a[3]=(...c)=>i(e).shuffle&&i(e).shuffle(...c))},[m(y,{icon:"shuffle",title:"Shuffle players"})]),t("button",{class:"custom-btn",onClick:a[4]||(a[4]=(...c)=>l.value.open&&l.value.open(...c))},[m(y,{icon:"eraser",title:"Reset"})])])]),t("div",Ze,[t("table",qe,[m(oe,{name:"player-rows"},{default:P(()=>[(u(!0),p(S,null,w(i(e).scores,(c,h)=>(u(),p("tr",{key:c.id},[t("td",{class:"player-cell",style:v(f(c))},[t("div",Ge,[t("div",He,A(c.name),1),t("div",Je,[t("button",{class:"custom-btn",onClick:C=>r.value.open(h,c)},[m(y,{icon:"pencil",title:"Edit",color:i($)[c.color].fg},null,8,["color"])],8,We),t("button",{class:"custom-btn",onClick:C=>i(e).removePlayer(h)},[m(y,{icon:"user-minus",title:"Remove",color:i($)[c.color].fg},null,8,["color"])],8,je)])])],4),(u(!0),p(S,null,w(i(e).roundScores[h],(C,N)=>(u(),p("td",{class:"score-cell",onClick:oo=>_(h,N)},A(C),9,Qe))),256)),t("td",{class:"total-cell",style:v(f(c))},A(i(e).totalScores[h]),5)]))),128))]),_:1})])]),m(Ae,{target:o.value,onClose:a[5]||(a[5]=c=>o.value=null)},null,8,["target"]),m(Fe,{ref_key:"playerModal",ref:r,onConfirmed:x},null,512),m(Oe,{ref_key:"resetModal",ref:l},null,512),m(Re,{ref_key:"aboutModal",ref:n},null,512)])}}};const Ye={class:"root-container"},eo={setup(s){return(e,o)=>(u(),p("div",Ye,[m(Xe)]))}};se.add(te,le,re,ne,ce,ae,ie);const F=ue(eo),K=fe();K.use(de);F.use(K);F.component("FAIcon",pe);F.mount("#app");