"use strict";(self.webpackChunkevil_pro_cli=self.webpackChunkevil_pro_cli||[]).push([[69],{83442:function(Fe,z,t){t.r(z),t.d(z,{default:function(){return Te}});var Y=t(97857),x=t.n(Y),L=t(15009),T=t.n(L),O=t(99289),P=t.n(O),H=t(5574),j=t.n(H),D={rowKey:"id",tableAlertRender:!1,search:!1,options:{reload:!0,density:!1,setting:!1},pagination:{defaultPageSize:10,showSizeChanger:!0,disabled:!1},scroll:{x:"max-content"},form:{syncToUrl:!0,syncToInitialValues:!1}},be="",De={required:!0,message:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"},J=t(11774),Z=t(68832),N=t(32188),m=t(42075),Q=t(86250),W=t(3363),f=t(67294),k=t(82114),A=t(47756),a=t(85893),X=A.Z.Text,q=function(n){var e=n.onClick;return(0,a.jsxs)(m.Z,{onClick:e,children:[(0,a.jsx)(k.Z,{style:{color:"#f50"}}),(0,a.jsx)(X,{type:"secondary",style:{cursor:"pointer"},children:"\u5E73\u8861\u6821\u9A8C\u5F02\u5E38"})]})},_=q,ee=t(50675),te=t(8913),w=t(37476),ae=t(88280),ne=[{title:"\u516C\u5F0F\u63CF\u8FF0",dataIndex:"description"},{title:"\u662F\u5426\u901A\u8FC7",dataIndex:"passes",valueEnum:{true:{text:"\u901A\u8FC7"},false:{text:"\u4E0D\u901A\u8FC7"}},render:function(n,e){var l=e.passes;return l?(0,a.jsxs)(m.Z,{style:{color:"#87d068"},children:[(0,a.jsx)(ee.Z,{}),n]}):(0,a.jsxs)(m.Z,{style:{color:"#f50"},children:[(0,a.jsx)(te.Z,{}),n]})}}],re=[{title:"\u79D1\u76EE",dataIndex:"type",editable:!1},{title:"\u503C",dataIndex:"value1",valueType:"digit",fieldProps:{bordered:!1,width:"200"}}],le=function(n){var e=(0,N.useModel)("EarningsComparison.model",function(s){return{updateRecord:s.updateRecord,updateRecords:s.updateRecords,exceptionData:s.exceptionData,periods:s.periods,data:s.data}}),l=e.data,h=e.exceptionData,v=e.periods,C=e.updateRecords,I=(0,f.useState)(function(){return l[v].map(function(s){return s.key})}),R=j()(I,2),E=R[0],S=R[1];(0,f.useEffect)(function(){var s=l[v].map(function(o){return o.key});S(s)},[v,l]);var F=(0,f.useMemo)(function(){var s=h[0].equation.keysToVerify;return l[v].filter(function(o){return s.includes(o.key)})},[h,l,v]),y=(0,f.useRef)();return(0,a.jsxs)(w.Y,x()(x()({title:"\u8868\u5185\u516C\u793A\u5E73\u8861\u6821\u9A8C",autoFocusFirstInput:!0},n),{},{onFinish:P()(T()().mark(function s(){return T()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return C(v,y.current),c.abrupt("return",!0);case 2:case"end":return c.stop()}},s)})),children:[(0,a.jsx)(Z.Z,x()(x()({},D),{},{rowKey:"key",search:!1,options:!1,pagination:!1,columns:ne,size:"small",className:"inner-table",dataSource:h})),(0,a.jsx)(ae.Z,{className:"inner-table",headerTitle:"\u516C\u5F0F\u63CF\u8FF0",size:"small",columns:re,rowKey:"key",controlled:!0,value:F,onChange:function(o){y.current=o},recordCreatorProps:!1,editable:{type:"multiple",editableKeys:E,actionRender:function(o,c,b){return[b.delete]},onChange:S}})]}))},se=le,ue=t(83062),ie=t(5867),oe=A.Z.Text,de=A.Z.Title,ce=function(n,e,l){var h=Number(n.replace("%","")),v=Number(e.replace("%","")),C=Number(l.replace("%",""));return v<=h&&h<=C},B=function(n,e){var l=ce(n,e.min,e.max);return l?n:(0,a.jsx)(ue.Z,{title:"".concat(e.min,"-").concat(e.max),color:"green",placement:"right",children:(0,a.jsx)(de,{level:4,type:"danger",children:n})})},ve=[{title:"\u9879\u76EE",dataIndex:"type",width:100},{title:"\u540C\u82B1\u987A",dataIndex:"value1",width:100,render:function(n,e){return B(e.value1,e)}},{title:"\u4F01\u67E5\u67E5",dataIndex:"value2",width:100,render:function(n,e){return B(e.value2,e)}},{title:"\u5BA2\u6237\u63D0\u4F9B",dataIndex:"value3",width:100,render:function(n,e){return B(e.value3,e)}}],fe=function(){return(0,a.jsx)(w.Y,{title:"\u6307\u6807\u5206\u6790\u7ED3\u679C",trigger:(0,a.jsxs)(m.Z,{align:"start",children:[(0,a.jsx)(k.Z,{style:{color:"#f50"}}),(0,a.jsx)(oe,{type:"secondary",style:{cursor:"pointer"},children:"\u540C\u82B1\u987A\u548C\u5BA2\u6237\u63D0\u4F9B\u8D22\u62A5\u8BA1\u7B97 \u51FA\u6765\u7684\u8D22\u52A1\u6307\u6807\u504F\u79BB\u5EA6\u8FC7\u5927"})]}),autoFocusFirstInput:!0,submitter:!1,children:(0,a.jsx)(Z.Z,x()(x()({},D),{},{rowKey:"key",search:!1,options:!1,pagination:!1,columns:ve,size:"small",className:"inner-table",dataSource:ie.kU}))})},pe=fe,xe=t(27484),he=t.n(xe),Ze=t(33852),ye=t(57540);he().locale("zh-cn");function me(i,n,e){return i!==n||i!==e||n!==e}var V="#87d068",K="#f50",Ce=function(n){var e=me(n.value1,n.value2,n.value3),l={backgroundColor:"#f6ffed"};return e&&(l.backgroundColor="yellow"),l},U=["1","2","3"],ge=function(){var n=(0,f.useRef)(),e=(0,f.useState)("tab1"),l=j()(e,2),h=l[0],v=l[1],C=(0,f.useState)(!1),I=j()(C,2),R=I[0],E=I[1],S=(0,f.useState)(U),F=j()(S,2),y=F[0],s=F[1],o=(0,N.useModel)("EarningsComparison.model",function(u){return{data:u.data,exceptionData:u.exceptionData,setPeriods:u.setPeriods,setExceptionType:u.setExceptionType,periods:u.periods}}),c=o.data,b=o.exceptionData,je=o.setPeriods,Ie=o.setExceptionType,Re=o.periods,Ee=(0,f.useMemo)(function(){return b.some(function(u){return!u.passes})},[b,c,Re]),Se=[{title:"\u79D1\u76EE",dataIndex:"type",width:200,hideInSearch:!0},{dataIndex:"value1",title:(0,a.jsxs)(m.Z,{children:[Ee&&(0,a.jsx)(_,{onClick:function(){Ie("value1"),E(!0)}}),"\u540C\u82B1\u987A"]}),width:250,hideInSearch:!0,render:function(d,r){var p=r.value1===r.value2||r.value1===r.value3?V:K;return(0,a.jsx)("span",{style:{color:p},children:d})},hideInTable:!y.includes("1")},{title:"\u4F01\u67E5\u67E5",dataIndex:"value2",width:250,hideInSearch:!0,render:function(d,r){var p=r.value2===r.value1||r.value2===r.value3?V:K;return(0,a.jsx)("span",{style:{color:p},children:d})},hideInTable:!y.includes("2")},{title:"\u5BA2\u6237\u63D0\u4F9B",dataIndex:"value3",width:250,hideInSearch:!0,render:function(d,r){var p=r.value3===r.value1||r.value3===r.value2?V:K;return(0,a.jsx)("span",{style:{color:p},children:d})},hideInTable:!y.includes("3")},{title:"\u5BA2\u6237",dataIndex:"consumer",hideInTable:!0,valueEnum:{1:{text:"\u5BA2\u62371",status:"Default"},2:{text:"\u5BA2\u62372",status:"Default"},3:{text:"\u5BA2\u62373",status:"Default"}},initialValue:"1"},{title:"\u8D22\u62A5\u671F\u6570",dataIndex:"periods",hideInTable:!0,initialValue:"2024-03",valueType:"dateMonth"},{title:"\u8D22\u62A5\u7C7B\u578B",dataIndex:"financialType",hideInTable:!0,valueType:"radio",valueEnum:{1:{text:"\u5355\u4F53",status:"Default"},2:{text:"\u5408\u5E76",status:"Default"}},initialValue:"2"},{title:"\u6765\u6E90\u6E20\u9053",valueEnum:{1:{text:"\u540C\u82B1\u987A"},2:{text:"\u4F01\u67E5\u67E5"},3:{text:"\u5BA2\u6237\u63D0\u4F9B"}},valueType:"checkbox",dataIndex:"sourceChannel",hideInTable:!0,initialValue:U}];return(0,a.jsxs)(J._z,{header:{title:!1},children:[(0,a.jsx)(Z.Z,x()(x()({},D),{},{rowKey:"key",scroll:{x:"100%"},search:{filterType:"query",defaultCollapsed:!1,searchText:"\u8D22\u62A5\u5BF9\u6BD4",resetText:"\u6761\u4EF6\u91CD\u7F6E"},pagination:!1,actionRef:n,columns:Se,toolbar:{menu:{type:"tab",activeKey:h,items:[{key:"tab1",label:"\u8D44\u4EA7\u8D1F\u503A\u8868"},{key:"tab2",label:"\u5229\u6DA6\u8868",disabled:!0},{key:"tab3",label:"\u73B0\u91D1\u6D41\u91CF\u8868",disabled:!0}],onChange:function(d){v(d)}}},onRow:function(d){return{style:Ce(d)}},tableRender:function(d,r){return(0,a.jsxs)(Q.Z,{gap:"middle",children:[r,(0,a.jsx)("div",{style:{width:250},children:(0,a.jsx)(W.Z,{direction:"vertical",size:"small",current:1,items:[{title:"\u8D22\u62A5\u6BD4\u5BF9",description:"\u8D22\u52A1\u62A5\u8868\u79D1\u76EE\u9879\u6BD4\u5BF9"},{title:"\u6307\u6807\u5206\u6790\u7ED3\u679C",description:(0,a.jsx)(pe,{})}]})})]})},params:{update:c},request:function(){var u=P()(T()().mark(function d(r){var p,M,$,G;return T()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return p=r.periods,M=r.sourceChannel,$=M===void 0?[]:M,g.next=3,(0,ye.p)(1e3);case 3:return s($),je(p),G=(c==null?void 0:c[p])||[],g.abrupt("return",{data:G,success:!0});case 7:case"end":return g.stop()}},d)}));return function(d){return u.apply(this,arguments)}}()})),(0,a.jsx)(se,{open:R,onOpenChange:E})]})},Te=ge}}]);
