import React from 'react'
import { Link } from 'react-router-dom';
import { GrMail } from 'react-icons/gr';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsMedium } from 'react-icons/bs';
import { BsStackOverflow } from 'react-icons/bs';
// src/App.css
import "../App.css";


const Navbar = () => {
    return (
        <nav className='container-fluid bg-dark py-3'>

            <div className="d-flex justify-content-between">
                
                <div className='d-flex'>
                    <a href="https://mail.google.com/"><GrMail className='iconSize marginRight' /> </a>
                    <a href="https://github.com/"><AiFillGithub className='iconSize marginRight' /></a>
                    <a href="https://www.linkedin.com"><AiFillLinkedin className='iconSize marginRight' /></a>
                    <a href="https://www.medium.com"><BsMedium className='iconSize marginRight' /></a>
                    <a href="https://stackoverflow.com/"><BsStackOverflow className='iconSize marginRight' /></a>
                </div>

                <div className='d-flex'>
                    <Link className="text-light me-4 text-decoration-none" to="/">Home</Link>
                    <Link className="text-light me-4 text-decoration-none" to="/contact">Contact</Link>
                    <Link className="text-light me-4 text-decoration-none" to="/project">Project</Link>

                </div>
            </div>
        </nav>

    )
}


export default Navbar; 