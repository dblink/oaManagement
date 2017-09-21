/**
 * Created by Administrator on 2017/3/14.
 */

import $ from 'jquery';
import json from "../../../interface.json";
function cRequest(type, success, error, setData){
  let req,
    data,
    rAjax,
    parameter;
  req = json[type];
  data = {};
  parameter = setData ? setData : this.state.parameter;
  req.data.map((value) =>{
    /*if (!parameter[value]){
     console.info(value + "no value");
     }*/
    data[value] = parameter[value];
  });
  rAjax = $.ajax({
    url: req.url,
    data: data,
    type: req.type,
    dataType: req.dataType,
    success: (data) =>{
      /*document.getElementsByClassName("mainWindow")[0].scrollTop = 0;*/
      success(data)
    },
    error: (data)=>{
      error(data);
    }
  });
  return rAjax;
}
const cStop = ()=>{
  let array = [];
  return (ajx)=>{
    if (ajx === "stop"){
      array.map((line) =>{
        line.abort();
      });
      return;
    }
    array.push(ajx)
  }
};
export {cRequest, cStop}