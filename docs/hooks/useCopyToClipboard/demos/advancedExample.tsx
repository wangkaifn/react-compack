import { CheckOutlined, CopyOutlined } from '@ant-design/icons';
import { Button, Space, message } from 'antd';
import React from 'react';
import { useCopyToClipboard } from 'react-compack';

const AdvancedExample: React.FC = () => {
  const { state, copyToClipboard, reset } = useCopyToClipboard();

  const copyObject = () => {
    const data = { name: 'John', age: 30, city: 'New York' };
    copyToClipboard(JSON.stringify(data, null, 2));
    message.success('对象已复制到剪贴板');
  };

  const copyArray = () => {
    const data = ['apple', 'banana', 'orange'];
    copyToClipboard(data.join(', '));
    message.success('数组已复制到剪贴板');
  };

  const copyText = () => {
    copyToClipboard('这是一段普通文本');
    message.success('文本已复制到剪贴板');
  };

  return (
    <Space direction="vertical">
      <Button
        type="primary"
        icon={state.isCopied ? <CheckOutlined /> : <CopyOutlined />}
        onClick={copyObject}
        onMouseLeave={() => setTimeout(reset, 2000)}
      >
        {state.isCopied ? '已复制' : '复制对象'}
      </Button>

      <Button
        type="default"
        icon={state.isCopied ? <CheckOutlined /> : <CopyOutlined />}
        onClick={copyArray}
        onMouseLeave={() => setTimeout(reset, 2000)}
      >
        {state.isCopied ? '已复制' : '复制数组'}
      </Button>

      <Button
        type="dashed"
        icon={state.isCopied ? <CheckOutlined /> : <CopyOutlined />}
        onClick={copyText}
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

export default AdvancedExample;
