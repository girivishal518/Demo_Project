import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import '../css/nav.css'
function Navbar() {
   
    return (
        <nav>
            <div>
                <NavLink to="/" className={({ isActive, isPending, isTransitioning }) => {
                    return (
                        isActive ? "active" : "inactive"
                    )

                }}>Home</NavLink>
            </div>
            <div>
                <NavLink to="/about" className={({ isActive, isPending, isTransitioning }) => {
                    // console.log(isActive, isPending,  isTransitioning);
                    return (
                        isActive ? "active" : "inactive"
                    )
                }}>About</NavLink>
            </div>
            <div>
                <NavLink to="/login" className={({ isActive, isPending, isTransitioning }) => {
                    // console.log(isActive, isPending,  isTransitioning);
                    return (
                        isActive ? "active" : "inactive"
                    )

                }}>Login</NavLink>
            </div>

            <div>
                <NavLink to=":userName" className={({ isActive, isPending, isTransitioning }) => {
                    // console.log(isActive, isPending,  isTransitioning);
                    return (
                        isActive ? "active" : "inactive"
                    )

                }}>FetchData</NavLink>
            </div>

        </nav>
    )
}

export default Navbar
