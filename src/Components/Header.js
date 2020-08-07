import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="navbar">
            <Link to="/">Look Up</Link>{' | '}
            <Link to="/saved">Saved</Link>
        </div>
    )
}
