import React from 'react'
import { Button } from 'antd';

const MyComponments ={
    Button : (props)=>{
        return <Button type={props.type}>{props.text}</Button>
    }
}
export default MyComponments;
