// import Navbar 
import Navbar from "../Navbar/Navbar"

// import images 
import logo from '../../assets/Header/project.svg'
import { Home } from "../../page/Home/Home"

const HubComponents = () => {
  return (
    <>
      <div className="w-full h-full pt-20 flex items-start justify-between gap-16 max-md:flex-col-reverse relative">
          <div className="w-[84vw] max-xl:w-[70vw] h-[75vh] bg-[#242426] rounded-xl ml-16 max-md:m-0">
        
          </div>
          <div className="logo w-[180px] max-md:w-full h-[75vh] max-md:m-0">
            <img src={logo} alt="Bu yerda rasm bor!" className="object-cover pr-20"/>
          </div>
      </div>  
      <div className="navbar absolute bottom-0 left-[50%] max-md:left-[63%] translate-x-[-65%] max-md:translate-none">
          <Navbar />
      </div>  
    </>    
  )
}

export default HubComponents