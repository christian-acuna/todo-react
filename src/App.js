import React, { Component } from 'react';
import './App.css';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import Header from './components/Header'
import ListItem from './components/ListItem'

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentId: 0,
      items: [],
      currentTodo: ""
    }
  }

  handleClick(e) {
    e.preventDefault();
    let currentItems = [...this.state.items];
    let newTodo = {}
    currentItems.push({
      id: this.state.currentId + 1,
      title: this.state.currentTodo,
      completed: false
    })
    this.setState({items: currentItems, currentTodo: "", currentId: this.state.currentId + 1});
  }

  handleTextChange(event) {
    this.setState({currentTodo: event.target.value})
  }

  handleCheck(id) {
    let currentItems = JSON.parse(JSON.stringify(this.state.items));
    var currentId = id - 1
    var currentItem = currentItems[currentId];
    currentItems[id - 1].completed = !currentItems[id - 1].completed
    this.setState({items: currentItems});
  }

  renderItems() {
    return this.state.items.map((item, i) => <ListItem key={item.id} changeStatus={(id) => this.handleCheck(id) } todoItem={item}/>)
  }

  render() {
    return (
      <div>
        <Header />
        <Form>
          <Form.Field>
            <label>Add Todo</label>
            <input onChange={this.handleTextChange.bind(this)} value={this.state.currentTodo} placeholder='Create React app' />
          </Form.Field>
          <Button onClick={this.handleClick.bind(this)} type='submit'>Submit</Button>
        </Form>
        <ul>
          {this.renderItems()}
        </ul>

      </div>
    );
  }
}

export default App;
