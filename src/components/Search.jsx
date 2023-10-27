import { useEffect, useState } from 'react'


function Search(props) {
    const [curr, setCurr] = useState("")
    const [dateFiltering,setdateFiltering] = useState("")

    const start = () => {
        props.getWeather(props.input.current,"");
    }

    let change = event => {
        setCurr(event.target.value)
        props.input.current = curr;
    }

    let datefilter = (event)=>{
        setdateFiltering(event.target.value)
        props.datefilter.current = dateFiltering
    }

    useEffect(() => {
        props.input.current = curr
        props.datefilter.current = dateFiltering
    })

    const filter = () => {
        let filterBox = document.getElementById("filter");
        let filterValue = filterBox.options[filterBox.selectedIndex].value;
        props.filter.current = filterValue
        props.getWeather(props.input.current,props.datefilter.current);
    }

    return (
        <div className='Search'>
            <div>
                <label htmlFor="searcher">Search city:  </label>
                <input type="text" onChange={change} name="search" id="searcher" value={curr} />
                <button id='starter' onClick={start}>Search</button>
            </div>

            <div>
                
                <label htmlFor="filter">Filter by temperature:  </label>
                <select name="filter" id="filter">
                    <option value="">No filter</option>
                    <option value="5">5 degrees downward</option>
                    <option value="10">10 degrees downward</option>
                    <option value="15">15 degrees downward</option>
                    <option value="20">20 degrees downward</option>
                    <option value="25">25 degrees downward</option>
                    <option value="30">30 degrees downward</option>
                    <option value="35">35 degrees downward</option>
                    <option value="40">40 degrees downward</option>
                    <option value="45">45 degrees downward</option>
                </select>
                <button id='filtering' onClick={filter}>Filter</button>
                <label htmlFor="filterdate">Filter by date: </label>
                <input type="text" onChange={datefilter} name="filter" id="filterdate" value={dateFiltering} />
            </div>

        </div>
    )
}

export default Search