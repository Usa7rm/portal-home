import React from 'react';
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded';
import { Avatar, Button, Grid, Link, Paper, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const Signin = () => {
  const paperStyle = { padding: 40, height: '60vh', width: 400, margin: "80px auto", backgroundColor: '#F8FFF9' };
  const avatarStyle = { backgroundColor: '#66b9bf' };
  const btnstyle = { margin: '8px 0px' };
  const Fieldkstyle = { margin: '8px 0px' };
  const sorc = { margin: '8px 0px' };


  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: event.target.UserNAme.value,
            password: event.target.Password.value
        })
    });

    const data = await response.json();
    if (data.token) {
        // Store the token and redirect user or update UI
        localStorage.setItem('authToken', data.token);
        // Redirect or update UI
    } else {
        // Handle error (e.g., show an error message to the user)
        console.error('Error logging in:', data.error);
    }
  };
  return (
    <Grid className="background-gradient">
      <Paper elevation={10} style={paperStyle}>
          <form onSubmit={handleSubmit}>
              <Grid align='center'>
                  <Avatar style={avatarStyle}>
                      <LockOpenRoundedIcon />
                  </Avatar>
                  <h2>Sign In</h2>
              </Grid>
              {/* Radio for company and student */}
                <Grid align="center">
                    <FormControl>
                        <FormLabel style={sorc} >Login in as a:</FormLabel>
                            <RadioGroup
                                row
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="Student" control={<Radio />} label="Student" />
                                <FormControlLabel value="Company" control={<Radio />} label="Company" />
                            </RadioGroup>
                    </FormControl>
                </Grid>
              <TextField id="UserNAme" label="First Name" variant="filled" style={Fieldkstyle} fullWidth required />
              <TextField id="Password" label="Enter Password" variant="filled" type='password' fullWidth required />
              <Button type="submit" color="primary" variant='contained' style={btnstyle} fullWidth>Sign In</Button>
              <Typography>
                  <Link href="#basics">Forgot Password?</Link>
              </Typography>
              <Typography>
                  Do you have an Account?
                  <RouterLink to="/signup"> Sign up</RouterLink>
              </Typography>
          </form>
      </Paper>
    </Grid>
    
  )
}

export default Signin