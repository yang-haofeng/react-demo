
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

//路由的匹配和跳转
export default class Demo6 extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Route path="/a" component={A}/>
          <Route path="/a/:id" component={A1}/>
          <Route path="/b" component={B}/>
        </Wrapper>
      </Router>
    )
  }
}

class A extends Component {

  render() {
    return (
      <div>
        Component A
      </div>
    )
  }
}

class A1 extends Component {

  render() {
    return (
      <div>
        {/*获取匹配到的路由参数*/}
        带参数的Component A 参数：{this.props.match.params.id}
      </div>
    )
  }
}


class B extends Component {
  render() {
    return <div>Component B</div>
  }
}

class Wrapper extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Link to="/a">组件A</Link>
        <br/>
        <Link to="/a/123">带参数的组件A</Link>
        <br/>
        <Link to="/b">组件B</Link>
        <br/>
        {this.props.children}
      </div>
    );
  }
}