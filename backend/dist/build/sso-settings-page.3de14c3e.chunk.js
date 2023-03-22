"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[302],{29808:(_,g,e)=>{e.r(g),e.d(g,{SingleSignOn:()=>S,default:()=>V});var a=e(67294),l=e(68547),R=e(85018),O=e(17034),P=e(67838),y=e(49066),C=e(29728),M=e(185),b=e(7681),L=e(72735),I=e(20707),D=e(91216),T=e(82562),A=e(11276),u=e(74571),j=e(97132),B=e(18446),F=e.n(B),Z=e(8610),c=e(78143),f=e(87751),i=e(53209);const x=i.Ry().shape({autoRegister:i.Xg().required(l.translatedErrors.required),defaultRole:i.nK().when("autoRegister",(t,s)=>t?s.required(l.translatedErrors.required):s.nullable())});var G=Object.defineProperty,H=Object.defineProperties,z=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,K=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,h=(t,s,n)=>s in t?G(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,W=(t,s)=>{for(var n in s||(s={}))K.call(s,n)&&h(t,n,s[n]);if(m)for(var n of m(s))N.call(s,n)&&h(t,n,s[n]);return t},U=(t,s)=>H(t,z(s));const v=U(W({},f.Z.settings.sso),{readRoles:f.Z.settings.roles.read}),S=()=>{const{formatMessage:t}=(0,j.useIntl)(),{isLoading:s,allowedActions:{canUpdate:n,canReadRoles:X}}=(0,l.useRBAC)(v),[{formErrors:r,initialData:J,isLoading:Q,modifiedData:d,showHeaderButtonLoader:Y},ae,{handleChange:p,handleSubmit:$}]=(0,c.G4)((0,Z.IF)("providers/options"),x,()=>{},["autoRegister","defaultRole"]),{roles:w}=(0,c.bF)(X);(0,l.useFocusWhenNavigate)();const k=s||Q;(0,a.useEffect)(()=>{if(r.defaultRole){const o='[name="defaultRole"]';document.querySelector(o).focus()}},[r]);const E=F()(J,d);return a.createElement(O.A,null,a.createElement(l.SettingsPageTitle,{name:"SSO"}),a.createElement(M.o,{tabIndex:-1},a.createElement("form",{onSubmit:o=>{if(E){o.preventDefault();return}$(o)}},a.createElement(P.T,{primaryAction:a.createElement(C.z,{"data-testid":"save-button",disabled:E,loading:Y,startIcon:a.createElement(R.Z,null),type:"submit",size:"L"},t({id:"global.save",defaultMessage:"Save"})),title:t({id:"Settings.sso.title",defaultMessage:"Single Sign-On"}),subtitle:t({id:"Settings.sso.description",defaultMessage:"Configure the settings for the Single Sign-On feature."})}),a.createElement(y.D,null,k?a.createElement(l.LoadingIndicatorPage,null):a.createElement(b.K,{spacing:4,background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},a.createElement(L.Z,{variant:"delta",as:"h2"},t({id:"global.settings",defaultMessage:"Settings"})),a.createElement(A.r,{gap:4},a.createElement(u.P,{col:6,m:6,s:12},a.createElement(I.s,{"aria-label":"autoRegister","data-testid":"autoRegister",disabled:!n,checked:d.autoRegister,hint:t({id:"Settings.sso.form.registration.description",defaultMessage:"Create new user on SSO login if no account exists"}),label:t({id:"Settings.sso.form.registration.label",defaultMessage:"Auto-registration"}),name:"autoRegister",offLabel:t({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:t({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:o=>{p({target:{name:"autoRegister",value:o.target.checked}})}})),a.createElement(u.P,{col:6,m:6,s:12},a.createElement(D.P,{disabled:!n,hint:t({id:"Settings.sso.form.defaultRole.description",defaultMessage:"It will attach the new authenticated user to the selected role"}),error:r.defaultRole?t({id:r.defaultRole.id,defaultMessage:r.defaultRole.id}):"",label:t({id:"Settings.sso.form.defaultRole.label",defaultMessage:"Default role"}),name:"defaultRole",onChange:o=>{p({target:{name:"defaultRole",value:o}})},placeholder:t({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),value:d.defaultRole},w.map(({id:o,name:q})=>a.createElement(T.W,{key:o,value:o.toString()},q))))))))))},V=()=>a.createElement(l.CheckPagePermissions,{permissions:v.main},a.createElement(S,null))}}]);
