import React, { Component } from 'react';

class Clock extends Component{

    constructor(props){
        super(props);
        this.state={
            days : 0,
            hours : 0,
            minutes : 0,
            seconds : 0
        }
    }

    componentWillMount(){
        this.getTimeUntil(this.props.deadLine);
    }

    componentDidMount(){
        setInterval(() => {this.getTimeUntil(this.props.deadLine)} , 1000);
    }

    set0(num){
        return num < 10 ? '0' + num : num;
    }

    getTimeUntil(deadLine){
        let dates = Date.parse(deadLine) - Date.parse(new Date());
        let seconds = Math.floor(dates / 1000);
        let minutes = Math.floor(seconds / 60 );
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24 );
        hours = hours-(days*24);
        minutes = minutes-((days*24*60)+(hours*60));
        seconds = seconds-((days*24*60*60)+(hours*60*60)+(minutes*60))
        // console.log("\ndays "+ days+"\nhours "+hours+"\nminutes "+minutes+"\nseconds "+seconds);
        this.setState({days , hours , minutes , seconds})
    }

    render(){
        // this.getTimeUntil(this.props.deadLine);
        return(
            <div>
                <div id='T'>{this.set0(this.state.days)} Days</div>
                <div id='T'>{this.set0(this.state.hours)} Hours</div>
                <div id='T'>{this.set0(this.state.minutes)} Minutes</div>
                <div id='T'>{this.set0(this.state.seconds)} Seconds</div>
            </div>    
        )
    }
}

export default Clock;