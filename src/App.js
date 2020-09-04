import React, { Component } from 'react'
// import One from "./One"
import Two from "./Two"
export default class App extends Component {
  state={
    list:[
      {id:1,text:"aa",flag:true},
      {id:2,text:"bb",flag:false},
      {id:3,text:"cc",flag:true}
    ]
  }
  handleChange = (id) => {
    let list = this.state.list.map(item => {
      if(item.id === id) {
        item.flag = !item.flag
      }
      return item
    })
    this.setState({
      list
    })
  }
  render() {
    let {list} = this.state
    return (
        <ul>
          {
           list.map(item =>{
            //  return <One key={item.id} flag={item.flag} item={item} handleChange ={this.handleChange}/>
             return <Two key={item.id} flag={item.flag} item={item} handleChange ={this.handleChange}/>
           })
          }
        </ul>
    )
  }
}
