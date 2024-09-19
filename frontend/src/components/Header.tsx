import { Link } from "react-router-dom";
import logo from "../assets/hotelLogo/Group 5 (2).png";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";
import '../index.css';
const Header = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <div className="bg-[#5F3900] py-2  ">
        <div className="container mx-auto flex justify-between">
            <span>
                <Link to="/"><img className="h-20 w-44" src={logo}/></Link>
            </span>
            
            
            <span className="flex space-x-2">
            {isLoggedIn ? (
            <>
              <Link
                className="flex fontu items-center text-[#FF9900] px-3 font-bold hover:text-[#FFCC7F]"
                to="/my-bookings"
              >
                My Bookings
              </Link>
              <Link
                className="flex fontu items-center text-[#FF9900] px-3 font-bold hover:text-[#FFCC7F]"
                to="/my-hotels"
              >
                My Hotels
              </Link>
              <SignOutButton />
            </>
          ) : (
                <Link to="/sign-in" className=" fontu flex items-center text-[#FF9900] px-3 font-bold hover:text-[#FFCC7F] hover:tracking-widest transition-all duration-300 ">
                Sign In
                </Link>
                )}
            </span>

        </div>
      
    </div>
  )
}

export default Header
