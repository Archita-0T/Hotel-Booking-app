import { Link } from "react-router-dom";
import logo from "../assets/hotelLogo/Group 5 (2).png";
const Footer = () => {
  return (
    <div className="bg-[#5F3900] py-2">
        <div className="container mx-auto flex justify-between items-center">
            <span><Link to="/"><img className="h-20 w-44" src={logo}/></Link></span>
            <span className="text-[#FF9900] font-bold tracking-tight flex gap-4">
                <p className="cursor-pointer">Privacy Policy</p>
                <p className="cursor-pointer">Terms of Service</p>
            </span>

        </div>
      
    </div>
  )
}

export default Footer
