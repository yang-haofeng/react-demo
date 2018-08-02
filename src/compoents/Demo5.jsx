import React, {Component} from 'react';
import emitter from '../utils/ev';

const TEST_NOTIFY = 'test';

//任意组件间通信 event事件通知

export default class Demo5 extends Component {
  render() {
    return (
      <div>
        <Component1/>
        <Component2/>
      </div>
    );
  }
}

class Component1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '',
    };
  }

  componentDidMount() {
    // 在组件装载完成以后, 监听一个自定义事件
    this.eventEmitter = emitter.addListener(TEST_NOTIFY, this.handleTestNotify);
  }

  //处理通知
  handleTestNotify = (msg) => {
    this.setState({
      msg
    })
  }

  // 组件销毁前移除事件监听
  componentWillUnmount() {
    emitter.removeListener(this.eventEmitter);
  }

  render() {
    return (
      <div>
        {this.state.msg}
        <br/>
        我是组件1
        <hr/>
      </div>
    );
  }
}

class Component2 extends Component {

  click = () => {
    emitter.emit(TEST_NOTIFY, "我是组件2发出的");
  }

  render() {
    return (
      <div>
        我是组件2
        <br/>
        <button onClick={this.click}>点击我</button>
        <hr/>
        <Component3/>
      </div>
    );
  }
}

class Component3 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      msg: '',
    };
  }

  componentDidMount() {
    this.eventEmitter = emitter.addListener(TEST_NOTIFY, this.handleTestNotify);
  }

  //处理通知
  handleTestNotify = (msg) => {
    this.setState({
      msg
    })
  }

  // 组件销毁前移除事件监听
  componentWillUnmount() {
    emitter.removeListener(this.eventEmitter);
  }

  render() {
    return (
      <div>
        {this.state.msg}
        <br/>
        我是组件3
      </div>
    );
  }
}

