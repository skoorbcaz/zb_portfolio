"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[5162],{37948:(Pe,k,n)=>{n.d(k,{Z:()=>ie});var e=n(67294),o=n(68547),X=n(185),T=n(23724),F=n(49656),K=n(78143),P=n(23998),f=n(45697),c=n.n(f),v=n(67109),W=n(85018),Q=Object.defineProperty,E=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,M=(a,t,r)=>t in a?Q(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r,Oe=(a,t)=>{for(var r in t||(t={}))O.call(t,r)&&M(a,r,t[r]);if(E)for(var r of E(t))y.call(t,r)&&M(a,r,t[r]);return a};function ue(a){return e.createElement("svg",Oe({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a),e.createElement("path",{d:"M4 20.252V3.748a1 1 0 011.507-.862l14.028 8.252a1 1 0 010 1.724L5.507 21.113A1 1 0 014 20.252z",fill:"#212134"}))}var at=n(67838),me=n(49066),pe=n(35961),ge=n(29728),V=n(7681),Me=n(16364),xe=n(11276),G=n(74571),J=n(80831),q=n(97132),je=n(64777),Z=n(72735),Be=n(27821),fe=n(41451),Fe=n(36213),Ke=n(11700),We=n.n(Ke);const ve=({disabledEvents:a,name:t,events:r,inputValue:s,handleChange:g,handleChangeAll:I})=>{const B=r.filter(m=>!a.includes(m)),i=s.length===B.length,b=s.length>0,R=({target:{name:m}})=>{I({target:{name:m,value:!i}})};return e.createElement("tr",null,e.createElement("td",null,e.createElement(Fe.X,{indeterminate:b&&!i,"aria-label":"Select all entries",name:t,onChange:R,value:i},We()(t))),r.map(m=>e.createElement("td",{key:m},e.createElement(fe.C,{disabled:a.includes(m),"aria-label":m,name:m,value:s.includes(m),onValueChange:S=>g({target:{name:m,value:S}})}))))};ve.defaultProps={disabledEvents:[],events:[],inputValue:[],handleChange(){},handleChangeAll(){}},ve.propTypes={disabledEvents:c().array,events:c().array,inputValue:c().array,handleChange:c().func,handleChangeAll:c().func,name:c().string.isRequired};const Ue=ve,le=a=>a.reduce((t,r)=>{const s=r.split(".")[0];return t[s]||(t[s]=[]),t[s].push(r),t},{}),Se=Be.default.table`
  td {
    height: ${52/16}rem;
    width: 10%;
    vertical-align: middle;
    text-align: center;
  }

  tbody tr:nth-child(odd) {
    background: ${({theme:a})=>a.colors.neutral100};
  }

  tbody tr td:first-child {
    padding-left: ${({theme:a})=>a.spaces[7]};
  }
