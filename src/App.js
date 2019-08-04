import React, { Component } from "react";
import "./App.css";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import Logo from "./Logo.js";
import { Link } from "react-router-dom";

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
                    theme="light"
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <div className="logo">
                        <Logo.title className="logo-img" />
                        <span className="logo-text">React demos</span>
                    </div>
                    <Menu
                        theme="light"
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
                                <Link to="/Hook">
                                    <span>
                                        <Icon type="user" />
                                        <span>Hook</span>
                                    </span>
                                </Link>
                            }
                        >
                            <Menu.Item key="3"><Link to="/Hook/todoList">todoList</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/Hook/changeTheme">changeTheme</Link></Menu.Item>
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
                <Layout>
                    <Header
                        style={{
                            position: "fixed",
                            zIndex: 1,
                            width: "100%",
                            backgroundColor: "#e6f7ff"
                        }}
                    >
                        <Menu
                            theme="light"
                            mode="horizontal"
                            style={{ lineHeight: "63.5px" }}
                        >
                            <Menu.Item key="1">
                                <Logo.search />
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Logo.document />
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Logo.message />
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Logo.account />
                            </Menu.Item>
                            <Menu.Item key="5">
                                <Logo.theme />
                            </Menu.Item>
                        </Menu>
                    </Header>
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
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>Drazy 2019</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default App;
