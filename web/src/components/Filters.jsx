
import React from "react"
import FilterByName from "./FilterByName"


function Filters ({nameFilter, 
    handleChange, 
    character
}
    )
    
    
    {
        const handleSubmit = (ev) => {
            ev.preventDefault();
        }
return(
    <>
    <h3>Search by Name</h3>
    <form className="form"
    onSubmit={handleSubmit}>

        <FilterByName
         nameFilter={nameFilter}
         handleChange={handleChange}
         character= {character}
        />
    </form>
    
    </>
)    

}

export default Filters