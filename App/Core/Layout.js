import React from 'react';
import Router from 'react-router';
var {RouteHandler} = Router;

import Carousel from '../Components/Carousel';
import Menu from '../Components/Menu';
import List from '../Components/List';
import MyList from '../Components/MyList';
import TabContainer from '../Components/TabContainer';


class App extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        
        <TabContainer/>
        <Carousel/>
        <RouteHandler/>
        <List>
            <span src='ddddd'>naaa</span>
          <span>bbbb</span>
          <span>dddd</span>
        </List>
        <MyList source='http://zgb.m.jd.com/one.showdata?body=%7B%22page%22%3A%221%22%2C%22pageSize%22%3A%2210%22%2C%22id%22%3A%2244%22%7D' >
<span src='ddddd'>naaa</span>
          <span>bbbb</span>
          <span>dddd</span>
        </MyList>
      </div>
    );
  }
}

module.exports = App;
