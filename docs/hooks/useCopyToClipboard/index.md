---
title: useCopyToClipboard
nav:
  title: Hooks
  order: 1
order: 2
demo:
  cols: 2
---

# useCopyToClipboard

一个用于复制文本到剪贴板的 React Hook。

## 安装

```bash
npm install react-compack
# 或
yarn add react-compack
# 或
pnpm add react-compack
```

## 用法

<code src="./demos/basicExample.tsx">基础用法</code>
<code src="./demos/advancedExample.tsx">对象和数组复制</code>
<code src="./demos/callbackExample.tsx">带回调函数的用法</code>

## API

### useCopyToClipboard

```typescript
const { state, copyToClipboard, reset } = useCopyToClipboard(options?: UseCopyToClipboardOptions);
```

#### 参数

| 参数    | 说明     | 类型                        | 默认值 |
| ------- | -------- | --------------------------- | ------ |
| options | 配置选项 | `UseCopyToClipboardOptions` | `{}`   |

#### UseCopyToClipboardOptions

| 参数      | 说明                 | 类型                     | 默认值 |
| --------- | -------------------- | ------------------------ | ------ |
| onSuccess | 复制成功时的回调函数 | `() => void`             | -      |
| onError   | 复制失败时的回调函数 | `(error: Error) => void` | -      |
| options   | 复制选项             | `object`                 | -      |

#### options 配置

| 参数    | 说明             | 类型                              | 默认值  |
| ------- | ---------------- | --------------------------------- | ------- |
| debug   | 是否启用调试模式 | `boolean`                         | `false` |
| message | 自定义复制消息   | `string`                          | -       |
| format  | 自定义复制格式   | `string`                          | -       |
| onCopy  | 自定义复制回调   | `(clipboardData: object) => void` | -       |

#### 返回值

| 参数            | 说明                 | 类型                                                   |
| --------------- | -------------------- | ------------------------------------------------------ |
| state           | 当前复制状态         | `CopyToClipboardState`                                 |
| copyToClipboard | 复制值到剪贴板的函数 | `(value: string \| number \| object \| any[]) => void` |
| reset           | 重置复制状态         | `() => void`                                           |

#### CopyToClipboardState 结构

| 参数              | 说明           | 类型      |
| ----------------- | -------------- | --------- |
| value             | 复制的值       | `any`     |
| noUserInteraction | 无需用户交互   | `boolean` |
| error             | 复制错误信息   | `Error`   |
| isCopied          | 是否已复制成功 | `boolean` |

## 类型定义

```typescript
interface CopyToClipboardState {
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
```
