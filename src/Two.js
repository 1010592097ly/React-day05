import React, { Component,PureComponent } from 'react'
/* 
    PureComponent 纯组件  内部不能再写shouldComponentUpdate
    纯组件内部进行了浅层比较
    基本类型：根据外部传入的数据，新的数据与旧的数据是否一致，如果一致render就不会执行
    引用类型：根据外部传入数据，新的数据和旧的数据的地址是否一致，如果一致，render也不会执行
*/
export default class One extends PureComponent {
    state = {
        arr:[1,2,3],
        isShow:false
    }
    // shouldComponentUpdate(props,state){ 
    //     if(this.state.isShow !== state.isShow){
    //         return true;
    //     }else{
    //         return false
    //     }
    // }
    render() {
        console.log("render")
        // let {item,handleChange} = this.props
        return (
        // <li>
        //     <input 
        //     type="checkbox" 
        //     checked={item.flag} 
        //     onChange={handleChange.bind(this,item.id)}
        //     />
        //     {item.text}</li>
        <li>
            <button onClick = {() => {
                this.setState({
                    isShow:true //基本数据类型
                })
            }}>切换show</button>
            {this.state.isShow.toString()}
            <button onClick={() => {
                // this.state.arr.push(4)
                this.setState({
                    // arr:this.state.arr  //没有修改地址，使用纯组件不会更新视图
                    arr:[...this.state.arr,4] //修改了地址
                })
            }}>点击</button>
            {
                this.state.arr.map(item => item)
            }
        </li>
        )
    }
}
