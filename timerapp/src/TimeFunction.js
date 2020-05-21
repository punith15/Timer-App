import React from 'react'
import {Timercomponent} from './Timecomponent'

const morning = "https://centricconsulting.com/wp-content/uploads/2019/04/morning-microsoft-website-header.jpg";
const afternoon = "https://cdn.suwalls.com/wallpapers/nature/yellow-rapeseed-field-24532-2880x1800.jpg";
const night = "https://vignette.wikia.nocookie.net/nightspeakers/images/2/28/Night.jpg/revision/latest?cb=20181012205540";

export const TimeFunction = ()=>{  
    return(
        support()
    )
}

const support = ()=>{
    let time = new Date().getHours();
    let timeNow = new Date().toLocaleTimeString();
    let timeSlice = timeNow.split(':');
    if(time >= 1 && time <= 11){
        return <Timercomponent day={morning} wish="Morning" color="green" timeSlice={timeSlice}/>
      }else if(time >= 12 && time <19){
         return <Timercomponent day={afternoon} wish="Afternoon" color="orange" timeSlice={timeSlice}/>
      }else{
         return <Timercomponent day={night} wish="Night" color="black" timeSlice={timeSlice}/>
      }
}