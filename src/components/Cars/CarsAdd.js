import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from "axios";
import { Link as RouterLink } from 'react-router-dom';

import { useState } from "react";
import { useForm } from 'react-cool-form';
import image from './back31.jpg'
import { CenterFocusStrong } from '@material-ui/icons';
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
  label:{
    textAlign:'center'
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
export default function CarsAdd(props) {
    const classes = useStyles();
  const [carcolor, setCarcolor] = useState("");
  const [registrationNb, setRegistrationNb] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [technical_visit_date, setTechnical_visit_date] = useState("");
  const [insurance_date, setInsurance_date] = useState("");


  /**************/
  const { reset } = useForm();
  function onCreatePost(e) {
    
    
    e.preventDefault();
    const postData = {
      carcolor,
      registrationNb,
      brand,
      model,
      technical_visit_date,
      insurance_date,
    };
    axios
      .post(`http://localhost:8000/car/addcar`, postData)
      .then((response) => {
        console.log(response);
      }
      
      );
      reset({});
  }
  
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
            Add New Car
          </Typography>
          <br/> <br/>
          <form type="submit"  onSubmit={onCreatePost}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
              <label>Plaque</label>
                <TextField
                  autoComplete="plaque"
                  name="registrationNb"
                  variant="outlined"
                  placeholder=""
                  required
                  fullWidth
                  id="registrationNb"
                  type="text"
                value={registrationNb}
                onChange={(e) => setRegistrationNb(e.target.value)}
                autoFocuss
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <label>Brand</label>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="brand"
                 
                  name="brand"
                  autoComplete="mark"
                  type="text"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                />
              </Grid>
             
              
              <Grid item xs={12} sm={6}>
              <label>Model</label>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="model"
                 
                  name="model"
                  autoComplete="model"
                  type="text"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
              <label>Color</label>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="carcolor"
                 
                  name="carcolor"
                  autoComplete="color"
                  type="text"
                  value={carcolor}
                  onChange={(e) => setCarcolor(e.target.value)}
                />
              </Grid>
             
              
              <Grid item xs={12} sm={6}>
              <label>Insurance date </label>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="insurance_date"
                  
                  name="insurance_date"
                  autoComplete="model"
                  type="date"
                  value={insurance_date}
                  onChange={(e) => setInsurance_date(e.target.value)}
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
              <label>Technical visit date </label>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="technical_visit_date"
                  name="technical_visit_date"
                  autoComplete="technical_visit_date"
                  type="date"
                  value={technical_visit_date}
                  onChange={(e) => setTechnical_visit_date(e.target.value)}
                />
              </Grid>
             
              
             
              
              
            </Grid>
            <br/>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              
            >
              Add
            </Button>
            <br/>
          </form>
        </div>
        
        <br/>
      </Container>
      </div>
    );
  }
  