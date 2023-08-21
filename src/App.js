import React from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home'
import  Menu2 from './pages/Menu2'
import  Menu3 from './pages/Menu3'

const { Sider, Content } = Layout;
const { SubMenu } = Menu;


const SubMenu1 = () => {
  return <h1>子菜单项1的内容</h1>;
};

const SubMenu2 = () => {
  return <h1>子菜单项2的内容</h1>;
};

const AdminLayout = () => {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/">菜单项1</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<LaptopOutlined />}>
              <Link to="/menu2">菜单项2</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<LaptopOutlined />}>
              <Link to="/menu3">菜单项3</Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              icon={<NotificationOutlined />}
              title="子菜单"
            >
              <Menu.Item key="3">
                <Link to="/submenu1">子菜单项1</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/submenu2">子菜单项2</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '16px' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: '100vh' }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu2" element={<Menu2 />} />
                <Route path="/menu3" element={<Menu3 />} />
                <Route path="/submenu1" element={<SubMenu1 />} />
                <Route path="/submenu2" element={<SubMenu2 />} />
              </Routes>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default AdminLayout;
