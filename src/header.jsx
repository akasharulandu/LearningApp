import React, { useState } from 'react';
import { Menu, Switch, Dropdown, Avatar, Space } from 'antd';
import { Layout } from 'antd';
import { DownOutlined, LoginOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import SearchBar from './searchbar';


const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';

const { Header } = Layout;

function AppHeader() {
  const [menuTheme, setMenuTheme] = useState('light');
  const [current, setCurrent] = useState('1');

  const changeTheme = (checked) => {
    const newTheme = checked ? 'dark' : 'light';
    setMenuTheme(newTheme);
    
    // Apply dark mode to the entire page (Optional)
    // will cchnage this
    document.body.style.backgroundColor = newTheme === 'dark' ? '#1a1a1a' : '#ffffff';
    document.body.style.color = newTheme === 'dark' ? '#ffffff' : '#000000';
  };

  // Handle menu selection
  const handleMenuClick = (e) => {
    setCurrent(e.key);
  };

  // Profile dropdown items
  const items = [
    { key: '1', label: 'Profile', icon: <UserOutlined /> },
    { key: '2', label: 'Logout', icon: <LoginOutlined /> },
  ];

  // Handle dropdown selection
  const handleDropdownClick = ({ key }) => {
    console.log("Selected option:", key);
    // Add logic to handle actions based on selected key
  };

  return (
    <Header
      style={{
        padding: 10,
        background: menuTheme === 'dark' ? '#001529' : '#ffffff',
        color: menuTheme === 'dark' ? '#ffffff' : '#000000',
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <SearchBar/>
      {/* Dark Mode Toggle */}
      <Switch
        checked={menuTheme === 'dark'}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />

      {/* Navigation Menu */}
      <Menu
        onClick={handleMenuClick}  // Corrected function name
        selectedKeys={[current]}
        theme={menuTheme}
        mode="horizontal"
        style={{
          flex: 1,
          minWidth: "200px",
          borderBottom:'none',
        }}

        // items={[
        //   { key: 'home', label: 'Home' },
        //   { key: 'about', label: 'About' },
        //   { key: 'contact', label: 'Contact' }
        // ]}
      />

      {/* Profile Dropdown */}
      <Dropdown overlay ={<Menu items={items} onClick={handleDropdownClick} />} trigger={['click']}>
        <span onClick={(e) => e.preventDefault()} style={{ cursor: "pointer", color: menuTheme === 'dark' ? '#ffffff' : '#000000',marginRight:'20px' }}>
          <Space>
          <Avatar icon={<UserOutlined />} />
          </Space>
        </span>
      </Dropdown>
    </Header>
  );
}

export default AppHeader;
