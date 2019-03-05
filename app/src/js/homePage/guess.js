import { Component } from "react";
import React from "react";
import { Link, hashHistory ,browserHistory } from "react-router";
import $ from "jquery";
import "../../css/guess.css";
import back from "../../img/back.png";
import quan from "../../img/homepage/quan.png";
import ren from "../../img/homepage/ren.png";
import biao from "../../img/homepage/biao.png";
import close from "../../img/homepage/close.png";
import loading from "../../img/homepage/loading.gif";
import {Apis} from "seerjs-ws";
import SeerActions from "../../../actions/SeerActions"
import jiao from "../../img/homepage/jiao.png"
import WalletDb from "../../../stores/WalletDb"
import {PrivateKey,key} from "seerjs"
import Aes from "seerjs/es/ecc/src/aes";


let num,args,data,showMoney;
class Guess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index:null,
      num: "",
      arr:'',
      verification:'',
      data:{
        description:"",
        option:{
          stop:''
        },
        roomId:'',
        running_option:{
          selection_description:[],
          total_participate:[],
          pvp_running:[],
          total_shares:'',
          total_player_count:'',
          advanced_running:{
          }
        }
      },
      balance:0,
      id:this.props.location.search.substr(9),
      isLoading:false
    };
  }
  componentWillMount() {
    this.getData();
    this.getBalance();
    // console.log(this.getCookie("zjc").replace(/%20/g, " "));
    // 1.3.0是seer币的
    Apis.instance().db_api().exec("get_assets",[["1.3.2"]]).then(objs => {
      var ret = [];
      objs.forEach(function(item,index){
        ret.push(item);
      });
      // 交易币种
      let symbol = ret.length>0 ? ret[0].symbol: "";
      let precision = ret.length>0 ? Math.pow(10,parseInt(ret[0].precision)): 1;
      this.setState({precision:precision});
    });
  }
  dateAddDays(dataStr,dayCount) {
    var strdate=dataStr; //日期字符串
    var a = strdate.replace(/T/g," ")
    var isdate = new Date(a.replace(/-/g,"/"));  //把日期字符串转换成日期格式
    isdate = new Date((isdate/1000+28800)*1000);  //日期加1天
    var pdate = isdate.getFullYear()+"/"+(isdate.getMonth()+1)+"/"+(isdate.getDate())+" "+(isdate.getHours()<10?("0"+isdate.getHours()):isdate.getHours())+":"+(isdate.getMinutes()<10?("0"+isdate.getMinutes()):isdate.getMinutes())+":"+(isdate.getSeconds()<10?("0"+isdate.getSeconds()):isdate.getSeconds());   //把日期格式转换成字符串
    return pdate;
  }
  async getData(){
    this.setState({isLoading: true});
    await Apis.instance().db_api().exec("get_seer_room",[this.state.id, 0, 1000]).then(data=>{
      let arr=[];
      data.running_option.participators.map((v,i)=>{
        v.map((v,i)=>{
          if(v.player==this.getCookie("id")){
            arr.push(v)
          }
        })
      });
      this.setState({
        data:data,
        arr:arr,
        isLoading: false
      });
      console.log(this.state.data);
    })
  }
  // 获取余额
  async getBalance(){
    let that =this
    Apis.instance().db_api().exec("get_full_accounts", [[this.getCookie("id")],true]).then((v)=>{
      console.log(v);
      if(v[0][1].balances){
        v[0][1].balances.map(x=>{
          if(x.asset_type=='1.3.2'){
            that.setState({
              balance:x.balance
            })
          }
        });
      }else{
        this.setState({
          balance:0
        })
      }
    })
  }
  getCookie(cookieName) {
    var strCookie = document.cookie;
    var arrCookie = strCookie.split("; ");
    for(var i = 0; i < arrCookie.length; i++){
      var arr = arrCookie[i].split("=");
      if(cookieName == arr[0]){
        return arr[1];
      }
    }
    return "";
  }
  goBack() {
    hashHistory.goBack();
  }
  goShow(e) {
    let that = this;
    Apis.instance().db_api().exec("get_account_balances", [this.getCookie("id"),[]]).then((v) => {
      v.map(v=>{
        if(v.asset_id=='1.3.2'){
          that.setState({
            balance: v.amount
          });
        }
      });
    });
    $(".input1 input").val("");
    $('.error-text').text('');
    $('.number1').show();
    $('.number2').hide();
    $(".pop .pop-box div.keyboard").css("height", "0");
    if(this.getCookie("id")){
      num='';
      $(".input1 input").val(num);
      $(".pop").css("height", $(window).height());
      $(".pop").show();
      this.setState({
        index:$(e.target).parent().index()
      });
      let odds = $(e.target).parent().attr("data-odds");
      let type = $(e.target).parent().children("span:first-child").text();
      $(".value").text(type);
      $('.select-title>span:nth-child(2)').text("×"+odds)
    }else{
      browserHistory.push("/account")
    }
  }
  goShow1(e){
    let that = this;
    Apis.instance().db_api().exec("get_account_balances", [this.getCookie("id"),[]]).then((v) => {
      v.map(v=>{
        if(v.asset_id=='1.3.2'){
          that.setState({
            balance: v.amount
          });
        }
      });
    });
    $(".input2 input").val("");
    $('.error-text').text('');
    $('.number2').show();
    $('.number1').hide();
    $(".pop .pop-box div.keyboard").css("height", "0");
    if(this.getCookie("id")){
      num='';
      $(".input2 input").val(num);
      $(".pop").css("height", $(window).height());
      $(".pop").show();
      this.setState({
        index:$(e.target).parent().index()
      });
      let odds = $(e.target).parent().attr("data-odds");
      let type = $(e.target).parent().children("span:first-child").text();
      console.log(type);
      $(".value").text(type);
    }else{
      browserHistory.push("/account")
    }
  }
  onSubmit() {
    if (num) {
      if( Number(num)<this.state.data.option.minimum/100000){
        $('.error-text').text("低于最低预测额范围")
      }else if( Number(num)>this.state.data.option.maximum/100000){
        $('.error-text').text("高于最高预测额范围")
      }else{
        if(Number(num)+0.00665>this.state.balance/100000){
          $('.error-text').text("余额不足")
        }else{
          if($(".number2-header p .cur").index()==0){
            args = {     //生成投注订单信息
              issuer: this.getCookie("id"), //用户id
              room: this.state.data.id, //投注房间id
              type: 0,
              input: [this.state.index],  //选项
              input1: [],
              input2: [],
              amount:Number(num)*100000     //投注金额  （10000=1PFC币）
            };
          }else if($(".number2-header p .cur").index()==1){
            args = {     //生成投注订单信息
              issuer: this.getCookie("id"), //用户id
              room: this.state.data.id, //投注房间id
              type: 0,
              input: [this.state.index],  //选项
              input1: [],
              input2: [],
              amount:"-"+Number(num)*100000     //投注金额  （10000=1PFC币）
            };
          }
          $(".pop").hide();
          $(".pop2").show();
          $(".pop2 .password").css("top",$(window).height()-123+"px");
          $(".error").text(" ");
          console.log(args);
        }
      }
    }else{
      $('.error-text').text("请输入预测数量")
    }
    // $(".input input").val("")
  }
  verification(e){
    this.state.verification=e.target.value
  }
  //提交订单方法 SeerActions.participate(args);
  onForm(){
    let that = this ;
    Apis.instance().db_api().exec("get_account_balances", [this.getCookie("id"),[]]).then((v) => {
      v.map(x=>{
        if(x.asset_id=='1.3.2'){
          that.setState({
            balance: x.amount
          });
        }
      });
    });
    if(this.getCookie('password')==this.state.verification){
      $(".pop2").hide();
      $('.loading').show();
      $('.error').text('');
      SeerActions.participate(args);
      this.setState({
        verification:''
      })
    }else{
      $('.error').text('支付密码错误,请重新输入');
      this.setState({
        verification:''
      })
    }
  }
  onClose(e) {
    if ($(e.target).is("img")) {
      $(".pop").hide();
      $(".number").show();
      $(".pop2").hide();
      $(".pop .pop-box div.keyboard").css("height", "0");
    } else if ($(e.target).attr("id") == "pop") {
      $(".pop").hide();
      $(".number").show();
      $(".pop2").hide();
      $(".pop .pop-box div.keyboard").css("height", "0");
    }
  }

  onFocus(e) {
    $("body").scrollTop(0);
    document.activeElement.blur();
    $(".pop .pop-box div.keyboard").css("height", "205px");
  }
  onFocus2(e){
    $(".pop2 .password").css("top",$(window).height()-123+"px");
  }
  onBlur(){
    $("body").scrollTop(0);
  }
  onKeyboard(e) {
    if($(e.target).is("span")){
      if($(e.target).text()!='删除'&&$(e.target).text()!='重设'){
        if(!num){
          num = $(e.target).text();
        }else{
          num = num+$(e.target).text()
        }
      }else{
        if ($(e.target).text()=='删除'){
          num=num.substring(0,num.length-1)
        }else if($(e.target).text()=='重设'){
          num=''
        }
      }
    }
    $(".input1 input").val(num)
  }
  onKeyboard1(e) {
    if($(e.target).is("span")){
      if($(e.target).text()!='删除'&&$(e.target).text()!='重设'){
        if(!num){
          num = $(e.target).text();
        }else{
          num = num+$(e.target).text()
        }
        //
        let orgin0 = 0;
        for(var i = 0;i<this.state.data.running_option.lmsr_running.items.length;i++){
          orgin0 = orgin0 + Math.exp(this.state.data.running_option.lmsr_running.items[i]  /  this.state.data.running_option.lmsr.L);
        }
        let orgin1 = 0;
        for(var j = 0;j<this.state.data.running_option.lmsr_running.items.length;j++) {
          if (j == this.state.index) {
            orgin1 = orgin1 + Math.exp( (this.state.data.running_option.lmsr_running.items[j] /this.state.data.running_option.lmsr.L)  + (parseInt(Number(num) * this.state.precision)/ this.state.data.running_option.lmsr.L));
          }
          else{
            orgin1 = orgin1 +  Math.exp(this.state.data.running_option.lmsr_running.items[j]   / this.state.data.running_option.lmsr.L);
          }
        }
        let money = parseInt(this.state.data.running_option.lmsr.L * (Math.log(orgin1) - Math.log(orgin0)));
        let pay = money/this.state.precision;
        this.setState({
          pay:pay,
          number:num
        });

        $('.error-text').text("购买 "+num+" 份大约需要支付 "+ pay +" PFC")
      }else{
        if ($(e.target).text()=='删除'){
          console.log(num);
          num=num.substring(0,num.length-1)
        }else if($(e.target).text()=='重设'){
          num=''
        }
      }
    }
    $(".input2 input").val(num)
  }
  look(){
    browserHistory.push("/order")
  }
  guess(){
    $('.success').hide();
  }
  error(){
    $('.shibai').hide();
  }
  hideOddsInfo(e){
    if($(e.target).attr("class")=="oddsInfo"){
      $(".oddsInfo-box").hide();
      $(e.target).children("span").show()
    }else{
      $(".oddsInfo-box").hide();
    }
  }
  // dialog(e){
  //   $(e.currentTarget).children("span").show()
  // }
  backNum(){
    $('.pop2').hide();
  }
  toggleMode(e){
    $(e.target).addClass("cur").siblings("span").removeClass("cur");
    if($(e.target).index()==0){
      $('.input2 input').attr("placeholder","请输入买入份数")
    }else{
      $('.input2 input').attr("placeholder","请输入卖出份数")
    }
  }
    render() {
    return (
      <div className="guess-detail" onClick={this.hideOddsInfo.bind(this)}>
        <div className="hidden pop" id="pop" onClick={this.onClose.bind(this)}>
          <div className="pop-box">
              {/*pvp玩法和高级玩法*/}
              <div className="number number1">
                <div className="select-title">您预测的选择是：<span className="value">4以下</span> <img src={close} alt="" onClick={this.onClose.bind(this)}/></div>
                <div><span>预测额范围： {this.state.data.option.minimum/100000}-{this.state.data.option.maximum/100000} PFC</span><Link to="/recharge">如何获取代币?</Link></div>
                <div className="input input1">
                  <input type="text"
                         placeholder="请输入数字"
                         // value={this.state.num}
                         onFocus={this.onFocus.bind(this)}
                  />
                </div>
                <div>
                  <p><span>手续费: </span><span>0.00665 PFC</span></p>
                  <p><span>余额: </span><span>{this.state.balance/100000} PFC</span></p>
                </div>
                <div className="keyboard" onClick={this.onKeyboard.bind(this)}>
                  <p>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                  </p>
                  <p>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                  </p>
                  <p>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                  </p>
                  <p>
                    <span>重设</span>
                    <span>0</span>
                    <span>删除</span>
                  </p>
                </div>
                <div>
                  <p className="error-text"></p>
                  <div className="button" onClick={this.onSubmit.bind(this)}>确认</div>
                </div>
              </div>
              {/*pvd玩法*/}
              <div className="number number2 hidden">
              <div className="select-title">
                <div className="number2-header">
                  <p onClick={this.toggleMode.bind(this)}>
                    <span className="cur">买入</span>
                    <span>卖出</span>
                  </p>
                  <img src={close} alt="" onClick={this.onClose.bind(this)}/>
                </div>
                您预测的选择是：<span className="value"></span>
              </div>
              <div><span>预测额范围： {this.state.data.option.minimum/10000}-{this.state.data.option.maximum/10000} 份</span><Link to="/recharge">如何获取代币?</Link></div>
              <div className="input input2">
                <input type="text"
                       placeholder="请输入买入份数"
                  // value={this.state.num}
                       onFocus={this.onFocus.bind(this)}
                />
              </div>
              <div>
                <p><span>手续费: </span><span>5 PFC</span></p>
                <p><span>余额: </span><span>{this.state.balance/100000} PFC</span></p>
              </div>
              <div className="keyboard" onClick={this.onKeyboard1.bind(this)}>
                <p>
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                </p>
                <p>
                  <span>4</span>
                  <span>5</span>
                  <span>6</span>
                </p>
                <p>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                </p>
                <p>
                  <span>重设</span>
                  <span>0</span>
                  <span>删除</span>
                </p>
              </div>
              <div>
                <p className="error-text"></p>
                <div className="button" onClick={this.onSubmit.bind(this)}>确认</div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="pop2 hidden" >
          <div className="password">
            <div className="head">
              <img src={back} onClick={this.backNum.bind(this)} alt=""/>请输入钱包密码<div type="submit" onClick={this.onForm.bind(this)}>确定</div>
            </div>
            <div className="wallet-password">
              <input type="password"
                     ref="password"
                     placeholder="请输入钱包密码"
                     onChange={e =>this.verification(e) }
                     onFocus={this.onFocus2.bind(this)}
                     onBlur={this.onBlur.bind(this)}
              />
              <p className="error" style={{color:"#F13535"}}></p>
            </div>
          </div>
        </div>
        <div className="loading hidden">
          <div>
            <img src={loading} alt=""/>
            <p>加载中...</p>
          </div>
        </div>
        <div className="header" onClick={this.goBack.bind(this)}><img src={back} alt=""/>预测</div>
        <div className="guess-content">
          <div className="info">
            <div className="date">
              <p>· {this.state.data.room_type==1?"奖池型预测":"固定赔率"}</p>
              <p>截止时间 {this.dateAddDays(this.state.data.option.stop,1)}</p>
            </div>
            <div className="statistics">
              <p>{this.state.data.description}</p>
              <div>
                {
                  this.state.data.running_option.selection_description.map((i,k)=>{
                    return(
                      //普通玩法
                      this.state.data.room_type==1?
                        <p key={k}>
                          <span>
                            <span>{i}</span>
                          </span>
                          <span>
                            <span>{window.isNaN(Number(this.state.data.running_option.pvp_running.total_participate[k]/this.state.data.running_option.total_shares*100))?"0":Number(this.state.data.running_option.pvp_running.total_participate[k]/this.state.data.running_option.total_shares*100).toFixed(1)}%</span>
                            <i style={{width:(this.state.data.running_option.pvp_running.total_participate[k]/this.state.data.running_option.total_shares*100)+"%"}}></i>
                          </span>
                        </p>
                        :(
                          // 高级玩法
                          this.state.data.room_type==2? <p key={k}>
                          <span>
                            <span>{i}</span>
                          </span>
                            <span>
                            <span>{window.isNaN(Number(this.state.data.running_option.advanced_running.total_participate[k][0]/this.state.data.running_option.total_shares*100))?"0":Number(this.state.data.running_option.advanced_running.total_participate[k][0]/this.state.data.running_option.total_shares*100).toFixed(1)}%</span>
                            <i style={{width:(this.state.data.running_option.advanced_running.total_participate[k][0]/this.state.data.running_option.total_shares*100)+"%"}}></i>
                          </span>
                          </p>:<p key={k}>
                          <span>
                            <span>{i}</span>
                          </span>
                            <span>
                            <span>{window.isNaN(Number(this.state.data.running_option.lmsr_running.items[k]/this.state.data.running_option.total_shares*100))?"0":Number(this.state.data.running_option.lmsr_running.items[k]/this.state.data.running_option.total_shares*100).toFixed(1)}%</span>
                            <i style={{width:(this.state.data.running_option.lmsr_running.items[k]/this.state.data.running_option.total_shares*100)+"%"}}></i>
                          </span>
                          </p>
                        )
                    )
                  })
                }
              </div>
            </div>
            <div className="statistics-bottom">
              <div><img src={quan} alt=""/><span>{this.state.data.running_option.total_shares/100000}</span></div>
              <div><img src={ren} alt=""/><span>{this.state.data.running_option.total_player_count}</span></div>
              <div><img src={biao} alt=""/><span>{this.state.data.option.result_owner_percent/100}%</span></div>
            </div>
          </div>
          <div className="select">
            <div className="title"><i></i><span>选择</span></div>
            <ul>
              {
                this.state.data.running_option.selection_description.map((i,k)=>{
                  return(
                    //普通玩法
                    this.state.data.room_type==1?
                      <li key={k} data-odds={Number(this.state.data.running_option.pvp_running.total_participate[k])!=0?(this.state.data.running_option.total_shares/Number(this.state.data.running_option.pvp_running.total_participate[k])).toFixed(2):0}>
                        <span>{i}</span>
                        <span> (×{Number(this.state.data.running_option.pvp_running.total_participate[k])!=0?(this.state.data.running_option.total_shares/Number(this.state.data.running_option.pvp_running.total_participate[k])).toFixed(2):0})</span>
                        <span className="oddsInfo">
                          <span className="hidden oddsInfo-box"><span></span>此赔率是以当前参与预测的比例计算的，派奖赔率以预测截止时参与预测的比例计算</span>
                        </span>
                        <span onClick={this.goShow.bind(this)}>预测</span>
                      </li>
                      :
                      //高级玩法
                      this.state.data.room_type==2?
                      <li key={k} data-odds={Number(this.state.data.running_option.advanced.awards[k]/100000)}>
                        <span>{i}</span>
                        <span> (×{Number(this.state.data.running_option.advanced.awards[k]/100000)})</span>
                        <span className="oddsInfo">
                          <span className="hidden oddsInfo-box"><span></span>这里显示的赔率是参与预测的实际赔率，预测成功后的奖金将以此赔率计算</span>
                        </span>
                        <span onClick={this.goShow.bind(this)}>预测</span>
                      </li>:<li key={k} data-odds={Number(this.state.data.running_option.lmsr_running.items[k]/10000)}>
                          <span>{i}</span>
                          <span></span>
                          <span className="oddsInfo">
                          <span className="hidden oddsInfo-box"><span></span>此赔率是以当前参与预测的比例计算的，派奖赔率以预测截止时参与预测的比例计算</span>
                        </span>
                          <span onClick={this.goShow1.bind(this)}>预测</span>
                        </li>
                  )
                })
              }
            </ul>
          </div>
          {/*<div className="record">*/}
            {/*<div className="title"><i></i><span>交易记录</span><span>(34)</span></div>*/}
            {/*<div className="t-h">*/}
              {/*<span>参与用户</span>*/}
              {/*<span>购买选择</span>*/}
              {/*<span>参与代币量</span>*/}
              {/*<span>派奖</span>*/}
            {/*</div>*/}
            {/*<ul>*/}
              {/*<li>*/}
                {/*<span>hahsw</span>*/}
                {/*<span>4以下</span>*/}
                {/*<span>1000PFC</span>*/}
                {/*<span>-</span>*/}
              {/*</li>*/}
            {/*</ul>*/}
          {/*</div>*/}
        </div>
        <div className="success hidden">
          <div>
            <p>预测成功!</p>
            <p>{this.state.data.description}</p>
            <p>
              <span>{this.state.data.running_option.selection_description[this.state.index]}</span>
              <span>{Number($(".input input").val())}PFC</span>
            </p>
            <p>截止时间:{this.dateAddDays(this.state.data.option.stop,1)}</p>
          </div>
          <div>
            <span onClick={this.look.bind(this)}>查看记录</span>
            <span onClick={this.guess.bind(this)}>继续预测</span>
          </div>
        </div>
        <div className="shibai hidden">
          <div>
            <p>预测失败!</p>
            <p>预测已截止!</p>
          </div>
          <div onClick={this.error.bind(this)}>
            返回首页
          </div>
        </div>
      </div>
    );
  }
}

export default Guess;
