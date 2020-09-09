import React from 'react'
import Base from '../core/Base'
import { Link } from 'react-router-dom'

const Components = () => {
    return (
        <Base title="Components" description="List Of Components">
            <Link className="nav-link" to="/components/navbar">Navbar</Link>
            <Link className="nav-link" to="/components/landing">Landing Page</Link>
        </Base>
    )
}

export default Components
