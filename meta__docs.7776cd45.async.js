"use strict";(self.webpackChunkreact_compack=self.webpackChunkreact_compack||[]).push([[904],{76137:function(v,n,e){var d;e.r(n),e.d(n,{demos:function(){return x}});var m=e(90228),y=e.n(m),O=e(87999),T=e.n(O),u=e(75271),C=e(98191),g=e(25663),x={"docs-guide-demo-0":{component:u.memo(u.lazy(T()(y()().mark(function f(){var t,r,p,i,o,s,a,A;return y()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return A=function(){var D=s("tab1"),R=D.activeKey,K=D.setActiveKey,P=D.resetToDefault;return r.createElement("div",null,r.createElement(i,{activeKey:R,onChange:K},r.createElement(a,{tab:"Tab 1",key:"tab1"},r.createElement("p",null,"Tab 1 \u5185\u5BB9")),r.createElement(a,{tab:"Tab 2",key:"tab2"},r.createElement("p",null,"Tab 2 \u5185\u5BB9")),r.createElement(a,{tab:"Tab 3",key:"tab3"},r.createElement("p",null,"Tab 3 \u5185\u5BB9"))),r.createElement("div",{style:{marginTop:16}},r.createElement("button",{onClick:P},"\u91CD\u7F6E\u5230\u9ED8\u8BA4")))},I.next=3,Promise.resolve().then(e.t.bind(e,75271,19));case 3:return t=I.sent,r=t.default,I.next=7,Promise.resolve().then(e.bind(e,98191));case 7:return p=I.sent,i=p.Tabs,I.next=11,Promise.resolve().then(e.bind(e,25663));case 11:return o=I.sent,s=o.useTabActive,a=i.TabPane,I.abrupt("return",{default:A});case 15:case"end":return I.stop()}},f)})))),asset:{type:"BLOCK",id:"docs-guide-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import React from 'react';
import { Tabs } from 'antd';
import { useTabActive } from 'react-compack';

const { TabPane } = Tabs;

function TabApp() {
  const { activeKey, setActiveKey, resetToDefault } = useTabActive('tab1');

  return (
    <div>
      <Tabs activeKey={activeKey} onChange={setActiveKey}>
        <TabPane tab="Tab 1" key="tab1">
          <p>Tab 1 \u5185\u5BB9</p>
        </TabPane>
        <TabPane tab="Tab 2" key="tab2">
          <p>Tab 2 \u5185\u5BB9</p>
        </TabPane>
        <TabPane tab="Tab 3" key="tab3">
          <p>Tab 3 \u5185\u5BB9</p>
        </TabPane>
      </Tabs>
      <div style={{ marginTop: 16 }}>
        <button onClick={resetToDefault}>\u91CD\u7F6E\u5230\u9ED8\u8BA4</button>
      </div>
    </div>
  );
}

export default TabApp;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.27.3"},"react-compack":{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:d||(d=e.t(u,2)),antd:C,"react-compack":g},renderOpts:{compile:function(){var f=T()(y()().mark(function r(){var p,i=arguments;return y()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(336).then(e.bind(e,15336));case 2:return s.abrupt("return",(p=s.sent).default.apply(p,i));case 3:case"end":return s.stop()}},r)}));function t(){return f.apply(this,arguments)}return t}()}}}},38603:function(v,n,e){e.r(n),e.d(n,{demos:function(){return m}});var d=e(75271),m={}},81914:function(v,n,e){var d;e.r(n),e.d(n,{demos:function(){return f}});var m=e(90228),y=e.n(m),O=e(87999),T=e.n(O),u=e(75271),C=e(23059),g=e(98191),x=e(25663),f={"docs-hooks-use-copy-to-clipboard-demo-basicexample":{component:u.memo(u.lazy(function(){return e.e(433).then(e.bind(e,58638))})),asset:{type:"BLOCK",id:"docs-hooks-use-copy-to-clipboard-demo-basicexample",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(20180).Z},"@ant-design/icons":{type:"NPM",value:"6.0.1"},antd:{type:"NPM",value:"5.27.3"},react:{type:"NPM",value:"18.3.1"},"react-compack":{type:"NPM",value:"0.0.1"}},entry:"index.tsx",title:"\u57FA\u7840\u7528\u6CD5"},context:{"@ant-design/icons":C,antd:g,react:d||(d=e.t(u,2)),"react-compack":x},renderOpts:{compile:function(){var t=T()(y()().mark(function p(){var i,o=arguments;return y()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(336).then(e.bind(e,15336));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,o));case 3:case"end":return a.stop()}},p)}));function r(){return t.apply(this,arguments)}return r}()}},"docs-hooks-use-copy-to-clipboard-demo-advancedexample":{component:u.memo(u.lazy(function(){return e.e(433).then(e.bind(e,67401))})),asset:{type:"BLOCK",id:"docs-hooks-use-copy-to-clipboard-demo-advancedexample",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(54696).Z},"@ant-design/icons":{type:"NPM",value:"6.0.1"},antd:{type:"NPM",value:"5.27.3"},react:{type:"NPM",value:"18.3.1"},"react-compack":{type:"NPM",value:"0.0.1"}},entry:"index.tsx",title:"\u5BF9\u8C61\u548C\u6570\u7EC4\u590D\u5236"},context:{"@ant-design/icons":C,antd:g,react:d||(d=e.t(u,2)),"react-compack":x},renderOpts:{compile:function(){var t=T()(y()().mark(function p(){var i,o=arguments;return y()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(336).then(e.bind(e,15336));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,o));case 3:case"end":return a.stop()}},p)}));function r(){return t.apply(this,arguments)}return r}()}},"docs-hooks-use-copy-to-clipboard-demo-callbackexample":{component:u.memo(u.lazy(function(){return e.e(433).then(e.bind(e,8938))})),asset:{type:"BLOCK",id:"docs-hooks-use-copy-to-clipboard-demo-callbackexample",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(75261).Z},"@ant-design/icons":{type:"NPM",value:"6.0.1"},antd:{type:"NPM",value:"5.27.3"},react:{type:"NPM",value:"18.3.1"},"react-compack":{type:"NPM",value:"0.0.1"}},entry:"index.tsx",title:"\u5E26\u56DE\u8C03\u51FD\u6570\u7684\u7528\u6CD5"},context:{"@ant-design/icons":C,antd:g,react:d||(d=e.t(u,2)),"react-compack":x},renderOpts:{compile:function(){var t=T()(y()().mark(function p(){var i,o=arguments;return y()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(336).then(e.bind(e,15336));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,o));case 3:case"end":return a.stop()}},p)}));function r(){return t.apply(this,arguments)}return r}()}}}},24925:function(v,n,e){e.r(n),e.d(n,{demos:function(){return g}});var d=e(90228),m=e.n(d),y=e(87999),O=e.n(y),T=e(75271),u=e(98191),C=e(25663),g={"docs-hooks-use-tab-active-demo-basicexample":{component:T.memo(T.lazy(function(){return e.e(433).then(e.bind(e,29008))})),asset:{type:"BLOCK",id:"docs-hooks-use-tab-active-demo-basicexample",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(39559).Z},antd:{type:"NPM",value:"5.27.3"},"react-compack":{type:"NPM",value:"0.0.1"}},entry:"index.tsx",title:"\u57FA\u7840\u7528\u6CD5"},context:{antd:u,"react-compack":C},renderOpts:{compile:function(){var x=O()(m()().mark(function t(){var r,p=arguments;return m()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(336).then(e.bind(e,15336));case 2:return o.abrupt("return",(r=o.sent).default.apply(r,p));case 3:case"end":return o.stop()}},t)}));function f(){return x.apply(this,arguments)}return f}()}},"docs-hooks-use-tab-active-demo-advancedexample":{component:T.memo(T.lazy(function(){return e.e(433).then(e.bind(e,48886))})),asset:{type:"BLOCK",id:"docs-hooks-use-tab-active-demo-advancedexample",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(29778).Z},antd:{type:"NPM",value:"5.27.3"},"react-compack":{type:"NPM",value:"0.0.1"}},entry:"index.tsx",title:"\u81EA\u5B9A\u4E49\u53C2\u6570\u540D + replaceState"},context:{antd:u,"react-compack":C},renderOpts:{compile:function(){var x=O()(m()().mark(function t(){var r,p=arguments;return m()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(336).then(e.bind(e,15336));case 2:return o.abrupt("return",(r=o.sent).default.apply(r,p));case 3:case"end":return o.stop()}},t)}));function f(){return x.apply(this,arguments)}return f}()}},"docs-hooks-use-tab-active-demo-multilevelexample":{component:T.memo(T.lazy(function(){return e.e(433).then(e.bind(e,1699))})),asset:{type:"BLOCK",id:"docs-hooks-use-tab-active-demo-multilevelexample",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(89109).Z},antd:{type:"NPM",value:"5.27.3"},"react-compack":{type:"NPM",value:"0.0.1"}},entry:"index.tsx",title:"\u591A\u7EA7\u6807\u7B7E\u9875\u793A\u4F8B"},context:{antd:u,"react-compack":C},renderOpts:{compile:function(){var x=O()(m()().mark(function t(){var r,p=arguments;return m()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(336).then(e.bind(e,15336));case 2:return o.abrupt("return",(r=o.sent).default.apply(r,p));case 3:case"end":return o.stop()}},t)}));function f(){return x.apply(this,arguments)}return f}()}}}},29017:function(v,n,e){e.r(n),e.d(n,{demos:function(){return m}});var d=e(75271),m={}},25663:function(v,n,e){e.r(n),e.d(n,{useCopyToClipboard:function(){return r},useTabActive:function(){return i}});var d=e(90228),m=e.n(d),y=e(31759),O=e.n(y),T=e(87999),u=e.n(T),C=e(48305),g=e.n(C),x=e(874),f=e.n(x),t=e(75271),r=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},A=a.onSuccess,b=a.onError,I=a.options,k=I===void 0?{}:I,D=(0,t.useState)({value:void 0,error:void 0,noUserInteraction:!0,isCopied:!1}),R=g()(D,2),K=R[0],P=R[1],U=(0,t.useCallback)(function(){var S=u()(m()().mark(function B(h){var L,M,N,l;return m()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(M=!0,c.prev=1,!(O()(h)==="object"||Array.isArray(h))){c.next=8;break}return c.next=5,f()(JSON.stringify(h),k);case 5:M=c.sent,c.next=11;break;case 8:return c.next=10,f()(String(h),k);case 10:M=c.sent;case 11:N={value:h,error:L,noUserInteraction:M,isCopied:!0},P(N),A==null||A(),c.next=21;break;case 16:c.prev=16,c.t0=c.catch(1),l={value:h,error:c.t0,noUserInteraction:!1,isCopied:!1},P(l),b==null||b(c.t0);case 21:case"end":return c.stop()}},B,null,[[1,16]])}));return function(B){return S.apply(this,arguments)}}(),[]),W=(0,t.useCallback)(function(){var S={value:void 0,error:void 0,noUserInteraction:!0,isCopied:!1};P(S)},[]);return{state:K,copyToClipboard:U,reset:W}},p=null;function i(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},A=a.paramName,b=A===void 0?"tab":A,I=a.replace,k=I===void 0?!1:I,D=a.clearOnUnmount,R=D===void 0?!1:D,K=(0,t.useRef)(!1),P=(0,t.useRef)(s),U=(0,t.useCallback)(function(){if(typeof window=="undefined")return s;try{var l=new URLSearchParams(window.location.search),E=l.get(b);return E||s}catch(c){return s}},[s,b]),W=(0,t.useState)(U),S=g()(W,2),B=S[0],h=S[1],L=(0,t.useCallback)(function(l){if(typeof window!="undefined")try{var E=new URL(window.location.href);l===P.current?E.searchParams.delete(b):E.searchParams.set(b,l);var c=E.toString();c!==window.location.href&&(k?window.history.replaceState(null,"",c):window.history.pushState(null,"",c))}catch(j){console.warn("Failed to update URL:",j)}},[b,k]),M=(0,t.useCallback)(function(l){h(l),L(l)},[L]),N=(0,t.useCallback)(function(){M(P.current)},[M]);return(0,t.useEffect)(function(){if(typeof window!="undefined"){var l=function(){var c=U();h(c)};return window.addEventListener("popstate",l),function(){window.removeEventListener("popstate",l)}}},[U]),(0,t.useEffect)(function(){if(!K.current&&typeof window!="undefined"){K.current=!0;var l=U();l!==s?h(l):L(l)}},[s,U,L]),(0,t.useEffect)(function(){P.current=s},[s]),(0,t.useEffect)(function(){return function(){if(R&&typeof window!="undefined")try{var l=new URL(window.location.href);l.searchParams.delete(b);var E=l.toString();E!==window.location.href&&window.history.replaceState(null,"",E)}catch(c){console.warn("Failed to clear URL parameter on unmount:",c)}}},[R,b]),{activeKey:B,setActiveKey:M,resetToDefault:N}}var o=null},57905:function(v,n,e){e.r(n),e.d(n,{texts:function(){return d}});const d=[{value:"\u5728 React \u5F00\u53D1\u8FC7\u7A0B\u4E2D\u63D0\u70BC\u51FA\u7684\u4E00\u4E9B\u53EF\u590D\u7528\u7684 hooks/\u7EC4\u4EF6/\u5DE5\u5177\u51FD\u6570\u7B49",paraId:0,tocIndex:0},{value:`npm install react-compack
# or
yarn add react-compack
# or
pnpm add react-compack
`,paraId:1,tocIndex:1},{value:`import { useTabActive, formatDate } from 'react-compack';
`,paraId:2,tocIndex:4},{value:`const { useTabActive, formatDate } = require('react-compack');
`,paraId:3,tocIndex:5},{value:`// ESM
import { useTabActive } from 'react-compack/hooks';

// CommonJS
const { useTabActive } = require('react-compack/hooks');
`,paraId:4,tocIndex:7},{value:`// ESM
import { formatDate, formatDateTime } from 'react-compack/utils';

// CommonJS
const { formatDate, formatDateTime } = require('react-compack/utils');
`,paraId:5,tocIndex:8},{value:`<script src="https://unpkg.com/react-compack/dist/umd/react-compack.min.js"><\/script>
<script>
  const { useTabActive, formatDate } = window.ReactCompack;
<\/script>
`,paraId:6,tocIndex:9},{value:"\u5728\u4F7F\u7528 UMD \u65B9\u5F0F\u5F15\u5165\u65F6\uFF0C\u9700\u8981\u786E\u4FDD React \u548C ReactDOM \u5DF2\u5F15\u5165\uFF0C\u5426\u5219\u4F1A\u62A5\u9519\u3002",paraId:7},{value:`<script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>
`,paraId:8},{value:"useTabActive",paraId:9,tocIndex:11},{value:" - Tab \u6FC0\u6D3B\u72B6\u6001\u7BA1\u7406\uFF0C\u652F\u6301 URL \u540C\u6B65",paraId:9,tocIndex:11},{value:"\u656C\u8BF7\u671F\u5F85\u66F4\u591A\u7EC4\u4EF6...",paraId:10,tocIndex:12},{value:"\u656C\u8BF7\u671F\u5F85\u66F4\u591A\u5DE5\u5177\u51FD\u6570...",paraId:11,tocIndex:13},{value:"\u672C\u5E93\u5B8C\u5168\u4F7F\u7528 TypeScript \u7F16\u5199\uFF0C\u63D0\u4F9B\u5B8C\u6574\u7684\u7C7B\u578B\u5B9A\u4E49\uFF1A",paraId:12,tocIndex:16},{value:`import { useTabActive, NetworkStatus, UseTabActiveReturn } from 'react-compack';

const { activeKey, setActiveKey, resetToDefault }: UseTabActiveReturn =
  useTabActive('tab1');
`,paraId:13,tocIndex:16}]},77712:function(v,n,e){e.r(n),e.d(n,{texts:function(){return d}});const d=[{value:"useCopyToClipboard",paraId:0,tocIndex:0},{value:"useTabActive",paraId:1,tocIndex:1}]},58503:function(v,n,e){e.r(n),e.d(n,{texts:function(){return d}});const d=[{value:"\u4E00\u4E2A\u7528\u4E8E\u590D\u5236\u6587\u672C\u5230\u526A\u8D34\u677F\u7684 React Hook\u3002",paraId:0,tocIndex:0},{value:`npm install react-compack
# \u6216
yarn add react-compack
# \u6216
pnpm add react-compack
`,paraId:1,tocIndex:1},{value:`const { state, copyToClipboard, reset } = useCopyToClipboard(options?: UseCopyToClipboardOptions);
`,paraId:2,tocIndex:7},{value:"\u53C2\u6570",paraId:3,tocIndex:8},{value:"\u8BF4\u660E",paraId:3,tocIndex:8},{value:"\u7C7B\u578B",paraId:3,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:8},{value:"options",paraId:3,tocIndex:8},{value:"\u914D\u7F6E\u9009\u9879",paraId:3,tocIndex:8},{value:"UseCopyToClipboardOptions",paraId:3,tocIndex:8},{value:"{}",paraId:3,tocIndex:8},{value:"\u53C2\u6570",paraId:4,tocIndex:9},{value:"\u8BF4\u660E",paraId:4,tocIndex:9},{value:"\u7C7B\u578B",paraId:4,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:9},{value:"onSuccess",paraId:4,tocIndex:9},{value:"\u590D\u5236\u6210\u529F\u65F6\u7684\u56DE\u8C03\u51FD\u6570",paraId:4,tocIndex:9},{value:"() => void",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"onError",paraId:4,tocIndex:9},{value:"\u590D\u5236\u5931\u8D25\u65F6\u7684\u56DE\u8C03\u51FD\u6570",paraId:4,tocIndex:9},{value:"(error: Error) => void",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"options",paraId:4,tocIndex:9},{value:"\u590D\u5236\u9009\u9879",paraId:4,tocIndex:9},{value:"object",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"\u53C2\u6570",paraId:5,tocIndex:10},{value:"\u8BF4\u660E",paraId:5,tocIndex:10},{value:"\u7C7B\u578B",paraId:5,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:10},{value:"debug",paraId:5,tocIndex:10},{value:"\u662F\u5426\u542F\u7528\u8C03\u8BD5\u6A21\u5F0F",paraId:5,tocIndex:10},{value:"boolean",paraId:5,tocIndex:10},{value:"false",paraId:5,tocIndex:10},{value:"message",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u590D\u5236\u6D88\u606F",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"-",paraId:5,tocIndex:10},{value:"format",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u590D\u5236\u683C\u5F0F",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"-",paraId:5,tocIndex:10},{value:"onCopy",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u590D\u5236\u56DE\u8C03",paraId:5,tocIndex:10},{value:"(clipboardData: object) => void",paraId:5,tocIndex:10},{value:"-",paraId:5,tocIndex:10},{value:"\u53C2\u6570",paraId:6,tocIndex:11},{value:"\u8BF4\u660E",paraId:6,tocIndex:11},{value:"\u7C7B\u578B",paraId:6,tocIndex:11},{value:"state",paraId:6,tocIndex:11},{value:"\u5F53\u524D\u590D\u5236\u72B6\u6001",paraId:6,tocIndex:11},{value:"CopyToClipboardState",paraId:6,tocIndex:11},{value:"copyToClipboard",paraId:6,tocIndex:11},{value:"\u590D\u5236\u503C\u5230\u526A\u8D34\u677F\u7684\u51FD\u6570",paraId:6,tocIndex:11},{value:"(value: string | number | object | any[]) => void",paraId:6,tocIndex:11},{value:"reset",paraId:6,tocIndex:11},{value:"\u91CD\u7F6E\u590D\u5236\u72B6\u6001",paraId:6,tocIndex:11},{value:"() => void",paraId:6,tocIndex:11},{value:"\u53C2\u6570",paraId:7,tocIndex:12},{value:"\u8BF4\u660E",paraId:7,tocIndex:12},{value:"\u7C7B\u578B",paraId:7,tocIndex:12},{value:"value",paraId:7,tocIndex:12},{value:"\u590D\u5236\u7684\u503C",paraId:7,tocIndex:12},{value:"any",paraId:7,tocIndex:12},{value:"noUserInteraction",paraId:7,tocIndex:12},{value:"\u65E0\u9700\u7528\u6237\u4EA4\u4E92",paraId:7,tocIndex:12},{value:"boolean",paraId:7,tocIndex:12},{value:"error",paraId:7,tocIndex:12},{value:"\u590D\u5236\u9519\u8BEF\u4FE1\u606F",paraId:7,tocIndex:12},{value:"Error",paraId:7,tocIndex:12},{value:"isCopied",paraId:7,tocIndex:12},{value:"\u662F\u5426\u5DF2\u590D\u5236\u6210\u529F",paraId:7,tocIndex:12},{value:"boolean",paraId:7,tocIndex:12},{value:`interface CopyToClipboardState {
  value?: any;
  noUserInteraction: boolean;
  error?: Error;
  isCopied: boolean;
}

interface UseCopyToClipboardOptions {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
  options?: {
    debug?: boolean;
    message?: string;
    format?: string;
    onCopy?: (clipboardData: object) => void;
  };
}

interface UseCopyToClipboardReturn {
  state: CopyToClipboardState;
  copyToClipboard: (value: string | number | object | any[]) => void;
  reset: () => void;
}
`,paraId:8,tocIndex:13}]},23839:function(v,n,e){e.r(n),e.d(n,{texts:function(){return d}});const d=[{value:"\u4E00\u4E2A\u7528\u4E8E\u7BA1\u7406\u6807\u7B7E\u9875\u6FC0\u6D3B\u72B6\u6001\u5E76\u4E0E URL \u540C\u6B65\u7684 React Hook\u3002\u5B83\u80FD\u591F\u5C06\u5F53\u524D\u6FC0\u6D3B\u7684\u6807\u7B7E\u9875 key \u4FDD\u5B58\u5728 URL \u67E5\u8BE2\u53C2\u6570\u4E2D\uFF0C\u786E\u4FDD\u9875\u9762\u5237\u65B0\u540E\u72B6\u6001\u4E0D\u4F1A\u4E22\u5931\u3002",paraId:0,tocIndex:0},{value:"\u{1F504} ",paraId:1,tocIndex:1},{value:"URL \u540C\u6B65",paraId:1,tocIndex:1},{value:": \u81EA\u52A8\u5C06\u6FC0\u6D3B\u7684\u6807\u7B7E\u9875 key \u540C\u6B65\u5230 URL \u67E5\u8BE2\u53C2\u6570",paraId:1,tocIndex:1},{value:"\u{1F504} ",paraId:1,tocIndex:1},{value:"\u72B6\u6001\u6301\u4E45\u5316",paraId:1,tocIndex:1},{value:": \u9875\u9762\u5237\u65B0\u540E\u81EA\u52A8\u6062\u590D\u6807\u7B7E\u9875\u72B6\u6001",paraId:1,tocIndex:1},{value:"\u{1F3AF} ",paraId:1,tocIndex:1},{value:"\u6D4F\u89C8\u5668\u5BFC\u822A\u652F\u6301",paraId:1,tocIndex:1},{value:": \u652F\u6301\u6D4F\u89C8\u5668\u524D\u8FDB/\u540E\u9000\u6309\u94AE",paraId:1,tocIndex:1},{value:"\u2699\uFE0F ",paraId:1,tocIndex:1},{value:"\u9AD8\u5EA6\u53EF\u914D\u7F6E",paraId:1,tocIndex:1},{value:": \u652F\u6301\u81EA\u5B9A\u4E49\u53C2\u6570\u540D\u3001\u5386\u53F2\u8BB0\u5F55\u6A21\u5F0F\u7B49",paraId:1,tocIndex:1},{value:"\u{1F9F9} ",paraId:1,tocIndex:1},{value:"\u81EA\u52A8\u6E05\u7406",paraId:1,tocIndex:1},{value:": \u53EF\u9009\u62E9\u5728\u7EC4\u4EF6\u5378\u8F7D\u65F6\u6E05\u7406 URL \u53C2\u6570",paraId:1,tocIndex:1},{value:"\u{1F4F1} ",paraId:1,tocIndex:1},{value:"TypeScript \u652F\u6301",paraId:1,tocIndex:1},{value:": \u5B8C\u6574\u7684\u7C7B\u578B\u5B9A\u4E49",paraId:1,tocIndex:1},{value:`const { activeKey, setActiveKey, resetToDefault } = useTabActive(
  defaultKey: string,
  options?: UseTabActiveOptions
);
`,paraId:2,tocIndex:7},{value:"\u53C2\u6570",paraId:3,tocIndex:8},{value:"\u8BF4\u660E",paraId:3,tocIndex:8},{value:"\u7C7B\u578B",paraId:3,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:8},{value:"defaultKey",paraId:3,tocIndex:8},{value:"\u9ED8\u8BA4\u6FC0\u6D3B\u7684 tab key",paraId:3,tocIndex:8},{value:"string",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"options",paraId:3,tocIndex:8},{value:"\u914D\u7F6E\u9009\u9879",paraId:3,tocIndex:8},{value:"UseTabActiveOptions",paraId:3,tocIndex:8},{value:"{}",paraId:3,tocIndex:8},{value:"\u53C2\u6570",paraId:4,tocIndex:9},{value:"\u8BF4\u660E",paraId:4,tocIndex:9},{value:"\u7C7B\u578B",paraId:4,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:9},{value:"paramName",paraId:4,tocIndex:9},{value:"URL \u67E5\u8BE2\u53C2\u6570\u540D\u79F0",paraId:4,tocIndex:9},{value:"string",paraId:4,tocIndex:9},{value:"'tab'",paraId:4,tocIndex:9},{value:"replace",paraId:4,tocIndex:9},{value:"\u662F\u5426\u66FF\u6362\u5386\u53F2\u8BB0\u5F55\u800C\u4E0D\u662F\u63A8\u9001\u65B0\u8BB0\u5F55",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"false",paraId:4,tocIndex:9},{value:"clearOnUnmount",paraId:4,tocIndex:9},{value:"\u662F\u5426\u5728\u7EC4\u4EF6\u5378\u8F7D\u65F6\u6E05\u7406 URL \u53C2\u6570",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"false",paraId:4,tocIndex:9},{value:"\u53C2\u6570",paraId:5,tocIndex:10},{value:"\u8BF4\u660E",paraId:5,tocIndex:10},{value:"\u7C7B\u578B",paraId:5,tocIndex:10},{value:"activeKey",paraId:5,tocIndex:10},{value:"\u5F53\u524D\u6FC0\u6D3B\u7684 tab key",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"setActiveKey",paraId:5,tocIndex:10},{value:"\u8BBE\u7F6E\u6FC0\u6D3B\u7684 tab key",paraId:5,tocIndex:10},{value:"(key: string) => void",paraId:5,tocIndex:10},{value:"resetToDefault",paraId:5,tocIndex:10},{value:"\u91CD\u7F6E\u5230\u9ED8\u8BA4 tab key",paraId:5,tocIndex:10},{value:"() => void",paraId:5,tocIndex:10}]},59728:function(v,n,e){e.r(n),e.d(n,{texts:function(){return d}});const d=[]},54696:function(v,n){n.Z=`import { CheckOutlined, CopyOutlined } from '@ant-design/icons';
import { Button, Space, message } from 'antd';
import React from 'react';
import { useCopyToClipboard } from 'react-compack';

const AdvancedExample: React.FC = () => {
  const { state, copyToClipboard, reset } = useCopyToClipboard();

  const copyObject = () => {
    const data = { name: 'John', age: 30, city: 'New York' };
    copyToClipboard(JSON.stringify(data, null, 2));
    message.success('\u5BF9\u8C61\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F');
  };

  const copyArray = () => {
    const data = ['apple', 'banana', 'orange'];
    copyToClipboard(data.join(', '));
    message.success('\u6570\u7EC4\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F');
  };

  const copyText = () => {
    copyToClipboard('\u8FD9\u662F\u4E00\u6BB5\u666E\u901A\u6587\u672C');
    message.success('\u6587\u672C\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F');
  };

  return (
    <Space direction="vertical">
      <Button
        type="primary"
        icon={state.isCopied ? <CheckOutlined /> : <CopyOutlined />}
        onClick={copyObject}
        onMouseLeave={() => setTimeout(reset, 2000)}
      >
        {state.isCopied ? '\u5DF2\u590D\u5236' : '\u590D\u5236\u5BF9\u8C61'}
      </Button>

      <Button
        type="default"
        icon={state.isCopied ? <CheckOutlined /> : <CopyOutlined />}
        onClick={copyArray}
        onMouseLeave={() => setTimeout(reset, 2000)}
      >
        {state.isCopied ? '\u5DF2\u590D\u5236' : '\u590D\u5236\u6570\u7EC4'}
      </Button>

      <Button
        type="dashed"
        icon={state.isCopied ? <CheckOutlined /> : <CopyOutlined />}
        onClick={copyText}
        onMouseLeave={() => setTimeout(reset, 2000)}
      >
        {state.isCopied ? '\u5DF2\u590D\u5236' : '\u590D\u5236\u6587\u672C'}
      </Button>

      {state.error && (
        <div style={{ color: 'red', fontSize: '12px' }}>
          \u590D\u5236\u5931\u8D25: {state.error.message}
        </div>
      )}
    </Space>
  );
};

export default AdvancedExample;
`},20180:function(v,n){n.Z=`import { CheckOutlined, CopyOutlined } from '@ant-design/icons';
import { Button, Space, message } from 'antd';
import React from 'react';
import { useCopyToClipboard } from 'react-compack';

const BasicExample: React.FC = () => {
  const { state, copyToClipboard, reset } = useCopyToClipboard();

  const handleCopy = () => {
    copyToClipboard('Hello World!');
    console.log(state);
    if (state.noUserInteraction) {
    } else {
      message.error('\u26A0\uFE0F \u8BF7\u624B\u52A8\u9009\u62E9\u590D\u5236 - \u6D4F\u89C8\u5668\u9700\u8981\u7528\u6237\u4EA4\u4E92\u624D\u80FD\u5B8C\u6210\u590D\u5236\u64CD\u4F5C');
    }
  };

  return (
    <Space direction="vertical">
      <Button
        type="primary"
        icon={state.isCopied ? <CheckOutlined /> : <CopyOutlined />}
        onClick={handleCopy}
        onMouseLeave={() => setTimeout(reset, 2000)}
      >
        {state.isCopied ? '\u5DF2\u590D\u5236' : '\u590D\u5236\u6587\u672C'}
      </Button>

      {state.error && (
        <div style={{ color: 'red', fontSize: '12px' }}>
          \u590D\u5236\u5931\u8D25: {state.error.message}
        </div>
      )}
    </Space>
  );
};

export default BasicExample;
`},75261:function(v,n){n.Z=`import { CopyOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Input, Space, message } from 'antd';
import React, { useState } from 'react';
import { useCopyToClipboard } from 'react-compack';

const CallbackExample: React.FC = () => {
  const [customText, setCustomText] = useState('\u81EA\u5B9A\u4E49\u6587\u672C\u5185\u5BB9');

  const { copyToClipboard } = useCopyToClipboard({
    onSuccess: () => {
      message.success(\`\u590D\u5236\u6210\u529F! \u5185\u5BB9: \${customText}\`);
    },
    onError: (error) => {
      message.error(\`\u590D\u5236\u5931\u8D25: \${customText} \${error.message}\`);
    },
  });

  const handleCopyWithCustomText = () => {
    if (!customText.trim()) {
      message.warning('\u8BF7\u8F93\u5165\u8981\u590D\u5236\u7684\u6587\u672C');
      return;
    }
    copyToClipboard(customText);
  };

  return (
    <Space direction="vertical">
      <Input
        placeholder="\u8BF7\u8F93\u5165\u8981\u590D\u5236\u7684\u6587\u672C"
        value={customText}
        onChange={(e) => setCustomText(e.target.value)}
        prefix={<EditOutlined />}
      />

      <Button
        type="primary"
        icon={<CopyOutlined />}
        onClick={handleCopyWithCustomText}
      >
        \u590D\u5236\u6587\u672C
      </Button>

      <div style={{ fontSize: '12px', color: '#666' }}>
        \u63D0\u793A\uFF1A\u5728\u63A7\u5236\u53F0\u53EF\u4EE5\u67E5\u770B\u8C03\u8BD5\u4FE1\u606F
      </div>
    </Space>
  );
};

export default CallbackExample;
`},29778:function(v,n){n.Z=`import { Space, Tabs, Tag, Typography } from 'antd';
import { useTabActive } from 'react-compack';
const { Title, Text } = Typography;

export default function AdvancedExample() {
  const { activeKey, setActiveKey } = useTabActive('config', {
    paramName: 'setting',
    replace: true,
  });

  const items = [
    {
      key: 'config',
      label: '\u57FA\u7840\u914D\u7F6E',
      children: (
        <div>
          <Title level={4}>\u57FA\u7840\u914D\u7F6E</Title>
          <Text>
            \u8FD9\u4E2A\u793A\u4F8B\u4F7F\u7528\u4E86\u81EA\u5B9A\u4E49\u53C2\u6570\u540D setting \u548C replaceState \u6A21\u5F0F\u3002 \u6CE8\u610F URL
            \u4E2D\u7684\u53C2\u6570\u540D\u53D8\u5316\u3002
          </Text>
        </div>
      ),
    },
    {
      key: 'advanced',
      label: '\u9AD8\u7EA7\u914D\u7F6E',
      children: (
        <div>
          <Title level={4}>\u9AD8\u7EA7\u914D\u7F6E</Title>
          <Text>
            \u9AD8\u7EA7\u914D\u7F6E\u9009\u9879\uFF0C\u4F7F\u7528 replaceState \u4E0D\u4F1A\u5728\u6D4F\u89C8\u5668\u5386\u53F2\u4E2D\u521B\u5EFA\u65B0\u6761\u76EE\u3002
          </Text>
        </div>
      ),
    },
    {
      key: 'security',
      label: '\u5B89\u5168\u8BBE\u7F6E',
      children: (
        <div>
          <Title level={4}>\u5B89\u5168\u8BBE\u7F6E</Title>
          <Text>\u914D\u7F6E\u5B89\u5168\u76F8\u5173\u7684\u9009\u9879\u548C\u6743\u9650\u8BBE\u7F6E\u3002</Text>
        </div>
      ),
    },
  ];

  return (
    <>
      <Space style={{ marginBottom: 16 }}>
        <Text type="secondary">
          \u53C2\u6570\u540D: <Tag>setting</Tag>
        </Text>
        <Text type="secondary">
          \u5F53\u524D\u6FC0\u6D3B: <Tag color="green">{activeKey}</Tag>
        </Text>
      </Space>
      <Tabs activeKey={activeKey} onChange={setActiveKey} items={items} />
    </>
  );
}
`},39559:function(v,n){n.Z=`import { Button, Space, Tabs, Tag, Typography } from 'antd';
import { useTabActive } from 'react-compack';
const { Title, Text } = Typography;

export default function BasicExample() {
  const { activeKey, setActiveKey, resetToDefault } = useTabActive('home');

  const items = [
    {
      key: 'home',
      label: '\u9996\u9875',
      children: (
        <div>
          <Title level={4}>\u6B22\u8FCE\u6765\u5230\u9996\u9875</Title>
          <Text>
            \u8FD9\u662F\u9996\u9875\u7684\u5185\u5BB9\u3002\u5F53\u4F60\u5207\u6362\u5230\u5176\u4ED6\u6807\u7B7E\u9875\u65F6\uFF0CURL \u4F1A\u81EA\u52A8\u66F4\u65B0\uFF0C
            \u9875\u9762\u5237\u65B0\u540E\u4F1A\u4FDD\u6301\u5F53\u524D\u9009\u4E2D\u7684\u6807\u7B7E\u9875\u72B6\u6001\u3002
          </Text>
        </div>
      ),
    },
    {
      key: 'products',
      label: '\u4EA7\u54C1',
      children: (
        <div>
          <Title level={4}>\u4EA7\u54C1\u5217\u8868</Title>
          <Text>\u8FD9\u91CC\u5C55\u793A\u6240\u6709\u4EA7\u54C1\u4FE1\u606F\u3002\u6CE8\u610F\u89C2\u5BDF URL \u4E2D\u7684 tab \u53C2\u6570\u53D8\u5316\u3002</Text>
        </div>
      ),
    },
    {
      key: 'about',
      label: '\u5173\u4E8E\u6211\u4EEC',
      children: (
        <div>
          <Title level={4}>\u5173\u4E8E\u6211\u4EEC</Title>
          <Text>
            \u4E86\u89E3\u66F4\u591A\u5173\u4E8E\u6211\u4EEC\u516C\u53F8\u7684\u4FE1\u606F\u3002\u8BD5\u8BD5\u5237\u65B0\u9875\u9762\uFF0C\u6807\u7B7E\u9875\u72B6\u6001\u4F1A\u4FDD\u6301\u4E0D\u53D8\u3002
          </Text>
        </div>
      ),
    },
    {
      key: 'contact',
      label: '\u8054\u7CFB\u6211\u4EEC',
      children: (
        <div>
          <Title level={4}>\u8054\u7CFB\u65B9\u5F0F</Title>
          <Text>\u5982\u6709\u4EFB\u4F55\u95EE\u9898\uFF0C\u8BF7\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u8054\u7CFB\u6211\u4EEC\u3002</Text>
        </div>
      ),
    },
  ];

  return (
    <>
      <Space style={{ marginBottom: 16 }}>
        <Button onClick={resetToDefault}>\u91CD\u7F6E\u5230\u9ED8\u8BA4\u6807\u7B7E\u9875</Button>
        <Text type="secondary">
          \u5F53\u524D\u6FC0\u6D3B: <Tag color="blue">{activeKey}</Tag>
        </Text>
      </Space>
      <Tabs activeKey={activeKey} onChange={setActiveKey} items={items} />
    </>
  );
}
`},89109:function(v,n){n.Z=`import { Space, Tabs, Tag, Typography } from 'antd';
import { useTabActive } from 'react-compack';
const { Title, Text } = Typography;

export default function MultiLevelExample() {
  const { activeKey: mainTab, setActiveKey: setMainTab } = useTabActive(
    'dashboard',
    {
      paramName: 'main',
    },
  );

  const { activeKey: subTab, setActiveKey: setSubTab } = useTabActive(
    'overview',
    {
      paramName: 'sub',
    },
  );

  const subItems = [
    {
      key: 'overview',
      label: '\u6982\u89C8',
      children: <div style={{ padding: '16px' }}>\u6570\u636E\u6982\u89C8\u5185\u5BB9</div>,
    },
    {
      key: 'charts',
      label: '\u56FE\u8868',
      children: <div style={{ padding: '16px' }}>\u56FE\u8868\u5C55\u793A\u5185\u5BB9</div>,
    },
    {
      key: 'reports',
      label: '\u62A5\u544A',
      children: <div style={{ padding: '16px' }}>\u62A5\u544A\u8BE6\u60C5\u5185\u5BB9</div>,
    },
  ];

  const mainItems = [
    {
      key: 'dashboard',
      label: '\u4EEA\u8868\u76D8',
      children: (
        <div>
          <Text>
            \u8FD9\u662F\u4E00\u4E2A\u591A\u7EA7\u6807\u7B7E\u9875\u793A\u4F8B\uFF0C\u540C\u65F6\u7BA1\u7406\u4E3B\u6807\u7B7E\u9875\u548C\u5B50\u6807\u7B7E\u9875\u7684\u72B6\u6001\u3002
          </Text>
          <Tabs
            activeKey={subTab}
            onChange={setSubTab}
            items={subItems}
            size="small"
          />
        </div>
      ),
    },
    {
      key: 'users',
      label: '\u7528\u6237\u7BA1\u7406',
      children: (
        <div>
          <Title level={4}>\u7528\u6237\u7BA1\u7406</Title>
          <Text>\u7BA1\u7406\u7CFB\u7EDF\u7528\u6237\u548C\u6743\u9650\u8BBE\u7F6E\u3002</Text>
        </div>
      ),
    },
    {
      key: 'settings',
      label: '\u7CFB\u7EDF\u8BBE\u7F6E',
      children: (
        <div>
          <Title level={4}>\u7CFB\u7EDF\u8BBE\u7F6E</Title>
          <Text>\u914D\u7F6E\u7CFB\u7EDF\u53C2\u6570\u548C\u9009\u9879\u3002</Text>
        </div>
      ),
    },
  ];

  return (
    <>
      <Space style={{ marginBottom: 16 }}>
        <Text type="secondary">
          \u4E3B\u6807\u7B7E\u9875: <Tag color="blue">{mainTab}</Tag>
        </Text>
        <Text type="secondary">
          \u5B50\u6807\u7B7E\u9875: <Tag color="orange">{subTab}</Tag>
        </Text>
      </Space>
      <Tabs activeKey={mainTab} onChange={setMainTab} items={mainItems} />
    </>
  );
}
`}}]);
