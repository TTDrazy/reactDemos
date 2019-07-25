import React, { Component } from "react";
import Axios from "axios";
import './style.css'

class AjaxDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: []
        };
    }
    //在 componentDidMount() 中利用 ajax 更新组件
    //这样可以让拿到 AJAX 返回的数据并通过 setState() 来更新组件
    componentDidMount() {
        Axios.get("http://5bd30967c8f9e400130cb86b.mockapi.io/user").then(
            res => {
                const userData = res.data;
                this.setState({
                    userInfo: userData
                });
            }
        );
    }

    render() {
        const { userInfo } = this.state;
        return (
            <div>
                {/* 建议引用 className + 导入css文件来设置样式，而不是利用行内样式设置 */}
                <table className='myTable'>
                    <thead>
                        <tr>
                            <td>用户id</td>
                            <td>用户姓名</td>
                            <td>联系电话</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            //我是 JSX 中的第一种注释
                            /* 
                                我是 JSX 中的第二种注释 
                                我可以多行注释 
                            */
                        userInfo.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.tel}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default AjaxDemo;
