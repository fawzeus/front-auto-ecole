import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


export default () => (
  <Popup trigger={<button> Trigger</button>} position="right center">
    <div>

    <Container component="main" maxWidth="L">
      <CssBaseline />
      <div >
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Session
        </Typography>
        <form  type="submit" >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <label>Student's CIN number</label>
              <TextField
                autoComplete="Cincondidat"
                name="userCin"
                variant="outlined"
                required
                fullWidth
                id="userCin"
                type="text"
               
                autoFocuss
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <label>Monitor's CIN number</label>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="monitorCin"
                
                name="monitorCin"
                type="text"
             
                autoComplete="cinMonitor"
              />
            </Grid>
          
            
            <Grid item xs={12} sm={6}>
            <label>Date</label>
              <TextField
                variant="outlined"
                type="date"
                required
                fullWidth
                id="date"
              
                name="date"
                autoComplete="date"
              />
              <Grid/>
            
            
            </Grid>
            <Grid item xs={12} sm={6}>
            <label>Time</label>
              <TextField
                variant="outlined"
                type="time"
                required
                fullWidth
                id="startTime"
               
                name="startTime"
                autoComplete="startTime"
              />
              <Grid/>
            
            
            </Grid>
            
            <Grid item xs={12} sm={12}>
            <label>Duration</label>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="duration"
                type="number"
               
                id="duration"
              />
            </Grid>
          
              
            
              
            
            <Grid item xs={12} sm={6}>
              <label>Plaque</label>
              <TextField
                  autoComplete="plaque"
                  name="plaque"
                  variant="outlined"
                  placeholder=""
                  fullWidth
                  id="plaque"
                  type="text"
               
                autoFocuss
                />
              </Grid>
            
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            
          >
            Set
          </Button>
          <Grid container justifyContent="flex-end">
            
          </Grid>
        </form>
      </div>
      <Box mt={5}>
       
      </Box>
    </Container>

    </div>
  </Popup>
);