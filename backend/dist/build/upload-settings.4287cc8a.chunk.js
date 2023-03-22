"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[695],{85078:(j,b,t)=>{t.r(b),t.d(b,{SettingsPage:()=>k,default:()=>_});var e=t(67294),O=t(15482),l=t(97132),m=t(68547),u=t(85018),h=t(35961),D=t(46273),E=t(20707),L=t(72735),N=t(29728),U=t(185),A=t(7681),r=t(11276),d=t(74571),c=t(67838),f=t(49066),x=t(17034),G=t(9669),Z=t.n(G),w=t(18446),R=t.n(w),p=t(39844);const a=s=>s;var n=t(18172),i=t(36968),o=t.n(i);const g={isLoading:!0,isSubmiting:!1,initialData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1},modifiedData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1}},P=(s,B)=>(0,n.default)(s,v=>{switch(B.type){case"CANCEL_CHANGES":{v.modifiedData=s.initialData;break}case"GET_DATA_SUCCEEDED":{v.isLoading=!1,v.initialData=B.data,v.modifiedData=B.data;break}case"ON_CHANGE":{o()(v,["modifiedData",...B.keys.split(".")],B.value);break}case"ON_SUBMIT":{v.isSubmiting=!0;break}case"SUBMIT_SUCCEEDED":{v.initialData=s.modifiedData,v.isSubmiting=!1;break}case"ON_SUBMIT_ERROR":{v.isSubmiting=!1;break}default:return s}});var H=t(16838),K=t(25108),W=(s,B,v)=>new Promise((V,F)=>{var X=y=>{try{T(v.next(y))}catch(I){F(I)}},J=y=>{try{T(v.throw(y))}catch(I){F(I)}},T=y=>y.done?V(y.value):Promise.resolve(y.value).then(X,J);T((v=v.apply(s,B)).next())});const k=()=>{const{formatMessage:s}=(0,l.useIntl)(),{lockApp:B,unlockApp:v}=(0,m.useOverlayBlocker)(),V=(0,m.useNotification)();(0,m.useFocusWhenNavigate)();const[{initialData:F,isLoading:X,isSubmiting:J,modifiedData:T},y]=(0,e.useReducer)(P,g,a),I=(0,e.useRef)(!0);(0,e.useEffect)(()=>{const z=Z().CancelToken.source(),te=()=>W(void 0,null,function*(){try{const{data:{data:Y}}=yield p.be.get((0,p.IF)("settings"),{cancelToken:z.token});y({type:"GET_DATA_SUCCEEDED",data:Y})}catch(Y){K.error(Y)}});return I.current&&te(),()=>{z.cancel("Operation canceled by the user."),I.current=!1}},[]);const q=R()(F,T),ee=C=>W(void 0,null,function*(){if(C.preventDefault(),!q){B(),y({type:"ON_SUBMIT"});try{yield p.be.put((0,p.IF)("settings"),T),y({type:"SUBMIT_SUCCEEDED"}),V({type:"success",message:{id:"notification.form.success.fields"}})}catch(z){K.error(z),y({type:"ON_SUBMIT_ERROR"})}v()}}),Q=({target:{name:C,value:z}})=>{y({type:"ON_CHANGE",keys:C,value:z})};return e.createElement(U.o,{tabIndex:-1},e.createElement(O.Helmet,{title:s({id:(0,p.OB)("page.title"),defaultMessage:"Settings - Media Libray"})}),e.createElement("form",{onSubmit:ee},e.createElement(c.T,{title:s({id:(0,p.OB)("settings.header.label"),defaultMessage:"Media Library"}),primaryAction:e.createElement(N.z,{disabled:q,"data-testid":"save-button",loading:J,type:"submit",startIcon:e.createElement(u.Z,null),size:"S"},s({id:"global.save",defaultMessage:"Save"})),subtitle:s({id:(0,p.OB)("settings.sub-header.label"),defaultMessage:"Configure the settings for the Media Library"})}),e.createElement(f.D,null,X?e.createElement(m.LoadingIndicatorPage,null):e.createElement(x.A,null,e.createElement(A.K,{spacing:12},e.createElement(h.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(A.K,{spacing:4},e.createElement(D.k,null,e.createElement(L.Z,{variant:"delta",as:"h2"},s({id:(0,p.OB)("settings.blockTitle"),defaultMessage:"Asset management"}))),e.createElement(r.r,{gap:6},e.createElement(d.P,{col:6,s:12},e.createElement(E.s,{"aria-label":"responsiveDimensions","data-testid":"responsiveDimensions",checked:T.responsiveDimensions,hint:s({id:(0,p.OB)("settings.form.responsiveDimensions.description"),defaultMessage:"Enabling this option will generate multiple formats (small, medium and large) of the uploaded asset."}),label:s({id:(0,p.OB)("settings.form.responsiveDimensions.label"),defaultMessage:"Responsive friendly upload"}),name:"responsiveDimensions",offLabel:s({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:s({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:C=>{Q({target:{name:"responsiveDimensions",value:C.target.checked}})}})),e.createElement(d.P,{col:6,s:12},e.createElement(E.s,{"aria-label":"sizeOptimization","data-testid":"sizeOptimization",checked:T.sizeOptimization,hint:s({id:(0,p.OB)("settings.form.sizeOptimization.description"),defaultMessage:"Enabling this option will reduce the image size and slightly reduce its quality."}),label:s({id:(0,p.OB)("settings.form.sizeOptimization.label"),defaultMessage:"Size optimization"}),name:"sizeOptimization",offLabel:s({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:s({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:C=>{Q({target:{name:"sizeOptimization",value:C.target.checked}})}})),e.createElement(d.P,{col:6,s:12},e.createElement(E.s,{"aria-label":"autoOrientation","data-testid":"autoOrientation",checked:T.autoOrientation,hint:s({id:(0,p.OB)("settings.form.autoOrientation.description"),defaultMessage:"Enabling this option will automatically rotate the image according to EXIF orientation tag."}),label:s({id:(0,p.OB)("settings.form.autoOrientation.label"),defaultMessage:"Auto orientation"}),name:"autoOrientation",offLabel:s({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:s({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:C=>{Q({target:{name:"autoOrientation",value:C.target.checked}})}}))))))))))},_=()=>e.createElement(m.CheckPagePermissions,{permissions:H.Z.settings},e.createElement(k,null))},49066:(j,b,t)=>{t.d(b,{D:()=>m});var e=t(67294),O=t(45697),l=t(35961);const m=({children:u})=>e.createElement(l.x,{paddingLeft:10,paddingRight:10},u);m.propTypes={children:O.node.isRequired}},67838:(j,b,t)=>{t.d(b,{T:()=>R});var e=t(67294),O=t(27821),l=t(45697),m=t(72735),u=t(35961),h=t(46273);const D=a=>{const n=(0,e.useRef)(null),[i,o]=(0,e.useState)(!0),g=([M])=>{o(M.isIntersecting)};return(0,e.useEffect)(()=>{const M=n.current,P=new IntersectionObserver(g,a);return M&&P.observe(n.current),()=>{M&&P.disconnect()}},[n,a]),[n,i]};var E=t(98402);const L=(a,n)=>{const i=(0,E.useCallbackRef)(n);(0,e.useLayoutEffect)(()=>{const o=new ResizeObserver(i);return Array.isArray(a)?a.forEach(g=>{g.current&&o.observe(g.current)}):a.current&&o.observe(a.current),()=>{o.disconnect()}},[a,i])};var N=Object.defineProperty,U=Object.defineProperties,A=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,f=(a,n,i)=>n in a?N(a,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[n]=i,x=(a,n)=>{for(var i in n||(n={}))d.call(n,i)&&f(a,i,n[i]);if(r)for(var i of r(n))c.call(n,i)&&f(a,i,n[i]);return a},G=(a,n)=>U(a,A(n)),Z=(a,n)=>{var i={};for(var o in a)d.call(a,o)&&n.indexOf(o)<0&&(i[o]=a[o]);if(a!=null&&r)for(var o of r(a))n.indexOf(o)<0&&c.call(a,o)&&(i[o]=a[o]);return i};const w=()=>{const a=(0,e.useRef)(null),[n,i]=(0,e.useState)(null),[o,g]=D({root:null,rootMargin:"0px",threshold:0});return L(o,()=>{o.current&&i(o.current.getBoundingClientRect())}),(0,e.useEffect)(()=>{a.current&&i(a.current.getBoundingClientRect())},[a]),{containerRef:o,isVisible:g,baseHeaderLayoutRef:a,headerSize:n}},R=a=>{const{containerRef:n,isVisible:i,baseHeaderLayoutRef:o,headerSize:g}=w();return e.createElement(e.Fragment,null,e.createElement("div",{style:{height:g==null?void 0:g.height},ref:n},i&&e.createElement(S,x({ref:o},a))),!i&&e.createElement(S,G(x({},a),{sticky:!0,width:g==null?void 0:g.width})))};R.displayName="HeaderLayout";const p=(0,O.default)(u.x)`
  position: fixed;
  top: 0;
  right: 0;
  width: ${a=>a.width}px;
  z-index: 4;
  box-shadow: ${({theme:a})=>a.shadows.tableShadow};
