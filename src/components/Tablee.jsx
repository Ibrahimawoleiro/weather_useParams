import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom';
function Tablee(props) {
    const [count, setCount] = useState(0);
    const holder = useRef([]);
    const ans = useRef(1);



    return (
        <div className='Tablee'>
            <table style={{ width: "100%", marginTop: "20px" }}>
                <thead>
                    <tr>
                        <th>
                            Date(Year/Month/Day)
                        </th>
                        <th>
                            Temperature(Celsius)
                        </th>
                        <th>
                            Cloud
                        </th>
                        <th>
                            Pressure
                        </th>
                        <th>
                            Details
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.Data ?


                            props.Data.map((obj, index) => {
                                if (props.filter.current) {
                                    if (obj.temp < props.filter.current) {
                                        return <tr key={ans.current += 1}>
                                            <th>
                                                {obj.datetime}
                                            </th>
                                            <th>
                                                {obj.temp}
                                            </th>
                                            <th>
                                                {obj.clouds}
                                            </th>
                                            <th>
                                                {obj.pres}
                                            </th>
                                            <th>
                                                <Link to={`/Details/${obj.datetime}`}>🔗</Link>
                                            </th>
                                        </tr>
                                    }
                                } else {
                                    return <tr key={ans.current += 1}>
                                        <th>
                                            {obj.datetime}
                                        </th>
                                        <th>
                                            {obj.temp}
                                        </th>
                                        <th>
                                            {obj.clouds}
                                        </th>
                                        <th>
                                            {obj.pres}
                                        </th>
                                        <th>
                                        <Link to={`/Details/${obj.datetime}`}>🔗</Link>
                                        </th>
                                    </tr>
                                }

                            }) : <tr></tr>

                    }


                </tbody>



            </table>
        </div>
    )
}

export default Tablee