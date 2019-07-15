import React, { Component } from 'react';

class Demo extends Component {
    render() {
        const user ={
            name:'Drazy',
            sex:'女',
            age:19,
            loacl:'陕西西安'
        }
        return (
            <div>
               <h3 type="primary">Hello,dear {user.name}:</h3> 
               <table  style={{border:'1px solid #000'}}>
                   <thead>
                       <tr>
                           <td colSpan='4'>基本信息</td>
                       </tr>
                   </thead>
                   <tbody>
                       <tr style={{border:'1px solid #000'}}>
                           <td>姓名</td>
                           <td>性别</td>
                           <td>年龄</td>
                           <td>住址</td>
                       </tr>
                       <tr style={{border:'1px solid #000'}}>
                           <td>{user.name}</td>
                           <td>{user.sex}</td>
                           <td>{user.age}</td>
                           <td>{user.loacl}</td>
                       </tr>
                   </tbody>
               </table>
            </div>
        );
    }
}

export default Demo;