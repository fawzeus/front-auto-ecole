import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { useState } from "react";
import image from './back31.jpg'
export default () => (
  <Popup trigger={<button> Trigger</button>} position="right center">
    <div><div style={{ 
      width:'100%',
      backgroundPosition: 'center',
      height:'100%',
      backgroundImage: `url(${image})`,
      backgroundSize:'inline',
      backgroundRepeat: 'repeat'
     }}
      >
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div >
     
       
        <Typography component="h1" variant="h5">
          Add User
        </Typography>
        <br/> <br/>
        <form type="submit" >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                type="text"
              
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                type="text"
              
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="User Name"
                name="username"
                type="text"
               
                autoComplete="username"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="cin"
                label="Cin"
                type="text"
                id="cin"
                
                autoFocus
              />
            </Grid>
            

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="text"
               
                autoComplete="email"
              />
            </Grid>
            


              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="fname"
                  name="phonenumber"
                  variant="outlined"
                  required
                  fullWidth
                  id="phonenumber"
                  label="Phone"
                  type="text"
                 
                  autoFocus
                />
              </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="adress"
                label="Adress"
                type="text"
              
                id="adress"
                autoFocus
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="conpassword"
                label="Password"
                type="password"
              
                id="conpassword"
                autoComplete="current-password"
              />
            </Grid>
           {/*
           <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="role"
                label="Role"
                type="number"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                id="role"
              />
            </Grid>*/}
           
            <Grid item xs={6} sm={6}>
              <label>BirthDate </label>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="bithdate"
                type="date"
                id="birthdate"
               
                
                autoComplete="current-password"
              />
            </Grid>
            
          <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            
            >
             Add
            </Button>
      </Grid>
        </form>
      </div>
    
    </Container>
    </div>
  </div>
  </Popup>
);