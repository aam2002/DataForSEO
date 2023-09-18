import React from 'react'
import { useNavigate } from 'react-router-dom'
const TimeOut = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h1>Error Occured</h1>
        <p>Took to much Time to get the data </p>
        <button onClick={navigate("/")}>
            Go Back
        </button>
    </div>
  )
}

export default TimeOut