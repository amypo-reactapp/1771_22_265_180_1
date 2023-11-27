import React, { Component } from 'react';
class Todoitem extends Component {
 constructor(props) {
 super(props);
 this.state = {
 completed: false
 };
 }
 toggleCompleted = () => {
 this.setState(prevState => ({
 completed: !prevState.completed
 }));
 }
 render() {
 const { content } = this.props;
 const { completed } = this.state;
 return (
 <li 
 style={{ 
 textDecoration: completed ? 'line-through' : 'none',
 cursor: 'pointer' 
 }}
 onClick={this.toggleCompleted}
 >
 {content}
 </li>
 );
 }
}
export default TodoItem;