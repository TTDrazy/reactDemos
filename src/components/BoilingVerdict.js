import React from 'react';
function BoilingVerdict(props){
    if(props.celsius >= 100){
        return <p>水烧开了！</p>
    }else{
        return <p>水还没烧开呢！</p>
    }
}
export default BoilingVerdict;