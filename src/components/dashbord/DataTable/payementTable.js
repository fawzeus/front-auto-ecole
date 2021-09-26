import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import { useHistory } from "react-router-dom";
import AddIcon from '@material-ui/icons/Add';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import PaymentIcon from '@material-ui/icons/Payment';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Avatar from "@material-ui/core/Avatar";
import image2 from '../backg.jpg'

import image from '../bac.jpg'
const URL = 'http://localhost:8000/paiement'

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
  const useStyles2 = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundImage:'url(${image2})'
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

const  PayementTable = () => {
  
    const classes = useStyles();
    const classes2 = useStyles2();
  const [c, setCin] = useState("");
 
 
 
  const [l, setLastName] = useState("");
  const [f, setFirstName] = useState("");
  const [d,setDate] = useState("");
  
  const [m, setMontant] = useState("");
  const [u, setUsername] = useState("");
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {

        const response = await axios.get(URL)
        setEmployees(response.data)
    }

    const removeData = (id) => {

        axios.delete(`${URL}/${id}`).then(res => {
            const del = employees.filter(employee =>id !== employee.id)
            setEmployees(del)
        })
    }
    const update =( id,C,L,F,D,M,U)=>{
        const res =  axios.put(`${URL}/${id}`, {cin: C,lastName:L,firstName:F,paiementDate:D,montant:M,username:U});

    }

    const renderHeader = () => {
        let headerElement = ['Cin', 'firstname', 'lastname','username','Amount','Payement Date','update', 'delete']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        return employees && employees.map(({ id,cin, lastName, firstName,paiementDate,montant,username }) => {
          
          return (
                <tr key={id}>
                     <td>{cin}</td>
                    <td>{firstName}</td>
                    <td>{ lastName}</td>
                    <td>{username}</td>
                    <td>{montant}</td>
                    <td>{paiementDate}</td>
                  
                    <td> <Popup
                   contentStyle={{width: "400px"}} trigger={<button ><UpdateIcon/> </button>} position=" top right">
                         <div>
                         <div style={{ 
      width:'100%',
      backgroundPosition: 'center',
      height:'100%',
      backgroundImage: `url(${image})`,
      backgroundSize: '100%',
      backgroundRepeat: 'repeat'
     }}
      >
    <Container component="main" maxWidth="L">
      <CssBaseline />
      <div >
        
       
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

            onClick={() => update(id,c,l,f,d,m,u)}
          >
            Set
          </Button>
      </Grid>
            <br/>
          </form>
      </div>
    <br/>
    </Container></div>

  
    </div>
    </Popup></td>
                    <td className='opration'><button className='button' onClick={() => removeData(id)}>< DeleteIcon /></button></td>
                    
                    
                </tr>
            )
        })
    }
    let history= useHistory();
    let seen=false;
    let hello={seen:false}
    const togglePop = (hello) => 
    {
        hello.seen=!hello.seen;
        console.log(hello.seen);
    }
    const [cin, setCinn] = useState("");

    const [lastName, setLastNamee] = useState("");
    const [firstName, setFirstNamee] = useState("");
    const [paiementDate, setDatee] = useState("");
  const[montant, setMontantt]=useState('')
    const [username, setUsernamee] = useState("");
  
    function onCreatePost2(e) {
    
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

        <div>
            <br/>
            <h1 id='title' className="paymenttitle"> Payement Table</h1>
            <div className="add"><Popup
                   contentStyle={{width: "500px"}} trigger={<button  className="btn-custom-sc1 btn-custom-sc11"><AddIcon /> New </button>} position=" top right">
                         <div>
                         <div style={{ 
      width:'100%',
      backgroundPosition: 'center',
      height:'100%',
      backgroundImage: `url(${image2})`,
      backgroundSize:'cover',
      backgroundRepeat: 'no-repeat'
     }}
      >
    <Container component="main" maxWidth="L">
     
     <div className="formtitle">
       <br/>
        <Avatar className={classes2.avatar}>
          <PaymentIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
         Payement 
        </Typography>
        </div>
        <br/> <br/>
        <form type="submit" onSubmit={onCreatePost2}>
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
                
                onChange={(e) => setFirstNamee(e.target.value)}
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
               
                onChange={(e) => setLastNamee(e.target.value)}
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
              
                onChange={(e) => setUsernamee(e.target.value)}
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
                
                onChange={(e) => setCinn(e.target.value)}
                autoFocus
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="amount"
                label="amount"
                type="number"
                id="amount"
                
                onChange={(e) => setMontantt(e.target.value)}
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
                
                onChange={(e) => setDatee(e.target.value)}
                
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
      
    
    </Container>
    </div>

  
    </div>
    </Popup>
    </div>  
            <br/> 
            <table id='students' className="payment">
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </table>
            <div>
    
    
   </div>
        </div>
    )
}


export default PayementTable