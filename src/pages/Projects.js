import React from 'react'
import Navbar from '../components/Navbar'
// AiOutlineArrowRight
import { AiOutlineArrowRight } from 'react-icons/ai';

// Images 
import landscape1 from '../assets/landscape1.jpg';
import landscape2 from '../assets/landscape2.jpg';

const Projects = () => {
    return (
        <>
            <Navbar />
            <div className='container-fluid bg-project d-flex justify-content-center flex-column align-items-center pb-5'>
                <h2 className='text-white mb-4 mt-5'> Featured Projects  </h2>
                <div className='row mx-3'>
                    {/* Card  */}
                    <div className='col-lg-6 mb-3'>
                        <div class="card">
                            <img src={landscape1} class="project-image" alt='' />
                            <div class="card-body ">
                                <h4>React basics</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                <div className='d-flex align-items-center'>
                                    <p className='see-more-margin'>See More</p>  <AiOutlineArrowRight className='text-dark ' />
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Card  */}
                    <div className='col-lg-6 mb-3'>
                        <div class="card" >
                            <img src={landscape2} class="project-image" alt=''/>
                            <div class="card-body">
                                <h4>React basics</h4>

                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className='d-flex align-items-center'>
                                    <p className='see-more-margin'>See More</p>  <AiOutlineArrowRight className='text-dark ' />
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Card  */}
                    <div className='col-lg-6'>
                        <div class="card">
                            <img src={landscape1} class="project-image" alt=''/>
                            <div class="card-body">
                                <h4>React basics</h4>

                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className='d-flex align-items-center'>
                                    <p className='see-more-margin'>See More</p>  <AiOutlineArrowRight className='text-dark ' />
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Card  */}
                    <div className='col-lg-6'>
                        <div class="card">
                            <img src={landscape2} class="project-image" alt=''/>
                            <div class="card-body">
                                <h4>React basics</h4>

                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className='d-flex align-items-center'>
                                    <p className='see-more-margin'>See More</p>  <AiOutlineArrowRight className='text-dark ' />
                                </div>

                            </div>
                        </div>
                    </div>



                </div>

            </div>
        </>
    )
}

export default Projects