import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import { useHistory } from "react-router-dom";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Avatar from "@material-ui/core/Avatar";
import image2 from '../backg.jpg'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Link as RouterLink } from 'react-router-dom';


import { useForm } from 'react-cool-form';
import image from './pink.jpg'
const URL = 'http://localhost:8000/user'
const useStyles2 = makeStyles((theme) => ({
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

const  CandidatesTable = () => {
  const classes2 = useStyles2();
    const classes = useStyles();
  const [c, setCin] = useState("");
  const [e, setEmail] = useState("");
  const [l, setLastName] = useState("");
  const [f, setFirstName] = useState("");
  const [b, setBirthdate] = useState("");
  const [po, setPhoneNumber] = useState("");
  const [a, setAdress] = useState("");
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
    const update =( id,C,E,L,F,B,PO,A,U)=>{
        const res =  axios.put(`${URL}/${id}`, {cin: C,email:E,lastName:L,firstName:F,birthdate:B,phoneNumber:PO,adress:A,username:U});

    }

    const renderHeader = () => {
        let headerElement = ['Cin', 'firstname', 'lastname','username','email','phoneNumber','adress', 'birth Date','update', 'delete']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        return employees && employees.map(({ id,cin,
            email, password,role, lastName, firstName, birthdate, phoneNumber,adress,username }) => {
            if (role===3)
          return (
                <tr key={id}>
                     <td>{cin}</td>
                    <td>{firstName}</td>
                    <td>{ lastName}</td>
                    <td>{username}</td>
                    <td>{ email}</td>
                    <td>{ phoneNumber}</td>
                    <td>{ adress}</td>
                    <td>{ birthdate}</td>
                    <td> <Popup
                   contentStyle={{width: "400px"}} trigger={<button ><UpdateIcon/> </button>} position=" top left">
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
            <Grid item xs={12} sm={6}>
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
            <Grid item xs={12} sm={6}>
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
                id="email"
                label="Email Address"
                name="email"
                type="text"
               
                onChange={(e) => setEmail(e.target.value)}
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
                  
                  onChange={(e) => setPhoneNumber(e.target.value)}
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
               
                onChange={(e) => setAdress(e.target.value)}
                id="adress"
                autoFocus
              />
            </Grid>
            
         
          
           
            
            <Grid item xs={12} sm={12}>
              <label>BirthDate </label>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="bithdate"
                type="date"
                id="birthdate"
               
                onChange={(e) => setBirthdate(e.target.value)}
                autoComplete="current-password"
              />
            </Grid>
            
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"

            onClick={() => update(id,c,e,l,f,b,po,a,u)}
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
    function onCreatePost2(e) {
    
      e.preventDefault();
      const postData = {
        cin,
        email,
        password,
        role,
        lastName,
        firstName,
        birthdate,
        phoneNumber,
        adress,
        username,
      };
      axios
        .post(`http://localhost:8000/user/register`, postData)
        .then((response) => {
          console.log(response);
        });
    }
    const [cin, setCinn] = useState("");
    const [email, setEmaill] = useState("");
    const [password, setPasswordd] = useState("");
    const [role, setRolee] = useState("");
    const [lastName, setLastNamee] = useState("");
    const [firstName, setFirstNamee] = useState("");
    const [birthdate, setBirthdatee] = useState("");
    const [phoneNumber, setPhoneNumberr] = useState("");
    const [adress, setAdresss] = useState("");
    const [username, setUsernamee] = useState("");
    return (
        <div>
            <br/>
            <h1 id='title' className="studentstitle"> Candidates Table</h1>
            <div className="add"><Popup
                   contentStyle={{width: "500px"}} trigger={<button  className="btn-custom-sc12 btn-custom-sc1 "><PersonAddIcon /> New </button>} position=" top right">
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
         
        </Avatar>
        <Typography component="h1" variant="h5">
        Add user
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
            <Grid item xs={12} sm={6}>
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
            <Grid item xs={12} sm={6}>
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
                id="email"
                label="Email Address"
                name="email"
                type="text"
               
                onChange={(e) => setEmaill(e.target.value)}
                autoComplete="email"
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
                
                onChange={(e) => setAdresss(e.target.value)}
                id="adress"
                autoFocus
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
                  
                  onChange={(e) => setPhoneNumberr(e.target.value)}
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
                
                onChange={(e) => setPasswordd(e.target.value)}
                id="conpassword"
                autoComplete="current-password"
              />
            </Grid>
          
           
            <Grid item xs={6} sm={6}>
            <label>Role</label>
            
              <div><input type="radio" value="3"onChange={(e) => setRolee(e.target.value)}  name="role" />  Candidate</div>
            </Grid>
            <Grid item xs={6} sm={6}>
              <label>BirthDate </label>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="bithdate"
                type="date"
                id="birthdate"
               
                onChange={(e) => setBirthdatee(e.target.value)}
                autoComplete="current-password"
              />
            </Grid>
            
          <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes2.submit}
              
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
            <table id='students' className="students">
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


export default CandidatesTable