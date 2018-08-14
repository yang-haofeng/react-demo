import React, {Component} from 'react';
import PropTypes from "prop-types";

//跨多级组件通信 context

export default class Demo4 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: 'red'
    }
  }

  // 父组件声明 context
  static childContextTypes = {
    color: PropTypes.string,
    callback: PropTypes.func,
  }

  // 父组件提供一个函数，用来返回相应的 context 对象
  getChildContext = () => {
    return {
      //这里和父组件的state绑定后, 每次state改变了, 声明过使用context的子组件都会重新渲染
      color: this.state.color,
      callback: this.callback
    }
  }

  click = () => {
    this.setState({
      color: 'black'
    });
  }

  callback = (msg) => {
    alert(msg);
  }

  render() {
    return (
      <div style={{background: 'grey', height: 200}}>
        <Sub/>
        <button onClick={this.click}>点击我改变子组件颜色</button>
      </div>
    );
  }
}

//子组件
class Sub extends Component {
  render() {
    return (
      <div style={{background: 'cyan', height: 150, width: 300}}>
        <SubSub/>
      </div>
    );
  }
}


//子组件的子组件
class SubSub extends Component {

  // 子组件声明自己需要使用 context
  static contextTypes = {
    color: PropTypes.string,
    callback: PropTypes.func,
  }

  click = () => {
    //使用 context callback
    this.context.callback('我在子组件的子组件里触发');
  }

  render() {
    const style = {
      //使用 context color
      color: this.context.color,
      background: 'green',
      width: 200
    };
    return (
      <div style={style}>
        SUBSUB
        <br/>
        <button onClick={this.click}>点击我通知父组件</button>
      </div>
    );
  }
}

