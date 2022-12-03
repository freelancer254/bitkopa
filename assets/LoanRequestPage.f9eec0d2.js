import{a as k,Q as z}from"./QMarkupTable.15fa33f3.js";import{Q as R}from"./QPage.e48a5bf1.js";import{_ as E,j as K,k as F,r as j,n as d,a9 as f,p as c,q as t,ac as g,ab as x,t as a,s as e,aa as y,a6 as m,u as n,v as i,a8 as L,O as h,a5 as Q,a4 as V,a0 as S,ad as A}from"./index.28d8620d.js";import{Q as p,b as s,a as r}from"./QItemLabel.33142631.js";import{Q as _}from"./QList.d79ddb0a.js";import{Q as v}from"./QBtnDropdown.17f9dc82.js";import{Q as B}from"./QSpace.8e83e7b2.js";import{Q as N,a as D,b as P}from"./QStepper.dc5c5ddb.js";import{Q as I}from"./touch.eae83678.js";import{C}from"./ClosePopup.4dcfa0cd.js";import{u as H}from"./bitkopaStore.600a674b.js";import{u as W,a as Y,b as O}from"./aggregatorV3InterfaceABI.2f9379de.js";import{a as M,b as U}from"./axios.2efb2bd9.js";import"./selection.2a43666f.js";import"./QSlideTransition.2ab3aae9.js";import"./use-panel.78ac1833.js";const G={setup(){const b=H(),u=M.get("/loanterms"),T=M.get("/paymentmethods"),l=function(){U.all([u,T]).then(U.spread((...w)=>{b.loanTerms=w[0].data,b.selectedCurrency=w[0].data.currencies[0],b.selectedLoanDuration=w[0].data.duration[0],b.selectedCollateral=w[0].data.collateral[0],b.selectedInterestRate=w[0].data.interestrates[w[0].data.duration[0].toString()],b.allSupportedTokens=w[0].data.collateral,b.paymentMethods=w[1].data,b.selectedPaymentMethod=w[1].data[0]}))};return K(()=>{b.verificationContract=W,b.erc20ABI=Y,b.aggregatorABI=O,l()}),F(()=>{b.stopListener()}),{step:j(1),bitkopaStore:b}}},J={class:"q-pa-xs row justify-center"},X={class:"col-6 q-pt-xl q-mt-xl"},Z={class:"q-pa-md"},$={class:"text-left",style:{width:"150px"}},ee={class:"text-right"},te={class:"text-right"},le={class:"text-right"},oe={class:"text-right"},ae={class:"text-right"},ne={class:"text-left"},ie={class:"text-right"},re={class:"text-right"},de={class:"text-right"},se={class:"text-right"},ce={class:"text-right"},ue={class:"col-5 q-pt-xl q-mt-xl q-px-lg"},me={class:"q-pa-md"},pe={class:"text-left",style:{width:"150px"}},be={class:"text-right"},ke={class:"text-right"},_e={class:"text-right"},fe={class:"text-right"},xe={class:"text-right"},ye={class:"text-left"},he={class:"text-right"},ge={class:"text-right"},Se={class:"text-right"},ve={class:"text-right"},Ce={class:"text-right"},qe={class:"gt-md q-pa-xs row justify-center"},we={class:"col-12 col-md-6 q-pt-xl q-mt-xl q-px-sm"},Ae={class:"row items-center no-wrap"},Le={class:"text-center"},Ve={class:"row items-center no-wrap"},Be={class:"text-center"},De={class:"row items-center no-wrap"},Ie={class:"text-center"},Qe={class:"row items-center no-wrap"},Te={class:"text-center"},ze=a("p",{class:"text-caption",style:{color:"indigo"}}," By clicking submit, you agree to the terms of the loan. ",-1),Re={class:"col-12 col-md-5 q-pt-xl q-mt-xl q-px-lg text-center text-dark"},Ne={class:"row items-center no-wrap"},Pe={class:"col"},Me={class:"row items-center no-wrap"},Ue={class:"text-center"},Ee={class:"row items-center no-wrap"},Ke={class:"text-center"},Fe={class:"row items-center no-wrap"},je={class:"text-center"},He=a("p",{class:"text-caption",style:{color:"indigo"}}," There is no interest payment for early repayment! ",-1),We={class:"lt-lg q-pa-xs row justify-center"},Ye={class:"col-12 col-md-10 q-pt-xl q-mt-xl q-px-sm"},Oe={class:"row items-center no-wrap"},Ge={class:"text-center"},Je={class:"row items-center no-wrap"},Xe={class:"text-center"},Ze={class:"row items-center no-wrap"},$e={class:"text-center"},et={class:"row items-center no-wrap"},tt={class:"text-center"},lt=a("p",{class:"text-caption",style:{color:"indigo"}}," By clicking submit, you agree to the terms of the loan. ",-1),ot={class:"col-12 col-md-10 q-pt-md q-mt-md q-px-lg q-mb-lg text-center text-dark"},at={class:"row items-center no-wrap"},nt={class:"col"},it={class:"row items-center no-wrap"},rt={class:"text-center"},dt={class:"row items-center no-wrap"},st={class:"text-center"},ct={class:"row items-center no-wrap"},ut={class:"text-center"},mt=a("p",{class:"text-caption",style:{color:"indigo"}}," There is no interest payment for early repayment! ",-1);function pt(b,u,T,l,w,bt){return d(),f(x,null,[!l.bitkopaStore.connected||!l.bitkopaStore.verified?(d(),c(R,{key:0},{default:t(()=>[a("div",J,[a("div",X,[a("div",Z,[e(z,null,{default:t(()=>[a("thead",null,[a("tr",null,[a("th",$,[e(k,{animation:"blink",type:"text"})]),a("th",ee,[e(k,{animation:"blink",type:"text"})]),a("th",te,[e(k,{animation:"blink",type:"text"})]),a("th",le,[e(k,{animation:"blink",type:"text"})]),a("th",oe,[e(k,{animation:"blink",type:"text"})]),a("th",ae,[e(k,{animation:"blink",type:"text"})])])]),a("tbody",null,[(d(),f(x,null,y(5,o=>a("tr",{key:o},[a("td",ne,[e(k,{animation:"blink",type:"text",width:"85px"})]),a("td",ie,[e(k,{animation:"blink",type:"text",width:"50px"})]),a("td",re,[e(k,{animation:"blink",type:"text",width:"35px"})]),a("td",de,[e(k,{animation:"blink",type:"text",width:"65px"})]),a("td",se,[e(k,{animation:"blink",type:"text",width:"25px"})]),a("td",ce,[e(k,{animation:"blink",type:"text",width:"85px"})])])),64))])]),_:1})])]),a("div",ue,[a("div",me,[e(z,null,{default:t(()=>[a("thead",null,[a("tr",null,[a("th",pe,[e(k,{animation:"blink",type:"text"})]),a("th",be,[e(k,{animation:"blink",type:"text"})]),a("th",ke,[e(k,{animation:"blink",type:"text"})]),a("th",_e,[e(k,{animation:"blink",type:"text"})]),a("th",fe,[e(k,{animation:"blink",type:"text"})]),a("th",xe,[e(k,{animation:"blink",type:"text"})])])]),a("tbody",null,[(d(),f(x,null,y(5,o=>a("tr",{key:o},[a("td",ye,[e(k,{animation:"blink",type:"text",width:"85px"})]),a("td",he,[e(k,{animation:"blink",type:"text",width:"50px"})]),a("td",ge,[e(k,{animation:"blink",type:"text",width:"35px"})]),a("td",Se,[e(k,{animation:"blink",type:"text",width:"65px"})]),a("td",ve,[e(k,{animation:"blink",type:"text",width:"25px"})]),a("td",Ce,[e(k,{animation:"blink",type:"text",width:"85px"})])])),64))])]),_:1})])])])]),_:1})):g("",!0),l.bitkopaStore.connected&&l.bitkopaStore.verified?(d(),c(R,{key:1},{default:t(()=>[a("div",qe,[a("div",we,[e(P,{modelValue:l.step,"onUpdate:modelValue":u[4]||(u[4]=o=>l.step=o),ref:"stepper",color:"primary",animated:""},{navigation:t(()=>[e(N,null,{default:t(()=>[l.step===3&&l.bitkopaStore.finalCollateralAmount>0?(d(),c(m,{key:0,onClick:l.bitkopaStore.loanRequest,color:"indigo",outline:"",label:"Submit"},null,8,["onClick"])):g("",!0),l.step===1||l.step===2&&l.bitkopaStore.finalBorrowAmount>0?(d(),c(m,{key:1,onClick:u[2]||(u[2]=o=>b.$refs.stepper.next()),color:"indigo",label:"Continue"})):g("",!0),l.step>1?(d(),c(m,{key:2,flat:"",color:"secondary",onClick:u[3]||(u[3]=o=>b.$refs.stepper.previous()),label:"Back",class:"q-ml-sm"})):g("",!0)]),_:1})]),message:t(()=>[l.step===1?(d(),c(I,{key:0,class:"bg-indigo text-white q-px-lg"},{default:t(()=>[n(" Loan Amount Will Depend On The Collateral Amount ")]),_:1})):l.step===2?(d(),c(I,{key:1,class:"bg-indigo text-white q-px-lg"},{default:t(()=>[n(" Wallet balance: "+i(l.bitkopaStore.tokenBalances[l.bitkopaStore.selectedCollateral.id])+" "+i(l.bitkopaStore.selectedCollateral.symbol)+" | You can provide excess collateral to lower liquidation price! ",1)]),_:1})):l.step===3?(d(),c(I,{key:2,class:"bg-indigo text-white q-px-lg"},{default:t(()=>[n(" There is no interest payment for early repayment. ")]),_:1})):g("",!0)]),default:t(()=>[e(D,{name:1,title:"Loan Amount and Duration",icon:"payments",done:l.step>1,style:{"min-height":"200px"}},{default:t(()=>[e(L,{outlined:"",loading:l.bitkopaStore.loanAmountSpinner,modelValue:l.bitkopaStore.finalBorrowAmount,"onUpdate:modelValue":u[0]||(u[0]=o=>l.bitkopaStore.finalBorrowAmount=o),"label-color":"dark",label:"Amount ","input-class":"text-dark text-bold text-h6",clearable:"","stack-label":"",dense:b.dense},{append:t(()=>[e(m,{outline:"",rounded:"","no-caps":"",class:"gt-sm",color:"indigo",label:"Min",size:"10px",onClick:l.bitkopaStore.calculateMinAmount},null,8,["onClick"]),e(v,{split:"",color:"dark",flat:"","no-caps":""},{label:t(()=>[a("div",Ae,[e(h,{left:"",name:`img:countries/${l.bitkopaStore.selectedCurrency.icon}`},null,8,["name"]),a("div",Le,i(l.bitkopaStore.selectedCurrency.symbol),1)])]),default:t(()=>[(d(!0),f(x,null,y(l.bitkopaStore.loanTerms.currencies,o=>(d(),c(_,{key:o.id},{default:t(()=>[S((d(),c(p,{clickable:"",onClick:q=>l.bitkopaStore.changeCurrency(o)},{default:t(()=>[e(s,{avatar:""},{default:t(()=>[e(A,{icon:`img:countries/${o.icon}`,color:"white","text-color":"white"},null,8,["icon"])]),_:2},1024),e(s,null,{default:t(()=>[e(r,null,{default:t(()=>[n(i(o.symbol),1)]),_:2},1024),e(r,{caption:""},{default:t(()=>[n(i(o.fullName),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[C]])]),_:2},1024))),128))]),_:1}),e(v,{split:"",color:"dark",flat:"","no-caps":""},{label:t(()=>[a("div",Ve,[e(h,{left:"",name:"date_range"}),a("div",Be,[e(B),n(i(l.bitkopaStore.selectedLoanDuration)+" days ",1)])])]),default:t(()=>[(d(!0),f(x,null,y(l.bitkopaStore.loanTerms.duration,o=>(d(),c(_,{key:o},{default:t(()=>[S((d(),c(p,{clickable:"",onClick:q=>l.bitkopaStore.changeLoanDuration(o)},{default:t(()=>[e(s,null,{default:t(()=>[e(r,null,{default:t(()=>[n(i(o)+" days",1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[C]])]),_:2},1024))),128))]),_:1}),e(v,{split:"",color:"dark",flat:"","no-caps":""},{label:t(()=>[a("div",De,[e(h,{left:"",name:`img:payments/${l.bitkopaStore.selectedPaymentMethod.icon}`},null,8,["name"]),a("div",Ie,[e(B),n(i(l.bitkopaStore.selectedPaymentMethod.name),1)])])]),default:t(()=>[(d(!0),f(x,null,y(l.bitkopaStore.paymentMethods,o=>(d(),c(_,{key:o.id},{default:t(()=>[S((d(),c(p,{clickable:"",onClick:q=>l.bitkopaStore.changePaymentMethod(o)},{default:t(()=>[e(s,{avatar:""},{default:t(()=>[e(A,{icon:`img:payments/${o.icon}`,color:"white","text-color":"white"},null,8,["icon"])]),_:2},1024),e(s,null,{default:t(()=>[e(r,null,{default:t(()=>[n(i(o.name),1)]),_:2},1024),e(r,{caption:""},{default:t(()=>[n(i(o.accountNumber),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[C]])]),_:2},1024))),128))]),_:1})]),_:1},8,["loading","modelValue","dense"])]),_:1},8,["done"]),e(D,{name:2,title:"Collateral",icon:"credit_score",done:l.step>2,style:{"min-height":"200px"}},{default:t(()=>[e(L,{outlined:"",loading:l.bitkopaStore.collateralAmountSpinner,modelValue:l.bitkopaStore.finalCollateralAmount,"onUpdate:modelValue":u[1]||(u[1]=o=>l.bitkopaStore.finalCollateralAmount=o),"label-color":"dark",label:"Collateral ","input-class":"text-dark text-bold text-h6",clearable:"","stack-label":"",dense:b.dense},{append:t(()=>[e(v,{split:"",color:"dark",flat:"","no-caps":""},{label:t(()=>[a("div",Qe,[e(h,{left:"",name:`img:tokens/${l.bitkopaStore.selectedCollateral.icon}`},null,8,["name"]),a("div",Te,i(l.bitkopaStore.selectedCollateral.symbol),1)])]),default:t(()=>[(d(!0),f(x,null,y(l.bitkopaStore.loanTerms.collateral,o=>(d(),c(_,{key:o.id},{default:t(()=>[S((d(),c(p,{clickable:"",onClick:q=>l.bitkopaStore.changeCollateral(o)},{default:t(()=>[e(s,{avatar:""},{default:t(()=>[e(A,{icon:`img:tokens/${o.icon}`,color:"white","text-color":"dark"},null,8,["icon"])]),_:2},1024),e(s,null,{default:t(()=>[e(r,null,{default:t(()=>[n(i(o.symbol),1)]),_:2},1024),e(r,{caption:""},{default:t(()=>[n(i(o.fullName),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[C]])]),_:2},1024))),128))]),_:1})]),_:1},8,["loading","modelValue","dense"])]),_:1},8,["done"]),e(D,{name:3,title:"Confirm",icon:"check",style:{"min-height":"200px"}},{default:t(()=>[e(Q,{class:"section-1"},{default:t(()=>[l.bitkopaStore.finalCollateralAmount>0&&l.bitkopaStore.finalBorrowAmount>0?(d(),c(V,{key:0},{default:t(()=>[e(m,{style:{"pointer-events":"none"},icon:"thumb_up_alt",size:"15px",flat:"",class:"text-dark q-mr-xs",rounded:"",color:"indigo",label:"Confirm Loan Request Details","no-caps":""}),e(_,null,{default:t(()=>[e(p,null,{default:t(()=>[e(s,{avatar:""},{default:t(()=>[e(m,{style:{"pointer-events":"none"},icon:`img:countries/${l.bitkopaStore.selectedCurrency.icon}`,size:"15px",flat:"",class:"text-dark q-mr-xs",rounded:"",color:"indigo",label:"Loan Amount","no-caps":""},null,8,["icon"])]),_:1}),e(s,{side:""},{default:t(()=>[e(r,{class:"text-bold q-px-xl"},{default:t(()=>[n("Amount to borrow ")]),_:1}),e(r,{overline:"",class:"q-px-xl"},{default:t(()=>[n(i(parseInt(l.bitkopaStore.finalBorrowAmount).toLocaleString())+" "+i(l.bitkopaStore.selectedCurrency.symbol),1)]),_:1})]),_:1})]),_:1}),e(p,null,{default:t(()=>[e(s,{avatar:""},{default:t(()=>[e(m,{style:{"pointer-events":"none"},icon:"date_range",size:"15px",flat:"",class:"text-dark q-mr-xs",rounded:"",color:"indigo",label:"Loan Duration","no-caps":""})]),_:1}),e(s,{side:""},{default:t(()=>[e(r,{class:"text-bold q-px-xl"},{default:t(()=>[n("Loan Duration")]),_:1}),e(r,{overline:"",class:"q-px-xl"},{default:t(()=>[n(i(l.bitkopaStore.selectedLoanDuration)+" days",1)]),_:1})]),_:1})]),_:1}),e(p,null,{default:t(()=>[e(s,{avatar:""},{default:t(()=>[e(m,{style:{"pointer-events":"none"},icon:`img:tokens/${l.bitkopaStore.selectedCollateral.icon}`,size:"15px",flat:"",class:"text-dark q-mr-xs",rounded:"",color:"indigo",label:"Collateral Amount","no-caps":""},null,8,["icon"])]),_:1}),e(s,{side:""},{default:t(()=>[e(r,{class:"q-px-md text-bold"},{default:t(()=>[n("Collateral to supply")]),_:1}),e(r,{overline:"",class:"q-px-md"},{default:t(()=>[n(i(parseFloat(l.bitkopaStore.finalCollateralAmount).toFixed(6))+" "+i(l.bitkopaStore.selectedCollateral.symbol),1)]),_:1})]),_:1})]),_:1}),e(p,null,{default:t(()=>[e(s,{avatar:""},{default:t(()=>[e(m,{style:{"pointer-events":"none"},icon:"percent",size:"15px",flat:"",class:"text-dark q-mr-xs",rounded:"",color:"indigo",label:"Interest Rate","no-caps":""})]),_:1}),e(s,{side:""},{default:t(()=>[e(r,{class:"q-px-xl text-bold"},{default:t(()=>[n("Hourly")]),_:1}),e(r,{overline:"",class:"q-px-xl"},{default:t(()=>[n(i(l.bitkopaStore.selectedInterestRate[0])+"%",1)]),_:1})]),_:1}),e(s,{side:""},{default:t(()=>[e(r,{class:"text-bold q-px-xs"},{default:t(()=>[n("Daily")]),_:1}),e(r,{overline:"",class:"q-px-xs"},{default:t(()=>[n(i(l.bitkopaStore.selectedInterestRate[1])+"%",1)]),_:1})]),_:1})]),_:1})]),_:1}),ze]),_:1})):g("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),a("div",Re,[e(Q,{elevated:"",bordered:"",class:"section-1 q-pt-lg"},{default:t(()=>[e(V,null,{default:t(()=>[a("div",Ne,[a("div",Pe,[e(m,{icon:"calculate",size:"12px",push:"",outline:"",color:"indigo",label:"Bitkopa Loan Calculator","no-caps":""})])])]),_:1}),e(V,null,{default:t(()=>[e(L,{outlined:"",loading:l.bitkopaStore.loanAmountSpinner,modelValue:l.bitkopaStore.borrowAmount,"onUpdate:modelValue":u[5]||(u[5]=o=>l.bitkopaStore.borrowAmount=o),"label-color":"dark",label:"I want to borrow... ","input-class":"text-dark text-bold text-h6",clearable:"","stack-label":"",dense:b.dense,onKeyup:l.bitkopaStore.calculateCollateralAmount,onClear:l.bitkopaStore.calculateCollateralAmount},{append:t(()=>[e(m,{outline:"",rounded:"","no-caps":"",color:"indigo",label:"Min",size:"10px",onClick:l.bitkopaStore.calculateMinAmount},null,8,["onClick"]),e(v,{split:"",color:"dark",flat:"","no-caps":""},{label:t(()=>[a("div",Me,[e(h,{left:"",name:`img:countries/${l.bitkopaStore.selectedCurrency.icon}`},null,8,["name"]),a("div",Ue,i(l.bitkopaStore.selectedCurrency.symbol),1)])]),default:t(()=>[(d(!0),f(x,null,y(l.bitkopaStore.loanTerms.currencies,o=>(d(),c(_,{key:o.id},{default:t(()=>[S((d(),c(p,{clickable:"",onClick:q=>l.bitkopaStore.changeCurrency(o)},{default:t(()=>[e(s,{avatar:""},{default:t(()=>[e(A,{icon:`img:countries/${o.icon}`,color:"white","text-color":"white"},null,8,["icon"])]),_:2},1024),e(s,null,{default:t(()=>[e(r,null,{default:t(()=>[n(i(o.symbol),1)]),_:2},1024),e(r,{caption:""},{default:t(()=>[n(i(o.fullName),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[C]])]),_:2},1024))),128))]),_:1}),e(v,{split:"",color:"dark",flat:"","no-caps":""},{label:t(()=>[a("div",Ee,[e(h,{left:"",name:"date_range"}),a("div",Ke,[e(B),n(i(l.bitkopaStore.selectedLoanDuration)+" days ",1)])])]),default:t(()=>[(d(!0),f(x,null,y(l.bitkopaStore.loanTerms.duration,o=>(d(),c(_,{key:o},{default:t(()=>[S((d(),c(p,{clickable:"",onClick:q=>l.bitkopaStore.changeLoanDuration(o)},{default:t(()=>[e(s,null,{default:t(()=>[e(r,null,{default:t(()=>[n(i(o)+" days",1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[C]])]),_:2},1024))),128))]),_:1})]),_:1},8,["loading","modelValue","dense","onKeyup","onClear"]),a("div",null,[e(h,{name:"swap_vert",size:"50px"})]),e(L,{outlined:"",loading:l.bitkopaStore.collateralAmountSpinner,modelValue:l.bitkopaStore.collateralAmount,"onUpdate:modelValue":u[6]||(u[6]=o=>l.bitkopaStore.collateralAmount=o),"label-color":"dark",label:"I will supply... ","input-class":"text-dark text-bold text-h6",clearable:"","stack-label":"",dense:b.dense,onKeyup:l.bitkopaStore.calculateLoanAmount,onClear:l.bitkopaStore.calculateLoanAmount},{append:t(()=>[e(v,{split:"",color:"dark",flat:"","no-caps":""},{label:t(()=>[a("div",Fe,[e(h,{left:"",name:`img:tokens/${l.bitkopaStore.selectedCollateral.icon}`},null,8,["name"]),a("div",je,i(l.bitkopaStore.selectedCollateral.symbol),1)])]),default:t(()=>[(d(!0),f(x,null,y(l.bitkopaStore.loanTerms.collateral,o=>(d(),c(_,{key:o.id},{default:t(()=>[S((d(),c(p,{clickable:"",onClick:q=>l.bitkopaStore.changeCollateral(o)},{default:t(()=>[e(s,{avatar:""},{default:t(()=>[e(A,{icon:`img:tokens/${o.icon}`,color:"white","text-color":"dark"},null,8,["icon"])]),_:2},1024),e(s,null,{default:t(()=>[e(r,null,{default:t(()=>[n(i(o.symbol),1)]),_:2},1024),e(r,{caption:""},{default:t(()=>[n(i(o.fullName),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[C]])]),_:2},1024))),128))]),_:1})]),_:1},8,["loading","modelValue","dense","onKeyup","onClear"])]),_:1}),l.bitkopaStore.collateralAmount>0&&l.bitkopaStore.borrowAmount>0?(d(),c(V,{key:0},{default:t(()=>[e(_,null,{default:t(()=>[e(p,{clickable:""},{default:t(()=>[e(s,{avatar:""},{default:t(()=>[e(m,{style:{"pointer-events":"none"},icon:"percent",size:"15px",flat:"",class:"text-dark q-mr-xs",rounded:"",color:"indigo",label:"Interest Rate","no-caps":""})]),_:1}),e(s,{side:""},{default:t(()=>[e(r,{class:"q-px-md text-bold"},{default:t(()=>[n("Hourly")]),_:1}),e(r,{overline:"",class:"q-px-md"},{default:t(()=>[n(i(l.bitkopaStore.selectedInterestRate[0])+"%",1)]),_:1})]),_:1}),e(s,{side:""},{default:t(()=>[e(r,{class:"text-bold q-px-xl"},{default:t(()=>[n("Daily")]),_:1}),e(r,{overline:"",class:"q-px-xl"},{default:t(()=>[n(i(l.bitkopaStore.selectedInterestRate[1])+"%",1)]),_:1})]),_:1})]),_:1}),e(p,{clickable:""},{default:t(()=>[e(s,{avatar:""},{default:t(()=>[e(m,{style:{"pointer-events":"none"},icon:`img:countries/${l.bitkopaStore.selectedCurrency.icon}`,size:"15px",flat:"",class:"text-dark q-mr-xs",rounded:"",color:"indigo",label:"Loan Amount","no-caps":""},null,8,["icon"])]),_:1}),e(s,{side:""},{default:t(()=>[e(r,{class:"q-px-md text-bold"},{default:t(()=>[n("Interest")]),_:1}),e(r,{overline:"",class:"q-px-md"},{default:t(()=>[n(i(l.bitkopaStore.loanEstimation.interest)+" "+i(l.bitkopaStore.selectedCurrency.symbol),1)]),_:1})]),_:1}),e(s,{side:""},{default:t(()=>[e(r,{class:"text-bold q-px-xl"},{default:t(()=>[n("You pay back ")]),_:1}),e(r,{overline:"",class:"q-px-xl"},{default:t(()=>[n(i(l.bitkopaStore.loanEstimation.loanAmount)+" "+i(l.bitkopaStore.selectedCurrency.symbol),1)]),_:1})]),_:1})]),_:1}),e(p,{clickable:""},{default:t(()=>[e(s,{avatar:""},{default:t(()=>[e(m,{style:{"pointer-events":"none"},icon:"warning",size:"15px",flat:"",class:"text-dark q-mr-xs",rounded:"",color:"indigo",label:"Liquidation","no-caps":""})]),_:1}),e(s,{side:""},{default:t(()=>[e(r,{class:"q-px-lg text-bold"},{default:t(()=>[n("Threshold")]),_:1}),e(r,{overline:"",class:"q-px-lg"},{default:t(()=>[n(i(l.bitkopaStore.selectedCollateral.liquidationThreshold*100)+"%",1)]),_:1})]),_:1}),e(s,{side:""},{default:t(()=>[e(r,{class:"text-bold q-px-xl"},{default:t(()=>[n("Liquidation Price")]),_:1}),e(r,{overline:"",class:"q-px-xl"},{default:t(()=>[n(i(l.bitkopaStore.loanEstimation.liquidationPrice)+" USD",1)]),_:1})]),_:1})]),_:1})]),_:1}),He]),_:1})):g("",!0)]),_:1})])]),a("div",We,[a("div",Ye,[e(P,{modelValue:l.step,"onUpdate:modelValue":u[11]||(u[11]=o=>l.step=o),ref:"stepper",color:"primary",animated:""},{navigation:t(()=>[e(N,null,{default:t(()=>[l.step===3?(d(),c(m,{key:0,onClick:l.bitkopaStore.loanRequest,color:"indigo",outline:"",label:"Submit"},null,8,["onClick"])):g("",!0),l.step===1||l.step===2&&l.bitkopaStore.finalBorrowAmount>0?(d(),c(m,{key:1,onClick:u[9]||(u[9]=o=>b.$refs.stepper.next()),color:"indigo",label:"Continue"})):g("",!0),l.step>1?(d(),c(m,{key:2,flat:"",color:"secondary",onClick:u[10]||(u[10]=o=>b.$refs.stepper.previous()),label:"Back",class:"q-ml-sm"})):g("",!0)]),_:1})]),message:t(()=>[l.step===1?(d(),c(I,{key:0,class:"bg-indigo text-white q-px-lg"},{default:t(()=>[n(" Loan Amount Will Depend On The Collateral Amount ")]),_:1})):l.step===2?(d(),c(I,{key:1,class:"bg-indigo text-white q-px-lg"},{default:t(()=>[n(" Wallet balance: "+i(l.bitkopaStore.tokenBalances[l.bitkopaStore.selectedCollateral.id])+" "+i(l.bitkopaStore.selectedCollateral.symbol)+" | You can provide excess collateral to lower liquidation price! ",1)]),_:1})):l.step===3?(d(),c(I,{key:2,class:"bg-indigo text-white q-px-lg"},{default:t(()=>[n(" There is no interest payment for early repayment. ")]),_:1})):g("",!0)]),default:t(()=>[e(D,{name:1,title:"Loan Amount and Duration",icon:"payments",done:l.step>1,style:{"min-height":"200px"}},{default:t(()=>[e(L,{outlined:"",loading:l.bitkopaStore.loanAmountSpinner,modelValue:l.bitkopaStore.finalBorrowAmount,"onUpdate:modelValue":u[7]||(u[7]=o=>l.bitkopaStore.finalBorrowAmount=o),"label-color":"dark",label:"Amount ","input-class":"text-dark text-bold text-h6",clearable:"","stack-label":"",dense:b.dense},{append:t(()=>[e(m,{outline:"",rounded:"","no-caps":"",class:"gt-sm",color:"indigo",label:"Min",size:"10px",onClick:l.bitkopaStore.calculateMinAmount},null,8,["onClick"]),e(v,{split:"",color:"dark",flat:"","no-caps":""},{label:t(()=>[a("div",Oe,[e(h,{left:"",name:`img:countries/${l.bitkopaStore.selectedCurrency.icon}`},null,8,["name"]),a("div",Ge,i(l.bitkopaStore.selectedCurrency.symbol),1)])]),default:t(()=>[(d(!0),f(x,null,y(l.bitkopaStore.loanTerms.currencies,o=>(d(),c(_,{key:o.id},{default:t(()=>[S((d(),c(p,{clickable:"",onClick:q=>l.bitkopaStore.changeCurrency(o)},{default:t(()=>[e(s,{avatar:""},{default:t(()=>[e(A,{icon:`img:countries/${o.icon}`,color:"white","text-color":"white"},null,8,["icon"])]),_:2},1024),e(s,null,{default:t(()=>[e(r,null,{default:t(()=>[n(i(o.symbol),1)]),_:2},1024),e(r,{caption:""},{default:t(()=>[n(i(o.fullName),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[C]])]),_:2},1024))),128))]),_:1}),e(v,{split:"",color:"dark",flat:"","no-caps":""},{label:t(()=>[a("div",Je,[e(h,{left:"",name:"date_range"}),a("div",Xe,[e(B),n(i(l.bitkopaStore.selectedLoanDuration)+" days ",1)])])]),default:t(()=>[(d(!0),f(x,null,y(l.bitkopaStore.loanTerms.duration,o=>(d(),c(_,{key:o},{default:t(()=>[S((d(),c(p,{clickable:"",onClick:q=>l.bitkopaStore.changeLoanDuration(o)},{default:t(()=>[e(s,null,{default:t(()=>[e(r,null,{default:t(()=>[n(i(o)+" days",1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[C]])]),_:2},1024))),128))]),_:1}),e(v,{split:"",color:"dark",flat:"","no-caps":""},{label:t(()=>[a("div",Ze,[e(h,{left:"",name:`img:payments/${l.bitkopaStore.selectedPaymentMethod.icon}`},null,8,["name"]),a("div",$e,[e(B),n(i(l.bitkopaStore.selectedPaymentMethod.name),1)])])]),default:t(()=>[(d(!0),f(x,null,y(l.bitkopaStore.paymentMethods,o=>(d(),c(_,{key:o.id},{default:t(()=>[S((d(),c(p,{clickable:"",onClick:q=>l.bitkopaStore.changePaymentMethod(o)},{default:t(()=>[e(s,{avatar:""},{default:t(()=>[e(A,{icon:`img:payments/${o.icon}`,color:"white","text-color":"white"},null,8,["icon"])]),_:2},1024),e(s,null,{default:t(()=>[e(r,null,{default:t(()=>[n(i(o.name),1)]),_:2},1024),e(r,{caption:""},{default:t(()=>[n(i(o.accountNumber),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[C]])]),_:2},1024))),128))]),_:1})]),_:1},8,["loading","modelValue","dense"])]),_:1},8,["done"]),e(D,{name:2,title:"Collateral",icon:"credit_score",done:l.step>2,style:{"min-height":"200px"}},{default:t(()=>[e(L,{outlined:"",loading:l.bitkopaStore.collateralAmountSpinner,modelValue:l.bitkopaStore.finalCollateralAmount,"onUpdate:modelValue":u[8]||(u[8]=o=>l.bitkopaStore.finalCollateralAmount=o),"label-color":"dark",label:"Collateral ","input-class":"text-dark text-bold text-h6",clearable:"","stack-label":"",dense:b.dense},{append:t(()=>[e(v,{split:"",color:"dark",flat:"","no-caps":""},{label:t(()=>[a("div",et,[e(h,{left:"",name:`img:tokens/${l.bitkopaStore.selectedCollateral.icon}`},null,8,["name"]),a("div",tt,i(l.bitkopaStore.selectedCollateral.symbol),1)])]),default:t(()=>[(d(!0),f(x,null,y(l.bitkopaStore.loanTerms.collateral,o=>(d(),c(_,{key:o.id},{default:t(()=>[S((d(),c(p,{clickable:"",onClick:q=>l.bitkopaStore.changeCollateral(o)},{default:t(()=>[e(s,{avatar:""},{default:t(()=>[e(A,{icon:`img:tokens/${o.icon}`,color:"white","text-color":"dark"},null,8,["icon"])]),_:2},1024),e(s,null,{default:t(()=>[e(r,null,{default:t(()=>[n(i(o.symbol),1)]),_:2},1024),e(r,{caption:""},{default:t(()=>[n(i(o.fullName),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[C]])]),_:2},1024))),128))]),_:1})]),_:1},8,["loading","modelValue","dense"])]),_:1},8,["done"]),e(D,{name:3,title:"Confirm",icon:"check",style:{"min-height":"200px"}},{default:t(()=>[e(Q,{class:"section-1"},{default:t(()=>[l.bitkopaStore.finalCollateralAmount>0&&l.bitkopaStore.finalBorrowAmount>0?(d(),c(V,{key:0},{default:t(()=>[e(m,{style:{"pointer-events":"none"},icon:"thumb_up_alt",size:"15px",flat:"",class:"text-dark q-mr-xs",rounded:"",color:"indigo",label:"Confirm Loan Request Details","no-caps":""}),e(_,null,{default:t(()=>[e(p,null,{default:t(()=>[e(s,{avatar:""},{default:t(()=>[e(m,{style:{"pointer-events":"none"},icon:`img:countries/${l.bitkopaStore.selectedCurrency.icon}`,size:"15px",flat:"",class:"text-dark q-mr-xs",rounded:"",color:"indigo",label:"Loan Amount","no-caps":""},null,8,["icon"])]),_:1}),e(s,{side:""},{default:t(()=>[e(r,{class:"text-bold q-px-xl"},{default:t(()=>[n("Amount to borrow ")]),_:1}),e(r,{overline:"",class:"q-px-xl"},{default:t(()=>[n(i(parseInt(l.bitkopaStore.finalBorrowAmount).toLocaleString())+" "+i(l.bitkopaStore.selectedCurrency.symbol),1)]),_:1})]),_:1})]),_:1}),e(p,null,{default:t(()=>[e(s,{avatar:""},{default:t(()=>[e(m,{style:{"pointer-events":"none"},icon:"date_range",size:"15px",flat:"",class:"text-dark q-mr-xs",rounded:"",color:"indigo",label:"Loan Duration","no-caps":""})]),_:1}),e(s,{side:""},{default:t(()=>[e(r,{class:"text-bold q-px-xl"},{default:t(()=>[n("Loan Duration")]),_:1}),e(r,{overline:"",class:"q-px-xl"},{default:t(()=>[n(i(l.bitkopaStore.selectedLoanDuration)+" days",1)]),_:1})]),_:1})]),_:1}),e(p,null,{default:t(()=>[e(s,{avatar:""},{default:t(()=>[e(m,{style:{"pointer-events":"none"},icon:`img:tokens/${l.bitkopaStore.selectedCollateral.icon}`,size:"15px",flat:"",class:"text-dark q-mr-xs",rounded:"",color:"indigo",label:"Collateral Amount","no-caps":""},null,8,["icon"])]),_:1}),e(s,{side:""},{default:t(()=>[e(r,{class:"q-px-md text-bold"},{default:t(()=>[n("Collateral to supply")]),_:1}),e(r,{overline:"",class:"q-px-md"},{default:t(()=>[n(i(parseFloat(l.bitkopaStore.finalCollateralAmount).toFixed(6))+" "+i(l.bitkopaStore.selectedCollateral.symbol),1)]),_:1})]),_:1})]),_:1}),e(p,null,{default:t(()=>[e(s,{avatar:""},{default:t(()=>[e(m,{style:{"pointer-events":"none"},icon:"percent",size:"15px",flat:"",class:"text-dark q-mr-xs",rounded:"",color:"indigo",label:"Interest Rate","no-caps":""})]),_:1}),e(s,{side:""},{default:t(()=>[e(r,{class:"q-px-xl text-bold"},{default:t(()=>[n("Hourly")]),_:1}),e(r,{overline:"",class:"q-px-xl"},{default:t(()=>[n(i(l.bitkopaStore.selectedInterestRate[0])+"%",1)]),_:1})]),_:1}),e(s,{side:""},{default:t(()=>[e(r,{class:"text-bold q-px-xs"},{default:t(()=>[n("Daily")]),_:1}),e(r,{overline:"",class:"q-px-xs"},{default:t(()=>[n(i(l.bitkopaStore.selectedInterestRate[1])+"%",1)]),_:1})]),_:1})]),_:1})]),_:1}),lt]),_:1})):g("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),a("div",ot,[e(Q,{elevated:"",bordered:"",class:"section-1 q-pt-lg"},{default:t(()=>[e(V,null,{default:t(()=>[a("div",at,[a("div",nt,[e(m,{icon:"calculate",size:"12px",push:"",outline:"",color:"indigo",label:"Bitkopa Loan Calculator","no-caps":""})])])]),_:1}),e(V,null,{default:t(()=>[e(L,{outlined:"",loading:l.bitkopaStore.loanAmountSpinner,modelValue:l.bitkopaStore.borrowAmount,"onUpdate:modelValue":u[12]||(u[12]=o=>l.bitkopaStore.borrowAmount=o),"label-color":"dark",label:"I want to borrow... ","input-class":"text-dark text-bold text-h6",clearable:"","stack-label":"",dense:b.dense,onKeyup:l.bitkopaStore.calculateCollateralAmount,onClear:l.bitkopaStore.calculateCollateralAmount},{append:t(()=>[e(m,{outline:"",rounded:"","no-caps":"",color:"indigo",label:"Min",size:"10px",onClick:l.bitkopaStore.calculateMinAmount},null,8,["onClick"]),e(v,{split:"",color:"dark",flat:"","no-caps":""},{label:t(()=>[a("div",it,[e(h,{left:"",name:`img:countries/${l.bitkopaStore.selectedCurrency.icon}`},null,8,["name"]),a("div",rt,i(l.bitkopaStore.selectedCurrency.symbol),1)])]),default:t(()=>[(d(!0),f(x,null,y(l.bitkopaStore.loanTerms.currencies,o=>(d(),c(_,{key:o.id},{default:t(()=>[S((d(),c(p,{clickable:"",onClick:q=>l.bitkopaStore.changeCurrency(o)},{default:t(()=>[e(s,{avatar:""},{default:t(()=>[e(A,{icon:`img:countries/${o.icon}`,color:"white","text-color":"white"},null,8,["icon"])]),_:2},1024),e(s,null,{default:t(()=>[e(r,null,{default:t(()=>[n(i(o.symbol),1)]),_:2},1024),e(r,{caption:""},{default:t(()=>[n(i(o.fullName),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[C]])]),_:2},1024))),128))]),_:1}),e(v,{split:"",color:"dark",flat:"","no-caps":""},{label:t(()=>[a("div",dt,[e(h,{left:"",name:"date_range"}),a("div",st,[e(B),n(i(l.bitkopaStore.selectedLoanDuration)+" days ",1)])])]),default:t(()=>[(d(!0),f(x,null,y(l.bitkopaStore.loanTerms.duration,o=>(d(),c(_,{key:o},{default:t(()=>[S((d(),c(p,{clickable:"",onClick:q=>l.bitkopaStore.changeLoanDuration(o)},{default:t(()=>[e(s,null,{default:t(()=>[e(r,null,{default:t(()=>[n(i(o)+" days",1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[C]])]),_:2},1024))),128))]),_:1})]),_:1},8,["loading","modelValue","dense","onKeyup","onClear"]),a("div",null,[e(h,{name:"swap_vert",size:"50px"})]),e(L,{outlined:"",loading:l.bitkopaStore.collateralAmountSpinner,modelValue:l.bitkopaStore.collateralAmount,"onUpdate:modelValue":u[13]||(u[13]=o=>l.bitkopaStore.collateralAmount=o),"label-color":"dark",label:"I will supply... ","input-class":"text-dark text-bold text-h6",clearable:"","stack-label":"",dense:b.dense,onKeyup:l.bitkopaStore.calculateLoanAmount,onClear:l.bitkopaStore.calculateLoanAmount},{append:t(()=>[e(v,{split:"",color:"dark",flat:"","no-caps":""},{label:t(()=>[a("div",ct,[e(h,{left:"",name:`img:tokens/${l.bitkopaStore.selectedCollateral.icon}`},null,8,["name"]),a("div",ut,i(l.bitkopaStore.selectedCollateral.symbol),1)])]),default:t(()=>[(d(!0),f(x,null,y(l.bitkopaStore.loanTerms.collateral,o=>(d(),c(_,{key:o.id},{default:t(()=>[S((d(),c(p,{clickable:"",onClick:q=>l.bitkopaStore.changeCollateral(o)},{default:t(()=>[e(s,{avatar:""},{default:t(()=>[e(A,{icon:`img:tokens/${o.icon}`,color:"white","text-color":"dark"},null,8,["icon"])]),_:2},1024),e(s,null,{default:t(()=>[e(r,null,{default:t(()=>[n(i(o.symbol),1)]),_:2},1024),e(r,{caption:""},{default:t(()=>[n(i(o.fullName),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[C]])]),_:2},1024))),128))]),_:1})]),_:1},8,["loading","modelValue","dense","onKeyup","onClear"])]),_:1}),l.bitkopaStore.collateralAmount>0&&l.bitkopaStore.borrowAmount>0?(d(),c(V,{key:0},{default:t(()=>[e(_,null,{default:t(()=>[e(p,{clickable:""},{default:t(()=>[e(s,{avatar:""},{default:t(()=>[e(m,{style:{"pointer-events":"none"},icon:"percent",size:"15px",flat:"",class:"text-dark q-mr-xs",rounded:"",color:"indigo",label:"Interest Rate","no-caps":""})]),_:1}),e(s,{side:""},{default:t(()=>[e(r,{class:"q-px-md text-bold"},{default:t(()=>[n("Hourly")]),_:1}),e(r,{overline:"",class:"q-px-md"},{default:t(()=>[n(i(l.bitkopaStore.selectedInterestRate[0])+"%",1)]),_:1})]),_:1}),e(s,{side:""},{default:t(()=>[e(r,{class:"text-bold q-px-xl"},{default:t(()=>[n("Daily")]),_:1}),e(r,{overline:"",class:"q-px-xl"},{default:t(()=>[n(i(l.bitkopaStore.selectedInterestRate[1])+"%",1)]),_:1})]),_:1})]),_:1}),e(p,{clickable:""},{default:t(()=>[e(s,{avatar:""},{default:t(()=>[e(m,{style:{"pointer-events":"none"},icon:`img:countries/${l.bitkopaStore.selectedCurrency.icon}`,size:"15px",flat:"",class:"text-dark q-mr-xs",rounded:"",color:"indigo",label:"Loan Amount","no-caps":""},null,8,["icon"])]),_:1}),e(s,{side:""},{default:t(()=>[e(r,{class:"q-px-md text-bold"},{default:t(()=>[n("Interest")]),_:1}),e(r,{overline:"",class:"q-px-md"},{default:t(()=>[n(i(l.bitkopaStore.loanEstimation.interest)+" "+i(l.bitkopaStore.selectedCurrency.symbol),1)]),_:1})]),_:1}),e(s,{side:""},{default:t(()=>[e(r,{class:"text-bold q-px-xl"},{default:t(()=>[n("You pay back ")]),_:1}),e(r,{overline:"",class:"q-px-xl"},{default:t(()=>[n(i(l.bitkopaStore.loanEstimation.loanAmount)+" "+i(l.bitkopaStore.selectedCurrency.symbol),1)]),_:1})]),_:1})]),_:1}),e(p,{clickable:""},{default:t(()=>[e(s,{avatar:""},{default:t(()=>[e(m,{style:{"pointer-events":"none"},icon:"warning",size:"15px",flat:"",class:"text-dark q-mr-xs",rounded:"",color:"indigo",label:"Liquidation","no-caps":""})]),_:1}),e(s,{side:""},{default:t(()=>[e(r,{class:"q-px-lg text-bold"},{default:t(()=>[n("Threshold")]),_:1}),e(r,{overline:"",class:"q-px-lg"},{default:t(()=>[n(i(l.bitkopaStore.selectedCollateral.liquidationThreshold*100)+"%",1)]),_:1})]),_:1}),e(s,{side:""},{default:t(()=>[e(r,{class:"text-bold q-px-xl"},{default:t(()=>[n("Liquidation Price")]),_:1}),e(r,{overline:"",class:"q-px-xl"},{default:t(()=>[n(i(l.bitkopaStore.loanEstimation.liquidationPrice)+" USD",1)]),_:1})]),_:1})]),_:1})]),_:1}),mt]),_:1})):g("",!0)]),_:1})])])]),_:1})):g("",!0)],64)}var Dt=E(G,[["render",pt]]);export{Dt as default};