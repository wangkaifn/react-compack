import { Space, Tabs, Tag, Typography } from 'antd';
import { useTabActive } from 'react-compack';
const { Title, Text } = Typography;

export default function AdvancedExample() {
  const { activeKey, setActiveKey } = useTabActive('config', {
    paramName: 'setting',
    replace: true,
  });

  const items = [
    {
      key: 'config',
      label: '基础配置',
      children: (
        <div>
          <Title level={4}>基础配置</Title>
          <Text>
            这个示例使用了自定义参数名 setting 和 replaceState 模式。 注意 URL
            中的参数名变化。
          </Text>
        </div>
      ),
    },
    {
      key: 'advanced',
      label: '高级配置',
      children: (
        <div>
          <Title level={4}>高级配置</Title>
          <Text>
            高级配置选项，使用 replaceState 不会在浏览器历史中创建新条目。
          </Text>
        </div>
      ),
    },
    {
      key: 'security',
      label: '安全设置',
      children: (
        <div>
          <Title level={4}>安全设置</Title>
          <Text>配置安全相关的选项和权限设置。</Text>
        </div>
      ),
    },
  ];

  return (
    <>
      <Space style={{ marginBottom: 16 }}>
        <Text type="secondary">
          参数名: <Tag>setting</Tag>
        </Text>
        <Text type="secondary">
          当前激活: <Tag color="green">{activeKey}</Tag>
        </Text>
      </Space>
      <Tabs activeKey={activeKey} onChange={setActiveKey} items={items} />
    </>
  );
}
