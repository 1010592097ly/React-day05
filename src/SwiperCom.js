import React, { Component } from 'react'
import "swiper/css/swiper.min.css"
import Swiper from 'swiper'
export default class SwiperCom extends Component {
    componentDidMount(){
        console.log("子组件")
        new Swiper ("."+this.props.cName,{
            loop:true
        })
    }
    render() {
        return (
            <div className={"swiper-container "+this.props.cName}>
                <div className="swiper-wrapper">
                    {
                        this.props.list.map(item => {
                            return <div
                                className="swiper-slide"
                                key={item.filmId}
                            >
                                <img src = {item.poster}/>
                            </div>
                        })
                    }
                </div>
                
            </div>
        )
    }
}
