import {Component} from "react";
import React from "react";
import "../../css/latest-guess.css"
import back from "../../img/back.png"
import star from "../../img/star.png"
import quan from "../../img/homepage/quan.png";
import ren from "../../img/homepage/ren.png";
import biao from "../../img/homepage/biao.png";
import { browserHistory, hashHistory, Link } from "react-router";
import {Apis} from 'seerjs-ws'


let mydate = new Date();
let format = "yyyy/MM/dd HH:mm:ss";
class Result extends Component {
  constructor(){
    super();
    this.state={
      arr:[]
    }
  }
  componentWillMount(){
    this.get_data()
  }
  dateAddDays(dataStr,dayCount) {
    var strdate=dataStr; //日期字符串
    var a = strdate.replace(/T/g," ")
    var isdate = new Date(a.replace(/-/g,"/"));  //把日期字符串转换成日期格式
    isdate = new Date((isdate/1000+28800)*1000);  //日期加1天
    var pdate = isdate.getFullYear()+"/"+(isdate.getMonth()+1)+"/"+(isdate.getDate())+" "+(isdate.getHours()<10?("0"+isdate.getHours()):isdate.getHours())+":"+(isdate.getMinutes()<10?("0"+isdate.getMinutes()):isdate.getMinutes())+":"+(isdate.getSeconds()<10?("0"+isdate.getSeconds()):isdate.getSeconds());   //把日期格式转换成字符串
    return pdate;
  }
  async get_data(){
    let arr1=[];
    let rooms=[];
    this.setState({isLoading: true});
    await Apis.instance().db_api().exec("get_houses",[['1.14.6']]).then(house=>{
      house[0].rooms.map(v=>{
        rooms.push(v)
      });
    });
    const arr = await Promise.all(rooms.map((v)=>{
      return Apis.instance().db_api().exec("get_seer_room", [v, 0, 0])
    }));
    arr.map(v=>{
      if(v.label[0]=='格斗'){
        arr1.push(v)
      }
    });
    arr1.sort(function (a, b) {
      return a.option.stop<b.option.stop?1:-1;
    });
    this.setState({isLoading: false, arr:arr1 });
  }
  guess(e){
    if(e.target.parentNode.parentNode.parentNode.getAttribute("data-id")){
      let id =e.target.parentNode.parentNode.parentNode.getAttribute("data-id");
      browserHistory.push("/guess?room_id="+id)
    }else if(e.target.parentNode.parentNode.getAttribute("data-id")){
      let id =e.target.parentNode.parentNode.getAttribute("data-id");
      browserHistory.push("/guess?room_id="+id)
    }
  }

  render() {
    return (
      <div className="latest-guess">
        <div className="header" onClick={this.goBack.bind(this)}><img src={back} alt=""/>格斗赛事</div>
        <div className="latest-content">
          {
            this.state.arr.map((i,k)=> {
              return(
                // &&this.dateAddDays(i.option.stop,1)>mydate.toLocaleDateString()+" "+mydate.getHours()+":"+mydate.getMinutes()+":"+mydate.getSeconds()
                i.room_type!=0?
                  <div className="guess-content" key={i.id} data-id={i.id} onClick={this.guess.bind(this)}>
                  <div>
                    <p><span>· {i.room_type==1?'奖池型预测 ':'交易型预测 '}</span> <span> 截止时间 {this.dateAddDays(i.option.stop,1)}</span></p>
                    <p>
                    {/*<img src={star} alt=""/>*/}
                    </p>
                  </div>
                  <div>
                    <p>{i.description}</p>
                    <div>
                      {i.running_option.selection_description.length<3?
                        i.running_option.selection_description.map((i,k)=> {
                          return(
                            <div style={{width:"45%",margin:"0 2.5%"}} key={k}>{i}</div>
                          )
                        }):i.running_option.selection_description.map((i,k)=> {
                          return(
                            <div key={k}>{i}</div>
                          )})
                      }
                    </div>
                  </div>
                  <div>
                    <div><img src={quan} alt=""/><span>{i.running_option.total_shares/10000}</span></div>
                    <div><img src={ren} alt=""/><span>{i.running_option.total_player_count}</span></div>
                    <div><img src={biao} alt=""/><span>100%</span></div>
                  </div>
                </div>
                :null
              )
            })
          }
        </div>
      </div>
    );
  }

  goBack() {
    hashHistory.goBack();
  }
}
export default Result;
