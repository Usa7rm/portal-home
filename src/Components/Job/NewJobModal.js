import {React} from "react";
import {Box,Button,Grid,FilledInput,Select,MenuItem,Dialog,DialogTitle,DialogContent,DialogActions, Typography,IconButton} from '@mui/material'
import {Close as CloseButton} from '@mui/icons-material'
const JobPost = ({ open, setOpen }) => {
    const skills =[
        "JavaScript",
        "React",
        "Node",
        "Html",
        "MongoDb",
        "SQL"
    ]
    const handleClose = () => {
        setOpen(false);
      };
    

    return(
        <Dialog open={open} fullWidth>
            <DialogTitle>
                <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                    Post Job
                    <IconButton onClick={handleClose}>
                        <CloseButton/>
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FilledInput placeholder="Post Job *" disableUnderline fullWidth></FilledInput>
                    </Grid>
                    <Grid item xs={6}>
                        <Select disableUnderline  variant="filled" defaultValue={"Full time"} fullWidth>
                            <MenuItem value='Part time'>Part time</MenuItem>
                            <MenuItem value='Contract'>Contract</MenuItem>
                            <MenuItem value='Full time'>Full time</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput placeholder="Company Name" disableUnderline fullWidth></FilledInput>
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput placeholder="Company Url" disableUnderline fullWidth></FilledInput>
                    </Grid>
                    <Grid item xs={6}>
                        <Select variant="filled" fullWidth disableUnderline defaultValue={"Remote"}>
                            <MenuItem value='Remote'>Remote</MenuItem>
                            <MenuItem value='In Office'>In-Office</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput placeholder="Job Link" disableUnderline fullWidth></FilledInput>
                    </Grid>
                    <Grid item xs={12}>
                        <FilledInput placeholder="Job Description" disableUnderline fullWidth multiline rows={4}></FilledInput>
                    </Grid>
                </Grid>
                <Box mt={2}>
                    <Typography>Skills</Typography>
                    <Box display={"flex"} >
                        {skills.map(skill => <Box key={skill} sx={{
                        margin:'4px',
                        padding:'6px',
                        fontSize:'14.5px',
                        borderRadius:'5px',
                        cursor: 'pointer',
                        fontWeight:'bold',
                        border:`1px solid`,
                        color:'text.primaryt',
                        '&:hover': {
                            backgroundColor:'text.secondary',
                            color:'background.default',
                        }
                        }}>{skill}</Box>)}
                    </Box>

                </Box>
            </DialogContent>
            <DialogActions>
                <Box width='100%' display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <Typography variant="caption" color={'secondary.main'}>Required Fields *</Typography>
                    <Button variant="contained" disableElevation>Post Job</Button>
                </Box>
            </DialogActions>
        </Dialog>
    )

};
export default JobPost;