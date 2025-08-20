import React from 'react'
import Loading from '../assets/loading/loading.gif';
import '../App.css'

function Preloader({ fade }) {
    return (
        <div className={`preloader ${fade ? "fade-out" : ""}`}>
            <img src={Loading} alt="Loading" />
        </div>
    )
}

export default Preloader