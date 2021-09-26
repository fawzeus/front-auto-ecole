import { Dashboard } from '@material-ui/icons';
import React from 'react';
import '../../App.css';
import Dashboardc from './dashboard/Dashboardc';
import { Redirect } from "react-router-dom";

function CandidatDashboard({ authorized }) {
    
      
        return (
            <div>
                
                <Dashboardc />
            </div>
        );
}
export default CandidatDashboard ;
