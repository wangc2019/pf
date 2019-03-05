import React, { Component } from 'react';
import Swiper from "swiper"
import "swiper/dist/css/swiper.css"
import {Apis} from 'seerjs-ws'
import { browserHistory } from "react-router";
// import {Link} from "react-router";


let format = "yyyy/MM/dd HH:mm:ss";
class Homeswiper extends Component {
    constructor(){
      super();
      this.state={
        isLoading2:false,
        arr2:null
      }
    }
    componentWillMount(){
      this.get_data();
    }
  componentDidMount(){
    let mySwiper = new Swiper('.swiper-container', {
      pagination:{
        el:".swiper-pagination"
      },
      autoplay:{

      }
    })
  }

    async get_data(){
      let rooms=[];
      let arr1=[];
      let arr2=[];
      let arr3=[];
                                                          // 1.4.3
      await Apis.instance().db_api().exec("get_houses",[['1.14.6']]).then(house=>{
        house.map(v=>{
          if(v.rooms){
            v.rooms.map(x=>{
              rooms.push(x)
            })
          }
        });
      });
      const arr = await Promise.all(rooms.map((v)=>{
        return Apis.instance().db_api().exec("get_seer_room", [v, 0, 0])
      }));

      arr.map(v=>{
        if(v.label[0]=='格斗'){
          arr1.push(v)
        }else{
          arr2.push(v)
        }
      });
      arr1.sort(function (a, b) {
        return a.running_option.total_shares<b.running_option.total_shares?1:-1;
      });
      arr2.sort(function (a, b) {
        return a.running_option.total_shares<b.running_option.total_shares?1:-1;
      });
      arr3.push(arr1[0]);
      arr3.push(arr1[1]);
      arr3.push(arr2[0]);
      this.setState({arr2:arr3},function() {
        this.setState({
          isLoading2: true
        })
      })
    }
  dateAddDays(dataStr,dayCount) {
    var strdate=dataStr; //日期字符串
    var a = strdate.replace(/T/g," ")
    var isdate = new Date(a.replace(/-/g,"/"));  //把日期字符串转换成日期格式
    isdate = new Date((isdate/1000+28800)*1000);  //日期加1天
    var pdate = isdate.getFullYear()+"/"+(isdate.getMonth()+1)+"/"+(isdate.getDate())+" "+(isdate.getHours()<10?("0"+isdate.getHours()):isdate.getHours())+":"+(isdate.getMinutes()<10?("0"+isdate.getMinutes()):isdate.getMinutes())+":"+(isdate.getSeconds()<10?("0"+isdate.getSeconds()):isdate.getSeconds());   //把日期格式转换成字符串
    return pdate;
  }
    guess(e){
      if(e.target.parentNode.getAttribute("data-id")){
        let id =e.target.parentNode.getAttribute("data-id");
        browserHistory.push("/guess?room_id="+id)
      }else if(e.target.getAttribute("data-id")){
        let id =e.target.getAttribute("data-id");
        browserHistory.push("/guess?room_id="+id)
      }
    }
    render() {

        return (
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {this.state.isLoading2?<div className="swiper-slide" data-id={this.state.arr2[0].id} onClick={this.guess.bind(this)}>
                <p>{this.state.arr2[0].description}</p>
                <span>截止时间 {this.dateAddDays(this.state.arr2[0].option.stop,0)}</span>
              </div>:<div className="swiper-slide"></div>}
              {this.state.isLoading2?<div className="swiper-slide" data-id={this.state.arr2[1].id} onClick={this.guess.bind(this)}>
                <p>{this.state.arr2[1].description}</p>
                <span>截止时间 {this.dateAddDays(this.state.arr2[1].option.stop,1)}</span>
              </div>:<div className="swiper-slide"></div>}
              {this.state.isLoading2?<div className="swiper-slide" data-id={this.state.arr2[2].id} onClick={this.guess.bind(this)}>
                <p>{this.state.arr2[2].description}</p>
                <span>截止时间 {this.dateAddDays(this.state.arr2[2].option.stop,1)}</span>
              </div>:<div className="swiper-slide"></div>}
            </div>
            <div className="swiper-pagination" id="swiper-pagination"></div>
          </div>
        );
    }
}
export default Homeswiper;
