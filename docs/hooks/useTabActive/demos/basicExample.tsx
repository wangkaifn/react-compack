import { Button, Space, Tabs, Tag, Typography } from 'antd';
import { useTabActive } from 'react-compack';
const { Title, Text } = Typography;

export default function BasicExample() {
  const { activeKey, setActiveKey, resetToDefault } = useTabActive('home');

  const items = [
    {
      key: 'home',
      label: '首页',
      children: (
        <div>
          <Title level={4}>欢迎来到首页</Title>
          <Text>
            这是首页的内容。当你切换到其他标签页时，URL 会自动更新，
            页面刷新后会保持当前选中的标签页状态。
          </Text>
        </div>
      ),
    },
    {
      key: 'products',
      label: '产品',
      children: (
        <div>
          <Title level={4}>产品列表</Title>
          <Text>这里展示所有产品信息。注意观察 URL 中的 tab 参数变化。</Text>
        </div>
      ),
    },
    {
      key: 'about',
      label: '关于我们',
      children: (
        <div>
          <Title level={4}>关于我们</Title>
          <Text>
            了解更多关于我们公司的信息。试试刷新页面，标签页状态会保持不变。
          </Text>
        </div>
      ),
    },
    {
      key: 'contact',
      label: '联系我们',
      children: (
        <div>
          <Title level={4}>联系方式</Title>
          <Text>如有任何问题，请通过以下方式联系我们。</Text>
        </div>
      ),
    },
  ];

  return (
    <>
      <Space style={{ marginBottom: 16 }}>
        <Button onClick={resetToDefault}>重置到默认标签页</Button>
        <Text type="secondary">
          当前激活: <Tag color="blue">{activeKey}</Tag>
        </Text>
      </Space>
      <Tabs activeKey={activeKey} onChange={setActiveKey} items={items} />
    </>
  );
}
