import { useEffect } from "react";

const WishList = () => {

  useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);
  
  return (
    <div>
      wish list
    </div>
  )
}

export default WishList