
// import images
import home from '../../assets/Navbar/home.svg'
import Service from '../../assets/Navbar/Service.svg'
import address from '../../assets/Navbar/address.svg'
import board from '../../assets/Navbar/board.svg'
import group from '../../assets/Navbar/group.svg'
import lawyer from '../../assets/Navbar/lavyer.svg'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="w-[500px] max-md:w-[90vw] bg-[#198277] flex justify-between rounded-t-lg px-8 max-md:px-3">
        <NavLink to="" className='flex flex-col items-center text-[#FFFFFF] py-3'>
            <img src={home} alt="Bu yerda rasm bor!" className='w-[40px] h-[40px] max-sm:w-[30px] max-sm:h-[30px]'/>
            <h1 className='max-sm:text-[12px]'>Home</h1>
        </NavLink>
        <NavLink to="" className='flex flex-col items-center text-[#FFFFFF] py-3'>
            <img src={Service} alt="Bu yerda rasm bor!" className='w-[40px] h-[40px] max-sm:w-[30px] max-sm:h-[30px]'/>
            <h1 className='max-sm:text-[12px]'>Services</h1>
        </NavLink>
        <NavLink to="" className='flex flex-col items-center text-[#FFFFFF] py-3'>
            <img src={address} alt="Bu yerda rasm bor!" className='w-[40px] h-[40px] max-sm:w-[30px] max-sm:h-[30px]'/>
            <h1 className='max-sm:text-[12px]'>Message</h1>
        </NavLink>
        <NavLink to="" className='flex flex-col items-center text-[#FFFFFF] py-3'>
            <img src={board} alt="Bu yerda rasm bor!" className='w-[40px] h-[40px] max-sm:w-[30px] max-sm:h-[30px]'/>
            <h1 className='max-sm:text-[12px]'>Portfolio</h1>
        </NavLink>
        <NavLink to="" className='flex flex-col items-center text-[#FFFFFF] py-3'>
            <img src={group} alt="Bu yerda rasm bor!" className='w-[40px] h-[40px] max-sm:w-[30px] max-sm:h-[30px]'/>
            <h1 className='max-sm:text-[12px]'>Team</h1>
        </NavLink>
        <NavLink to="" className='flex flex-col items-center text-[#FFFFFF] py-3'>
            <img src={lawyer} alt="Bu yerda rasm bor!" className='w-[40px] h-[40px] max-sm:w-[30px] max-sm:h-[30px]'/>
            <h1 className='max-sm:text-[12px]'>Vacancy</h1>
        </NavLink>
    </div>
  )
}

export default Navbar