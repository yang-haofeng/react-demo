import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Demo1 from './compoents/Demo1.jsx';
import Demo2 from './compoents/Demo2.jsx';
import Demo3 from './compoents/Demo3.jsx';

/***********React 初始化*************/

/*
ReactDOM.render(
  <div>
    <h1>Hello, world!</h1>
  </div>
  ,
  document.getElementById('app')
);
*/

/***********组件和jsx*************/

//组件定义
/*

//function 形式
function Component1() {
  return <h1>function 形式</h1>
}

//ES6的Class 形式
class Component2 extends Component {
  render(){
    return <h1>ES6 形式</h1>
  }
}

//JSX语法使用组件
ReactDOM.render(
  <Component1/>
  ,
  document.getElementById('app')
);

*/

/***********props和state*************/

/*

class PropsTest extends Component {
  render() {
    return <h1>Hello {this.props.name}</h1>
  }
}


class StateTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Everyone'
    }
  }
  render() {
    return <h1>Hello {this.state.name}</h1>
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        name: 'Everybody'
      });
    }, 3000);
  }
}

ReactDOM.render(
  <PropsTest name={'Everyone'} />
  ,
  document.getElementById('app')
);

*/




ReactDOM.render(
  <Demo2 />
  ,
  document.getElementById('app')
);
