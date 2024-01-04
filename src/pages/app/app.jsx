import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import './app.less';
const { Content } = Layout;
const App = () => {
    return (
        <Layout className="mat-page-container mat-page-layout">
            <Content className="mat-page-layout-content">
                <Outlet />
            </Content>
        </Layout>
    );
}

export default App;