import React from "react";
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
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundImage:'url(${image})'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AddPayement(props) {
  const classes = useStyles();
  const [cin, setCin] = useState("");

  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [paiementDate, setDate] = useState("");
const[montant, setMontant]=useState('')
  const [username, setUsername] = useState("");

  /**************/
  let history= useHistory();
  function onCreatePost(e) {
    
    e.preventDefault();
    const postData = {
      cin,
      lastName,
      firstName,
      paiementDate,
     montant,
      username,
    };
   
    axios
      .post(`http://localhost:8000/paiement/addpaiement`, postData)
      .then((response) => {
        console.log(response);
      });
      history.push("Payement");
     
  }
  
  return (
    <div style={{ 
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
      <div className={classes.paper}>
     
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
         Payement 
        </Typography>
        <br/> <br/>
        <form type="submit" onSubmit={onCreatePost}>
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
                
                onChange={(e) => setFirstName(e.target.value)}
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
               
                onChange={(e) => setLastName(e.target.value)}
                autoComplete="lname"
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
              
                onChange={(e) => setUsername(e.target.value)}
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
                
                onChange={(e) => setCin(e.target.value)}
                autoFocus
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="montant"
                label="montant"
                type="number"
                id="montant"
                
                onChange={(e) => setMontant(e.target.value)}
                autoFocus
              />
            </Grid>


           
            
            
            
            
          
           
            
            <Grid item xs={12} sm={12}>
              <label>Payement Date </label>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="paiementdate"
                type="date"
                id="paiementdate"
                
                onChange={(e) => setDate(e.target.value)}
                
              />
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
      </Grid>
        </form>
      </div>
    
    </Container>
    </div>
  );
}
