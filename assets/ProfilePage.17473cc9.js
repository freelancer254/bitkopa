import{a as o,Q as u}from"./QMarkupTable.c094867a.js";import{Q as h}from"./QPage.86042b36.js";import{_ as f,a3 as g,n as d,a9 as p,p as c,q as i,ac as _,ab as m,t,s as e,aa as b,a4 as r,u as k,$ as x,a8 as n,a5 as y}from"./index.fec27aec.js";import{u as V}from"./bitkopaStore.15472973.js";import"./axios.16b9abd7.js";const q=g({setup(){return{bitkopaStore:V(),lorem:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}}}),v={class:"q-pa-xs row justify-center"},S={class:"col-6 q-pt-xl q-mt-xl"},w={class:"q-pa-md"},D={class:"text-left",style:{width:"150px"}},P={class:"text-right"},N={class:"text-right"},Q={class:"text-right"},U={class:"text-right"},C={class:"text-right"},B={class:"text-left"},$={class:"text-right"},I={class:"text-right"},L={class:"text-right"},T={class:"text-right"},j={class:"text-right"},E={class:"col-5 q-pt-xl q-mt-xl q-px-lg"},F={class:"q-pa-md"},A={class:"text-left",style:{width:"150px"}},M={class:"text-right"},z={class:"text-right"},G={class:"text-right"},H={class:"text-right"},J={class:"text-right"},K={class:"text-left"},O={class:"text-right"},R={class:"text-right"},W={class:"text-right"},X={class:"text-right"},Y={class:"text-right"},Z={class:"q-pa-xs row justify-center"},tt={class:"col-12 col-md-6 q-pt-xl q-mt-xl q-px-md"},et={class:"row"},st={class:"col-6 q-pa-sm"},ot={class:"col-6 q-pa-sm"},lt={class:"row"},at={class:"col-6 q-pa-sm"},it={class:"col-6 q-pa-sm"},nt={class:"col-12 col-md-4 q-pt-xl q-mt-xl"},dt={class:"row"},rt={class:"col-6 q-pa-sm"},pt={class:"col-6 q-pa-sm"},mt={class:"row"},ut={class:"col-6 q-pa-sm"},ht={class:"col-6 q-pa-sm"};function ct(s,a,_t,bt,kt,xt){return d(),p(m,null,[!s.bitkopaStore.connected||!s.bitkopaStore.verified?(d(),c(h,{key:0},{default:i(()=>[t("div",v,[t("div",S,[t("div",w,[e(u,null,{default:i(()=>[t("thead",null,[t("tr",null,[t("th",D,[e(o,{animation:"blink",type:"text"})]),t("th",P,[e(o,{animation:"blink",type:"text"})]),t("th",N,[e(o,{animation:"blink",type:"text"})]),t("th",Q,[e(o,{animation:"blink",type:"text"})]),t("th",U,[e(o,{animation:"blink",type:"text"})]),t("th",C,[e(o,{animation:"blink",type:"text"})])])]),t("tbody",null,[(d(),p(m,null,b(5,l=>t("tr",{key:l},[t("td",B,[e(o,{animation:"blink",type:"text",width:"85px"})]),t("td",$,[e(o,{animation:"blink",type:"text",width:"50px"})]),t("td",I,[e(o,{animation:"blink",type:"text",width:"35px"})]),t("td",L,[e(o,{animation:"blink",type:"text",width:"65px"})]),t("td",T,[e(o,{animation:"blink",type:"text",width:"25px"})]),t("td",j,[e(o,{animation:"blink",type:"text",width:"85px"})])])),64))])]),_:1})])]),t("div",E,[t("div",F,[e(u,null,{default:i(()=>[t("thead",null,[t("tr",null,[t("th",A,[e(o,{animation:"blink",type:"text"})]),t("th",M,[e(o,{animation:"blink",type:"text"})]),t("th",z,[e(o,{animation:"blink",type:"text"})]),t("th",G,[e(o,{animation:"blink",type:"text"})]),t("th",H,[e(o,{animation:"blink",type:"text"})]),t("th",J,[e(o,{animation:"blink",type:"text"})])])]),t("tbody",null,[(d(),p(m,null,b(5,l=>t("tr",{key:l},[t("td",K,[e(o,{animation:"blink",type:"text",width:"85px"})]),t("td",O,[e(o,{animation:"blink",type:"text",width:"50px"})]),t("td",R,[e(o,{animation:"blink",type:"text",width:"35px"})]),t("td",W,[e(o,{animation:"blink",type:"text",width:"65px"})]),t("td",X,[e(o,{animation:"blink",type:"text",width:"25px"})]),t("td",Y,[e(o,{animation:"blink",type:"text",width:"85px"})])])),64))])]),_:1})])])])]),_:1})):_("",!0),s.bitkopaStore.connected&&s.bitkopaStore.verified?(d(),c(h,{key:1},{default:i(()=>[t("div",Z,[t("div",tt,[e(y,{elevated:"",bordered:"",push:""},{default:i(()=>[e(r,null,{default:i(()=>[k(" Personal Information ")]),_:1}),e(x),e(r,null,{default:i(()=>[t("div",et,[t("div",st,[e(n,{readonly:"",modelValue:s.bitkopaStore.userDetails.firstName,"onUpdate:modelValue":a[0]||(a[0]=l=>s.bitkopaStore.userDetails.firstName=l),label:"First Name",placeholder:"Placeholder",dense:s.dense},null,8,["modelValue","dense"])]),t("div",ot,[e(n,{readonly:"",modelValue:s.bitkopaStore.userDetails.lastName,"onUpdate:modelValue":a[1]||(a[1]=l=>s.bitkopaStore.userDetails.lastName=l),label:"Last Name",placeholder:"Placeholder",dense:s.dense},null,8,["modelValue","dense"])])]),t("div",lt,[t("div",at,[e(n,{readonly:"",modelValue:s.bitkopaStore.userDetails.id,"onUpdate:modelValue":a[2]||(a[2]=l=>s.bitkopaStore.userDetails.id=l),label:"ID/Passport",placeholder:"Placeholder",dense:s.dense},null,8,["modelValue","dense"])]),t("div",it,[e(n,{readonly:"",modelValue:s.bitkopaStore.userDetails.address,"onUpdate:modelValue":a[3]||(a[3]=l=>s.bitkopaStore.userDetails.address=l),label:"Address",placeholder:"Placeholder",dense:s.dense},null,8,["modelValue","dense"])])])]),_:1})]),_:1})]),t("div",nt,[e(y,{elevated:"",bordered:"",push:""},{default:i(()=>[e(r,null,{default:i(()=>[k(" Notification Channels")]),_:1}),e(x),e(r,null,{default:i(()=>[t("div",dt,[t("div",rt,[e(n,{readonly:"",modelValue:s.bitkopaStore.userDetails.email,"onUpdate:modelValue":a[4]||(a[4]=l=>s.bitkopaStore.userDetails.email=l),label:"Email",placeholder:"Placeholder",dense:s.dense},null,8,["modelValue","dense"])]),t("div",pt,[e(n,{readonly:"",modelValue:s.bitkopaStore.userDetails.phone,"onUpdate:modelValue":a[5]||(a[5]=l=>s.bitkopaStore.userDetails.phone=l),label:"Phone",placeholder:"Placeholder",dense:s.dense},null,8,["modelValue","dense"])])]),t("div",mt,[t("div",ut,[e(n,{readonly:"",modelValue:s.bitkopaStore.userDetails.telegram,"onUpdate:modelValue":a[6]||(a[6]=l=>s.bitkopaStore.userDetails.telegram=l),label:"Telegram",placeholder:"Placeholder",dense:s.dense},null,8,["modelValue","dense"])]),t("div",ht,[e(n,{readonly:"",modelValue:s.bitkopaStore.userDetails.pushNotifications,"onUpdate:modelValue":a[7]||(a[7]=l=>s.bitkopaStore.userDetails.pushNotifications=l),label:"Push Notifications",placeholder:"Placeholder",dense:s.dense},null,8,["modelValue","dense"])])])]),_:1})]),_:1})])])]),_:1})):_("",!0)],64)}var vt=f(q,[["render",ct]]);export{vt as default};