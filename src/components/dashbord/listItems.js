import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link as RouterLink } from 'react-router-dom';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import TuneIcon from '@material-ui/icons/Tune';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import PaymentIcon from '@material-ui/icons/Payment';
export const mainListItems = (
  <div>
    <ListItem button component={RouterLink} to='/DashbordGestion'>
      <ListItemIcon>
      <AccountBoxIcon />
      </ListItemIcon>
      <ListItemText primary="Admin Profile" />
    </ListItem>
    <ListItem button component={RouterLink} to='/EmployeesTable'>
      <ListItemIcon>
      <PeopleOutlineIcon/>
      </ListItemIcon>
      <ListItemText primary="Employees" />
    </ListItem>
    <ListItem button  component={RouterLink} to='/CandidatesTable'>
      <ListItemIcon>
        <SupervisorAccountIcon />
      </ListItemIcon>
      <ListItemText primary="Candidates" />
    </ListItem>
    <ListItem button  component={RouterLink} to='/Payement'>
      <ListItemIcon>
        <PaymentIcon/>
      </ListItemIcon>
      <ListItemText primary="Payement" />
    </ListItem>
    
    
   
   
   
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Vehicle</ListSubheader>
    <ListItem button component={RouterLink} to='/CarsTable'>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Cars Data" />
    </ListItem>
    <ListItem button component={RouterLink} to='/Notification'>
      <ListItemIcon>
      <NotificationsIcon />
      </ListItemIcon>
      <ListItemText primary="Notifications" />
    </ListItem>
   
  </div>
);
export const thirdListItems = (
  <div>
   <ListSubheader inset>Sessions</ListSubheader>
    <ListItem button component={RouterLink} to='/SeanceCodeTable'>
      <ListItemIcon>
        <ListAltIcon />
      </ListItemIcon>
      <ListItemText primary=" Highway Code Sessions" />
    </ListItem>
    <ListItem button component={RouterLink} to='/SeanceConduiteTable'>
      <ListItemIcon>
        <DirectionsCarIcon/>
      </ListItemIcon>
      <ListItemText primary=" Driving Sessions" />
    </ListItem>
   
  </div>
);
export const fourthListItems = (
  <div>
   <ListSubheader inset>Exams</ListSubheader>
    <ListItem button component={RouterLink} to='/ExamCodeTable'>
      <ListItemIcon>
      <ListAltIcon/>
      </ListItemIcon>
      <ListItemText primary=" Highway code Exam" />
    </ListItem>
    <ListItem button component={RouterLink} to='/ExamConduiteTable'>
      <ListItemIcon>
        <LocalTaxiIcon />
      </ListItemIcon>
      <ListItemText primary="Driving Exam" />
    </ListItem>
    
   
  </div>
);