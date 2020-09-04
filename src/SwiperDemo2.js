import React, { Component } from 'react'
// import "swiper/css/swiper.min.css"
import axios from "axios"
// import Swiper from 'swiper'
import SwiperCom from "./SwiperCom"
export default class Swiper2 extends Component {
    state={
        list:[]
    }
    componentDidMount(){
        console.log("父组件")
        this.getDate()
    }
    getDate(){
        axios.get("https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=6850905",{
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1597637284519587963600898","bc":"310100"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res => {
            this.setState({
                list:res.data.data.films
            })
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.list.length>0 && <SwiperCom list={this.state.list} cName={"abc"}/>
                }
            </div>
        )
    }
}
