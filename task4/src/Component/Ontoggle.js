// import React from 'react';
import React,{Component} from 'react';
import Button from 'react-bootstrap/Button';

 export default class Show extends Component{
    constructor(props){
        super(props);
        this.state={
          isToggle:false
         ,isRed: false
        }
        this.handleClick =this.handleClick.bind(this);
        this.handleColor =this.handleColor.bind(this);
    }
    handleClick(event){
       this.setState({isToggle:!this.state.isToggle})
    }
    handleColor(event){
        this.setState({isRed:!this.state.isRed})
    }
    render(){
        return(
            <div>
            <hr></hr>
            <Button variant="dark" onClick={this.handleClick} size="sm">Show Text</Button>{' '}
            <Button variant="success" onClick={this.handleColor} size="sm"> Change Color</Button>{' '}
            <p  style={{display:this.state.isToggle?'block':'none',color:this.state.isRed?'black':'red'}}>Hello!,change my color!</p>
            </div>
        );
    }
}
