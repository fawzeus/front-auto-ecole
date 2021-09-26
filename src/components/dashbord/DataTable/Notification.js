import React, { useState, useEffect } from 'react'
import axios from 'axios'
const URL = 'http://localhost:8000/car'

const PostList = () => {
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

    const renderHeader = () => {
        let headerElement = [ 'carcolor', 'registration Number','brand','model','technical_visit_date','insurance_date']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    };
    
    const renderBody = () => {
      var one_day = 1000 * 60 * 60 * 24

      // To set present_dates to two variables
      var present_date = new Date();
        
      // 0-11 is Month in JavaScript
     
        return employees && employees.map(({   id, carcolor, registrationNb, brand,model, technical_visit_date,insurance_date }) => {
          
          var other_date = new Date (technical_visit_date);
          var insdate = new Date (insurance_date);
           
          // To Calculate next year's Christmas if passed already.
    
          // To Calculate the result in milliseconds and then converting into days
          var Result = ( other_date.getTime() - present_date.getTime()) / (one_day);
          var Resultins = (insdate.getTime()- present_date.getTime()) / (one_day);
            
          // To remove the decimals from the (Result) resulting days value
          var Final_Result = Result.toFixed(0);
          var Final_Resultins = Resultins.toFixed(0);
          console.log("technical visit");
           console.log(Final_Result);
           console.log("insurance");
           console.log(other_date.getDate());
           console.log(Final_Resultins);
          if ((Final_Result>=0 && Final_Result<=5) || (Final_Resultins>=0 && Final_Resultins<=5)) 
          return (
            <tr key={id}>
             
            <td>{carcolor}</td>
            <td>{registrationNb}</td>
            <td>{brand}</td>
            <td>{model}</td>
            <td>{technical_visit_date}</td>
            <td>{insurance_date}</td>
            
          </tr>
            )
        })
    }

    return (
        <div>
            <br/>
            <h1 id='title' className="notificationstitle">close dates</h1>
            <br/> <br/>
            <table id='students' className="notifications">
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


export default PostList