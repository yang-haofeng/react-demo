import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

//路由的嵌套 使用Switch选择路由注意点
export default class Demo7 extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Route path="/a" component={A}/>
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

        <Switch>
          <Route exact path={`${this.props.match.path}`} render={(route) => {
            return <div>当前组件是不带参数的A</div>
          }}/>
          <Route path={`${this.props.match.path}/:id`} render={(route) => {
            return <div>当前组件是带参数的A, 参数是：{route.match.params.id}</div>
          }}/>
          {/*<Route path={`${this.props.match.path}/sub`} render={(route) => {*/}
            {/*return <div>当前组件是Sub</div>*/}
          {/*}}/>*/}
        </Switch>
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

  render() {
    return (
      <div>
        <Link to="/a">组件A</Link>
        <br/>
        <Link to="/a/123">带参数的组件A</Link>
        <br/>
        <Link to="/b">组件B</Link>
        <br/>
        {/*<Link to="/a/sub">/a/sub</Link>*/}
        {this.props.children}
      </div>
    );
  }
}