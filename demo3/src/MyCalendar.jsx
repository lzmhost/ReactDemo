import React, { Component } from 'react';

let mytrsArr =[];
class MyCalendar extends Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
        this.getTrs()
    }
    getInitialState() {
        return {
            startNumber: 0,
            addNumber : 30,
            endNumber : 0+60*12,
            events : [
                {start:30,end:150},
                {start:540,end:600},
                {start:560,end:620},
                {start:610,end:670},
            ]
        }
    }
    getEvents(){
        let events = [
            {start:30,end:150},
            {start:540,end:600},
            {start:560,end:620},
            {start:610,end:670},
        ]
        for(let item = 0;item<events.length;item ++){
            let data = {};
            data.time = item;
            mytrsArr.push(data)
        }
        console.log(mytrsArr)
        return mytrsArr
    }
    getTrs(){
        for(let item = 0;item<=0+60*12;item = item+10){
            let data = {};
            data.time = item;
            mytrsArr.push(data)
        }
        console.log(mytrsArr)
        return mytrsArr
    }
    render() {
        return (
            <table style={{borderCollapse:"collapse",width:"100%"}}>
               <tbody style={{position:"relative",verticalAlign:"top"}} >
                   {this.state.events.map((item)=>{
                       return(
                           <div style={{ float: "left" ,position:"absolute",left:"21%",right:"1%",borderLeft : "3px solid #000",background:"#B6dd96",top:item.start+"px",height:(item.end-item.start)+"px"}}>
                               <h3 style={{margin:0}}>Sample Item</h3>
                               <p>`````````</p>
                           </div>
                       )
                   })}
                   {mytrsArr.map((u) => {
                       if(u.time%60==0){
                           return (<tr>
                               <td style={{fontSize:"18px",padding:0,margin:0, width:"20%", height:"30px", borderRight : "1px solid #000",paddingRight:10,textAlign:"right"}}>{9 + parseInt(u.time/60)+":00"}</td>
                               <td key={u.time} style={{background:"#ddd",padding:0,margin:0}}> </td>
                           </tr>);
                       }else if(u.time%30==0){
                           return (<tr>
                               <td style={{width:"10%",height:"30px",padding:0,margin:0,  borderRight : "1px solid #000",paddingRight:10,textAlign:"right"}}><span style={{fontSize:"14px",color : "#ddd"}}>{9 + parseInt(u.time/60)+":"+u.time%60}</span></td>
                               <td key={u.time} style={{background:"#ddd",padding:0,margin:0}}> </td>
                           </tr>);
                       }

                   })}
               </tbody>
            </table>
        );
    }
}

export default MyCalendar;