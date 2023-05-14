import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { useRef, useEffect, useState } from 'react';
import HomePage from './HomePage';
import About from './About';
import Menu from './Menu';
import Reservation from './Reservation';
import Orderonline from './Orderonline';
import Login from './Login';
import Log from './Log';
import Signup from './Signup'
import icon from '../Assets/yellow_monochrome.png'
import { memo } from 'react';
import { useDataProvider } from './DataProvide';
function Nav() {
    const navBar = useRef();
    useEffect(() => {
        const Scroll = () => {
            window.scrollY > 20 ?
                navBar.current.classList.add("shadow") :
                navBar.current.classList.remove("shadow");
        }
        window.addEventListener('scroll', Scroll)
        let i = document.querySelectorAll('.navbar-nav .nav-item');
        let toggler = document.querySelector('.navbar-collapse');
        i.forEach(item => {
            item.addEventListener('click', () => {
                toggler.classList.remove('show');
            })
        })

        return () => window.removeEventListener('scroll', Scroll);
    }, [])

    const { totalItem, isLoggedIn, usersList, activeUser, myFun, hasSignedUp, linkClick } = useDataProvider();
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            <nav ref={navBar} className='navbar navbar-expand-lg navbar-light bg-white border border-1 sticky-top'>
                <div className='container'>
                    <img className='navbar-brand img-fluid d-lg-inline d-none' id="brand" src={icon} alt="logo" />
                    <button id="navbar_toggler" className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#myNav">
                        <span className='navbar-toggler-icon' ></span>
                    </button>
                    <div className='navbar-collapse collapse text-center' id="myNav">
                        <ul className='navbar-nav ms-3'>
                            <li className='nav-item' onClick={()=>linkClick("home1")}><Link id='home1' className='nav-link active' to="/">Home</Link></li>
                            <li className='nav-item' onClick={()=>linkClick("about1")}><Link className='nav-link' to="/about" id='about1'>About</Link></li>
                            <li className='nav-item' onClick={()=>linkClick("menu1")}><Link className='nav-link' to="/menu" id='menu1'>Menu</Link></li>
                            <li className='nav-item' onClick={()=>linkClick("reservation1")}><Link className='nav-link' to="/reservation" id='reservation1'>Reservation</Link></li>
                            <li className='nav-item' onClick={()=>linkClick("orderonline1")}><Link className='nav-link' to="/orderOnline" id='orderonline1'>Order Online</Link></li>
                            <li className='nav-item' onClick={()=>linkClick("account1")}><Link className='nav-link' to="/account" id='account1'>My Account</Link></li>
                        </ul>
                    </div>
                    <ul className='nav navbar-brand ms-auto gap-2 me-3'>
                        <li className='nav-item me-3 d-flex flex-column align-items-center' id='login-popup-parent'>
                            <img onClick={() => setShow(val => !val)} id="user_img" className='rounded-circle' src={(isLoggedIn && activeUser.img_src) ? activeUser.img_src : require('../Assets/user.png')} alt="user" />
                            {isLoggedIn && <span className='fw-bold d-block' style={{ fontSize: "0.8rem", color: "#495E57" }}>{activeUser.name}</span>}
                            {show && <div id="login-popup" className='d-flex flex-column pb-2'>
                                <div className='px-3 py-2 shadow-sm d-flex justify-content-between' id='login-popup-header'>
                                    <p className='fw-bold mb-0' >User Accounts</p>
                                    <p className="fw-bold mb-0" id="cancel-popup" onClick={() => setShow(val => !val)}>x</p>
                                </div>
                                {
                                    hasSignedUp ? (
                                        <div className='mx-2 mt-1 d-flex flex-column gap-1'>
                                            <div className="users p-1">
                                                {
                                                    <>
                                                        {
                                                            isLoggedIn && (
                                                                <div className='pb-2 d-flex gap-2 border-bottom align-items-center'>
                                                                    <img className='users-img rounded-circle' style={{ cursor: "default" }} src={activeUser.img_src ? activeUser.img_src : require('../Assets/user.png')} alt="user image" />
                                                                    <span className='fw-bold' style={{ fontSize: "0.8rem" }}>{activeUser.name}</span>
                                                                    <span style={{ fontSize: "0.7rem", }} className='text-success ms-auto'>Active</span>
                                                                </div>
                                                            )
                                                        }
                                                        <div className='mt-1'>
                                                            <span style={{ fontSize: "0.9rem" }} className='mb-2'>Available Accounts</span>
                                                            {usersList.map(user => (
                                                                <div className='pb-1 mt-1 d-flex gap-2 border-bottom align-items-center' style={{ cursor: "pointer" }} onClick={() => { myFun("login", user); navigate('/account'); setShow(val => !val); linkClick("account1") }}>
                                                                    <img className='users-img rounded-circle' src={(user.img_src) ? user.img_src : require('../Assets/user.png')} alt="user" />
                                                                    <span style={{ fontSize: "0.8rem", }}>{user.name}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <div className='mt-2' style={{ cursor: "pointer" }} onClick={() => {
                                                            navigate('/signup')
                                                            setShow(val => !val)
                                                        }}>
                                                            <img className='users-img rounded-circle' src={require('../Assets/add-user.png')} alt="user" />
                                                            <span style={{ fontSize: "0.8rem", }} className='ms-2'>Add account</span>
                                                        </div>
                                                        <div className='mt-2' style={{ cursor: "pointer" }} onClick={() => {
                                                            myFun("logout")
                                                            setShow(val => !val)
                                                        }}>
                                                            <img className='users-img rounded-circle' src={require('../Assets/logout.png')} alt="user" />
                                                            <span style={{ fontSize: "0.8rem", }} className='ms-2'>Log out</span>
                                                        </div>
                                                    </>
                                                }
                                            </div>
                                        </div>
                                    ) :
                                        (<>
                                            <div className='d-flex px-2 pt-1 align-items-center justify-content-between'>
                                                <p className='mb-0 fw-lighter'>Not logged in</p>
                                                <Link to="/login" className="ms-5" onClick={() => setShow(val => !val)}>login</Link>
                                            </div>
                                            <div className='d-flex px-2 justify-content-between align-items-center'>
                                                <p className='fw-bold mb-0'>New User ?</p>
                                                <Link to="/signup" className="ms-5" onClick={() => setShow(val => !val)}>Signup</Link>
                                            </div>
                                        </>
                                        )
                                }
                            </div>}
                        </li>
                        <li id="cart_parent" className='nav-item pt-2'>
                            <i id="cart" className=" fa-solid fa-cart-shopping" data-bs-toggle="offcanvas" data-bs-target="#basket"></i>
                            {
                                totalItem > 0 ? <p id="cart-counter">{totalItem}</p> : null
                            }
                        </li>
                    </ul>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/reservation" element={<Reservation />} />
                <Route path="/orderOnline" element={<Orderonline />} />
                <Route path="/account" element={<Login />} />
                <Route path='/login' element={<Log />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </>
    );
}

export default memo(Nav);