`,l={headers:{default:[{id:"Settings.webhooks.events.create",defaultMessage:"Create"},{id:"Settings.webhooks.events.update",defaultMessage:"Update"},{id:"app.utils.delete",defaultMessage:"Delete"}],draftAndPublish:[{id:"Settings.webhooks.events.create",defaultMessage:"Create"},{id:"Settings.webhooks.events.update",defaultMessage:"Update"},{id:"app.utils.delete",defaultMessage:"Delete"},{id:"app.utils.publish",defaultMessage:"Publish"},{id:"app.utils.unpublish",defaultMessage:"Unpublish"}]},events:{default:{entry:["entry.create","entry.update","entry.delete"],media:["media.create","media.update","media.delete"]},draftAndPublish:{entry:["entry.create","entry.update","entry.delete","entry.publish","entry.unpublish"],media:["media.create","media.update","media.delete"]}}},d=({isDraftAndPublish:a})=>{const t=a?l.headers.draftAndPublish:l.headers.default,r=a?l.events.draftAndPublish:l.events.default,{formatMessage:s}=(0,q.useIntl)(),{values:g,handleChange:I}=(0,J.useFormikContext)(),B="events",i=g.events,b=[],R=le(i),m=({target:{name:C,value:re}})=>{let U=new Set(i);re?U.add(C):U.delete(C),I({target:{name:B,value:Array.from(U)}})},S=({target:{name:C,value:re}})=>{let U=new Set(i);re?r[C].forEach(ne=>{b.includes(ne)||U.add(ne)}):r[C].forEach(ne=>U.delete(ne)),I({target:{name:B,value:Array.from(U)}})};return e.createElement(V.K,{spacing:1},e.createElement(je.Q,null,s({id:"Settings.webhooks.form.events",defaultMessage:"Events"})),e.createElement(Se,null,e.createElement("thead",null,e.createElement("tr",null,e.createElement("td",null),t.map(C=>C==="app.utils.publish"||C==="app.utils.unpublish"?e.createElement("td",{key:C.id,title:s({id:"Settings.webhooks.event.publish-tooltip",defaultMessage:"This event only exists for contents with Draft/Publish system enabled"})},e.createElement(Z.Z,{variant:"sigma",textColor:"neutral600"},s(C))):e.createElement("td",{key:C.id},e.createElement(Z.Z,{variant:"sigma",textColor:"neutral600"},s(C)))))),e.createElement("tbody",null,Object.keys(r).map(C=>e.createElement(Ue,{disabledEvents:b,key:C,name:C,events:r[C],inputValue:R[C],handleChange:m,handleChangeAll:S})))))};d.propTypes={isDraftAndPublish:c().bool.isRequired};const p=d;var x=n(96315),A=n(46273),rt=n(39785),N=n(31950),Ie=n(90608);const Re=["A-IM","Accept","Accept-Charset","Accept-Encoding","Accept-Language","Accept-Datetime","Access-Control-Request-Method","Access-Control-Request-Headers","Authorization","Cache-Control","Connection","Content-Length","Content-Type","Cookie","Date","Expect","Forwarded","From","Host","If-Match","If-Modified-Since","If-None-Match","If-Range","If-Unmodified-Since","Max-Forwards","Origin","Pragma","Proxy-Authorization","Range","Referer","TE","User-Agent","Upgrade","Via","Warning"];var se=Object.defineProperty,nt=Object.defineProperties,De=Object.getOwnPropertyDescriptors,he=Object.getOwnPropertySymbols,Ve=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable,Ae=(a,t,r)=>t in a?se(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r,ot=(a,t)=>{for(var r in t||(t={}))Ve.call(t,r)&&Ae(a,r,t[r]);if(he)for(var r of he(t))Te.call(t,r)&&Ae(a,r,t[r]);return a},Ze=(a,t)=>nt(a,De(t)),lt=(a,t)=>{var r={};for(var s in a)Ve.call(a,s)&&t.indexOf(s)<0&&(r[s]=a[s]);if(a!=null&&he)for(var s of he(a))t.indexOf(s)<0&&Te.call(a,s)&&(r[s]=a[s]);return r};const Le=a=>{var t=a,{name:r,onChange:s,value:g}=t,I=lt(t,["name","onChange","value"]);const[B,i]=(0,e.useState)(g?[...Re,g]:Re),b=m=>{s({target:{name:r,value:m}})},R=m=>{i(S=>[...S,m]),s({target:{name:r,value:m}})};return e.createElement(N.X,Ze(ot({},I),{onChange:b,onCreateOption:R,placeholder:"",value:g}),B.map(m=>e.createElement(Ie.O,{value:m,key:m},m)))};Le.defaultProps={value:void 0},Le.propTypes={name:c().string.isRequired,onChange:c().func.isRequired,value:c().string};const st=Le,it=()=>{const{formatMessage:a}=(0,q.useIntl)(),{values:t,errors:r}=(0,J.useFormikContext)();return e.createElement(V.K,{spacing:1},e.createElement(je.Q,null,a({id:"Settings.webhooks.form.headers",defaultMessage:"Headers"})),e.createElement(pe.x,{padding:8,background:"neutral100",hasRadius:!0},e.createElement(J.FieldArray,{validateOnChange:!1,name:"headers",render:({push:s,remove:g})=>{var I;return e.createElement(xe.r,{gap:4},(I=t.headers)==null?void 0:I.map((B,i)=>{var b,R,m,S,C,re,U,ne,et,tt;return e.createElement(e.Fragment,{key:i},e.createElement(G.P,{col:6},e.createElement(J.Field,{as:st,name:`headers.${i}.key`,"aria-label":`row ${i+1} key`,label:a({id:"Settings.webhooks.key",defaultMessage:"Key"}),error:((R=(b=r.headers)==null?void 0:b[i])==null?void 0:R.key)&&a({id:(m=r.headers[i])==null?void 0:m.key,defaultMessage:(S=r.headers[i])==null?void 0:S.key})})),e.createElement(G.P,{col:6},e.createElement(A.k,{alignItems:"flex-end"},e.createElement(pe.x,{style:{flex:1}},e.createElement(J.Field,{as:Me.o,"aria-label":`row ${i+1} value`,label:a({id:"Settings.webhooks.value",defaultMessage:"Value"}),name:`headers.${i}.value`,error:((re=(C=r.headers)==null?void 0:C[i])==null?void 0:re.value)&&a({id:(U=r.headers[i])==null?void 0:U.value,defaultMessage:(ne=r.headers[i])==null?void 0:ne.value})})),e.createElement(A.k,{paddingLeft:2,style:{alignSelf:"center"},paddingTop:(tt=(et=r.headers)==null?void 0:et[i])!=null&&tt.value?0:5},e.createElement(o.RemoveRoundedButton,{onClick:()=>t.headers.length!==1&&g(i),label:a({id:"Settings.webhooks.headers.remove",defaultMessage:"Remove header row {number}"},{number:i+1})})))))}),e.createElement(G.P,{col:12},e.createElement(rt.A,{type:"button",onClick:()=>{s({key:"",value:""})},startIcon:e.createElement(x.default,null)},a({id:"Settings.webhooks.create.header",defaultMessage:"Create new header"}))))}})))};var Ne=n(70968),w=n(86647);const de=Be.default.svg(({theme:a,color:t})=>`
  width: ${12/16}rem;
  height: ${12/16}rem;

  path {
    fill: ${a.colors[t]};
  }
