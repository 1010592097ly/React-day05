import React, { Component } from 'react'
export default class App extends Component {
  state = {
    list:[]
  }
  componentDidMount(){
    this.addMore()
    setInterval(()=>{
      this.add()
    },1000)
  }

  getSnapshotBeforeUpdate(prevPros,prevState){
    console.log("getSnapshotBeforeUpdate...")
    return this.container.scrollHeight //滚动高度
  }

  componentDidUpdate(prevPros,prevState,snapshot){
    console.log("componentDidUpdate",snapshot)
    let dis = this.container.scrollHeight - snapshot //新的高度-旧的高度
    this.container.scrollTop = this.container.scrollTop + dis
  }

  addMore(){
    for(var i = 0; i <= 10; i++){
      this.add()
    }
  }
  add(){
    // this.setState({
    // list:[this.state.list.length,...this.state.list]
    // })
    this.setState((prevState) => {
      return{
        list:[prevState.list.length,...prevState.list]
      }
    })
  }
  render() {
    return (
      <div ref={el => this.container = el} style={{height:"300px",overflow:"auto",border:"1px solid #000"}}>
        {
          this.state.list.map((item,index)=>{
          return <p key={index}>{item}</p>
          })
        }
      </div>
    )
  }
}
