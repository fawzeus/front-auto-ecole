import React ,{useState, useEffect}from 'react'
import { Navigation } from "./navigation";
import { Header } from "./header";
import { Features } from "./features";
import { About } from "./about";
import { Services } from "./services";
import { Gallery } from "./gallery";
import { Testimonials } from "./testimonials";
import { Contact } from "./contact";
import {Team} from "./Team"
import "../../App.css";
import Pricing from "./Pricing.js"
import JsonData from "../../data/data.json";
import './welcome.css'

function Welcome({setPrice} ) {
 const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
    return (
        <div>
    <Navigation />
    <Header data={landingPageData.Header} />
    <Features data={landingPageData.Features} />
    <About data={landingPageData.About} />
    <Services data={landingPageData.Services}/>
     <Gallery />
     <Pricing setPrice={setPrice} />
    <Testimonials data={landingPageData.Testimonials} />
    <Team data={landingPageData.Team}/>
    <Contact data={landingPageData.Contact} />
      
        </div>
    )
}

export default Welcome
