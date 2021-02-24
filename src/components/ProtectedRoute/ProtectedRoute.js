import React from 'react'
import {Redirect, Route} from 'react-router-dom'

export default function ProtectedRoute( {isAuth: isAuthSuccess, component: Component,...rest}) {
    return (
        
        <Route {...rest} render={
            () => {
             if(isAuthSuccess){
                 //load homepage if isAuth is true
                return(<Component  />)
             }
             else{
                 //redirect to login page if isAuth is false
                 return(
                 <Redirect to={{
                    pathname:'/',
                 }} />
                 )
             }
        }}>

        </Route>
    )
}
