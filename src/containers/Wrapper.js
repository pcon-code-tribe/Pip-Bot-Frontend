import React ,{useState}from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Login from '../components/Login'
import Register from '../components/Register'
import PropTypes from 'prop-types';
 

//material ui function donot touch
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <div>{children}</div>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  
export default function Index(props) {
    
  // matertial ui stuff to handel the tabs
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      }
    return (
      <div>
          <Paper style={{width:'400px',margin:'40px auto'}} elevation={5}> 
          
              {/* added tabs for signin and registration */}
              <Tabs
                  value={value}
                  indicatorColor="secondary"
                  textColor="secondary"
                  onChange={handleChange}
                  aria-label="disabled tabs example"
                  centered
                  variant="fullWidth"
                 >
                  <Tab label="Sign In"  {...a11yProps(0)}/> 
                  <Tab label="Register"  {...a11yProps(1)}/>
              </Tabs>
          
              <TabPanel value={value} index={0}>
                {/* login functional component called */}
                {/* passing isAuthenticated as props to login page */}
                <Login isAuthenticated={props.isAuthenticated} />
           
              </TabPanel>
              <TabPanel value={value} index={1}>
                {/* register functional component called */}
                <Register/>
              </TabPanel>
           </Paper>
      </div>
    )
}
