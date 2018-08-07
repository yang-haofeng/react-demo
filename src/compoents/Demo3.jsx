import React, {Component} from 'react';


//父子组件间通信

export default class Demo2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      child2BgColor: '#999'
    }
  }

  onChild2BgColorChange = (color) => {
    this.setState({
      child2BgColor: color
    })
  }

  render(props) {
    return (
      <div>
        <Child1 changeChild2Color={this.onChild2BgColorChange}/>
        <Child2 bgColor={this.state.child2BgColor}/>
      </div>
    );
  }
}

class Child1 extends React.Component {

  handleClick = () => {
    this.props.changeChild2Color('red');
  }

  render() {
    return (
      <div>
        <h1>Child1</h1>
        <button onClick={this.handleClick}>改变child2 颜色</button>
      </div>
    );
  }
}

class Child2 extends React.Component {

  render() {
    return (
      <div style={{background: this.props.bgColor}}>
        <h1>Child2背景颜色： {this.props.bgColor}</h1>
      </div>
    );
  }
}


