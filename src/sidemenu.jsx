import React, { useState } from "react";
import {
    CustomerServiceOutlined,
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, Links } from "react-router-dom";
import { Layout, Menu } from "antd";


const { Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
    
  };
}

const items = [
  getItem(<Link to="/dashboard">Dashboard</Link>, "1", <PieChartOutlined />),
  getItem(<Link to="/courses">Courses</Link>, "2", <DesktopOutlined />),
  getItem(<Link to="/assignments">Assignments</Link>, "5", <FileOutlined />),
  getItem(<Link to="/profile">Profile</Link>, "sub1", <UserOutlined />, [
    getItem("Admin", "3"),
    getItem("General User", "4"),
  ]),
  getItem(<Link to="/setting">Settings</Link>, "6", <SettingOutlined />),
getItem(<Link to="/support">Support</Link>, "7", <CustomerServiceOutlined />),

];

const SideMenu = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="demo-logo-vertical" />
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline" items={items} />
    </Sider>
  );
};

export default SideMenu;
