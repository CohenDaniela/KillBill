// import FiveList from "./FiveList";
// import Others from "./Others";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";



function Landing ({character}){
    
   
     
 


    return (
        <>
        <h1 className="tittle">Kill Bill Death list Five</h1>


        <Link to='/api/fivelist'

        >
            <h1>Five List</h1>
            
        </Link>

        <Link
        to='api/otherslist'
        >
            <h1>Others Characters</h1>

        </Link>

       
        
       
        </>

    )

};

export default Landing;