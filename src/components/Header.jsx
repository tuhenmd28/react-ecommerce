import React from 'react'
import { NavLink, Link} from "react-router-dom"
import {BsSearch} from 'react-icons/bs'
const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xl">
            <div className="row">
                <div className="col-6">
                    <p className='text-white'>Free Shipping Over $100 & Free Teturns</p>
                </div>
                <div className="col-6">
                    <p className='text-end text-white'>Hotline: <a href="tel:88843446000" className='text-white'>(888) 4344 6000-</a><a href="tel:88843446000" className='text-white'>(888) 1338 8193</a></p>
                </div>
            </div>
        </div>
      </header>
      <div className="header-upper py-3">
        <div className="container-xl">
            <div className="row align-items-center">
                <div className="col-2">
                    <h2>
                        <Link className='text-white'>Digitic.</Link>
                    </h2>
                </div>
                <div className="col-5">
                <div className="input-group">
                    <input type="text" className="form-control py-2" placeholder="Search Product Here..." aria-label="Search Product Here..." aria-describedby="basic-addon2" />
                    <span className="input-group-text" id="basic-addon2"><BsSearch/></span>
                </div>
                </div>
                <div className="col-5">
                    <div className="header-upper-links d-flex align-conter justify-content-between gap-15">
                        <div>
                            <Link className='text-white d-flex align-items-center justify-content-center link gap-10' >
                                <img src="src/images/compare.svg" alt="compare" />
                                <p className="">Favourite <br /> Products</p>
                            </Link>
                        </div>
                        <div>
                            <Link className='text-white d-flex align-items-center justify-content-center link gap-10' >
                                <img src="src/images/wishlist.svg" alt="wishlist" />
                                <p className="">Favourite <br /> Wishlist</p>
                            </Link>
                        </div>
                        <div>
                            <Link className='text-white d-flex align-items-center justify-content-center link gap-10' >
                                <img src="src/images/user.svg" alt="user" />
                                <p className="">Login <br /> My Account</p>
                            </Link>
                        </div>
                        <div>
                            <Link className='text-white d-flex align-items-center justify-content-center link gap-10  '>
                                <img src="src/images/cart.svg" alt="compare" />
                                <div className="d-flex flex-column">
                                    <span className="badge bg-white text-dark">0</span>
                                    <p className="">$ 500</p>
                                </div>
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="header-bottom py-3">
        <div className="container-xl">
            <div className="row">
                <div className="col-12">
                    <div className="menu-bottom d-flex align-items-center">
                        <div>
                            <div className="dropdown me-3 position-relative">
                                <a className="btn d-flex align-items-center gap-15 text-white dropdown-toggle border-0 " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="src/images/menu.svg" alt="menu" />
                                   <span> Dropdown link</span>
                                </a>

                                <ul className="dropdown-menu pb-0">
                                    <li><Link to={''} className="dropdown-item " href="#">Action</Link></li>
                                    <li><Link to={''} className="dropdown-item " href="#">Another action</Link></li>
                                    <li><Link to={''} className="dropdown-item border-0 " href="#">Something else here</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="menu-links">
                            <div className="d-flex align-items-center gap-15">
                                <NavLink to='/' className='text-white'>Home</NavLink>
                                <NavLink to='/' className='text-white'>Our Store</NavLink>
                                <NavLink to='/' className='text-white'>Blogs</NavLink>
                                <NavLink to='/' className='text-white'>Contact</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Header
