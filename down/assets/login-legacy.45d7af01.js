;(function(){function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _iterableToArrayLimit(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}System.register(['./vendor-legacy.4e56ad95.js','./index.esm-legacy.d4e263ed.js','./index-legacy.29c6c1a8.js'],function(exports){'use strict';var useTranslation,useHistory,useToast,react,React,Center,VStack,FormControl,FormLabel,Input,Button,changeToken,admin;return{setters:[function(module){useTranslation=module.j;useHistory=module.o;useToast=module.h;react=module.r;React=module.R;Center=module.C;VStack=module.V;FormControl=module.M;FormLabel=module.N;Input=module.I;Button=module.G;},function(module){changeToken=module.C;admin=module.b;},function(){}],execute:function execute(){var Login=exports('default',function(){var _useTranslation=useTranslation(),t=_useTranslation.t;var history=useHistory();var toast=useToast();var _react$exports$useSta=react.exports.useState(""),_react$exports$useSta2=_slicedToArray(_react$exports$useSta,2),password=_react$exports$useSta2[0],setPassword=_react$exports$useSta2[1];var login=function login(){changeToken(password);admin.post("login").then(function(resp){var res=resp.data;if(res.code===200){toast({title:t(res.message),status:"success",duration:3e3,isClosable:true});history.push("settings/0");}else{toast({title:t(res.message),status:"error",duration:3e3,isClosable:true});}});};return/* @__PURE__ */React.createElement(Center,{p:"4",h:"full"},/* @__PURE__ */React.createElement(VStack,{w:{base:"full",md:"50%"}},/* @__PURE__ */React.createElement(FormControl,{isRequired:true},/* @__PURE__ */React.createElement(FormLabel,null,t("password")),/* @__PURE__ */React.createElement(Input,{type:"password",value:password,onChange:function onChange(e){return setPassword(e.target.value);},onKeyUp:function onKeyUp(e){if(e.key==="Enter"){login();}}})),/* @__PURE__ */React.createElement(Button,{onClick:login},t("login"))));});}};});})();
