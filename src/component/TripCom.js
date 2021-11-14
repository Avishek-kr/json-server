import React from 'react'

const TripCom = ({title, price, id}) => {
    return (
        <div style={{width:"480px", margin: "60px auto"}}>
            <ul style={{padding:"0"}}>
                <li key={id} style={{border:"1px solid #e4e4e4", padding:"10px", listStyleType:"none",
                margin:"20px 0"}}>
                    <h3>{title}</h3>
                    <p>{price}</p>
                </li>
            </ul>
        </div>
    )
}

export default TripCom
