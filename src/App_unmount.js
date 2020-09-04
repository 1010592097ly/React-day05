import React, { Component } from 'react'
import ReactDOM from "react-dom"
 class App extends Component {
    state={
      a:1
    }
    /*  */
    componentWillUnmount(){
      console.log("组件被卸载了")
      clearInterval(this.timer)
    }
    componentDidMount(){
        this.timer = setInterval(()=>{
          console.log("timer...")
          this.setState({
            a:this.state.a + 1
          })
        },2000)
    }
    render() {
      console.log(ReactDOM)
        return (
            <div>
              <button onClick={()=>{ReactDOM.unmountComponentAtNode(document.getElementById("root"))}}>卸载组件</button>
              APP---{this.state.a}
            </div>
        )
    }
}
export default App;
