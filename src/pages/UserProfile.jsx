import { useEffect } from "react";


const UserProfile = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div>UserProfile</div>
  )
}

export default UserProfile