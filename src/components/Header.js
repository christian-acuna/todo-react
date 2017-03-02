import React from 'react';
import { Header, Segment } from 'semantic-ui-react';


class Nav extends React.Component {

  render() {
    return (
      <Segment piled>
        <Header size='huge'>Todo</Header>
      </Segment>
    );
  }

}

export default Nav;
