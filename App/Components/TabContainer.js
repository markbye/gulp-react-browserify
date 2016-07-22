import React from 'react';

import Tab from './Tab';
import TabsControl from './TabsControl';


class TabContainer extends React.Component {
  render(){
    return (
      <div className="container">
                  <TabsControl baseWidth={400}>
                    <Tab name="red">
                      <div className="red">我是红色的标签页
                         <span name='mwf' pp="123" />
                      </div>

                    </Tab>
                    <Tab name="blue">
                      <div className="blue">我是蓝色的标签页</div>
                    </Tab>
                    <Tab name="yellow">
                      <div className="yellow">我是黄色的标签页</div>
                    </Tab>
                  </TabsControl>
                </div>
    );
  }
}

module.exports = TabContainer;
