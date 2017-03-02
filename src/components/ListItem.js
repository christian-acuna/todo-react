import React from 'react';
import { Form } from 'semantic-ui-react'

class ListItem extends React.Component {

  render() {
    const {title, id, completed} = this.props.todoItem;
    return (
      <Form>
        <Form.Checkbox onClick={this.props.changeStatus(id)} checked={completed} label={title} />
      </Form>
    );
  }

}

export default ListItem;
