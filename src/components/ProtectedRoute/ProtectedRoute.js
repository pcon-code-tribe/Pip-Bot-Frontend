import React from 'react'
import {Redirect, Route} from 'react-router-dom'

export default function ProtectedRoute( {isAuth: isAuth, component: Component,...rest}) {
    return (
        
        <Route {...rest} render={
            (props) => {
             if(isAuth){
                 //load homepage if isAuth is true
                return(<Component />)
             }
             else{
                 //redirect to login page if isAuth is false
                 return(
                 <Redirect to={{
                    pathname:'/',
                    state:{from:props.location}
                 }} />
                 )
             }
        }}>

        </Route>
    )
}
