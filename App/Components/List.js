import React from 'react';
import ListItem from './ListItem';

class List extends React.Component {
  render() {
    return (
        <ul>
        {
          /*<ListItem route="dash" text="list-li" />*/
          React.Children.map(this.props.children, function (child) {
                  return <ListItem src='dash' text={child}></ListItem>;
                })
        }

        </ul>
    );
  }
}

module.exports = List;
