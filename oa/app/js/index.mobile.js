/**
 * Created by Administrator on 2017/3/21.
 */
import React, { Component } from 'react';
import IndexModule from "./module/index_module";
import storage from "./component/storageOperation";
import {} from "./../css/indexOnMobile.css";

class IndexOnMobile extends Component {
  constructor(Porps){
    super(Porps);
    this.state = {
      summary: [
        {
          data: 0,
          intro: "入金总额",
          func : 1,
        }, {
          data: 0,
          intro: "计入绩效"
        }, {
          data: "0%",
          intro: "绩效占比"
        }
      ],
      info: [
        {
          data: 0,
          intro: "新增投资用户",
          className: "moduleColorRed",
          unit: "人"
        }, {
          data: 0,
          intro: "业绩排名",
          unit: "名"
        }
      ],
      todo: [
        {
          data: 0,
          intro: "当日待汇款"
        }, {
          data: 0,
          intro: "三日待汇款"
        }, {
          data: 0,
          intro: "七日待汇款"
        }
      ]
    };
    this.index = this.index.bind(this);
    this.tap = this.tap();
    this.touch = this.touch.bind(this);
  }
  touch(e){
    this.tap(e);
  }
  click(e){
    alert(1);
  }
  tap(){
    let startTime,
      endTime;
    return (e)=>{
      if(!e.currentTarget.getAttribute("data-function")){
        return;
      }
      if(!startTime){
        startTime = new Date().getTime();
        return;
      }
      if(!endTime){
        endTime = new Date().getTime();
      }
      if(endTime - startTime < 100){
        this.click();
        startTime = endTime = 0;
        return;
      }
      if(endTime && startTime){
        startTime = endTime = 0;
      }
    }
  }
  index(){
    return (
      <div className="index-mobile text-center">
        <p className="mobile title">
          {storage.getStorage().Name} 业绩汇总
        </p>
        <ul className="mobile data">
          {this.state.summary.map((line, key)=>{
            return <li key={key} onTouchStart={this.touch} onTouchEnd={this.touch} data-function={line.func}>
              <p>{line.data}</p>
              <p>{line.intro}</p>
            </li>
          })}
        </ul>
        <p className="mobile title">
          信息动态
        </p>
        <ul className="mobile data">
          {this.state.info.map((line, key)=>{
            return <li key={key}>
              <span>{line.intro}</span>
              <span><span className={"preWidth " + line.className}>{line.data}</span>{line.unit}</span>
            </li>
          })}
        </ul>
        <p className="mobile title">
          待办事项
        </p>
        <ul className="mobile data">
          {this.state.todo.map((line, key)=>{
            return <li key={key}>
              <span>{line.intro}</span>
              <span>{line.data}</span>
            </li>
          })}
        </ul>
      </div>
    )
  }

  render(){
    return (
      <IndexModule showInit={this.index}/>
    )
  }
}

export default IndexOnMobile