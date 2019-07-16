import React, { Component,forwardRef } from 'react'

function HOCRefs (ChartComponent){
    class HOCComponent extends Component{
        render(){
            const {forwardRef,...other} = this.props;
            //注意：组件传递过程中不可以直接用ref属性，因为其属于特殊的props,只有在基础DOM的地方才可以直接使用ref属性
            return <ChartComponent innerRef ={forwardRef} {...other}/>
        }
    }
        return forwardRef((props,ref)=>{
            return <HOCComponent {...props} forwardRef = {ref}></HOCComponent>
        })
    
}
export default HOCRefs;