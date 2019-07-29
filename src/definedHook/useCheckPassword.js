import {useState} from "react";
//自定义 Hook
//名称必须以 'use' 开头（为了让 React 在自定义 Hook 的内部中自动进行规则检查）
function useCheckPassword() {
    const [isValid,setValid] = useState(false);
    
    const handlePasswordChange = e =>{
        const value = e.target.value;
        let passwordReg = /^[A-Za-z]+[0-9]+[A-Za-z0-9]*|[0-9]+[A-Za-z]+[A-Za-z0-9]*$/g;
        if(!passwordReg.test(value)){
            setValid(false);
        }else{
            setValid(true);
        }
    }
    
    return [isValid,handlePasswordChange];
}
export default useCheckPassword;
