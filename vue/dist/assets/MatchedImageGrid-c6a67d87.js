import{d as U,x as q,o as r,l as _,c as t,m as o,n as e,p as y,q as h,A as E,t as b,B as O,y as M,H as u,K as S,N as D,R as L}from"./index-63535476.js";import{i as j,j as H,t as K,L as Q,R as J,k as W,S as X}from"./fullScreenContextMenu-9996dccf.js";import{g as Y,M as Z}from"./db-7625db8e.js";import{u as ee}from"./hook-6eba2dde.js";import"./index-c4ce3193.js";import"./_baseIteratee-9a347b0f.js";import"./button-2bb709fb.js";const ie={class:"hint"},le={key:1,class:"preview-switch"},se=U({__name:"MatchedImageGrid",props:{tabIdx:null,paneIdx:null,selectedTagIds:null,id:null},setup(V){const m=V,{queue:p,images:l,onContextMenuClickU:v,stackViewEl:T,previewIdx:n,previewing:f,onPreviewVisibleChange:z,previewImgMove:g,canPreview:k,itemSize:I,gridItems:B,showGenInfo:a,imageGenInfo:w,q:$,multiSelectedIdxs:A,onFileItemClick:G,scroller:C,showMenuIdx:d}=ee();return q(()=>m.selectedTagIds,async()=>{var i;const{res:c}=p.pushAction(()=>Y(m.selectedTagIds));l.value=await c,(i=C.value)==null||i.scrollToItem(0)},{immediate:!0}),(c,i)=>{const N=D,R=Z,F=X;return r(),_("div",{class:"container",ref_key:"stackViewEl",ref:T},[t(F,{size:"large",spinning:!e(p).isIdle},{default:o(()=>[t(R,{visible:e(a),"onUpdate:visible":i[1]||(i[1]=s=>y(a)?a.value=s:null),width:"70vw","mask-closable":"",onOk:i[2]||(i[2]=s=>a.value=!1)},{cancelText:o(()=>[]),default:o(()=>[t(N,{active:"",loading:!e($).isIdle},{default:o(()=>[h("div",{style:{width:"100%","word-break":"break-all","white-space":"pre-line","max-height":"70vh",overflow:"auto"},onDblclick:i[0]||(i[0]=s=>e(E)(e(w)))},[h("div",ie,b(c.$t("doubleClickToCopy")),1),O(" "+b(e(w)),1)],32)]),_:1},8,["loading"])]),_:1},8,["visible"]),e(l)?(r(),M(e(j),{key:0,ref_key:"scroller",ref:C,class:"file-list",items:e(l),"item-size":e(I).first,"key-field":"fullpath","item-secondary-size":e(I).second,gridItems:e(B)},{default:o(({item:s,index:x})=>[t(H,{idx:x,file:s,"show-menu-idx":e(d),"onUpdate:showMenuIdx":i[3]||(i[3]=P=>y(d)?d.value=P:null),onFileItemClick:e(G),"full-screen-preview-image-url":e(l)[e(n)]?e(K)(e(l)[e(n)]):"",selected:e(A).includes(x),onContextMenuClick:e(v),onPreviewVisibleChange:e(z)},null,8,["idx","file","show-menu-idx","onFileItemClick","full-screen-preview-image-url","selected","onContextMenuClick","onPreviewVisibleChange"])]),_:1},8,["items","item-size","item-secondary-size","gridItems"])):u("",!0),e(f)?(r(),_("div",le,[t(e(Q),{onClick:i[4]||(i[4]=s=>e(g)("prev")),class:S({disable:!e(k)("prev")})},null,8,["class"]),t(e(J),{onClick:i[5]||(i[5]=s=>e(g)("next")),class:S({disable:!e(k)("next")})},null,8,["class"])])):u("",!0)]),_:1},8,["spinning"]),e(f)&&e(l)&&e(l)[e(n)]?(r(),M(W,{key:0,file:e(l)[e(n)],idx:e(n),onContextMenuClick:e(v)},null,8,["file","idx","onContextMenuClick"])):u("",!0)],512)}}});const ue=L(se,[["__scopeId","data-v-56804d92"]]);export{ue as default};