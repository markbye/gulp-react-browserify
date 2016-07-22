import React from 'react';

class Tab extends React.Component{
    constructor(props) {
        console.log('init-Tab')
    super(props);

  }
  render(){
    return (
        <div>{this.props.children}</div>
        );
  }
};

module.exports = Tab;