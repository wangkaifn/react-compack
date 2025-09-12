import copy from 'copy-to-clipboard';

import { useCallback, useState } from 'react';
import {
  CopyToClipboardState,
  UseCopyToClipboardOptions,
  UseCopyToClipboardReturn,
} from './types';
export const useCopyToClipboard = ({
  onSuccess,
  onError,
  options = {},
}: UseCopyToClipboardOptions = {}): UseCopyToClipboardReturn => {
  const [state, setState] = useState<CopyToClipboardState>({
    value: undefined,
    error: undefined,
    noUserInteraction: true,
    isCopied: false,
  });

  const copyToClipboard = useCallback(
    async (value: string | number | object | any[]) => {
      let error: Error | undefined;
      let noUserInteraction = true;
      try {
        if (typeof value === 'object' || Array.isArray(value)) {
          noUserInteraction = await copy(JSON.stringify(value), options);
        } else {
          noUserInteraction = await copy(String(value), options);
        }
        const newState = {
          value,
          error,
          noUserInteraction,
          isCopied: true,
        };
        setState(newState);
        onSuccess?.();
      } catch (error) {
        const newState = {
          value,
          error: error as Error,
          noUserInteraction: false,
          isCopied: false,
        };
        setState(newState);
        onError?.(error as Error);
      }
    },
    [],
  );

  const reset = useCallback(() => {
    const newState = {
      value: undefined,
      error: undefined,
      noUserInteraction: true,
      isCopied: false,
    };
    setState(newState);
  }, []);

  return { state, copyToClipboard, reset };
};

export default useCopyToClipboard;
