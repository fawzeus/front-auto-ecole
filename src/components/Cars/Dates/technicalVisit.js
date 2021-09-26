import React from 'react';
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
import { Link as RouterLink } from 'react-router-dom';
import image from '../back31.jpg'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundImage:'url(${image})'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
      height:'100%',
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
export default function TechnicalVisit() {
    const classes = useStyles();
  
    return (
      <div style={{ 
        width:'100%',
        backgroundPosition: 'center',
        height:'100%',
        backgroundImage: `url(${image})`,
        backgroundSize: '100%',
        backgroundRepeat: 'repeat'
       }}
        >
        
    
  
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Technical visit
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <label>Plaque </label>
                <TextField
                  autoComplete="plaque"
                  name="plaque"
                  
                  variant="outlined"
                  required
                  fullWidth
                  id="plaque"
                  
                  autoFocuss
                />
              </Grid>
              
              
              
             
            
              <Grid item xs={12} sm={6}>
              <label>Technical viste date </label>
                <TextField 

                  variant="outlined"
                  required
                  fullWidth
                  id="techvisdate"
                 
                  name="techvisdate"
                  autoComplete="techvisdate"
                  type="date"
                />
                
              </Grid>
             
              
             
              
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Add
            </Button>
            
          </form>
        </div>
        <Box mt={5}>
         
        </Box>
      </Container>
      </div>
    );
  }
  