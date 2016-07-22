import React from 'react';

class TabsControl extends React.Component{

  constructor(props) {
     console.log('init-TabsControl')
    super(props);
    this.state = {
        currentIndex: 0
    };

  }
  getTitleItemCssClasses(index){
    return index === this.state.currentIndex ? "tab-title-item active" : "tab-title-item";
  }

  getContentItemCssClasses(index){
    return index === this.state.currentIndex ? "tab-content-item active" : "tab-content-item";
  }
render(){

                var that = this;
                var {baseWidth} = this.props;
                console.log(this.props)
                var childrenLength = this.props.children.length;
                return (
                  <div>
                    <nav className="tab-title-items">
                      {React.Children.map(this.props.children, (element, index) => {
                        return (<div onClick={() => {this.setState({currentIndex: index})}} className={that.getTitleItemCssClasses(index)}>{element.props.name}</div>)
                      })}
                    </nav>
                    <div className="tab-content-items">
                      {React.Children.map(this.props.children, (element, index) => {
                        return (<div className={that.getContentItemCssClasses(index)}>{element}</div>)
                      })}
                    </div>
                  </div>
                )
            //)//end of render renter
    }
  

};

module.exports = TabsControl;