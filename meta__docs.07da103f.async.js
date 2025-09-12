"use strict";(self.webpackChunkreact_compack=self.webpackChunkreact_compack||[]).push([[904],{91006:function(f,a,e){var u;e.r(a),e.d(a,{demos:function(){return d}});var m=e(90228),r=e.n(m),h=e(87999),y=e.n(h),c=e(75271),b=e(9020),E=e(35177),d={"docs-guide-demo-0":{component:c.memo(c.lazy(y()(r()().mark(function v(){var p,t,l,T,n,s,A,D;return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return D=function(){var g=s("tab1"),R=g.activeKey,o=g.setActiveKey,I=g.resetToDefault;return t.createElement("div",null,t.createElement(T,{activeKey:R,onChange:o},t.createElement(A,{tab:"Tab 1",key:"tab1"},t.createElement("p",null,"Tab 1 \u5185\u5BB9")),t.createElement(A,{tab:"Tab 2",key:"tab2"},t.createElement("p",null,"Tab 2 \u5185\u5BB9")),t.createElement(A,{tab:"Tab 3",key:"tab3"},t.createElement("p",null,"Tab 3 \u5185\u5BB9"))),t.createElement("div",{style:{marginTop:16}},t.createElement("button",{onClick:I},"\u91CD\u7F6E\u5230\u9ED8\u8BA4")))},i.next=3,Promise.resolve().then(e.t.bind(e,75271,19));case 3:return p=i.sent,t=p.default,i.next=7,Promise.resolve().then(e.bind(e,9020));case 7:return l=i.sent,T=l.Tabs,i.next=11,Promise.resolve().then(e.bind(e,35177));case 11:return n=i.sent,s=n.useTabActive,A=T.TabPane,i.abrupt("return",{default:D});case 15:case"end":return i.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-guide-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import React from 'react';
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

export default TabApp;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.27.3"},"react-compack":{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:u||(u=e.t(c,2)),antd:b,"react-compack":E},renderOpts:{compile:function(){var v=y()(r()().mark(function t(){var l,T=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(463).then(e.bind(e,94463));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,T));case 3:case"end":return s.stop()}},t)}));function p(){return v.apply(this,arguments)}return p}()}}}},36547:function(f,a,e){e.r(a),e.d(a,{demos:function(){return E}});var u=e(90228),m=e.n(u),r=e(87999),h=e.n(r),y=e(75271),c=e(9020),b=e(35177),E={"docs-hooks-use-tab-active-demo-basicexample":{component:y.memo(y.lazy(function(){return e.e(433).then(e.bind(e,6421))})),asset:{type:"BLOCK",id:"docs-hooks-use-tab-active-demo-basicexample",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(38304).Z},antd:{type:"NPM",value:"5.27.3"},"react-compack":{type:"NPM",value:"0.0.1"}},entry:"index.tsx",title:"\u57FA\u7840\u7528\u6CD5"},context:{antd:c,"react-compack":b},renderOpts:{compile:function(){var d=h()(m()().mark(function p(){var t,l=arguments;return m()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(463).then(e.bind(e,94463));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,l));case 3:case"end":return n.stop()}},p)}));function v(){return d.apply(this,arguments)}return v}()}},"docs-hooks-use-tab-active-demo-advancedexample":{component:y.memo(y.lazy(function(){return e.e(433).then(e.bind(e,16932))})),asset:{type:"BLOCK",id:"docs-hooks-use-tab-active-demo-advancedexample",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(85635).Z},antd:{type:"NPM",value:"5.27.3"},"react-compack":{type:"NPM",value:"0.0.1"}},entry:"index.tsx",title:"\u81EA\u5B9A\u4E49\u53C2\u6570\u540D + replaceState"},context:{antd:c,"react-compack":b},renderOpts:{compile:function(){var d=h()(m()().mark(function p(){var t,l=arguments;return m()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(463).then(e.bind(e,94463));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,l));case 3:case"end":return n.stop()}},p)}));function v(){return d.apply(this,arguments)}return v}()}},"docs-hooks-use-tab-active-demo-multilevelexample":{component:y.memo(y.lazy(function(){return e.e(433).then(e.bind(e,73499))})),asset:{type:"BLOCK",id:"docs-hooks-use-tab-active-demo-multilevelexample",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(15568).Z},antd:{type:"NPM",value:"5.27.3"},"react-compack":{type:"NPM",value:"0.0.1"}},entry:"index.tsx",title:"\u591A\u7EA7\u6807\u7B7E\u9875\u793A\u4F8B"},context:{antd:c,"react-compack":b},renderOpts:{compile:function(){var d=h()(m()().mark(function p(){var t,l=arguments;return m()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(463).then(e.bind(e,94463));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,l));case 3:case"end":return n.stop()}},p)}));function v(){return d.apply(this,arguments)}return v}()}}}},25301:function(f,a,e){e.r(a),e.d(a,{demos:function(){return m}});var u=e(75271),m={}},35177:function(f,a,e){e.r(a),e.d(a,{useTabActive:function(){return h}});var u=e(48305),m=e.n(u),r=e(75271);function h(c){var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},E=b.paramName,d=E===void 0?"tab":E,v=b.replace,p=v===void 0?!1:v,t=b.clearOnUnmount,l=t===void 0?!1:t,T=(0,r.useRef)(!1),n=(0,r.useRef)(c),s=(0,r.useCallback)(function(){if(typeof window=="undefined")return c;try{var o=new URLSearchParams(window.location.search),I=o.get(d);return I||c}catch(x){return c}},[c,d]),A=(0,r.useState)(s),D=m()(A,2),k=D[0],i=D[1],P=(0,r.useCallback)(function(o){if(typeof window!="undefined")try{var I=new URL(window.location.href);o===n.current?I.searchParams.delete(d):I.searchParams.set(d,o);var x=I.toString();x!==window.location.href&&(p?window.history.replaceState(null,"",x):window.history.pushState(null,"",x))}catch(K){console.warn("Failed to update URL:",K)}},[d,p]),g=(0,r.useCallback)(function(o){i(o),P(o)},[P]),R=(0,r.useCallback)(function(){g(n.current)},[g]);return(0,r.useEffect)(function(){if(typeof window!="undefined"){var o=function(){var x=s();i(x)};return window.addEventListener("popstate",o),function(){window.removeEventListener("popstate",o)}}},[s]),(0,r.useEffect)(function(){if(!T.current&&typeof window!="undefined"){T.current=!0;var o=s();o!==c?i(o):P(o)}},[c,s,P]),(0,r.useEffect)(function(){n.current=c},[c]),(0,r.useEffect)(function(){return function(){if(l&&typeof window!="undefined")try{var o=new URL(window.location.href);o.searchParams.delete(d);var I=o.toString();I!==window.location.href&&window.history.replaceState(null,"",I)}catch(x){console.warn("Failed to clear URL parameter on unmount:",x)}}},[l,d]),{activeKey:k,setActiveKey:g,resetToDefault:R}}var y=null},77216:function(f,a,e){e.r(a),e.d(a,{texts:function(){return u}});const u=[{value:"\u5728 React \u5F00\u53D1\u8FC7\u7A0B\u4E2D\u63D0\u70BC\u51FA\u7684\u4E00\u4E9B\u53EF\u590D\u7528\u7684 hooks/\u7EC4\u4EF6/\u5DE5\u5177\u51FD\u6570\u7B49",paraId:0,tocIndex:0},{value:`npm install react-compack
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
`,paraId:13,tocIndex:16}]},34694:function(f,a,e){e.r(a),e.d(a,{texts:function(){return u}});const u=[{value:"\u4E00\u4E2A\u7528\u4E8E\u7BA1\u7406\u6807\u7B7E\u9875\u6FC0\u6D3B\u72B6\u6001\u5E76\u4E0E URL \u540C\u6B65\u7684 React Hook\u3002\u5B83\u80FD\u591F\u5C06\u5F53\u524D\u6FC0\u6D3B\u7684\u6807\u7B7E\u9875 key \u4FDD\u5B58\u5728 URL \u67E5\u8BE2\u53C2\u6570\u4E2D\uFF0C\u786E\u4FDD\u9875\u9762\u5237\u65B0\u540E\u72B6\u6001\u4E0D\u4F1A\u4E22\u5931\u3002",paraId:0,tocIndex:0},{value:"\u{1F504} ",paraId:1,tocIndex:1},{value:"URL \u540C\u6B65",paraId:1,tocIndex:1},{value:": \u81EA\u52A8\u5C06\u6FC0\u6D3B\u7684\u6807\u7B7E\u9875 key \u540C\u6B65\u5230 URL \u67E5\u8BE2\u53C2\u6570",paraId:1,tocIndex:1},{value:"\u{1F504} ",paraId:1,tocIndex:1},{value:"\u72B6\u6001\u6301\u4E45\u5316",paraId:1,tocIndex:1},{value:": \u9875\u9762\u5237\u65B0\u540E\u81EA\u52A8\u6062\u590D\u6807\u7B7E\u9875\u72B6\u6001",paraId:1,tocIndex:1},{value:"\u{1F3AF} ",paraId:1,tocIndex:1},{value:"\u6D4F\u89C8\u5668\u5BFC\u822A\u652F\u6301",paraId:1,tocIndex:1},{value:": \u652F\u6301\u6D4F\u89C8\u5668\u524D\u8FDB/\u540E\u9000\u6309\u94AE",paraId:1,tocIndex:1},{value:"\u2699\uFE0F ",paraId:1,tocIndex:1},{value:"\u9AD8\u5EA6\u53EF\u914D\u7F6E",paraId:1,tocIndex:1},{value:": \u652F\u6301\u81EA\u5B9A\u4E49\u53C2\u6570\u540D\u3001\u5386\u53F2\u8BB0\u5F55\u6A21\u5F0F\u7B49",paraId:1,tocIndex:1},{value:"\u{1F9F9} ",paraId:1,tocIndex:1},{value:"\u81EA\u52A8\u6E05\u7406",paraId:1,tocIndex:1},{value:": \u53EF\u9009\u62E9\u5728\u7EC4\u4EF6\u5378\u8F7D\u65F6\u6E05\u7406 URL \u53C2\u6570",paraId:1,tocIndex:1},{value:"\u{1F4F1} ",paraId:1,tocIndex:1},{value:"TypeScript \u652F\u6301",paraId:1,tocIndex:1},{value:": \u5B8C\u6574\u7684\u7C7B\u578B\u5B9A\u4E49",paraId:1,tocIndex:1},{value:`const { activeKey, setActiveKey, resetToDefault } = useTabActive(
  defaultKey: string,
  options?: UseTabActiveOptions
);
`,paraId:2,tocIndex:7},{value:"\u53C2\u6570",paraId:3,tocIndex:8},{value:"\u8BF4\u660E",paraId:3,tocIndex:8},{value:"\u7C7B\u578B",paraId:3,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:8},{value:"defaultKey",paraId:3,tocIndex:8},{value:"\u9ED8\u8BA4\u6FC0\u6D3B\u7684 tab key",paraId:3,tocIndex:8},{value:"string",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"options",paraId:3,tocIndex:8},{value:"\u914D\u7F6E\u9009\u9879",paraId:3,tocIndex:8},{value:"UseTabActiveOptions",paraId:3,tocIndex:8},{value:"{}",paraId:3,tocIndex:8},{value:"\u53C2\u6570",paraId:4,tocIndex:9},{value:"\u8BF4\u660E",paraId:4,tocIndex:9},{value:"\u7C7B\u578B",paraId:4,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:9},{value:"paramName",paraId:4,tocIndex:9},{value:"URL \u67E5\u8BE2\u53C2\u6570\u540D\u79F0",paraId:4,tocIndex:9},{value:"string",paraId:4,tocIndex:9},{value:"'tab'",paraId:4,tocIndex:9},{value:"replace",paraId:4,tocIndex:9},{value:"\u662F\u5426\u66FF\u6362\u5386\u53F2\u8BB0\u5F55\u800C\u4E0D\u662F\u63A8\u9001\u65B0\u8BB0\u5F55",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"false",paraId:4,tocIndex:9},{value:"clearOnUnmount",paraId:4,tocIndex:9},{value:"\u662F\u5426\u5728\u7EC4\u4EF6\u5378\u8F7D\u65F6\u6E05\u7406 URL \u53C2\u6570",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"false",paraId:4,tocIndex:9},{value:"\u53C2\u6570",paraId:5,tocIndex:10},{value:"\u8BF4\u660E",paraId:5,tocIndex:10},{value:"\u7C7B\u578B",paraId:5,tocIndex:10},{value:"activeKey",paraId:5,tocIndex:10},{value:"\u5F53\u524D\u6FC0\u6D3B\u7684 tab key",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"setActiveKey",paraId:5,tocIndex:10},{value:"\u8BBE\u7F6E\u6FC0\u6D3B\u7684 tab key",paraId:5,tocIndex:10},{value:"(key: string) => void",paraId:5,tocIndex:10},{value:"resetToDefault",paraId:5,tocIndex:10},{value:"\u91CD\u7F6E\u5230\u9ED8\u8BA4 tab key",paraId:5,tocIndex:10},{value:"() => void",paraId:5,tocIndex:10}]},84902:function(f,a,e){e.r(a),e.d(a,{texts:function(){return u}});const u=[]},85635:function(f,a){a.Z=`import { Space, Tabs, Tag, Typography } from 'antd';
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
`},38304:function(f,a){a.Z=`import { Button, Space, Tabs, Tag, Typography } from 'antd';
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
`},15568:function(f,a){a.Z=`import { Space, Tabs, Tag, Typography } from 'antd';
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
