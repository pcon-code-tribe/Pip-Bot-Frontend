import React,{useState, useEffect} from 'react'
import {Line} from 'react-chartjs-2'
import axios from 'axios'
import LogsTable from '../logs/LogsTable'
import { makeStyles } from '@material-ui/core'
import { Fab } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    icon:{
            position: 'fixed',
            bottom: theme.spacing(2),
            right: theme.spacing(2),
            backgroundColor: '#8e44ad'
          }
  }))

export default function Chart() {
    const classes = useStyles()
    const [time,setTime] = useState([])
    const [chartData,setChartData] = useState([])
    const [link,setLink] = useState('')
    const [loop,setLoop] = useState('1000')
    const [running,setRunning] = useState(true)
    const [stop,setStop] = useState('stop')

    useEffect(() => {  
        if(running === false){
            return;
        }
        const intervalId =  setInterval(()=>{
            axios.get('http://localhost:3030/logs')
            .then((res)=>{
             //concats the data to chart array as object
             setChartData([...chartData,{
                 link     : res.data.link,
                 time     : parseFloat(res.data.time),
                 code     : parseInt(res.data.code),
                 interval : res.data.interval
             }])
             //concats the data to time array
             setTime([...time,parseFloat(res.data.time)])
             //set timeinterval
             setLoop(res.data.interval*1000)
             setLink(res.data.link)
            })
            .catch(err => console.log(err))
        },loop)
        
        //clears interval when demo or chartData changes to prevent infinite loop
      return ()=>{ clearInterval(intervalId)}
      }, [time,chartData,running,link,loop]);

    const stopHandler = ()=>{
       stop === 'stop'? setStop('start') : setStop('stop')
       setRunning(prevState => !prevState)
    }
   
    return (
        <div>
            <Line 
            data={{
                labels: chartData.map((arr)=> arr.code ),
                datasets:[{
                    label: 'Response Time',
                    data: time,
                    borderColor:'#1abc9c',
                    borderWidth:2,
                    width:8
                }]
             }}
            width={100}
            height={40}
            options={{ 
                 legend:{
                     display:true,
                     position:'top',
                     align:'start',
                     labels:{
                         boxWidth:20,
                         fontColor: '#1abc9c',
                         padding: 10,
                     },
                   
                 },
                 layout:{
                    padding: {
                        left: 25,
                        right: 25,
                        top: 30 ,
                        bottom: 30
                    }
                 },
                 scales:{
                     animation:true,
                     yAxes:[{
                        gridLines:{
                            display : true,
                            drawOnChartArea: false,
                        },
                        ticks:{
                            min : 0,
                            fontColor : '#1abc9c',
                            padding : 6,
                            suggestedMax:3,
                            stepSize:1
                        },
                        
                        type:'linear'
                    }],
                    xAxes:[{
                        gridLines:{
                            display : true,
                            drawOnChartArea : false
                        },
                        ticks:{
                            display:true
                        }
                    }]
                 },
                 elements:{
                     point:{
                         radius:2
                     },
                     line:{
                         backgroundColor:'rgba(0,0,0,0.02)'   
                     }
                 },
                 title:{
                    display: true,
                    text: `${link} @ ${loop}ms`,
                    fontColor : '#8e44ad',
                    fontSize: '15'
                 },
                 maintainAspectRatio:true,
                 responsive:true
                
              
            }}
            />
            {/* <div style={{position:'fixed', bottom:'0',  right:'0' ,height:'20px', width:'20px'}}>
                <button onClick={stopHandler} >{stop}</button>
            </div> */}

            <Fab color="secondary" size="medium" onClick={stopHandler} className={classes.icon} >
             {stop}
            </Fab>
            <LogsTable chartData={chartData} />
        </div>
    )
}