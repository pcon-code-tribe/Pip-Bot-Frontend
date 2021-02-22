import React,{useState, useEffect} from 'react'
import {Line} from 'react-chartjs-2'
import axios from 'axios'

export default function Chart() {
     //initialise chart data to null

    const [demo,setDemo] = useState([])
    const [chartData,setChartData] = useState()
    //function to pass data to data prop of line chart from api

    const drawChart = ()=>{
        // empty array to store response time values from api
        var incoming =  setInterval(()=>{
            axios.get('http://localhost:3030/logs')
            .then((res)=>{
              setDemo(demo.concat(res.data.time))
            //   console.log(res.data.time)
            })
            .catch(err => console.log(err))
        },3000)
    }
  
   useEffect(()=>{
     drawChart()
   },[])

    return (
        <div>
            <Line 
            data={{
                labels: demo,
                datasets:[{
                    label: 'Response Time',
                    data: demo,
                    borderColor:'rgba(255, 99, 132, 1)',
                    borderWidth:4
                }]
             }}
            width={100}
            height={500}
            options={{ 
                 legend:{
                     display:true,
                     position:'top',
                     align:'start',
                     labels:{
                         boxWidth:20,
                     }
                 },
                 layout:{
                    padding: {
                        left: 50,
                        right: 50,
                        top: 30 ,
                        bottom: 40
                    }
                 },
                 scales:{
                     yAxes:[{
                        gridLines:{
                            drawOnChartArea: false
                        }
                    }],
                    xAxes:[{
                        gridLines:{
                            display:false
                        },
                        ticks:{
                            display:false
                        }
                    }]
                 },
                 elements:{
                     point:{
                         radius:1
                     }
                 },
                maintainAspectRatio: false 
            }}
            />
        {/* <button onClick={stopHandler}>stop</button> */}
        </div>
    )
}
