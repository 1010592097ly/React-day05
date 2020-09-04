import React, { Component } from 'react'
import "swiper/css/swiper.min.css"
import axios from "axios"
import Swiper from 'swiper'
export default class SwiperDemo1 extends Component {
    state = {
        list:[]
    }
    componentDidMount(){
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
    componentDidUpdate(){
        if(!this.swiper){
            this.swiper = new Swiper(".swiper-container",{
                loop:true
            })
        }
    }
    render() {
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {
                        this.state.list.map(item => {
                            return <div className="swiper-slide" key={item.filmId}>
                                <img src={item.poster} alt=""/>
                            </div>                        
                        })
                    }
                </div>
            </div>
        )
    }
}
