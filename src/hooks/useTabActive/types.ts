// useTabActive hook 返回值类型
export interface UseTabActiveReturn {
  /** 当前激活的 tab key */
  activeKey: string;
  /** 设置激活的 tab key */
  setActiveKey: (key: string) => void;
  /** 重置到默认 tab key */
  resetToDefault: () => void;
}

// useTabActive hook 配置选项
export interface UseTabActiveOptions {
  /** URL 查询参数名称，默认为 'tab' */
  paramName?: string;
  /** 是否替换历史记录而不是推送新记录，默认为 false */
  replace?: boolean;
  /** 是否在组件卸载时清理 URL 参数，默认为 false */
  clearOnUnmount?: boolean;
}