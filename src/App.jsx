import React,{Component} from 'react';
import './App.css';
import Clock from './clock';
import {Form,FormControl,Button} from 'react-bootstrap';
import StopWatch from './stopWatch';

class App extends Component{

    constructor(props){
        super(props);
        this.state={
            deadLine: '28 january, 2018',
            newDeadLine: ''
        }
    }

    changeDeadLine(){
        this.setState({deadLine: this.state.newDeadLine})
    }

    

    render(){
        // this.getTimeUntil();
        return(
            <div className='App'>
            <div className='Time'>Countdown to {this.state.deadLine}</div>
                <br/>
                <Clock deadLine={this.state.deadLine} />
                <br/>
                <Form inline>
                <FormControl   placeholder='New Date' onChange={event => this.setState({newDeadLine: event.target.value})}/>
                <Button  onClick={() => this.changeDeadLine()} 
                >Submit</Button>
                </Form>

                <StopWatch deadLine={this.state.deadLine} />
            </div>
        )
    }
}


export default App;