import { CheckOutlined, CopyOutlined } from '@ant-design/icons';
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
      message.error('⚠️ 请手动选择复制 - 浏览器需要用户交互才能完成复制操作');
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
        {state.isCopied ? '已复制' : '复制文本'}
      </Button>

      {state.error && (
        <div style={{ color: 'red', fontSize: '12px' }}>
          复制失败: {state.error.message}
        </div>
      )}
    </Space>
  );
};

export default BasicExample;
