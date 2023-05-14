import React from 'react'
import Navbar from '../components/Navbar'

import { AiFillCaretDown } from 'react-icons/ai';

const ContactUs = () => {




  return (
    <>
      <Navbar />
      <div className='container-fluid contact-bg d-flex justify-content-center flex-column align-items-center pt-3'>
        <h2 className='text-white mb-5'> Contact Us</h2>

        <form>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label text-white">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" class="form-text text-white">We'll never share your email with anyone else.</div>
          </div>


          <div class="dropdown mb-3">
            {/* dropdown-toggle */}
            <button class="btn btn-light w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <div className='d-flex justify-content-between'>
                <p className='m-0'>
                  Freelance project inquiry
                </p>
                <AiFillCaretDown />
              </div>
            </button>
            <ul class="dropdown-menu w-100">
              <li  class="dropdown-item">Ecom Project</li>

              <li  class="dropdown-item">Angular Project</li>

              <li  class="dropdown-item">React Project</li>

              <li  class="dropdown-item">Flutter Project</li>

              <li  class="dropdown-item">Python Project</li>

            </ul>
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label text-white">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" />
          </div>

          <div class="mb-3">
            <label for="message" class="form-label text-white">Your Message</label>
            <textarea class="form-control" id="message" rows="4" cols="50" />
          </div>

          <button type="submit" class="btn btn-secondary w-100 mb-3">Submit</button>
        </form>
      </div>
    </>
  )
}

export default ContactUs