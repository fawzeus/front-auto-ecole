
import React , { useState, useEffect } from 'react'
import '../../App.css'
import axios from 'axios'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
const URL = 'http://localhost:8000/session'
const Calendar = () => { 
  const [sessions, setSessions] = useState([])
  const [exams, setExams]=useState([])
  useEffect(() => {
    getData()
 
}, [])

const getData = async () => {

    const response = await axios.get(URL)
    setSessions(response.data);
    const res = await axios.get('http://localhost:8000/exam')
    setExams(res.data);
}

console.log ("seances:",sessions);

let tableau =[];

for (let i=0; i<sessions.length; i++)
{
  if (sessions[i].type===1)
  tableau.push({title:"seance de code ", date:sessions[i].date})
  else
  tableau.push({title:"seance de conduite", date:sessions[i].date})

}
for (let i=0; i<exams.length; i++)
{
  if (exams[i].type===1)
  tableau.push({title:"exam de code ", date:exams[i].date})
  else
  tableau.push({title:"exam de conduite", date:exams[i].date})

}


    return (
      <FullCalendar
        defaultView="dayGridMonth"
        plugins={[ dayGridPlugin]}
        events={tableau}
      />
    
    )
  
}
export default Calendar