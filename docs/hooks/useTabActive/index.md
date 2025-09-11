---
title: useTabActive
group:
  title: Hooks
  order: 1
order: 2
demo:
  cols: 2
---

# useTabActive

一个用于管理标签页激活状态并与 URL 同步的 React Hook。它能够将当前激活的标签页 key 保存在 URL 查询参数中，确保页面刷新后状态不会丢失。

## 特性

- 🔄 **URL 同步**: 自动将激活的标签页 key 同步到 URL 查询参数
- 🔄 **状态持久化**: 页面刷新后自动恢复标签页状态
- 🎯 **浏览器导航支持**: 支持浏览器前进/后退按钮
- ⚙️ **高度可配置**: 支持自定义参数名、历史记录模式等
- 🧹 **自动清理**: 可选择在组件卸载时清理 URL 参数
- 📱 **TypeScript 支持**: 完整的类型定义

## 用法

<code src="./demos/basicExample.tsx">基础用法</code>
<code src="./demos/advancedExample.tsx">自定义参数名 + replaceState</code>
<code src="./demos/multiLevelExample.tsx">多级标签页示例</code>

## API

### useTabActive

```typescript
const { activeKey, setActiveKey, resetToDefault } = useTabActive(
  defaultKey: string,
  options?: UseTabActiveOptions
);
```

#### 参数

| 参数       | 说明               | 类型                  | 默认值 |
| ---------- | ------------------ | --------------------- | ------ |
| defaultKey | 默认激活的 tab key | `string`              | -      |
| options    | 配置选项           | `UseTabActiveOptions` | `{}`   |

#### UseTabActiveOptions

| 参数           | 说明                             | 类型      | 默认值  |
| -------------- | -------------------------------- | --------- | ------- |
| paramName      | URL 查询参数名称                 | `string`  | `'tab'` |
| replace        | 是否替换历史记录而不是推送新记录 | `boolean` | `false` |
| clearOnUnmount | 是否在组件卸载时清理 URL 参数    | `boolean` | `false` |

#### 返回值

| 参数           | 说明               | 类型                    |
| -------------- | ------------------ | ----------------------- |
| activeKey      | 当前激活的 tab key | `string`                |
| setActiveKey   | 设置激活的 tab key | `(key: string) => void` |
| resetToDefault | 重置到默认 tab key | `() => void`            |
