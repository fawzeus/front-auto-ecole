import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import PaymentIcon from '@material-ui/icons/Payment';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link as RouterLink } from 'react-router-dom';

export const mainListItems = (
  <div>
    <ListItem button component={RouterLink} to='/CandidatDashboard'>
      <ListItemIcon>
        <AccountBoxIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItem>
    <ListItem button component={RouterLink} to='/CalendarC'>
      <ListItemIcon>
        <DateRangeIcon />
      </ListItemIcon>
      <ListItemText primary="Calendar" />
    </ListItem>
    <ListItem button component={RouterLink} to='/PricingC'>
      <ListItemIcon>
        <PaymentIcon />
      </ListItemIcon>
      <ListItemText primary="Pricing" />
    </ListItem>
    
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Highway code</ListSubheader>
    <ListItem button component={RouterLink} to='/Quiz1' >
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Quiz 1" />
    </ListItem>
    <ListItem button component={RouterLink} to='/Quiz2'>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Quiz 2 " />
    </ListItem>
    
  </div>
);