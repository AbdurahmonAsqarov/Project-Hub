
// import Navbar 
import Navbar from "../../components/Navbar/Navbar"

// import images 
import logo from '../../assets/Header/project.svg'

const Porfolio = () => {
  return (
    <>
      <div className="w-full h-full pt-20 max-md:p-5 flex items-start justify-between gap-16 relative">
          <div className="w-[84vw] max-xl:w-[70vw] max-md:w-[95vw] max-md:mx-auto h-[75vh] max-md:h-[70vh] bg-[#242426] rounded-xl ml-16 max-md:m-0 max-md:p-5"></div>
          <div className="logo w-[180px] max-md:w-full h-[75vh] max-md:m-0 max-md:hidden">
            <img src={logo} alt="Bu yerda rasm bor!" className="object-cover pr-16"/>
          </div>
      </div>  
      <div className="navbar absolute bottom-0 left-[50%] max-md:left-[63%] translate-x-[-65%] max-md:translate-none">
          <Navbar />
      </div>  
    </>
  )
}

export default Porfolio