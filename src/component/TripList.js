import React, { useEffect, useState } from 'react'
import TripCom from './TripCom'

function TripList() {
    const [trips, setTrips]= useState([])
    const [url, setUrl]= useState('http://localhost:3000/trips')

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(json=>setTrips(json))
    },[url])
    console.log(trips)


    return (
        <div style={{width:"480px", margin: "60px auto"}}>
        <h2>Trips List</h2>
        {
        trips.map((trip)=>(
            <TripCom key={trip.id} title={trip.title} price={trip.price} />
        ))
        }
        <div className="filters" style={{display:"flex", gap:"10px"}}>
                <button style={{padding:"10px", fontSize:"16px", flexGrow:"1"}} onClick={()=>setUrl('http://localhost:3000/trips?loc=europe')}>Europe trips</button>
                <button style={{padding:"10px", fontSize:"16px", flexGrow:"1"}} onClick={()=>setUrl('http://localhost:3000/trips')}>All trips</button>
            </div>
        </div>
    )
}

export default TripList
