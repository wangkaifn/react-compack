import { useState, useEffect, useCallback, useRef } from "react";
import type { UseTabActiveReturn, UseTabActiveOptions } from "./types";

/**
 * useTabActive Hook
 *
 * 用于管理 Tab 组件的激活状态，并将状态同步到 URL 查询参数中
 * 页面刷新后可以保持 Tab 的激活状态
 *
 * @param defaultKey 默认激活的 tab key
 * @param options 配置选项
 * @returns UseTabActiveReturn
 *
 * @example
 * ```tsx
 * const { activeKey, setActiveKey, resetToDefault } = useTabActive('tab1', {
 *   paramName: 'activeTab',
 *   replace: false,
 *   clearOnUnmount: true
 * });
 *
 * return (
 *   <Tabs activeKey={activeKey} onChange={setActiveKey}>
 *     <TabPane tab="Tab 1" key="tab1">Content 1</TabPane>
 *     <TabPane tab="Tab 2" key="tab2">Content 2</TabPane>
 *   </Tabs>
 * );
 * ```
 */
export function useTabActive(
  defaultKey: string,
  options: UseTabActiveOptions = {}
): UseTabActiveReturn {
  const {
    paramName = "tab",
    replace = false,
    clearOnUnmount = false,
  } = options;

  // 用于跟踪是否是初始化阶段
  const isInitializedRef = useRef(false);
  const defaultKeyRef = useRef(defaultKey);

  // 从 URL 获取初始值
  const getInitialKey = useCallback((): string => {
    if (typeof window === "undefined") {
      return defaultKey;
    }

    try {
      const urlParams = new URLSearchParams(window.location.search);
      const urlKey = urlParams.get(paramName);
      return urlKey || defaultKey;
    } catch {
      return defaultKey;
    }
  }, [defaultKey, paramName]);

  const [activeKey, setActiveKeyState] = useState<string>(getInitialKey);

  // 更新 URL 参数
  const updateURL = useCallback(
    (key: string) => {
      if (typeof window === "undefined") {
        return;
      }

      try {
        const url = new URL(window.location.href);

        if (key === defaultKeyRef.current) {
          // 如果是默认值，移除参数
          url.searchParams.delete(paramName);
        } else {
          // 设置新的参数值
          url.searchParams.set(paramName, key);
        }

        const newUrl = url.toString();

        // 只有当 URL 实际发生变化时才更新
        if (newUrl !== window.location.href) {
          if (replace) {
            window.history.replaceState(null, "", newUrl);
          } else {
            window.history.pushState(null, "", newUrl);
          }
        }
      } catch (error) {
        console.warn("Failed to update URL:", error);
      }
    },
    [paramName, replace]
  );

  // 设置激活的 tab key
  const setActiveKey = useCallback(
    (key: string) => {
      setActiveKeyState(key);
      updateURL(key);
    },
    [updateURL]
  );

  // 重置到默认 key
  const resetToDefault = useCallback(() => {
    setActiveKey(defaultKeyRef.current);
  }, [setActiveKey]);

  // 监听浏览器前进后退
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handlePopState = () => {
      const newKey = getInitialKey();
      setActiveKeyState(newKey);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [getInitialKey]);

  // 初始化时同步 URL（仅在客户端）
  useEffect(() => {
    if (!isInitializedRef.current && typeof window !== "undefined") {
      isInitializedRef.current = true;
      const initialKey = getInitialKey();

      // 如果 URL 中没有参数但当前不是默认值，则更新 URL
      if (initialKey !== defaultKey) {
        setActiveKeyState(initialKey);
      } else {
        // 确保 URL 和状态同步
        updateURL(initialKey);
      }
    }
  }, [defaultKey, getInitialKey, updateURL]);

  // 更新默认值引用
  useEffect(() => {
    defaultKeyRef.current = defaultKey;
  }, [defaultKey]);

  // 组件卸载时清理 URL 参数
  useEffect(() => {
    return () => {
      if (clearOnUnmount && typeof window !== "undefined") {
        try {
          const url = new URL(window.location.href);
          url.searchParams.delete(paramName);
          const newUrl = url.toString();

          if (newUrl !== window.location.href) {
            window.history.replaceState(null, "", newUrl);
          }
        } catch (error) {
          console.warn("Failed to clear URL parameter on unmount:", error);
        }
      }
    };
  }, [clearOnUnmount, paramName]);

  return {
    activeKey,
    setActiveKey,
    resetToDefault,
  };
}

export default useTabActive;
export type { UseTabActiveReturn, UseTabActiveOptions } from './types';