import React from 'react'
import Loading from '../assets/loading/loading.gif';
import '../App.css'

function Preloader() {
    return (
        <div className="preloader d-flex justify-content-center align-items-center">
            <img src={Loading} alt="Loading" />
        </div>
    )
}

export default Preloader