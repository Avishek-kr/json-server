import React, { useEffect, useState } from 'react'
import TripCom from './TripCom'

function TripList() {
    const [trips, setTrips]= useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/trips')
        .then(res=>res.json())
        .then(json=>setTrips(json))
    },[])
    console.log(trips)


    return (
        <div>
        <h2>Trips List</h2>
        {
        trips.map((trip)=>(
            <TripCom key={trip.id} title={trip.title} price={trip.price} />
        ))
        }
        </div>
    )
}

export default TripList
