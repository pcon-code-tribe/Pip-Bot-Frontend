import React  from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    table: {
      minWidth: 75,
      padding:20,
      marginTop:20,
    },
  })

export default function Tables(props) {
   
    const classes = useStyles();
     let view, fields
   
     //sets table heading
  fields = props.data.length !== 0 ? 
        Object.keys(props.data[0]).map((arr,index)=> <TableCell key={index}>{arr}</TableCell>)
       :  null

   ///sets table rows
   view = props.data.length !==0 ? 
        props.data.map((arr)=>{
            return Object.values(arr)
        }).map((array,index)=>{
          return(  <TableRow key={index}>{array.map((arrays,indexs)=>{
            return <TableCell key={indexs}>{arrays}</TableCell>
          })
          }</TableRow>
          )
        })
      : null
     
    return (
        <div>
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                {fields}
                </TableRow>
              </TableHead>
              <TableBody>
                {view}
              </TableBody>
        </Table>
        </TableContainer>
        </div>
    )
}
