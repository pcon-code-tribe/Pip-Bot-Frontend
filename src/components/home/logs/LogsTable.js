import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    table: {
      minWidth: 75,
      padding:20,
      marginTop:20,
    },
    head:{
        backgroundColor:'#30336b',
    }
  });

export default function LogsTable(props){
    const classes = useStyles();
    return(
        <Container>
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead className={classes.head} >
            <TableRow className={classes.color} >
             <TableCell align="center" style={{color:'white'}} >Id</TableCell>
              <TableCell align="center" style={{color:'white'}}>Link</TableCell>
              <TableCell align="center" style={{color:'white'}}>Response Time</TableCell>
              <TableCell align="center" style={{color:'white'}}>Code</TableCell>
              <TableCell align="center" style={{color:'white'}}>Interval</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
           {props.chartData.map((data,index) => (
              <TableRow key={index}  >
                <TableCell component="th" scope="row" align="center" style={{color:'#30336b'}}>
                  {index+1}
                </TableCell>
                <TableCell align="center" style={{color:'#30336b'}}>{data.link}</TableCell>
                <TableCell align="center" style={{color:'#30336b'}}>{data.time}</TableCell>
                <TableCell align="center" style={{color:'#30336b'}}>{data.code}</TableCell>
                <TableCell align="center" style={{color:'#30336b'}}>{data.interval}</TableCell>
              </TableRow>
            ))} 
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
    )
 }