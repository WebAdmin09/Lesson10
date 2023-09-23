import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Link, Outlet, useLocation } from 'react-router-dom';
import dashboardImg from '../../assets/dashboard.svg'
import style from './AdminLayout.module.css'
const { Header, Content, Footer, Sider } = Layout;
const App = () => {
    const location = useLocation()
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout className='admin__layout'>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="demo-logo-vertical" />
                <div className={style['layouticon']}>
                    <img className={style['img']} src={dashboardImg} alt="DashboardImg" />
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={[location.pathname]}
                    items={[
                        {
                            key: '/dashboard',
                            icon: <UserOutlined />,
                            label: <Link to='/dashboard'>Dashboard</Link>,
                        },
                        {
                            key: '/teachers',
                            icon: <VideoCameraOutlined />,
                            label: <Link to='/teachers'>Teachers</Link>,
                        },
                        {
                            key: '/students',
                            icon: <UploadOutlined />,
                            label: <Link to='/students'>Students</Link>,
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                />
                <Content
                    style={{
                        margin: '24px 16px 0',
                    }}
                >
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Admin Panel Created by ADMIN
                </Footer>
            </Layout>
        </Layout>
    );
};
export default App;