import React from 'react'
import {Link} from "react-router-dom"
const BlogCard = () => {
  return (
    <>
        <div className="blog_card">
            <div className="card border-0 shadow overflow-hidden">
                <img src="src/images/blog-1.jpg" alt="blog" className='card-img-top' />
                <div className="card-body">
                    <p className="muted">11 JUNE, 2023</p>
                    <h6>A Beautiful Sunday Morning Renaissance</h6>
                    <p className="muted mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat consectetur</p>
                    <Link to="" className="btn btn-sm button">READ MORE</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default BlogCard