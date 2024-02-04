// import FiveList from "./FiveList";
// import Others from "./Others";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import '../styles/layouts/landing.scss'
import '../styles/core/reset.scss'
import image from '../images/killbill.jpg'



function Landing ({character}){
    
    
   
     
 


    return (
        <>
      <main className="landingMain">
      <h1 className="landingTitle">Kill Bill</h1>
      <img src={image}    alt=""  className="landingImg"/>
      
      

      


<Link to='/api/fivelist' className="landingLinkFive"

>
    <h1 >Five List</h1>
    
</Link>

<Link
to='api/otherslist' className="landingLinkOthers"
>
    <h1 >Others Characters</h1>

</Link>
      </main>

       
        
       
        </>

    )

};

export default Landing;