function FilterByName ({
    nameFilter, handleChange
}){

    const handleInput = (ev) => {
        handleChange(ev.target.value)


    };
    

    return (
        <>
        <label className="titleSearch" htmlFor="search_name">
            Name
            <input
                type="text"
                name="search_name"
                id="search_name"
                value={nameFilter}
                onChange={handleInput} />
        </label>
    </>
   
    )

    
}
export default FilterByName