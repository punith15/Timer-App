import React from 'react'

export const Timercomponent = (props)=>{
    const timecolor = {
        'color':props.color
    };
    console.log('ok');
    return(
        <div id="main" style={{backgroundImage:`url(${props.day})`}} className="container-fluid">
        <div id="mainText" className="col-md-6">
        <h1>Hello, <span style={timecolor}>Good {props.wish} !!!</span></h1>
        <div id="timebox">
          <button>{props.timeSlice[0]}</button>
          <button>{props.timeSlice[1]}</button>
          <button>{props.timeSlice[2]}</button>
        </div>
        </div>
      </div>
    );
}