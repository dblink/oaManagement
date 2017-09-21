/**
 * Created by Administrator on 2017/2/4.
 */
import React, { Component } from 'react';
import { Link, Redirect} from 'react-router';
class Li extends Component {
  render(){
    return (
      <li onClick={this.props.click} className={"phone-block-"+this.props.length}>
        {this.props.data.Url
          ? <Link to={this.props.data.Url}>
          {this.props.data.MeunName}
        </Link>
          : <span className={this.props.className}>
          {this.props.data.MeunName}
        </span>}

        {this.props.data.Items
          ? <List data={this.props.data.Items}/>
          : ""}
      </li>
    )
  }
}
class List extends Component {
  render(){
    let _props = this.props;
    return (
      <ul className="nav clear-both">
        {_props.data.map((data, key) =>{
          return <Li data={data} key={key} click={_props.click} length={_props.length}
                     className={key.toString() === _props.clicked ? "clicked": "" }/>
        })}
      </ul>
    )
  }
}

export default List;