import React from 'react'
import Navbar from '../Navbar'
import Chart from './Chart'
import Details from './Details'
export default function LogFile(props) {

    // const stopHandler = ()=>{
      
    // }
    return (
        <div>
            <Navbar/>
           <Chart />
           {/* <Button onClick = {stopHandler}>STOP</Button> */}
           <Details/>
        </div>
    )
}
