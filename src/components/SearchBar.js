function SearchBar(){

    return(
    <div>
    {/* <a className="SearchLocation" href="location"> Search your Location</a>
    <input type="text" placeholder="Search.."/> */}
    <form action="/" method="get">

        <label htmlFor="header-search">
            <span className="visually-hidden">Enter your location: </span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="State or city"
            name="s" 
        />
        <button type="submit">Search</button>

    </form>

        </div>
    )
}
export default SearchBar