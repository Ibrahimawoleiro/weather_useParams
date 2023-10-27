import { useParams } from 'react-router-dom';
import { useRef } from 'react';
function Details(props) {
    const {id} = useParams()
    let detailHolder = useRef([])
    detailHolder.current = props.Data.data.find((obj)=>{
        return obj.datetime == id;
    })


    return (
        <div className='Details'>
            {detailHolder.current ? 
            <>
            <h3>Date: {detailHolder.current.datetime}</h3>
            <h3>Maximum Temperature: {detailHolder.current.max_temp}</h3>
            <h3>Minimum Temperature: {detailHolder.current.min_temp}</h3>
            <h3>Relative humidity: {detailHolder.current.rh}</h3>
            <h3>TimeZone: {props.Data.timezone}</h3>
            <h3>Description: In {props.Data.city_name},  the maximum temperature for the day is {detailHolder.current.max_temp} and the minimum
                temperature is {detailHolder.current.min_temp}</h3>
                </>
            :<div></div>}
            
        </div>
    )
}

export default Details