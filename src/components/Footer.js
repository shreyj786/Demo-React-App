import icon from '../Assets/yellow_monochrome.png'
import {Link} from 'react-router-dom'
import {memo} from 'react';
import { useDataProvider } from './DataProvide';

function Footer() {
    const {linkClick } = useDataProvider();
    return (
        <footer className='border border-top border-dashed pt-4'>
            <div className='container-fluid'>
                <div className='row justify-content-center gap-3 gap-sm-0'>
                    <div className="col-sm-2 col-8 text-center ">
                        <img id="footer_icon" src={icon} alt="logo" />
                    </div>
                    <div className="col-sm-4 col-8  mt-sm-0  mt-3">

                        <ul className=" row">
                            <li className='col-12'><h5 className='mb-0'>Doormat Navigation</h5></li>
                            <li className='col-lg-4 col-6'><Link onClick={()=>linkClick("home1")} to="/">Home</Link></li>
                            <li className='col-lg-4 col-6'><Link onClick={()=>linkClick("about1")} to="/about">About</Link></li>
                            <li className='col-lg-4 col-6'><Link onClick={()=>linkClick("menu1")} to="/menu">Menu</Link></li>
                            <li className='col-lg-4 col-6'><Link  onClick={()=>linkClick("reservation1")} to="/reservation">Reservation</Link></li>
                            <li className='col-lg-4 col-6'><Link onClick={()=>linkClick("orderonline1")} to="/orderOnline">Order Online</Link></li>
                            <li className='col-lg-4 col-6'><Link onClick={()=>linkClick("account1")} to="/account">My account</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-8 mt-sm-0  mt-3 ">
                        <ul>
                            <li className='col-12 text-start'><h5>Contact us</h5></li>
                            <li className='row'><i className="col-1 fa-solid fa-phone"></i><p className='col-10 text-start'>773-894-1350</p></li>
                            <li className='row'><i className="col-1 fa-solid fa-envelope"></i><p className='col-10 text-start'>littlelemon@gmail</p></li>
                            <li className='row'><i className="col-1 fa-solid fa-location-dot"></i><p className='col-10 text-start'>11600 W Irving Park RD Chicago</p></li>
                        </ul>
                    </div><div className="col-sm-2 col-8 text-center">
                        <ul className='row gap-sm-1 gap-2'>
                            <li className='col-12 text-start text-sm-center'><h5 className='mb-0'>Follow us</h5></li>
                            <li className='col-1 col-sm-12'><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                            <li className='col-1 col-sm-12'><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                            <li className='col-1 col-sm-12'><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                            <li className='col-1 col-sm-12'><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default memo(Footer);