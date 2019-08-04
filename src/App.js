import React, { Component } from "react";
import "./App.css";
import Index from "./pages/Index";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import Logo from "./logo.js";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        };
    }
    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    render() {
        return (
            <Layout
                id={"components-layout-demo-side"}
                style={{ minHeight: "100vh" }}
            >
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <div className="logo">
                        <Logo.title className="logo-img" />
                        <span className="logo-text">React demos</span>
                    </div>
                    <Menu
                        theme="dark"
                        defaultSelectedKeys={["1"]}
                        mode="inline"
                    >
                        <Menu.Item key="1">
                            <Icon type="pie-chart" />
                            <span>Option 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="desktop" />
                            <span>Option 2</span>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <Icon type="user" />
                                    <span>User</span>
                                </span>
                            }
                        >
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                                <span>
                                    <Icon type="team" />
                                    <span>Team</span>
                                </span>
                            }
                        >
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9">
                            <Icon type="file" />
                            <span>File</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ paddingLeft: "1%" }}>
                    <Layout>
                        <Header
                            style={{
                                position: "fixed",
                                zIndex: 1,
                                width: "100%"
                            }}
                        >
                            <Menu
                                theme="light"
                                mode="horizontal"
                                defaultSelectedKeys={["2"]}
                                style={{ lineHeight: "64px" }}
                            >
                                <Menu.Item key="1">nav 1</Menu.Item>
                                <Menu.Item key="2">nav 2</Menu.Item>
                                <Menu.Item key="3">nav 3</Menu.Item>
                            </Menu>
                        </Header>
                    </Layout>
                    <Content>
                        <Breadcrumb style={{ margin: "16px 0" }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div
                            style={{
                                padding: 24,
                                background: "#fff",
                                minHeight: 360
                            }}
                        >
                            Bill is a cat.
                        </div>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>Drazy 2019</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default App;
