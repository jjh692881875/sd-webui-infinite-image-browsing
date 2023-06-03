import{c as y,W as q,d as x,x as P,X as _,Y as O,o as l,l as c,q as t,t as i,s as m,E as g,m as F,C as N,J as p,n as h,A as w,Z as $,$ as V,a0 as B,U as H,a1 as j,a2 as L,V as A}from"./index-c7f6a24e.js";var R={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M688 312v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8zm-392 88c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm376 116c-119.3 0-216 96.7-216 216s96.7 216 216 216 216-96.7 216-216-96.7-216-216-216zm107.5 323.5C750.8 868.2 712.6 884 672 884s-78.8-15.8-107.5-44.5C535.8 810.8 520 772.6 520 732s15.8-78.8 44.5-107.5C593.2 595.8 631.4 580 672 580s78.8 15.8 107.5 44.5C808.2 653.2 824 691.4 824 732s-15.8 78.8-44.5 107.5zM761 656h-44.3c-2.6 0-5 1.2-6.5 3.3l-63.5 87.8-23.1-31.9a7.92 7.92 0 00-6.5-3.3H573c-6.5 0-10.3 7.4-6.5 12.7l73.8 102.1c3.2 4.4 9.7 4.4 12.9 0l114.2-158c3.9-5.3.1-12.7-6.4-12.7zM440 852H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h272c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}}]},name:"file-done",theme:"outlined"};const W=R;function S(a){for(var o=1;o<arguments.length;o++){var s=arguments[o]!=null?Object(arguments[o]):{},r=Object.keys(s);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(s).filter(function(u){return Object.getOwnPropertyDescriptor(s,u).enumerable}))),r.forEach(function(u){E(a,u,s[u])})}return a}function E(a,o,s){return o in a?Object.defineProperty(a,o,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[o]=s,a}var C=function(o,s){var r=S({},o,s.attrs);return y(q,S({},r,{icon:W}),null)};C.displayName="FileDoneOutlined";C.inheritAttrs=!1;const T=C,G=a=>(j("data-v-89e9fce3"),a=a(),L(),a),J={class:"container"},Q={class:"header"},U=G(()=>t("div",{"flex-placeholder":""},null,-1)),X={href:"https://github.com/zanllp/sd-webui-infinite-image-browsing/issues/131",target:"_blank",class:"last-record"},Y={href:"https://github.com/zanllp/sd-webui-infinite-image-browsing/issues/90",target:"_blank",class:"last-record"},Z={class:"content"},K={key:0,class:"quick-start"},ee={key:1,class:"quick-start"},te=["onClick"],se={class:"text line-clamp-1"},ne={class:"quick-start"},ae=["onClick"],le={class:"text line-clamp-1"},ce={class:"text line-clamp-1"},oe={class:"text line-clamp-1"},ie={key:2,class:"quick-start"},re=["onClick"],ue={class:"text line-clamp-1"},de=x({__name:"emptyStartup",props:{tabIdx:{},paneIdx:{}},setup(a){const o=a,s=P(),r={local:_("local"),"tag-search":_("imgSearch"),"fuzzy-search":_("fuzzy-search"),"global-setting":_("globalSettings")},u=(e,f,k=!1)=>{let d;switch(e){case"tag-search-matched-image-grid":return;case"global-setting":case"tag-search":case"fuzzy-search":case"empty":d={type:e,name:r[e],key:Date.now()+$()};break;case"local":d={type:e,name:r[e],key:Date.now()+$(),path:f,walkModePath:k?f:void 0}}const n=s.tabList[o.tabIdx];n.panes.splice(o.paneIdx,1,d),n.key=d.key},v=O(()=>{var e;return(e=s.tabListHistoryRecord)==null?void 0:e[1]}),z=O(()=>s.quickMovePaths.filter(({key:e})=>e==="outdir_txt2img_samples"||e==="outdir_img2img_samples")),I=window.parent!==window,D=()=>window.parent.open("/infinite_image_browsing"),M=()=>{V(v.value),s.tabList=B(v.value.tabs)};return(e,f)=>{var d;const k=H;return l(),c("div",J,[t("div",Q,[t("h1",null,i(e.$t("welcome")),1),U,t("a",X,i(e.$t("changlog")),1),t("a",Y,i(e.$t("faq")),1)]),t("div",Z,[z.value.length?(l(),c("div",K,[t("h2",null,i(e.$t("walkMode")),1),t("ul",null,[(l(!0),c(m,null,g(z.value,n=>(l(),c("li",{key:n.dir,class:"item"},[y(k,{onClick:b=>u("local",n.dir,!0),ghost:"",type:"primary",block:""},{default:F(()=>[N(i(n.zh),1)]),_:2},1032,["onClick"])]))),128))])])):p("",!0),h(s).quickMovePaths.length?(l(),c("div",ee,[t("h2",null,i(e.$t("launchFromQuickMove")),1),t("ul",null,[(l(!0),c(m,null,g(h(s).quickMovePaths,n=>(l(),c("li",{key:n.key,class:"item",onClick:w(b=>u("local",n.dir),["prevent"])},[t("span",se,i(n.zh),1)],8,te))),128))])])):p("",!0),t("div",ne,[t("h2",null,i(e.$t("launch")),1),t("ul",null,[(l(!0),c(m,null,g(Object.keys(r),n=>(l(),c("li",{key:n,class:"item",onClick:w(b=>u(n),["prevent"])},[t("span",le,i(r[n]),1)],8,ae))),128)),I?(l(),c("li",{key:0,class:"item",onClick:D},[t("span",ce,i(e.$t("openInNewWindow")),1)])):p("",!0),(d=v.value)!=null&&d.tabs.length?(l(),c("li",{key:1,class:"item",onClick:M},[t("span",oe,i(e.$t("restoreLastRecord")),1)])):p("",!0)])]),h(s).recent.length?(l(),c("div",ie,[t("h2",null,i(e.$t("recent")),1),t("ul",null,[(l(!0),c(m,null,g(h(s).recent,n=>(l(),c("li",{key:n.key,class:"item",onClick:w(b=>u("local",n.path),["prevent"])},[y(h(T),{class:"icon"}),t("span",ue,i(n.path),1)],8,re))),128))])])):p("",!0)])])}}});const he=A(de,[["__scopeId","data-v-89e9fce3"]]);export{he as default};