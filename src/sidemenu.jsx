import React, { useState } from "react";
import {
    CustomerServiceOutlined,
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
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
  getItem("Dashboard", "1", <PieChartOutlined />),
  getItem("Courses", "2", <DesktopOutlined />),
  getItem("Assignments", "5", <FileOutlined />),
  getItem("Profile", "sub1", <UserOutlined />, [
    getItem("Admin", "3"),
    getItem("General User", "4"),
  ]),
  getItem("Settings", "6", <SettingOutlined />),
getItem("Support", "7", <CustomerServiceOutlined />),

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
