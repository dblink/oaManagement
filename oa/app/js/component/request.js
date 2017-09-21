/**
 * Created by Administrator on 2017/1/19.
 */
import {cRequest, cStop} from  "./commonOperate/request";
import storage from "./storageOperation";

const request = function(type, success, errorFunction, setDate){
  let _error = "";
  if(typeof errorFunction !== "function"){
    setDate = errorFunction;
  }else{
    _error = errorFunction;
  }
  let error = (data)=>{
    if (data.statusText !== "abort"){
      storage.clearStorage();
      storage.clearStorage("menu");
      storage.clearToken();
      storage.jump("/");
      return;
    }
    typeof _error === "function" ? _error(data) : "";
  };
  return (()=>{
    let ajax = cRequest.call(this, type, success, error, setDate);
    stop(ajax);
    ajax = null;
  })()
};
const stop = cStop();

export {request, stop}