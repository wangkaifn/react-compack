import { Space, Tabs, Tag, Typography } from 'antd';
import { useTabActive } from 'react-compack';
const { Title, Text } = Typography;

export default function MultiLevelExample() {
  const { activeKey: mainTab, setActiveKey: setMainTab } = useTabActive(
    'dashboard',
    {
      paramName: 'main',
    },
  );

  const { activeKey: subTab, setActiveKey: setSubTab } = useTabActive(
    'overview',
    {
      paramName: 'sub',
    },
  );

  const subItems = [
    {
      key: 'overview',
      label: '概览',
      children: <div style={{ padding: '16px' }}>数据概览内容</div>,
    },
    {
      key: 'charts',
      label: '图表',
      children: <div style={{ padding: '16px' }}>图表展示内容</div>,
    },
    {
      key: 'reports',
      label: '报告',
      children: <div style={{ padding: '16px' }}>报告详情内容</div>,
    },
  ];

  const mainItems = [
    {
      key: 'dashboard',
      label: '仪表盘',
      children: (
        <div>
          <Text>
            这是一个多级标签页示例，同时管理主标签页和子标签页的状态。
          </Text>
          <Tabs
            activeKey={subTab}
            onChange={setSubTab}
            items={subItems}
            size="small"
          />
        </div>
      ),
    },
    {
      key: 'users',
      label: '用户管理',
      children: (
        <div>
          <Title level={4}>用户管理</Title>
          <Text>管理系统用户和权限设置。</Text>
        </div>
      ),
    },
    {
      key: 'settings',
      label: '系统设置',
      children: (
        <div>
          <Title level={4}>系统设置</Title>
          <Text>配置系统参数和选项。</Text>
        </div>
      ),
    },
  ];

  return (
    <>
      <Space style={{ marginBottom: 16 }}>
        <Text type="secondary">
          主标签页: <Tag color="blue">{mainTab}</Tag>
        </Text>
        <Text type="secondary">
          子标签页: <Tag color="orange">{subTab}</Tag>
        </Text>
      </Space>
      <Tabs activeKey={mainTab} onChange={setMainTab} items={mainItems} />
    </>
  );
}
