import React,{useState} from 'react'
import { Rating } from 'react-simple-star-rating'
import {BsHeart , BsFillSuitHeartFill} from "react-icons/bs"
import { Link } from 'react-router-dom'
const ProductCard = () => {
    const [rating, setRating] = useState(3)

    // Catch Rating value
    const handleRating = (rate) => {
      setRating(rate)
  
      // other logic
    }
    // Optinal callback functions
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value, index) => console.log(value, index)
  return (
    <>
        <Link className="product_card">
            <div className="card rounded border-0 shadow position-relative">
                <div className="wishlist_icon">
                    <Link>
                    <img src="src/images/wish.svg" alt="wishList" />
                    </Link>
                </div>
                <img  src="src/images/watch.jpg" alt="product" className="card-img-top first" />
                <img src="src/images/headphone.jpg" alt="product" className="card-img-top last" />
                <div className="card-body">
                    <p className="brand">Havells</p>
                    <h6 className="title">Kids headphones Bulk 10 Pack Multi Colord For...</h6>
                    <Rating
                        onClick={handleRating}
                        // onPointerEnter={onPointerEnter}
                        // onPointerLeave={onPointerLeave}
                        initialValue={rating}
                        onPointerMove={onPointerMove}
                        allowFraction={true}
                        transition={true}
                        size={20}
                        // showTooltip={true}
                        /* Available Props */
                    />
                    <p className="price">$100.00</p>
                </div>
                <div className="action_bar position-absolute">
                    <div className="d-flex flex-column">
                        <Link>
                            <img src="src/images/prodcompare.svg" alt="add-card" />
                        </Link>
                        <Link>
                            <img src="src/images/view.svg" alt="add-card" />
                        </Link>
                        <Link>
                            <img src="src/images/add-cart.svg" alt="add-card" />
                        </Link>
                    </div>
                </div>
            </div>
        </Link>
    </>
  )
}

export default ProductCard