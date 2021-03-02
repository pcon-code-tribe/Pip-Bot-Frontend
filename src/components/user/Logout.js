import React,{useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import DialogPop from '../dialog/Dialog'
//material ui stuff

export default function Logout(props) {
    const history = useHistory()
    const {isLogout} = props
    useEffect(()=>{
        //chnages state to false and triggers the dialog box
        //clears the token from local storage
          logout()
        }
      ,[])// eslint-disable-line react-hooks/exhaustive-deps
      
      const logout = () =>{
        isLogout()
        localStorage.removeItem('token')  
      }
 
    return (
       <DialogPop button={'sign in'} text={'You Have Been Succesfully Logged Out'}
        function={()=> history.push('/')} resetCounter={()=> {return} }/>
    )
}
