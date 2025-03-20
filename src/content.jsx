import React from 'react'; 
import { Breadcrumb, Layout, theme } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
const { Content } = Layout;

function MainContent() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Content style={{ margin: '0 16px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}
    items={[
      {
        href: '',
        title: <HomeOutlined />,
      },
      {
        href: '',
        title: (
          <>
            <UserOutlined />
            <span>Dashboard</span>
          </>
        ),
      },
      {
       title: 'Application',
      },
    ]}
  />
      <div
        style={{
          padding: 24,
          minHeight: 360,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        This is the content layout.
      </div>
    </Content>
  );
}

export default MainContent;
