import React, {Component} from 'react';


//展示组件和容器组件

export default class Demo2 extends Component {

  render() {
    return (
      <div>
        {/* 容器式组件 */}
        <Title>
          <span>标题</span>
          <a href="">link</a>
        </Title>
        <hr/>
        {/* 展示组件 */}
        <Description text={'描述......'}/>
      </div>
    );
  }
}

class Title extends Component {
  render() {
    return <h1>{this.props.children}</h1>
  }
}

class Description extends Component {

  render() {
    return <div>{this.props.text}</div>
  }
}


