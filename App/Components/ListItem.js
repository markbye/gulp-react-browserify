import React from 'react';
import {Link} from 'react-router';

class ListItem extends React.Component {
constructor(props) {
    console.log('2222222222')
    super(props);
    this.state = {
        count: props.initialCount,
        value: 'Hello!'
    };

  }

   handleChange(event) {
            console.log(event.target.value)
          this.setState({value: event.target.value});
        }
    handleClick(event) {
     console.log('3333',event.target)
    //this.setState({count: this.props.count + 1});
  }
   componentDidMount(){
        console.log('componentDidMount')

    }
  render() {
    return (
/*      <li>
        <Link to={this.props.route}>
          {this.props.text}
        </Link>
      </li>*/
      <div className="t-img-txt"  onClick={this.handleClick}>
        <span><img src={this.props.src}/></span>
        <span>{this.props.text}</span>
         Clicks: {this.props.count}
          <input type="text"
            value={this.props.value}
            onChange={this.handleChange} />
        </div>
    );
  }
}

module.exports = ListItem;
