import { Link, Outlet } from "react-router-dom";

export default function SubpageLayout(){
  return (
    
    <div>
      {/* this create the back to home element on every page */}
      <Link to="/">
        Back to home
      </Link>
      <div>
        <Outlet />
      </div>
    </div>
  )
}