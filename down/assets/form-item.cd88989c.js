import{j as m,R as a,M as r,N as c,s as i,I as d,au as g,O as o,av as h,aw as C,ax as v,ay as E,az as b,aA as f,aB as y}from"./vendor.f2feef42.js";import{T as s}from"./index.esm.8e5d21a4.js";const O=e=>{var l;const{t}=m();return a.createElement(r,{shadow:"md",p:"2",rounded:"lg",isRequired:e.required},a.createElement(c,null,t(e.label)," ",e.onDelete&&a.createElement(i,{color:"red.300",boxSize:6,_hover:{cursor:"pointer"},as:s,onClick:e.onDelete})),e.type==="string"?a.createElement(d,{isReadOnly:e.readOnly,value:e.value,onChange:n=>{e.onChange&&e.onChange(n.target.value)}}):e.type==="text"?a.createElement(g,{isReadOnly:e.readOnly,value:e.value,onChange:n=>{e.onChange&&e.onChange(n.target.value)}}):e.type==="bool"?a.createElement(o,{isReadOnly:e.readOnly,isChecked:e.value,onChange:()=>{e.onChange&&e.onChange()}}):e.type==="select"?a.createElement(h,{isDisabled:e.readOnly,value:e.value,onChange:n=>{e.onChange&&e.onChange(n.target.value)}},a.createElement("option",{value:""},t("select")),(l=e.values)==null?void 0:l.map(n=>a.createElement("option",{key:n,value:n},t(n)))):e.type==="number"?a.createElement(C,{defaultValue:e.value,onChange:(n,u)=>{e.onChange&&e.onChange(u)}},a.createElement(v,null),a.createElement(E,null,a.createElement(b,null),a.createElement(f,null))):null,(e.description||e.onDelete)&&a.createElement(y,null,t(e.description?e.description:"")," ",e.onDelete&&t("Deprecated")))};export{O as F};
