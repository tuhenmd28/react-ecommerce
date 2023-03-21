import React from 'react'
import {Link} from "react-router-dom"
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
const Home = () => {
  return (
    <>
      <section className="home_wraper py-4">
        <div className="container-xl">
          <div className="row">
            <div className="col-6">
              <div className="main_banner py-3 position-relative">
                  <img src="src/images/main-banner-1.jpg" className='img-fluid rounded-3' alt="main-banner" />
                  <div className="main_banner_content position-absolute">
                    <h4>SUPERCHARCED FOR PROS.</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>From $999,00 or $41.62/mo. <br /> for 24 mo. Footnote* </p>
                    <Link>BUY NOW</Link>
                  </div>
              </div>
            </div>
            <div className="col-6">
              <div className="  row d-flex flex-wrap justify-content-between align-items-center">
                <div className="col-md-6 small_banner pt-3 pb-3 position-relative">
                    <img src="src/images/catbanner-01.jpg" className='img-fluid rounded-3' alt="catbanner" />
                    <div className="small_banner_content position-absolute">
                      <h4>BEST SALE</h4>
                      <h5>Laptops Max</h5>
                      <p>From $16990.00 OR <br /> $64.62.mo.</p>
                    </div>
                </div>
                <div className="col-md-6 small_banner pt-3 pb-3 position-relative">
                    <img src="src/images/catbanner-02.jpg" className='img-fluid rounded-3' alt="catbanner" />
                    <div className="small_banner_content position-absolute">
                      <h4>NEW ARRIVAL</h4>
                      <h5>Laptops Max</h5>
                      <p>From $16990.00 OR <br /> $64.62.mo.</p>
                    </div>
                </div>
                <div className="col-md-6 small_banner pt-2  position-relative">
                    <img src="src/images/catbanner-03.jpg" className='img-fluid rounded-3' alt="catbanner" />
                    <div className="small_banner_content position-absolute">
                      <h4>BEST SALE</h4>
                      <h5>Laptops Max</h5>
                      <p>From $16990.00 OR <br /> $64.62.mo.</p>
                    </div>
                </div>
                <div className="col-md-6 small_banner pt-2 position-relative">
                    <img src="src/images/catbanner-04.jpg" className='img-fluid rounded-3' alt="catbanner" />
                    <div className="small_banner_content position-absolute">
                      <h4>NEW ARRIVAL</h4>
                      <h5>Laptops Max</h5>
                      <p>From $16990.00 OR <br /> $64.62.mo.</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home_wraper_2 py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="service d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src="src/images/service.png" alt="services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p>From all orders over $100</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="src/images/service-02.png" alt="services" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p>Save up to 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="src/images/service-03.png" alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p>Shop with an export</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="src/images/service-04.png" alt="services" />
                  <div>
                    <h6>Affordable Proces</h6>
                    <p>Get Factory direct price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="src/images/service-05.png" alt="services" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p>100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home_wraper_3 py-5">
        <div className="container-xl">
          <div className="row categories">
            <div className="col-12">
              <div className=" d-flex align-items-center flex-wrap">
                <div className="items d-flex align-items-center justify-content-between">
                  <div className="text">
                    <h6>Music & Gaming</h6>
                    <p>8 items</p>
                  </div>
                  <div className="img">
                    <img src="src/images/camera.jpg" alt="laptop" />
                  </div>
                </div>
                <div className="items d-flex align-items-center justify-content-between">
                  <div className="text">
                    <h6>Computers & Laptop</h6>
                    <p>8 items</p>
                  </div>
                  <div className="img">
                    <img src="src/images/laptop.jpg" alt="laptop" />
                  </div>
                </div>
                <div className="items d-flex align-items-center justify-content-between">
                  <div className="text">
                    <h6>Computers & Laptop</h6>
                    <p>8 items</p>
                  </div>
                  <div className="img">
                    <img src="src/images/laptop.jpg" alt="laptop" />
                  </div>
                </div>
                <div className="items d-flex align-items-center justify-content-between">
                  <div className="text">
                    <h6>Computers & Laptop</h6>
                    <p>8 items</p>
                  </div>
                  <div className="img">
                    <img src="src/images/laptop.jpg" alt="laptop" />
                  </div>
                </div>
                <div className="items d-flex align-items-center justify-content-between">
                  <div className="text">
                    <h6>Computers & Laptop</h6>
                    <p>8 items</p>
                  </div>
                  <div className="img">
                    <img src="src/images/laptop.jpg" alt="laptop" />
                  </div>
                </div>
                <div className="items d-flex align-items-center justify-content-between">
                  <div className="text">
                    <h6>Computers & Laptop</h6>
                    <p>8 items</p>
                  </div>
                  <div className="img">
                    <img src="src/images/laptop.jpg" alt="laptop" />
                  </div>
                </div>
                <div className="items d-flex align-items-center justify-content-between">
                  <div className="text">
                    <h6>Computers & Laptop</h6>
                    <p>8 items</p>
                  </div>
                  <div className="img">
                    <img src="src/images/laptop.jpg" alt="laptop" />
                  </div>
                </div>
                <div className="items d-flex align-items-center justify-content-between">
                  <div className="text">
                    <h6>Computers & Laptop</h6>
                    <p>8 items</p>
                  </div>
                  <div className="img">
                    <img src="src/images/laptop.jpg" alt="laptop" />
                  </div>
                </div>
                <div className="items d-flex align-items-center justify-content-between">
                  <div className="text">
                    <h6>Computers & Laptop</h6>
                    <p>8 items</p>
                  </div>
                  <div className="img">
                    <img src="src/images/laptop.jpg" alt="laptop" />
                  </div>
                </div>
                <div className="items d-flex align-items-center justify-content-between">
                  <div className="text">
                    <h6>Computers & Laptop</h6>
                    <p>8 items</p>
                  </div>
                  <div className="img">
                    <img src="src/images/headphone.jpg" alt="laptop" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="marque-wrapper py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="marquee_inner_wrapper card_wrapper">
                <Marquee className='d-flex'>
                  <div className='mx-4'>
                    <img src="src/images/brand-01.png" alt="brand" />
                  </div>
                  <div className='mx-4'>
                    <img src="src/images/brand-02.png" alt="brand" />
                  </div>
                  <div className='mx-4'>
                    <img src="src/images/brand-03.png" alt="brand" />
                  </div>
                  <div className='mx-4'>
                    <img src="src/images/brand-04.png" alt="brand" />
                  </div>
                  <div className='mx-4'>
                    <img src="src/images/brand-05.png" alt="brand" />
                  </div>
                  <div className='mx-4'>
                    <img src="src/images/brand-06.png" alt="brand" />
                  </div>
                  <div className='mx-4'>
                    <img src="src/images/brand-07.png" alt="brand" />
                  </div>
                  <div className='mx-4'>
                    <img src="src/images/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="feature_wrapper py-5 home_wrapper-2">
        <div className="container-xl">
          <div className="row">
            <div className="cal-12">
              <h4 className='mb-4'>Featured Collection</h4>
            </div>
            <div className="col-3">
              <ProductCard/>
            </div>
            <div className="col-3">
              <ProductCard/>
            </div>
            <div className="col-3">
              <ProductCard/>
            </div>
            <div className="col-3">
              <ProductCard/>
            </div>
        
          </div>
        </div>
      </section>
      <section className="blog_wrapper py-5 home_wrapper-2">
        <div className="container-xl">
          <div className="row">
            <div className="cal-12">
              <h4 className='mb-4'>Our Latest Blogs</h4>
            </div>
            <div className="col-3">
              <BlogCard/>
            </div>
            <div className="col-3">
              <BlogCard/>
            </div>
            <div className="col-3">
              <BlogCard/>
            </div>
            <div className="col-3">
              <BlogCard/>
            </div>
        
          </div>
        </div>
      </section>
    </>
  )
}

export default Home