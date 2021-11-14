import React, { useState } from 'react'
import useFetch from '../hooks/UseFetch'
import TripCom from './TripCom'

function TripList() {
    const [url, setUrl]= useState('http://localhost:3000/tripsfgfg')
    const { data: trips, isPending, error} =  useFetch(url)


    return (
        <div style={{width:"480px", margin: "60px auto"}}>
        <h2>Trips List</h2>
        {isPending && <div>Loading trips...</div>}
        {error && <div>{error}</div>}
        {trips &&
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
