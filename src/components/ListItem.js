import React from 'react';
import { Form } from 'semantic-ui-react'

class ListItem extends React.Component {
  changeChecked() {
    this.props.changeStatus(this.props.todoItem.id)
    // console.log('working');
  }

  render() {
    const {title, id, completed} = this.props.todoItem;
    return (
      <Form>
        <Form.Checkbox onClick={() => this.changeChecked()} checked={completed} label={title} />
      </Form>
    );
  }

}

export default ListItem;
