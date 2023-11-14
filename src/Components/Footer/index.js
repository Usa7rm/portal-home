import React from 'react';
import { Box, Grid, Button, Typography } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: 'background.paper', p: 3 }}>
            <Grid container spacing={2} sx={{ margin: 'auto', width: '80%', border: '2px solid', borderColor: '#000', borderRadius:5 }}>
                {/* 1st Column */}
                <Grid item xs={12} sm={4}>
                    <Button variant="text" sx={{ backgroundColor: 'transparent' }}>
                        StudyFinJourney
                    </Button>
                    <Box display="flex" justifyContent="left">
                        <ul>
                            
                        <li><TwitterIcon sx={{ mr: 1 }} /> {/* Twitter Icon */}</li>
                        <li><LinkedInIcon /> {/* LinkedIn Icon */}</li>
                            
                        </ul>
                    </Box>
                </Grid>

                {/* 2nd Column */}
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6">Our Services</Typography>
                    <ul>
                        <li>Open Job</li>
                        <li>Events</li>
                    </ul>
                </Grid>

                {/* 3rd Column */}
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6">Why Us?</Typography>
                    <Typography variant="body1">
                        Discover unparalleled opportunities and drive your career forward with our unique job listings and networking events.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
