import React,{useState, useEffect} from 'react'
import {Line} from 'react-chartjs-2'
import axios from 'axios'
export default function Chart() {
     //initialise chart data to null
    const [chartData,setChartData] = useState([])
    //function to pass data to data prop of line chart from api
    const drawChart = ()=>{
        //empty array to store response time values from api
        let values = []
        //api call
        axios.get('http://dummy.restapiexample.com/api/v1/employees')
        .then((res)=>{
            res.data.data.forEach(element => {
            values.push(parseInt(element.employee_salary))
        });
        // setting the props data 
        setChartData({
           labels: values,
           datasets:[{
               label: 'Response Time',
               data:values,
               borderColor:'rgba(255, 99, 132, 1)',
               borderWidth:4
           }]
        })
        
        })
        .catch(err => console.log(err))
    }

    useEffect(()=>{
      drawChart()
    },[])

    return (
        <div>
            <Line 
            data={chartData}
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
                         radius:0
                     }
                 },
                maintainAspectRatio: false 
            }}
            />
            
        </div>
    )
}
