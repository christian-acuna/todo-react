import React, { Component } from 'react';
import './App.css';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import Header from './components/Header'

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentId: 1,
      items: [
        {
          id: 1,
          title: 'Get Milk',
          completed: false
        }
      ],
      currentTodo: ""
    }
  }

  handleClick(e) {
    e.preventDefault();
    let currentItems = this.state.items;
    let newTodo = {}
    currentItems.push({
      id: this.state.currentId + 1,
      title: this.state.currentTodo,
      completed: false
    })
    this.setState({items: currentItems, currentTodo: "", currentId: this.state.currentId++});
  }

  handleTextChange(event) {
    this.setState({currentTodo: event.target.value})
  }

  renderItems() {
    return this.state.items.map((item, i) => <li key={i}>{item.title}</li>)
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
