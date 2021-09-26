import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import { useHistory } from "react-router-dom";
import AddIcon from '@material-ui/icons/Add';
import image from './pink.jpg';
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
import image2 from '../dashbord/backg.jpg'
import Popup from 'reactjs-popup';
import ListAltIcon from '@material-ui/icons/ListAlt';
import 'reactjs-popup/dist/index.css';
const URL = 'http://localhost:8000/exam'
const useStyles2 = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
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
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
const ExamCodeTable = () => {
  const [c, setUserCin]=useState('');
    const[m, setMonitor]=useState('');
    const[d,setDate]=useState('');
    const [du,setDuration]=useState('');
    const[s, setStartTime]=useState('');
    const classes = useStyles();
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
    const update =( id, Date, StartTime,MonitorCin,User,Duration)=>{
        const res =  axios.put(`${URL}/${id}`, { type:1, date:Date, startTime:StartTime,monitorCin:MonitorCin,userCin:User
            ,plaque:'',duration:Duration});

    }

    const renderHeader = () => {
        let headerElement = ['Monitor Cin', 'Candidate Cin','Date', 'StartTime','Duration','Update','Delete']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        return employees && employees.map(({ id, type, date, startTime,monitorCin,userCin,plaque,duration }) => {
            if (type===1)
          return (
                <tr key={id}>
                    <td>{monitorCin}</td>
                    <td>{userCin}</td>
                    <td>{ date}</td>
                    <td>{startTime}</td>
                    <td>{duration}</td>
                   
                    
                   <td> <Popup
                   contentStyle={{width: "400px"}} trigger={<button ><UpdateIcon/> </button>} position=" top center">
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
        
       
        <form  type="submit" >
          <Grid container spacing={2}>
           
            <Grid item xs={12} sm={6}>
              <label>Monitor's CIN number</label>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="monitorCin"
                onChange={(e)=>setMonitor(e.target.value)}
                name="monitorCin"
                type="text"
               
                autoComplete="cinMonitor"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <label>Candidate's CIN number</label>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="candidateCin"
                onChange={(e)=>setUserCin(e.target.value)}
                name="candidateCin"
                type="text"
               
                autoComplete="candidateCin"
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
                onChange={(e)=>setDate(e.target.value)}
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
                onChange={(e)=>setStartTime(e.target.value)}
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
                onChange={(e)=>setDuration(e.target.value)}
                id="duration"
              />
            </Grid>
          
              
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"

            onClick={() => update(id, d, s,m,c,du)}
          >
            Set
          </Button>
              
            
         
            
          </Grid>
          
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
    const [type, setTypee] = useState("");
    const [date, setDatee] = useState("");
    const [startTime, setStartTimee] = useState("");
    const [monitorCin, setMonitorCinn] = useState("");
    const [duration, setDurationn] = useState("");
    const [carId, setCarIdd] = useState("");
    const [userCin, setUserCinn] = useState("");
   
    
    /**************/
    function onCreatePost2(e) {
      
      e.preventDefault();
      const postData = {
        type,
        date,
        startTime,
        monitorCin,
        duration,
        carId,
        userCin
        
      };
      axios
        .post(`http://localhost:8000/exam/addexam`, postData)
        .then((response) => {
          console.log(response);
        });
    }
    return (
        <div>
            <br/>
            <h1 id='title' className="examcodetitle">Highway Code Exams Table</h1>
            <div className="add"><Popup
                   contentStyle={{width: "500px"}} trigger={<button  className="btn-custom-sc1 btn-custom-sc16 "><AddIcon /> New </button>} position=" top right">
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
         <ListAltIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
        Add exam
        </Typography>
     </div>
        <br/> <br/>
        <form className={classes.form} type="submit" onSubmit={onCreatePost2}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <label>Candidate's CIN number</label>
              <TextField
                autoComplete="Cincondidat"
                name="userCin"
                variant="outlined"
                required
                fullWidth
                id="userCin"
                type="text"
                
                onChange={(e) => setUserCinn(e.target.value)}
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
               
                onChange={(e) => setMonitorCinn(e.target.value)}
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
               
                onChange={(e) => setDatee(e.target.value)}
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
               
                onChange={(e) => setStartTimee(e.target.value)}
                name="startTime"
                autoComplete="startTime"
              />
              <Grid/>
            
            
            </Grid>
            
            
              
            
              
              
            <Grid item xs={12} sm={6}>
            <h4>Type</h4>
              <div><input type="radio" value="1" onChange={(e) => setTypee(e.target.value)} name="type" />Code</div>
           
            </Grid>
            <Grid item xs={12} sm={6}>
            <label>Duration</label>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="duration"
                type="number"
            
                onChange={(e) => setDurationn(e.target.value)}
                id="duration"
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
            Set
          </Button>
          <Grid container justifyContent="flex-end">
            
          </Grid>
        </form>
    
    </Container>
    </div>

  
    </div>
    </Popup>
    </div> 
            <br/> 
            <table id='students' className="examcode">
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


export default ExamCodeTable