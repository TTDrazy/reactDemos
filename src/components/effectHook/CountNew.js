import React,{useState,useEffect} from 'react';
import { Button, Input } from "antd";

function CountNew() {
    const [count,setCount] = useState(0);
    
    useEffect(()=>{
        document.title = `你点击了${count}次`;
    },[])
    
    return (
        <div>
            <Button
                onClick={() => {
                    setCount(count - 1);
                }}
            >
                减少
            </Button>
            <Input value={count} style={{ width: "20%" }} />
            <Button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                增加
            </Button>
        </div>
    );
}

export default CountNew;