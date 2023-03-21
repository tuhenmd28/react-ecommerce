import React from 'react'
import { Link } from 'react-router-dom'
import {BsPinterest,BsInstagram,BsYoutube,BsFacebook,BsTwitter} from "react-icons/bs"
const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-15 align-items-center">
                <img src="src/images/newsletter.png" alt="newsletter" />
                <h3 className='text-white'>Sing up for Newsletter</h3>
              </div>
            </div>
            <div className="col-7">
              <div className='input-group position-relative' >
                    <input type="text" className="form-control rounded-1 py-2" placeholder="Your Email Address" aria-label="Your Email Address" aria-describedby="basic-addon2" />
                    <span className="input-group-text position-absolute" id="basic-addon2">Subsribe</span>
                </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xl">
          <div className="row">
            <div className="col-3">
              <h4 className="text-white " >Contact Us</h4>
              <div className='footer_links d-flex flex-column'>
                <p className="text-white pt-4 mt-1 mb-3">
                  Demo Store <br /> No. 1259 Freedom, New York, 11111 <br />
                  United States
                </p>
                <a href='tel:+91 987654321' className='text-white mb-3'  > +91-987654321</a >
                <a href='mailto:Demo@exampledemo.com' className="text-white">Demo@exampledemo.com</a>
                <div className="d-flex social_link">
                  <Link><BsTwitter/></Link>
                  <Link><BsFacebook/></Link>
                  <Link><BsPinterest/></Link>
                  <Link><BsInstagram/></Link>
                  <Link><BsYoutube/></Link>

                </div>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white " >Information</h4>
              <div className='footer_links d-flex flex-column'>
                <Link className='text-white pt-4 pb-1 mb-1 mt-1' >Privacy Policy</Link>
                <Link className='text-white py-1 mb-1' >Refund Policy</Link>
                <Link className='text-white py-1 mb-1' >Shipping Policy</Link>
                <Link className='text-white py-1 mb-1' >Terms Of Service</Link>
                <Link className='text-white py-1 mb-1' >Blogs</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white " >Account</h4>
              <div className='footer_links d-flex flex-column'>
                <Link className='text-white pt-4 pb-1 mb-1 mt-1' >Search</Link>
                <Link className='text-white py-1 mb-1' >Abouts</Link>
                <Link className='text-white py-1 mb-1' >Faq</Link>
                <Link className='text-white py-1 mb-1' >Contact</Link>
                <Link className='text-white py-1 mb-1' >Size Chart</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white " >Quick Links</h4>
              <div className='footer_links d-flex flex-column'>
                <Link className='text-white pt-4 pb-1 mb-1 mt-1' >Accessories</Link>
                <Link className='text-white py-1 mb-1' >Laptops</Link>
                <Link className='text-white py-1 mb-1' >Headphones</Link>
                <Link className='text-white py-1 mb-1' >Teblet</Link>
                <Link className='text-white py-1 mb-1' >Watch</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white " >Our App</h4>
              <p className="text-white pt-4 mt-1">Download our App get extra 15% Discouunt on your first Order...!</p>
              <div className='footer_links d-flex gap-10'>
                <Link className='text-white pt-3 pb-1 mb-1' >
                  <img src="src/apple.png" alt="app" />
                </Link>
                <Link className='text-white py-1 mb-1' >
                  <img src="src/apple.png" alt="app" />
                </Link>

              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">&copy;{new Date().getFullYear()}; Powered by Developer's Corner</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
