import { useState } from "react";
import { Layout, theme, Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import "./sidebar-nav.css";
import Logo from "./components/Logo.jsx";
import MenuList from "./components/MenuList.jsx";
import ToggleThemeButton from "./components/ToggleThemeButton.jsx";

const { Header, Sider } = Layout;
function Sidebar() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setcollapsed] = useState(false)

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    
      <Layout>
        <Sider collapsed={collapsed} collapsible trigger={null} theme={darkTheme ? "dark" : "light"} classname="sidebar">
          <Logo />
          <MenuList darkTheme={darkTheme}  />
          <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
        </Sider>
        <Layout>
            <Header style={{ padding: 0 ,background: colorBgContainer  }}>
                <Button type='text' className="toggle" onClick={() => setcollapsed(!collapsed)} icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}/>
            </Header>
        </Layout>
      </Layout>
  );
}

export default Sidebar;