`,S=e.forwardRef((a,n)=>{var i=a,{navigationAction:o,primaryAction:g,secondaryAction:M,subtitle:P,title:H,sticky:K,width:W}=i,k=Z(i,["navigationAction","primaryAction","secondaryAction","subtitle","title","sticky","width"]);const $=typeof P=="string";return K?e.createElement(p,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,background:"neutral0",width:W,"data-strapi-header-sticky":!0},e.createElement(h.k,{justifyContent:"space-between"},e.createElement(h.k,null,o&&e.createElement(u.x,{paddingRight:3},o),e.createElement(u.x,null,e.createElement(m.Z,x({variant:"beta",as:"h1"},k),H),$?e.createElement(m.Z,{variant:"pi",textColor:"neutral600"},P):P),M?e.createElement(u.x,{paddingLeft:4},M):null),e.createElement(h.k,null,g?e.createElement(u.x,{paddingLeft:2},g):void 0))):e.createElement(u.x,{ref:n,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:o?6:8,background:"neutral100","data-strapi-header":!0},o?e.createElement(u.x,{paddingBottom:2},o):null,e.createElement(h.k,{justifyContent:"space-between"},e.createElement(h.k,null,e.createElement(m.Z,x({as:"h1",variant:"alpha"},k),H),M?e.createElement(u.x,{paddingLeft:4},M):null),g),$?e.createElement(m.Z,{variant:"epsilon",textColor:"neutral600",as:"p"},P):P)});S.displayName="BaseHeaderLayout",S.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},S.propTypes={navigationAction:l.node,primaryAction:l.node,secondaryAction:l.node,sticky:l.bool,subtitle:l.oneOfType([l.string,l.node]),title:l.string.isRequired,width:l.number},R.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},R.propTypes={navigationAction:l.node,primaryAction:l.node,secondaryAction:l.node,subtitle:l.oneOfType([l.string,l.node]),title:l.string.isRequired}},17034:(j,b,t)=>{t.d(b,{A:()=>D});var e=t(67294),O=t(45697),l=t(27821),m=t(35961);const u=(0,l.default)(m.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:E})=>E?"auto 1fr":"1fr"};
`,h=(0,l.default)(m.x)`
  overflow-x: hidden;
`,D=({sideNav:E,children:L})=>e.createElement(u,{hasSideNav:Boolean(E)},E,e.createElement(h,{paddingBottom:10},L));D.defaultProps={sideNav:void 0},D.propTypes={children:O.node.isRequired,sideNav:O.node}},185:(j,b,t)=>{t.d(b,{o:()=>A});var e=t(67294),O=t(45697),l=t(27821),m=Object.defineProperty,u=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,E=(r,d,c)=>d in r?m(r,d,{enumerable:!0,configurable:!0,writable:!0,value:c}):r[d]=c,L=(r,d)=>{for(var c in d||(d={}))h.call(d,c)&&E(r,c,d[c]);if(u)for(var c of u(d))D.call(d,c)&&E(r,c,d[c]);return r},N=(r,d)=>{var c={};for(var f in r)h.call(r,f)&&d.indexOf(f)<0&&(c[f]=r[f]);if(r!=null&&u)for(var f of u(r))d.indexOf(f)<0&&D.call(r,f)&&(c[f]=r[f]);return c};const U=l.default.main`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,A=r=>{var d=r,{labelledBy:c}=d,f=N(d,["labelledBy"]);const x=c||"main-content-title";return e.createElement(U,L({"aria-labelledby":x,id:"main-content",tabIndex:-1},f))};A.defaultProps={labelledBy:void 0},A.propTypes={labelledBy:O.string}}}]);
