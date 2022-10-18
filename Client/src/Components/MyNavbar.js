import React, { useState } from 'react'
import { Container, Navbar, Offcanvas } from 'react-bootstrap'
import './MyNavbar.css'
import { Link } from 'react-router-dom'

function MyNavbar() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Navbar className='main-navbar'>
                <Navbar.Brand className='nav-brand' onClick={handleShow}>User Information Project</Navbar.Brand>
                <Offcanvas show={show} onHide={handleClose} className='User-offcan' style={{ width: '18rem' }}>
                    <Offcanvas.Header >
                        <Offcanvas.Title className='offcanvas-Name'>Control Panel</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className='Main'>
                            <Link to="/" onClick={handleClose}>Add User</Link>
                            <Link to="/alluser" onClick={handleClose}>All User</Link>
                            <Link to="/edituser" onClick={handleClose}>Edit User</Link>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </Navbar>
        </div>
    )
}

export default MyNavbar