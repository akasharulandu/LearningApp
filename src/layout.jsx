import React, { useState } from 'react';
import { Layout,theme } from 'antd';
import SideMenu from './sidemenu';
import AppHeader from './header';
import MainContent from './contentlayout'
const { Footer } = Layout;

const LayoutfromAnt = () => {
  
  return (
    <Layout style={{
        minHeight: '100vh',
      }}
 > 
     <SideMenu/>
      <Layout>
          <AppHeader/>
        <MainContent/>

        <Footer
          style={{
            textAlign: 'center',
          
          }}
        >
          Copyright ©{new Date().getFullYear()} - Code learning software Created by Jemiyon
        </Footer>
      </Layout>
    </Layout>
  );
};
export default LayoutfromAnt;