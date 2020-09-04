import React, { Component } from 'react'

export default class One extends Component {
    /* 询问组件是否进行更新操作 默认不写是true就会执行组件的更新操作 
        可以用来提升代码性能
        内部通过this.props.flag获取的是之前的flag参数，如果想要获取最新的就从参数里获取
    */
    shouldComponentUpdate(props,state){
        // console.log(props.flag,this.props.flag) //第一个参数是更新之后的，后面的是之前的
        // return false
        if(props.flag !== this.props.flag){
            //如果最新的状态不等于之后的 就更新状态
            return true
        }else{
            //如果前后状态相同就不更新，那么就不走render
            return false
        }

    }
    render() {
        console.log("render")
        let {item,handleChange} = this.props
        return (<li>
            <input 
            type="checkbox" 
            checked={item.flag} 
            onChange={handleChange.bind(this,item.id)}
            />
            {item.text}</li>
        )
    }
}
