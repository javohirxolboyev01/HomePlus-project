import React from 'react'
import { CiHeart } from 'react-icons/ci';
import { useSelector } from 'react-redux'


const SelectedWishlist = () => {
    const wishlist =useSelector(state=>state.wishlist.wishlist)
    console.log(wishlist);
    
  return (
    <div>
      <h1>Wishlist</h1>
      <div className=" mt-4 conatiner mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-2">
            {wishlist.map((item) => (
              <div key={item.id} className="border-2">
                <img
                  src={item.thumbnail}
                  />
                <h1 className="font-semibold text-2xl text-center">{item.title}</h1>
                <CiHeart/>
              </div>
            ))}
            
            </div>
    </div>
  )
}

export default SelectedWishlist
