# react-compack

[![npm version](https://img.shields.io/npm/v/react-compack.svg)](https://www.npmjs.com/package/react-compack)
[![npm downloads](https://img.shields.io/npm/dm/react-compack.svg)](https://www.npmjs.com/package/react-compack)

一个基于 React 的 Hooks 和组件工具库，提供实用的自定义 Hook 和可复用组件。

## ✨ 特性

- 📦 **模块化**: 按需导入，支持 tree shaking
- 🔧 **实用工具**: 提供日常开发中常用的 React Hooks
- 🎨 **现代化**: 使用最新的 React 特性和最佳实践

## 📦 包含内容

### Hooks

- `useTabActive` - 管理 Tab 组件激活状态并与 URL 同步

更多 Hook 和组件正在开发中...

## 🚀 安装

使用 npm 安装：

```bash
npm install react-compack
```

使用 yarn 安装：

```bash
yarn add react-compack
```

使用 pnpm 安装：

```bash
pnpm add react-compack
```

## 📖 使用

例如`useTabActive` 是一个用于管理 Tab 组件激活状态的 Hook，它能够将状态同步到 URL 查询参数中，支持页面刷新后保持 Tab 的激活状态。

#### 基本用法

```tsx
import { useTabActive } from 'react-compack';
import { Tabs, TabPane, Button } from 'antd';

function MyTabs() {
  const { activeKey, setActiveKey, resetToDefault } = useTabActive('tab1');

  return (
    <div>
      <Tabs activeKey={activeKey} onChange={setActiveKey}>
        <TabPane tab="Tab 1" key="tab1">
          Content 1
        </TabPane>
        <TabPane tab="Tab 2" key="tab2">
          Content 2
        </TabPane>
        <TabPane tab="Tab 3" key="tab3">
          Content 3
        </TabPane>
      </Tabs>
      <Button onClick={resetToDefault}>重置到默认</Button>
    </div>
  );
}
```

### 项目结构

```
src/
├── hooks/           # React Hooks
│   ├── index.ts     # Hooks 入口文件
│   └── useTabActive/ # useTabActive Hook
│       ├── index.ts # 主要实现
│       └── types.ts # 类型定义
└── index.ts         # 主入口文件
```
