import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import { useHistory } from "react-router-dom";
import AddIcon from '@material-ui/icons/Add';
import Avatar from "@material-ui/core/Avatar";
import image2 from './back31.jpg'
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
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';

import { useForm } from 'react-cool-form';
import image from './vert.jpg'
const URL = 'http://localhost:8000/car'
const useStyles2 = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundImage:'url(${image2})'
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
const  CarTable = () => {
    const classes = useStyles();
    const [c, setCarcolor] = useState("");
    const [r, setRegistrationNb] = useState("");
    const [b, setBrand] = useState("");
    const [m, setModel] = useState("");
    const [t, setTechnical_visit_date] = useState("");
    const [i, setInsurance_date] = useState("");
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
            const del = employees.filter(employee => id !== employee.id)
            setEmployees(del)
        })
    }
     const update =( id, rg, Brand,Model,Color,Tech,Ins)=>{
        const res =  axios.put(`${URL}/${id}`, {registrationNb:rg, brand:Brand,model:Model,carcolor:Color,
            technical_visit_date:Tech,insurance_date:Ins });

    }

    const renderHeader = () => {
        let headerElement = ['Matriculation', 'brand', 'model','color','technical visit date','insurance date', 'update','delete']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        return employees && employees.map(({  id,carcolor,
            registrationNb,
            brand,
            model,
            technical_visit_date,
            insurance_date }) => {
            
          return (
                <tr key={id}>
                     
                     <td>{registrationNb}</td>
                    <td>{brand}</td>
                    <td>{model}</td>
                    <td>{carcolor}</td>
                    <td>{ technical_visit_date}</td>
                    <td>{insurance_date}</td>
                    
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
              <Grid item xs={12} sm={12}>
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
                
                  onChange={(e) => setModel(e.target.value)}
                />
              </Grid>
              
              <Grid item xs={12} sm={12}>
              <label>Color</label>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="carcolor"
                 
                  name="carcolor"
                  autoComplete="color"
                  type="text"
                  
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

            onClick={() => update(id, r,b,m,c,t,i)}
          >
            Set
          </Button>
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
    const classes2 = useStyles2();
    const [carcolor, setCarcolorr] = useState("");
    const [registrationNb, setRegistrationNbb] = useState("");
    const [brand, setBrandd] = useState("");
    const [model, setModell] = useState("");
    const [technical_visit_date, setTechnical_visit_datee] = useState("");
    const [insurance_date, setInsurance_datee] = useState("");
    const { reset } = useForm();
    function onCreatePost2(e) {
      
      
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
        <div>
             <br/>
            <h1 id='title' className="carstitle"> Cars Table</h1>
            <div className="add"><Popup
                   contentStyle={{width: "500px"}} trigger={<button  className="btn-custom-sc14 btn-custom-sc1 "><AddIcon /> New </button>} position=" top right">
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
         <LocalTaxiIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
        Add car
        </Typography>
     </div>
        <br/> <br/>
        <form type="submit"  onSubmit={onCreatePost2}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
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
               
                onChange={(e) => setRegistrationNbb(e.target.value)}
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
                 
                  onChange={(e) => setBrandd(e.target.value)}
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
                  
                  onChange={(e) => setModell(e.target.value)}
                />
              </Grid>
              
              <Grid item xs={12} sm={12}>
              <label>Color</label>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="carcolor"
                 
                  name="carcolor"
                  autoComplete="color"
                  type="text"
                
                  onChange={(e) => setCarcolorr(e.target.value)}
                />
              </Grid>
             
              
              <Grid item xs={12} sm={12}>
              <label>Insurance date </label>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="insurance_date"
                  
                  name="insurance_date"
                  autoComplete="model"
                  type="date"
               
                  onChange={(e) => setInsurance_datee(e.target.value)}
                />
              </Grid>
              
              <Grid item xs={12} sm={12}>
              <label>Technical visit date </label>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="technical_visit_date"
                  name="technical_visit_date"
                  autoComplete="technical_visit_date"
                  type="date"
                 
                  onChange={(e) => setTechnical_visit_datee(e.target.value)}
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
    
    </Container>
    </div>

  
    </div>
    </Popup>
    </div> 

            <br/>
            <table id='students' className="cars">
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </table>
        </div>
    )
}


export default CarTable