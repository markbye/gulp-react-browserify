import React from 'react';
import ListItem from './ListItem';

class MyList extends React.Component {
constructor(props) {
    console.log('2222222222')
    super(props);
    this.state = {
        count: props.initialCount,
        value: 'Hello!',
        loading:true,
        data:null,
         error:null
    };

  }
   componentDidMount(){
        //console.log('componentDidMount----',this.props.source)
        //request form server
         $.ajax({
            url: this.props.source,
            dataType: 'jsonp',
            cache: false,
            success: function(_data){
              console.log(_data)
              this.setState({loading:false,data:_data})
              //value =>  this.setState({data:value,loading:false});
              //error => this.setState({loading: false, error: error})
            }.bind(this),
            error: function(xhr, status, err) {
              console.error(this.props.url, status, err.toString());
            }.bind(this)
          });

    }
  render() {

           if(this.state.loading){
            console.log('loading...')
            return <span>loading....</span>
          }else if(this.state.error!==null){
            console.log('error...')
            return <span> Error:{this.state.error}</span>
          }else{
             var dd = this.state.data.data.wareInfoList;
             console.log(dd)

            return(
             /* <li id={d.skuId}> <img src={d.imageUrl} />--name:{d.name}</li>*/
             <ul>
             {
               dd.map(function (d) {
                  return <ListItem src={d.imageUrl} count='0' text={d.name} ></ListItem>
                })

             }


              </ul>

             )
          }
  }


}

module.exports = MyList;