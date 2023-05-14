import { memo } from 'react';

function About() {
    return (
        <>
            <div id='aboutBanner'>
                <div className='container pt-5'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-7 col-9'>
                            <h3>“You don’t need a silver fork to eat good food.”</h3>
                            <p className='fw-bold mb-0'>-Paul Prudhomme</p>
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 50 1440 200"><path fill="#fff" fill-opacity="1" d="M0,64L60,64C120,64,240,64,360,80C480,96,600,128,720,165.3C840,203,960,245,1080,240C1200,235,1320,181,1380,154.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            </div>
            <div className='container mb-2'>
                <div className='row  justify-content-center gap-2'>
                    <div className='col-10'>
                        <h3>About us</h3>
                    </div>
                    <div className='col-10'>
                        <p className='fw-bold'>
                            Based in Chicago, Illinois, Little Lemon is a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                            The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12-15 items that they rotate seasonally.
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis quae laboriosam accusamus dolores sint consequuntur ea beatae, dolorum fugit corporis autem reprehenderit cupiditate. Molestiae est atque aliquid qui velit. Ea, libero dolor. Dolorem, perspiciatis dolore.</p>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 55 1440 90"><path fill="#f8f8ff" fill-opacity="1" d="M0,96L60,106.7C120,117,240,139,360,128C480,117,600,75,720,64C840,53,960,75,1080,90.7C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            <div id='gallery'>
                <div className='container py-4'>
                    <div className='row  justify-content-center gap-4'>
                        <div className='col-10'>
                            <h3>Little tour to our restaurant</h3>
                        </div>
                        <div className='col-10'>
                            <div className='row gap-sm-0 gap-4'>
                                <div className='col-sm-4 col-12'>
                                    <img src={require('../Assets/gallery1.jpg')} className='img-fluid rounded-3 shadow' alt='galleryimg' />
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <img src={require('../Assets/gallery2.jpg')} className='img-fluid rounded-3 shadow' alt='galleryimg' />
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <img src={require('../Assets/gallery3.jpg')} className='img-fluid rounded-3 shadow' alt='galleryimg' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 50 1440 113"><path fill="#f8f8ff" fill-opacity="1" d="M0,64L48,69.3C96,75,192,85,288,106.7C384,128,480,160,576,160C672,160,768,128,864,101.3C960,75,1056,53,1152,64C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            <div className='container my-4'>
                <div className='row  justify-content-center gap-5'>
                    <div className='col-10'>
                        <h3>Our services</h3>
                    </div>
                    <div className='col-10'>
                        <div className='row justify-content-between gap-sm-0 gap-3'>
                            <div className='col-sm-3 col-12 text-center'>
                                <span className='fs-3'><i className="fa-solid fa-utensils p-4 rounded-circle service-icon"></i></span>
                                <p className='mt-3'>serving as an open restaurant for 12 hrs</p>
                            </div>
                            <div className='col-sm-3 col-12 text-center'>
                                <span className='fs-3 '><i className="fa-solid fa-truck p-4 rounded-circle shadow service-icon"></i></span>
                                <p className='mt-3'>24X7 online food delivery services available</p>
                            </div>
                            <div className='col-sm-3 col-12 text-center'>
                                <span className='fs-3 '><i className="fa-solid fa-check-to-slot p-4 rounded-circle service-icon"></i></span>
                                <p className='mt-3'>online table booking system available</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mt-3 mb-4'>
                <div className='row  justify-content-center'>
                    <div className='col-10'>
                        <p className='fw-bold'>Do give us a chance to serve you. we will be delighted to have you as our custormer.have a good meal!!!</p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default memo(About);