import React, {Component} from 'react';


//展示组件和容器组件

export default class Demo2 extends React.Component {

  render(props) {
    return (
      <div>
        {/* 容器式组件 */}
        <Title>
          <span>标题</span>
          <a href="">link</a>
        </Title>
        <hr/>
        {/* 展示组件 */}
        <Description text={'描述......'} />
      </div>
    );
  }
}

class Title extends React.Component{
  constructor(props){
    super(props);
  }
  render(props){
    return <h1>{this.props.children}</h1>
  }
}

class Description extends React.Component{

  render(props){
    return <div>{this.props.text}</div>
  }
}


