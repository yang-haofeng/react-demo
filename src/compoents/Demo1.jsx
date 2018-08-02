import React, {Component} from 'react';


// 事件处理
export default class Demo1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Tom',
      age: 18
    }
  }

  handleClick = (e) => {
    this.setState({
      age: this.state.age + 1
    });
  }

  onValueChange = (e) => {
    this.setState({
      age: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>I am {this.state.name}</h1>
        <p>I am {this.state.age} years old!</p>
        <button onClick={this.handleClick}>加一岁</button>
        <br/>
        <input type="text" onChange={this.onValueChange}/>
      </div>
    );
  }

}