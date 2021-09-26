import  React,{ useState } from "react";
import "./App.css";
import Quiz1 from "./components/quiz1/quiz1";
import Quiz2 from "./components/quiz2/quiz2";
import SignInSide from "./components/welcomepage/SignInSide"
import SmoothScroll from "smooth-scroll";
import Welcome from "./components/welcomepage/Welcome"
import SignUp from "./components/welcomepage/SignUp"
import CheckoutA from "./components/welcomepage/checkout/Checkout"
import {Route,BrowserRouter, Switch} from "react-router-dom";
import DashbordGestion from "./components/dashbord/DashbordGestion";
import NotificationsC from "./components/dashbord/DataTable/notificationC";
import AddCarC from "./components/Cars/addCarC";
import InsuranceC from "./components/Cars/Dates/insuranceC";
import TechnicalVisitC from "./components/Cars/Dates/technicalVisitC";
import CandidatDashboard from "./components/Candidat/CandidatDashboard";
import CalendarC from "./components/Candidat/dashboard/CalendarC";
import CarTableC from "./components/dashbord/DataTable/CarTableC";
import Checkout from "./components/Candidat/profile/checkout/Checkout"
import SeanceC from "./components/Task/SeanceC";
import AddExamC from "./components/Task/AddExamC";
import AddUser from "./components/dashbord/addUser";
import PricingC from "./components/Candidat/dashboard/PricingC";
import CandidatesC from "./components/dashbord/DataTable/CandidatesC";
import AddPayementC from "./components/dashbord/DataTable/addPayementC";
import EmployeesC from "./components/dashbord/DataTable/EmployeesC";
import SeanceCodeTableC from './components/Task/SeanceCodeTableC';
import SeanceConduiteTableC from './components/Task/SeanceConduiteTableC';
import ExamCodeTableC from './components/Task/ExamCodeTableC';
import ExamConduiteTableC from './components/Task/ExamConduiteTableC';
import Test from "./components/dashbord/DataTable/test";
import PayementTableC from "./components/dashbord/DataTable/PayementTableC";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const[price,setPrice]=useState('0')
  const[pack,setPack]=useState('')
  return (

    
    <div>
      <BrowserRouter>
      <Switch>
      <Route exact path="/test" component={Test} />
      <Route exact path="/Addpayement" component={AddPayementC} />
      <Route exact path="/Payement" component={PayementTableC} />
      <Route exact path="/AddExam" component={AddExamC} />
      <Route exact path="/ExamConduiteTable" component={ExamConduiteTableC} />
      <Route exact path="/ExamCodeTable" component={ExamCodeTableC} />
      <Route exact path="/SeanceConduiteTable" component={SeanceConduiteTableC} />
      <Route exact path="/SeanceCodeTable" component={SeanceCodeTableC} />
      <Route exact path="/CandidatDashboard" component={CandidatDashboard} />
      <Route exact path="/Quiz2" component={Quiz2} />
      <Route exact path="/Quiz1" component={Quiz1} />
      <Route exact path="/PricingC" component={() => <PricingC price={price} setPrice={setPrice} setPack={setPack}  authorized={true} />} />
      <Route exact path="/SignUp" component={() => <SignUp price={price} authorized={true} />}/>
      <Route exact path="/" component={() => <Welcome setPrice={setPrice} authorized={true} />}/>
      <Route exact path="/SignIn" component={() => <SignInSide authorized={true} />}/>
      <Route exact path="/Checkout" component={() => <Checkout price={price}  authorized={true}  />}/>
      <Route exact path="/Notification" component={NotificationsC} />
      <Route exact path="/EmployeesTable" component={EmployeesC} />
      <Route exact path="/CandidatesTable" component={CandidatesC} />
      <Route exact path="/CarsTable" component={CarTableC} />
      <Route exact path="/Seance" component={SeanceC} />
      <Route exact path="/addUser" component={AddUser} />
      <Route exact path="/CalendarC" component={CalendarC} />
      <Route exact path="/Quiz2" component={Quiz2} />
      <Route exact path="/AddCar" component={AddCarC} />
      <Route exact path="/Insurance" component={InsuranceC} />
      <Route exact path="/TechnicalVisit" component={TechnicalVisitC} />
      <Route exact path="/CandidatDashboard" component={CandidatDashboard} />
      <Route exact path="/DashbordGestion" component={ DashbordGestion }/>
      <Route exact path="/CheckoutA" component={() => <CheckoutA />}/>
    </Switch>
      </BrowserRouter>
      
    
   
  </div>
  
    
  );
};

export default App;
