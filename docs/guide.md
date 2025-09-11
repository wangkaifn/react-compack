# 介绍

在 React 开发过程中提炼出的一些可复用的 hooks/组件/工具函数等

## 安装

```bash
npm install react-compack
# or
yarn add react-compack
# or
pnpm add react-compack
```

## 使用方式

### 完整导入

#### ESM 导入（推荐）

```javascript
import { useTabActive, formatDate } from 'react-compack';
```

#### CommonJS 导入

```javascript
const { useTabActive, formatDate } = require('react-compack');
```

### 分模块导入（按需加载）

#### 导入 Hooks

```javascript
// ESM
import { useTabActive } from 'react-compack/hooks';

// CommonJS
const { useTabActive } = require('react-compack/hooks');
```

#### 导入工具函数

```javascript
// ESM
import { formatDate, formatDateTime } from 'react-compack/utils';

// CommonJS
const { formatDate, formatDateTime } = require('react-compack/utils');
```

### UMD 浏览器引用

```html
<script src="https://unpkg.com/react-compack/dist/umd/react-compack.min.js"></script>
<script>
  const { useTabActive, formatDate } = window.ReactCompack;
</script>
```

<!--注意 提示 react react-dom 也需要引入 -->

:::warning{title=注意}
在使用 UMD 方式引入时，需要确保 React 和 ReactDOM 已引入，否则会报错。

```html
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

:::

## 功能特性

### 🎣 React Hooks

- **useTabActive** - Tab 激活状态管理，支持 URL 同步

### 🧩 React 组件

- 敬请期待更多组件...

### 🛠️ 工具函数

- 敬请期待更多工具函数...

## 快速开始

### 使用 useTabActive Hook

```jsx
import React from 'react';
import { Tabs } from 'antd';
import { useTabActive } from 'react-compack';

const { TabPane } = Tabs;

function TabApp() {
  const { activeKey, setActiveKey, resetToDefault } = useTabActive('tab1');

  return (
    <div>
      <Tabs activeKey={activeKey} onChange={setActiveKey}>
        <TabPane tab="Tab 1" key="tab1">
          <p>Tab 1 内容</p>
        </TabPane>
        <TabPane tab="Tab 2" key="tab2">
          <p>Tab 2 内容</p>
        </TabPane>
        <TabPane tab="Tab 3" key="tab3">
          <p>Tab 3 内容</p>
        </TabPane>
      </Tabs>
      <div style={{ marginTop: 16 }}>
        <button onClick={resetToDefault}>重置到默认</button>
      </div>
    </div>
  );
}

export default TabApp;
```

## TypeScript 支持

本库完全使用 TypeScript 编写，提供完整的类型定义：

```typescript
import { useTabActive, NetworkStatus, UseTabActiveReturn } from 'react-compack';

const { activeKey, setActiveKey, resetToDefault }: UseTabActiveReturn =
  useTabActive('tab1');
```
