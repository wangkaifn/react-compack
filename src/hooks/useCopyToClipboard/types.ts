export interface CopyToClipboardState {
  /**
   * 复制值
   */
  value?: any;
  /**
   * 无需用户交互
   */
  noUserInteraction: boolean;
  /**
   * 复制错误
   */
  error?: Error;
  /**
   * 复制成功
   */
  isCopied: boolean;
}

export interface UseCopyToClipboardOptions {
  /**
   * 复制成功后的回调函数
   */
  onSuccess?: () => void;
  /**
   * 复制失败后的回调函数
   */
  onError?: (error: Error) => void;
  /**
   * 复制选项
   */
  options?: {
    /**
     * 开启调试模式
     */
    debug?: boolean;
    /**
     * 自定义复制消息
     */
    message?: string;
    /**
     * 自定义复制格式
     */
    format?: string;
    /**
     * 自定义复制回调函数
     */
    onCopy?: (clipboardData: object) => void;
  };
}

export interface UseCopyToClipboardReturn {
  /**
   * 当前复制状态
   */
  state: CopyToClipboardState;
  /**
   * 复制值到剪贴板，支持字符串、数字、对象和数组
   */
  copyToClipboard: (value: string | number | object | any[]) => void;

  /**
   * 重置复制状态
   */
  reset: () => void;
}