`),we=({isPending:a,statusCode:t})=>{const{formatMessage:r}=(0,q.useIntl)();return a?e.createElement(V.K,{horizontal:!0,spacing:2,style:{alignItems:"center"}},e.createElement(de,{as:w.default}),e.createElement(Z.Z,null,r({id:"Settings.webhooks.trigger.pending",defaultMessage:"pending"}))):t>=200&&t<300?e.createElement(V.K,{horizontal:!0,spacing:2,style:{alignItems:"center"}},e.createElement(de,{as:W.Z,color:"success700"}),e.createElement(Z.Z,null,r({id:"Settings.webhooks.trigger.success",defaultMessage:"success"}))):t>=300?e.createElement(V.K,{horizontal:!0,spacing:2,style:{alignItems:"center"}},e.createElement(de,{as:Ne.default,color:"danger700"}),e.createElement(Z.Z,null,r({id:"Settings.error",defaultMessage:"error"})," ",t)):null};we.propTypes={isPending:c().bool.isRequired,statusCode:c().number},we.defaultProps={statusCode:void 0};const ke=({statusCode:a,message:t})=>{const{formatMessage:r}=(0,q.useIntl)();return a>=200&&a<300?e.createElement(A.k,{justifyContent:"flex-end"},e.createElement(Z.Z,{textColor:"neutral600",ellipsis:!0},r({id:"Settings.webhooks.trigger.success.label",defaultMessage:"Trigger succeeded"}))):a>=300?e.createElement(A.k,{justifyContent:"flex-end"},e.createElement(A.k,{maxWidth:(0,o.pxToRem)(250),justifyContent:"flex-end",title:t},e.createElement(Z.Z,{ellipsis:!0,textColor:"neutral600"},t))):null};ke.propTypes={statusCode:c().number,message:c().string},ke.defaultProps={statusCode:void 0,message:void 0};const $=({onCancel:a})=>{const{formatMessage:t}=(0,q.useIntl)();return e.createElement(A.k,{justifyContent:"flex-end"},e.createElement("button",{onClick:a,type:"button"},e.createElement(V.K,{horizontal:!0,spacing:2,style:{alignItems:"center"}},e.createElement(Z.Z,{textColor:"neutral400"},t({id:"Settings.webhooks.trigger.cancel",defaultMessage:"cancel"})),e.createElement(de,{as:Ne.default,color:"neutral400"}))))};$.propTypes={onCancel:c().func.isRequired};const Ee=({isPending:a,onCancel:t,response:r})=>{const{statusCode:s,message:g}=r,{formatMessage:I}=(0,q.useIntl)();return e.createElement(pe.x,{background:"neutral0",padding:5,shadow:"filterShadow",hasRadius:!0},e.createElement(xe.r,{gap:4,style:{alignItems:"center"}},e.createElement(G.P,{col:3},e.createElement(Z.Z,null,I({id:"Settings.webhooks.trigger.test",defaultMessage:"Test-trigger"}))),e.createElement(G.P,{col:3},e.createElement(we,{isPending:a,statusCode:s})),e.createElement(G.P,{col:6},a?e.createElement($,{onCancel:t}):e.createElement(ke,{statusCode:s,message:g}))))};Ee.defaultProps={isPending:!1,onCancel(){},response:{}},Ee.propTypes={isPending:c().bool,onCancel:c().func,response:c().object};const ee=Ee;var z=n(53209);const L=/(^$)|(^[A-Za-z][_0-9A-Za-z ]*$)/,be=/(^$)|((https?:\/\/.*)(d*)\/?(.*))/,ye=z.Ry().shape({name:z.Z_(o.translatedErrors.string).required(o.translatedErrors.required).matches(L,o.translatedErrors.regex),url:z.Z_(o.translatedErrors.string).required(o.translatedErrors.required).matches(be,o.translatedErrors.regex),headers:z.Vo(a=>{let t=z.IX();if(a.length===1){const{key:r,value:s}=a[0];if(!r&&!s)return t}return t.of(z.Ry().shape({key:z.Z_().required(o.translatedErrors.required),value:z.Z_().required(o.translatedErrors.required)}))}),events:z.IX()}),te=({handleSubmit:a,data:t,triggerWebhook:r,isCreating:s,isTriggering:g,triggerResponse:I,isDraftAndPublishEvents:B})=>{const{formatMessage:i}=(0,q.useIntl)(),[b,R]=(0,e.useState)(!1);return e.createElement(J.Formik,{onSubmit:a,initialValues:{name:(t==null?void 0:t.name)||"",url:(t==null?void 0:t.url)||"",headers:Object.keys((t==null?void 0:t.headers)||[]).length?Object.entries(t.headers).map(([m,S])=>({key:m,value:S})):[{key:"",value:""}],events:(t==null?void 0:t.events)||[]},validationSchema:ye,validateOnChange:!1,validateOnBlur:!1},({handleSubmit:m,errors:S})=>e.createElement(o.Form,{noValidate:!0},e.createElement(at.T,{primaryAction:e.createElement(V.K,{horizontal:!0,spacing:2},e.createElement(ge.z,{onClick:()=>{r(),R(!0)},variant:"tertiary",startIcon:e.createElement(ue,null),disabled:s||g,size:"L"},i({id:"Settings.webhooks.trigger",defaultMessage:"Trigger"})),e.createElement(ge.z,{startIcon:e.createElement(W.Z,null),onClick:m,type:"submit",size:"L"},i({id:"global.save",defaultMessage:"Save"}))),title:s?i({id:"Settings.webhooks.create",defaultMessage:"Create a webhook"}):t==null?void 0:t.name,navigationAction:e.createElement(o.Link,{startIcon:e.createElement(v.Z,null),to:"/settings/webhooks"},i({id:"global.back",defaultMessage:"Back"}))}),e.createElement(me.D,null,e.createElement(V.K,{spacing:4},b&&e.createElement("div",{className:"trigger-wrapper"},e.createElement(ee,{isPending:g,response:I,onCancel:()=>R(!1)})),e.createElement(pe.x,{background:"neutral0",padding:8,shadow:"filterShadow",hasRadius:!0},e.createElement(V.K,{spacing:6},e.createElement(xe.r,{gap:6},e.createElement(G.P,{col:6},e.createElement(J.Field,{as:Me.o,name:"name",error:S.name&&i({id:S.name}),label:i({id:"global.name",defaultMessage:"Name"}),required:!0})),e.createElement(G.P,{col:12},e.createElement(J.Field,{as:Me.o,name:"url",error:S.url&&i({id:S.url}),label:i({id:"Settings.roles.form.input.url",defaultMessage:"Url"}),required:!0}))),e.createElement(it,null),e.createElement(p,{isDraftAndPublish:B})))))))};te.propTypes={data:c().object,handleSubmit:c().func.isRequired,triggerWebhook:c().func.isRequired,isCreating:c().bool.isRequired,isDraftAndPublishEvents:c().bool.isRequired,isTriggering:c().bool.isRequired,triggerResponse:c().object},te.defaultProps={data:void 0,triggerResponse:void 0};const ze=te;var dt=n(96486),He=Object.defineProperty,j=Object.defineProperties,$e=Object.getOwnPropertyDescriptors,Xe=Object.getOwnPropertySymbols,Qe=Object.prototype.hasOwnProperty,ct=Object.prototype.propertyIsEnumerable,Ge=(a,t,r)=>t in a?He(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r,Je=(a,t)=>{for(var r in t||(t={}))Qe.call(t,r)&&Ge(a,r,t[r]);if(Xe)for(var r of Xe(t))ct.call(t,r)&&Ge(a,r,t[r]);return a},ae=(a,t)=>j(a,$e(t));const ut=a=>{const t=Je({},a);return(0,dt.set)(t,"headers",Ye(a.headers)),t},Ye=a=>a.reduce((t,r)=>{const{key:s,value:g}=r;return s!==""?ae(Je({},t),{[s]:g}):t},{}),Ce=ut;var H=n(25108),mt=Object.defineProperty,qe=Object.getOwnPropertySymbols,pt=Object.prototype.hasOwnProperty,gt=Object.prototype.propertyIsEnumerable,_e=(a,t,r)=>t in a?mt(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r,u=(a,t)=>{for(var r in t||(t={}))pt.call(t,r)&&_e(a,r,t[r]);if(qe)for(var r of qe(t))gt.call(t,r)&&_e(a,r,t[r]);return a},h=(a,t,r)=>new Promise((s,g)=>{var I=b=>{try{i(r.next(b))}catch(R){g(R)}},B=b=>{try{i(r.throw(b))}catch(R){g(R)}},i=b=>b.done?s(b.value):Promise.resolve(b.value).then(I,B);i((r=r.apply(a,t)).next())});const ie=()=>{const{params:{id:a}}=(0,F.useRouteMatch)("/settings/webhooks/:id"),{replace:t}=(0,F.useHistory)(),{lockApp:r,unlockApp:s}=(0,o.useOverlayBlocker)(),g=(0,o.useNotification)(),I=(0,T.useQueryClient)(),{isLoading:B,collectionTypes:i}=(0,K.bP)(),b=a==="create",R=(0,e.useCallback)(Y=>h(void 0,null,function*(){const[oe,{data:yt}]=yield(0,o.to)((0,o.request)(`/admin/webhooks/${Y}`,{method:"GET"}));return oe?(g({type:"warning",message:{id:"notification.error"}}),null):yt}),[g]),{isLoading:m,data:S}=(0,T.useQuery)(["get-webhook",a],()=>R(a),{enabled:!b}),{isLoading:C,data:re,isIdle:U,mutate:ne}=(0,T.useMutation)(()=>P.be.post(`/admin/webhooks/${a}/trigger`)),et=()=>ne(null,{onError(){g({type:"warning",message:{id:"notification.error"}})}}),tt=(0,T.useMutation)(Y=>(0,o.request)("/admin/webhooks",{method:"POST",body:Y})),ht=(0,T.useMutation)(({id:Y,body:oe})=>(0,o.request)(`/admin/webhooks/${Y}`,{method:"PUT",body:oe})),Et=Y=>h(void 0,null,function*(){b?(r(),tt.mutate(Ce(Y),{onSuccess(oe){g({type:"success",message:{id:"Settings.webhooks.created"}}),t(`/settings/webhooks/${oe.data.id}`),s()},onError(oe){g({type:"warning",message:{id:"notification.error"}}),H.log(oe),s()}})):(r(),ht.mutate({id:a,body:Ce(Y)},{onSuccess(){I.invalidateQueries(["get-webhook",a]),g({type:"success",message:{id:"notification.form.success.fields"}}),s()},onError(oe){g({type:"warning",message:{id:"notification.error"}}),H.log(oe),s()}}))}),bt=(0,e.useMemo)(()=>i.some(Y=>Y.options.draftAndPublish===!0),[i]);return m||B?e.createElement(o.LoadingIndicatorPage,null):e.createElement(X.o,null,e.createElement(o.SettingsPageTitle,{name:"Webhooks"}),e.createElement(ze,u({},{handleSubmit:Et,data:S,triggerWebhook:et,isCreating:b,isTriggering:C,isTriggerIdle:U,triggerResponse:re==null?void 0:re.data.data,isDraftAndPublishEvents:bt})))}},3672:(Pe,k,n)=>{n.r(k),n.d(k,{default:()=>P});var e=n(67294),o=n(68547),X=n.n(o),T=n(87751),F=n(37948);const P=()=>e.createElement(o.CheckPagePermissions,{permissions:T.Z.settings.webhooks.create},e.createElement(F.Z,null))},9311:(Pe,k,n)=>{n.r(k),n.d(k,{default:()=>P});var e=n(67294),o=n(68547),X=n.n(o),T=n(87751),F=n(37948);const P=()=>e.createElement(o.CheckPagePermissions,{permissions:T.Z.settings.webhooks.update},e.createElement(F.Z,null))},31950:(Pe,k,n)=>{n.d(k,{h:()=>le,X:()=>Se});var e=n(67294),o=n(45697),X=n(12645),T=n(70968),F=n(41762),K=n(70389),P=n(7801);const f={Close:"Close",CloseSelect:"CloseSelect",First:"First",Last:"Last",Next:"Next",Open:"Open",PageDown:"PageDown",PageUp:"PageUp",Previous:"Previous",Select:"Select",Space:"Space",Type:"Type"},c={Close:"Close",First:"First",Last:"Last",Next:"Next",Open:"Open",Previous:"Previous",Select:"Select",UpLevel:"UpLevel"};function v(l=[],d=null,p=[]){const x=String(d!=null?d:"").toLowerCase();return x?l.filter(A=>A.props.children.toString().toLowerCase().includes(x)&&p.indexOf(A)<0):l}function W(l,d){if(!d&&l===P.y.DOWN)return f.Open;if(l===P.y.DOWN)return f.Next;if(l===P.y.UP)return f.Previous;if(l===P.y.HOME)return f.First;if(l===P.y.END)return f.Last;if(l===P.y.ESCAPE)return f.Close;if(l===P.y.ENTER)return f.CloseSelect;if(l===P.y.BACKSPACE||l===P.y.CLEAR||l.length===1)return f.Type}function Q(l,d,p){switch(p){case f.First:return 0;case f.Last:return d;case f.Previous:return Math.max(0,l-1);case f.Next:return Math.min(d,l+1);default:return l}}function E(l){(0,K.Z)(l,{scrollMode:"if-needed",block:"nearest",inline:"nearest"}).forEach(({el:d,top:p,left:x})=>{d.scrollTop=p,d.scrollLeft=x})}var O=n(46273),y=n(81318),M=n(88533),Oe=n(35961),ue=n(72735),at=n(88655),me=n(74020),pe=n(90608);const ge=({options:l,activeOptionRef:d})=>((0,e.useEffect)(()=>{d.current&&E(d.current)},[d]),l);ge.defaultProps={activeOptionRef:void 0},ge.propTypes={options:o.array.isRequired};var V=n(54574),Me=n(64777),xe=n(63428),G=n(96404),J=n(7681),q=n(63237),je=Object.defineProperty,Z=Object.defineProperties,Be=Object.getOwnPropertyDescriptors,fe=Object.getOwnPropertySymbols,Fe=Object.prototype.hasOwnProperty,Ke=Object.prototype.propertyIsEnumerable,We=(l,d,p)=>d in l?je(l,d,{enumerable:!0,configurable:!0,writable:!0,value:p}):l[d]=p,ve=(l,d)=>{for(var p in d||(d={}))Fe.call(d,p)&&We(l,p,d[p]);if(fe)for(var p of fe(d))Ke.call(d,p)&&We(l,p,d[p]);return l},Ue=(l,d)=>Z(l,Be(d)),ft=(l,d)=>{var p={};for(var x in l)Fe.call(l,x)&&d.indexOf(x)<0&&(p[x]=l[x]);if(l!=null&&fe)for(var x of fe(l))d.indexOf(x)<0&&Ke.call(l,x)&&(p[x]=l[x]);return p};const le=l=>{var d=l,{children:p,clearLabel:x,creatable:A,createMessage:rt,disabled:N,error:Ie,hasMoreItems:vt,hint:Re,label:se,labelAction:nt,loading:De,loadingMessage:he,noOptionsMessage:Ve,onChange:Te,onClear:Ae,onCreateOption:ot,onInputChange:Ze,onLoadMore:lt,placeholder:Le,required:st,value:_}=d,it=ft(d,["children","clearLabel","creatable","createMessage","disabled","error","hasMoreItems","hint","label","labelAction","loading","loadingMessage","noOptionsMessage","onChange","onClear","onCreateOption","onInputChange","onLoadMore","placeholder","required","value"]);const Ne=()=>{var u;return(u=p.find(h=>{var D;return((D=h.props)==null?void 0:D.value.toLowerCase())===_.toLowerCase()}).props)==null?void 0:u.children},[w,de]=(0,e.useState)(0),[we,ke]=(0,e.useState)(null),[$,Ee]=(0,e.useState)(p),[ee,z]=(0,e.useState)(!1),[L,be]=(0,e.useState)(""),ce=(0,e.useRef)(),ye=(0,e.useRef)(!1),te=(0,e.useRef)(),ze=(0,e.useRef)(),dt=(0,e.useRef)(),He=(0,e.useRef)(!0),j=(0,F.M)("combobox"),$e=`${j}-label`;if(!se&&!it["aria-label"])throw new Error('The Combobox component needs a "label" or an "aria-label" props');(0,e.useEffect)(()=>{Ee(v(p,L))},[L,p]),(0,e.useEffect)(()=>{ee&&ce.current&&E(ce.current)},[w,ee]),(0,e.useLayoutEffect)(()=>{He.current&&(He.current=!1)},[_]);const Xe=ee?`${j}-${w}`:"",Qe=()=>{Te(null),be("")},ct=u=>{Ze&&Ze(u);const h=te.current.value;Ee(v(p,h)),de(0),ke(null),L!==h&&be(h),ee||H(!0,!1)},Ge=u=>{const{key:h}=u,D=A&&L?$.length:$.length-1,ie=W(h,ee);switch(_&&!L&&h===P.y.BACKSPACE&&Qe(),ie){case f.Next:{if(w===D){ae(0);break}ae(Q(w,D,ie));break}case f.Previous:{if(w===0){ae(D);break}ae(Q(w,D,ie));break}case f.Last:case f.First:{if(w===D){ae(0);break}ae(Q(w,D,ie));break}case f.CloseSelect:u.preventDefault(),Ce(w);break;case f.Close:u.preventDefault(),H(!1);break;case f.Open:H(!0);break}},Je=u=>{if(u.preventDefault(),_&&!ye.current&&be(""),ye.current){ye.current=!1;return}H(!1,!1)},ae=u=>{de(u)},ut=u=>{ae(u),Ce(u)},Ye=()=>{ye.current=!0},Ce=u=>{const h=$[u];if(be(""),h){Te(h.props.value),H(!1);return}A&&(ot(L),H(!1))},H=(u,h=!0)=>{z(u),h&&te.current.focus()},mt=e.Children.toArray($).map((u,h)=>{const D=w===h;return(0,e.cloneElement)(u,{id:`${j}-${h}`,"aria-selected":we===h,"aria-posinset":h+1,"aria-setsize":e.Children.toArray($).length,ref(ie){D&&(ce.current=ie)},onClick:()=>ut(h),onMouseDown:Ye,isSelected:D})}),qe=()=>{te.current.focus(),Ae&&Ae(),Qe()},pt=()=>{te.current.focus(),H(!0)},gt=()=>{const u=$.findIndex(h=>{var D;return((D=h.props)==null?void 0:D.children)===L});return L&&u===-1},_e=u=>{u.preventDefault(),H(u,!0)};return e.createElement(V.g,{hint:Re,error:Ie,id:j},e.createElement(q.T,{"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text"},_),e.createElement(J.K,{spacing:se||Re||Ie?1:0},se&&e.createElement(Me.Q,{action:nt,required:st,id:$e},se),e.createElement(me.d8,{ref:ze,$disabled:N,hasError:Ie},e.createElement(me.fv,{wrap:"wrap"},!L&&_&&e.createElement(me.K7,{id:`${j}-selected-value`},e.createElement(ue.Z,null,Ne())),e.createElement(me.II,{"aria-activedescendant":Xe,"aria-autocomplete":"list","aria-controls":`${j}-listbox`,"aria-disabled":N,"aria-expanded":ee,"aria-haspopup":"listbox","aria-labelledby":se?$e:void 0,id:j,onBlur:N?void 0:Je,onClick:N?void 0:_e,onInput:N?void 0:ct,onKeyDown:N?void 0:Ge,placeholder:_?"":Le,readOnly:N,ref:te,role:"combobox",autoComplete:"off",autoCorrect:"off",spellCheck:"off",type:"text",value:L})),e.createElement(O.k,null,(_||L)&&e.createElement(y.zb,{id:`${j}-clear`,"aria-label":x,disabled:N,paddingLeft:3,as:"button",onClick:qe,type:"button"},e.createElement(T.default,null)),e.createElement(y.AV,{disabled:N,paddingLeft:3,"aria-hidden":!0,as:"button",onClick:pt,tabIndex:-1,type:"button"},e.createElement(X.default,null)))),e.createElement(xe.J,null),e.createElement(G.c,null)),ee&&e.createElement(M.J,{id:`${j}-popover`,source:ze,spacing:4,fullWidth:!0,intersectionId:`${j}-listbox-popover-intersection`,onReachEnd:vt&&!De?lt:void 0},e.createElement("div",{role:"listbox",ref:dt,id:`${j}-listbox`,"aria-labelledby":se?$e:void 0},(Boolean($.length)||A)&&e.createElement(e.Fragment,null,e.createElement(ge,{activeOptionRef:ce,options:mt}),gt()&&A&&e.createElement(pe.O,{isSelected:w===$.length,ref:u=>{w===$.length&&(ce.current=u)},onMouseDown:Ye,onClick:()=>Ce(),taindex:0},rt(L))),!$.length&&!A&&!De&&e.createElement(Oe.x,{paddingLeft:4,paddingRight:4,paddingTop:2,paddingBottom:2,ref:ce},e.createElement(ue.Z,{textColor:"neutral800"},Ve(L))),De&&e.createElement(O.k,{justifyContent:"center",alignItems:"center",paddingTop:2,paddingBottom:2},e.createElement(at.a,{small:!0},he)))))},Se=l=>e.createElement(le,Ue(ve({},l),{creatable:!0}));le.defaultProps={"aria-label":void 0,clearLabel:"clear",creatable:!1,createMessage:l=>`Create "${l}"`,disabled:!1,error:void 0,hasMoreItems:!1,hint:void 0,label:void 0,loading:!1,loadingMessage:"Loading content...",noOptionsMessage:()=>"No results found",onClear:void 0,onCreateOption:void 0,onInputChange:void 0,onLoadMore:void 0,placeholder:"Select or enter a value",value:void 0},Se.defaultProps=le.defaultProps,le.propTypes={"aria-label":o.string,children:o.oneOfType([o.arrayOf(o.node),o.node]),clearLabel:o.string,creatable:o.bool,createMessage:o.func,disabled:o.bool,error:o.string,hasMoreItems:o.bool,hint:o.oneOfType([o.string,o.node,o.arrayOf(o.node)]),label:o.string,labelAction:o.element,loading:o.bool,loadingMessage:o.string,noOptionsMessage:o.func,onChange:o.func.isRequired,onClear:o.func,onCreateOption:o.func,onInputChange:o.func,onLoadMore:o.func,placeholder:o.string,value:o.string},Se.propTypes=Ue(ve({},le.propTypes),{onCreateOption:o.func.isRequired})},90608:(Pe,k,n)=>{n.d(k,{O:()=>Q});var e=n(67294),o=n(45697),X=n(72735),T=n(74020),F=Object.defineProperty,K=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,c=(E,O,y)=>O in E?F(E,O,{enumerable:!0,configurable:!0,writable:!0,value:y}):E[O]=y,v=(E,O)=>{for(var y in O||(O={}))P.call(O,y)&&c(E,y,O[y]);if(K)for(var y of K(O))f.call(O,y)&&c(E,y,O[y]);return E},W=(E,O)=>{var y={};for(var M in E)P.call(E,M)&&O.indexOf(M)<0&&(y[M]=E[M]);if(E!=null&&K)for(var M of K(E))O.indexOf(M)<0&&f.call(E,M)&&(y[M]=E[M]);return y};const Q=(0,e.forwardRef)((E,O)=>{var y=E,{isSelected:M,children:Oe}=y,ue=W(y,["isSelected","children"]);return e.createElement(T.Zq,v({hasRadius:!0,paddingLeft:4,paddingRight:4,paddingTop:2,paddingBottom:2,role:"option",background:"neutral0",isSelected:M,ref:O},ue),e.createElement(X.Z,{textColor:M?"primary600":"neutral800",fontWeight:M?"bold":null},Oe))});Q.defaultProps={isSelected:!1},Q.propTypes={children:o.oneOfType([o.string,o.number]).isRequired,isSelected:o.bool},Q.displayName="ComboboxOption"},74020:(Pe,k,n)=>{n.d(k,{II:()=>f,K7:()=>K,Zq:()=>c,d8:()=>F,fv:()=>P});var e=n(27821),o=n(35961),X=n(46273),T=n(15585);const F=(0,e.default)(X.k)`
  position: relative;
  border: 1px solid ${({theme:v,hasError:W})=>W?v.colors.danger600:v.colors.neutral200};
  padding-right: ${({theme:v})=>v.spaces[3]};
  padding-left: ${({theme:v})=>v.spaces[3]};
  border-radius: ${({theme:v})=>v.borderRadius};
  background: ${({theme:v})=>v.colors.neutral0};

  ${({theme:v,$disabled:W})=>W?`
    color: ${v.colors.neutral600};
    background: ${v.colors.neutral150};
  `:void 0}

  ${(0,T.k3)()}
`,K=e.default.div`
  padding: 1px 2px;
  grid-area: 1 / 1 / 2 / 3;
`,P=(0,e.default)(X.k)`
  display: grid;
  flex: 1 1 0%;
  position: relative;
`,f=e.default.input`
  display: inline-grid;
  grid-area: 1 / 1 / 2 / 3;
  grid-template-columns: 0px min-content;
  background: transparent;
  min-height: ${40/16}rem;
  border: none;
  flex: 1;
  font-size: ${14/16}rem;
  color: ${({theme:v})=>v.colors.neutral800};
  outline: none;
  &:focus-visible {
    outline: none;
    box-shadow: none;
    outline-offset: 0;
  }
  &[aria-disabled='true'] {
    background: inherit;
    color: inherit;
    cursor: not-allowed;
  }
`,c=(0,e.default)(o.x)`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  ${({isSelected:v,theme:W})=>v&&`background: ${W.colors.primary100};`}

  &:hover {
    background: ${({theme:v})=>v.colors.primary100};
  }
`}}]);
