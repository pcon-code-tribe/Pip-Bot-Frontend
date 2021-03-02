import React  from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

  
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      marginTop: theme.spacing(3),
      overflowX: 'hide',
    },
    table: {
      minWidth: 100,
      minHeight : 'auto'
    },
    tableCell: {
      paddingRight: 7,
      paddingLeft: 7
    }
  }));

export default function Tables(props) {
   
    const classes = useStyles();
     let view, fields
   
     //sets table heading
    fields = props.data.length !== 0 ? 
        Object.keys(props.data[0]).map((arr,index)=> <TableCell align="center" key={index} className={classes.tableCell}>{arr}</TableCell>)
       :  null

     ///sets table rows
       view = props.data.length !==0 ? 
        props.data.map((arr)=>{
            return Object.values(arr)
        }).map((array,index)=>{
          return(  <TableRow key={index}>{array.map((arrays,indexs)=>{
            return <TableCell key={indexs} align="center" className={classes.tableCell}>{arrays}</TableCell>
          })
          }</TableRow>
          )
        })
      : null
     
    return (
      
        <TableContainer className={classes.root}>
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
    )
}
