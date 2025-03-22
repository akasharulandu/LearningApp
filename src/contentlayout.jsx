import React from 'react'; 
import { Breadcrumb, Layout, theme } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Route, Routes } from 'react-router-dom';
import Courses from './courses';
import Dashboard from './dashboard';
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
          padding: 5,
          minHeight: 360,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        
       {/* Routing */}
       <Routes>
          <Route path="/" element={<>This is the dashboard page</>} />
          <Route path="/dashboard" element={<> <Dashboard/> </>} />
          <Route path="/courses" element={<> <Courses/> </>} />
          <Route path="/assignments" element={<>This is the assignments page</>} />
          <Route path="/profile" element={<>This is the profile page</>} />
          <Route path="/setting" element={<>This is the settings page</>} />
          <Route path="/support" element={<>This is the support page</>} />
        </Routes>
        {/* End Routing */}
      </div>
      

    </Content>
  );
}

export default MainContent;
