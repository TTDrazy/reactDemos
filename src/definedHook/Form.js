import React from "react";
import useCheckPassword from "./useCheckPassword";

function Form() {
    const [isValid, handlePasswordChange] = useCheckPassword();
    return (
        <div>
            <lable>密码：</lable>
            <input onChange={e => handlePasswordChange(e)} />
            {isValid ? (
                <p>恭喜，您输入的密码有效！</p>
            ) : (
                <p>
                    错误，您输入的密码无效！
                    <p>密码必须由6-16个英文字母和数字的字符串组成！</p>
                </p>
            )}
        </div>
    );
}

export default Form;
