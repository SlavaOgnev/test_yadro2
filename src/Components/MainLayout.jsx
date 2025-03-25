import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header, Content } = Layout;

const MainLayout = ({ children }) => {
    return (
        <Layout style={{ minHeight: "362px" }}>
            <Header style={{backgroundColor: "#fff"}}>
                <Menu
                    mode="horizontal"
                    defaultSelectedKeys={["1"]}
                    items={[
                        {
                            key: "1",
                            label: <Link to="/">Список элементов</Link>,
                        },
                    ]}
                />
            </Header>
            <Content style={{ padding: "20px" }}>{children}</Content>
        </Layout>
    );
};

export default MainLayout;
