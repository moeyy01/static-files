import{u as b,a as c,b4 as u,d as i,e as t,k as v,W as w,bf as k,a5 as x,I,B as S,Z as $,a3 as d,n as _,bd as C,aK as D,c4 as F}from"./index.cf9e8205.js";import{u as L}from"./useT.bb032086.js";const W=()=>{const{back:n}=b(),[g,l]=c(()=>u.post("/auth/2fa/generate")),a=L(),[r,p]=i(),f=async()=>{if(d().otp){_.warning(a("users.2fa_already_enabled")),n();return}const e=await l();C(e,p)},[s,h]=i("");f();const[y,m]=c(()=>{var e;return u.post("/auth/2fa/verify",{code:s(),secret:(e=r())==null?void 0:e.secret})}),o=async()=>{const e=await m();D(e,()=>{F({...d(),otp:!0}),n()})};return t($,{get loading(){return g()},get children(){return t(v,{get when(){return r()},get children(){return t(w,{spacing:"$2",alignItems:"start",get children(){return[t(k,{get children(){return a("users.scan_qr")}}),t(x,{boxSize:"$xs",rounded:"$lg",get src(){var e;return(e=r())==null?void 0:e.qr}}),t(I,{maxW:"$xs",get placeholder(){return a("users.input_code")},get value(){return s()},onInput:e=>h(e.currentTarget.value),onKeyDown:e=>{e.key==="Enter"&&o()}}),t(S,{get loading(){return y()},onClick:o,get children(){return a("users.verify")}})]}})}})}})};export{W as default};
