import { CopyOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Input, Space, message } from 'antd';
import React, { useState } from 'react';
import { useCopyToClipboard } from 'react-compack';

const CallbackExample: React.FC = () => {
  const [customText, setCustomText] = useState('自定义文本内容');

  const { copyToClipboard } = useCopyToClipboard({
    onSuccess: () => {
      message.success(`复制成功! 内容: ${customText}`);
    },
    onError: (error) => {
      message.error(`复制失败: ${customText} ${error.message}`);
    },
  });

  const handleCopyWithCustomText = () => {
    if (!customText.trim()) {
      message.warning('请输入要复制的文本');
      return;
    }
    copyToClipboard(customText);
  };

  return (
    <Space direction="vertical">
      <Input
        placeholder="请输入要复制的文本"
        value={customText}
        onChange={(e) => setCustomText(e.target.value)}
        prefix={<EditOutlined />}
      />

      <Button
        type="primary"
        icon={<CopyOutlined />}
        onClick={handleCopyWithCustomText}
      >
        复制文本
      </Button>

      <div style={{ fontSize: '12px', color: '#666' }}>
        提示：在控制台可以查看调试信息
      </div>
    </Space>
  );
};

export default CallbackExample;
